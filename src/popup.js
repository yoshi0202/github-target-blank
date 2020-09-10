import { createPromiseArray } from "./assets/util";

class Popup {
  constructor() {
    this.promiseArr = createPromiseArray();
  }

  async main() {
    const promiseRes = await Promise.all(this.promiseArr);
    for (const i of promiseRes) {
      /* localStorageから取得したオブジェクトのキーを保存 */
      const key = Object.keys(i)[0];
      const element = document.getElementById(key);
      element.checked = i[key];
      element.addEventListener("change", function (e) {
        /* チェンジイベントの内容をbackgroundに送信してlocalStorageの値を更新 */
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
  }
}

window.onload = function () {
  const popup = new Popup();
  popup.main();
};
