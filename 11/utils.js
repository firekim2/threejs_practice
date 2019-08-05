"use strict";
var UTILS = UTILS || {};
UTILS.MATH = UTILS.MATH || {}, UTILS.MATH = function() {
    var n = function() {};
    return n.random = function(n, r) {
        return "number" != typeof r ? Math.random() : ("number" != typeof n && (n = 0), Math.random() * (r - n) + n)
    }, n.clamp = function(n, r, t) {
        return "number" != typeof r && (r = 0), n > t ? t : n < r ? r : n
    }, n
}();
