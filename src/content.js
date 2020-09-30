import { createPromiseArray } from "./assets/util";
import { selectorParams, observerSettings } from "./assets/const";

class Content {
  constructor() {
    this.promiseArr = createPromiseArray();
    this.observer = this.createMutationObserver();
    this.createMutationObject();
    this.createDetailToggleEvt();
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
    for (const o of observerSettings.selector) {
      let target = document.querySelector(o);
      if (target) {
        this.observer.observe(target, observerSettings.config);
      }
    }
  }

  createMutationObserver() {
    return new MutationObserver(() => {
      this.main();
    });
  }
  createDetailToggleEvt() {
    const target = document.querySelector(
      ".commit-build-statuses.details-overlay.details-reset.js-dropdown-details.hx_dropdown-fullscreen"
    );
    if (target) {
      target.addEventListener("toggle", function (e) {
        this.main();
      });
    }
  }
}

window.onload = function () {
  const content = new Content();
  content.main();
};
