import { selectorParams } from "./const";
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

function createPromiseArray() {
  const promiseArr = [];
  for (const i in selectorParams) {
    promiseArr.push(getLocalStorageData(i));
  }
  return promiseArr;
}

export { getLocalStorageData, createPromiseArray };
