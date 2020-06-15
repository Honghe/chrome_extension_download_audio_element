// https://stackoverflow.com/questions/13359421/chrome-extension-get-current-tab-from-popup
var query = { active: true, currentWindow: true };
function callback(activeTabs) {
    console.log(activeTabs[0].id);
    chrome.tabs.sendMessage(activeTabs[0].id, { action: 'executeCode' });
}

  
function clickHandler(e) {
    console.log('click');
    chrome.tabs.query(query, callback);

}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('click-me').addEventListener('click', clickHandler);
});