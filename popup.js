const inputList = document.querySelectorAll("input");
for (i of inputList) {
  i.addEventListener("change", function (e) {
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
