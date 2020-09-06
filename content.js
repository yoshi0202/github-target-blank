// Pull Request navbar
const prTabs = document.querySelectorAll("a.tabnav-tab");
const prTabsObject = createElementObject(prTabs);
createAddEventListenner(prTabsObject);

// Repository navbar
const repositoryNavbars = document.querySelectorAll(
  "a.js-responsive-underlinenav-item"
);
const repositoryNavbarsObject = createElementObject(repositoryNavbars);
createAddEventListenner(repositoryNavbarsObject);

// Conversation links
const conversationLinks = document.querySelectorAll(".markdown-body p a");
const conversationLinksObject = createElementObject(conversationLinks);
createAddEventListenner(conversationLinksObject);

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
