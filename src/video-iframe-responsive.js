'use strict';

(function () {

    var supportedVideos = [
        'youtube.com',
        'vimeo.com',
        'vbox7.com'
    ];
    var supportedVideosSelector = '';

    for (var i = 0; i < supportedVideos.length; i++) {
        supportedVideosSelector += 'iframe[src*="' + supportedVideos[i] + '"]';
        if (i < supportedVideos.length - 1) {
            supportedVideosSelector += ',';
        }
    }

    var collection = document.querySelectorAll(supportedVideosSelector);

    if (collection.length > 0) {
        for (var j = 0; j < collection.length; j++) {
            var parent = collection[j].parentNode;
            var div = document.createElement("div");
            div.className = "vir-videowrapper";
            parent.appendChild(div);
            div.appendChild(collection[j]);
        }
    }
})();