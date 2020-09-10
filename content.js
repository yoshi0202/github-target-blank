const promiseArr = [];
const selectorParams = {
  pullRequest: "a.tabnav-tab", // Pull Request navbar
  repositoryNavbar: "a.js-responsive-underlinenav-item", // Repository navbar
  conversationLinks: ".markdown-body p a", // Conversation links
};

promiseArr.push(getLocalStorageData("pullRequest"));
promiseArr.push(getLocalStorageData("repositoryNavbar"));
promiseArr.push(getLocalStorageData("conversationLinks"));

Promise.all(promiseArr).then(function (promiseRes) {
  // localStorageに保存されている有効な設定のみEventListenerを設定する
  for (i of promiseRes) {
    const key = Object.keys(i)[0];
    if (!i[key]) continue;
    console.log("true");
    let object = createElementObject(
      document.querySelectorAll(selectorParams[key])
    );
    createAddEventListenner(object);
  }
});
function createAddEventListenner(object) {
  for (url in object) {
    object[url].url = url;
    object[url].addEventListener("click", function (e) {
      const evt = new MouseEvent("click", {
        metaKey: true,
      });
      const a = document.createElement("a");
      a.href = e.currentTarget.url;
      a.dispatchEvent(evt);
      e.preventDefault();
    });
  }
}

function createElementObject(elements) {
  const obj = {};
  for (element of elements) {
    if (!element.href) continue;
    obj[element.href] = element;
  }
  return obj;
}

function getLocalStorageData(key) {
  return new Promise(function (res, rej) {
    chrome.runtime.sendMessage({ method: "getItem", key: key }, function (
      response
    ) {
      // キーを元にオブジェクトを作成しtrue or false を返却
      res({
        [key]: response.data,
      });
    });
  });
}
