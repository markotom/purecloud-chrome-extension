
document.addEventListener('DOMContentLoaded', function () {
  var openScriptButton = document.getElementById('openScriptButton')
  openScriptButton.addEventListener('click', function () {
    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.executeScript(null, { file: 'jquery.min.js' }, function () {
        chrome.tabs.executeScript(null, { file: 'extend-script.js' })
      })
    })
  }, false)
}, false)
