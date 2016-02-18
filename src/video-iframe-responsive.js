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
        for (var ii = 0; ii < collection.length; ii++) {
            var parent = collection[ii].parentNode;
            var div = document.createElement("div");
            div.className = "vir-videowrapper";
            parent.appendChild(div);
            div.appendChild(collection[i]);
        }
    }

})();