// Create some radio items.
function radioOnClick(info, tab) {
    console.log("radio item " + info.menuItemId +
        " was clicked (previous checked state was " +
        info.wasChecked + ")");
}
var radioCopy = chrome.contextMenus.create({
    "title": "Copy with URL", "type": "radio",
    "onclick": radioOnClick
});
var radioCopyNoQS = chrome.contextMenus.create({
    "title": "Copy with URL minus query strings", "type": "radio",
    "onclick": radioOnClick
});