console.log("adfasdf");
var a = 0;
var set = {};
chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
  //console.log(JSON.stringify(details));
  if ((details.url.indexOf("cc.stream.qqmusic.qq.com") != -1) && (! (details.url in set))) {
    // console.log(details.url);
    chrome.downloads.download({url: details.url, filename: (a ++).toString() + ".mp4", saveAs: false}, null);
    set[details.url] = true;
  }
},
{urls: [ "<all_urls>" ]},['requestHeaders','blocking']);