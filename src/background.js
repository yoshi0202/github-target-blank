import { extensionHostName, selectorParams } from "./assets/const";

class Background {
  constructor() {
    this.chromeMessageListener();
    this.chromeInstallListener();
    this.chromeRulesFunction();
  }
  chromeInstallListener() {
    chrome.runtime.onInstalled.addListener(function () {
      for (const key in selectorParams) {
        localStorage.setItem(key, "true");
      }
    });
  }
  chromeRulesFunction() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
      chrome.declarativeContent.onPageChanged.addRules([
        {
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { hostEquals: extensionHostName },
            }),
          ],
          actions: [new chrome.declarativeContent.ShowPageAction()],
        },
      ]);
    });
  }
  chromeMessageListener() {
    chrome.runtime.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      switch (request.method) {
        case "getLength": // 保存されているデータ数を取得
          sendResponse({ data: localStorage.length });
          break;
        case "getKeyName": // 指定されたn番目のkey名を取得
          sendResponse({ data: localStorage.key(request.number) });
          break;
        case "getItem": // 指定されたkeyの値を取得
          sendResponse({ data: JSON.parse(localStorage.getItem(request.key)) });
          break;
        case "setItem": // 指定されたkeyと値を保存（更新）
          sendResponse({
            data: localStorage.setItem(request.key, request.value),
          });
          break;
        case "removeItem": // 指定されたkeyの値を削除
          sendResponse({ data: localStorage.removeItem[request.key] });
          break;
        case "clearAll": //　すべてのデータを削除
          sendResponse({ data: localStorage.clear() });
          break;
        default:
          console.log("no method");
          break;
      }
    });
  }
}

const background = new Background();