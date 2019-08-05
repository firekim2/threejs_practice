/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas-canvastext-requestanimationframe-svg-touchevents-webgl-webglextensions-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
! function(e, n, t) {
    function r(e, n) {
        return typeof e === n
    }

    function o() {
        var e, n, t, o, i, s, a;
        for (var u in w)
            if (w.hasOwnProperty(u)) {
                if (e = [], n = w[u], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), C.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function i(e) {
        var n = _.className,
            t = Modernizr._config.classPrefix || "";
        if (S && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), S ? _.className.baseVal = n : _.className = n)
    }

    function s(e, n) {
        if ("object" == typeof e)
            for (var t in e) P(e, t) && s(t, e[t]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                o = Modernizr[r[0]];
            if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
            n = "function" == typeof n ? n() : n, 1 == r.length ? Modernizr[r[0]] = n : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = n), i([(n && 0 != n ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, n)
        }
        return Modernizr
    }

    function a() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function u(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function f(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function l() {
        var e = n.body;
        return e || (e = a(S ? "svg" : "body"), e.fake = !0), e
    }

    function c(e, t, r, o) {
        var i, s, u, f, c = "modernizr",
            d = a("div"),
            p = l();
        if (parseInt(r, 10))
            for (; r--;) u = a("div"), u.id = o ? o[r] : c + (r + 1), d.appendChild(u);
        return i = a("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = _.style.overflow, _.style.overflow = "hidden", _.appendChild(p)), s = t(d, e), p.fake ? (p.parentNode.removeChild(p), _.style.overflow = f, _.offsetHeight) : d.parentNode.removeChild(d), !!s
    }

    function d(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function p(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(f(n[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + f(n[o]) + ":" + r + ")");
            return i = i.join(" or "), c("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return t
    }

    function v(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function m(e, n, t) {
        var o;
        for (var i in e)
            if (e[i] in n) return t === !1 ? e[i] : (o = n[e[i]], r(o, "function") ? v(o, t || n) : o);
        return !1
    }

    function g(e, n, o, i) {
        function s() {
            l && (delete R.style, delete R.modElem)
        }
        if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
            var f = p(e, o);
            if (!r(f, "undefined")) return f
        }
        for (var l, c, v, m, g, h = ["modernizr", "tspan", "samp"]; !R.style && h.length;) l = !0, R.modElem = a(h.shift()), R.style = R.modElem.style;
        for (v = e.length, c = 0; v > c; c++)
            if (m = e[c], g = R.style[m], d(m, "-") && (m = u(m)), R.style[m] !== t) {
                if (i || r(o, "undefined")) return s(), "pfx" == n ? m : !0;
                try {
                    R.style[m] = o
                } catch (y) {}
                if (R.style[m] != g) return s(), "pfx" == n ? m : !0
            } return s(), !1
    }

    function h(e, n, t, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + z.join(s + " ") + s).split(" ");
        return r(n, "string") || r(n, "undefined") ? g(a, n, o, i) : (a = (e + " " + E.join(s + " ") + s).split(" "), m(a, n, t))
    }

    function y(e, n, r) {
        return h(e, t, t, n, r)
    }
    var C = [],
        w = [],
        x = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                w.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                w.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = x, Modernizr = new Modernizr, Modernizr.addTest("svg", !!n.createElementNS && !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var b = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    x._prefixes = b;
    var _ = n.documentElement,
        S = "svg" === _.nodeName.toLowerCase(),
        T = "Moz O ms Webkit",
        E = x._config.usePrefixes ? T.toLowerCase().split(" ") : [];
    x._domPrefixes = E;
    var P;
    ! function() {
        var e = {}.hasOwnProperty;
        P = r(e, "undefined") || r(e.call, "undefined") ? function(e, n) {
            return n in e && r(e.constructor.prototype[n], "undefined")
        } : function(n, t) {
            return e.call(n, t)
        }
    }(), x._l = {}, x.on = function(e, n) {
        this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, x._trigger = function(e, n) {
        if (this._l[e]) {
            var t = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < t.length; e++)(r = t[e])(n)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        x.addTest = s
    });
    var z = x._config.usePrefixes ? T.split(" ") : [];
    x._cssomPrefixes = z;
    var j = function(n) {
        var r, o = b.length,
            i = e.CSSRule;
        if ("undefined" == typeof i) return t;
        if (!n) return !1;
        if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + n;
        for (var s = 0; o > s; s++) {
            var a = b[s],
                u = a.toUpperCase() + "_" + r;
            if (u in i) return "@-" + a.toLowerCase() + "-" + n
        }
        return !1
    };
    x.atRule = j;
    var A = function() {
        function e(e, n) {
            var o;
            return e ? (n && "string" != typeof n || (n = a(n || "div")), e = "on" + e, o = e in n, !o && r && (n.setAttribute || (n = a("div")), n.setAttribute(e, ""), o = "function" == typeof n[e], n[e] !== t && (n[e] = t), n.removeAttribute(e)), o) : !1
        }
        var r = !("onblur" in n.documentElement);
        return e
    }();
    x.hasEvent = A;
    var N = function(e, n) {
        var t = !1,
            r = a("div"),
            o = r.style;
        if (e in o) {
            var i = E.length;
            for (o[e] = n, t = o[e]; i-- && !t;) o[e] = "-" + E[i] + "-" + n, t = o[e]
        }
        return "" === t && (t = !1), t
    };
    x.prefixedCSSValue = N, Modernizr.addTest("canvas", function() {
        var e = a("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("canvastext", function() {
        return Modernizr.canvas === !1 ? !1 : "function" == typeof a("canvas").getContext("2d").fillText
    }), Modernizr.addTest("webgl", function() {
        var n = a("canvas"),
            t = "probablySupportsContext" in n ? "probablySupportsContext" : "supportsContext";
        return t in n ? n[t]("webgl") || n[t]("experimental-webgl") : "WebGLRenderingContext" in e
    }), Modernizr.addAsyncTest(function() {
        if (Modernizr.webglextensions = new Boolean(!1), Modernizr.webgl) {
            var e, n, r;
            try {
                e = a("canvas"), n = e.getContext("webgl") || e.getContext("experimental-webgl"), r = n.getSupportedExtensions()
            } catch (o) {
                return
            }
            n !== t && (Modernizr.webglextensions = new Boolean(!0));
            for (var i = -1, s = r.length; ++i < s;) Modernizr.webglextensions[r[i]] = !0;
            e = t
        }
    });
    var q = function() {
        var n = e.matchMedia || e.msMatchMedia;
        return n ? function(e) {
            var t = n(e);
            return t && t.matches || !1
        } : function(n) {
            var t = !1;
            return c("@media " + n + " { #modernizr { position: absolute; } }", function(n) {
                t = "absolute" == (e.getComputedStyle ? e.getComputedStyle(n, null) : n.currentStyle).position
            }), t
        }
    }();
    x.mq = q;
    var L = x.testStyles = c;
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else {
            var r = ["@media (", b.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            L(r, function(e) {
                t = 9 === e.offsetTop
            })
        }
        return t
    });
    var O = {
        elem: a("modernizr")
    };
    Modernizr._q.push(function() {
        delete O.elem
    });
    var R = {
        style: O.elem.style
    };
    Modernizr._q.unshift(function() {
        delete R.style
    });
    x.testProp = function(e, n, r) {
        return g([e], t, n, r)
    };
    x.testAllProps = h;
    var k = x.prefixed = function(e, n, t) {
        return 0 === e.indexOf("@") ? j(e) : (-1 != e.indexOf("-") && (e = u(e)), n ? h(e, n, t) : h(e, "pfx"))
    };
    x.prefixedCSS = function(e) {
        var n = k(e);
        return n && f(n)
    };
    Modernizr.addTest("requestanimationframe", !!k("requestAnimationFrame", e), {
        aliases: ["raf"]
    }), x.testAllProps = y, o(), i(C), delete x.addTest, delete x.addAsyncTest;
    for (var B = 0; B < Modernizr._q.length; B++) Modernizr._q[B]();
    e.Modernizr = Modernizr
}(window, document);
