function appendURL( text , is_no_query_string ) {
    // TODO find way to get source page's URL not the generated background page
    var page_url = document.URL + "?abc=def,tuv=xyz"

    // Strip off query string
    if ( is_no_query_string ) {
        var qs_idx = page_url.indexOf('?');
        var page_url = page_url.substring(0, qs_idx);
    }
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