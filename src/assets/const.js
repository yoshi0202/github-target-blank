const selectorParams = {
  pullRequest: "a.tabnav-tab", // Pull Request navbar
  repositoryNavbar: "a.js-responsive-underlinenav-item", // Repository navbar
  conversationLinks: ".markdown-body p a", // Conversation links
  commitLink: "code .link-gray", // commitLink(gray-link)
  ciLinks: ".status-actions", // ciLinks
};

const observerSettings = {
  selector: ["#js-repo-pjax-container"],
  config: {
    childList: true,
  },
};

const extensionHostName = "github.com";

export { selectorParams, observerSettings, extensionHostName };
