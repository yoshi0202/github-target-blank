const selectorParams = {
  pullRequest: "a.tabnav-tab", // Pull Request navbar
  repositoryNavbar: "a.js-responsive-underlinenav-item", // Repository navbar
  conversationLinks: ".markdown-body p a", // Conversation links
};

const observerSettings = {
  selector: "js-repo-pjax-container",
  config: {
    childList: true,
  },
};

export { selectorParams, observerSettings };
