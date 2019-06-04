function appendURL( text , is_no_query_string ) {
    // TODO find way to get source page's URL not the generated background page
    var page_url = document.URL 

    // TODO truncate query string

    return text + "\n" + page_url;
}

// Copy with URL Only
chrome.contextMenus.create({
    title: "Copy with URL",
    contexts:["selection"], 
    onclick: function(info, tab) {
        var copyText = appendURL( info.selectionText , false )
        console.log( copyText );
    }
});

// Copy with URL minus Query String
chrome.contextMenus.create({
    title: "Copy with URL minus query string",
    contexts:["selection"], 
    onclick: function(info, tab) {
        var copyText = appendURL( info.selectionText , true )
        console.log( copyText );
    }
});