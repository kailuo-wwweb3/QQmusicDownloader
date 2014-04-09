// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens!
 *
 * @type {string}
 */



// chrome.downloads.download({
//   url: "http://cc.stream.qqmusic.qq.com/C200002FeRV83xqPdR.m4a?vkey=DA4D16BEC42D51112651410176A03C2B8A51CC4C06291AE84552F3A1EADCB71B&guid=4497189602&fromtag=0",
//   filename: "test.mp4",
//   saveAs: true
// }, null);

var callback = function(details) {
  console.log(details.url);
};


chrome.webRequest.onBeforeRequest.addListener(callback, {urls: ["<all_urls"]}, null);