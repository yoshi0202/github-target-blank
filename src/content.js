import { createPromiseArray } from "./assets/util";
import { selectorParams, observerSettings } from "./assets/const";

class Content {
  constructor() {
    this.promiseArr = createPromiseArray();
    this.createMutationObject();
  }
  async main() {
    const promiseRes = await Promise.all(this.promiseArr);
    /* localStorageに保存されている有効な設定のみEventListenerを設定する */
    for (const i of promiseRes) {
      const key = Object.keys(i)[0];
      if (!i[key]) continue;
      let arr = this.createElementObject(
        document.querySelectorAll(selectorParams[key])
      );
      this.createAddEventListenner(arr);
    }
  }

  createAddEventListenner(arr) {
    for (const object of arr) {
      object.element.url = object.url;
      const listenerFunction = function (e) {
        const evt = new MouseEvent("click", {
          metaKey: true, // MacOS
          ctrlKey: true, // WindowsOS
        });
        const a = document.createElement("a");
        a.href = e.currentTarget.url;
        a.dispatchEvent(evt);
        e.preventDefault();
      };
      object.element.removeEventListener("click", listenerFunction);
      object.element.addEventListener("click", listenerFunction);
    }
  }

  createElementObject(elements) {
    const arr = [];
    for (const element of elements) {
      if (!element.href) continue;
      const obj = {
        element: element,
        url: element.href,
      };
      arr.push(obj);
    }
    return arr;
  }

  createMutationObject() {
    const target = document.getElementById(observerSettings.selector);
    if (target) {
      const observer = new MutationObserver((mutations) => {
        this.main();
      });
      observer.observe(target, observerSettings.config);
    }
  }
}

window.onload = function () {
  const content = new Content();
  content.main();
};
