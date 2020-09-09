const promiseArr = [];
const selectorParams = {
  prTabs: "a.tabnav-tab", // Pull Request navbar
  repositoryNavbars: "a.js-responsive-underlinenav-item", // Repository navbar
  conversationLinks: ".markdown-body p a", // Conversation links
};

promiseArr.push(getLocalStorageData("pullRequest"));
promiseArr.push(getLocalStorageData("repositoryNavbar"));
promiseArr.push(getLocalStorageData("conversationLinks"));

Promise.all(promiseArr).then(function (res) {
  // localStorageに保存されている有効な設定のみEventListenerを設定する
  for (value of res) {
    if (value) continue;
  }
  console.log(res);
  for (key in selectorParams) {
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
      res(response.data);
    });
  });
}
