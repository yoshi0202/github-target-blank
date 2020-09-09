const promiseArr = [];
const inputList = document.querySelectorAll("input");

promiseArr.push(getLocalStorageData("pullRequest"));
promiseArr.push(getLocalStorageData("repositoryNavbar"));
promiseArr.push(getLocalStorageData("conversationLinks"));

Promise.all(promiseArr).then(function (promiseRes) {
  for (i in inputList) {
    console.log(inputList[i].id);
    console.log(promiseRes[i]);
    console.log(promiseRes[i][inputList[i].id]);
    inputList[i].checked = promiseRes[i][inputList[i]];
    inputList[i].addEventListener("change", function (e) {
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
});
// for (i of inputList) {
//   chrome.runtime.sendMessage({ method: "getItem", key: i.id }, function (res) {
//     i.checked = res.data;
//     i.addEventListener("change", function (e) {
//       console.log(e);
//       chrome.runtime.sendMessage(
//         { method: "setItem", key: e.target.name, value: e.target.checked },
//         function (response) {
//           if (response.data) {
//             console.log(response.data);
//           }
//         }
//       );
//     });
//   });
// }

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
