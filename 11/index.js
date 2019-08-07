"use strict";
$(function() {
    Modernizr.touchevents && RzmSrcMap.isSp(!0);
    $("#main-visual").on("inview", function(i, n, e, c) {
        n ? RzmSrcMap.resume() : RzmSrcMap.pause()
    })
});
