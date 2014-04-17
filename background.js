var a = 0;
var set = {};

var fetchFileName = function (url) {
  var hostName = "cc.stream.qqmusic.qq.com/";
  var startingIndex = url.indexOf(hostName) + hostName.length;
  var endingIndex = url.indexOf(".m4a?");
  return url.slice(startingIndex, endingIndex) + ".mp4";
};


// chrome.storage.sync.set({"C200004HhymO4eMC41.mp4": 1});


chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
  var fileName = fetchFileName(details.url);
  if ((details.url.indexOf("cc.stream.qqmusic.qq.com") != -1) && (! (details.url in set))) {
    console.log("adf");
    chrome.storage.sync.get(fileName, function(value) {
      console.log(value.length);
      if (value[fileName] == null) {
        chrome.downloads.download({url: details.url, filename: "musics/" + fileName}, null);
        chrome.storage.sync.set({fileName: 1});
      } else {
        chrome.storage.sync.set({fileName: value + 1});
      }
    });
    set[details.url] = true;
  }
},
{urls: [ "<all_urls>" ]},['requestHeaders','blocking']);