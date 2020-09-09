const promiseArr = [];

promiseArr.push(getLocalStorageData("pullRequest"));
promiseArr.push(getLocalStorageData("repositoryNavbar"));
promiseArr.push(getLocalStorageData("conversationLinks"));

Promise.all(promiseArr).then(function (promiseRes) {
  for (i of promiseRes) {
    // localStorageから取得したオブジェクトのキーを保存
    const key = Object.keys(i)[0];
    const element = document.getElementById(key);
    element.checked = i[key];
    element.addEventListener("change", function (e) {
      // チェンジイベントの内容をbackgroundに送信してlocalStorageの値を更新
      chrome.runtime.sendMessage(
        { method: "setItem", key: e.target.name, value: e.target.checked },
        function (response) {
          if (response.data) {
            console.log(response.data);
          }
        }
      );
    });
  }
});

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
