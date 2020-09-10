import { createPromiseArray } from "./assets/util";
import { selectorParams } from "./assets/const";

class Content {
  constructor() {
    this.promiseArr = createPromiseArray();
  }
  async main() {
    const promiseRes = await Promise.all(this.promiseArr);
    /* localStorageに保存されている有効な設定のみEventListenerを設定する */
    for (const i of promiseRes) {
      const key = Object.keys(i)[0];
      if (!i[key]) continue;
      let object = this.createElementObject(
        document.querySelectorAll(selectorParams[key])
      );
      this.createAddEventListenner(object);
    }
  }

  createAddEventListenner(object) {
    for (const url in object) {
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

  createElementObject(elements) {
    const obj = {};
    for (const element of elements) {
      if (!element.href) continue;
      obj[element.href] = element;
    }
    return obj;
  }
}

window.onload = function () {
  const content = new Content();
  content.main();
};
