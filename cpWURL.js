function copyWithURL( info , is_strip_query_string ) {
    var page_url = info.pageUrl + "?abc=def,tuv=xyz"

    // Strip off query string
    if ( is_strip_query_string ) {
        var qs_idx = page_url.indexOf('?');
        var page_url = page_url.substring(0, qs_idx);
    }

    // Append URL to text selection
    var copyText = info.selectionText + "\n" + page_url;
    console.log( copyText );
}

// Copy with URL Only
chrome.contextMenus.create({
    title: "Copy with URL",
    contexts:["selection"], 
    onclick: function(info, tab) {
        copyWithURL( info, false )
    }
});

// Copy with URL minus Query String
chrome.contextMenus.create({
    title: "Copy with URL minus query string",
    contexts:["selection"], 
    onclick: function(info, tab) {
        copyWithURL( info, true )
    }
});