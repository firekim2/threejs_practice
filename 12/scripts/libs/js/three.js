"use strict";
var THREE = {
    REVISION: "79"
};
"function" == typeof define && define.amd ? define("three", THREE) : "undefined" != typeof exports && "undefined" != typeof module && (module.exports = THREE), void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Math.sign && (Math.sign = function(e) {
        return 0 > e ? -1 : e > 0 ? 1 : +e
    }), void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
        }
    }), void 0 === Object.assign && function() {
        Object.assign = function(e) {
            if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), i = 1; i < arguments.length; i++) {
                var r = arguments[i];
                if (void 0 !== r && null !== r)
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }
    }(), Object.assign(THREE, {
        MOUSE: {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        },
        CullFaceNone: 0,
        CullFaceBack: 1,
        CullFaceFront: 2,
        CullFaceFrontBack: 3,
        FrontFaceDirectionCW: 0,
        FrontFaceDirectionCCW: 1,
        BasicShadowMap: 0,
        PCFShadowMap: 1,
        PCFSoftShadowMap: 2,
        FrontSide: 0,
        BackSide: 1,
        DoubleSide: 2,
        FlatShading: 1,
        SmoothShading: 2,
        NoColors: 0,
        FaceColors: 1,
        VertexColors: 2,
        NoBlending: 0,
        NormalBlending: 1,
        AdditiveBlending: 2,
        SubtractiveBlending: 3,
        MultiplyBlending: 4,
        CustomBlending: 5,
        AddEquation: 100,
        SubtractEquation: 101,
        ReverseSubtractEquation: 102,
        MinEquation: 103,
        MaxEquation: 104,
        ZeroFactor: 200,
        OneFactor: 201,
        SrcColorFactor: 202,
        OneMinusSrcColorFactor: 203,
        SrcAlphaFactor: 204,
        OneMinusSrcAlphaFactor: 205,
        DstAlphaFactor: 206,
        OneMinusDstAlphaFactor: 207,
        DstColorFactor: 208,
        OneMinusDstColorFactor: 209,
        SrcAlphaSaturateFactor: 210,
        NeverDepth: 0,
        AlwaysDepth: 1,
        LessDepth: 2,
        LessEqualDepth: 3,
        EqualDepth: 4,
        GreaterEqualDepth: 5,
        GreaterDepth: 6,
        NotEqualDepth: 7,
        MultiplyOperation: 0,
        MixOperation: 1,
        AddOperation: 2,
        NoToneMapping: 0,
        LinearToneMapping: 1,
        ReinhardToneMapping: 2,
        Uncharted2ToneMapping: 3,
        CineonToneMapping: 4,
        UVMapping: 300,
        CubeReflectionMapping: 301,
        CubeRefractionMapping: 302,
        EquirectangularReflectionMapping: 303,
        EquirectangularRefractionMapping: 304,
        SphericalReflectionMapping: 305,
        CubeUVReflectionMapping: 306,
        CubeUVRefractionMapping: 307,
        RepeatWrapping: 1e3,
        ClampToEdgeWrapping: 1001,
        MirroredRepeatWrapping: 1002,
        NearestFilter: 1003,
        NearestMipMapNearestFilter: 1004,
        NearestMipMapLinearFilter: 1005,
        LinearFilter: 1006,
        LinearMipMapNearestFilter: 1007,
        LinearMipMapLinearFilter: 1008,
        UnsignedByteType: 1009,
        ByteType: 1010,
        ShortType: 1011,
        UnsignedShortType: 1012,
        IntType: 1013,
        UnsignedIntType: 1014,
        FloatType: 1015,
        HalfFloatType: 1025,
        UnsignedShort4444Type: 1016,
        UnsignedShort5551Type: 1017,
        UnsignedShort565Type: 1018,
        AlphaFormat: 1019,
        RGBFormat: 1020,
        RGBAFormat: 1021,
        LuminanceFormat: 1022,
        LuminanceAlphaFormat: 1023,
        RGBEFormat: THREE.RGBAFormat,
        DepthFormat: 1026,
        RGB_S3TC_DXT1_Format: 2001,
        RGBA_S3TC_DXT1_Format: 2002,
        RGBA_S3TC_DXT3_Format: 2003,
        RGBA_S3TC_DXT5_Format: 2004,
        RGB_PVRTC_4BPPV1_Format: 2100,
        RGB_PVRTC_2BPPV1_Format: 2101,
        RGBA_PVRTC_4BPPV1_Format: 2102,
        RGBA_PVRTC_2BPPV1_Format: 2103,
        RGB_ETC1_Format: 2151,
        LoopOnce: 2200,
        LoopRepeat: 2201,
        LoopPingPong: 2202,
        InterpolateDiscrete: 2300,
        InterpolateLinear: 2301,
        InterpolateSmooth: 2302,
        ZeroCurvatureEnding: 2400,
        ZeroSlopeEnding: 2401,
        WrapAroundEnding: 2402,
        TrianglesDrawMode: 0,
        TriangleStripDrawMode: 1,
        TriangleFanDrawMode: 2,
        LinearEncoding: 3e3,
        sRGBEncoding: 3001,
        GammaEncoding: 3007,
        RGBEEncoding: 3002,
        LogLuvEncoding: 3003,
        RGBM7Encoding: 3004,
        RGBM16Encoding: 3005,
        RGBDEncoding: 3006,
        BasicDepthPacking: 3200,
        RGBADepthPacking: 3201
    }), THREE.Color = function(e, t, i) {
        return void 0 === t && void 0 === i ? this.set(e) : this.setRGB(e, t, i)
    }, THREE.Color.prototype = {
        constructor: THREE.Color,
        r: 1,
        g: 1,
        b: 1,
        set: function(e) {
            return e instanceof THREE.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
        },
        setScalar: function(e) {
            this.b = this.g = this.r = e
        },
        setHex: function(e) {
            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
        },
        setRGB: function(e, t, i) {
            return this.r = e, this.g = t, this.b = i, this
        },
        setHSL: function() {
            function e(e, t, i) {
                return 0 > i && (i += 1), i > 1 && (i -= 1), 1 / 6 > i ? e + 6 * (t - e) * i : .5 > i ? t : 2 / 3 > i ? e + 6 * (t - e) * (2 / 3 - i) : e
            }
            return function(t, i, r) {
                return t = THREE.Math.euclideanModulo(t, 1), i = THREE.Math.clamp(i, 0, 1), r = THREE.Math.clamp(r, 0, 1), 0 === i ? this.r = this.g = this.b = r : (i = .5 >= r ? r * (1 + i) : r + i - r * i, r = 2 * r - i, this.r = e(r, i, t + 1 / 3), this.g = e(r, i, t), this.b = e(r, i, t - 1 / 3)), this
            }
        }(),
        setStyle: function(e) {
            function t(t) {
                void 0 !== t && 1 > parseFloat(t) && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
            }
            var i;
            if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
                var r = i[2];
                switch (i[1]) {
                    case "rgb":
                    case "rgba":
                        if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(r)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[5]), this;
                        if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(r)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[5]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(r)) {
                            var r = parseFloat(i[1]) / 360,
                                n = parseInt(i[2], 10) / 100,
                                a = parseInt(i[3], 10) / 100;
                            return t(i[5]), this.setHSL(r, n, a)
                        }
                }
            } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
                if (i = i[1], r = i.length, 3 === r) return this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255, this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255, this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255, this;
                if (6 === r) return this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255, this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255, this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255, this
            }
            return e && 0 < e.length && (i = THREE.ColorKeywords[e], void 0 !== i ? this.setHex(i) : console.warn("THREE.Color: Unknown color " + e)), this
        },
        clone: function() {
            return new this.constructor(this.r, this.g, this.b)
        },
        copy: function(e) {
            return this.r = e.r, this.g = e.g, this.b = e.b, this
        },
        copyGammaToLinear: function(e, t) {
            return void 0 === t && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
        },
        copyLinearToGamma: function(e, t) {
            void 0 === t && (t = 2);
            var i = t > 0 ? 1 / t : 1;
            return this.r = Math.pow(e.r, i), this.g = Math.pow(e.g, i), this.b = Math.pow(e.b, i), this
        },
        convertGammaToLinear: function() {
            var e = this.r,
                t = this.g,
                i = this.b;
            return this.r = e * e, this.g = t * t, this.b = i * i, this
        },
        convertLinearToGamma: function() {
            return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(e) {
            e = e || {
                h: 0,
                s: 0,
                l: 0
            };
            var t = this.r,
                i = this.g,
                r = this.b,
                n = Math.max(t, i, r),
                a = Math.min(t, i, r),
                o, s = (a + n) / 2;
            if (a === n) a = o = 0;
            else {
                var c = n - a,
                    a = .5 >= s ? c / (n + a) : c / (2 - n - a);
                switch (n) {
                    case t:
                        o = (i - r) / c + (r > i ? 6 : 0);
                        break;
                    case i:
                        o = (r - t) / c + 2;
                        break;
                    case r:
                        o = (t - i) / c + 4
                }
                o /= 6
            }
            return e.h = o, e.s = a, e.l = s, e
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function(e, t, i) {
            var r = this.getHSL();
            return r.h += e, r.s += t, r.l += i, this.setHSL(r.h, r.s, r.l), this
        },
        add: function(e) {
            return this.r += e.r, this.g += e.g, this.b += e.b, this
        },
        addColors: function(e, t) {
            return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
        },
        addScalar: function(e) {
            return this.r += e, this.g += e, this.b += e, this
        },
        sub: function(e) {
            return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
        },
        multiply: function(e) {
            return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
        },
        multiplyScalar: function(e) {
            return this.r *= e, this.g *= e, this.b *= e, this
        },
        lerp: function(e, t) {
            return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
        },
        equals: function(e) {
            return e.r === this.r && e.g === this.g && e.b === this.b
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
        }
    }, THREE.ColorKeywords = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }, THREE.Quaternion = function(e, t, i, r) {
        this._x = e || 0, this._y = t || 0, this._z = i || 0, this._w = void 0 !== r ? r : 1
    }, THREE.Quaternion.prototype = {
        constructor: THREE.Quaternion,
        get x() {
            return this._x
        },
        set x(e) {
            this._x = e, this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(e) {
            this._y = e, this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(e) {
            this._z = e, this.onChangeCallback()
        },
        get w() {
            return this._w
        },
        set w(e) {
            this._w = e, this.onChangeCallback()
        },
        set: function(e, t, i, r) {
            return this._x = e, this._y = t, this._z = i, this._w = r, this.onChangeCallback(), this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._w)
        },
        copy: function(e) {
            return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this
        },
        setFromEuler: function(e, t) {
            if (!1 == e instanceof THREE.Euler) throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var i = Math.cos(e._x / 2),
                r = Math.cos(e._y / 2),
                n = Math.cos(e._z / 2),
                a = Math.sin(e._x / 2),
                o = Math.sin(e._y / 2),
                s = Math.sin(e._z / 2),
                c = e.order;
            return "XYZ" === c ? (this._x = a * r * n + i * o * s, this._y = i * o * n - a * r * s, this._z = i * r * s + a * o * n, this._w = i * r * n - a * o * s) : "YXZ" === c ? (this._x = a * r * n + i * o * s, this._y = i * o * n - a * r * s, this._z = i * r * s - a * o * n, this._w = i * r * n + a * o * s) : "ZXY" === c ? (this._x = a * r * n - i * o * s, this._y = i * o * n + a * r * s, this._z = i * r * s + a * o * n, this._w = i * r * n - a * o * s) : "ZYX" === c ? (this._x = a * r * n - i * o * s, this._y = i * o * n + a * r * s, this._z = i * r * s - a * o * n, this._w = i * r * n + a * o * s) : "YZX" === c ? (this._x = a * r * n + i * o * s, this._y = i * o * n + a * r * s, this._z = i * r * s - a * o * n, this._w = i * r * n - a * o * s) : "XZY" === c && (this._x = a * r * n - i * o * s, this._y = i * o * n - a * r * s, this._z = i * r * s + a * o * n, this._w = i * r * n + a * o * s), !1 !== t && this.onChangeCallback(), this
        },
        setFromAxisAngle: function(e, t) {
            var i = t / 2,
                r = Math.sin(i);
            return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(i), this.onChangeCallback(), this
        },
        setFromRotationMatrix: function(e) {
            var t = e.elements,
                i = t[0];
            e = t[4];
            var r = t[8],
                n = t[1],
                a = t[5],
                o = t[9],
                s = t[2],
                c = t[6],
                t = t[10],
                h = i + a + t;
            return h > 0 ? (i = .5 / Math.sqrt(h + 1), this._w = .25 / i, this._x = (c - o) * i, this._y = (r - s) * i, this._z = (n - e) * i) : i > a && i > t ? (i = 2 * Math.sqrt(1 + i - a - t), this._w = (c - o) / i, this._x = .25 * i, this._y = (e + n) / i, this._z = (r + s) / i) : a > t ? (i = 2 * Math.sqrt(1 + a - i - t), this._w = (r - s) / i, this._x = (e + n) / i, this._y = .25 * i, this._z = (o + c) / i) : (i = 2 * Math.sqrt(1 + t - i - a), this._w = (n - e) / i, this._x = (r + s) / i, this._y = (o + c) / i, this._z = .25 * i), this.onChangeCallback(), this
        },
        setFromUnitVectors: function() {
            var e, t;
            return function(i, r) {
                return void 0 === e && (e = new THREE.Vector3), t = i.dot(r) + 1, 1e-6 > t ? (t = 0, Math.abs(i.x) > Math.abs(i.z) ? e.set(-i.y, i.x, 0) : e.set(0, -i.z, i.y)) : e.crossVectors(i, r), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
            }
        }(),
        inverse: function() {
            return this.conjugate().normalize()
        },
        conjugate: function() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
        },
        dot: function(e) {
            return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var e = this.length();
            return 0 === e ? (this._z = this._y = this._x = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this.onChangeCallback(), this
        },
        multiply: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
        },
        premultiply: function(e) {
            return this.multiplyQuaternions(e, this)
        },
        multiplyQuaternions: function(e, t) {
            var i = e._x,
                r = e._y,
                n = e._z,
                a = e._w,
                o = t._x,
                s = t._y,
                c = t._z,
                h = t._w;
            return this._x = i * h + a * o + r * c - n * s, this._y = r * h + a * s + n * o - i * c, this._z = n * h + a * c + i * s - r * o, this._w = a * h - i * o - r * s - n * c, this.onChangeCallback(), this
        },
        slerp: function(e, t) {
            if (0 === t) return this;
            if (1 === t) return this.copy(e);
            var i = this._x,
                r = this._y,
                n = this._z,
                a = this._w,
                o = a * e._w + i * e._x + r * e._y + n * e._z;
            if (0 > o ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = i, this._y = r, this._z = n, this;
            var s = Math.sqrt(1 - o * o);
            if (.001 > Math.abs(s)) return this._w = .5 * (a + this._w), this._x = .5 * (i + this._x), this._y = .5 * (r + this._y), this._z = .5 * (n + this._z), this;
            var c = Math.atan2(s, o),
                o = Math.sin((1 - t) * c) / s,
                s = Math.sin(t * c) / s;
            return this._w = a * o + this._w * s, this._x = i * o + this._x * s, this._y = r * o + this._y * s, this._z = n * o + this._z * s, this.onChangeCallback(), this
        },
        equals: function(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
        },
        onChange: function(e) {
            return this.onChangeCallback = e, this
        },
        onChangeCallback: function() {}
    }, Object.assign(THREE.Quaternion, {
        slerp: function(e, t, i, r) {
            return i.copy(e).slerp(t, r)
        },
        slerpFlat: function(e, t, i, r, n, a, o) {
            var s = i[r + 0],
                c = i[r + 1],
                h = i[r + 2];
            i = i[r + 3], r = n[a + 0];
            var l = n[a + 1],
                u = n[a + 2];
            if (n = n[a + 3], i !== n || s !== r || c !== l || h !== u) {
                a = 1 - o;
                var p = s * r + c * l + h * u + i * n,
                    d = p >= 0 ? 1 : -1,
                    f = 1 - p * p;
                f > Number.EPSILON && (f = Math.sqrt(f), p = Math.atan2(f, p * d), a = Math.sin(a * p) / f, o = Math.sin(o * p) / f), d *= o, s = s * a + r * d, c = c * a + l * d, h = h * a + u * d, i = i * a + n * d, a === 1 - o && (o = 1 / Math.sqrt(s * s + c * c + h * h + i * i), s *= o, c *= o, h *= o, i *= o)
            }
            e[t] = s, e[t + 1] = c, e[t + 2] = h, e[t + 3] = i
        }
    }), THREE.Vector2 = function(e, t) {
        this.x = e || 0, this.y = t || 0
    }, THREE.Vector2.prototype = {
        constructor: THREE.Vector2,
        get width() {
            return this.x
        },
        set width(e) {
            this.x = e
        },
        get height() {
            return this.y
        },
        set height(e) {
            this.y = e
        },
        set: function(e, t) {
            return this.x = e, this.y = t, this
        },
        setScalar: function(e) {
            return this.y = this.x = e, this
        },
        setX: function(e) {
            return this.x = e, this
        },
        setY: function(e) {
            return this.y = e, this
        },
        setComponent: function(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                default:
                    throw Error("index is out of range: " + e)
            }
        },
        getComponent: function(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw Error("index is out of range: " + e)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y)
        },
        copy: function(e) {
            return this.x = e.x, this.y = e.y, this
        },
        add: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
        },
        addScalar: function(e) {
            return this.x += e, this.y += e, this
        },
        addVectors: function(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this
        },
        addScaledVector: function(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this
        },
        sub: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
        },
        subScalar: function(e) {
            return this.x -= e, this.y -= e, this
        },
        subVectors: function(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this
        },
        multiply: function(e) {
            return this.x *= e.x, this.y *= e.y, this
        },
        multiplyScalar: function(e) {
            return isFinite(e) ? (this.x *= e, this.y *= e) : this.y = this.x = 0, this
        },
        divide: function(e) {
            return this.x /= e.x, this.y /= e.y, this
        },
        divideScalar: function(e) {
            return this.multiplyScalar(1 / e)
        },
        min: function(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
        },
        max: function(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
        },
        clamp: function(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
        },
        clampScalar: function() {
            var e, t;
            return function(i, r) {
                return void 0 === e && (e = new THREE.Vector2, t = new THREE.Vector2), e.set(i, i), t.set(r, r), this.clamp(e, t)
            }
        }(),
        clampLength: function(e, t) {
            var i = this.length();
            return this.multiplyScalar(Math.max(e, Math.min(t, i)) / i)
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        roundToZero: function() {
            return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this
        },
        dot: function(e) {
            return this.x * e.x + this.y * e.y
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        angle: function() {
            var e = Math.atan2(this.y, this.x);
            return 0 > e && (e += 2 * Math.PI), e
        },
        distanceTo: function(e) {
            return Math.sqrt(this.distanceToSquared(e))
        },
        distanceToSquared: function(e) {
            var t = this.x - e.x;
            return e = this.y - e.y, t * t + e * e
        },
        distanceToManhattan: function(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
        },
        setLength: function(e) {
            return this.multiplyScalar(e / this.length())
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
        },
        lerpVectors: function(e, t, i) {
            return this.subVectors(t, e).multiplyScalar(i).add(e)
        },
        equals: function(e) {
            return e.x === this.x && e.y === this.y
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
        },
        fromAttribute: function(e, t, i) {
            return void 0 === i && (i = 0), t = t * e.itemSize + i, this.x = e.array[t], this.y = e.array[t + 1], this
        },
        rotateAround: function(e, t) {
            var i = Math.cos(t),
                r = Math.sin(t),
                n = this.x - e.x,
                a = this.y - e.y;
            return this.x = n * i - a * r + e.x, this.y = n * r + a * i + e.y, this
        }
    }, THREE.Vector3 = function(e, t, i) {
        this.x = e || 0, this.y = t || 0, this.z = i || 0
    }, THREE.Vector3.prototype = {
        constructor: THREE.Vector3,
        set: function(e, t, i) {
            return this.x = e, this.y = t, this.z = i, this
        },
        setScalar: function(e) {
            return this.z = this.y = this.x = e, this
        },
        setX: function(e) {
            return this.x = e, this
        },
        setY: function(e) {
            return this.y = e, this
        },
        setZ: function(e) {
            return this.z = e, this
        },
        setComponent: function(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                default:
                    throw Error("index is out of range: " + e)
            }
        },
        getComponent: function(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw Error("index is out of range: " + e)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z)
        },
        copy: function(e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this
        },
        add: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
        },
        addScalar: function(e) {
            return this.x += e, this.y += e, this.z += e, this
        },
        addVectors: function(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
        },
        addScaledVector: function(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
        },
        sub: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
        },
        subScalar: function(e) {
            return this.x -= e, this.y -= e, this.z -= e, this
        },
        subVectors: function(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
        },
        multiply: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
        },
        multiplyScalar: function(e) {
            return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e) : this.z = this.y = this.x = 0, this
        },
        multiplyVectors: function(e, t) {
            return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
        },
        applyEuler: function() {
            var e;
            return function(t) {
                return !1 == t instanceof THREE.Euler && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), void 0 === e && (e = new THREE.Quaternion), this.applyQuaternion(e.setFromEuler(t))
            }
        }(),
        applyAxisAngle: function() {
            var e;
            return function(t, i) {
                return void 0 === e && (e = new THREE.Quaternion), this.applyQuaternion(e.setFromAxisAngle(t, i))
            }
        }(),
        applyMatrix3: function(e) {
            var t = this.x,
                i = this.y,
                r = this.z;
            return e = e.elements, this.x = e[0] * t + e[3] * i + e[6] * r, this.y = e[1] * t + e[4] * i + e[7] * r, this.z = e[2] * t + e[5] * i + e[8] * r, this
        },
        applyMatrix4: function(e) {
            var t = this.x,
                i = this.y,
                r = this.z;
            return e = e.elements, this.x = e[0] * t + e[4] * i + e[8] * r + e[12], this.y = e[1] * t + e[5] * i + e[9] * r + e[13], this.z = e[2] * t + e[6] * i + e[10] * r + e[14], this
        },
        applyProjection: function(e) {
            var t = this.x,
                i = this.y,
                r = this.z;
            e = e.elements;
            var n = 1 / (e[3] * t + e[7] * i + e[11] * r + e[15]);
            return this.x = (e[0] * t + e[4] * i + e[8] * r + e[12]) * n, this.y = (e[1] * t + e[5] * i + e[9] * r + e[13]) * n, this.z = (e[2] * t + e[6] * i + e[10] * r + e[14]) * n, this
        },
        applyQuaternion: function(e) {
            var t = this.x,
                i = this.y,
                r = this.z,
                n = e.x,
                a = e.y,
                o = e.z;
            e = e.w;
            var s = e * t + a * r - o * i,
                c = e * i + o * t - n * r,
                h = e * r + n * i - a * t,
                t = -n * t - a * i - o * r;
            return this.x = s * e + t * -n + c * -o - h * -a, this.y = c * e + t * -a + h * -n - s * -o, this.z = h * e + t * -o + s * -a - c * -n, this
        },
        project: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new THREE.Matrix4), e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)), this.applyProjection(e)
            }
        }(),
        unproject: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new THREE.Matrix4), e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)), this.applyProjection(e)
            }
        }(),
        transformDirection: function(e) {
            var t = this.x,
                i = this.y,
                r = this.z;
            return e = e.elements, this.x = e[0] * t + e[4] * i + e[8] * r, this.y = e[1] * t + e[5] * i + e[9] * r, this.z = e[2] * t + e[6] * i + e[10] * r, this.normalize()
        },
        divide: function(e) {
            return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
        },
        divideScalar: function(e) {
            return this.multiplyScalar(1 / e)
        },
        min: function(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
        },
        max: function(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
        },
        clamp: function(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
        },
        clampScalar: function() {
            var e, t;
            return function(i, r) {
                return void 0 === e && (e = new THREE.Vector3, t = new THREE.Vector3), e.set(i, i, i), t.set(r, r, r), this.clamp(e, t)
            }
        }(),
        clampLength: function(e, t) {
            var i = this.length();
            return this.multiplyScalar(Math.max(e, Math.min(t, i)) / i)
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        },
        roundToZero: function() {
            return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        },
        dot: function(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(e) {
            return this.multiplyScalar(e / this.length())
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
        },
        lerpVectors: function(e, t, i) {
            return this.subVectors(t, e).multiplyScalar(i).add(e)
        },
        cross: function(e, t) {
            if (void 0 !== t) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t);
            var i = this.x,
                r = this.y,
                n = this.z;
            return this.x = r * e.z - n * e.y, this.y = n * e.x - i * e.z, this.z = i * e.y - r * e.x, this
        },
        crossVectors: function(e, t) {
            var i = e.x,
                r = e.y,
                n = e.z,
                a = t.x,
                o = t.y,
                s = t.z;
            return this.x = r * s - n * o, this.y = n * a - i * s, this.z = i * o - r * a, this
        },
        projectOnVector: function(e) {
            var t = e.dot(this) / e.lengthSq();
            return this.copy(e).multiplyScalar(t)
        },
        projectOnPlane: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new THREE.Vector3), e.copy(this).projectOnVector(t), this.sub(e)
            }
        }(),
        reflect: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new THREE.Vector3), this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
            }
        }(),
        angleTo: function(e) {
            return e = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq()), Math.acos(THREE.Math.clamp(e, -1, 1))
        },
        distanceTo: function(e) {
            return Math.sqrt(this.distanceToSquared(e))
        },
        distanceToSquared: function(e) {
            var t = this.x - e.x,
                i = this.y - e.y;
            return e = this.z - e.z, t * t + i * i + e * e
        },
        distanceToManhattan: function(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
        },
        setFromSpherical: function(e) {
            var t = Math.sin(e.phi) * e.radius;
            return this.x = t * Math.sin(e.theta), this.y = Math.cos(e.phi) * e.radius, this.z = t * Math.cos(e.theta), this
        },
        setFromMatrixPosition: function(e) {
            return this.setFromMatrixColumn(e, 3)
        },
        setFromMatrixScale: function(e) {
            var t = this.setFromMatrixColumn(e, 0).length(),
                i = this.setFromMatrixColumn(e, 1).length();
            return e = this.setFromMatrixColumn(e, 2).length(), this.x = t, this.y = i, this.z = e, this
        },
        setFromMatrixColumn: function(e, t) {
            if ("number" == typeof e) {
                console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");
                var i = e;
                e = t, t = i
            }
            return this.fromArray(e.elements, 4 * t)
        },
        equals: function(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
        },
        fromAttribute: function(e, t, i) {
            return void 0 === i && (i = 0), t = t * e.itemSize + i, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this
        }
    }, THREE.Vector4 = function(e, t, i, r) {
        this.x = e || 0, this.y = t || 0, this.z = i || 0, this.w = void 0 !== r ? r : 1
    }, THREE.Vector4.prototype = {
        constructor: THREE.Vector4,
        set: function(e, t, i, r) {
            return this.x = e, this.y = t, this.z = i, this.w = r, this
        },
        setScalar: function(e) {
            return this.w = this.z = this.y = this.x = e, this
        },
        setX: function(e) {
            return this.x = e, this
        },
        setY: function(e) {
            return this.y = e, this
        },
        setZ: function(e) {
            return this.z = e, this
        },
        setW: function(e) {
            return this.w = e, this
        },
        setComponent: function(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                case 3:
                    this.w = t;
                    break;
                default:
                    throw Error("index is out of range: " + e)
            }
        },
        getComponent: function(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw Error("index is out of range: " + e)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z, this.w)
        },
        copy: function(e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
        },
        add: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
        },
        addScalar: function(e) {
            return this.x += e, this.y += e, this.z += e, this.w += e, this
        },
        addVectors: function(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
        },
        addScaledVector: function(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
        },
        sub: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
        },
        subScalar: function(e) {
            return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
        },
        subVectors: function(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
        },
        multiplyScalar: function(e) {
            return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e, this.w *= e) : this.w = this.z = this.y = this.x = 0, this
        },
        applyMatrix4: function(e) {
            var t = this.x,
                i = this.y,
                r = this.z,
                n = this.w;
            return e = e.elements, this.x = e[0] * t + e[4] * i + e[8] * r + e[12] * n, this.y = e[1] * t + e[5] * i + e[9] * r + e[13] * n, this.z = e[2] * t + e[6] * i + e[10] * r + e[14] * n, this.w = e[3] * t + e[7] * i + e[11] * r + e[15] * n, this
        },
        divideScalar: function(e) {
            return this.multiplyScalar(1 / e)
        },
        setAxisAngleFromQuaternion: function(e) {
            this.w = 2 * Math.acos(e.w);
            var t = Math.sqrt(1 - e.w * e.w);
            return 1e-4 > t ? (this.x = 1, this.z = this.y = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
        },
        setAxisAngleFromRotationMatrix: function(e) {
            var t, i, r;
            e = e.elements;
            var n = e[0];
            r = e[4];
            var a = e[8],
                o = e[1],
                s = e[5],
                c = e[9];
            i = e[2], t = e[6];
            var h = e[10];
            return .01 > Math.abs(r - o) && .01 > Math.abs(a - i) && .01 > Math.abs(c - t) ? .1 > Math.abs(r + o) && .1 > Math.abs(a + i) && .1 > Math.abs(c + t) && .1 > Math.abs(n + s + h - 3) ? (this.set(1, 0, 0, 0), this) : (e = Math.PI, n = (n + 1) / 2, s = (s + 1) / 2, h = (h + 1) / 2, r = (r + o) / 4, a = (a + i) / 4, c = (c + t) / 4, n > s && n > h ? .01 > n ? (t = 0, r = i = .707106781) : (t = Math.sqrt(n), i = r / t, r = a / t) : s > h ? .01 > s ? (t = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(s), t = r / i, r = c / i) : .01 > h ? (i = t = .707106781, r = 0) : (r = Math.sqrt(h), t = a / r, i = c / r), this.set(t, i, r, e), this) : (e = Math.sqrt((t - c) * (t - c) + (a - i) * (a - i) + (o - r) * (o - r)), .001 > Math.abs(e) && (e = 1), this.x = (t - c) / e, this.y = (a - i) / e, this.z = (o - r) / e, this.w = Math.acos((n + s + h - 1) / 2), this)
        },
        min: function(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
        },
        max: function(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
        },
        clamp: function(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
        },
        clampScalar: function() {
            var e, t;
            return function(i, r) {
                return void 0 === e && (e = new THREE.Vector4, t = new THREE.Vector4), e.set(i, i, i, i), t.set(r, r, r, r), this.clamp(e, t)
            }
        }(),
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        },
        roundToZero: function() {
            return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y),
                this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        },
        dot: function(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(e) {
            return this.multiplyScalar(e / this.length())
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
        },
        lerpVectors: function(e, t, i) {
            return this.subVectors(t, e).multiplyScalar(i).add(e)
        },
        equals: function(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
        },
        fromAttribute: function(e, t, i) {
            return void 0 === i && (i = 0), t = t * e.itemSize + i, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this.w = e.array[t + 3], this
        }
    }, THREE.Euler = function(e, t, i, r) {
        this._x = e || 0, this._y = t || 0, this._z = i || 0, this._order = r || THREE.Euler.DefaultOrder
    }, THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" "), THREE.Euler.DefaultOrder = "XYZ", THREE.Euler.prototype = {
        constructor: THREE.Euler,
        get x() {
            return this._x
        },
        set x(e) {
            this._x = e, this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(e) {
            this._y = e, this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(e) {
            this._z = e, this.onChangeCallback()
        },
        get order() {
            return this._order
        },
        set order(e) {
            this._order = e, this.onChangeCallback()
        },
        set: function(e, t, i, r) {
            return this._x = e, this._y = t, this._z = i, this._order = r || this._order, this.onChangeCallback(), this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._order)
        },
        copy: function(e) {
            return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
        },
        setFromRotationMatrix: function(e, t, i) {
            var r = THREE.Math.clamp,
                n = e.elements;
            e = n[0];
            var a = n[4],
                o = n[8],
                s = n[1],
                c = n[5],
                h = n[9],
                l = n[2],
                u = n[6],
                n = n[10];
            return t = t || this._order, "XYZ" === t ? (this._y = Math.asin(r(o, -1, 1)), .99999 > Math.abs(o) ? (this._x = Math.atan2(-h, n), this._z = Math.atan2(-a, e)) : (this._x = Math.atan2(u, c), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-r(h, -1, 1)), .99999 > Math.abs(h) ? (this._y = Math.atan2(o, n), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-l, e), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(r(u, -1, 1)), .99999 > Math.abs(u) ? (this._y = Math.atan2(-l, n), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, e))) : "ZYX" === t ? (this._y = Math.asin(-r(l, -1, 1)), .99999 > Math.abs(l) ? (this._x = Math.atan2(u, n), this._z = Math.atan2(s, e)) : (this._x = 0, this._z = Math.atan2(-a, c))) : "YZX" === t ? (this._z = Math.asin(r(s, -1, 1)), .99999 > Math.abs(s) ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-l, e)) : (this._x = 0, this._y = Math.atan2(o, n))) : "XZY" === t ? (this._z = Math.asin(-r(a, -1, 1)), .99999 > Math.abs(a) ? (this._x = Math.atan2(u, c), this._y = Math.atan2(o, e)) : (this._x = Math.atan2(-h, n), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, !1 !== i && this.onChangeCallback(), this
        },
        setFromQuaternion: function() {
            var e;
            return function(t, i, r) {
                return void 0 === e && (e = new THREE.Matrix4), e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, i, r)
            }
        }(),
        setFromVector3: function(e, t) {
            return this.set(e.x, e.y, e.z, t || this._order)
        },
        reorder: function() {
            var e = new THREE.Quaternion;
            return function(t) {
                return e.setFromEuler(this), this.setFromQuaternion(e, t)
            }
        }(),
        equals: function(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
        },
        fromArray: function(e) {
            return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
        },
        toVector3: function(e) {
            return e ? e.set(this._x, this._y, this._z) : new THREE.Vector3(this._x, this._y, this._z)
        },
        onChange: function(e) {
            return this.onChangeCallback = e, this
        },
        onChangeCallback: function() {}
    }, THREE.Line3 = function(e, t) {
        this.start = void 0 !== e ? e : new THREE.Vector3, this.end = void 0 !== t ? t : new THREE.Vector3
    }, THREE.Line3.prototype = {
        constructor: THREE.Line3,
        set: function(e, t) {
            return this.start.copy(e), this.end.copy(t), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.start.copy(e.start), this.end.copy(e.end), this
        },
        center: function(e) {
            return (e || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(e) {
            return (e || new THREE.Vector3).subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(e, t) {
            var i = t || new THREE.Vector3;
            return this.delta(i).multiplyScalar(e).add(this.start)
        },
        closestPointToPointParameter: function() {
            var e = new THREE.Vector3,
                t = new THREE.Vector3;
            return function(i, r) {
                e.subVectors(i, this.start), t.subVectors(this.end, this.start);
                var n = t.dot(t),
                    n = t.dot(e) / n;
                return r && (n = THREE.Math.clamp(n, 0, 1)), n
            }
        }(),
        closestPointToPoint: function(e, t, i) {
            return e = this.closestPointToPointParameter(e, t), i = i || new THREE.Vector3, this.delta(i).multiplyScalar(e).add(this.start)
        },
        applyMatrix4: function(e) {
            return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
        },
        equals: function(e) {
            return e.start.equals(this.start) && e.end.equals(this.end)
        }
    }, THREE.Box2 = function(e, t) {
        this.min = void 0 !== e ? e : new THREE.Vector2(1 / 0, 1 / 0), this.max = void 0 !== t ? t : new THREE.Vector2(-(1 / 0), -(1 / 0))
    }, THREE.Box2.prototype = {
        constructor: THREE.Box2,
        set: function(e, t) {
            return this.min.copy(e), this.max.copy(t), this
        },
        setFromPoints: function(e) {
            this.makeEmpty();
            for (var t = 0, i = e.length; i > t; t++) this.expandByPoint(e[t]);
            return this
        },
        setFromCenterAndSize: function() {
            var e = new THREE.Vector2;
            return function(t, i) {
                var r = e.copy(i).multiplyScalar(.5);
                return this.min.copy(t).sub(r), this.max.copy(t).add(r), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.min.copy(e.min), this.max.copy(e.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -(1 / 0), this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        center: function(e) {
            return (e || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(.5)
        },
        size: function(e) {
            return (e || new THREE.Vector2).subVectors(this.max, this.min)
        },
        expandByPoint: function(e) {
            return this.min.min(e), this.max.max(e), this
        },
        expandByVector: function(e) {
            return this.min.sub(e), this.max.add(e), this
        },
        expandByScalar: function(e) {
            return this.min.addScalar(-e), this.max.addScalar(e), this
        },
        containsPoint: function(e) {
            return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
        },
        containsBox: function(e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y ? !0 : !1
        },
        getParameter: function(e, t) {
            return (t || new THREE.Vector2).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(e) {
            return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
        },
        clampPoint: function(e, t) {
            return (t || new THREE.Vector2).copy(e).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var e = new THREE.Vector2;
            return function(t) {
                return e.copy(t).clamp(this.min, this.max).sub(t).length()
            }
        }(),
        intersect: function(e) {
            return this.min.max(e.min), this.max.min(e.max), this
        },
        union: function(e) {
            return this.min.min(e.min), this.max.max(e.max), this
        },
        translate: function(e) {
            return this.min.add(e), this.max.add(e), this
        },
        equals: function(e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        }
    }, THREE.Box3 = function(e, t) {
        this.min = void 0 !== e ? e : new THREE.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new THREE.Vector3(-(1 / 0), -(1 / 0), -(1 / 0))
    }, THREE.Box3.prototype = {
        constructor: THREE.Box3,
        set: function(e, t) {
            return this.min.copy(e), this.max.copy(t), this
        },
        setFromArray: function(e) {
            for (var t = 1 / 0, i = 1 / 0, r = 1 / 0, n = -(1 / 0), a = -(1 / 0), o = -(1 / 0), s = 0, c = e.length; c > s; s += 3) {
                var h = e[s],
                    l = e[s + 1],
                    u = e[s + 2];
                t > h && (t = h), i > l && (i = l), r > u && (r = u), h > n && (n = h), l > a && (a = l), u > o && (o = u)
            }
            this.min.set(t, i, r), this.max.set(n, a, o)
        },
        setFromPoints: function(e) {
            this.makeEmpty();
            for (var t = 0, i = e.length; i > t; t++) this.expandByPoint(e[t]);
            return this
        },
        setFromCenterAndSize: function() {
            var e = new THREE.Vector3;
            return function(t, i) {
                var r = e.copy(i).multiplyScalar(.5);
                return this.min.copy(t).sub(r), this.max.copy(t).add(r), this
            }
        }(),
        setFromObject: function() {
            var e = new THREE.Vector3;
            return function(t) {
                var i = this;
                return t.updateMatrixWorld(!0), this.makeEmpty(), t.traverse(function(t) {
                    var r = t.geometry;
                    if (void 0 !== r)
                        if (r instanceof THREE.Geometry)
                            for (var r = r.vertices, n = 0, a = r.length; a > n; n++) e.copy(r[n]), e.applyMatrix4(t.matrixWorld), i.expandByPoint(e);
                        else if (r instanceof THREE.BufferGeometry && (a = r.attributes.position, void 0 !== a)) {
                        var o;
                        for (a instanceof THREE.InterleavedBufferAttribute ? (r = a.data.array, n = a.offset, o = a.data.stride) : (r = a.array, n = 0, o = 3), a = r.length; a > n; n += o) e.fromArray(r, n), e.applyMatrix4(t.matrixWorld), i.expandByPoint(e)
                    }
                }), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.min.copy(e.min), this.max.copy(e.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -(1 / 0), this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        center: function(e) {
            return (e || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(.5)
        },
        size: function(e) {
            return (e || new THREE.Vector3).subVectors(this.max, this.min)
        },
        expandByPoint: function(e) {
            return this.min.min(e), this.max.max(e), this
        },
        expandByVector: function(e) {
            return this.min.sub(e), this.max.add(e), this
        },
        expandByScalar: function(e) {
            return this.min.addScalar(-e), this.max.addScalar(e), this
        },
        containsPoint: function(e) {
            return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
        },
        containsBox: function(e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z ? !0 : !1
        },
        getParameter: function(e, t) {
            return (t || new THREE.Vector3).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(e) {
            return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
        },
        intersectsSphere: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new THREE.Vector3), this.clampPoint(t.center, e), e.distanceToSquared(t.center) <= t.radius * t.radius
            }
        }(),
        intersectsPlane: function(e) {
            var t, i;
            return 0 < e.normal.x ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), 0 < e.normal.y ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), 0 < e.normal.z ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= e.constant && i >= e.constant
        },
        clampPoint: function(e, t) {
            return (t || new THREE.Vector3).copy(e).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var e = new THREE.Vector3;
            return function(t) {
                return e.copy(t).clamp(this.min, this.max).sub(t).length()
            }
        }(),
        getBoundingSphere: function() {
            var e = new THREE.Vector3;
            return function(t) {
                return t = t || new THREE.Sphere, t.center = this.center(), t.radius = .5 * this.size(e).length(), t
            }
        }(),
        intersect: function(e) {
            return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
        },
        union: function(e) {
            return this.min.min(e.min), this.max.max(e.max), this
        },
        applyMatrix4: function() {
            var e = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
            return function(t) {
                return this.isEmpty() ? this : (e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(e), this)
            }
        }(),
        translate: function(e) {
            return this.min.add(e), this.max.add(e), this
        },
        equals: function(e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        }
    }, THREE.Matrix3 = function() {
        this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), 0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }, THREE.Matrix3.prototype = {
        constructor: THREE.Matrix3,
        set: function(e, t, i, r, n, a, o, s, c) {
            var h = this.elements;
            return h[0] = e, h[1] = r, h[2] = o, h[3] = t, h[4] = n, h[5] = s, h[6] = i, h[7] = a, h[8] = c, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(e) {
            return e = e.elements, this.set(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]), this
        },
        setFromMatrix4: function(e) {
            return e = e.elements, this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
        },
        applyToVector3Array: function() {
            var e;
            return function(t, i, r) {
                void 0 === e && (e = new THREE.Vector3), void 0 === i && (i = 0), void 0 === r && (r = t.length);
                for (var n = 0; r > n; n += 3, i += 3) e.fromArray(t, i), e.applyMatrix3(this), e.toArray(t, i);
                return t
            }
        }(),
        applyToBuffer: function() {
            var e;
            return function(t, i, r) {
                void 0 === e && (e = new THREE.Vector3), void 0 === i && (i = 0), void 0 === r && (r = t.length / t.itemSize);
                for (var n = 0; r > n; n++, i++) e.x = t.getX(i), e.y = t.getY(i), e.z = t.getZ(i), e.applyMatrix3(this), t.setXYZ(e.x, e.y, e.z);
                return t
            }
        }(),
        multiplyScalar: function(e) {
            var t = this.elements;
            return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
        },
        determinant: function() {
            var e = this.elements,
                t = e[0],
                i = e[1],
                r = e[2],
                n = e[3],
                a = e[4],
                o = e[5],
                s = e[6],
                c = e[7],
                e = e[8];
            return t * a * e - t * o * c - i * n * e + i * o * s + r * n * c - r * a * s
        },
        getInverse: function(e, t) {
            e instanceof THREE.Matrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
            var i = e.elements,
                r = this.elements,
                n = i[0],
                a = i[1],
                o = i[2],
                s = i[3],
                c = i[4],
                h = i[5],
                l = i[6],
                u = i[7],
                i = i[8],
                p = i * c - h * u,
                d = h * l - i * s,
                f = u * s - c * l,
                E = n * p + a * d + o * f;
            if (0 === E) {
                if (t) throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
                return console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0"), this.identity()
            }
            return E = 1 / E, r[0] = p * E, r[1] = (o * u - i * a) * E, r[2] = (h * a - o * c) * E, r[3] = d * E, r[4] = (i * n - o * l) * E, r[5] = (o * s - h * n) * E, r[6] = f * E, r[7] = (a * l - u * n) * E, r[8] = (c * n - a * s) * E, this
        },
        transpose: function() {
            var e, t = this.elements;
            return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
        },
        flattenToArrayOffset: function(e, t) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."), this.toArray(e, t)
        },
        getNormalMatrix: function(e) {
            return this.setFromMatrix4(e).getInverse(this).transpose()
        },
        transposeIntoArray: function(e) {
            var t = this.elements;
            return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
        },
        fromArray: function(e) {
            return this.elements.set(e), this
        },
        toArray: function(e, t) {
            void 0 === e && (e = []), void 0 === t && (t = 0);
            var i = this.elements;
            return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e
        }
    }, THREE.Matrix4 = function() {
        this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), 0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }, THREE.Matrix4.prototype = {
        constructor: THREE.Matrix4,
        set: function(e, t, i, r, n, a, o, s, c, h, l, u, p, d, f, E) {
            var m = this.elements;
            return m[0] = e, m[4] = t, m[8] = i, m[12] = r, m[1] = n, m[5] = a, m[9] = o, m[13] = s, m[2] = c, m[6] = h, m[10] = l, m[14] = u, m[3] = p, m[7] = d, m[11] = f, m[15] = E, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        clone: function() {
            return (new THREE.Matrix4).fromArray(this.elements)
        },
        copy: function(e) {
            return this.elements.set(e.elements), this
        },
        copyPosition: function(e) {
            var t = this.elements;
            return e = e.elements, t[12] = e[12], t[13] = e[13], t[14] = e[14], this
        },
        extractBasis: function(e, t, i) {
            return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
        },
        makeBasis: function(e, t, i) {
            return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1), this
        },
        extractRotation: function() {
            var e;
            return function(t) {
                void 0 === e && (e = new THREE.Vector3);
                var i = this.elements,
                    r = t.elements,
                    n = 1 / e.setFromMatrixColumn(t, 0).length(),
                    a = 1 / e.setFromMatrixColumn(t, 1).length();
                return t = 1 / e.setFromMatrixColumn(t, 2).length(), i[0] = r[0] * n, i[1] = r[1] * n, i[2] = r[2] * n, i[4] = r[4] * a, i[5] = r[5] * a, i[6] = r[6] * a, i[8] = r[8] * t, i[9] = r[9] * t, i[10] = r[10] * t, this
            }
        }(),
        makeRotationFromEuler: function(e) {
            !1 == e instanceof THREE.Euler && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var t = this.elements,
                i = e.x,
                r = e.y,
                n = e.z,
                a = Math.cos(i),
                i = Math.sin(i),
                o = Math.cos(r),
                r = Math.sin(r),
                s = Math.cos(n),
                n = Math.sin(n);
            if ("XYZ" === e.order) {
                e = a * s;
                var c = a * n,
                    h = i * s,
                    l = i * n;
                t[0] = o * s, t[4] = -o * n, t[8] = r, t[1] = c + h * r, t[5] = e - l * r, t[9] = -i * o, t[2] = l - e * r, t[6] = h + c * r, t[10] = a * o
            } else "YXZ" === e.order ? (e = o * s, c = o * n, h = r * s, l = r * n, t[0] = e + l * i, t[4] = h * i - c, t[8] = a * r, t[1] = a * n, t[5] = a * s, t[9] = -i, t[2] = c * i - h, t[6] = l + e * i, t[10] = a * o) : "ZXY" === e.order ? (e = o * s, c = o * n, h = r * s, l = r * n, t[0] = e - l * i, t[4] = -a * n, t[8] = h + c * i, t[1] = c + h * i, t[5] = a * s, t[9] = l - e * i, t[2] = -a * r, t[6] = i, t[10] = a * o) : "ZYX" === e.order ? (e = a * s, c = a * n, h = i * s, l = i * n, t[0] = o * s, t[4] = h * r - c, t[8] = e * r + l, t[1] = o * n, t[5] = l * r + e, t[9] = c * r - h, t[2] = -r, t[6] = i * o, t[10] = a * o) : "YZX" === e.order ? (e = a * o, c = a * r, h = i * o, l = i * r, t[0] = o * s, t[4] = l - e * n, t[8] = h * n + c, t[1] = n, t[5] = a * s, t[9] = -i * s, t[2] = -r * s, t[6] = c * n + h, t[10] = e - l * n) : "XZY" === e.order && (e = a * o, c = a * r, h = i * o, l = i * r, t[0] = o * s, t[4] = -n, t[8] = r * s, t[1] = e * n + l, t[5] = a * s, t[9] = c * n - h, t[2] = h * n - c, t[6] = i * s, t[10] = l * n + e);
            return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        },
        makeRotationFromQuaternion: function(e) {
            var t = this.elements,
                i = e.x,
                r = e.y,
                n = e.z,
                a = e.w,
                o = i + i,
                s = r + r,
                c = n + n;
            e = i * o;
            var h = i * s,
                i = i * c,
                l = r * s,
                r = r * c,
                n = n * c,
                o = a * o,
                s = a * s,
                a = a * c;
            return t[0] = 1 - (l + n), t[4] = h - a, t[8] = i + s, t[1] = h + a, t[5] = 1 - (e + n), t[9] = r - o, t[2] = i - s, t[6] = r + o, t[10] = 1 - (e + l), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        },
        lookAt: function() {
            var e, t, i;
            return function(r, n, a) {
                void 0 === e && (e = new THREE.Vector3, t = new THREE.Vector3, i = new THREE.Vector3);
                var o = this.elements;
                return i.subVectors(r, n).normalize(), 0 === i.lengthSq() && (i.z = 1), e.crossVectors(a, i).normalize(), 0 === e.lengthSq() && (i.z += 1e-4, e.crossVectors(a, i).normalize()), t.crossVectors(i, e), o[0] = e.x, o[4] = t.x, o[8] = i.x, o[1] = e.y, o[5] = t.y, o[9] = i.y, o[2] = e.z, o[6] = t.z, o[10] = i.z, this
            }
        }(),
        multiply: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
        },
        premultiply: function(e) {
            return this.multiplyMatrices(e, this)
        },
        multiplyMatrices: function(e, t) {
            var i = e.elements,
                r = t.elements,
                n = this.elements,
                a = i[0],
                o = i[4],
                s = i[8],
                c = i[12],
                h = i[1],
                l = i[5],
                u = i[9],
                p = i[13],
                d = i[2],
                f = i[6],
                E = i[10],
                m = i[14],
                g = i[3],
                T = i[7],
                v = i[11],
                i = i[15],
                y = r[0],
                R = r[4],
                x = r[8],
                H = r[12],
                b = r[1],
                _ = r[5],
                M = r[9],
                w = r[13],
                S = r[2],
                A = r[6],
                L = r[10],
                C = r[14],
                P = r[3],
                D = r[7],
                B = r[11],
                r = r[15];
            return n[0] = a * y + o * b + s * S + c * P, n[4] = a * R + o * _ + s * A + c * D, n[8] = a * x + o * M + s * L + c * B, n[12] = a * H + o * w + s * C + c * r, n[1] = h * y + l * b + u * S + p * P, n[5] = h * R + l * _ + u * A + p * D, n[9] = h * x + l * M + u * L + p * B, n[13] = h * H + l * w + u * C + p * r, n[2] = d * y + f * b + E * S + m * P, n[6] = d * R + f * _ + E * A + m * D, n[10] = d * x + f * M + E * L + m * B, n[14] = d * H + f * w + E * C + m * r, n[3] = g * y + T * b + v * S + i * P, n[7] = g * R + T * _ + v * A + i * D, n[11] = g * x + T * M + v * L + i * B, n[15] = g * H + T * w + v * C + i * r, this
        },
        multiplyToArray: function(e, t, i) {
            var r = this.elements;
            return this.multiplyMatrices(e, t), i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], i[4] = r[4], i[5] = r[5], i[6] = r[6], i[7] = r[7], i[8] = r[8], i[9] = r[9], i[10] = r[10], i[11] = r[11], i[12] = r[12], i[13] = r[13], i[14] = r[14], i[15] = r[15], this
        },
        multiplyScalar: function(e) {
            var t = this.elements;
            return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
        },
        applyToVector3Array: function() {
            var e;
            return function(t, i, r) {
                void 0 === e && (e = new THREE.Vector3), void 0 === i && (i = 0), void 0 === r && (r = t.length);
                for (var n = 0; r > n; n += 3, i += 3) e.fromArray(t, i), e.applyMatrix4(this), e.toArray(t, i);
                return t
            }
        }(),
        applyToBuffer: function() {
            var e;
            return function(t, i, r) {
                void 0 === e && (e = new THREE.Vector3), void 0 === i && (i = 0), void 0 === r && (r = t.length / t.itemSize);
                for (var n = 0; r > n; n++, i++) e.x = t.getX(i), e.y = t.getY(i), e.z = t.getZ(i), e.applyMatrix4(this), t.setXYZ(e.x, e.y, e.z);
                return t
            }
        }(),
        determinant: function() {
            var e = this.elements,
                t = e[0],
                i = e[4],
                r = e[8],
                n = e[12],
                a = e[1],
                o = e[5],
                s = e[9],
                c = e[13],
                h = e[2],
                l = e[6],
                u = e[10],
                p = e[14];
            return e[3] * (+n * s * l - r * c * l - n * o * u + i * c * u + r * o * p - i * s * p) + e[7] * (+t * s * p - t * c * u + n * a * u - r * a * p + r * c * h - n * s * h) + e[11] * (+t * c * l - t * o * p - n * a * l + i * a * p + n * o * h - i * c * h) + e[15] * (-r * o * h - t * s * l + t * o * u + r * a * l - i * a * u + i * s * h)
        },
        transpose: function() {
            var e = this.elements,
                t;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
        },
        flattenToArrayOffset: function(e, t) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."), this.toArray(e, t)
        },
        getPosition: function() {
            var e;
            return function() {
                return void 0 === e && (e = new THREE.Vector3), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), e.setFromMatrixColumn(this, 3)
            }
        }(),
        setPosition: function(e) {
            var t = this.elements;
            return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
        },
        getInverse: function(e, t) {
            var i = this.elements,
                r = e.elements,
                n = r[0],
                a = r[1],
                o = r[2],
                s = r[3],
                c = r[4],
                h = r[5],
                l = r[6],
                u = r[7],
                p = r[8],
                d = r[9],
                f = r[10],
                E = r[11],
                m = r[12],
                g = r[13],
                T = r[14],
                r = r[15],
                v = d * T * u - g * f * u + g * l * E - h * T * E - d * l * r + h * f * r,
                y = m * f * u - p * T * u - m * l * E + c * T * E + p * l * r - c * f * r,
                R = p * g * u - m * d * u + m * h * E - c * g * E - p * h * r + c * d * r,
                x = m * d * l - p * g * l - m * h * f + c * g * f + p * h * T - c * d * T,
                H = n * v + a * y + o * R + s * x;
            if (0 === H) {
                if (t) throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
                return console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0"), this.identity()
            }
            return H = 1 / H, i[0] = v * H, i[1] = (g * f * s - d * T * s - g * o * E + a * T * E + d * o * r - a * f * r) * H, i[2] = (h * T * s - g * l * s + g * o * u - a * T * u - h * o * r + a * l * r) * H, i[3] = (d * l * s - h * f * s - d * o * u + a * f * u + h * o * E - a * l * E) * H, i[4] = y * H, i[5] = (p * T * s - m * f * s + m * o * E - n * T * E - p * o * r + n * f * r) * H, i[6] = (m * l * s - c * T * s - m * o * u + n * T * u + c * o * r - n * l * r) * H, i[7] = (c * f * s - p * l * s + p * o * u - n * f * u - c * o * E + n * l * E) * H, i[8] = R * H, i[9] = (m * d * s - p * g * s - m * a * E + n * g * E + p * a * r - n * d * r) * H, i[10] = (c * g * s - m * h * s + m * a * u - n * g * u - c * a * r + n * h * r) * H, i[11] = (p * h * s - c * d * s - p * a * u + n * d * u + c * a * E - n * h * E) * H, i[12] = x * H, i[13] = (p * g * o - m * d * o + m * a * f - n * g * f - p * a * T + n * d * T) * H, i[14] = (m * h * o - c * g * o - m * a * l + n * g * l + c * a * T - n * h * T) * H, i[15] = (c * d * o - p * h * o + p * a * l - n * d * l - c * a * f + n * h * f) * H, this
        },
        scale: function(e) {
            var t = this.elements,
                i = e.x,
                r = e.y;
            return e = e.z, t[0] *= i, t[4] *= r, t[8] *= e, t[1] *= i, t[5] *= r, t[9] *= e, t[2] *= i, t[6] *= r, t[10] *= e, t[3] *= i, t[7] *= r, t[11] *= e, this
        },
        getMaxScaleOnAxis: function() {
            var e = this.elements;
            return Math.sqrt(Math.max(e[0] * e[0] + e[1] * e[1] + e[2] * e[2], e[4] * e[4] + e[5] * e[5] + e[6] * e[6], e[8] * e[8] + e[9] * e[9] + e[10] * e[10]))
        },
        makeTranslation: function(e, t, i) {
            return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this
        },
        makeRotationX: function(e) {
            var t = Math.cos(e);
            return e = Math.sin(e), this.set(1, 0, 0, 0, 0, t, -e, 0, 0, e, t, 0, 0, 0, 0, 1), this
        },
        makeRotationY: function(e) {
            var t = Math.cos(e);
            return e = Math.sin(e), this.set(t, 0, e, 0, 0, 1, 0, 0, -e, 0, t, 0, 0, 0, 0, 1), this
        },
        makeRotationZ: function(e) {
            var t = Math.cos(e);
            return e = Math.sin(e), this.set(t, -e, 0, 0, e, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        makeRotationAxis: function(e, t) {
            var i = Math.cos(t),
                r = Math.sin(t),
                n = 1 - i,
                a = e.x,
                o = e.y,
                s = e.z,
                c = n * a,
                h = n * o;
            return this.set(c * a + i, c * o - r * s, c * s + r * o, 0, c * o + r * s, h * o + i, h * s - r * a, 0, c * s - r * o, h * s + r * a, n * s * s + i, 0, 0, 0, 0, 1), this
        },
        makeScale: function(e, t, i) {
            return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
        },
        compose: function(e, t, i) {
            return this.makeRotationFromQuaternion(t), this.scale(i), this.setPosition(e), this
        },
        decompose: function() {
            var e, t;
            return function(i, r, n) {
                void 0 === e && (e = new THREE.Vector3, t = new THREE.Matrix4);
                var a = this.elements,
                    o = e.set(a[0], a[1], a[2]).length(),
                    s = e.set(a[4], a[5], a[6]).length(),
                    c = e.set(a[8], a[9], a[10]).length();
                0 > this.determinant() && (o = -o), i.x = a[12], i.y = a[13], i.z = a[14], t.elements.set(this.elements), i = 1 / o;
                var a = 1 / s,
                    h = 1 / c;
                return t.elements[0] *= i, t.elements[1] *= i, t.elements[2] *= i, t.elements[4] *= a, t.elements[5] *= a, t.elements[6] *= a, t.elements[8] *= h, t.elements[9] *= h, t.elements[10] *= h, r.setFromRotationMatrix(t), n.x = o, n.y = s, n.z = c, this
            }
        }(),
        makeFrustum: function(e, t, i, r, n, a) {
            var o = this.elements;
            return o[0] = 2 * n / (t - e), o[4] = 0, o[8] = (t + e) / (t - e), o[12] = 0, o[1] = 0, o[5] = 2 * n / (r - i), o[9] = (r + i) / (r - i), o[13] = 0, o[2] = 0, o[6] = 0, o[10] = -(a + n) / (a - n), o[14] = -2 * a * n / (a - n), o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
        },
        makePerspective: function(e, t, i, r) {
            e = i * Math.tan(THREE.Math.DEG2RAD * e * .5);
            var n = -e;
            return this.makeFrustum(n * t, e * t, n, e, i, r)
        },
        makeOrthographic: function(e, t, i, r, n, a) {
            var o = this.elements,
                s = 1 / (t - e),
                c = 1 / (i - r),
                h = 1 / (a - n);
            return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -((t + e) * s), o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -((i + r) * c), o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -((a + n) * h), o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
        },
        equals: function(e) {
            var t = this.elements;
            e = e.elements;
            for (var i = 0; 16 > i; i++)
                if (t[i] !== e[i]) return !1;
            return !0
        },
        fromArray: function(e) {
            return this.elements.set(e), this
        },
        toArray: function(e, t) {
            void 0 === e && (e = []), void 0 === t && (t = 0);
            var i = this.elements;
            return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e
        }
    }, THREE.Ray = function(e, t) {
        this.origin = void 0 !== e ? e : new THREE.Vector3, this.direction = void 0 !== t ? t : new THREE.Vector3
    }, THREE.Ray.prototype = {
        constructor: THREE.Ray,
        set: function(e, t) {
            return this.origin.copy(e), this.direction.copy(t), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.origin.copy(e.origin), this.direction.copy(e.direction), this
        },
        at: function(e, t) {
            return (t || new THREE.Vector3).copy(this.direction).multiplyScalar(e).add(this.origin)
        },
        lookAt: function(e) {
            return this.direction.copy(e).sub(this.origin).normalize(), this
        },
        recast: function() {
            var e = new THREE.Vector3;
            return function(t) {
                return this.origin.copy(this.at(t, e)), this
            }
        }(),
        closestPointToPoint: function(e, t) {
            var i = t || new THREE.Vector3;
            i.subVectors(e, this.origin);
            var r = i.dot(this.direction);
            return 0 > r ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(r).add(this.origin)
        },
        distanceToPoint: function(e) {
            return Math.sqrt(this.distanceSqToPoint(e))
        },
        distanceSqToPoint: function() {
            var e = new THREE.Vector3;
            return function(t) {
                var i = e.subVectors(t, this.origin).dot(this.direction);
                return 0 > i ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(i).add(this.origin), e.distanceToSquared(t))
            }
        }(),
        distanceSqToSegment: function() {
            var e = new THREE.Vector3,
                t = new THREE.Vector3,
                i = new THREE.Vector3;
            return function(r, n, a, o) {
                e.copy(r).add(n).multiplyScalar(.5), t.copy(n).sub(r).normalize(), i.copy(this.origin).sub(e);
                var s = .5 * r.distanceTo(n),
                    c = -this.direction.dot(t),
                    h = i.dot(this.direction),
                    l = -i.dot(t),
                    u = i.lengthSq(),
                    p = Math.abs(1 - c * c),
                    d;
                return p > 0 ? (r = c * l - h, n = c * h - l, d = s * p, r >= 0 ? n >= -d ? d >= n ? (s = 1 / p, r *= s, n *= s, c = r * (r + c * n + 2 * h) + n * (c * r + n + 2 * l) + u) : (n = s, r = Math.max(0, -(c * n + h)), c = -r * r + n * (n + 2 * l) + u) : (n = -s, r = Math.max(0, -(c * n + h)), c = -r * r + n * (n + 2 * l) + u) : -d >= n ? (r = Math.max(0, -(-c * s + h)), n = r > 0 ? -s : Math.min(Math.max(-s, -l), s), c = -r * r + n * (n + 2 * l) + u) : d >= n ? (r = 0, n = Math.min(Math.max(-s, -l), s), c = n * (n + 2 * l) + u) : (r = Math.max(0, -(c * s + h)), n = r > 0 ? s : Math.min(Math.max(-s, -l), s), c = -r * r + n * (n + 2 * l) + u)) : (n = c > 0 ? -s : s, r = Math.max(0, -(c * n + h)), c = -r * r + n * (n + 2 * l) + u), a && a.copy(this.direction).multiplyScalar(r).add(this.origin), o && o.copy(t).multiplyScalar(n).add(e), c
            }
        }(),
        intersectSphere: function() {
            var e = new THREE.Vector3;
            return function(t, i) {
                e.subVectors(t.center, this.origin);
                var r = e.dot(this.direction),
                    n = e.dot(e) - r * r,
                    a = t.radius * t.radius;
                return n > a ? null : (a = Math.sqrt(a - n), n = r - a, r += a, 0 > n && 0 > r ? null : 0 > n ? this.at(r, i) : this.at(n, i))
            }
        }(),
        intersectsSphere: function(e) {
            return this.distanceToPoint(e.center) <= e.radius
        },
        distanceToPlane: function(e) {
            var t = e.normal.dot(this.direction);
            return 0 === t ? 0 === e.distanceToPoint(this.origin) ? 0 : null : (e = -(this.origin.dot(e.normal) + e.constant) / t, e >= 0 ? e : null)
        },
        intersectPlane: function(e, t) {
            var i = this.distanceToPlane(e);
            return null === i ? null : this.at(i, t)
        },
        intersectsPlane: function(e) {
            var t = e.distanceToPoint(this.origin);
            return 0 === t || 0 > e.normal.dot(this.direction) * t ? !0 : !1
        },
        intersectBox: function(e, t) {
            var i, r, n, a, o;
            r = 1 / this.direction.x, a = 1 / this.direction.y, o = 1 / this.direction.z;
            var s = this.origin;
            return r >= 0 ? (i = (e.min.x - s.x) * r, r *= e.max.x - s.x) : (i = (e.max.x - s.x) * r, r *= e.min.x - s.x), a >= 0 ? (n = (e.min.y - s.y) * a, a *= e.max.y - s.y) : (n = (e.max.y - s.y) * a, a *= e.min.y - s.y), i > a || n > r ? null : ((n > i || i !== i) && (i = n), (r > a || r !== r) && (r = a), o >= 0 ? (n = (e.min.z - s.z) * o, o *= e.max.z - s.z) : (n = (e.max.z - s.z) * o, o *= e.min.z - s.z), i > o || n > r ? null : ((n > i || i !== i) && (i = n), (r > o || r !== r) && (r = o), 0 > r ? null : this.at(i >= 0 ? i : r, t)))
        },
        intersectsBox: function() {
            var e = new THREE.Vector3;
            return function(t) {
                return null !== this.intersectBox(t, e)
            }
        }(),
        intersectTriangle: function() {
            var e = new THREE.Vector3,
                t = new THREE.Vector3,
                i = new THREE.Vector3,
                r = new THREE.Vector3;
            return function(n, a, o, s, c) {
                if (t.subVectors(a, n), i.subVectors(o, n), r.crossVectors(t, i), a = this.direction.dot(r), a > 0) {
                    if (s) return null;
                    s = 1
                } else {
                    if (!(0 > a)) return null;
                    s = -1, a = -a
                }
                return e.subVectors(this.origin, n), n = s * this.direction.dot(i.crossVectors(e, i)), 0 > n ? null : (o = s * this.direction.dot(t.cross(e)), 0 > o || n + o > a ? null : (n = -s * e.dot(r), 0 > n ? null : this.at(n / a, c)))
            }
        }(),
        applyMatrix4: function(e) {
            return this.direction.add(this.origin).applyMatrix4(e), this.origin.applyMatrix4(e), this.direction.sub(this.origin), this.direction.normalize(), this
        },
        equals: function(e) {
            return e.origin.equals(this.origin) && e.direction.equals(this.direction)
        }
    }, THREE.Sphere = function(e, t) {
        this.center = void 0 !== e ? e : new THREE.Vector3, this.radius = void 0 !== t ? t : 0
    }, THREE.Sphere.prototype = {
        constructor: THREE.Sphere,
        set: function(e, t) {
            return this.center.copy(e), this.radius = t, this
        },
        setFromPoints: function() {
            var e = new THREE.Box3;
            return function(t, i) {
                var r = this.center;
                void 0 !== i ? r.copy(i) : e.setFromPoints(t).center(r);
                for (var n = 0, a = 0, o = t.length; o > a; a++) n = Math.max(n, r.distanceToSquared(t[a]));
                return this.radius = Math.sqrt(n), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.center.copy(e.center), this.radius = e.radius, this
        },
        empty: function() {
            return 0 >= this.radius
        },
        containsPoint: function(e) {
            return e.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(e) {
            return e.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(e) {
            var t = this.radius + e.radius;
            return e.center.distanceToSquared(this.center) <= t * t
        },
        intersectsBox: function(e) {
            return e.intersectsSphere(this)
        },
        intersectsPlane: function(e) {
            return Math.abs(this.center.dot(e.normal) - e.constant) <= this.radius
        },
        clampPoint: function(e, t) {
            var i = this.center.distanceToSquared(e),
                r = t || new THREE.Vector3;
            return r.copy(e), i > this.radius * this.radius && (r.sub(this.center).normalize(), r.multiplyScalar(this.radius).add(this.center)), r
        },
        getBoundingBox: function(e) {
            return e = e || new THREE.Box3, e.set(this.center, this.center), e.expandByScalar(this.radius), e
        },
        applyMatrix4: function(e) {
            return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this
        },
        translate: function(e) {
            return this.center.add(e), this
        },
        equals: function(e) {
            return e.center.equals(this.center) && e.radius === this.radius
        }
    }, THREE.Frustum = function(e, t, i, r, n, a) {
        this.planes = [void 0 !== e ? e : new THREE.Plane, void 0 !== t ? t : new THREE.Plane, void 0 !== i ? i : new THREE.Plane, void 0 !== r ? r : new THREE.Plane, void 0 !== n ? n : new THREE.Plane, void 0 !== a ? a : new THREE.Plane]
    }, THREE.Frustum.prototype = {
        constructor: THREE.Frustum,
        set: function(e, t, i, r, n, a) {
            var o = this.planes;
            return o[0].copy(e), o[1].copy(t), o[2].copy(i), o[3].copy(r), o[4].copy(n), o[5].copy(a), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            for (var t = this.planes, i = 0; 6 > i; i++) t[i].copy(e.planes[i]);
            return this
        },
        setFromMatrix: function(e) {
            var t = this.planes,
                i = e.elements;
            e = i[0];
            var r = i[1],
                n = i[2],
                a = i[3],
                o = i[4],
                s = i[5],
                c = i[6],
                h = i[7],
                l = i[8],
                u = i[9],
                p = i[10],
                d = i[11],
                f = i[12],
                E = i[13],
                m = i[14],
                i = i[15];
            return t[0].setComponents(a - e, h - o, d - l, i - f).normalize(), t[1].setComponents(a + e, h + o, d + l, i + f).normalize(), t[2].setComponents(a + r, h + s, d + u, i + E).normalize(), t[3].setComponents(a - r, h - s, d - u, i - E).normalize(), t[4].setComponents(a - n, h - c, d - p, i - m).normalize(), t[5].setComponents(a + n, h + c, d + p, i + m).normalize(), this
        },
        intersectsObject: function() {
            var e = new THREE.Sphere;
            return function(t) {
                var i = t.geometry;
                return null === i.boundingSphere && i.computeBoundingSphere(), e.copy(i.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
            }
        }(),
        intersectsSprite: function() {
            var e = new THREE.Sphere;
            return function(t) {
                return e.center.set(0, 0, 0), e.radius = .7071067811865476, e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
            }
        }(),
        intersectsSphere: function(e) {
            var t = this.planes,
                i = e.center;
            e = -e.radius;
            for (var r = 0; 6 > r; r++)
                if (t[r].distanceToPoint(i) < e) return !1;
            return !0
        },
        intersectsBox: function() {
            var e = new THREE.Vector3,
                t = new THREE.Vector3;
            return function(i) {
                for (var r = this.planes, n = 0; 6 > n; n++) {
                    var a = r[n];
                    e.x = 0 < a.normal.x ? i.min.x : i.max.x, t.x = 0 < a.normal.x ? i.max.x : i.min.x, e.y = 0 < a.normal.y ? i.min.y : i.max.y, t.y = 0 < a.normal.y ? i.max.y : i.min.y, e.z = 0 < a.normal.z ? i.min.z : i.max.z, t.z = 0 < a.normal.z ? i.max.z : i.min.z;
                    var o = a.distanceToPoint(e),
                        a = a.distanceToPoint(t);
                    if (0 > o && 0 > a) return !1
                }
                return !0
            }
        }(),
        containsPoint: function(e) {
            for (var t = this.planes, i = 0; 6 > i; i++)
                if (0 > t[i].distanceToPoint(e)) return !1;
            return !0
        }
    }, THREE.Plane = function(e, t) {
        this.normal = void 0 !== e ? e : new THREE.Vector3(1, 0, 0), this.constant = void 0 !== t ? t : 0
    }, THREE.Plane.prototype = {
        constructor: THREE.Plane,
        set: function(e, t) {
            return this.normal.copy(e), this.constant = t, this
        },
        setComponents: function(e, t, i, r) {
            return this.normal.set(e, t, i), this.constant = r, this
        },
        setFromNormalAndCoplanarPoint: function(e, t) {
            return this.normal.copy(e), this.constant = -t.dot(this.normal), this
        },
        setFromCoplanarPoints: function() {
            var e = new THREE.Vector3,
                t = new THREE.Vector3;
            return function(i, r, n) {
                return r = e.subVectors(n, r).cross(t.subVectors(i, r)).normalize(), this.setFromNormalAndCoplanarPoint(r, i), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.normal.copy(e.normal), this.constant = e.constant, this
        },
        normalize: function() {
            var e = 1 / this.normal.length();
            return this.normal.multiplyScalar(e), this.constant *= e, this
        },
        negate: function() {
            return this.constant *= -1, this.normal.negate(), this
        },
        distanceToPoint: function(e) {
            return this.normal.dot(e) + this.constant
        },
        distanceToSphere: function(e) {
            return this.distanceToPoint(e.center) - e.radius
        },
        projectPoint: function(e, t) {
            return this.orthoPoint(e, t).sub(e).negate()
        },
        orthoPoint: function(e, t) {
            var i = this.distanceToPoint(e);
            return (t || new THREE.Vector3).copy(this.normal).multiplyScalar(i)
        },
        intersectLine: function() {
            var e = new THREE.Vector3;
            return function(t, i) {
                var r = i || new THREE.Vector3,
                    n = t.delta(e),
                    a = this.normal.dot(n);
                return 0 !== a ? (a = -(t.start.dot(this.normal) + this.constant) / a, 0 > a || a > 1 ? void 0 : r.copy(n).multiplyScalar(a).add(t.start)) : 0 === this.distanceToPoint(t.start) ? r.copy(t.start) : void 0
            }
        }(),
        intersectsLine: function(e) {
            var t = this.distanceToPoint(e.start);
            return e = this.distanceToPoint(e.end), 0 > t && e > 0 || 0 > e && t > 0
        },
        intersectsBox: function(e) {
            return e.intersectsPlane(this)
        },
        intersectsSphere: function(e) {
            return e.intersectsPlane(this)
        },
        coplanarPoint: function(e) {
            return (e || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function() {
            var e = new THREE.Vector3,
                t = new THREE.Matrix3;
            return function(i, r) {
                var n = this.coplanarPoint(e).applyMatrix4(i),
                    a = r || t.getNormalMatrix(i),
                    a = this.normal.applyMatrix3(a).normalize();
                return this.constant = -n.dot(a), this
            }
        }(),
        translate: function(e) {
            return this.constant -= e.dot(this.normal), this
        },
        equals: function(e) {
            return e.normal.equals(this.normal) && e.constant === this.constant
        }
    }, THREE.Spherical = function(e, t, i) {
        return this.radius = void 0 !== e ? e : 1, this.phi = void 0 !== t ? t : 0, this.theta = void 0 !== i ? i : 0, this
    }, THREE.Spherical.prototype = {
        constructor: THREE.Spherical,
        set: function(e, t, i) {
            return this.radius = e, this.phi = t, this.theta = i, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.radius.copy(e.radius), this.phi.copy(e.phi), this.theta.copy(e.theta), this
        },
        makeSafe: function() {
            return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
        },
        setFromVector3: function(e) {
            return this.radius = e.length(), 0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(e.x, e.z), this.phi = Math.acos(THREE.Math.clamp(e.y / this.radius, -1, 1))), this
        }
    }, THREE.Math = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function() {
            var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                t = Array(36),
                i = 0,
                r;
            return function() {
                for (var n = 0; 36 > n; n++) 8 === n || 13 === n || 18 === n || 23 === n ? t[n] = "-" : 14 === n ? t[n] = "4" : (2 >= i && (i = 33554432 + 16777216 * Math.random() | 0), r = 15 & i, i >>= 4, t[n] = e[19 === n ? 3 & r | 8 : r]);
                return t.join("")
            }
        }(),
        clamp: function(e, t, i) {
            return Math.max(t, Math.min(i, e))
        },
        euclideanModulo: function(e, t) {
            return (e % t + t) % t
        },
        mapLinear: function(e, t, i, r, n) {
            return r + (e - t) * (n - r) / (i - t)
        },
        smoothstep: function(e, t, i) {
            return t >= e ? 0 : e >= i ? 1 : (e = (e - t) / (i - t), e * e * (3 - 2 * e))
        },
        smootherstep: function(e, t, i) {
            return t >= e ? 0 : e >= i ? 1 : (e = (e - t) / (i - t), e * e * e * (e * (6 * e - 15) + 10))
        },
        random16: function() {
            return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."), Math.random()
        },
        randInt: function(e, t) {
            return e + Math.floor(Math.random() * (t - e + 1))
        },
        randFloat: function(e, t) {
            return e + Math.random() * (t - e)
        },
        randFloatSpread: function(e) {
            return e * (.5 - Math.random())
        },
        degToRad: function(e) {
            return e * THREE.Math.DEG2RAD
        },
        radToDeg: function(e) {
            return e * THREE.Math.RAD2DEG
        },
        isPowerOfTwo: function(e) {
            return 0 === (e & e - 1) && 0 !== e
        },
        nearestPowerOfTwo: function(e) {
            return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
        },
        nextPowerOfTwo: function(e) {
            return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, e
        }
    }, THREE.Spline = function(e) {
        function t(e, t, i, r, n, a, o) {
            return e = .5 * (i - e), r = .5 * (r - t), (2 * (t - i) + e + r) * o + (-3 * (t - i) - 2 * e - r) * a + e * n + t
        }
        this.points = e;
        var i = [],
            r = {
                x: 0,
                y: 0,
                z: 0
            },
            n, a, o, s, c, h, l, u, p;
        this.initFromArray = function(e) {
            this.points = [];
            for (var t = 0; t < e.length; t++) this.points[t] = {
                x: e[t][0],
                y: e[t][1],
                z: e[t][2]
            }
        }, this.getPoint = function(e) {
            return n = (this.points.length - 1) * e, a = Math.floor(n), o = n - a, i[0] = 0 === a ? a : a - 1, i[1] = a, i[2] = a > this.points.length - 2 ? this.points.length - 1 : a + 1, i[3] = a > this.points.length - 3 ? this.points.length - 1 : a + 2, h = this.points[i[0]], l = this.points[i[1]], u = this.points[i[2]], p = this.points[i[3]], s = o * o, c = o * s, r.x = t(h.x, l.x, u.x, p.x, o, s, c), r.y = t(h.y, l.y, u.y, p.y, o, s, c), r.z = t(h.z, l.z, u.z, p.z, o, s, c), r
        }, this.getControlPointsArray = function() {
            var e, t, i = this.points.length,
                r = [];
            for (e = 0; i > e; e++) t = this.points[e], r[e] = [t.x, t.y, t.z];
            return r
        }, this.getLength = function(e) {
            var t, i, r, n = t = t = 0,
                a = new THREE.Vector3,
                o = new THREE.Vector3,
                s = [],
                c = 0;
            for (s[0] = 0, e || (e = 100), i = this.points.length * e, a.copy(this.points[0]), e = 1; i > e; e++) t = e / i, r = this.getPoint(t), o.copy(r), c += o.distanceTo(a), a.copy(r), t *= this.points.length - 1, t = Math.floor(t), t !== n && (s[t] = c, n = t);
            return s[s.length] = c, {
                chunks: s,
                total: c
            }
        }, this.reparametrizeByArcLength = function(e) {
            var t, i, r, n, a, o, s = [],
                c = new THREE.Vector3,
                h = this.getLength();
            for (s.push(c.copy(this.points[0]).clone()), t = 1; t < this.points.length; t++) {
                for (i = h.chunks[t] - h.chunks[t - 1], o = Math.ceil(e * i / h.total), n = (t - 1) / (this.points.length - 1), a = t / (this.points.length - 1), i = 1; o - 1 > i; i++) r = n + 1 / o * i * (a - n), r = this.getPoint(r), s.push(c.copy(r).clone());
                s.push(c.copy(this.points[t]).clone())
            }
            this.points = s
        }
    }, THREE.Triangle = function(e, t, i) {
        this.a = void 0 !== e ? e : new THREE.Vector3, this.b = void 0 !== t ? t : new THREE.Vector3, this.c = void 0 !== i ? i : new THREE.Vector3
    }, THREE.Triangle.normal = function() {
        var e = new THREE.Vector3;
        return function(t, i, r, n) {
            return n = n || new THREE.Vector3, n.subVectors(r, i), e.subVectors(t, i), n.cross(e), t = n.lengthSq(), t > 0 ? n.multiplyScalar(1 / Math.sqrt(t)) : n.set(0, 0, 0)
        }
    }(), THREE.Triangle.barycoordFromPoint = function() {
        var e = new THREE.Vector3,
            t = new THREE.Vector3,
            i = new THREE.Vector3;
        return function(r, n, a, o, s) {
            e.subVectors(o, n), t.subVectors(a, n), i.subVectors(r, n), r = e.dot(e), n = e.dot(t), a = e.dot(i);
            var c = t.dot(t);
            o = t.dot(i);
            var h = r * c - n * n;
            return s = s || new THREE.Vector3, 0 === h ? s.set(-2, -1, -1) : (h = 1 / h, c = (c * a - n * o) * h, r = (r * o - n * a) * h, s.set(1 - c - r, r, c))
        }
    }(), THREE.Triangle.containsPoint = function() {
        var e = new THREE.Vector3;
        return function(t, i, r, n) {
            return t = THREE.Triangle.barycoordFromPoint(t, i, r, n, e), 0 <= t.x && 0 <= t.y && 1 >= t.x + t.y
        }
    }(), THREE.Triangle.prototype = {
        constructor: THREE.Triangle,
        set: function(e, t, i) {
            return this.a.copy(e), this.b.copy(t), this.c.copy(i), this
        },
        setFromPointsAndIndices: function(e, t, i, r) {
            return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[r]), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
        },
        area: function() {
            var e = new THREE.Vector3,
                t = new THREE.Vector3;
            return function() {
                return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
            }
        }(),
        midpoint: function(e) {
            return (e || new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        normal: function(e) {
            return THREE.Triangle.normal(this.a, this.b, this.c, e)
        },
        plane: function(e) {
            return (e || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function(e, t) {
            return THREE.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
        },
        containsPoint: function(e) {
            return THREE.Triangle.containsPoint(e, this.a, this.b, this.c)
        },
        closestPointToPoint: function() {
            var e, t, i, r;
            return function(n, a) {
                void 0 === e && (e = new THREE.Plane, t = [new THREE.Line3, new THREE.Line3, new THREE.Line3], i = new THREE.Vector3, r = new THREE.Vector3);
                var o = a || new THREE.Vector3,
                    s = 1 / 0;
                if (e.setFromCoplanarPoints(this.a, this.b, this.c), e.projectPoint(n, i), !0 === this.containsPoint(i)) o.copy(i);
                else {
                    t[0].set(this.a, this.b), t[1].set(this.b, this.c), t[2].set(this.c, this.a);
                    for (var c = 0; c < t.length; c++) {
                        t[c].closestPointToPoint(i, !0, r);
                        var h = i.distanceToSquared(r);
                        s > h && (s = h, o.copy(r))
                    }
                }
                return o
            }
        }(),
        equals: function(e) {
            return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
        }
    }, THREE.Interpolant = function(e, t, i, r) {
        this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = void 0 !== r ? r : new t.constructor(i), this.sampleValues = t, this.valueSize = i
    }, THREE.Interpolant.prototype = {
        constructor: THREE.Interpolant,
        evaluate: function(e) {
            var t = this.parameterPositions,
                i = this._cachedIndex,
                r = t[i],
                n = t[i - 1];
            e: {
                t: {
                    i: {
                        r: if (!(r > e)) {
                            for (var a = i + 2;;) {
                                if (void 0 === r) {
                                    if (n > e) break r;
                                    return this._cachedIndex = i = t.length, this.afterEnd_(i - 1, e, n)
                                }
                                if (i === a) break;
                                if (n = r, r = t[++i], r > e) break t
                            }
                            r = t.length;
                            break i
                        }if (e >= n) break e;
                        for (a = t[1], a > e && (i = 2, n = a), a = i - 2;;) {
                            if (void 0 === n) return this._cachedIndex = 0, this.beforeStart_(0, e, r);
                            if (i === a) break;
                            if (r = n, n = t[--i - 1], e >= n) break t
                        }
                        r = i,
                        i = 0
                    }
                    for (; r > i;) n = i + r >>> 1,
                    e < t[n] ? r = n : i = n + 1;
                    if (r = t[i], n = t[i - 1], void 0 === n) return this._cachedIndex = 0,
                    this.beforeStart_(0, e, r);
                    if (void 0 === r) return this._cachedIndex = i = t.length,
                    this.afterEnd_(i - 1, n, e)
                }
                this._cachedIndex = i,
                this.intervalChanged_(i, n, r)
            }
            return this.interpolate_(i, n, e, r)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(e) {
            var t = this.resultBuffer,
                i = this.sampleValues,
                r = this.valueSize;
            e *= r;
            for (var n = 0; n !== r; ++n) t[n] = i[e + n];
            return t
        },
        interpolate_: function(e, t, i, r) {
            throw Error("call to abstract method")
        },
        intervalChanged_: function(e, t, i) {}
    }, Object.assign(THREE.Interpolant.prototype, {
        beforeStart_: THREE.Interpolant.prototype.copySampleValue_,
        afterEnd_: THREE.Interpolant.prototype.copySampleValue_
    }), THREE.CubicInterpolant = function(e, t, i, r) {
        THREE.Interpolant.call(this, e, t, i, r), this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0
    }, THREE.CubicInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
        constructor: THREE.CubicInterpolant,
        DefaultSettings_: {
            endingStart: THREE.ZeroCurvatureEnding,
            endingEnd: THREE.ZeroCurvatureEnding
        },
        intervalChanged_: function(e, t, i) {
            var r = this.parameterPositions,
                n = e - 2,
                a = e + 1,
                o = r[n],
                s = r[a];
            if (void 0 === o) switch (this.getSettings_().endingStart) {
                case THREE.ZeroSlopeEnding:
                    n = e, o = 2 * t - i;
                    break;
                case THREE.WrapAroundEnding:
                    n = r.length - 2, o = t + r[n] - r[n + 1];
                    break;
                default:
                    n = e, o = i
            }
            if (void 0 === s) switch (this.getSettings_().endingEnd) {
                case THREE.ZeroSlopeEnding:
                    a = e, s = 2 * i - t;
                    break;
                case THREE.WrapAroundEnding:
                    a = 1, s = i + r[1] - r[0];
                    break;
                default:
                    a = e - 1, s = t
            }
            e = .5 * (i - t), r = this.valueSize, this._weightPrev = e / (t - o), this._weightNext = e / (s - i), this._offsetPrev = n * r, this._offsetNext = a * r
        },
        interpolate_: function(e, t, i, r) {
            var n = this.resultBuffer,
                a = this.sampleValues,
                o = this.valueSize;
            e *= o;
            var s = e - o,
                c = this._offsetPrev,
                h = this._offsetNext,
                l = this._weightPrev,
                u = this._weightNext,
                p = (i - t) / (r - t);
            for (i = p * p, r = i * p, t = -l * r + 2 * l * i - l * p, l = (1 + l) * r + (-1.5 - 2 * l) * i + (-.5 + l) * p + 1, p = (-1 - u) * r + (1.5 + u) * i + .5 * p, u = u * r - u * i, i = 0; i !== o; ++i) n[i] = t * a[c + i] + l * a[s + i] + p * a[e + i] + u * a[h + i];
            return n
        }
    }), THREE.DiscreteInterpolant = function(e, t, i, r) {
        THREE.Interpolant.call(this, e, t, i, r)
    }, THREE.DiscreteInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
        constructor: THREE.DiscreteInterpolant,
        interpolate_: function(e, t, i, r) {
            return this.copySampleValue_(e - 1)
        }
    }), THREE.LinearInterpolant = function(e, t, i, r) {
        THREE.Interpolant.call(this, e, t, i, r)
    }, THREE.LinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
        constructor: THREE.LinearInterpolant,
        interpolate_: function(e, t, i, r) {
            var n = this.resultBuffer,
                a = this.sampleValues,
                o = this.valueSize;
            e *= o;
            var s = e - o;
            for (t = (i - t) / (r - t), i = 1 - t, r = 0; r !== o; ++r) n[r] = a[s + r] * i + a[e + r] * t;
            return n
        }
    }), THREE.QuaternionLinearInterpolant = function(e, t, i, r) {
        THREE.Interpolant.call(this, e, t, i, r)
    }, THREE.QuaternionLinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
        constructor: THREE.QuaternionLinearInterpolant,
        interpolate_: function(e, t, i, r) {
            var n = this.resultBuffer,
                a = this.sampleValues,
                o = this.valueSize;
            for (e *= o, t = (i - t) / (r - t), i = e + o; e !== i; e += 4) THREE.Quaternion.slerpFlat(n, 0, a, e - o, a, e, t);
            return n
        }
    }), THREE.Clock = function(e) {
        this.autoStart = void 0 !== e ? e : !0, this.elapsedTime = this.oldTime = this.startTime = 0, this.running = !1
    }, THREE.Clock.prototype = {
        constructor: THREE.Clock,
        start: function() {
            this.oldTime = this.startTime = (performance || Date).now(), this.running = !0
        },
        stop: function() {
            this.getElapsedTime(), this.running = !1
        },
        getElapsedTime: function() {
            return this.getDelta(), this.elapsedTime
        },
        getDelta: function() {
            var e = 0;
            if (this.autoStart && !this.running && this.start(), this.running) {
                var t = (performance || Date).now(),
                    e = (t - this.oldTime) / 1e3;
                this.oldTime = t, this.elapsedTime += e
            }
            return e
        }
    }, THREE.EventDispatcher = function() {}, Object.assign(THREE.EventDispatcher.prototype, {
        addEventListener: function(e, t) {
            void 0 === this._listeners && (this._listeners = {});
            var i = this._listeners;
            void 0 === i[e] && (i[e] = []), -1 === i[e].indexOf(t) && i[e].push(t)
        },
        hasEventListener: function(e, t) {
            if (void 0 === this._listeners) return !1;
            var i = this._listeners;
            return void 0 !== i[e] && -1 !== i[e].indexOf(t) ? !0 : !1
        },
        removeEventListener: function(e, t) {
            if (void 0 !== this._listeners) {
                var i = this._listeners[e];
                if (void 0 !== i) {
                    var r = i.indexOf(t); - 1 !== r && i.splice(r, 1)
                }
            }
        },
        dispatchEvent: function(e) {
            if (void 0 !== this._listeners) {
                var t = this._listeners[e.type];
                if (void 0 !== t) {
                    e.target = this;
                    for (var i = [], r = 0, n = t.length, r = 0; n > r; r++) i[r] = t[r];
                    for (r = 0; n > r; r++) i[r].call(this, e)
                }
            }
        }
    }), THREE.Layers = function() {
        this.mask = 1
    }, THREE.Layers.prototype = {
        constructor: THREE.Layers,
        set: function(e) {
            this.mask = 1 << e
        },
        enable: function(e) {
            this.mask |= 1 << e
        },
        toggle: function(e) {
            this.mask ^= 1 << e
        },
        disable: function(e) {
            this.mask &= ~(1 << e)
        },
        test: function(e) {
            return 0 !== (this.mask & e.mask)
        }
    },
    function(e) {
        function t(e, t) {
            return e.distance - t.distance
        }

        function i(e, t, r, n) {
            if (!1 !== e.visible && (e.raycast(t, r), !0 === n)) {
                e = e.children, n = 0;
                for (var a = e.length; a > n; n++) i(e[n], t, r, !0)
            }
        }
        e.Raycaster = function(t, i, r, n) {
            this.ray = new e.Ray(t, i), this.near = r || 0, this.far = n || 1 / 0, this.params = {
                Mesh: {},
                Line: {},
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            }, Object.defineProperties(this.params, {
                PointCloud: {
                    get: function() {
                        return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                    }
                }
            })
        }, e.Raycaster.prototype = {
            constructor: e.Raycaster,
            linePrecision: 1,
            set: function(e, t) {
                this.ray.set(e, t)
            },
            setFromCamera: function(t, i) {
                i instanceof e.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(i.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(i).sub(this.ray.origin).normalize()) : i instanceof e.OrthographicCamera ? (this.ray.origin.set(t.x, t.y, (i.near + i.far) / (i.near - i.far)).unproject(i), this.ray.direction.set(0, 0, -1).transformDirection(i.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
            },
            intersectObject: function(e, r) {
                var n = [];
                return i(e, this, n, r), n.sort(t), n
            },
            intersectObjects: function(e, r) {
                var n = [];
                if (!1 === Array.isArray(e)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
                for (var a = 0, o = e.length; o > a; a++) i(e[a], this, n, r);
                return n.sort(t), n
            }
        }
    }(THREE), THREE.Object3D = function() {
        Object.defineProperty(this, "id", {
            value: THREE.Object3DIdCount++
        }), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = THREE.Object3D.DefaultUp.clone();
        var e = new THREE.Vector3,
            t = new THREE.Euler,
            i = new THREE.Quaternion,
            r = new THREE.Vector3(1, 1, 1);
        t.onChange(function() {
            i.setFromEuler(t, !1)
        }), i.onChange(function() {
            t.setFromQuaternion(i, void 0, !1)
        }), Object.defineProperties(this, {
            position: {
                enumerable: !0,
                value: e
            },
            rotation: {
                enumerable: !0,
                value: t
            },
            quaternion: {
                enumerable: !0,
                value: i
            },
            scale: {
                enumerable: !0,
                value: r
            },
            modelViewMatrix: {
                value: new THREE.Matrix4
            },
            normalMatrix: {
                value: new THREE.Matrix3
            }
        }), this.matrix = new THREE.Matrix4, this.matrixWorld = new THREE.Matrix4, this.matrixAutoUpdate = THREE.Object3D.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new THREE.Layers, this.visible = !0, this.receiveShadow = this.castShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
    }, THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0), THREE.Object3D.DefaultMatrixAutoUpdate = !0, Object.assign(THREE.Object3D.prototype, THREE.EventDispatcher.prototype, {
        applyMatrix: function(e) {
            this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        setRotationFromAxisAngle: function(e, t) {
            this.quaternion.setFromAxisAngle(e, t)
        },
        setRotationFromEuler: function(e) {
            this.quaternion.setFromEuler(e, !0)
        },
        setRotationFromMatrix: function(e) {
            this.quaternion.setFromRotationMatrix(e)
        },
        setRotationFromQuaternion: function(e) {
            this.quaternion.copy(e)
        },
        rotateOnAxis: function() {
            var e = new THREE.Quaternion;
            return function(t, i) {
                return e.setFromAxisAngle(t, i), this.quaternion.multiply(e), this
            }
        }(),
        rotateX: function() {
            var e = new THREE.Vector3(1, 0, 0);
            return function(t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        rotateY: function() {
            var e = new THREE.Vector3(0, 1, 0);
            return function(t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        rotateZ: function() {
            var e = new THREE.Vector3(0, 0, 1);
            return function(t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        translateOnAxis: function() {
            var e = new THREE.Vector3;
            return function(t, i) {
                return e.copy(t).applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(i)), this
            }
        }(),
        translateX: function() {
            var e = new THREE.Vector3(1, 0, 0);
            return function(t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        translateY: function() {
            var e = new THREE.Vector3(0, 1, 0);
            return function(t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        translateZ: function() {
            var e = new THREE.Vector3(0, 0, 1);
            return function(t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        localToWorld: function(e) {
            return e.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function() {
            var e = new THREE.Matrix4;
            return function(t) {
                return t.applyMatrix4(e.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function() {
            var e = new THREE.Matrix4;
            return function(t) {
                e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e)
            }
        }(),
        add: function(e) {
            if (1 < arguments.length) {
                for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
                return this
            }
            return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e instanceof THREE.Object3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({
                type: "added"
            }), this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
        },
        remove: function(e) {
            if (1 < arguments.length)
                for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
            t = this.children.indexOf(e), -1 !== t && (e.parent = null, e.dispatchEvent({
                type: "removed"
            }), this.children.splice(t, 1))
        },
        getObjectById: function(e) {
            return this.getObjectByProperty("id", e)
        },
        getObjectByName: function(e) {
            return this.getObjectByProperty("name", e)
        },
        getObjectByProperty: function(e, t) {
            if (this[e] === t) return this;
            for (var i = 0, r = this.children.length; r > i; i++) {
                var n = this.children[i].getObjectByProperty(e, t);
                if (void 0 !== n) return n
            }
        },
        getWorldPosition: function(e) {
            return e = e || new THREE.Vector3, this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function() {
            var e = new THREE.Vector3,
                t = new THREE.Vector3;
            return function(i) {
                return i = i || new THREE.Quaternion, this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, i, t), i
            }
        }(),
        getWorldRotation: function() {
            var e = new THREE.Quaternion;
            return function(t) {
                return t = t || new THREE.Euler, this.getWorldQuaternion(e), t.setFromQuaternion(e, this.rotation.order, !1)
            }
        }(),
        getWorldScale: function() {
            var e = new THREE.Vector3,
                t = new THREE.Quaternion;
            return function(i) {
                return i = i || new THREE.Vector3, this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, t, i), i
            }
        }(),
        getWorldDirection: function() {
            var e = new THREE.Quaternion;
            return function(t) {
                return t = t || new THREE.Vector3, this.getWorldQuaternion(e), t.set(0, 0, 1).applyQuaternion(e)
            }
        }(),
        raycast: function() {},
        traverse: function(e) {
            e(this);
            for (var t = this.children, i = 0, r = t.length; r > i; i++) t[i].traverse(e)
        },
        traverseVisible: function(e) {
            if (!1 !== this.visible) {
                e(this);
                for (var t = this.children, i = 0, r = t.length; r > i; i++) t[i].traverseVisible(e)
            }
        },
        traverseAncestors: function(e) {
            var t = this.parent;
            null !== t && (e(t), t.traverseAncestors(e))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(e) {
            !0 === this.matrixAutoUpdate && this.updateMatrix(), (!0 === this.matrixWorldNeedsUpdate || !0 === e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
            for (var t = 0, i = this.children.length; i > t; t++) this.children[t].updateMatrixWorld(e)
        },
        toJSON: function(e) {
            function t(e) {
                var t = [],
                    i;
                for (i in e) {
                    var r = e[i];
                    delete r.metadata, t.push(r)
                }
                return t
            }
            var i = void 0 === e || "" === e,
                r = {};
            i && (e = {
                geometries: {},
                materials: {},
                textures: {},
                images: {}
            }, r.metadata = {
                version: 4.4,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var n = {};
            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), n.matrix = this.matrix.toArray(), void 0 !== this.geometry && (void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON(e)), n.geometry = this.geometry.uuid), void 0 !== this.material && (void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON(e)), n.material = this.material.uuid), 0 < this.children.length) {
                n.children = [];
                for (var a = 0; a < this.children.length; a++) n.children.push(this.children[a].toJSON(e).object)
            }
            if (i) {
                var i = t(e.geometries),
                    a = t(e.materials),
                    o = t(e.textures);
                e = t(e.images), 0 < i.length && (r.geometries = i), 0 < a.length && (r.materials = a), 0 < o.length && (r.textures = o), 0 < e.length && (r.images = e)
            }
            return r.object = n, r
        },
        clone: function(e) {
            return (new this.constructor).copy(this, e)
        },
        copy: function(e, t) {
            if (void 0 === t && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t)
                for (var i = 0; i < e.children.length; i++) this.add(e.children[i].clone());
            return this
        }
    }), THREE.Object3DIdCount = 0, THREE.Face3 = function(e, t, i, r, n, a) {
        this.a = e, this.b = t, this.c = i, this.normal = r instanceof THREE.Vector3 ? r : new THREE.Vector3, this.vertexNormals = Array.isArray(r) ? r : [], this.color = n instanceof THREE.Color ? n : new THREE.Color, this.vertexColors = Array.isArray(n) ? n : [], this.materialIndex = void 0 !== a ? a : 0
    }, THREE.Face3.prototype = {
        constructor: THREE.Face3,
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
            for (var t = 0, i = e.vertexNormals.length; i > t; t++) this.vertexNormals[t] = e.vertexNormals[t].clone();
            for (t = 0, i = e.vertexColors.length; i > t; t++) this.vertexColors[t] = e.vertexColors[t].clone();
            return this
        }
    }, THREE.BufferAttribute = function(e, t, i) {
        this.uuid = THREE.Math.generateUUID(), this.array = e, this.itemSize = t, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0, this.normalized = !0 === i
    }, THREE.BufferAttribute.prototype = {
        constructor: THREE.BufferAttribute,
        get count() {
            return this.array.length / this.itemSize
        },
        set needsUpdate(e) {
            !0 === e && this.version++
        },
        setDynamic: function(e) {
            return this.dynamic = e, this
        },
        copy: function(e) {
            return this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.dynamic = e.dynamic, this
        },
        copyAt: function(e, t, i) {
            e *= this.itemSize, i *= t.itemSize;
            for (var r = 0, n = this.itemSize; n > r; r++) this.array[e + r] = t.array[i + r];
            return this
        },
        copyArray: function(e) {
            return this.array.set(e), this
        },
        copyColorsArray: function(e) {
            for (var t = this.array, i = 0, r = 0, n = e.length; n > r; r++) {
                var a = e[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r), a = new THREE.Color), t[i++] = a.r, t[i++] = a.g, t[i++] = a.b
            }
            return this
        },
        copyIndicesArray: function(e) {
            for (var t = this.array, i = 0, r = 0, n = e.length; n > r; r++) {
                var a = e[r];
                t[i++] = a.a, t[i++] = a.b, t[i++] = a.c
            }
            return this
        },
        copyVector2sArray: function(e) {
            for (var t = this.array, i = 0, r = 0, n = e.length; n > r; r++) {
                var a = e[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), a = new THREE.Vector2), t[i++] = a.x, t[i++] = a.y
            }
            return this
        },
        copyVector3sArray: function(e) {
            for (var t = this.array, i = 0, r = 0, n = e.length; n > r; r++) {
                var a = e[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r), a = new THREE.Vector3), t[i++] = a.x, t[i++] = a.y, t[i++] = a.z
            }
            return this
        },
        copyVector4sArray: function(e) {
            for (var t = this.array, i = 0, r = 0, n = e.length; n > r; r++) {
                var a = e[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r), a = new THREE.Vector4), t[i++] = a.x, t[i++] = a.y, t[i++] = a.z, t[i++] = a.w
            }
            return this
        },
        set: function(e, t) {
            return void 0 === t && (t = 0), this.array.set(e, t), this
        },
        getX: function(e) {
            return this.array[e * this.itemSize]
        },
        setX: function(e, t) {
            return this.array[e * this.itemSize] = t, this
        },
        getY: function(e) {
            return this.array[e * this.itemSize + 1]
        },
        setY: function(e, t) {
            return this.array[e * this.itemSize + 1] = t, this
        },
        getZ: function(e) {
            return this.array[e * this.itemSize + 2]
        },
        setZ: function(e, t) {
            return this.array[e * this.itemSize + 2] = t, this
        },
        getW: function(e) {
            return this.array[e * this.itemSize + 3]
        },
        setW: function(e, t) {
            return this.array[e * this.itemSize + 3] = t, this
        },
        setXY: function(e, t, i) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this
        },
        setXYZ: function(e, t, i, r) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = r, this
        },
        setXYZW: function(e, t, i, r, n) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = r, this.array[e + 3] = n, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }, THREE.Int8Attribute = function(e, t) {
        return new THREE.BufferAttribute(new Int8Array(e), t)
    }, THREE.Uint8Attribute = function(e, t) {
        return new THREE.BufferAttribute(new Uint8Array(e), t)
    }, THREE.Uint8ClampedAttribute = function(e, t) {
        return new THREE.BufferAttribute(new Uint8ClampedArray(e), t)
    }, THREE.Int16Attribute = function(e, t) {
        return new THREE.BufferAttribute(new Int16Array(e), t)
    }, THREE.Uint16Attribute = function(e, t) {
        return new THREE.BufferAttribute(new Uint16Array(e), t)
    }, THREE.Int32Attribute = function(e, t) {
        return new THREE.BufferAttribute(new Int32Array(e), t)
    }, THREE.Uint32Attribute = function(e, t) {
        return new THREE.BufferAttribute(new Uint32Array(e), t)
    }, THREE.Float32Attribute = function(e, t) {
        return new THREE.BufferAttribute(new Float32Array(e), t)
    }, THREE.Float64Attribute = function(e, t) {
        return new THREE.BufferAttribute(new Float64Array(e), t)
    }, THREE.DynamicBufferAttribute = function(e, t) {
        return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new THREE.BufferAttribute(e, t).setDynamic(!0)
    }, THREE.InstancedBufferAttribute = function(e, t, i) {
        THREE.BufferAttribute.call(this, e, t), this.meshPerAttribute = i || 1
    }, THREE.InstancedBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype), THREE.InstancedBufferAttribute.prototype.constructor = THREE.InstancedBufferAttribute, THREE.InstancedBufferAttribute.prototype.copy = function(e) {
        return THREE.BufferAttribute.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
    }, THREE.InterleavedBuffer = function(e, t) {
        this.uuid = THREE.Math.generateUUID(), this.array = e, this.stride = t, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }, THREE.InterleavedBuffer.prototype = {
        constructor: THREE.InterleavedBuffer,
        get length() {
            return this.array.length
        },
        get count() {
            return this.array.length / this.stride
        },
        set needsUpdate(e) {
            !0 === e && this.version++
        },
        setDynamic: function(e) {
            return this.dynamic = e, this
        },
        copy: function(e) {
            return this.array = new e.array.constructor(e.array), this.stride = e.stride, this.dynamic = e.dynamic, this
        },
        copyAt: function(e, t, i) {
            e *= this.stride, i *= t.stride;
            for (var r = 0, n = this.stride; n > r; r++) this.array[e + r] = t.array[i + r];
            return this
        },
        set: function(e, t) {
            return void 0 === t && (t = 0), this.array.set(e, t), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }, THREE.InstancedInterleavedBuffer = function(e, t, i) {
        THREE.InterleavedBuffer.call(this, e, t), this.meshPerAttribute = i || 1
    }, THREE.InstancedInterleavedBuffer.prototype = Object.create(THREE.InterleavedBuffer.prototype), THREE.InstancedInterleavedBuffer.prototype.constructor = THREE.InstancedInterleavedBuffer, THREE.InstancedInterleavedBuffer.prototype.copy = function(e) {
        return THREE.InterleavedBuffer.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
    }, THREE.InterleavedBufferAttribute = function(e, t, i, r) {
        this.uuid = THREE.Math.generateUUID(), this.data = e, this.itemSize = t, this.offset = i, this.normalized = !0 === r
    }, THREE.InterleavedBufferAttribute.prototype = {
        constructor: THREE.InterleavedBufferAttribute,
        get length() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
        },
        get count() {
            return this.data.count
        },
        get array() {
            return this.data.array
        },
        setX: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset] = t, this
        },
        setY: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 1] = t, this
        },
        setZ: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 2] = t, this
        },
        setW: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 3] = t, this
        },
        getX: function(e) {
            return this.data.array[e * this.data.stride + this.offset]
        },
        getY: function(e) {
            return this.data.array[e * this.data.stride + this.offset + 1]
        },
        getZ: function(e) {
            return this.data.array[e * this.data.stride + this.offset + 2]
        },
        getW: function(e) {
            return this.data.array[e * this.data.stride + this.offset + 3]
        },
        setXY: function(e, t, i) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this
        },
        setXYZ: function(e, t, i, r) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = r, this
        },
        setXYZW: function(e, t, i, r, n) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = r, this.data.array[e + 3] = n, this
        }
    }, THREE.Geometry = function() {
        Object.defineProperty(this, "id", {
            value: THREE.GeometryIdCount++
        }), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
            []
        ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingSphere = this.boundingBox = null, this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1
    }, Object.assign(THREE.Geometry.prototype, THREE.EventDispatcher.prototype, {
        applyMatrix: function(e) {
            for (var t = (new THREE.Matrix3).getNormalMatrix(e), i = 0, r = this.vertices.length; r > i; i++) this.vertices[i].applyMatrix4(e);
            for (i = 0, r = this.faces.length; r > i; i++) {
                e = this.faces[i], e.normal.applyMatrix3(t).normalize();
                for (var n = 0, a = e.vertexNormals.length; a > n; n++) e.vertexNormals[n].applyMatrix3(t).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.normalsNeedUpdate = this.verticesNeedUpdate = !0, this
        },
        rotateX: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new THREE.Matrix4), e.makeRotationX(t), this.applyMatrix(e), this
            }
        }(),
        rotateY: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new THREE.Matrix4), e.makeRotationY(t), this.applyMatrix(e), this
            }
        }(),
        rotateZ: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new THREE.Matrix4), e.makeRotationZ(t), this.applyMatrix(e), this
            }
        }(),
        translate: function() {
            var e;
            return function(t, i, r) {
                return void 0 === e && (e = new THREE.Matrix4), e.makeTranslation(t, i, r), this.applyMatrix(e), this
            }
        }(),
        scale: function() {
            var e;
            return function(t, i, r) {
                return void 0 === e && (e = new THREE.Matrix4), e.makeScale(t, i, r), this.applyMatrix(e), this
            }
        }(),
        lookAt: function() {
            var e;
            return function(t) {
                void 0 === e && (e = new THREE.Object3D), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
            }
        }(),
        fromBufferGeometry: function(e) {
            function t(e, t, r, n) {
                var a = void 0 !== o ? [l[e].clone(), l[t].clone(), l[r].clone()] : [],
                    d = void 0 !== s ? [i.colors[e].clone(), i.colors[t].clone(), i.colors[r].clone()] : [];
                n = new THREE.Face3(e, t, r, a, d, n), i.faces.push(n), void 0 !== c && i.faceVertexUvs[0].push([u[e].clone(), u[t].clone(), u[r].clone()]), void 0 !== h && i.faceVertexUvs[1].push([p[e].clone(), p[t].clone(), p[r].clone()])
            }
            var i = this,
                r = null !== e.index ? e.index.array : void 0,
                n = e.attributes,
                a = n.position.array,
                o = void 0 !== n.normal ? n.normal.array : void 0,
                s = void 0 !== n.color ? n.color.array : void 0,
                c = void 0 !== n.uv ? n.uv.array : void 0,
                h = void 0 !== n.uv2 ? n.uv2.array : void 0;
            void 0 !== h && (this.faceVertexUvs[1] = []);
            for (var l = [], u = [], p = [], d = n = 0; n < a.length; n += 3, d += 2) i.vertices.push(new THREE.Vector3(a[n], a[n + 1], a[n + 2])), void 0 !== o && l.push(new THREE.Vector3(o[n], o[n + 1], o[n + 2])), void 0 !== s && i.colors.push(new THREE.Color(s[n], s[n + 1], s[n + 2])), void 0 !== c && u.push(new THREE.Vector2(c[d], c[d + 1])), void 0 !== h && p.push(new THREE.Vector2(h[d], h[d + 1]));
            if (void 0 !== r)
                if (a = e.groups, 0 < a.length)
                    for (n = 0; n < a.length; n++)
                        for (var f = a[n], E = f.start, m = f.count, d = E, E = E + m; E > d; d += 3) t(r[d], r[d + 1], r[d + 2], f.materialIndex);
                else
                    for (n = 0; n < r.length; n += 3) t(r[n], r[n + 1], r[n + 2]);
            else
                for (n = 0; n < a.length / 3; n += 3) t(n, n + 1, n + 2);
            return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this
        },
        center: function() {
            this.computeBoundingBox();
            var e = this.boundingBox.center().negate();
            return this.translate(e.x, e.y, e.z), e
        },
        normalize: function() {
            this.computeBoundingSphere();
            var e = this.boundingSphere.center,
                t = this.boundingSphere.radius,
                t = 0 === t ? 1 : 1 / t,
                i = new THREE.Matrix4;
            return i.set(t, 0, 0, -t * e.x, 0, t, 0, -t * e.y, 0, 0, t, -t * e.z, 0, 0, 0, 1), this.applyMatrix(i), this
        },
        computeFaceNormals: function() {
            for (var e = new THREE.Vector3, t = new THREE.Vector3, i = 0, r = this.faces.length; r > i; i++) {
                var n = this.faces[i],
                    a = this.vertices[n.a],
                    o = this.vertices[n.b];
                e.subVectors(this.vertices[n.c], o), t.subVectors(a, o), e.cross(t), e.normalize(), n.normal.copy(e)
            }
        },
        computeVertexNormals: function(e) {
            void 0 === e && (e = !0);
            var t, i, r;
            for (r = Array(this.vertices.length), t = 0, i = this.vertices.length; i > t; t++) r[t] = new THREE.Vector3;
            if (e) {
                var n, a, o, s = new THREE.Vector3,
                    c = new THREE.Vector3;
                for (e = 0, t = this.faces.length; t > e; e++) i = this.faces[e], n = this.vertices[i.a], a = this.vertices[i.b], o = this.vertices[i.c], s.subVectors(o, a), c.subVectors(n, a), s.cross(c), r[i.a].add(s), r[i.b].add(s), r[i.c].add(s)
            } else
                for (e = 0, t = this.faces.length; t > e; e++) i = this.faces[e], r[i.a].add(i.normal), r[i.b].add(i.normal), r[i.c].add(i.normal);
            for (t = 0, i = this.vertices.length; i > t; t++) r[t].normalize();
            for (e = 0, t = this.faces.length; t > e; e++) i = this.faces[e], n = i.vertexNormals, 3 === n.length ? (n[0].copy(r[i.a]), n[1].copy(r[i.b]), n[2].copy(r[i.c])) : (n[0] = r[i.a].clone(), n[1] = r[i.b].clone(), n[2] = r[i.c].clone());
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var e, t, i, r, n;
            for (i = 0, r = this.faces.length; r > i; i++)
                for (n = this.faces[i], n.__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone(), n.__originalVertexNormals || (n.__originalVertexNormals = []), e = 0, t = n.vertexNormals.length; t > e; e++) n.__originalVertexNormals[e] ? n.__originalVertexNormals[e].copy(n.vertexNormals[e]) : n.__originalVertexNormals[e] = n.vertexNormals[e].clone();
            var a = new THREE.Geometry;
            for (a.faces = this.faces, e = 0, t = this.morphTargets.length; t > e; e++) {
                if (!this.morphNormals[e]) {
                    this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [], n = this.morphNormals[e].faceNormals;
                    var o = this.morphNormals[e].vertexNormals,
                        s, c;
                    for (i = 0, r = this.faces.length; r > i; i++) s = new THREE.Vector3, c = {
                        a: new THREE.Vector3,
                        b: new THREE.Vector3,
                        c: new THREE.Vector3
                    }, n.push(s), o.push(c)
                }
                for (o = this.morphNormals[e], a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals(), i = 0, r = this.faces.length; r > i; i++) n = this.faces[i], s = o.faceNormals[i], c = o.vertexNormals[i], s.copy(n.normal), c.a.copy(n.vertexNormals[0]), c.b.copy(n.vertexNormals[1]), c.c.copy(n.vertexNormals[2])
            }
            for (i = 0, r = this.faces.length; r > i; i++) n = this.faces[i], n.normal = n.__originalFaceNormal, n.vertexNormals = n.__originalVertexNormals
        },
        computeTangents: function() {
            console.warn("THREE.Geometry: .computeTangents() has been removed.")
        },
        computeLineDistances: function() {
            for (var e = 0, t = this.vertices, i = 0, r = t.length; r > i; i++) i > 0 && (e += t[i].distanceTo(t[i - 1])), this.lineDistances[i] = e
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new THREE.Box3), this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere), this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(e, t, i) {
            if (!1 == e instanceof THREE.Geometry) console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
            else {
                var r, n = this.vertices.length,
                    a = this.vertices,
                    o = e.vertices,
                    s = this.faces,
                    c = e.faces,
                    h = this.faceVertexUvs[0];
                e = e.faceVertexUvs[0], void 0 === i && (i = 0), void 0 !== t && (r = (new THREE.Matrix3).getNormalMatrix(t));
                for (var l = 0, u = o.length; u > l; l++) {
                    var p = o[l].clone();
                    void 0 !== t && p.applyMatrix4(t), a.push(p)
                }
                for (l = 0, u = c.length; u > l; l++) {
                    var o = c[l],
                        d, f = o.vertexNormals,
                        E = o.vertexColors,
                        p = new THREE.Face3(o.a + n, o.b + n, o.c + n);
                    for (p.normal.copy(o.normal), void 0 !== r && p.normal.applyMatrix3(r).normalize(), t = 0, a = f.length; a > t; t++) d = f[t].clone(), void 0 !== r && d.applyMatrix3(r).normalize(), p.vertexNormals.push(d);
                    for (p.color.copy(o.color), t = 0, a = E.length; a > t; t++) d = E[t], p.vertexColors.push(d.clone());
                    p.materialIndex = o.materialIndex + i, s.push(p)
                }
                for (l = 0, u = e.length; u > l; l++)
                    if (i = e[l], r = [], void 0 !== i) {
                        for (t = 0, a = i.length; a > t; t++) r.push(i[t].clone());
                        h.push(r)
                    }
            }
        },
        mergeMesh: function(e) {
            !1 == e instanceof THREE.Mesh ? console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e) : (e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix))
        },
        mergeVertices: function() {
            var e = {},
                t = [],
                i = [],
                r, n = Math.pow(10, 4),
                a, o;
            for (a = 0, o = this.vertices.length; o > a; a++) r = this.vertices[a], r = Math.round(r.x * n) + "_" + Math.round(r.y * n) + "_" + Math.round(r.z * n), void 0 === e[r] ? (e[r] = a, t.push(this.vertices[a]), i[a] = t.length - 1) : i[a] = i[e[r]];
            for (e = [], a = 0, o = this.faces.length; o > a; a++)
                for (n = this.faces[a], n.a = i[n.a], n.b = i[n.b], n.c = i[n.c], n = [n.a, n.b, n.c], r = 0; 3 > r; r++)
                    if (n[r] === n[(r + 1) % 3]) {
                        e.push(a);
                        break
                    } for (a = e.length - 1; a >= 0; a--)
                for (n = e[a], this.faces.splice(n, 1), i = 0, o = this.faceVertexUvs.length; o > i; i++) this.faceVertexUvs[i].splice(n, 1);
            return a = this.vertices.length - t.length, this.vertices = t, a
        },
        sortFacesByMaterialIndex: function() {
            for (var e = this.faces, t = e.length, i = 0; t > i; i++) e[i]._id = i;
            e.sort(function(e, t) {
                return e.materialIndex - t.materialIndex
            });
            var r = this.faceVertexUvs[0],
                n = this.faceVertexUvs[1],
                a, o;
            for (r && r.length === t && (a = []), n && n.length === t && (o = []), i = 0; t > i; i++) {
                var s = e[i]._id;
                a && a.push(r[s]), o && o.push(n[s])
            }
            a && (this.faceVertexUvs[0] = a), o && (this.faceVertexUvs[1] = o)
        },
        toJSON: function() {
            function e(e, t, i) {
                return i ? e | 1 << t : e & ~(1 << t)
            }

            function t(e) {
                var t = e.x.toString() + e.y.toString() + e.z.toString();
                return void 0 !== h[t] ? h[t] : (h[t] = c.length / 3, c.push(e.x, e.y, e.z), h[t])
            }

            function i(e) {
                var t = e.r.toString() + e.g.toString() + e.b.toString();
                return void 0 !== u[t] ? u[t] : (u[t] = l.length, l.push(e.getHex()), u[t])
            }

            function r(e) {
                var t = e.x.toString() + e.y.toString();
                return void 0 !== d[t] ? d[t] : (d[t] = p.length / 2, p.push(e.x, e.y), d[t])
            }
            var n = {
                metadata: {
                    version: 4.4,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), void 0 !== this.parameters) {
                var a = this.parameters,
                    o;
                for (o in a) void 0 !== a[o] && (n[o] = a[o]);
                return n
            }
            for (a = [], o = 0; o < this.vertices.length; o++) {
                var s = this.vertices[o];
                a.push(s.x, s.y, s.z)
            }
            var s = [],
                c = [],
                h = {},
                l = [],
                u = {},
                p = [],
                d = {};
            for (o = 0; o < this.faces.length; o++) {
                var f = this.faces[o],
                    E = void 0 !== this.faceVertexUvs[0][o],
                    m = 0 < f.normal.length(),
                    g = 0 < f.vertexNormals.length,
                    T = 1 !== f.color.r || 1 !== f.color.g || 1 !== f.color.b,
                    v = 0 < f.vertexColors.length,
                    y = 0,
                    y = e(y, 0, 0),
                    y = e(y, 1, !0),
                    y = e(y, 2, !1),
                    y = e(y, 3, E),
                    y = e(y, 4, m),
                    y = e(y, 5, g),
                    y = e(y, 6, T),
                    y = e(y, 7, v);
                s.push(y), s.push(f.a, f.b, f.c), s.push(f.materialIndex), E && (E = this.faceVertexUvs[0][o], s.push(r(E[0]), r(E[1]), r(E[2]))), m && s.push(t(f.normal)), g && (m = f.vertexNormals, s.push(t(m[0]), t(m[1]), t(m[2]))), T && s.push(i(f.color)), v && (f = f.vertexColors, s.push(i(f[0]), i(f[1]), i(f[2])))
            }
            return n.data = {}, n.data.vertices = a, n.data.normals = c, 0 < l.length && (n.data.colors = l), 0 < p.length && (n.data.uvs = [p]), n.data.faces = s, n
        },
        clone: function() {
            return (new THREE.Geometry).copy(this)
        },
        copy: function(e) {
            this.vertices = [], this.faces = [], this.faceVertexUvs = [
                []
            ];
            for (var t = e.vertices, i = 0, r = t.length; r > i; i++) this.vertices.push(t[i].clone());
            for (t = e.faces, i = 0, r = t.length; r > i; i++) this.faces.push(t[i].clone());
            for (i = 0, r = e.faceVertexUvs.length; r > i; i++) {
                t = e.faceVertexUvs[i], void 0 === this.faceVertexUvs[i] && (this.faceVertexUvs[i] = []);
                for (var n = 0, a = t.length; a > n; n++) {
                    for (var o = t[n], s = [], c = 0, h = o.length; h > c; c++) s.push(o[c].clone());
                    this.faceVertexUvs[i].push(s)
                }
            }
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), THREE.GeometryIdCount = 0, THREE.DirectGeometry = function() {
        Object.defineProperty(this, "id", {
            value: THREE.GeometryIdCount++
        }), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "DirectGeometry", this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingSphere = this.boundingBox = null, this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
    }, Object.assign(THREE.DirectGeometry.prototype, THREE.EventDispatcher.prototype, {
        computeBoundingBox: THREE.Geometry.prototype.computeBoundingBox,
        computeBoundingSphere: THREE.Geometry.prototype.computeBoundingSphere,
        computeFaceNormals: function() {
            console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
        },
        computeVertexNormals: function() {
            console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
        },
        computeGroups: function(e) {
            var t, i = [],
                r;
            e = e.faces;
            for (var n = 0; n < e.length; n++) {
                var a = e[n];
                a.materialIndex !== r && (r = a.materialIndex, void 0 !== t && (t.count = 3 * n - t.start, i.push(t)), t = {
                    start: 3 * n,
                    materialIndex: r
                })
            }
            void 0 !== t && (t.count = 3 * n - t.start, i.push(t)), this.groups = i
        },
        fromGeometry: function(e) {
            var t = e.faces,
                i = e.vertices,
                r = e.faceVertexUvs,
                n = r[0] && 0 < r[0].length,
                a = r[1] && 0 < r[1].length,
                o = e.morphTargets,
                s = o.length,
                c;
            if (s > 0) {
                c = [];
                for (var h = 0; s > h; h++) c[h] = [];
                this.morphTargets.position = c
            }
            var l = e.morphNormals,
                u = l.length,
                p;
            if (u > 0) {
                for (p = [], h = 0; u > h; h++) p[h] = [];
                this.morphTargets.normal = p
            }
            for (var d = e.skinIndices, f = e.skinWeights, E = d.length === i.length, m = f.length === i.length, h = 0; h < t.length; h++) {
                var g = t[h];
                this.vertices.push(i[g.a], i[g.b], i[g.c]);
                var T = g.vertexNormals;
                for (3 === T.length ? this.normals.push(T[0], T[1], T[2]) : (T = g.normal, this.normals.push(T, T, T)), T = g.vertexColors, 3 === T.length ? this.colors.push(T[0], T[1], T[2]) : (T = g.color, this.colors.push(T, T, T)), !0 === n && (T = r[0][h], void 0 !== T ? this.uvs.push(T[0], T[1], T[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", h), this.uvs.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))), !0 === a && (T = r[1][h], void 0 !== T ? this.uvs2.push(T[0], T[1], T[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", h), this.uvs2.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))), T = 0; s > T; T++) {
                    var v = o[T].vertices;
                    c[T].push(v[g.a], v[g.b], v[g.c])
                }
                for (T = 0; u > T; T++) v = l[T].vertexNormals[h], p[T].push(v.a, v.b, v.c);
                E && this.skinIndices.push(d[g.a], d[g.b], d[g.c]), m && this.skinWeights.push(f[g.a], f[g.b], f[g.c])
            }
            return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), THREE.BufferGeometry = function() {
        Object.defineProperty(this, "id", {
            value: THREE.GeometryIdCount++
        }), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingSphere = this.boundingBox = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }
    }, Object.assign(THREE.BufferGeometry.prototype, THREE.EventDispatcher.prototype, {
        getIndex: function() {
            return this.index
        },
        setIndex: function(e) {
            this.index = e
        },
        addAttribute: function(e, t, i) {
            if (!1 == t instanceof THREE.BufferAttribute && !1 == t instanceof THREE.InterleavedBufferAttribute) console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(e, new THREE.BufferAttribute(t, i));
            else {
                if ("index" !== e) return this.attributes[e] = t, this;
                console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t)
            }
        },
        getAttribute: function(e) {
            return this.attributes[e]
        },
        removeAttribute: function(e) {
            return delete this.attributes[e], this
        },
        addGroup: function(e, t, i) {
            this.groups.push({
                start: e,
                count: t,
                materialIndex: void 0 !== i ? i : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(e, t) {
            this.drawRange.start = e, this.drawRange.count = t
        },
        applyMatrix: function(e) {
            var t = this.attributes.position;
            return void 0 !== t && (e.applyToVector3Array(t.array), t.needsUpdate = !0), t = this.attributes.normal, void 0 !== t && ((new THREE.Matrix3).getNormalMatrix(e).applyToVector3Array(t.array), t.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        },
        rotateX: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new THREE.Matrix4), e.makeRotationX(t), this.applyMatrix(e), this
            }
        }(),
        rotateY: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new THREE.Matrix4), e.makeRotationY(t), this.applyMatrix(e), this
            }
        }(),
        rotateZ: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new THREE.Matrix4), e.makeRotationZ(t), this.applyMatrix(e), this
            }
        }(),
        translate: function() {
            var e;
            return function(t, i, r) {
                return void 0 === e && (e = new THREE.Matrix4), e.makeTranslation(t, i, r), this.applyMatrix(e), this
            }
        }(),
        scale: function() {
            var e;
            return function(t, i, r) {
                return void 0 === e && (e = new THREE.Matrix4), e.makeScale(t, i, r), this.applyMatrix(e), this
            }
        }(),
        lookAt: function() {
            var e;
            return function(t) {
                void 0 === e && (e = new THREE.Object3D), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
            }
        }(),
        center: function() {
            this.computeBoundingBox();
            var e = this.boundingBox.center().negate();
            return this.translate(e.x, e.y, e.z), e
        },
        setFromObject: function(e) {
            var t = e.geometry;
            if (e instanceof THREE.Points || e instanceof THREE.Line) {
                e = new THREE.Float32Attribute(3 * t.vertices.length, 3);
                var i = new THREE.Float32Attribute(3 * t.colors.length, 3);
                this.addAttribute("position", e.copyVector3sArray(t.vertices)), this.addAttribute("color", i.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length && (e = new THREE.Float32Attribute(t.lineDistances.length, 1), this.addAttribute("lineDistance", e.copyArray(t.lineDistances))), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
            } else e instanceof THREE.Mesh && t instanceof THREE.Geometry && this.fromGeometry(t);
            return this
        },
        updateFromObject: function(e) {
            var t = e.geometry;
            if (e instanceof THREE.Mesh) {
                var i = t.__directGeometry;
                if (void 0 === i || !0 === t.elementsNeedUpdate) return this.fromGeometry(t);
                i.verticesNeedUpdate = t.verticesNeedUpdate || t.elementsNeedUpdate, i.normalsNeedUpdate = t.normalsNeedUpdate || t.elementsNeedUpdate, i.colorsNeedUpdate = t.colorsNeedUpdate || t.elementsNeedUpdate, i.uvsNeedUpdate = t.uvsNeedUpdate || t.elementsNeedUpdate, i.groupsNeedUpdate = t.groupsNeedUpdate || t.elementsNeedUpdate, t.elementsNeedUpdate = !1, t.verticesNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.groupsNeedUpdate = !1, t = i
            }
            return !0 === t.verticesNeedUpdate && (i = this.attributes.position, void 0 !== i && (i.copyVector3sArray(t.vertices), i.needsUpdate = !0), t.verticesNeedUpdate = !1), !0 === t.normalsNeedUpdate && (i = this.attributes.normal, void 0 !== i && (i.copyVector3sArray(t.normals), i.needsUpdate = !0), t.normalsNeedUpdate = !1), !0 === t.colorsNeedUpdate && (i = this.attributes.color, void 0 !== i && (i.copyColorsArray(t.colors), i.needsUpdate = !0), t.colorsNeedUpdate = !1), t.uvsNeedUpdate && (i = this.attributes.uv, void 0 !== i && (i.copyVector2sArray(t.uvs), i.needsUpdate = !0), t.uvsNeedUpdate = !1), t.lineDistancesNeedUpdate && (i = this.attributes.lineDistance, void 0 !== i && (i.copyArray(t.lineDistances), i.needsUpdate = !0), t.lineDistancesNeedUpdate = !1), t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1), this
        },
        fromGeometry: function(e) {
            return e.__directGeometry = (new THREE.DirectGeometry).fromGeometry(e), this.fromDirectGeometry(e.__directGeometry)
        },
        fromDirectGeometry: function(e) {
            var t = new Float32Array(3 * e.vertices.length);
            this.addAttribute("position", new THREE.BufferAttribute(t, 3).copyVector3sArray(e.vertices)), 0 < e.normals.length && (t = new Float32Array(3 * e.normals.length), this.addAttribute("normal", new THREE.BufferAttribute(t, 3).copyVector3sArray(e.normals))), 0 < e.colors.length && (t = new Float32Array(3 * e.colors.length), this.addAttribute("color", new THREE.BufferAttribute(t, 3).copyColorsArray(e.colors))), 0 < e.uvs.length && (t = new Float32Array(2 * e.uvs.length), this.addAttribute("uv", new THREE.BufferAttribute(t, 2).copyVector2sArray(e.uvs))), 0 < e.uvs2.length && (t = new Float32Array(2 * e.uvs2.length), this.addAttribute("uv2", new THREE.BufferAttribute(t, 2).copyVector2sArray(e.uvs2))), 0 < e.indices.length && (t = new(65535 < e.vertices.length ? Uint32Array : Uint16Array)(3 * e.indices.length), this.setIndex(new THREE.BufferAttribute(t, 1).copyIndicesArray(e.indices))), this.groups = e.groups;
            for (var i in e.morphTargets) {
                for (var t = [], r = e.morphTargets[i], n = 0, a = r.length; a > n; n++) {
                    var o = r[n],
                        s = new THREE.Float32Attribute(3 * o.length, 3);
                    t.push(s.copyVector3sArray(o))
                }
                this.morphAttributes[i] = t
            }
            return 0 < e.skinIndices.length && (i = new THREE.Float32Attribute(4 * e.skinIndices.length, 4), this.addAttribute("skinIndex", i.copyVector4sArray(e.skinIndices))), 0 < e.skinWeights.length && (i = new THREE.Float32Attribute(4 * e.skinWeights.length, 4), this.addAttribute("skinWeight", i.copyVector4sArray(e.skinWeights))), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new THREE.Box3);
            var e = this.attributes.position.array;
            void 0 !== e ? this.boundingBox.setFromArray(e) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            var e = new THREE.Box3,
                t = new THREE.Vector3;
            return function() {
                null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
                var i = this.attributes.position;
                if (i) {
                    var i = i.array,
                        r = this.boundingSphere.center;
                    e.setFromArray(i), e.center(r);
                    for (var n = 0, a = 0, o = i.length; o > a; a += 3) t.fromArray(i, a), n = Math.max(n, r.distanceToSquared(t));
                    this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var e = this.index,
                t = this.attributes,
                i = this.groups;
            if (t.position) {
                var r = t.position.array;
                if (void 0 === t.normal) this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(r.length), 3));
                else
                    for (var n = t.normal.array, a = 0, o = n.length; o > a; a++) n[a] = 0;
                var n = t.normal.array,
                    s, c, h, l = new THREE.Vector3,
                    u = new THREE.Vector3,
                    p = new THREE.Vector3,
                    d = new THREE.Vector3,
                    f = new THREE.Vector3;
                if (e) {
                    e = e.array, 0 === i.length && this.addGroup(0, e.length);
                    for (var E = 0, m = i.length; m > E; ++E)
                        for (a = i[E], o = a.start, s = a.count, a = o, o += s; o > a; a += 3) s = 3 * e[a + 0], c = 3 * e[a + 1], h = 3 * e[a + 2], l.fromArray(r, s), u.fromArray(r, c), p.fromArray(r, h), d.subVectors(p, u), f.subVectors(l, u), d.cross(f), n[s] += d.x, n[s + 1] += d.y, n[s + 2] += d.z, n[c] += d.x, n[c + 1] += d.y, n[c + 2] += d.z, n[h] += d.x, n[h + 1] += d.y, n[h + 2] += d.z
                } else
                    for (a = 0, o = r.length; o > a; a += 9) l.fromArray(r, a), u.fromArray(r, a + 3), p.fromArray(r, a + 6), d.subVectors(p, u), f.subVectors(l, u), d.cross(f), n[a] = d.x, n[a + 1] = d.y, n[a + 2] = d.z, n[a + 3] = d.x, n[a + 4] = d.y, n[a + 5] = d.z, n[a + 6] = d.x, n[a + 7] = d.y, n[a + 8] = d.z;
                this.normalizeNormals(), t.normal.needsUpdate = !0
            }
        },
        merge: function(e, t) {
            if (!1 != e instanceof THREE.BufferGeometry) {
                void 0 === t && (t = 0);
                var i = this.attributes,
                    r;
                for (r in i)
                    if (void 0 !== e.attributes[r])
                        for (var n = i[r].array, a = e.attributes[r], o = a.array, s = 0, a = a.itemSize * t; s < o.length; s++, a++) n[a] = o[s];
                return this
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e)
        },
        normalizeNormals: function() {
            for (var e = this.attributes.normal.array, t, i, r, n = 0, a = e.length; a > n; n += 3) t = e[n], i = e[n + 1], r = e[n + 2], t = 1 / Math.sqrt(t * t + i * i + r * r), e[n] *= t, e[n + 1] *= t, e[n + 2] *= t
        },
        toNonIndexed: function() {
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
            var e = new THREE.BufferGeometry,
                t = this.index.array,
                i = this.attributes,
                r;
            for (r in i) {
                for (var n = i[r], a = n.array, n = n.itemSize, o = new a.constructor(t.length * n), s = 0, c = 0, h = 0, l = t.length; l > h; h++)
                    for (var s = t[h] * n, u = 0; n > u; u++) o[c++] = a[s++];
                e.addAttribute(r, new THREE.BufferAttribute(o, n))
            }
            return e
        },
        toJSON: function() {
            var e = {
                metadata: {
                    version: 4.4,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
                var t = this.parameters,
                    i;
                for (i in t) void 0 !== t[i] && (e[i] = t[i]);
                return e
            }
            e.data = {
                attributes: {}
            };
            var r = this.index;
            null !== r && (t = Array.prototype.slice.call(r.array), e.data.index = {
                type: r.array.constructor.name,
                array: t
            }), r = this.attributes;
            for (i in r) {
                var n = r[i],
                    t = Array.prototype.slice.call(n.array);
                e.data.attributes[i] = {
                    itemSize: n.itemSize,
                    type: n.array.constructor.name,
                    array: t,
                    normalized: n.normalized
                }
            }
            return i = this.groups, 0 < i.length && (e.data.groups = JSON.parse(JSON.stringify(i))), i = this.boundingSphere, null !== i && (e.data.boundingSphere = {
                center: i.center.toArray(),
                radius: i.radius
            }), e
        },
        clone: function() {
            return (new THREE.BufferGeometry).copy(this)
        },
        copy: function(e) {
            var t = e.index;
            null !== t && this.setIndex(t.clone());
            var t = e.attributes,
                i;
            for (i in t) this.addAttribute(i, t[i].clone());
            for (e = e.groups, i = 0, t = e.length; t > i; i++) {
                var r = e[i];
                this.addGroup(r.start, r.count, r.materialIndex)
            }
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), THREE.BufferGeometry.MaxIndex = 65535, THREE.InstancedBufferGeometry = function() {
        THREE.BufferGeometry.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
    }, THREE.InstancedBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.InstancedBufferGeometry.prototype.constructor = THREE.InstancedBufferGeometry, THREE.InstancedBufferGeometry.prototype.addGroup = function(e, t, i) {
        this.groups.push({
            start: e,
            count: t,
            instances: i
        })
    }, THREE.InstancedBufferGeometry.prototype.copy = function(e) {
        var t = e.index;
        null !== t && this.setIndex(t.clone());
        var t = e.attributes,
            i;
        for (i in t) this.addAttribute(i, t[i].clone());
        for (e = e.groups, i = 0, t = e.length; t > i; i++) {
            var r = e[i];
            this.addGroup(r.start, r.count, r.instances)
        }
        return this
    }, THREE.Uniform = function(e, t) {
        "string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = t), this.value = e, this.dynamic = !1
    }, THREE.Uniform.prototype = {
        constructor: THREE.Uniform,
        onUpdate: function(e) {
            return this.dynamic = !0, this.onUpdateCallback = e, this
        }
    }, THREE.AnimationAction = function() {
        throw Error("THREE.AnimationAction: Use mixer.clipAction for construction.")
    }, THREE.AnimationAction._new = function(e, t, i) {
        this._mixer = e, this._clip = t, this._localRoot = i || null, e = t.tracks, t = e.length, i = Array(t);
        for (var r = {
                endingStart: THREE.ZeroCurvatureEnding,
                endingEnd: THREE.ZeroCurvatureEnding
            }, n = 0; n !== t; ++n) {
            var a = e[n].createInterpolant(null);
            i[n] = a, a.settings = r
        }
        this._interpolantSettings = r, this._interpolants = i, this._propertyBindings = Array(t), this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null, this.loop = THREE.LoopRepeat, this._loopCount = -1, this._startTime = null, this.time = 0, this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0
    }, THREE.AnimationAction._new.prototype = {
        constructor: THREE.AnimationAction._new,
        play: function() {
            return this._mixer._activateAction(this), this
        },
        stop: function() {
            return this._mixer._deactivateAction(this), this.reset()
        },
        reset: function() {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(e) {
            return this._startTime = e, this
        },
        setLoop: function(e, t) {
            return this.loop = e, this.repetitions = t, this
        },
        setEffectiveWeight: function(e) {
            return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(e) {
            return this._scheduleFading(e, 0, 1)
        },
        fadeOut: function(e) {
            return this._scheduleFading(e, 1, 0)
        },
        crossFadeFrom: function(e, t, i) {
            if (e.fadeOut(t), this.fadeIn(t), i) {
                i = this._clip.duration;
                var r = e._clip.duration,
                    n = i / r;
                e.warp(1, r / i, t), this.warp(n, 1, t)
            }
            return this
        },
        crossFadeTo: function(e, t, i) {
            return e.crossFadeFrom(this, t, i)
        },
        stopFading: function() {
            var e = this._weightInterpolant;
            return null !== e && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
        },
        setEffectiveTimeScale: function(e) {
            return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(e) {
            return this.timeScale = this._clip.duration / e, this.stopWarping()
        },
        syncWith: function(e) {
            return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
        },
        halt: function(e) {
            return this.warp(this._effectiveTimeScale, 0, e)
        },
        warp: function(e, t, i) {
            var r = this._mixer,
                n = r.time,
                a = this._timeScaleInterpolant,
                o = this.timeScale;
            return null === a && (this._timeScaleInterpolant = a = r._lendControlInterpolant()), r = a.parameterPositions, a = a.sampleValues, r[0] = n, r[1] = n + i, a[0] = e / o, a[1] = t / o, this
        },
        stopWarping: function() {
            var e = this._timeScaleInterpolant;
            return null !== e && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root
        },
        _update: function(e, t, i, r) {
            var n = this._startTime;
            if (null !== n) {
                if (t = (e - n) * i, 0 > t || 0 === i) return;
                this._startTime = null, t *= i
            }
            if (t *= this._updateTimeScale(e), i = this._updateTime(t), e = this._updateWeight(e), e > 0) {
                t = this._interpolants;
                for (var n = this._propertyBindings, a = 0, o = t.length; a !== o; ++a) t[a].evaluate(i), n[a].accumulate(r, e)
            }
        },
        _updateWeight: function(e) {
            var t = 0;
            if (this.enabled) {
                var t = this.weight,
                    i = this._weightInterpolant;
                if (null !== i) {
                    var r = i.evaluate(e)[0],
                        t = t * r;
                    e > i.parameterPositions[1] && (this.stopFading(), 0 === r && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = t
        },
        _updateTimeScale: function(e) {
            var t = 0;
            if (!this.paused) {
                var t = this.timeScale,
                    i = this._timeScaleInterpolant;
                if (null !== i) {
                    var r = i.evaluate(e)[0],
                        t = t * r;
                    e > i.parameterPositions[1] && (this.stopWarping(), 0 === t ? this.paused = !0 : this.timeScale = t)
                }
            }
            return this._effectiveTimeScale = t
        },
        _updateTime: function(e) {
            var t = this.time + e;
            if (0 === e) return t;
            var i = this._clip.duration,
                r = this.loop,
                n = this._loopCount;
            if (r === THREE.LoopOnce) e: {
                if (-1 === n && (this.loopCount = 0, this._setEndings(!0, !0, !1)), t >= i) t = i;
                else {
                    if (!(0 > t)) break e;
                    t = 0
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: 0 > e ? -1 : 1
                })
            }
            else {
                if (r = r === THREE.LoopPingPong, -1 === n && (e >= 0 ? (n = 0, this._setEndings(!0, 0 === this.repetitions, r)) : this._setEndings(0 === this.repetitions, !0, r)), t >= i || 0 > t) {
                    var a = Math.floor(t / i),
                        t = t - i * a,
                        n = n + Math.abs(a),
                        o = this.repetitions - n;
                    0 > o ? (this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, t = e > 0 ? i : 0, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: e > 0 ? 1 : -1
                    })) : (0 === o ? (e = 0 > e, this._setEndings(e, !e, r)) : this._setEndings(!1, !1, r), this._loopCount = n, this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: a
                    }))
                }
                if (r && 1 === (1 & n)) return this.time = t, i - t
            }
            return this.time = t
        },
        _setEndings: function(e, t, i) {
            var r = this._interpolantSettings;
            i ? (r.endingStart = THREE.ZeroSlopeEnding, r.endingEnd = THREE.ZeroSlopeEnding) : (r.endingStart = e ? this.zeroSlopeAtStart ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : THREE.WrapAroundEnding, r.endingEnd = t ? this.zeroSlopeAtEnd ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : THREE.WrapAroundEnding)
        },
        _scheduleFading: function(e, t, i) {
            var r = this._mixer,
                n = r.time,
                a = this._weightInterpolant;
            return null === a && (this._weightInterpolant = a = r._lendControlInterpolant()), r = a.parameterPositions, a = a.sampleValues, r[0] = n, a[0] = t, r[1] = n + e, a[1] = i, this
        }
    }, THREE.AnimationClip = function(e, t, i) {
        this.name = e, this.tracks = i, this.duration = void 0 !== t ? t : -1, this.uuid = THREE.Math.generateUUID(), 0 > this.duration && this.resetDuration(), this.trim(), this.optimize()
    }, THREE.AnimationClip.prototype = {
        constructor: THREE.AnimationClip,
        resetDuration: function() {
            for (var e = 0, t = 0, i = this.tracks.length; t !== i; ++t) var r = this.tracks[t],
                e = Math.max(e, r.times[r.times.length - 1]);
            this.duration = e
        },
        trim: function() {
            for (var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
            return this
        },
        optimize: function() {
            for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
            return this
        }
    }, Object.assign(THREE.AnimationClip, {
        parse: function(e) {
            for (var t = [], i = e.tracks, r = 1 / (e.fps || 1), n = 0, a = i.length; n !== a; ++n) t.push(THREE.KeyframeTrack.parse(i[n]).scale(r));
            return new THREE.AnimationClip(e.name, e.duration, t)
        },
        toJSON: function(e) {
            var t = [],
                i = e.tracks;
            e = {
                name: e.name,
                duration: e.duration,
                tracks: t
            };
            for (var r = 0, n = i.length; r !== n; ++r) t.push(THREE.KeyframeTrack.toJSON(i[r]));
            return e
        },
        CreateFromMorphTargetSequence: function(e, t, i, r) {
            for (var n = t.length, a = [], o = 0; n > o; o++) {
                var s = [],
                    c = [];
                s.push((o + n - 1) % n, o, (o + 1) % n), c.push(0, 1, 0);
                var h = THREE.AnimationUtils.getKeyframeOrder(s),
                    s = THREE.AnimationUtils.sortedArray(s, 1, h),
                    c = THREE.AnimationUtils.sortedArray(c, 1, h);
                r || 0 !== s[0] || (s.push(n), c.push(c[0])), a.push(new THREE.NumberKeyframeTrack(".morphTargetInfluences[" + t[o].name + "]", s, c).scale(1 / i))
            }
            return new THREE.AnimationClip(e, -1, a)
        },
        findByName: function(e, t) {
            var i = e;
            Array.isArray(e) || (i = e.geometry && e.geometry.animations || e.animations);
            for (var r = 0; r < i.length; r++)
                if (i[r].name === t) return i[r];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(e, t, i) {
            for (var r = {}, n = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; o > a; a++) {
                var s = e[a],
                    c = s.name.match(n);
                if (c && 1 < c.length) {
                    var h = c[1];
                    (c = r[h]) || (r[h] = c = []), c.push(s)
                }
            }
            e = [];
            for (h in r) e.push(THREE.AnimationClip.CreateFromMorphTargetSequence(h, r[h], t, i));
            return e
        },
        parseAnimation: function(e, t, i) {
            if (!e) return console.error("  no animation in JSONLoader data"), null;
            i = function(e, t, i, r, n) {
                if (0 !== i.length) {
                    var a = [],
                        o = [];
                    THREE.AnimationUtils.flattenJSON(i, a, o, r), 0 !== a.length && n.push(new e(t, a, o))
                }
            };
            var r = [],
                n = e.name || "default",
                a = e.length || -1,
                o = e.fps || 30;
            e = e.hierarchy || [];
            for (var s = 0; s < e.length; s++) {
                var c = e[s].keys;
                if (c && 0 !== c.length)
                    if (c[0].morphTargets) {
                        for (var a = {}, h = 0; h < c.length; h++)
                            if (c[h].morphTargets)
                                for (var l = 0; l < c[h].morphTargets.length; l++) a[c[h].morphTargets[l]] = -1;
                        for (var u in a) {
                            for (var p = [], d = [], l = 0; l !== c[h].morphTargets.length; ++l) {
                                var f = c[h];
                                p.push(f.time), d.push(f.morphTarget === u ? 1 : 0)
                            }
                            r.push(new THREE.NumberKeyframeTrack(".morphTargetInfluence[" + u + "]", p, d))
                        }
                        a = a.length * (o || 1)
                    } else h = ".bones[" + t[s].name + "]", i(THREE.VectorKeyframeTrack, h + ".position", c, "pos", r), i(THREE.QuaternionKeyframeTrack, h + ".quaternion", c, "rot", r), i(THREE.VectorKeyframeTrack, h + ".scale", c, "scl", r)
            }
            return 0 === r.length ? null : new THREE.AnimationClip(n, a, r)
        }
    }), THREE.AnimationMixer = function(e) {
        this._root = e, this._initMemoryManager(), this.time = this._accuIndex = 0, this.timeScale = 1
    }, Object.assign(THREE.AnimationMixer.prototype, THREE.EventDispatcher.prototype, {
        clipAction: function(e, t) {
            var i = t || this._root,
                r = i.uuid,
                n = "string" == typeof e ? THREE.AnimationClip.findByName(i, e) : e,
                i = null !== n ? n.uuid : e,
                a = this._actionsByClip[i],
                o = null;
            if (void 0 !== a) {
                if (o = a.actionByRoot[r], void 0 !== o) return o;
                o = a.knownActions[0], null === n && (n = o._clip)
            }
            return null === n ? null : (n = new THREE.AnimationMixer._Action(this, n, t), this._bindAction(n, o), this._addInactiveAction(n, i, r), n)
        },
        existingAction: function(e, t) {
            var i = t || this._root,
                r = i.uuid,
                i = "string" == typeof e ? THREE.AnimationClip.findByName(i, e) : e,
                i = this._actionsByClip[i ? i.uuid : e];
            return void 0 !== i ? i.actionByRoot[r] || null : null
        },
        stopAllAction: function() {
            for (var e = this._actions, t = this._nActiveActions, i = this._bindings, r = this._nActiveBindings, n = this._nActiveBindings = this._nActiveActions = 0; n !== t; ++n) e[n].reset();
            for (n = 0; n !== r; ++n) i[n].useCount = 0;
            return this
        },
        update: function(e) {
            e *= this.timeScale;
            for (var t = this._actions, i = this._nActiveActions, r = this.time += e, n = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) {
                var s = t[o];
                s.enabled && s._update(r, e, n, a)
            }
            for (e = this._bindings, t = this._nActiveBindings, o = 0; o !== t; ++o) e[o].apply(a);
            return this
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(e) {
            var t = this._actions;
            e = e.uuid;
            var i = this._actionsByClip,
                r = i[e];
            if (void 0 !== r) {
                for (var r = r.knownActions, n = 0, a = r.length; n !== a; ++n) {
                    var o = r[n];
                    this._deactivateAction(o);
                    var s = o._cacheIndex,
                        c = t[t.length - 1];
                    o._cacheIndex = null, o._byClipCacheIndex = null, c._cacheIndex = s, t[s] = c, t.pop(), this._removeInactiveBindingsForAction(o)
                }
                delete i[e]
            }
        },
        uncacheRoot: function(e) {
            e = e.uuid;
            var t = this._actionsByClip,
                i;
            for (i in t) {
                var r = t[i].actionByRoot[e];
                void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
            }
            if (i = this._bindingsByRootAndName[e], void 0 !== i)
                for (var n in i) e = i[n], e.restoreOriginalState(), this._removeInactiveBinding(e)
        },
        uncacheAction: function(e, t) {
            var i = this.existingAction(e, t);
            null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
        }
    }), THREE.AnimationMixer._Action = THREE.AnimationAction._new, Object.assign(THREE.AnimationMixer.prototype, {
        _bindAction: function(e, t) {
            var i = e._localRoot || this._root,
                r = e._clip.tracks,
                n = r.length,
                a = e._propertyBindings,
                o = e._interpolants,
                s = i.uuid,
                c = this._bindingsByRootAndName,
                h = c[s];
            for (void 0 === h && (h = {}, c[s] = h), c = 0; c !== n; ++c) {
                var l = r[c],
                    u = l.name,
                    p = h[u];
                if (void 0 === p) {
                    if (p = a[c], void 0 !== p) {
                        null === p._cacheIndex && (++p.referenceCount, this._addInactiveBinding(p, s, u));
                        continue
                    }
                    p = new THREE.PropertyMixer(THREE.PropertyBinding.create(i, u, t && t._propertyBindings[c].binding.parsedPath), l.ValueTypeName, l.getValueSize()), ++p.referenceCount, this._addInactiveBinding(p, s, u)
                }
                a[c] = p, o[c].resultBuffer = p.buffer
            }
        },
        _activateAction: function(e) {
            if (!this._isActiveAction(e)) {
                if (null === e._cacheIndex) {
                    var t = (e._localRoot || this._root).uuid,
                        i = e._clip.uuid,
                        r = this._actionsByClip[i];
                    this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, i, t)
                }
                for (t = e._propertyBindings, i = 0, r = t.length; i !== r; ++i) {
                    var n = t[i];
                    0 === n.useCount++ && (this._lendBinding(n), n.saveOriginalState())
                }
                this._lendAction(e)
            }
        },
        _deactivateAction: function(e) {
            if (this._isActiveAction(e)) {
                for (var t = e._propertyBindings, i = 0, r = t.length; i !== r; ++i) {
                    var n = t[i];
                    0 === --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n))
                }
                this._takeBackAction(e)
            }
        },
        _initMemoryManager: function() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            var e = this;
            this.stats = {
                actions: {
                    get total() {
                        return e._actions.length
                    },
                    get inUse() {
                        return e._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return e._bindings.length
                    },
                    get inUse() {
                        return e._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return e._controlInterpolants.length
                    },
                    get inUse() {
                        return e._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(e) {
            return e = e._cacheIndex, null !== e && e < this._nActiveActions
        },
        _addInactiveAction: function(e, t, i) {
            var r = this._actions,
                n = this._actionsByClip,
                a = n[t];
            void 0 === a ? (a = {
                knownActions: [e],
                actionByRoot: {}
            }, e._byClipCacheIndex = 0, n[t] = a) : (t = a.knownActions, e._byClipCacheIndex = t.length, t.push(e)), e._cacheIndex = r.length, r.push(e), a.actionByRoot[i] = e
        },
        _removeInactiveAction: function(e) {
            var t = this._actions,
                i = t[t.length - 1],
                r = e._cacheIndex;
            i._cacheIndex = r, t[r] = i, t.pop(), e._cacheIndex = null;
            var i = e._clip.uuid,
                r = this._actionsByClip,
                n = r[i],
                a = n.knownActions,
                o = a[a.length - 1],
                s = e._byClipCacheIndex;
            o._byClipCacheIndex = s, a[s] = o, a.pop(), e._byClipCacheIndex = null, delete n.actionByRoot[(t._localRoot || this._root).uuid], 0 === a.length && delete r[i], this._removeInactiveBindingsForAction(e)
        },
        _removeInactiveBindingsForAction: function(e) {
            e = e._propertyBindings;
            for (var t = 0, i = e.length; t !== i; ++t) {
                var r = e[t];
                0 === --r.referenceCount && this._removeInactiveBinding(r)
            }
        },
        _lendAction: function(e) {
            var t = this._actions,
                i = e._cacheIndex,
                r = this._nActiveActions++,
                n = t[r];
            e._cacheIndex = r, t[r] = e, n._cacheIndex = i, t[i] = n
        },
        _takeBackAction: function(e) {
            var t = this._actions,
                i = e._cacheIndex,
                r = --this._nActiveActions,
                n = t[r];
            e._cacheIndex = r, t[r] = e, n._cacheIndex = i, t[i] = n
        },
        _addInactiveBinding: function(e, t, i) {
            var r = this._bindingsByRootAndName,
                n = r[t],
                a = this._bindings;
            void 0 === n && (n = {}, r[t] = n), n[i] = e, e._cacheIndex = a.length, a.push(e)
        },
        _removeInactiveBinding: function(e) {
            var t = this._bindings,
                i = e.binding,
                r = i.rootNode.uuid,
                i = i.path,
                n = this._bindingsByRootAndName,
                a = n[r],
                o = t[t.length - 1];
            e = e._cacheIndex, o._cacheIndex = e, t[e] = o, t.pop(), delete a[i];
            e: {
                for (var s in a) break e;delete n[r]
            }
        },
        _lendBinding: function(e) {
            var t = this._bindings,
                i = e._cacheIndex,
                r = this._nActiveBindings++,
                n = t[r];
            e._cacheIndex = r, t[r] = e, n._cacheIndex = i, t[i] = n
        },
        _takeBackBinding: function(e) {
            var t = this._bindings,
                i = e._cacheIndex,
                r = --this._nActiveBindings,
                n = t[r];
            e._cacheIndex = r, t[r] = e, n._cacheIndex = i, t[i] = n
        },
        _lendControlInterpolant: function() {
            var e = this._controlInterpolants,
                t = this._nActiveControlInterpolants++,
                i = e[t];
            return void 0 === i && (i = new THREE.LinearInterpolant(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), i.__cacheIndex = t, e[t] = i), i
        },
        _takeBackControlInterpolant: function(e) {
            var t = this._controlInterpolants,
                i = e.__cacheIndex,
                r = --this._nActiveControlInterpolants,
                n = t[r];
            e.__cacheIndex = r, t[r] = e, n.__cacheIndex = i, t[i] = n
        },
        _controlInterpolantsResultBuffer: new Float32Array(1)
    }), THREE.AnimationObjectGroup = function(e) {
        this.uuid = THREE.Math.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
        var t = {};
        this._indicesByUUID = t;
        for (var i = 0, r = arguments.length; i !== r; ++i) t[arguments[i].uuid] = i;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        var n = this;
        this.stats = {
            objects: {
                get total() {
                    return n._objects.length
                },
                get inUse() {
                    return this.total - n.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return n._bindings.length
            }
        }
    }, THREE.AnimationObjectGroup.prototype = {
        constructor: THREE.AnimationObjectGroup,
        add: function(e) {
            for (var t = this._objects, i = t.length, r = this.nCachedObjects_, n = this._indicesByUUID, a = this._paths, o = this._parsedPaths, s = this._bindings, c = s.length, h = 0, l = arguments.length; h !== l; ++h) {
                var u = arguments[h],
                    p = u.uuid,
                    d = n[p];
                if (void 0 === d) {
                    d = i++, n[p] = d, t.push(u);
                    for (var p = 0, f = c; p !== f; ++p) s[p].push(new THREE.PropertyBinding(u, a[p], o[p]))
                } else if (r > d) {
                    var E = t[d],
                        m = --r,
                        f = t[m];
                    for (n[f.uuid] = d, t[d] = f, n[p] = m, t[m] = u, p = 0, f = c; p !== f; ++p) {
                        var g = s[p],
                            T = g[d];
                        g[d] = g[m], void 0 === T && (T = new THREE.PropertyBinding(u, a[p], o[p])), g[m] = T
                    }
                } else t[d] !== E && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
            }
            this.nCachedObjects_ = r
        },
        remove: function(e) {
            for (var t = this._objects, i = this.nCachedObjects_, r = this._indicesByUUID, n = this._bindings, a = n.length, o = 0, s = arguments.length; o !== s; ++o) {
                var c = arguments[o],
                    h = c.uuid,
                    l = r[h];
                if (void 0 !== l && l >= i) {
                    var u = i++,
                        p = t[u];
                    for (r[p.uuid] = l, t[l] = p, r[h] = u, t[u] = c, c = 0, h = a; c !== h; ++c) {
                        var p = n[c],
                            d = p[l];
                        p[l] = p[u], p[u] = d
                    }
                }
            }
            this.nCachedObjects_ = i
        },
        uncache: function(e) {
            for (var t = this._objects, i = t.length, r = this.nCachedObjects_, n = this._indicesByUUID, a = this._bindings, o = a.length, s = 0, c = arguments.length; s !== c; ++s) {
                var h = arguments[s].uuid,
                    l = n[h];
                if (void 0 !== l)
                    if (delete n[h], r > l) {
                        var h = --r,
                            u = t[h],
                            p = --i,
                            d = t[p];
                        for (n[u.uuid] = l, t[l] = u, n[d.uuid] = h, t[h] = d, t.pop(), u = 0, d = o; u !== d; ++u) {
                            var f = a[u],
                                E = f[p];
                            f[l] = f[h], f[h] = E, f.pop()
                        }
                    } else
                        for (p = --i, d = t[p], n[d.uuid] = l, t[l] = d, t.pop(), u = 0, d = o; u !== d; ++u) f = a[u], f[l] = f[p], f.pop()
            }
            this.nCachedObjects_ = r
        },
        subscribe_: function(e, t) {
            var i = this._bindingsIndicesByPath,
                r = i[e],
                n = this._bindings;
            if (void 0 !== r) return n[r];
            var a = this._paths,
                o = this._parsedPaths,
                s = this._objects,
                c = this.nCachedObjects_,
                h = Array(s.length),
                r = n.length;
            for (i[e] = r, a.push(e), o.push(t), n.push(h), i = c, r = s.length; i !== r; ++i) h[i] = new THREE.PropertyBinding(s[i], e, t);
            return h
        },
        unsubscribe_: function(e) {
            var t = this._bindingsIndicesByPath,
                i = t[e];
            if (void 0 !== i) {
                var r = this._paths,
                    n = this._parsedPaths,
                    a = this._bindings,
                    o = a.length - 1,
                    s = a[o];
                t[e[o]] = i, a[i] = s, a.pop(), n[i] = n[o], n.pop(), r[i] = r[o], r.pop()
            }
        }
    }, THREE.AnimationUtils = {
        arraySlice: function(e, t, i) {
            return THREE.AnimationUtils.isTypedArray(e) ? new e.constructor(e.subarray(t, i)) : e.slice(t, i)
        },
        convertArray: function(e, t, i) {
            return !e || !i && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
        },
        isTypedArray: function(e) {
            return ArrayBuffer.isView(e) && !(e instanceof DataView)
        },
        getKeyframeOrder: function(e) {
            for (var t = e.length, i = Array(t), r = 0; r !== t; ++r) i[r] = r;
            return i.sort(function(t, i) {
                return e[t] - e[i]
            }), i
        },
        sortedArray: function(e, t, i) {
            for (var r = e.length, n = new e.constructor(r), a = 0, o = 0; o !== r; ++a)
                for (var s = i[a] * t, c = 0; c !== t; ++c) n[o++] = e[s + c];
            return n
        },
        flattenJSON: function(e, t, i, r) {
            for (var n = 1, a = e[0]; void 0 !== a && void 0 === a[r];) a = e[n++];
            if (void 0 !== a) {
                var o = a[r];
                if (void 0 !== o)
                    if (Array.isArray(o)) {
                        do o = a[r], void 0 !== o && (t.push(a.time), i.push.apply(i, o)), a = e[n++]; while (void 0 !== a)
                    } else if (void 0 !== o.toArray) {
                    do o = a[r], void 0 !== o && (t.push(a.time), o.toArray(i, i.length)), a = e[n++]; while (void 0 !== a)
                } else
                    do o = a[r], void 0 !== o && (t.push(a.time), i.push(o)), a = e[n++]; while (void 0 !== a)
            }
        }
    }, THREE.KeyframeTrack = function(e, t, i, r) {
        if (void 0 === e) throw Error("track name is undefined");
        if (void 0 === t || 0 === t.length) throw Error("no keyframes in track named " + e);
        this.name = e, this.times = THREE.AnimationUtils.convertArray(t, this.TimeBufferType), this.values = THREE.AnimationUtils.convertArray(i, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation), this.validate(), this.optimize()
    }, THREE.KeyframeTrack.prototype = {
        constructor: THREE.KeyframeTrack,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: THREE.InterpolateLinear,
        InterpolantFactoryMethodDiscrete: function(e) {
            return new THREE.DiscreteInterpolant(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodLinear: function(e) {
            return new THREE.LinearInterpolant(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodSmooth: function(e) {
            return new THREE.CubicInterpolant(this.times, this.values, this.getValueSize(), e)
        },
        setInterpolation: function(e) {
            var t;
            switch (e) {
                case THREE.InterpolateDiscrete:
                    t = this.InterpolantFactoryMethodDiscrete;
                    break;
                case THREE.InterpolateLinear:
                    t = this.InterpolantFactoryMethodLinear;
                    break;
                case THREE.InterpolateSmooth:
                    t = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === t) {
                if (t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name, void 0 === this.createInterpolant) {
                    if (e === this.DefaultInterpolation) throw Error(t);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                console.warn(t)
            } else this.createInterpolant = t
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return THREE.InterpolateDiscrete;
                case this.InterpolantFactoryMethodLinear:
                    return THREE.InterpolateLinear;
                case this.InterpolantFactoryMethodSmooth:
                    return THREE.InterpolateSmooth
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(e) {
            if (0 !== e)
                for (var t = this.times, i = 0, r = t.length; i !== r; ++i) t[i] += e;
            return this
        },
        scale: function(e) {
            if (1 !== e)
                for (var t = this.times, i = 0, r = t.length; i !== r; ++i) t[i] *= e;
            return this
        },
        trim: function(e, t) {
            for (var i = this.times, r = i.length, n = 0, a = r - 1; n !== r && i[n] < e;) ++n;
            for (; - 1 !== a && i[a] > t;) --a;
            return ++a, (0 !== n || a !== r) && (n >= a && (a = Math.max(a, 1), n = a - 1), r = this.getValueSize(), this.times = THREE.AnimationUtils.arraySlice(i, n, a), this.values = THREE.AnimationUtils.arraySlice(this.values, n * r, a * r)), this
        },
        validate: function() {
            var e = !0,
                t = this.getValueSize();
            0 !== t - Math.floor(t) && (console.error("invalid value size in track", this), e = !1);
            var i = this.times,
                t = this.values,
                r = i.length;
            0 === r && (console.error("track is empty", this), e = !1);
            for (var n = null, a = 0; a !== r; a++) {
                var o = i[a];
                if ("number" == typeof o && isNaN(o)) {
                    console.error("time is not a valid number", this, a, o), e = !1;
                    break
                }
                if (null !== n && n > o) {
                    console.error("out of order keys", this, a, o, n), e = !1;
                    break
                }
                n = o
            }
            if (void 0 !== t && THREE.AnimationUtils.isTypedArray(t))
                for (a = 0, i = t.length; a !== i; ++a)
                    if (r = t[a], isNaN(r)) {
                        console.error("value is not a valid number", this, a, r), e = !1;
                        break
                    } return e
        },
        optimize: function() {
            for (var e = this.times, t = this.values, i = this.getValueSize(), r = 1, n = 1, a = e.length - 1; a >= n; ++n) {
                var o = !1,
                    s = e[n];
                if (s !== e[n + 1] && (1 !== n || s !== s[0]))
                    for (var c = n * i, h = c - i, l = c + i, s = 0; s !== i; ++s) {
                        var u = t[c + s];
                        if (u !== t[h + s] || u !== t[l + s]) {
                            o = !0;
                            break
                        }
                    }
                if (o) {
                    if (n !== r)
                        for (e[r] = e[n], o = n * i, c = r * i, s = 0; s !== i; ++s) t[c + s] = t[o + s];
                    ++r
                }
            }
            return r !== e.length && (this.times = THREE.AnimationUtils.arraySlice(e, 0, r), this.values = THREE.AnimationUtils.arraySlice(t, 0, r * i)), this
        }
    }, Object.assign(THREE.KeyframeTrack, {
        parse: function(e) {
            if (void 0 === e.type) throw Error("track type undefined, can not parse");
            var t = THREE.KeyframeTrack._getTrackTypeForValueTypeName(e.type);
            if (void 0 === e.times) {
                var i = [],
                    r = [];
                THREE.AnimationUtils.flattenJSON(e.keys, i, r, "value"), e.times = i, e.values = r
            }
            return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
        },
        toJSON: function(e) {
            var t = e.constructor;
            if (void 0 !== t.toJSON) t = t.toJSON(e);
            else {
                var t = {
                        name: e.name,
                        times: THREE.AnimationUtils.convertArray(e.times, Array),
                        values: THREE.AnimationUtils.convertArray(e.values, Array)
                    },
                    i = e.getInterpolation();
                i !== e.DefaultInterpolation && (t.interpolation = i)
            }
            return t.type = e.ValueTypeName, t
        },
        _getTrackTypeForValueTypeName: function(e) {
            switch (e.toLowerCase()) {
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return THREE.NumberKeyframeTrack;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return THREE.VectorKeyframeTrack;
                case "color":
                    return THREE.ColorKeyframeTrack;
                case "quaternion":
                    return THREE.QuaternionKeyframeTrack;
                case "bool":
                case "boolean":
                    return THREE.BooleanKeyframeTrack;
                case "string":
                    return THREE.StringKeyframeTrack
            }
            throw Error("Unsupported typeName: " + e)
        }
    }), THREE.PropertyBinding = function(e, t, i) {
        this.path = t, this.parsedPath = i || THREE.PropertyBinding.parseTrackName(t), this.node = THREE.PropertyBinding.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e
    }, THREE.PropertyBinding.prototype = {
        constructor: THREE.PropertyBinding,
        getValue: function(e, t) {
            this.bind(), this.getValue(e, t)
        },
        setValue: function(e, t) {
            this.bind(), this.setValue(e, t)
        },
        bind: function() {
            var e = this.node,
                t = this.parsedPath,
                i = t.objectName,
                r = t.propertyName,
                n = t.propertyIndex;
            if (e || (this.node = e = THREE.PropertyBinding.findNode(this.rootNode, t.nodeName) || this.rootNode), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, e) {
                if (i) {
                    var a = t.objectIndex;
                    switch (i) {
                        case "materials":
                            if (!e.material) return void console.error("  can not bind to material as node does not have a material", this);
                            if (!e.material.materials) return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                            e = e.material.materials;
                            break;
                        case "bones":
                            if (!e.skeleton) return void console.error("  can not bind to bones as node does not have a skeleton", this);
                            for (e = e.skeleton.bones, i = 0; i < e.length; i++)
                                if (e[i].name === a) {
                                    a = i;
                                    break
                                } break;
                        default:
                            if (void 0 === e[i]) return void console.error("  can not bind to objectName of node, undefined", this);
                            e = e[i]
                    }
                    if (void 0 !== a) {
                        if (void 0 === e[a]) return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, e);
                        e = e[a]
                    }
                }
                if (a = e[r], void 0 === a) console.error("  trying to update property for track: " + t.nodeName + "." + r + " but it wasn't found.", e);
                else {
                    if (t = this.Versioning.None, void 0 !== e.needsUpdate ? (t = this.Versioning.NeedsUpdate, this.targetObject = e) : void 0 !== e.matrixWorldNeedsUpdate && (t = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = e), i = this.BindingType.Direct, void 0 !== n) {
                        if ("morphTargetInfluences" === r) {
                            if (!e.geometry) return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                            if (!e.geometry.morphTargets) return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                            for (i = 0; i < this.node.geometry.morphTargets.length; i++)
                                if (e.geometry.morphTargets[i].name === n) {
                                    n = i;
                                    break
                                }
                        }
                        i = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = n
                    } else void 0 !== a.fromArray && void 0 !== a.toArray ? (i = this.BindingType.HasFromToArray, this.resolvedProperty = a) : void 0 !== a.length ? (i = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = r;
                    this.getValue = this.GetterByBindingType[i], this.setValue = this.SetterByBindingTypeAndVersioning[i][t]
                }
            } else console.error("  trying to update node for track: " + this.path + " but it wasn't found.")
        },
        unbind: function() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
    }, Object.assign(THREE.PropertyBinding.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        _getValue_unbound: THREE.PropertyBinding.prototype.getValue,
        _setValue_unbound: THREE.PropertyBinding.prototype.setValue,
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(e, t) {
            e[t] = this.node[this.propertyName]
        }, function(e, t) {
            for (var i = this.resolvedProperty, r = 0, n = i.length; r !== n; ++r) e[t++] = i[r]
        }, function(e, t) {
            e[t] = this.resolvedProperty[this.propertyIndex]
        }, function(e, t) {
            this.resolvedProperty.toArray(e, t)
        }],
        SetterByBindingTypeAndVersioning: [
            [function(e, t) {
                this.node[this.propertyName] = e[t]
            }, function(e, t) {
                this.node[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
            }, function(e, t) {
                this.node[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(e, t) {
                for (var i = this.resolvedProperty, r = 0, n = i.length; r !== n; ++r) i[r] = e[t++]
            }, function(e, t) {
                for (var i = this.resolvedProperty, r = 0, n = i.length; r !== n; ++r) i[r] = e[t++];
                this.targetObject.needsUpdate = !0
            }, function(e, t) {
                for (var i = this.resolvedProperty, r = 0, n = i.length; r !== n; ++r) i[r] = e[t++];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(e, t) {
                this.resolvedProperty[this.propertyIndex] = e[t]
            }, function(e, t) {
                this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
            }, function(e, t) {
                this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(e, t) {
                this.resolvedProperty.fromArray(e, t)
            }, function(e, t) {
                this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
            }, function(e, t) {
                this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
            }]
        ]
    }), THREE.PropertyBinding.Composite = function(e, t, i) {
        i = i || THREE.PropertyBinding.parseTrackName(t), this._targetGroup = e, this._bindings = e.subscribe_(t, i)
    }, THREE.PropertyBinding.Composite.prototype = {
        constructor: THREE.PropertyBinding.Composite,
        getValue: function(e, t) {
            this.bind();
            var i = this._bindings[this._targetGroup.nCachedObjects_];
            void 0 !== i && i.getValue(e, t)
        },
        setValue: function(e, t) {
            for (var i = this._bindings, r = this._targetGroup.nCachedObjects_, n = i.length; r !== n; ++r) i[r].setValue(e, t)
        },
        bind: function() {
            for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].bind()
        },
        unbind: function() {
            for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].unbind()
        }
    }, THREE.PropertyBinding.create = function(e, t, i) {
        return e instanceof THREE.AnimationObjectGroup ? new THREE.PropertyBinding.Composite(e, t, i) : new THREE.PropertyBinding(e, t, i)
    }, THREE.PropertyBinding.parseTrackName = function(e) {
        var t = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_.:\- ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/,
            i = t.exec(e);
        if (!i) throw Error("cannot parse trackName at all: " + e);
        if (i.index === t.lastIndex && t.lastIndex++, t = {
                nodeName: i[3],
                objectName: i[5],
                objectIndex: i[7],
                propertyName: i[9],
                propertyIndex: i[11]
            }, null === t.propertyName || 0 === t.propertyName.length) throw Error("can not parse propertyName from trackName: " + e);
        return t
    }, THREE.PropertyBinding.findNode = function(e, t) {
        if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
        if (e.skeleton) {
            var i = function(e) {
                for (var i = 0; i < e.bones.length; i++) {
                    var r = e.bones[i];
                    if (r.name === t) return r
                }
                return null
            }(e.skeleton);
            if (i) return i
        }
        if (e.children) {
            var r = function(e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    if (n.name === t || n.uuid === t || (n = r(n.children))) return n
                }
                return null
            };
            if (i = r(e.children)) return i
        }
        return null
    }, THREE.PropertyMixer = function(e, t, i) {
        switch (this.binding = e, this.valueSize = i, e = Float64Array, t) {
            case "quaternion":
                t = this._slerp;
                break;
            case "string":
            case "bool":
                e = Array, t = this._select;
                break;
            default:
                t = this._lerp
        }
        this.buffer = new e(4 * i), this._mixBufferRegion = t, this.referenceCount = this.useCount = this.cumulativeWeight = 0
    }, THREE.PropertyMixer.prototype = {
        constructor: THREE.PropertyMixer,
        accumulate: function(e, t) {
            var i = this.buffer,
                r = this.valueSize,
                n = e * r + r,
                a = this.cumulativeWeight;
            if (0 === a) {
                for (a = 0; a !== r; ++a) i[n + a] = i[a];
                a = t
            } else a += t, this._mixBufferRegion(i, n, 0, t / a, r);
            this.cumulativeWeight = a
        },
        apply: function(e) {
            var t = this.valueSize,
                i = this.buffer;
            e = e * t + t;
            var r = this.cumulativeWeight,
                n = this.binding;
            this.cumulativeWeight = 0, 1 > r && this._mixBufferRegion(i, e, 3 * t, 1 - r, t);
            for (var r = t, a = t + t; r !== a; ++r)
                if (i[r] !== i[r + t]) {
                    n.setValue(i, e);
                    break
                }
        },
        saveOriginalState: function() {
            var e = this.buffer,
                t = this.valueSize,
                i = 3 * t;
            this.binding.getValue(e, i);
            for (var r = t; r !== i; ++r) e[r] = e[i + r % t];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            this.binding.setValue(this.buffer, 3 * this.valueSize)
        },
        _select: function(e, t, i, r, n) {
            if (r >= .5)
                for (r = 0; r !== n; ++r) e[t + r] = e[i + r]
        },
        _slerp: function(e, t, i, r, n) {
            THREE.Quaternion.slerpFlat(e, t, e, t, e, i, r)
        },
        _lerp: function(e, t, i, r, n) {
            for (var a = 1 - r, o = 0; o !== n; ++o) {
                var s = t + o;
                e[s] = e[s] * a + e[i + o] * r
            }
        }
    }, THREE.BooleanKeyframeTrack = function(e, t, i) {
        THREE.KeyframeTrack.call(this, e, t, i)
    }, THREE.BooleanKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
        constructor: THREE.BooleanKeyframeTrack,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: THREE.InterpolateDiscrete,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), THREE.ColorKeyframeTrack = function(e, t, i, r) {
        THREE.KeyframeTrack.call(this, e, t, i, r)
    }, THREE.ColorKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
        constructor: THREE.ColorKeyframeTrack,
        ValueTypeName: "color"
    }), THREE.NumberKeyframeTrack = function(e, t, i, r) {
        THREE.KeyframeTrack.call(this, e, t, i, r)
    }, THREE.NumberKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
        constructor: THREE.NumberKeyframeTrack,
        ValueTypeName: "number"
    }), THREE.QuaternionKeyframeTrack = function(e, t, i, r) {
        THREE.KeyframeTrack.call(this, e, t, i, r)
    }, THREE.QuaternionKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
        constructor: THREE.QuaternionKeyframeTrack,
        ValueTypeName: "quaternion",
        DefaultInterpolation: THREE.InterpolateLinear,
        InterpolantFactoryMethodLinear: function(e) {
            return new THREE.QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodSmooth: void 0
    }), THREE.StringKeyframeTrack = function(e, t, i, r) {
        THREE.KeyframeTrack.call(this, e, t, i, r)
    }, THREE.StringKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
        constructor: THREE.StringKeyframeTrack,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: THREE.InterpolateDiscrete,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), THREE.VectorKeyframeTrack = function(e, t, i, r) {
        THREE.KeyframeTrack.call(this, e, t, i, r)
    }, THREE.VectorKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
        constructor: THREE.VectorKeyframeTrack,
        ValueTypeName: "vector"
    }), THREE.Audio = function(e) {
        THREE.Object3D.call(this), this.type = "Audio", this.context = e.context, this.source = this.context.createBufferSource(), this.source.onended = this.onEnded.bind(this), this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
    }, THREE.Audio.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
        constructor: THREE.Audio,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(e) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
        },
        setBuffer: function(e) {
            return this.source.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
        },
        play: function() {
            if (!0 === this.isPlaying) console.warn("THREE.Audio: Audio is already playing.");
            else {
                if (!1 !== this.hasPlaybackControl) {
                    var e = this.context.createBufferSource();
                    return e.buffer = this.source.buffer, e.loop = this.source.loop, e.onended = this.source.onended, e.start(0, this.startTime), e.playbackRate.value = this.playbackRate, this.isPlaying = !0, this.source = e, this.connect()
                }
                console.warn("THREE.Audio: this Audio has no playback control.")
            }
        },
        pause: function() {
            return !1 !== this.hasPlaybackControl ? (this.source.stop(), this.startTime = this.context.currentTime, this.isPlaying = !1, this) : void console.warn("THREE.Audio: this Audio has no playback control.")
        },
        stop: function() {
            return !1 !== this.hasPlaybackControl ? (this.source.stop(), this.startTime = 0, this.isPlaying = !1, this) : void console.warn("THREE.Audio: this Audio has no playback control.")
        },
        connect: function() {
            if (0 < this.filters.length) {
                this.source.connect(this.filters[0]);
                for (var e = 1, t = this.filters.length; t > e; e++) this.filters[e - 1].connect(this.filters[e]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (0 < this.filters.length) {
                this.source.disconnect(this.filters[0]);
                for (var e = 1, t = this.filters.length; t > e; e++) this.filters[e - 1].disconnect(this.filters[e]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(e) {
            return e || (e = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = e, this.connect()) : this.filters = e, this
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(e) {
            return this.setFilters(e ? [e] : [])
        },
        setPlaybackRate: function(e) {
            return !1 !== this.hasPlaybackControl ? (this.playbackRate = e, !0 === this.isPlaying && (this.source.playbackRate.value = this.playbackRate), this) : void console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.source.loop
        },
        setLoop: function(e) {
            !1 === this.hasPlaybackControl ? console.warn("THREE.Audio: this Audio has no playback control.") : this.source.loop = e
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(e) {
            return this.gain.gain.value = e, this
        }
    }), THREE.AudioAnalyser = function(e, t) {
        this.analyser = e.context.createAnalyser(), this.analyser.fftSize = void 0 !== t ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser)
    }, Object.assign(THREE.AudioAnalyser.prototype, {
        getFrequencyData: function() {
            return this.analyser.getByteFrequencyData(this.data), this.data
        },
        getAverageFrequency: function() {
            for (var e = 0, t = this.getFrequencyData(), i = 0; i < t.length; i++) e += t[i];
            return e / t.length
        }
    }), Object.defineProperty(THREE, "AudioContext", {
        get: function() {
            var e;
            return function() {
                return void 0 === e && (e = new(window.AudioContext || window.webkitAudioContext)), e
            }
        }()
    }), THREE.PositionalAudio = function(e) {
        THREE.Audio.call(this, e), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
    }, THREE.PositionalAudio.prototype = Object.assign(Object.create(THREE.Audio.prototype), {
        constructor: THREE.PositionalAudio,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(e) {
            this.panner.refDistance = e
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(e) {
            this.panner.rolloffFactor = e
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(e) {
            this.panner.distanceModel = e
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(e) {
            this.panner.maxDistance = e
        },
        updateMatrixWorld: function() {
            var e = new THREE.Vector3;
            return function(t) {
                THREE.Object3D.prototype.updateMatrixWorld.call(this, t), e.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(e.x, e.y, e.z)
            }
        }()
    }), THREE.AudioListener = function() {
        THREE.Object3D.call(this), this.type = "AudioListener", this.context = THREE.AudioContext, this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
    }, THREE.AudioListener.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
        constructor: THREE.AudioListener,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(e) {
            null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(e) {
            this.gain.gain.value = e
        },
        updateMatrixWorld: function() {
            var e = new THREE.Vector3,
                t = new THREE.Quaternion,
                i = new THREE.Vector3,
                r = new THREE.Vector3;
            return function(n) {
                THREE.Object3D.prototype.updateMatrixWorld.call(this, n), n = this.context.listener;
                var a = this.up;
                this.matrixWorld.decompose(e, t, i), r.set(0, 0, -1).applyQuaternion(t), n.setPosition(e.x, e.y, e.z), n.setOrientation(r.x, r.y, r.z, a.x, a.y, a.z);
            }
        }()
    }), THREE.Camera = function() {
        THREE.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new THREE.Matrix4, this.projectionMatrix = new THREE.Matrix4
    }, THREE.Camera.prototype = Object.create(THREE.Object3D.prototype), THREE.Camera.prototype.constructor = THREE.Camera, THREE.Camera.prototype.getWorldDirection = function() {
        var e = new THREE.Quaternion;
        return function(t) {
            return t = t || new THREE.Vector3, this.getWorldQuaternion(e), t.set(0, 0, -1).applyQuaternion(e)
        }
    }(), THREE.Camera.prototype.lookAt = function() {
        var e = new THREE.Matrix4;
        return function(t) {
            e.lookAt(this.position, t, this.up), this.quaternion.setFromRotationMatrix(e)
        }
    }(), THREE.Camera.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }, THREE.Camera.prototype.copy = function(e) {
        return THREE.Object3D.prototype.copy.call(this, e), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this
    }, THREE.CubeCamera = function(e, t, i) {
        THREE.Object3D.call(this), this.type = "CubeCamera";
        var r = new THREE.PerspectiveCamera(90, 1, e, t);
        r.up.set(0, -1, 0), r.lookAt(new THREE.Vector3(1, 0, 0)), this.add(r);
        var n = new THREE.PerspectiveCamera(90, 1, e, t);
        n.up.set(0, -1, 0), n.lookAt(new THREE.Vector3(-1, 0, 0)), this.add(n);
        var a = new THREE.PerspectiveCamera(90, 1, e, t);
        a.up.set(0, 0, 1), a.lookAt(new THREE.Vector3(0, 1, 0)), this.add(a);
        var o = new THREE.PerspectiveCamera(90, 1, e, t);
        o.up.set(0, 0, -1), o.lookAt(new THREE.Vector3(0, -1, 0)), this.add(o);
        var s = new THREE.PerspectiveCamera(90, 1, e, t);
        s.up.set(0, -1, 0), s.lookAt(new THREE.Vector3(0, 0, 1)), this.add(s);
        var c = new THREE.PerspectiveCamera(90, 1, e, t);
        c.up.set(0, -1, 0), c.lookAt(new THREE.Vector3(0, 0, -1)), this.add(c), this.renderTarget = new THREE.WebGLRenderTargetCube(i, i, {
            format: THREE.RGBFormat,
            magFilter: THREE.LinearFilter,
            minFilter: THREE.LinearFilter
        }), this.updateCubeMap = function(e, t) {
            null === this.parent && this.updateMatrixWorld();
            var i = this.renderTarget,
                h = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1, i.activeCubeFace = 0, e.render(t, r, i), i.activeCubeFace = 1, e.render(t, n, i), i.activeCubeFace = 2, e.render(t, a, i), i.activeCubeFace = 3, e.render(t, o, i), i.activeCubeFace = 4, e.render(t, s, i), i.texture.generateMipmaps = h, i.activeCubeFace = 5, e.render(t, c, i), e.setRenderTarget(null)
        }
    }, THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype), THREE.CubeCamera.prototype.constructor = THREE.CubeCamera, THREE.OrthographicCamera = function(e, t, i, r, n, a) {
        THREE.Camera.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = r, this.near = void 0 !== n ? n : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
    }, THREE.OrthographicCamera.prototype = Object.assign(Object.create(THREE.Camera.prototype), {
        constructor: THREE.OrthographicCamera,
        copy: function(e) {
            return THREE.Camera.prototype.copy.call(this, e), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this
        },
        setViewOffset: function(e, t, i, r, n, a) {
            this.view = {
                fullWidth: e,
                fullHeight: t,
                offsetX: i,
                offsetY: r,
                width: n,
                height: a
            }, this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null, this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var e = (this.right - this.left) / (2 * this.zoom),
                t = (this.top - this.bottom) / (2 * this.zoom),
                i = (this.right + this.left) / 2,
                r = (this.top + this.bottom) / 2,
                n = i - e,
                i = i + e,
                e = r + t,
                t = r - t;
            if (null !== this.view) var i = this.zoom / (this.view.width / this.view.fullWidth),
                t = this.zoom / (this.view.height / this.view.fullHeight),
                a = (this.right - this.left) / this.view.width,
                r = (this.top - this.bottom) / this.view.height,
                n = n + this.view.offsetX / i * a,
                i = n + this.view.width / i * a,
                e = e - this.view.offsetY / t * r,
                t = e - this.view.height / t * r;
            this.projectionMatrix.makeOrthographic(n, i, e, t, this.near, this.far)
        },
        toJSON: function(e) {
            return e = THREE.Object3D.prototype.toJSON.call(this, e), e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
        }
    }), THREE.PerspectiveCamera = function(e, t, i, r) {
        THREE.Camera.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== e ? e : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== r ? r : 2e3, this.focus = 10, this.aspect = void 0 !== t ? t : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }, THREE.PerspectiveCamera.prototype = Object.assign(Object.create(THREE.Camera.prototype), {
        constructor: THREE.PerspectiveCamera,
        copy: function(e) {
            return THREE.Camera.prototype.copy.call(this, e), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
        },
        setFocalLength: function(e) {
            e = .5 * this.getFilmHeight() / e, this.fov = 2 * THREE.Math.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var e = Math.tan(.5 * THREE.Math.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / e
        },
        getEffectiveFOV: function() {
            return 2 * THREE.Math.RAD2DEG * Math.atan(Math.tan(.5 * THREE.Math.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(e, t, i, r, n, a) {
            this.aspect = e / t, this.view = {
                fullWidth: e,
                fullHeight: t,
                offsetX: i,
                offsetY: r,
                width: n,
                height: a
            }, this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null, this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var e = this.near,
                t = e * Math.tan(.5 * THREE.Math.DEG2RAD * this.fov) / this.zoom,
                i = 2 * t,
                r = this.aspect * i,
                n = -.5 * r,
                a = this.view;
            if (null !== a) var o = a.fullWidth,
                s = a.fullHeight,
                n = n + a.offsetX * r / o,
                t = t - a.offsetY * i / s,
                r = a.width / o * r,
                i = a.height / s * i;
            a = this.filmOffset, 0 !== a && (n += e * a / this.getFilmWidth()), this.projectionMatrix.makeFrustum(n, n + r, t - i, t, e, this.far)
        },
        toJSON: function(e) {
            return e = THREE.Object3D.prototype.toJSON.call(this, e), e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
        }
    }), THREE.StereoCamera = function() {
        this.type = "StereoCamera", this.aspect = 1, this.cameraL = new THREE.PerspectiveCamera, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new THREE.PerspectiveCamera, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
    }, Object.assign(THREE.StereoCamera.prototype, {
        update: function() {
            var e, t, i, r, n, a = new THREE.Matrix4,
                o = new THREE.Matrix4;
            return function(s) {
                if (e !== s.focus || t !== s.fov || i !== s.aspect * this.aspect || r !== s.near || n !== s.far) {
                    e = s.focus, t = s.fov, i = s.aspect * this.aspect, r = s.near, n = s.far;
                    var c = s.projectionMatrix.clone(),
                        h = .032 * r / e,
                        l = r * Math.tan(THREE.Math.DEG2RAD * t * .5),
                        u, p;
                    o.elements[12] = -.032, a.elements[12] = .032, u = -l * i + h, p = l * i + h, c.elements[0] = 2 * r / (p - u), c.elements[8] = (p + u) / (p - u), this.cameraL.projectionMatrix.copy(c), u = -l * i - h, p = l * i - h, c.elements[0] = 2 * r / (p - u), c.elements[8] = (p + u) / (p - u), this.cameraR.projectionMatrix.copy(c)
                }
                this.cameraL.matrixWorld.copy(s.matrixWorld).multiply(o), this.cameraR.matrixWorld.copy(s.matrixWorld).multiply(a)
            }
        }()
    }), THREE.Light = function(e, t) {
        THREE.Object3D.call(this), this.type = "Light", this.color = new THREE.Color(e), this.intensity = void 0 !== t ? t : 1, this.receiveShadow = void 0
    }, THREE.Light.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
        constructor: THREE.Light,
        copy: function(e) {
            return THREE.Object3D.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this
        },
        toJSON: function(e) {
            return e = THREE.Object3D.prototype.toJSON.call(this, e), e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), e
        }
    }), THREE.LightShadow = function(e) {
        this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new THREE.Vector2(512, 512), this.map = null, this.matrix = new THREE.Matrix4
    }, Object.assign(THREE.LightShadow.prototype, {
        copy: function(e) {
            return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }), THREE.AmbientLight = function(e, t) {
        THREE.Light.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0
    }, THREE.AmbientLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
        constructor: THREE.AmbientLight
    }), THREE.DirectionalLight = function(e, t) {
        THREE.Light.call(this, e, t), this.type = "DirectionalLight", this.position.copy(THREE.Object3D.DefaultUp), this.updateMatrix(), this.target = new THREE.Object3D, this.shadow = new THREE.DirectionalLightShadow
    }, THREE.DirectionalLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
        constructor: THREE.DirectionalLight,
        copy: function(e) {
            return THREE.Light.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
        }
    }), THREE.DirectionalLightShadow = function(e) {
        THREE.LightShadow.call(this, new THREE.OrthographicCamera(-5, 5, 5, -5, .5, 500))
    }, THREE.DirectionalLightShadow.prototype = Object.assign(Object.create(THREE.LightShadow.prototype), {
        constructor: THREE.DirectionalLightShadow
    }), THREE.HemisphereLight = function(e, t, i) {
        THREE.Light.call(this, e, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(THREE.Object3D.DefaultUp), this.updateMatrix(), this.groundColor = new THREE.Color(t)
    }, THREE.HemisphereLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
        constructor: THREE.HemisphereLight,
        copy: function(e) {
            return THREE.Light.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
        }
    }), THREE.PointLight = function(e, t, i, r) {
        THREE.Light.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(e) {
                this.intensity = e / (4 * Math.PI)
            }
        }), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== r ? r : 1, this.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(90, 1, .5, 500))
    }, THREE.PointLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
        constructor: THREE.PointLight,
        copy: function(e) {
            return THREE.Light.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
        }
    }), THREE.SpotLight = function(e, t, i, r, n, a) {
        THREE.Light.call(this, e, t), this.type = "SpotLight", this.position.copy(THREE.Object3D.DefaultUp), this.updateMatrix(), this.target = new THREE.Object3D, Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(e) {
                this.intensity = e / Math.PI
            }
        }), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== r ? r : Math.PI / 3, this.penumbra = void 0 !== n ? n : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new THREE.SpotLightShadow
    }, THREE.SpotLight.prototype = Object.assign(Object.create(THREE.Light.prototype), {
        constructor: THREE.SpotLight,
        copy: function(e) {
            return THREE.Light.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
        }
    }), THREE.SpotLightShadow = function() {
        THREE.LightShadow.call(this, new THREE.PerspectiveCamera(50, 1, .5, 500))
    }, THREE.SpotLightShadow.prototype = Object.assign(Object.create(THREE.LightShadow.prototype), {
        constructor: THREE.SpotLightShadow,
        update: function(e) {
            var t = 2 * THREE.Math.RAD2DEG * e.angle,
                i = this.mapSize.width / this.mapSize.height;
            e = e.distance || 500;
            var r = this.camera;
            (t !== r.fov || i !== r.aspect || e !== r.far) && (r.fov = t, r.aspect = i, r.far = e, r.updateProjectionMatrix())
        }
    }), THREE.AudioLoader = function(e) {
        this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
    }, Object.assign(THREE.AudioLoader.prototype, {
        load: function(e, t, i, r) {
            var n = new THREE.XHRLoader(this.manager);
            n.setResponseType("arraybuffer"), n.load(e, function(e) {
                THREE.AudioContext.decodeAudioData(e, function(e) {
                    t(e)
                })
            }, i, r)
        }
    }), THREE.Cache = {
        enabled: !1,
        files: {},
        add: function(e, t) {
            !1 !== this.enabled && (this.files[e] = t)
        },
        get: function(e) {
            return !1 !== this.enabled ? this.files[e] : void 0
        },
        remove: function(e) {
            delete this.files[e]
        },
        clear: function() {
            this.files = {}
        }
    }, THREE.Loader = function() {
        this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}
    }, THREE.Loader.prototype = {
        constructor: THREE.Loader,
        crossOrigin: void 0,
        extractUrlBase: function(e) {
            return e = e.split("/"), 1 === e.length ? "./" : (e.pop(), e.join("/") + "/")
        },
        initMaterials: function(e, t, i) {
            for (var r = [], n = 0; n < e.length; ++n) r[n] = this.createMaterial(e[n], t, i);
            return r
        },
        createMaterial: function() {
            var e, t, i;
            return function(r, n, a) {
                function o(e, i, r, o, c) {
                    e = n + e;
                    var h = THREE.Loader.Handlers.get(e);
                    return null !== h ? e = h.load(e) : (t.setCrossOrigin(a), e = t.load(e)), void 0 !== i && (e.repeat.fromArray(i), 1 !== i[0] && (e.wrapS = THREE.RepeatWrapping), 1 !== i[1] && (e.wrapT = THREE.RepeatWrapping)), void 0 !== r && e.offset.fromArray(r), void 0 !== o && ("repeat" === o[0] && (e.wrapS = THREE.RepeatWrapping), "mirror" === o[0] && (e.wrapS = THREE.MirroredRepeatWrapping), "repeat" === o[1] && (e.wrapT = THREE.RepeatWrapping), "mirror" === o[1] && (e.wrapT = THREE.MirroredRepeatWrapping)), void 0 !== c && (e.anisotropy = c), i = THREE.Math.generateUUID(), s[i] = e, i
                }
                void 0 === e && (e = new THREE.Color), void 0 === t && (t = new THREE.TextureLoader), void 0 === i && (i = new THREE.MaterialLoader);
                var s = {},
                    c = {
                        uuid: THREE.Math.generateUUID(),
                        type: "MeshLambertMaterial"
                    },
                    h;
                for (h in r) {
                    var l = r[h];
                    switch (h) {
                        case "DbgColor":
                        case "DbgIndex":
                        case "opticalDensity":
                        case "illumination":
                            break;
                        case "DbgName":
                            c.name = l;
                            break;
                        case "blending":
                            c.blending = THREE[l];
                            break;
                        case "colorAmbient":
                        case "mapAmbient":
                            console.warn("THREE.Loader.createMaterial:", h, "is no longer supported.");
                            break;
                        case "colorDiffuse":
                            c.color = e.fromArray(l).getHex();
                            break;
                        case "colorSpecular":
                            c.specular = e.fromArray(l).getHex();
                            break;
                        case "colorEmissive":
                            c.emissive = e.fromArray(l).getHex();
                            break;
                        case "specularCoef":
                            c.shininess = l;
                            break;
                        case "shading":
                            "basic" === l.toLowerCase() && (c.type = "MeshBasicMaterial"), "phong" === l.toLowerCase() && (c.type = "MeshPhongMaterial"), "standard" === l.toLowerCase() && (c.type = "MeshStandardMaterial");
                            break;
                        case "mapDiffuse":
                            c.map = o(l, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
                            break;
                        case "mapDiffuseRepeat":
                        case "mapDiffuseOffset":
                        case "mapDiffuseWrap":
                        case "mapDiffuseAnisotropy":
                            break;
                        case "mapEmissive":
                            c.emissiveMap = o(l, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
                            break;
                        case "mapEmissiveRepeat":
                        case "mapEmissiveOffset":
                        case "mapEmissiveWrap":
                        case "mapEmissiveAnisotropy":
                            break;
                        case "mapLight":
                            c.lightMap = o(l, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
                            break;
                        case "mapLightRepeat":
                        case "mapLightOffset":
                        case "mapLightWrap":
                        case "mapLightAnisotropy":
                            break;
                        case "mapAO":
                            c.aoMap = o(l, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
                            break;
                        case "mapAORepeat":
                        case "mapAOOffset":
                        case "mapAOWrap":
                        case "mapAOAnisotropy":
                            break;
                        case "mapBump":
                            c.bumpMap = o(l, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
                            break;
                        case "mapBumpScale":
                            c.bumpScale = l;
                            break;
                        case "mapBumpRepeat":
                        case "mapBumpOffset":
                        case "mapBumpWrap":
                        case "mapBumpAnisotropy":
                            break;
                        case "mapNormal":
                            c.normalMap = o(l, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
                            break;
                        case "mapNormalFactor":
                            c.normalScale = [l, l];
                            break;
                        case "mapNormalRepeat":
                        case "mapNormalOffset":
                        case "mapNormalWrap":
                        case "mapNormalAnisotropy":
                            break;
                        case "mapSpecular":
                            c.specularMap = o(l, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
                            break;
                        case "mapSpecularRepeat":
                        case "mapSpecularOffset":
                        case "mapSpecularWrap":
                        case "mapSpecularAnisotropy":
                            break;
                        case "mapMetalness":
                            c.metalnessMap = o(l, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
                            break;
                        case "mapMetalnessRepeat":
                        case "mapMetalnessOffset":
                        case "mapMetalnessWrap":
                        case "mapMetalnessAnisotropy":
                            break;
                        case "mapRoughness":
                            c.roughnessMap = o(l, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
                            break;
                        case "mapRoughnessRepeat":
                        case "mapRoughnessOffset":
                        case "mapRoughnessWrap":
                        case "mapRoughnessAnisotropy":
                            break;
                        case "mapAlpha":
                            c.alphaMap = o(l, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
                            break;
                        case "mapAlphaRepeat":
                        case "mapAlphaOffset":
                        case "mapAlphaWrap":
                        case "mapAlphaAnisotropy":
                            break;
                        case "flipSided":
                            c.side = THREE.BackSide;
                            break;
                        case "doubleSided":
                            c.side = THREE.DoubleSide;
                            break;
                        case "transparency":
                            console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), c.opacity = l;
                            break;
                        case "depthTest":
                        case "depthWrite":
                        case "colorWrite":
                        case "opacity":
                        case "reflectivity":
                        case "transparent":
                        case "visible":
                        case "wireframe":
                            c[h] = l;
                            break;
                        case "vertexColors":
                            !0 === l && (c.vertexColors = THREE.VertexColors), "face" === l && (c.vertexColors = THREE.FaceColors);
                            break;
                        default:
                            console.error("THREE.Loader.createMaterial: Unsupported", h, l)
                    }
                }
                return "MeshBasicMaterial" === c.type && delete c.emissive, "MeshPhongMaterial" !== c.type && delete c.specular, 1 > c.opacity && (c.transparent = !0), i.setTextures(s), i.parse(c)
            }
        }()
    }, THREE.Loader.Handlers = {
        handlers: [],
        add: function(e, t) {
            this.handlers.push(e, t)
        },
        get: function(e) {
            for (var t = this.handlers, i = 0, r = t.length; r > i; i += 2) {
                var n = t[i + 1];
                if (t[i].test(e)) return n
            }
            return null
        }
    }, THREE.XHRLoader = function(e) {
        this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
    }, Object.assign(THREE.XHRLoader.prototype, {
        load: function(e, t, i, r) {
            void 0 !== this.path && (e = this.path + e);
            var n = this,
                a = THREE.Cache.get(e);
            if (void 0 !== a) return n.manager.itemStart(e), setTimeout(function() {
                t && t(a), n.manager.itemEnd(e)
            }, 0), a;
            var o = new XMLHttpRequest;
            return o.overrideMimeType("text/plain"), o.open("GET", e, !0), o.addEventListener("load", function(i) {
                var a = i.target.response;
                THREE.Cache.add(e, a), 200 === this.status ? (t && t(a), n.manager.itemEnd(e)) : 0 === this.status ? (console.warn("THREE.XHRLoader: HTTP Status 0 received."), t && t(a), n.manager.itemEnd(e)) : (r && r(i), n.manager.itemError(e))
            }, !1), void 0 !== i && o.addEventListener("progress", function(e) {
                i(e)
            }, !1), o.addEventListener("error", function(t) {
                r && r(t), n.manager.itemError(e)
            }, !1), void 0 !== this.responseType && (o.responseType = this.responseType), void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials), o.send(null), n.manager.itemStart(e), o
        },
        setPath: function(e) {
            return this.path = e, this
        },
        setResponseType: function(e) {
            return this.responseType = e, this
        },
        setWithCredentials: function(e) {
            return this.withCredentials = e, this
        }
    }), THREE.FontLoader = function(e) {
        this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
    }, Object.assign(THREE.FontLoader.prototype, {
        load: function(e, t, i, r) {
            var n = this;
            new THREE.XHRLoader(this.manager).load(e, function(e) {
                var i;
                try {
                    i = JSON.parse(e)
                } catch (r) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), i = JSON.parse(e.substring(65, e.length - 2))
                }
                e = n.parse(i), t && t(e)
            }, i, r)
        },
        parse: function(e) {
            return new THREE.Font(e)
        }
    }), THREE.ImageLoader = function(e) {
        this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
    }, Object.assign(THREE.ImageLoader.prototype, {
        load: function(e, t, i, r) {
            var n = this,
                a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            if (a.onload = function() {
                    URL.revokeObjectURL(a.src), t && t(a), n.manager.itemEnd(e)
                }, 0 === e.indexOf("data:")) a.src = e;
            else {
                var o = new THREE.XHRLoader;
                o.setPath(this.path), o.setResponseType("blob"), o.load(e, function(e) {
                    a.src = URL.createObjectURL(e)
                }, i, r)
            }
            return n.manager.itemStart(e), a
        },
        setCrossOrigin: function(e) {
            return this.crossOrigin = e, this
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), THREE.JSONLoader = function(e) {
        "boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), e = void 0), this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this.withCredentials = !1
    }, Object.assign(THREE.JSONLoader.prototype, {
        load: function(e, t, i, r) {
            var n = this,
                a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : THREE.Loader.prototype.extractUrlBase(e),
                o = new THREE.XHRLoader(this.manager);
            o.setWithCredentials(this.withCredentials), o.load(e, function(i) {
                i = JSON.parse(i);
                var r = i.metadata;
                if (void 0 !== r && (r = r.type, void 0 !== r)) {
                    if ("object" === r.toLowerCase()) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
                    if ("scene" === r.toLowerCase()) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.")
                }
                i = n.parse(i, a), t(i.geometry, i.materials)
            }, i, r)
        },
        setTexturePath: function(e) {
            this.texturePath = e
        },
        parse: function(e, t) {
            var i = new THREE.Geometry,
                r = void 0 !== e.scale ? 1 / e.scale : 1;
            return function(t) {
                    var r, n, a, o, s, c, h, l, u, p, d, f, E, m = e.faces;
                    c = e.vertices;
                    var g = e.normals,
                        T = e.colors,
                        v = 0;
                    if (void 0 !== e.uvs) {
                        for (r = 0; r < e.uvs.length; r++) e.uvs[r].length && v++;
                        for (r = 0; v > r; r++) i.faceVertexUvs[r] = []
                    }
                    for (o = 0, s = c.length; s > o;) r = new THREE.Vector3, r.x = c[o++] * t, r.y = c[o++] * t, r.z = c[o++] * t, i.vertices.push(r);
                    for (o = 0, s = m.length; s > o;)
                        if (t = m[o++], u = 1 & t, a = 2 & t, r = 8 & t, h = 16 & t, p = 32 & t, c = 64 & t, t &= 128, u) {
                            if (u = new THREE.Face3, u.a = m[o], u.b = m[o + 1], u.c = m[o + 3], d = new THREE.Face3, d.a = m[o + 1], d.b = m[o + 2], d.c = m[o + 3], o += 4, a && (a = m[o++], u.materialIndex = a, d.materialIndex = a), a = i.faces.length, r)
                                for (r = 0; v > r; r++)
                                    for (f = e.uvs[r], i.faceVertexUvs[r][a] = [], i.faceVertexUvs[r][a + 1] = [], n = 0; 4 > n; n++) l = m[o++], E = f[2 * l], l = f[2 * l + 1], E = new THREE.Vector2(E, l), 2 !== n && i.faceVertexUvs[r][a].push(E), 0 !== n && i.faceVertexUvs[r][a + 1].push(E);
                            if (h && (h = 3 * m[o++], u.normal.set(g[h++], g[h++], g[h]), d.normal.copy(u.normal)), p)
                                for (r = 0; 4 > r; r++) h = 3 * m[o++], p = new THREE.Vector3(g[h++], g[h++], g[h]), 2 !== r && u.vertexNormals.push(p), 0 !== r && d.vertexNormals.push(p);
                            if (c && (c = m[o++], c = T[c], u.color.setHex(c), d.color.setHex(c)), t)
                                for (r = 0; 4 > r; r++) c = m[o++], c = T[c], 2 !== r && u.vertexColors.push(new THREE.Color(c)), 0 !== r && d.vertexColors.push(new THREE.Color(c));
                            i.faces.push(u), i.faces.push(d)
                        } else {
                            if (u = new THREE.Face3, u.a = m[o++], u.b = m[o++], u.c = m[o++], a && (a = m[o++], u.materialIndex = a), a = i.faces.length, r)
                                for (r = 0; v > r; r++)
                                    for (f = e.uvs[r], i.faceVertexUvs[r][a] = [], n = 0; 3 > n; n++) l = m[o++], E = f[2 * l], l = f[2 * l + 1], E = new THREE.Vector2(E, l), i.faceVertexUvs[r][a].push(E);
                            if (h && (h = 3 * m[o++], u.normal.set(g[h++], g[h++], g[h])), p)
                                for (r = 0; 3 > r; r++) h = 3 * m[o++], p = new THREE.Vector3(g[h++], g[h++], g[h]), u.vertexNormals.push(p);
                            if (c && (c = m[o++], u.color.setHex(T[c])), t)
                                for (r = 0; 3 > r; r++) c = m[o++], u.vertexColors.push(new THREE.Color(T[c]));
                            i.faces.push(u)
                        }
                }(r),
                function() {
                    var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
                    if (e.skinWeights)
                        for (var r = 0, n = e.skinWeights.length; n > r; r += t) i.skinWeights.push(new THREE.Vector4(e.skinWeights[r], t > 1 ? e.skinWeights[r + 1] : 0, t > 2 ? e.skinWeights[r + 2] : 0, t > 3 ? e.skinWeights[r + 3] : 0));
                    if (e.skinIndices)
                        for (r = 0, n = e.skinIndices.length; n > r; r += t) i.skinIndices.push(new THREE.Vector4(e.skinIndices[r], t > 1 ? e.skinIndices[r + 1] : 0, t > 2 ? e.skinIndices[r + 2] : 0, t > 3 ? e.skinIndices[r + 3] : 0));
                    i.bones = e.bones, i.bones && 0 < i.bones.length && (i.skinWeights.length !== i.skinIndices.length || i.skinIndices.length !== i.vertices.length) && console.warn("When skinning, number of vertices (" + i.vertices.length + "), skinIndices (" + i.skinIndices.length + "), and skinWeights (" + i.skinWeights.length + ") should match.")
                }(),
                function(t) {
                    if (void 0 !== e.morphTargets)
                        for (var r = 0, n = e.morphTargets.length; n > r; r++) {
                            i.morphTargets[r] = {}, i.morphTargets[r].name = e.morphTargets[r].name, i.morphTargets[r].vertices = [];
                            for (var a = i.morphTargets[r].vertices, o = e.morphTargets[r].vertices, s = 0, c = o.length; c > s; s += 3) {
                                var h = new THREE.Vector3;
                                h.x = o[s] * t, h.y = o[s + 1] * t, h.z = o[s + 2] * t, a.push(h)
                            }
                        }
                    if (void 0 !== e.morphColors && 0 < e.morphColors.length)
                        for (console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'), t = i.faces, a = e.morphColors[0].colors, r = 0, n = t.length; n > r; r++) t[r].color.fromArray(a, 3 * r)
                }(r),
                function() {
                    var t = [],
                        r = [];
                    void 0 !== e.animation && r.push(e.animation), void 0 !== e.animations && (e.animations.length ? r = r.concat(e.animations) : r.push(e.animations));
                    for (var n = 0; n < r.length; n++) {
                        var a = THREE.AnimationClip.parseAnimation(r[n], i.bones);
                        a && t.push(a)
                    }
                    i.morphTargets && (r = THREE.AnimationClip.CreateClipsFromMorphTargetSequences(i.morphTargets, 10), t = t.concat(r)), 0 < t.length && (i.animations = t)
                }(), i.computeFaceNormals(), i.computeBoundingSphere(), void 0 === e.materials || 0 === e.materials.length ? {
                    geometry: i
                } : (r = THREE.Loader.prototype.initMaterials(e.materials, t, this.crossOrigin), {
                    geometry: i,
                    materials: r
                })
        }
    }), THREE.LoadingManager = function(e, t, i) {
        var r = this,
            n = !1,
            a = 0,
            o = 0;
        this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this.itemStart = function(e) {
            o++, !1 === n && void 0 !== r.onStart && r.onStart(e, a, o), n = !0
        }, this.itemEnd = function(e) {
            a++, void 0 !== r.onProgress && r.onProgress(e, a, o), a === o && (n = !1, void 0 !== r.onLoad) && r.onLoad()
        }, this.itemError = function(e) {
            void 0 !== r.onError && r.onError(e)
        }
    }, THREE.DefaultLoadingManager = new THREE.LoadingManager, THREE.BufferGeometryLoader = function(e) {
        this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
    }, Object.assign(THREE.BufferGeometryLoader.prototype, {
        load: function(e, t, i, r) {
            var n = this;
            new THREE.XHRLoader(n.manager).load(e, function(e) {
                t(n.parse(JSON.parse(e)))
            }, i, r)
        },
        parse: function(e) {
            var t = new THREE.BufferGeometry,
                i = e.data.index,
                r = {
                    Int8Array: Int8Array,
                    Uint8Array: Uint8Array,
                    Uint8ClampedArray: Uint8ClampedArray,
                    Int16Array: Int16Array,
                    Uint16Array: Uint16Array,
                    Int32Array: Int32Array,
                    Uint32Array: Uint32Array,
                    Float32Array: Float32Array,
                    Float64Array: Float64Array
                };
            void 0 !== i && (i = new r[i.type](i.array), t.setIndex(new THREE.BufferAttribute(i, 1)));
            var n = e.data.attributes,
                a;
            for (a in n) {
                var o = n[a],
                    i = new r[o.type](o.array);
                t.addAttribute(a, new THREE.BufferAttribute(i, o.itemSize, o.normalized))
            }
            if (r = e.data.groups || e.data.drawcalls || e.data.offsets, void 0 !== r)
                for (a = 0, i = r.length; a !== i; ++a) n = r[a], t.addGroup(n.start, n.count, n.materialIndex);
            return e = e.data.boundingSphere, void 0 !== e && (r = new THREE.Vector3, void 0 !== e.center && r.fromArray(e.center), t.boundingSphere = new THREE.Sphere(r, e.radius)), t
        }
    }), THREE.MaterialLoader = function(e) {
        this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this.textures = {}
    }, Object.assign(THREE.MaterialLoader.prototype, {
        load: function(e, t, i, r) {
            var n = this;
            new THREE.XHRLoader(n.manager).load(e, function(e) {
                t(n.parse(JSON.parse(e)))
            }, i, r)
        },
        setTextures: function(e) {
            this.textures = e
        },
        getTexture: function(e) {
            var t = this.textures;
            return void 0 === t[e] && console.warn("THREE.MaterialLoader: Undefined texture", e), t[e]
        },
        parse: function(e) {
            var t = new THREE[e.type];
            if (void 0 !== e.uuid && (t.uuid = e.uuid), void 0 !== e.name && (t.name = e.name), void 0 !== e.color && t.color.setHex(e.color), void 0 !== e.roughness && (t.roughness = e.roughness), void 0 !== e.metalness && (t.metalness = e.metalness), void 0 !== e.emissive && t.emissive.setHex(e.emissive), void 0 !== e.specular && t.specular.setHex(e.specular), void 0 !== e.shininess && (t.shininess = e.shininess), void 0 !== e.uniforms && (t.uniforms = e.uniforms), void 0 !== e.vertexShader && (t.vertexShader = e.vertexShader), void 0 !== e.fragmentShader && (t.fragmentShader = e.fragmentShader), void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors), void 0 !== e.shading && (t.shading = e.shading), void 0 !== e.blending && (t.blending = e.blending), void 0 !== e.side && (t.side = e.side), void 0 !== e.opacity && (t.opacity = e.opacity), void 0 !== e.transparent && (t.transparent = e.transparent), void 0 !== e.alphaTest && (t.alphaTest = e.alphaTest), void 0 !== e.depthTest && (t.depthTest = e.depthTest), void 0 !== e.depthWrite && (t.depthWrite = e.depthWrite), void 0 !== e.colorWrite && (t.colorWrite = e.colorWrite), void 0 !== e.wireframe && (t.wireframe = e.wireframe), void 0 !== e.wireframeLinewidth && (t.wireframeLinewidth = e.wireframeLinewidth), void 0 !== e.size && (t.size = e.size), void 0 !== e.sizeAttenuation && (t.sizeAttenuation = e.sizeAttenuation), void 0 !== e.map && (t.map = this.getTexture(e.map)), void 0 !== e.alphaMap && (t.alphaMap = this.getTexture(e.alphaMap), t.transparent = !0), void 0 !== e.bumpMap && (t.bumpMap = this.getTexture(e.bumpMap)), void 0 !== e.bumpScale && (t.bumpScale = e.bumpScale), void 0 !== e.normalMap && (t.normalMap = this.getTexture(e.normalMap)), void 0 !== e.normalScale) {
                var i = e.normalScale;
                !1 === Array.isArray(i) && (i = [i, i]), t.normalScale = (new THREE.Vector2).fromArray(i)
            }
            if (void 0 !== e.displacementMap && (t.displacementMap = this.getTexture(e.displacementMap)), void 0 !== e.displacementScale && (t.displacementScale = e.displacementScale), void 0 !== e.displacementBias && (t.displacementBias = e.displacementBias), void 0 !== e.roughnessMap && (t.roughnessMap = this.getTexture(e.roughnessMap)), void 0 !== e.metalnessMap && (t.metalnessMap = this.getTexture(e.metalnessMap)), void 0 !== e.emissiveMap && (t.emissiveMap = this.getTexture(e.emissiveMap)), void 0 !== e.emissiveIntensity && (t.emissiveIntensity = e.emissiveIntensity), void 0 !== e.specularMap && (t.specularMap = this.getTexture(e.specularMap)), void 0 !== e.envMap && (t.envMap = this.getTexture(e.envMap), t.combine = THREE.MultiplyOperation), void 0 !== e.reflectivity && (t.reflectivity = e.reflectivity), void 0 !== e.lightMap && (t.lightMap = this.getTexture(e.lightMap)), void 0 !== e.lightMapIntensity && (t.lightMapIntensity = e.lightMapIntensity), void 0 !== e.aoMap && (t.aoMap = this.getTexture(e.aoMap)), void 0 !== e.aoMapIntensity && (t.aoMapIntensity = e.aoMapIntensity), void 0 !== e.materials)
                for (var i = 0, r = e.materials.length; r > i; i++) t.materials.push(this.parse(e.materials[i]));
            return t
        }
    }), THREE.ObjectLoader = function(e) {
        this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this.texturePath = ""
    }, Object.assign(THREE.ObjectLoader.prototype, {
        load: function(e, t, i, r) {
            "" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
            var n = this;
            new THREE.XHRLoader(n.manager).load(e, function(e) {
                n.parse(JSON.parse(e), t)
            }, i, r)
        },
        setTexturePath: function(e) {
            this.texturePath = e
        },
        setCrossOrigin: function(e) {
            this.crossOrigin = e
        },
        parse: function(e, t) {
            var i = this.parseGeometries(e.geometries),
                r = this.parseImages(e.images, function() {
                    void 0 !== t && t(n)
                }),
                r = this.parseTextures(e.textures, r),
                r = this.parseMaterials(e.materials, r),
                n = this.parseObject(e.object, i, r);
            return e.animations && (n.animations = this.parseAnimations(e.animations)), void 0 !== e.images && 0 !== e.images.length || void 0 === t || t(n), n
        },
        parseGeometries: function(e) {
            var t = {};
            if (void 0 !== e)
                for (var i = new THREE.JSONLoader, r = new THREE.BufferGeometryLoader, n = 0, a = e.length; a > n; n++) {
                    var o, s = e[n];
                    switch (s.type) {
                        case "PlaneGeometry":
                        case "PlaneBufferGeometry":
                            o = new THREE[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
                            break;
                        case "BoxGeometry":
                        case "BoxBufferGeometry":
                        case "CubeGeometry":
                            o = new THREE[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                            break;
                        case "CircleGeometry":
                        case "CircleBufferGeometry":
                            o = new THREE[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
                            break;
                        case "CylinderGeometry":
                        case "CylinderBufferGeometry":
                            o = new THREE[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                            break;
                        case "ConeGeometry":
                        case "ConeBufferGeometry":
                            o = new THREE[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                            break;
                        case "SphereGeometry":
                        case "SphereBufferGeometry":
                            o = new THREE[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                            break;
                        case "DodecahedronGeometry":
                        case "IcosahedronGeometry":
                        case "OctahedronGeometry":
                        case "TetrahedronGeometry":
                            o = new THREE[s.type](s.radius, s.detail);
                            break;
                        case "RingGeometry":
                        case "RingBufferGeometry":
                            o = new THREE[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
                            break;
                        case "TorusGeometry":
                        case "TorusBufferGeometry":
                            o = new THREE[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                            break;
                        case "TorusKnotGeometry":
                        case "TorusKnotBufferGeometry":
                            o = new THREE[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
                            break;
                        case "LatheGeometry":
                        case "LatheBufferGeometry":
                            o = new THREE[s.type](s.points, s.segments, s.phiStart, s.phiLength);
                            break;
                        case "BufferGeometry":
                            o = r.parse(s);
                            break;
                        case "Geometry":
                            o = i.parse(s.data, this.texturePath).geometry;
                            break;
                        default:
                            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                            continue
                    }
                    o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), t[s.uuid] = o
                }
            return t
        },
        parseMaterials: function(e, t) {
            var i = {};
            if (void 0 !== e) {
                var r = new THREE.MaterialLoader;
                r.setTextures(t);
                for (var n = 0, a = e.length; a > n; n++) {
                    var o = r.parse(e[n]);
                    i[o.uuid] = o
                }
            }
            return i
        },
        parseAnimations: function(e) {
            for (var t = [], i = 0; i < e.length; i++) {
                var r = THREE.AnimationClip.parse(e[i]);
                t.push(r)
            }
            return t
        },
        parseImages: function(e, t) {
            function i(e) {
                return r.manager.itemStart(e), o.load(e, function() {
                    r.manager.itemEnd(e)
                })
            }
            var r = this,
                n = {};
            if (void 0 !== e && 0 < e.length) {
                var a = new THREE.LoadingManager(t),
                    o = new THREE.ImageLoader(a);
                o.setCrossOrigin(this.crossOrigin);
                for (var a = 0, s = e.length; s > a; a++) {
                    var c = e[a],
                        h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : r.texturePath + c.url;
                    n[c.uuid] = i(h)
                }
            }
            return n
        },
        parseTextures: function(e, t) {
            function i(e) {
                return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), THREE[e])
            }
            var r = {};
            if (void 0 !== e)
                for (var n = 0, a = e.length; a > n; n++) {
                    var o = e[n];
                    void 0 === o.image && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), void 0 === t[o.image] && console.warn("THREE.ObjectLoader: Undefined image", o.image);
                    var s = new THREE.Texture(t[o.image]);
                    s.needsUpdate = !0, s.uuid = o.uuid, void 0 !== o.name && (s.name = o.name), void 0 !== o.mapping && (s.mapping = i(o.mapping)), void 0 !== o.offset && s.offset.fromArray(o.offset), void 0 !== o.repeat && s.repeat.fromArray(o.repeat), void 0 !== o.wrap && (s.wrapS = i(o.wrap[0]), s.wrapT = i(o.wrap[1])), void 0 !== o.minFilter && (s.minFilter = i(o.minFilter)), void 0 !== o.magFilter && (s.magFilter = i(o.magFilter)), void 0 !== o.anisotropy && (s.anisotropy = o.anisotropy), void 0 !== o.flipY && (s.flipY = o.flipY), r[o.uuid] = s
                }
            return r
        },
        parseObject: function() {
            var e = new THREE.Matrix4;
            return function(t, i, r) {
                function n(e) {
                    return void 0 === i[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e), i[e]
                }

                function a(e) {
                    return void 0 !== e ? (void 0 === r[e] && console.warn("THREE.ObjectLoader: Undefined material", e), r[e]) : void 0
                }
                var o;
                switch (t.type) {
                    case "Scene":
                        o = new THREE.Scene;
                        break;
                    case "PerspectiveCamera":
                        o = new THREE.PerspectiveCamera(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (o.focus = t.focus), void 0 !== t.zoom && (o.zoom = t.zoom), void 0 !== t.filmGauge && (o.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (o.filmOffset = t.filmOffset), void 0 !== t.view && (o.view = Object.assign({}, t.view));
                        break;
                    case "OrthographicCamera":
                        o = new THREE.OrthographicCamera(t.left, t.right, t.top, t.bottom, t.near, t.far);
                        break;
                    case "AmbientLight":
                        o = new THREE.AmbientLight(t.color, t.intensity);
                        break;
                    case "DirectionalLight":
                        o = new THREE.DirectionalLight(t.color, t.intensity);
                        break;
                    case "PointLight":
                        o = new THREE.PointLight(t.color, t.intensity, t.distance, t.decay);
                        break;
                    case "SpotLight":
                        o = new THREE.SpotLight(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
                        break;
                    case "HemisphereLight":
                        o = new THREE.HemisphereLight(t.color, t.groundColor, t.intensity);
                        break;
                    case "Mesh":
                        o = n(t.geometry);
                        var s = a(t.material);
                        o = o.bones && 0 < o.bones.length ? new THREE.SkinnedMesh(o, s) : new THREE.Mesh(o, s);
                        break;
                    case "LOD":
                        o = new THREE.LOD;
                        break;
                    case "Line":
                        o = new THREE.Line(n(t.geometry), a(t.material), t.mode);
                        break;
                    case "PointCloud":
                    case "Points":
                        o = new THREE.Points(n(t.geometry), a(t.material));
                        break;
                    case "Sprite":
                        o = new THREE.Sprite(a(t.material));
                        break;
                    case "Group":
                        o = new THREE.Group;
                        break;
                    default:
                        o = new THREE.Object3D
                }
                if (o.uuid = t.uuid, void 0 !== t.name && (o.name = t.name), void 0 !== t.matrix ? (e.fromArray(t.matrix), e.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== t.position && o.position.fromArray(t.position), void 0 !== t.rotation && o.rotation.fromArray(t.rotation), void 0 !== t.scale && o.scale.fromArray(t.scale)), void 0 !== t.castShadow && (o.castShadow = t.castShadow), void 0 !== t.receiveShadow && (o.receiveShadow = t.receiveShadow), void 0 !== t.visible && (o.visible = t.visible), void 0 !== t.userData && (o.userData = t.userData), void 0 !== t.children)
                    for (var c in t.children) o.add(this.parseObject(t.children[c], i, r));
                if ("LOD" === t.type)
                    for (t = t.levels, s = 0; s < t.length; s++) {
                        var h = t[s];
                        c = o.getObjectByProperty("uuid", h.object), void 0 !== c && o.addLevel(c, h.distance)
                    }
                return o
            }
        }()
    }), THREE.TextureLoader = function(e) {
        this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
    }, Object.assign(THREE.TextureLoader.prototype, {
        load: function(e, t, i, r) {
            var n = new THREE.Texture,
                a = new THREE.ImageLoader(this.manager);
            return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(i) {
                var r = 0 < e.search(/\.(jpg|jpeg)$/) || 0 === e.search(/^data\:image\/jpeg/);
                n.format = r ? THREE.RGBFormat : THREE.RGBAFormat, n.image = i, n.needsUpdate = !0, void 0 !== t && t(n)
            }, i, r), n
        },
        setCrossOrigin: function(e) {
            return this.crossOrigin = e, this
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), THREE.CubeTextureLoader = function(e) {
        this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
    }, Object.assign(THREE.CubeTextureLoader.prototype, {
        load: function(e, t, i, r) {
            function n(i) {
                o.load(e[i], function(e) {
                    a.images[i] = e, s++, 6 === s && (a.needsUpdate = !0, t && t(a))
                }, void 0, r)
            }
            var a = new THREE.CubeTexture,
                o = new THREE.ImageLoader(this.manager);
            o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
            var s = 0;
            for (i = 0; i < e.length; ++i) n(i);
            return a
        },
        setCrossOrigin: function(e) {
            return this.crossOrigin = e, this
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), THREE.DataTextureLoader = THREE.BinaryTextureLoader = function(e) {
        this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this._parser = null
    }, Object.assign(THREE.BinaryTextureLoader.prototype, {
        load: function(e, t, i, r) {
            var n = this,
                a = new THREE.DataTexture,
                o = new THREE.XHRLoader(this.manager);
            return o.setResponseType("arraybuffer"), o.load(e, function(e) {
                (e = n._parser(e)) && (void 0 !== e.image ? a.image = e.image : void 0 !== e.data && (a.image.width = e.width, a.image.height = e.height, a.image.data = e.data), a.wrapS = void 0 !== e.wrapS ? e.wrapS : THREE.ClampToEdgeWrapping, a.wrapT = void 0 !== e.wrapT ? e.wrapT : THREE.ClampToEdgeWrapping, a.magFilter = void 0 !== e.magFilter ? e.magFilter : THREE.LinearFilter, a.minFilter = void 0 !== e.minFilter ? e.minFilter : THREE.LinearMipMapLinearFilter, a.anisotropy = void 0 !== e.anisotropy ? e.anisotropy : 1, void 0 !== e.format && (a.format = e.format), void 0 !== e.type && (a.type = e.type), void 0 !== e.mipmaps && (a.mipmaps = e.mipmaps), 1 === e.mipmapCount && (a.minFilter = THREE.LinearFilter), a.needsUpdate = !0, t && t(a, e))
            }, i, r), a
        }
    }), THREE.CompressedTextureLoader = function(e) {
        this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this._parser = null
    }, Object.assign(THREE.CompressedTextureLoader.prototype, {
        load: function(e, t, i, r) {
            function n(n) {
                c.load(e[n], function(e) {
                    e = a._parser(e, !0), o[n] = {
                        width: e.width,
                        height: e.height,
                        format: e.format,
                        mipmaps: e.mipmaps
                    }, h += 1, 6 === h && (1 === e.mipmapCount && (s.minFilter = THREE.LinearFilter), s.format = e.format, s.needsUpdate = !0, t && t(s))
                }, i, r)
            }
            var a = this,
                o = [],
                s = new THREE.CompressedTexture;
            s.image = o;
            var c = new THREE.XHRLoader(this.manager);
            if (c.setPath(this.path), c.setResponseType("arraybuffer"), Array.isArray(e))
                for (var h = 0, l = 0, u = e.length; u > l; ++l) n(l);
            else c.load(e, function(e) {
                if (e = a._parser(e, !0), e.isCubemap)
                    for (var i = e.mipmaps.length / e.mipmapCount, r = 0; i > r; r++) {
                        o[r] = {
                            mipmaps: []
                        };
                        for (var n = 0; n < e.mipmapCount; n++) o[r].mipmaps.push(e.mipmaps[r * e.mipmapCount + n]), o[r].format = e.format, o[r].width = e.width, o[r].height = e.height
                    } else s.image.width = e.width, s.image.height = e.height, s.mipmaps = e.mipmaps;
                1 === e.mipmapCount && (s.minFilter = THREE.LinearFilter), s.format = e.format, s.needsUpdate = !0, t && t(s)
            }, i, r);
            return s
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), THREE.Material = function() {
        Object.defineProperty(this, "id", {
            value: THREE.MaterialIdCount++
        }), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Material", this.lights = this.fog = !0, this.blending = THREE.NormalBlending, this.side = THREE.FrontSide, this.shading = THREE.SmoothShading, this.vertexColors = THREE.NoColors, this.opacity = 1, this.transparent = !1, this.blendSrc = THREE.SrcAlphaFactor, this.blendDst = THREE.OneMinusSrcAlphaFactor, this.blendEquation = THREE.AddEquation, this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null, this.depthFunc = THREE.LessEqualDepth, this.depthWrite = this.depthTest = !0, this.clippingPlanes = null, this.clipShadows = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this._needsUpdate = this.visible = !0
    }, THREE.Material.prototype = {
        constructor: THREE.Material,
        get needsUpdate() {
            return this._needsUpdate
        },
        set needsUpdate(e) {
            !0 === e && this.update(), this._needsUpdate = e
        },
        setValues: function(e) {
            if (void 0 !== e)
                for (var t in e) {
                    var i = e[t];
                    if (void 0 === i) console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                    else {
                        var r = this[t];
                        void 0 === r ? console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.") : r instanceof THREE.Color ? r.set(i) : r instanceof THREE.Vector3 && i instanceof THREE.Vector3 ? r.copy(i) : this[t] = "overdraw" === t ? Number(i) : i
                    }
                }
        },
        toJSON: function(e) {
            function t(e) {
                var t = [],
                    i;
                for (i in e) {
                    var r = e[i];
                    delete r.metadata, t.push(r)
                }
                return t
            }
            var i = void 0 === e;
            i && (e = {
                textures: {},
                images: {}
            });
            var r = {
                metadata: {
                    version: 4.4,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            return r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), this.color instanceof THREE.Color && (r.color = this.color.getHex()), void 0 !== this.roughness && (r.roughness = this.roughness), void 0 !== this.metalness && (r.metalness = this.metalness), this.emissive instanceof THREE.Color && (r.emissive = this.emissive.getHex()), this.specular instanceof THREE.Color && (r.specular = this.specular.getHex()), void 0 !== this.shininess && (r.shininess = this.shininess), this.map instanceof THREE.Texture && (r.map = this.map.toJSON(e).uuid), this.alphaMap instanceof THREE.Texture && (r.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap instanceof THREE.Texture && (r.lightMap = this.lightMap.toJSON(e).uuid), this.bumpMap instanceof THREE.Texture && (r.bumpMap = this.bumpMap.toJSON(e).uuid, r.bumpScale = this.bumpScale), this.normalMap instanceof THREE.Texture && (r.normalMap = this.normalMap.toJSON(e).uuid, r.normalScale = this.normalScale.toArray()), this.displacementMap instanceof THREE.Texture && (r.displacementMap = this.displacementMap.toJSON(e).uuid, r.displacementScale = this.displacementScale, r.displacementBias = this.displacementBias), this.roughnessMap instanceof THREE.Texture && (r.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap instanceof THREE.Texture && (r.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap instanceof THREE.Texture && (r.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap instanceof THREE.Texture && (r.specularMap = this.specularMap.toJSON(e).uuid), this.envMap instanceof THREE.Texture && (r.envMap = this.envMap.toJSON(e).uuid, r.reflectivity = this.reflectivity), void 0 !== this.size && (r.size = this.size), void 0 !== this.sizeAttenuation && (r.sizeAttenuation = this.sizeAttenuation), this.blending !== THREE.NormalBlending && (r.blending = this.blending), this.shading !== THREE.SmoothShading && (r.shading = this.shading), this.side !== THREE.FrontSide && (r.side = this.side), this.vertexColors !== THREE.NoColors && (r.vertexColors = this.vertexColors), 1 > this.opacity && (r.opacity = this.opacity), !0 === this.transparent && (r.transparent = this.transparent), 0 < this.alphaTest && (r.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (r.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (r.wireframe = this.wireframe), 1 < this.wireframeLinewidth && (r.wireframeLinewidth = this.wireframeLinewidth), i && (i = t(e.textures), e = t(e.images), 0 < i.length && (r.textures = i), 0 < e.length && (r.images = e)), r
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            this.name = e.name, this.fog = e.fog, this.lights = e.lights, this.blending = e.blending, this.side = e.side, this.shading = e.shading, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.overdraw = e.overdraw, this.visible = e.visible, this.clipShadows = e.clipShadows, e = e.clippingPlanes;
            var t = null;
            if (null !== e)
                for (var i = e.length, t = Array(i), r = 0; r !== i; ++r) t[r] = e[r].clone();
            return this.clippingPlanes = t, this
        },
        update: function() {
            this.dispatchEvent({
                type: "update"
            })
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, Object.assign(THREE.Material.prototype, THREE.EventDispatcher.prototype), THREE.MaterialIdCount = 0, THREE.LineBasicMaterial = function(e) {
        THREE.Material.call(this), this.type = "LineBasicMaterial", this.color = new THREE.Color(16777215), this.linewidth = 1, this.linejoin = this.linecap = "round", this.lights = !1, this.setValues(e)
    }, THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype), THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial, THREE.LineBasicMaterial.prototype.copy = function(e) {
        return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
    }, THREE.LineDashedMaterial = function(e) {
        THREE.Material.call(this), this.type = "LineDashedMaterial", this.color = new THREE.Color(16777215), this.scale = this.linewidth = 1, this.dashSize = 3, this.gapSize = 1, this.lights = !1, this.setValues(e)
    }, THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype), THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial, THREE.LineDashedMaterial.prototype.copy = function(e) {
        return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
    }, THREE.MeshBasicMaterial = function(e) {
        THREE.Material.call(this), this.type = "MeshBasicMaterial", this.color = new THREE.Color(16777215), this.aoMap = this.map = null, this.aoMapIntensity = 1, this.envMap = this.alphaMap = this.specularMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.lights = this.morphTargets = this.skinning = !1, this.setValues(e)
    }, THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial, THREE.MeshBasicMaterial.prototype.copy = function(e) {
        return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
    }, THREE.MeshDepthMaterial = function(e) {
        THREE.Material.call(this), this.type = "MeshDepthMaterial", this.depthPacking = THREE.BasicDepthPacking, this.morphTargets = this.skinning = !1, this.displacementMap = this.alphaMap = this.map = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.lights = this.fog = !1, this.setValues(e)
    }, THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial, THREE.MeshDepthMaterial.prototype.copy = function(e) {
        return THREE.Material.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
    }, THREE.MeshLambertMaterial = function(e) {
        THREE.Material.call(this), this.type = "MeshLambertMaterial", this.color = new THREE.Color(16777215), this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new THREE.Color(0), this.emissiveIntensity = 1, this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(e)
    }, THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial, THREE.MeshLambertMaterial.prototype.copy = function(e) {
        return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, THREE.MeshNormalMaterial = function(e) {
        THREE.Material.call(this, e), this.type = "MeshNormalMaterial", this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = this.lights = this.fog = !1, this.setValues(e)
    }, THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial, THREE.MeshNormalMaterial.prototype.copy = function(e) {
        return THREE.Material.prototype.copy.call(this, e), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
    }, THREE.MeshPhongMaterial = function(e) {
        THREE.Material.call(this), this.type = "MeshPhongMaterial", this.color = new THREE.Color(16777215), this.specular = new THREE.Color(1118481), this.shininess = 30, this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new THREE.Color(0), this.emissiveIntensity = 1, this.bumpMap = this.emissiveMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new THREE.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.envMap = this.alphaMap = this.specularMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(e)
    }, THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial, THREE.MeshPhongMaterial.prototype.copy = function(e) {
        return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, THREE.MeshStandardMaterial = function(e) {
        THREE.Material.call(this), this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new THREE.Color(16777215), this.metalness = this.roughness = .5, this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new THREE.Color(0), this.emissiveIntensity = 1, this.bumpMap = this.emissiveMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new THREE.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(e)
    }, THREE.MeshStandardMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshStandardMaterial.prototype.constructor = THREE.MeshStandardMaterial, THREE.MeshStandardMaterial.prototype.copy = function(e) {
        return THREE.Material.prototype.copy.call(this, e), this.defines = {
            STANDARD: ""
        }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, THREE.MeshPhysicalMaterial = function(e) {
        THREE.MeshStandardMaterial.call(this), this.defines = {
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoatRoughness = this.clearCoat = 0, this.setValues(e)
    }, THREE.MeshPhysicalMaterial.prototype = Object.create(THREE.MeshStandardMaterial.prototype), THREE.MeshPhysicalMaterial.prototype.constructor = THREE.MeshPhysicalMaterial, THREE.MeshPhysicalMaterial.prototype.copy = function(e) {
        return THREE.MeshStandardMaterial.prototype.copy.call(this, e), this.defines = {
            PHYSICAL: ""
        }, this.reflectivity = e.reflectivity, this.clearCoat = e.clearCoat, this.clearCoatRoughness = e.clearCoatRoughness, this
    }, THREE.MultiMaterial = function(e) {
        this.uuid = THREE.Math.generateUUID(), this.type = "MultiMaterial", this.materials = e instanceof Array ? e : [], this.visible = !0
    }, THREE.MultiMaterial.prototype = {
        constructor: THREE.MultiMaterial,
        toJSON: function(e) {
            for (var t = {
                    metadata: {
                        version: 4.2,
                        type: "material",
                        generator: "MaterialExporter"
                    },
                    uuid: this.uuid,
                    type: this.type,
                    materials: []
                }, i = this.materials, r = 0, n = i.length; n > r; r++) {
                var a = i[r].toJSON(e);
                delete a.metadata, t.materials.push(a)
            }
            return t.visible = this.visible, t
        },
        clone: function() {
            for (var e = new this.constructor, t = 0; t < this.materials.length; t++) e.materials.push(this.materials[t].clone());
            return e.visible = this.visible, e
        }
    }, THREE.PointsMaterial = function(e) {
        THREE.Material.call(this), this.type = "PointsMaterial", this.color = new THREE.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.lights = !1, this.setValues(e)
    }, THREE.PointsMaterial.prototype = Object.create(THREE.Material.prototype), THREE.PointsMaterial.prototype.constructor = THREE.PointsMaterial, THREE.PointsMaterial.prototype.copy = function(e) {
        return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this
    }, THREE.ShaderMaterial = function(e) {
        THREE.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
    }, THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype), THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial, THREE.ShaderMaterial.prototype.copy = function(e) {
        return THREE.Material.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = THREE.UniformsUtils.clone(e.uniforms), this.defines = e.defines, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = e.extensions, this
    }, THREE.ShaderMaterial.prototype.toJSON = function(e) {
        return e = THREE.Material.prototype.toJSON.call(this, e), e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
    }, THREE.RawShaderMaterial = function(e) {
        THREE.ShaderMaterial.call(this, e), this.type = "RawShaderMaterial"
    }, THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype), THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial, THREE.SpriteMaterial = function(e) {
        THREE.Material.call(this), this.type = "SpriteMaterial", this.color = new THREE.Color(16777215), this.map = null, this.rotation = 0, this.lights = this.fog = !1, this.setValues(e)
    }, THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype), THREE.SpriteMaterial.prototype.constructor = THREE.SpriteMaterial, THREE.SpriteMaterial.prototype.copy = function(e) {
        return THREE.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.rotation = e.rotation, this
    }, THREE.ShadowMaterial = function() {
        THREE.ShaderMaterial.call(this, {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.lights, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: THREE.ShaderChunk.shadow_vert,
            fragmentShader: THREE.ShaderChunk.shadow_frag
        }), this.transparent = this.lights = !0, Object.defineProperties(this, {
            opacity: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.opacity.value
                },
                set: function(e) {
                    this.uniforms.opacity.value = e
                }
            }
        })
    }, THREE.ShadowMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype), THREE.ShadowMaterial.prototype.constructor = THREE.ShadowMaterial, THREE.Texture = function(e, t, i, r, n, a, o, s, c, h) {
        Object.defineProperty(this, "id", {
            value: THREE.TextureIdCount++
        }), this.uuid = THREE.Math.generateUUID(), this.sourceFile = this.name = "", this.image = void 0 !== e ? e : THREE.Texture.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== t ? t : THREE.Texture.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== r ? r : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== n ? n : THREE.LinearFilter, this.minFilter = void 0 !== a ? a : THREE.LinearMipMapLinearFilter, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== o ? o : THREE.RGBAFormat, this.type = void 0 !== s ? s : THREE.UnsignedByteType, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== h ? h : THREE.LinearEncoding, this.version = 0, this.onUpdate = null
    }, THREE.Texture.DEFAULT_IMAGE = void 0, THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping, THREE.Texture.prototype = {
        constructor: THREE.Texture,
        set needsUpdate(e) {
            !0 === e && this.version++
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this
        },
        toJSON: function(e) {
            if (void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
            var t = {
                metadata: {
                    version: 4.4,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var i = this.image;
                if (void 0 === i.uuid && (i.uuid = THREE.Math.generateUUID()), void 0 === e.images[i.uuid]) {
                    var r = e.images,
                        n = i.uuid,
                        a = i.uuid,
                        o;
                    void 0 !== i.toDataURL ? o = i : (o = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), o.width = i.width, o.height = i.height, o.getContext("2d").drawImage(i, 0, 0, i.width, i.height)), o = 2048 < o.width || 2048 < o.height ? o.toDataURL("image/jpeg", .6) : o.toDataURL("image/png"), r[n] = {
                        uuid: a,
                        url: o
                    }
                }
                t.image = i.uuid
            }
            return e.textures[this.uuid] = t
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(e) {
            if (this.mapping === THREE.UVMapping) {
                if (e.multiply(this.repeat), e.add(this.offset), 0 > e.x || 1 < e.x) switch (this.wrapS) {
                    case THREE.RepeatWrapping:
                        e.x -= Math.floor(e.x);
                        break;
                    case THREE.ClampToEdgeWrapping:
                        e.x = 0 > e.x ? 0 : 1;
                        break;
                    case THREE.MirroredRepeatWrapping:
                        1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x)
                }
                if (0 > e.y || 1 < e.y) switch (this.wrapT) {
                    case THREE.RepeatWrapping:
                        e.y -= Math.floor(e.y);
                        break;
                    case THREE.ClampToEdgeWrapping:
                        e.y = 0 > e.y ? 0 : 1;
                        break;
                    case THREE.MirroredRepeatWrapping:
                        1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y)
                }
                this.flipY && (e.y = 1 - e.y)
            }
        }
    }, Object.assign(THREE.Texture.prototype, THREE.EventDispatcher.prototype), THREE.TextureIdCount = 0, THREE.DepthTexture = function(e, t, i, r, n, a, o, s, c) {
        THREE.Texture.call(this, null, r, n, a, o, s, THREE.DepthFormat, i, c), this.image = {
            width: e,
            height: t
        }, this.type = void 0 !== i ? i : THREE.UnsignedShortType, this.magFilter = void 0 !== o ? o : THREE.NearestFilter, this.minFilter = void 0 !== s ? s : THREE.NearestFilter, this.generateMipmaps = this.flipY = !1
    }, THREE.DepthTexture.prototype = Object.create(THREE.Texture.prototype), THREE.DepthTexture.prototype.constructor = THREE.DepthTexture, THREE.CanvasTexture = function(e, t, i, r, n, a, o, s, c) {
        THREE.Texture.call(this, e, t, i, r, n, a, o, s, c), this.needsUpdate = !0
    }, THREE.CanvasTexture.prototype = Object.create(THREE.Texture.prototype), THREE.CanvasTexture.prototype.constructor = THREE.CanvasTexture, THREE.CubeTexture = function(e, t, i, r, n, a, o, s, c, h) {
        e = void 0 !== e ? e : [], t = void 0 !== t ? t : THREE.CubeReflectionMapping, THREE.Texture.call(this, e, t, i, r, n, a, o, s, c, h), this.flipY = !1
    }, THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype), THREE.CubeTexture.prototype.constructor = THREE.CubeTexture, Object.defineProperty(THREE.CubeTexture.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(e) {
            this.image = e
        }
    }), THREE.CompressedTexture = function(e, t, i, r, n, a, o, s, c, h, l, u) {
        THREE.Texture.call(this, null, a, o, s, c, h, r, n, l, u), this.image = {
            width: t,
            height: i
        }, this.mipmaps = e, this.generateMipmaps = this.flipY = !1
    }, THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype), THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture, THREE.DataTexture = function(e, t, i, r, n, a, o, s, c, h, l, u) {
        THREE.Texture.call(this, null, a, o, s, c, h, r, n, l, u), this.image = {
            data: e,
            width: t,
            height: i
        }, this.magFilter = void 0 !== c ? c : THREE.NearestFilter, this.minFilter = void 0 !== h ? h : THREE.NearestFilter, this.generateMipmaps = this.flipY = !1
    }, THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype), THREE.DataTexture.prototype.constructor = THREE.DataTexture, THREE.VideoTexture = function(e, t, i, r, n, a, o, s, c) {
        function h() {
            requestAnimationFrame(h), e.readyState >= e.HAVE_CURRENT_DATA && (l.needsUpdate = !0)
        }
        THREE.Texture.call(this, e, t, i, r, n, a, o, s, c), this.generateMipmaps = !1;
        var l = this;
        h()
    }, THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype), THREE.VideoTexture.prototype.constructor = THREE.VideoTexture, THREE.Group = function() {
        THREE.Object3D.call(this), this.type = "Group"
    }, THREE.Group.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
        constructor: THREE.Group
    }), THREE.Points = function(e, t) {
        THREE.Object3D.call(this), this.type = "Points", this.geometry = void 0 !== e ? e : new THREE.BufferGeometry, this.material = void 0 !== t ? t : new THREE.PointsMaterial({
            color: 16777215 * Math.random()
        })
    }, THREE.Points.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
        constructor: THREE.Points,
        raycast: function() {
            var e = new THREE.Matrix4,
                t = new THREE.Ray,
                i = new THREE.Sphere;
            return function(r, n) {
                function a(e, i) {
                    var a = t.distanceSqToPoint(e);
                    if (l > a) {
                        var s = t.closestPointToPoint(e);
                        s.applyMatrix4(c);
                        var h = r.ray.origin.distanceTo(s);
                        h < r.near || h > r.far || n.push({
                            distance: h,
                            distanceToRay: Math.sqrt(a),
                            point: s.clone(),
                            index: i,
                            face: null,
                            object: o
                        })
                    }
                }
                var o = this,
                    s = this.geometry,
                    c = this.matrixWorld,
                    h = r.params.Points.threshold;
                if (null === s.boundingSphere && s.computeBoundingSphere(), i.copy(s.boundingSphere), i.applyMatrix4(c), !1 !== r.ray.intersectsSphere(i)) {
                    e.getInverse(c), t.copy(r.ray).applyMatrix4(e);
                    var h = h / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        l = h * h,
                        h = new THREE.Vector3;
                    if (s instanceof THREE.BufferGeometry) {
                        var u = s.index,
                            s = s.attributes.position.array;
                        if (null !== u)
                            for (var p = u.array, u = 0, d = p.length; d > u; u++) {
                                var f = p[u];
                                h.fromArray(s, 3 * f), a(h, f)
                            } else
                                for (u = 0, p = s.length / 3; p > u; u++) h.fromArray(s, 3 * u), a(h, u)
                    } else
                        for (h = s.vertices, u = 0, p = h.length; p > u; u++) a(h[u], u)
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), THREE.Line = function(e, t, i) {
        return 1 === i ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new THREE.LineSegments(e, t)) : (THREE.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new THREE.BufferGeometry, void(this.material = void 0 !== t ? t : new THREE.LineBasicMaterial({
            color: 16777215 * Math.random()
        })))
    }, THREE.Line.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
        constructor: THREE.Line,
        raycast: function() {
            var e = new THREE.Matrix4,
                t = new THREE.Ray,
                i = new THREE.Sphere;
            return function(r, n) {
                var a = r.linePrecision,
                    a = a * a,
                    o = this.geometry,
                    s = this.matrixWorld;
                if (null === o.boundingSphere && o.computeBoundingSphere(), i.copy(o.boundingSphere), i.applyMatrix4(s), !1 !== r.ray.intersectsSphere(i)) {
                    e.getInverse(s), t.copy(r.ray).applyMatrix4(e);
                    var c = new THREE.Vector3,
                        h = new THREE.Vector3,
                        s = new THREE.Vector3,
                        l = new THREE.Vector3,
                        u = this instanceof THREE.LineSegments ? 2 : 1;
                    if (o instanceof THREE.BufferGeometry) {
                        var p = o.index,
                            d = o.attributes.position.array;
                        if (null !== p)
                            for (var p = p.array, o = 0, f = p.length - 1; f > o; o += u) {
                                var E = p[o + 1];
                                c.fromArray(d, 3 * p[o]), h.fromArray(d, 3 * E), E = t.distanceSqToSegment(c, h, l, s), E > a || (l.applyMatrix4(this.matrixWorld), E = r.ray.origin.distanceTo(l), E < r.near || E > r.far || n.push({
                                    distance: E,
                                    point: s.clone().applyMatrix4(this.matrixWorld),
                                    index: o,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                }))
                            } else
                                for (o = 0, f = d.length / 3 - 1; f > o; o += u) c.fromArray(d, 3 * o), h.fromArray(d, 3 * o + 3), E = t.distanceSqToSegment(c, h, l, s), E > a || (l.applyMatrix4(this.matrixWorld), E = r.ray.origin.distanceTo(l), E < r.near || E > r.far || n.push({
                                    distance: E,
                                    point: s.clone().applyMatrix4(this.matrixWorld),
                                    index: o,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                }))
                    } else if (o instanceof THREE.Geometry)
                        for (c = o.vertices, h = c.length, o = 0; h - 1 > o; o += u) E = t.distanceSqToSegment(c[o], c[o + 1], l, s), E > a || (l.applyMatrix4(this.matrixWorld), E = r.ray.origin.distanceTo(l), E < r.near || E > r.far || n.push({
                            distance: E,
                            point: s.clone().applyMatrix4(this.matrixWorld),
                            index: o,
                            face: null,
                            faceIndex: null,
                            object: this
                        }))
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), THREE.LineSegments = function(e, t) {
        THREE.Line.call(this, e, t), this.type = "LineSegments"
    }, THREE.LineSegments.prototype = Object.assign(Object.create(THREE.Line.prototype), {
        constructor: THREE.LineSegments
    }), THREE.Mesh = function(e, t) {
        THREE.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new THREE.BufferGeometry, this.material = void 0 !== t ? t : new THREE.MeshBasicMaterial({
            color: 16777215 * Math.random()
        }), this.drawMode = THREE.TrianglesDrawMode, this.updateMorphTargets()
    }, THREE.Mesh.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
        constructor: THREE.Mesh,
        setDrawMode: function(e) {
            this.drawMode = e
        },
        copy: function(e) {
            return THREE.Object3D.prototype.copy.call(this, e), this.drawMode = e.drawMode, this
        },
        updateMorphTargets: function() {
            if (void 0 !== this.geometry.morphTargets && 0 < this.geometry.morphTargets.length) {
                this.morphTargetBase = -1, this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (var e = 0, t = this.geometry.morphTargets.length; t > e; e++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
            }
        },
        getMorphTargetIndexByName: function(e) {
            return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : (console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + e + " does not exist. Returning 0."), 0)
        },
        raycast: function() {
            function e(e, t, i, r, n, a, o) {
                return THREE.Triangle.barycoordFromPoint(e, t, i, r, E), n.multiplyScalar(E.x), a.multiplyScalar(E.y), o.multiplyScalar(E.z), n.add(a).add(o), n.clone()
            }

            function t(e, t, i, r, n, a, o) {
                var s = e.material;
                return null === (s.side === THREE.BackSide ? i.intersectTriangle(a, n, r, !0, o) : i.intersectTriangle(r, n, a, s.side !== THREE.DoubleSide, o)) ? null : (g.copy(o), g.applyMatrix4(e.matrixWorld), i = t.ray.origin.distanceTo(g), i < t.near || i > t.far ? null : {
                    distance: i,
                    point: g.clone(),
                    object: e
                })
            }

            function i(i, r, n, a, h, l, u, E) {
                return o.fromArray(a, 3 * l), s.fromArray(a, 3 * u), c.fromArray(a, 3 * E), (i = t(i, r, n, o, s, c, m)) && (h && (p.fromArray(h, 2 * l), d.fromArray(h, 2 * u), f.fromArray(h, 2 * E), i.uv = e(m, o, s, c, p, d, f)), i.face = new THREE.Face3(l, u, E, THREE.Triangle.normal(o, s, c)), i.faceIndex = l), i
            }
            var r = new THREE.Matrix4,
                n = new THREE.Ray,
                a = new THREE.Sphere,
                o = new THREE.Vector3,
                s = new THREE.Vector3,
                c = new THREE.Vector3,
                h = new THREE.Vector3,
                l = new THREE.Vector3,
                u = new THREE.Vector3,
                p = new THREE.Vector2,
                d = new THREE.Vector2,
                f = new THREE.Vector2,
                E = new THREE.Vector3,
                m = new THREE.Vector3,
                g = new THREE.Vector3;
            return function(E, g) {
                var T = this.geometry,
                    v = this.material,
                    y = this.matrixWorld;
                if (void 0 !== v && (null === T.boundingSphere && T.computeBoundingSphere(), a.copy(T.boundingSphere), a.applyMatrix4(y), !1 !== E.ray.intersectsSphere(a) && (r.getInverse(y), n.copy(E.ray).applyMatrix4(r), null === T.boundingBox || !1 !== n.intersectsBox(T.boundingBox)))) {
                    var R, x;
                    if (T instanceof THREE.BufferGeometry) {
                        var H, b, v = T.index,
                            y = T.attributes,
                            T = y.position.array;
                        if (void 0 !== y.uv && (R = y.uv.array), null !== v)
                            for (var y = v.array, _ = 0, M = y.length; M > _; _ += 3) v = y[_], H = y[_ + 1], b = y[_ + 2], (x = i(this, E, n, T, R, v, H, b)) && (x.faceIndex = Math.floor(_ / 3), g.push(x));
                        else
                            for (_ = 0, M = T.length; M > _; _ += 9) v = _ / 3, H = v + 1, b = v + 2, (x = i(this, E, n, T, R, v, H, b)) && (x.index = v, g.push(x))
                    } else if (T instanceof THREE.Geometry) {
                        var w, S, y = v instanceof THREE.MultiMaterial,
                            _ = !0 === y ? v.materials : null,
                            M = T.vertices;
                        H = T.faces, b = T.faceVertexUvs[0], 0 < b.length && (R = b);
                        for (var A = 0, L = H.length; L > A; A++) {
                            var C = H[A];
                            if (x = !0 === y ? _[C.materialIndex] : v, void 0 !== x) {
                                if (b = M[C.a], w = M[C.b], S = M[C.c], !0 === x.morphTargets) {
                                    x = T.morphTargets;
                                    var P = this.morphTargetInfluences;
                                    o.set(0, 0, 0), s.set(0, 0, 0), c.set(0, 0, 0);
                                    for (var D = 0, B = x.length; B > D; D++) {
                                        var U = P[D];
                                        if (0 !== U) {
                                            var I = x[D].vertices;
                                            o.addScaledVector(h.subVectors(I[C.a], b), U), s.addScaledVector(l.subVectors(I[C.b], w), U), c.addScaledVector(u.subVectors(I[C.c], S), U)
                                        }
                                    }
                                    o.add(b), s.add(w), c.add(S), b = o, w = s, S = c
                                }(x = t(this, E, n, b, w, S, m)) && (R && (P = R[A], p.copy(P[0]), d.copy(P[1]), f.copy(P[2]), x.uv = e(m, b, w, S, p, d, f)), x.face = C, x.faceIndex = A, g.push(x))
                            }
                        }
                    }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), THREE.Bone = function(e) {
        THREE.Object3D.call(this), this.type = "Bone", this.skin = e
    }, THREE.Bone.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
        constructor: THREE.Bone,
        copy: function(e) {
            return THREE.Object3D.prototype.copy.call(this, e), this.skin = e.skin, this
        }
    }), THREE.Skeleton = function(e, t, i) {
        if (this.useVertexTexture = void 0 !== i ? i : !0, this.identityMatrix = new THREE.Matrix4, e = e || [], this.bones = e.slice(0), this.useVertexTexture ? (e = Math.sqrt(4 * this.bones.length), e = THREE.Math.nextPowerOfTwo(Math.ceil(e)), this.boneTextureHeight = this.boneTextureWidth = e = Math.max(e, 4), this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType)) : this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === t) this.calculateInverses();
        else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
        else
            for (console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [], t = 0, e = this.bones.length; e > t; t++) this.boneInverses.push(new THREE.Matrix4)
    }, Object.assign(THREE.Skeleton.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var e = 0, t = this.bones.length; t > e; e++) {
                var i = new THREE.Matrix4;
                this.bones[e] && i.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(i)
            }
        },
        pose: function() {
            for (var e, t = 0, i = this.bones.length; i > t; t++)(e = this.bones[t]) && e.matrixWorld.getInverse(this.boneInverses[t]);
            for (t = 0, i = this.bones.length; i > t; t++)(e = this.bones[t]) && (e.parent instanceof THREE.Bone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
        },
        update: function() {
            var e = new THREE.Matrix4;
            return function() {
                for (var t = 0, i = this.bones.length; i > t; t++) e.multiplyMatrices(this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix, this.boneInverses[t]), e.toArray(this.boneMatrices, 16 * t);
                this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
            }
        }(),
        clone: function() {
            return new THREE.Skeleton(this.bones, this.boneInverses, this.useVertexTexture)
        }
    }), THREE.SkinnedMesh = function(e, t, i) {
        if (THREE.Mesh.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new THREE.Matrix4, this.bindMatrixInverse = new THREE.Matrix4, e = [], this.geometry && void 0 !== this.geometry.bones) {
            for (var r, n = 0, a = this.geometry.bones.length; a > n; ++n) r = this.geometry.bones[n], t = new THREE.Bone(this), e.push(t), t.name = r.name, t.position.fromArray(r.pos), t.quaternion.fromArray(r.rotq), void 0 !== r.scl && t.scale.fromArray(r.scl);
            for (n = 0, a = this.geometry.bones.length; a > n; ++n) r = this.geometry.bones[n], -1 !== r.parent && null !== r.parent && void 0 !== e[r.parent] ? e[r.parent].add(e[n]) : this.add(e[n])
        }
        this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new THREE.Skeleton(e, void 0, i), this.matrixWorld)
    }, THREE.SkinnedMesh.prototype = Object.assign(Object.create(THREE.Mesh.prototype), {
        constructor: THREE.SkinnedMesh,
        bind: function(e, t) {
            this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            if (this.geometry instanceof THREE.Geometry)
                for (var e = 0; e < this.geometry.skinWeights.length; e++) {
                    var t = this.geometry.skinWeights[e],
                        i = 1 / t.lengthManhattan();
                    1 / 0 !== i ? t.multiplyScalar(i) : t.set(1, 0, 0, 0)
                } else if (this.geometry instanceof THREE.BufferGeometry)
                    for (var t = new THREE.Vector4, r = this.geometry.attributes.skinWeight, e = 0; e < r.count; e++) t.x = r.getX(e), t.y = r.getY(e), t.z = r.getZ(e), t.w = r.getW(e), i = 1 / t.lengthManhattan(), 1 / 0 !== i ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), r.setXYZW(e, t.x, t.y, t.z, t.w)
        },
        updateMatrixWorld: function(e) {
            THREE.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return new this.constructor(this.geometry, this.material, this.skeleton.useVertexTexture).copy(this)
        }
    }), THREE.LOD = function() {
        THREE.Object3D.call(this), this.type = "LOD", Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }, THREE.LOD.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
        constructor: THREE.LOD,
        copy: function(e) {
            THREE.Object3D.prototype.copy.call(this, e, !1), e = e.levels;
            for (var t = 0, i = e.length; i > t; t++) {
                var r = e[t];
                this.addLevel(r.object.clone(), r.distance)
            }
            return this
        },
        addLevel: function(e, t) {
            void 0 === t && (t = 0), t = Math.abs(t);
            for (var i = this.levels, r = 0; r < i.length && !(t < i[r].distance); r++);
            i.splice(r, 0, {
                distance: t,
                object: e
            }), this.add(e)
        },
        getObjectForDistance: function(e) {
            for (var t = this.levels, i = 1, r = t.length; r > i && !(e < t[i].distance); i++);
            return t[i - 1].object
        },
        raycast: function() {
            var e = new THREE.Vector3;
            return function(t, i) {
                e.setFromMatrixPosition(this.matrixWorld);
                var r = t.ray.origin.distanceTo(e);
                this.getObjectForDistance(r).raycast(t, i)
            }
        }(),
        update: function() {
            var e = new THREE.Vector3,
                t = new THREE.Vector3;
            return function(i) {
                var r = this.levels;
                if (1 < r.length) {
                    e.setFromMatrixPosition(i.matrixWorld), t.setFromMatrixPosition(this.matrixWorld), i = e.distanceTo(t), r[0].object.visible = !0;
                    for (var n = 1, a = r.length; a > n && i >= r[n].distance; n++) r[n - 1].object.visible = !1, r[n].object.visible = !0;
                    for (; a > n; n++) r[n].object.visible = !1
                }
            }
        }(),
        toJSON: function(e) {
            e = THREE.Object3D.prototype.toJSON.call(this, e), e.object.levels = [];
            for (var t = this.levels, i = 0, r = t.length; r > i; i++) {
                var n = t[i];
                e.object.levels.push({
                    object: n.object.uuid,
                    distance: n.distance
                })
            }
            return e
        }
    }), THREE.Sprite = function(e) {
        THREE.Object3D.call(this), this.type = "Sprite", this.material = void 0 !== e ? e : new THREE.SpriteMaterial
    }, THREE.Sprite.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
        constructor: THREE.Sprite,
        raycast: function() {
            var e = new THREE.Vector3;
            return function(t, i) {
                e.setFromMatrixPosition(this.matrixWorld);
                var r = t.ray.distanceSqToPoint(e);
                r > this.scale.x * this.scale.y / 4 || i.push({
                    distance: Math.sqrt(r),
                    point: this.position,
                    face: null,
                    object: this
                })
            }
        }(),
        clone: function() {
            return new this.constructor(this.material).copy(this)
        }
    }), THREE.LensFlare = function(e, t, i, r, n) {
        THREE.Object3D.call(this), this.lensFlares = [], this.positionScreen = new THREE.Vector3, this.customUpdateCallback = void 0, void 0 !== e && this.add(e, t, i, r, n)
    }, THREE.LensFlare.prototype = Object.assign(Object.create(THREE.Object3D.prototype), {
        constructor: THREE.LensFlare,
        copy: function(e) {
            THREE.Object3D.prototype.copy.call(this, e), this.positionScreen.copy(e.positionScreen), this.customUpdateCallback = e.customUpdateCallback;
            for (var t = 0, i = e.lensFlares.length; i > t; t++) this.lensFlares.push(e.lensFlares[t]);
            return this
        },
        add: function(e, t, i, r, n, a) {
            void 0 === t && (t = -1), void 0 === i && (i = 0), void 0 === a && (a = 1), void 0 === n && (n = new THREE.Color(16777215)), void 0 === r && (r = THREE.NormalBlending), i = Math.min(i, Math.max(0, i)), this.lensFlares.push({
                texture: e,
                size: t,
                distance: i,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: a,
                color: n,
                blending: r
            })
        },
        updateLensFlares: function() {
            var e, t = this.lensFlares.length,
                i, r = 2 * -this.positionScreen.x,
                n = 2 * -this.positionScreen.y;
            for (e = 0; t > e; e++) i = this.lensFlares[e], i.x = this.positionScreen.x + r * i.distance, i.y = this.positionScreen.y + n * i.distance, i.wantedRotation = i.x * Math.PI * .25, i.rotation += .25 * (i.wantedRotation - i.rotation)
        }
    }), THREE.Scene = function() {
        THREE.Object3D.call(this), this.type = "Scene", this.overrideMaterial = this.fog = this.background = null, this.autoUpdate = !0
    }, THREE.Scene.prototype = Object.create(THREE.Object3D.prototype), THREE.Scene.prototype.constructor = THREE.Scene, THREE.Scene.prototype.copy = function(e, t) {
        return THREE.Object3D.prototype.copy.call(this, e, t), null !== e.background && (this.background = e.background.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
    }, THREE.Fog = function(e, t, i) {
        this.name = "", this.color = new THREE.Color(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== i ? i : 1e3
    }, THREE.Fog.prototype.clone = function() {
        return new THREE.Fog(this.color.getHex(), this.near, this.far)
    }, THREE.FogExp2 = function(e, t) {
        this.name = "", this.color = new THREE.Color(e), this.density = void 0 !== t ? t : 25e-5
    }, THREE.FogExp2.prototype.clone = function() {
        return new THREE.FogExp2(this.color.getHex(), this.density)
    }, THREE.ShaderChunk = {}, THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n", THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif\n", THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n	if ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n", THREE.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n	#endif\n#endif\n", THREE.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", THREE.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n", THREE.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n", THREE.ShaderChunk.bsdfs = "bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n	return any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n		if( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n			float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n			float maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n			return distanceFalloff * maxDistanceCutoffFactor;\n#else\n			return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n		}\n		return 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	return 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n", THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 );\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif\n", THREE.ShaderChunk.clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n	for ( int i = 0; i < NUM_CLIPPING_PLANES; ++ i ) {\n		vec4 plane = clippingPlanes[ i ];\n		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n	}\n#endif\n", THREE.ShaderChunk.clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n	#if ! defined( PHYSICAL ) && ! defined( PHONG )\n		varying vec3 vViewPosition;\n	#endif\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n", THREE.ShaderChunk.clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	varying vec3 vViewPosition;\n#endif\n", THREE.ShaderChunk.clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	vViewPosition = - mvPosition.xyz;\n#endif\n", THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n	diffuseColor.rgb *= vColor;\n#endif", THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif\n", THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif", THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n	vColor.xyz = color.xyz;\n#endif", THREE.ShaderChunk.common = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract(sin(sn) * c);\n}\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	float distance = dot( planeNormal, point - pointOnPlane );\n	return - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n", THREE.ShaderChunk.cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n	vec3 absDirection = abs(direction);\n	int face = -1;\n	if( absDirection.x > absDirection.z ) {\n		if(absDirection.x > absDirection.y )\n			face = direction.x > 0.0 ? 0 : 3;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	else {\n		if(absDirection.z > absDirection.y )\n			face = direction.z > 0.0 ? 2 : 5;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	return face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n	float dxRoughness = dFdx(roughness);\n	float dyRoughness = dFdy(roughness);\n	vec3 dx = dFdx( vec * scale * dxRoughness );\n	vec3 dy = dFdy( vec * scale * dyRoughness );\n	float d = max( dot( dx, dx ), dot( dy, dy ) );\n	d = clamp(d, 1.0, cubeUV_rangeClamp);\n	float mipLevel = 0.5 * log2(d);\n	return vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n	float a = 16.0 * cubeUV_rcpTextureSize;\n	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n	float powScale = exp2_packed.x * exp2_packed.y;\n	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n	bool bRes = mipLevel == 0.0;\n	scale =  bRes && (scale < a) ? a : scale;\n	vec3 r;\n	vec2 offset;\n	int face = getFaceFromDirection(direction);\n	float rcpPowScale = 1.0 / powScale;\n	if( face == 0) {\n		r = vec3(direction.x, -direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 1) {\n		r = vec3(direction.y, direction.x, direction.z);\n		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 2) {\n		r = vec3(direction.z, direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 3) {\n		r = vec3(direction.x, direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	else if( face == 4) {\n		r = vec3(direction.y, direction.x, -direction.z);\n		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	else {\n		r = vec3(direction.z, -direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	r = normalize(r);\n	float texelOffset = 0.5 * cubeUV_rcpTextureSize;\n	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n	vec2 base = offset + vec2( texelOffset );\n	return base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n	float roughnessVal = roughness* cubeUV_maxLods3;\n	float r1 = floor(roughnessVal);\n	float r2 = r1 + 1.0;\n	float t = fract(roughnessVal);\n	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n	float s = mipInfo.y;\n	float level0 = mipInfo.x;\n	float level1 = level0 + 1.0;\n	level1 = level1 > 5.0 ? 5.0 : level1;\n	level0 += min( floor( s + 0.5 ), 5.0 );\n	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n	vec4 result = mix(color10, color20, t);\n	return vec4(result.rgb, 1.0);\n}\n#endif\n", THREE.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n	objectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n", THREE.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n", THREE.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif\n", THREE.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n", THREE.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif\n", THREE.ShaderChunk.encodings_pars_fragment = "\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n",
    THREE.ShaderChunk.encodings_fragment = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n", THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#endif\n	envColor = envMapTexelToLinear( envColor );\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif\n", THREE.ShaderChunk.envmap_pars_fragment = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n	uniform float reflectivity;\n	uniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n	#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n		varying vec3 vWorldPosition;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif\n", THREE.ShaderChunk.envmap_pars_vertex = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif\n", THREE.ShaderChunk.envmap_vertex = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif\n", THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n	#ifdef USE_LOGDEPTHBUF_EXT\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n	#else\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n	#endif\n	#ifdef FOG_EXP2\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n", THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n", THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", THREE.ShaderChunk.lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		#ifdef DOUBLE_SIDED\n			vLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n		#endif\n	}\n#endif\n", THREE.ShaderChunk.lights_pars = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	return irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		directLight.color = directionalLight.color;\n		directLight.direction = directionalLight.direction;\n		directLight.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		if ( testLightInRange( lightDistance, pointLight.distance ) ) {\n			directLight.color = pointLight.color;\n			directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		float angleCos = dot( directLight.direction, spotLight.direction );\n		if ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n			directLight.color = spotLight.color;\n			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n		float dotNL = dot( geometry.normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			irradiance *= PI;\n		#endif\n		return irradiance;\n	}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n		#include <normal_flip>\n		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			vec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n		#else\n			vec4 envMapColor = vec4( 0.0 );\n		#endif\n		return PI * envMapColor.rgb * envMapIntensity;\n	}\n	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		float maxMIPLevelScalar = float( maxMIPLevel );\n		float desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n	}\n	vec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n		#else\n			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n		#endif\n		#include <normal_flip>\n		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			vec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n		#elif defined( ENVMAP_TYPE_EQUIREC )\n			vec2 sampleUV;\n			sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n			sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_SPHERE )\n			vec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#endif\n		return envMapColor.rgb * envMapIntensity;\n	}\n#endif\n", THREE.ShaderChunk.lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n", THREE.ShaderChunk.lights_phong_pars_fragment = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n	vec3	diffuseColor;\n	vec3	specularColor;\n	float	specularShininess;\n	float	specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)\n", THREE.ShaderChunk.lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n	material.clearCoat = saturate( clearCoat );	material.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n", THREE.ShaderChunk.lights_physical_pars_fragment = "struct PhysicalMaterial {\n	vec3	diffuseColor;\n	float	specularRoughness;\n	vec3	specularColor;\n	#ifndef STANDARD\n		float clearCoat;\n		float clearCoatRoughness;\n	#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	#ifndef STANDARD\n		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n	#else\n		float clearCoatDHR = 0.0;\n	#endif\n	reflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n	reflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	#ifndef STANDARD\n		reflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n	#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	#ifndef STANDARD\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		float dotNL = dotNV;\n		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n	#else\n		float clearCoatDHR = 0.0;\n	#endif\n	reflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n	#ifndef STANDARD\n		reflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n	#endif\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n", THREE.ShaderChunk.lights_template = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointDirectLightIrradiance( pointLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotDirectLightIrradiance( spotLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#ifdef USE_LIGHTMAP\n		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			lightMapIrradiance *= PI;\n		#endif\n		irradiance += lightMapIrradiance;\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		}\n	#endif\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n	 	irradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n	#endif\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	vec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n	#ifndef STANDARD\n		vec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n	#else\n		vec3 clearCoatRadiance = vec3( 0.0 );\n	#endif\n		\n	RE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n", THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif", THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n	uniform float logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n#endif\n", THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n	uniform float logDepthBufFC;\n#endif", THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n	#else\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n	#endif\n#endif\n", THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n	vec4 texelColor = texture2D( map, vUv );\n	texelColor = mapTexelToLinear( texelColor );\n	diffuseColor *= texelColor;\n#endif\n", THREE.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n", THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n	vec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n	diffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n", THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n#endif\n", THREE.ShaderChunk.metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.r;\n#endif\n", THREE.ShaderChunk.metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n", THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n	#ifndef USE_MORPHNORMALS\n	uniform float morphTargetInfluences[ 8 ];\n	#else\n	uniform float morphTargetInfluences[ 4 ];\n	#endif\n#endif", THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n	#ifndef USE_MORPHNORMALS\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n	#endif\n#endif\n", THREE.ShaderChunk.normal_flip = "#ifdef DOUBLE_SIDED\n	float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n	float flipNormal = 1.0;\n#endif\n", THREE.ShaderChunk.normal_fragment = "#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n", THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n	}\n#endif\n", THREE.ShaderChunk.packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n", THREE.ShaderChunk.premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif\n", THREE.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n	vec4 mvPosition = modelViewMatrix * skinned;\n#else\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n", THREE.ShaderChunk.roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.r;\n#endif\n", THREE.ShaderChunk.roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n		const vec2 offset = vec2( 0.0, 1.0 );\n		vec2 texelSize = vec2( 1.0 ) / size;\n		vec2 centroidUV = floor( uv * size + 0.5 ) / size;\n		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n		vec2 f = fract( uv * size + 0.5 );\n		float a = mix( lb, lt, f.y );\n		float b = mix( rb, rt, f.y );\n		float c = mix( a, b, f.x );\n		return c;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return 1.0;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		float dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif\n",
    THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n#endif\n", THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n#endif\n", THREE.ShaderChunk.shadowmask_pars_fragment = "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		shadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		shadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		shadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#endif\n	return shadow;\n}\n", THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif\n", THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n#endif\n", THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n", THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", THREE.ShaderChunk.tonemapping_fragment = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n", THREE.ShaderChunk.tonemapping_pars_fragment = "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n", THREE.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif", THREE.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n#endif", THREE.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = uv2;\n#endif", THREE.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n#endif", THREE.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n#endif\n", THREE.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif", THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n	#ifdef USE_SKINNING\n		vec4 worldPosition = modelMatrix * skinned;\n	#else\n		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n	#endif\n#endif\n", THREE.UniformsUtils = {
        merge: function(e) {
            for (var t = {}, i = 0; i < e.length; i++) {
                var r = this.clone(e[i]),
                    n;
                for (n in r) t[n] = r[n]
            }
            return t
        },
        clone: function(e) {
            var t = {},
                i;
            for (i in e) {
                t[i] = {};
                for (var r in e[i]) {
                    var n = e[i][r];
                    n instanceof THREE.Color || n instanceof THREE.Vector2 || n instanceof THREE.Vector3 || n instanceof THREE.Vector4 || n instanceof THREE.Matrix3 || n instanceof THREE.Matrix4 || n instanceof THREE.Texture ? t[i][r] = n.clone() : Array.isArray(n) ? t[i][r] = n.slice() : t[i][r] = n
                }
            }
            return t
        }
    }, THREE.UniformsLib = {
        common: {
            diffuse: {
                value: new THREE.Color(15658734)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            offsetRepeat: {
                value: new THREE.Vector4(0, 0, 1, 1)
            },
            specularMap: {
                value: null
            },
            alphaMap: {
                value: null
            },
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new THREE.Vector2(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new THREE.Color(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            }
        },
        points: {
            diffuse: {
                value: new THREE.Color(15658734)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            offsetRepeat: {
                value: new THREE.Vector4(0, 0, 1, 1)
            }
        }
    }, THREE.ShaderChunk.cube_frag = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n	gl_FragColor.a *= opacity;\n}\n", THREE.ShaderChunk.cube_vert = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}\n", THREE.ShaderChunk.depth_frag = "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n	#endif\n}\n", THREE.ShaderChunk.depth_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n", THREE.ShaderChunk.distanceRGBA_frag = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	gl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n", THREE.ShaderChunk.distanceRGBA_vert = "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <skinbase_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition;\n}\n", THREE.ShaderChunk.equirect_frag = "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldPosition );\n	vec2 sampleUV;\n	sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n}\n", THREE.ShaderChunk.equirect_vert = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}\n", THREE.ShaderChunk.linedashed_frag = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n", THREE.ShaderChunk.linedashed_vert = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	vLineDistance = scale * lineDistance;\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n", THREE.ShaderChunk.meshbasic_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight;\n	reflectedLight.directDiffuse = vec3( 0.0 );\n	reflectedLight.directSpecular = vec3( 0.0 );\n	reflectedLight.indirectDiffuse = diffuseColor.rgb;\n	reflectedLight.indirectSpecular = vec3( 0.0 );\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <normal_flip>\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n", THREE.ShaderChunk.meshbasic_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_ENVMAP\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	#include <envmap_vertex>\n}\n", THREE.ShaderChunk.meshlambert_frag = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <normal_flip>\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n", THREE.ShaderChunk.meshlambert_vert = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n}\n", THREE.ShaderChunk.meshphong_frag = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_flip>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n", THREE.ShaderChunk.meshphong_vert = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n}\n", THREE.ShaderChunk.meshphysical_frag = "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n	uniform float clearCoat;\n	uniform float clearCoatRoughness;\n#endif\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_flip>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n", THREE.ShaderChunk.meshphysical_vert = "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n", THREE.ShaderChunk.normal_frag = "uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	gl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n	#include <logdepthbuf_fragment>\n}\n", THREE.ShaderChunk.normal_vert = "varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vNormal = normalize( normalMatrix * normal );\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n", THREE.ShaderChunk.points_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n", THREE.ShaderChunk.points_vert = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <project_vertex>\n	#ifdef USE_SIZEATTENUATION\n		gl_PointSize = size * ( scale / - mvPosition.z );\n	#else\n		gl_PointSize = size;\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n", THREE.ShaderChunk.shadow_frag = "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );\n}\n", THREE.ShaderChunk.shadow_vert = "#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <begin_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n", THREE.ShaderLib = {
        basic: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.fog]),
            vertexShader: THREE.ShaderChunk.meshbasic_vert,
            fragmentShader: THREE.ShaderChunk.meshbasic_frag
        },
        lambert: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
                emissive: {
                    value: new THREE.Color(0)
                }
            }]),
            vertexShader: THREE.ShaderChunk.meshlambert_vert,
            fragmentShader: THREE.ShaderChunk.meshlambert_frag
        },
        phong: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
                emissive: {
                    value: new THREE.Color(0)
                },
                specular: {
                    value: new THREE.Color(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: THREE.ShaderChunk.meshphong_vert,
            fragmentShader: THREE.ShaderChunk.meshphong_frag
        },
        standard: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.roughnessmap, THREE.UniformsLib.metalnessmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
                emissive: {
                    value: new THREE.Color(0)
                },
                roughness: {
                    value: .5
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: THREE.ShaderChunk.meshphysical_vert,
            fragmentShader: THREE.ShaderChunk.meshphysical_frag
        },
        points: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.points, THREE.UniformsLib.fog]),
            vertexShader: THREE.ShaderChunk.points_vert,
            fragmentShader: THREE.ShaderChunk.points_frag
        },
        dashed: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: THREE.ShaderChunk.linedashed_vert,
            fragmentShader: THREE.ShaderChunk.linedashed_frag
        },
        depth: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.displacementmap]),
            vertexShader: THREE.ShaderChunk.depth_vert,
            fragmentShader: THREE.ShaderChunk.depth_frag
        },
        normal: {
            uniforms: {
                opacity: {
                    value: 1
                }
            },
            vertexShader: THREE.ShaderChunk.normal_vert,
            fragmentShader: THREE.ShaderChunk.normal_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: THREE.ShaderChunk.cube_vert,
            fragmentShader: THREE.ShaderChunk.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                },
                tFlip: {
                    value: -1
                }
            },
            vertexShader: THREE.ShaderChunk.equirect_vert,
            fragmentShader: THREE.ShaderChunk.equirect_frag
        },
        distanceRGBA: {
            uniforms: {
                lightPos: {
                    value: new THREE.Vector3
                }
            },
            vertexShader: THREE.ShaderChunk.distanceRGBA_vert,
            fragmentShader: THREE.ShaderChunk.distanceRGBA_frag
        }
    }, THREE.ShaderLib.physical = {
        uniforms: THREE.UniformsUtils.merge([THREE.ShaderLib.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: THREE.ShaderChunk.meshphysical_vert,
        fragmentShader: THREE.ShaderChunk.meshphysical_frag
    }, THREE.WebGLRenderer = function(e) {
        function t(e, t, i, r) {
            !0 === b && (e *= r, t *= r, i *= r), pe.clearColor(e, t, i, r)
        }

        function i() {
            pe.init(), pe.scissor(G.copy(Z).multiplyScalar(q)), pe.viewport(z.copy(K).multiplyScalar(q)), t(j.r, j.g, j.b, W)
        }

        function r() {
            N = U = null, $ = "", F = -1, pe.reset()
        }

        function n(e) {
            e.preventDefault(), r(), i(), de.clear()
        }

        function a(e) {
            e = e.target, e.removeEventListener("dispose", a), o(e), de["delete"](e)
        }

        function o(e) {
            var t = de.get(e).program;
            e.program = void 0,
                void 0 !== t && me.releaseProgram(t)
        }

        function s(e, t) {
            return Math.abs(t[0]) - Math.abs(e[0])
        }

        function c(e, t) {
            return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.program && t.material.program && e.material.program !== t.material.program ? e.material.program.id - t.material.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
        }

        function h(e, t) {
            return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
        }

        function l(e, t, i, r, n) {
            var a;
            i.transparent ? (r = A, a = ++L) : (r = w, a = ++S), a = r[a], void 0 !== a ? (a.id = e.id, a.object = e, a.geometry = t, a.material = i, a.z = ae.z, a.group = n) : (a = {
                id: e.id,
                object: e,
                geometry: t,
                material: i,
                z: ae.z,
                group: n
            }, r.push(a))
        }

        function u(e) {
            if (!J.intersectsSphere(e)) return !1;
            var t = ee.numPlanes;
            if (0 === t) return !0;
            var i = B.clippingPlanes,
                r = e.center;
            e = -e.radius;
            var n = 0;
            do
                if (i[n].distanceToPoint(r) < e) return !1; while (++n !== t);
            return !0
        }

        function p(e, t) {
            if (!1 !== e.visible) {
                if (e.layers.test(t.layers))
                    if (e instanceof THREE.Light) M.push(e);
                    else if (e instanceof THREE.Sprite) {
                    var i;
                    (i = !1 === e.frustumCulled) || (re.center.set(0, 0, 0), re.radius = .7071067811865476, re.applyMatrix4(e.matrixWorld), i = !0 === u(re)), i && P.push(e)
                } else if (e instanceof THREE.LensFlare) D.push(e);
                else if (e instanceof THREE.ImmediateRenderObject) !0 === B.sortObjects && (ae.setFromMatrixPosition(e.matrixWorld), ae.applyProjection(ne)), l(e, null, e.material, ae.z, null);
                else if ((e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.Points) && (e instanceof THREE.SkinnedMesh && e.skeleton.update(), (i = !1 === e.frustumCulled) || (i = e.geometry, null === i.boundingSphere && i.computeBoundingSphere(), re.copy(i.boundingSphere).applyMatrix4(e.matrixWorld), i = !0 === u(re)), i)) {
                    var r = e.material;
                    if (!0 === r.visible)
                        if (!0 === B.sortObjects && (ae.setFromMatrixPosition(e.matrixWorld), ae.applyProjection(ne)), i = Ee.update(e), r instanceof THREE.MultiMaterial)
                            for (var n = i.groups, a = r.materials, r = 0, o = n.length; o > r; r++) {
                                var s = n[r],
                                    c = a[s.materialIndex];
                                !0 === c.visible && l(e, i, c, ae.z, s)
                            } else l(e, i, r, ae.z, null)
                }
                for (i = e.children, r = 0, o = i.length; o > r; r++) p(i[r], t)
            }
        }

        function d(e, t, i, r) {
            for (var n = 0, a = e.length; a > n; n++) {
                var o = e[n],
                    s = o.object,
                    c = o.geometry,
                    h = void 0 === r ? o.material : r,
                    o = o.group;
                if (s.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, s.matrixWorld), s.normalMatrix.getNormalMatrix(s.modelViewMatrix), s instanceof THREE.ImmediateRenderObject) {
                    f(h);
                    var l = E(t, i, h, s);
                    $ = "", s.render(function(e) {
                        B.renderBufferImmediate(e, l, h)
                    })
                } else B.renderBufferDirect(t, i, c, h, s, o)
            }
        }

        function f(e) {
            e.side !== THREE.DoubleSide ? pe.enable(ce.CULL_FACE) : pe.disable(ce.CULL_FACE), pe.setFlipSided(e.side === THREE.BackSide), !0 === e.transparent ? pe.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : pe.setBlending(THREE.NoBlending), pe.setDepthFunc(e.depthFunc), pe.setDepthTest(e.depthTest), pe.setDepthWrite(e.depthWrite), pe.setColorWrite(e.colorWrite), pe.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
        }

        function E(e, t, i, r) {
            k = 0;
            var n = de.get(i);
            if (te && ((ie || e !== N) && ee.setState(i.clippingPlanes, i.clipShadows, e, n, e === N && i.id === F), void 0 !== n.numClippingPlanes && n.numClippingPlanes !== ee.numPlanes && (i.needsUpdate = !0)), void 0 === n.program && (i.needsUpdate = !0), void 0 !== n.lightsHash && n.lightsHash !== oe.hash && (i.needsUpdate = !0), i.needsUpdate) {
                e: {
                    var s = de.get(i),
                        c = me.getParameters(i, oe, t, ee.numPlanes, r),
                        h = me.getProgramCode(i, c),
                        l = s.program,
                        u = !0;
                    if (void 0 === l) i.addEventListener("dispose", a);
                    else if (l.code !== h) o(i);
                    else {
                        if (void 0 !== c.shaderID) break e;
                        u = !1
                    }
                    if (u && (c.shaderID ? (l = THREE.ShaderLib[c.shaderID], s.__webglShader = {
                            name: i.type,
                            uniforms: THREE.UniformsUtils.clone(l.uniforms),
                            vertexShader: l.vertexShader,
                            fragmentShader: l.fragmentShader
                        }) : s.__webglShader = {
                            name: i.type,
                            uniforms: i.uniforms,
                            vertexShader: i.vertexShader,
                            fragmentShader: i.fragmentShader
                        }, i.__webglShader = s.__webglShader, l = me.acquireProgram(i, c, h), s.program = l, i.program = l), c = l.getAttributes(), i.morphTargets)
                        for (h = i.numSupportedMorphTargets = 0; h < B.maxMorphTargets; h++) 0 <= c["morphTarget" + h] && i.numSupportedMorphTargets++;
                    if (i.morphNormals)
                        for (h = i.numSupportedMorphNormals = 0; h < B.maxMorphNormals; h++) 0 <= c["morphNormal" + h] && i.numSupportedMorphNormals++;c = s.__webglShader.uniforms,
                    (i instanceof THREE.ShaderMaterial || i instanceof THREE.RawShaderMaterial) && !0 !== i.clipping || (s.numClippingPlanes = ee.numPlanes, c.clippingPlanes = ee.uniform),
                    i.lights && (s.lightsHash = oe.hash, c.ambientLightColor.value = oe.ambient, c.directionalLights.value = oe.directional, c.spotLights.value = oe.spot, c.pointLights.value = oe.point, c.hemisphereLights.value = oe.hemi, c.directionalShadowMap.value = oe.directionalShadowMap, c.directionalShadowMatrix.value = oe.directionalShadowMatrix, c.spotShadowMap.value = oe.spotShadowMap, c.spotShadowMatrix.value = oe.spotShadowMatrix, c.pointShadowMap.value = oe.pointShadowMap, c.pointShadowMatrix.value = oe.pointShadowMatrix),
                    h = s.program.getUniforms(),
                    h = THREE.WebGLUniforms.seqWithValue(h.seq, c),
                    s.uniformsList = h,
                    s.dynamicUniforms = THREE.WebGLUniforms.splitDynamic(h, c)
                }
                i.needsUpdate = !1
            }
            var p = !1,
                u = l = !1,
                s = n.program,
                h = s.getUniforms(),
                c = n.__webglShader.uniforms;
            if (s.id !== U && (ce.useProgram(s.program), U = s.id, u = l = p = !0), i.id !== F && (F = i.id, l = !0), (p || e !== N) && (h.set(ce, e, "projectionMatrix"), ue.logarithmicDepthBuffer && h.setValue(ce, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), e !== N && (N = e, u = l = !0), (i instanceof THREE.ShaderMaterial || i instanceof THREE.MeshPhongMaterial || i instanceof THREE.MeshStandardMaterial || i.envMap) && (p = h.map.cameraPosition, void 0 !== p && p.setValue(ce, ae.setFromMatrixPosition(e.matrixWorld))), (i instanceof THREE.MeshPhongMaterial || i instanceof THREE.MeshLambertMaterial || i instanceof THREE.MeshBasicMaterial || i instanceof THREE.MeshStandardMaterial || i instanceof THREE.ShaderMaterial || i.skinning) && h.setValue(ce, "viewMatrix", e.matrixWorldInverse), h.set(ce, B, "toneMappingExposure"), h.set(ce, B, "toneMappingWhitePoint")), i.skinning && (h.setOptional(ce, r, "bindMatrix"), h.setOptional(ce, r, "bindMatrixInverse"), p = r.skeleton) && (ue.floatVertexTextures && p.useVertexTexture ? (h.set(ce, p, "boneTexture"), h.set(ce, p, "boneTextureWidth"), h.set(ce, p, "boneTextureHeight")) : h.setOptional(ce, p, "boneMatrices")), l) {
                if (i.lights && (l = u, c.ambientLightColor.needsUpdate = l, c.directionalLights.needsUpdate = l, c.pointLights.needsUpdate = l, c.spotLights.needsUpdate = l, c.hemisphereLights.needsUpdate = l), t && i.fog && (c.fogColor.value = t.color, t instanceof THREE.Fog ? (c.fogNear.value = t.near, c.fogFar.value = t.far) : t instanceof THREE.FogExp2 && (c.fogDensity.value = t.density)), i instanceof THREE.MeshBasicMaterial || i instanceof THREE.MeshLambertMaterial || i instanceof THREE.MeshPhongMaterial || i instanceof THREE.MeshStandardMaterial || i instanceof THREE.MeshDepthMaterial) {
                    c.opacity.value = i.opacity, c.diffuse.value = i.color, i.emissive && c.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity), c.map.value = i.map, c.specularMap.value = i.specularMap, c.alphaMap.value = i.alphaMap, i.aoMap && (c.aoMap.value = i.aoMap, c.aoMapIntensity.value = i.aoMapIntensity);
                    var d;
                    i.map ? d = i.map : i.specularMap ? d = i.specularMap : i.displacementMap ? d = i.displacementMap : i.normalMap ? d = i.normalMap : i.bumpMap ? d = i.bumpMap : i.roughnessMap ? d = i.roughnessMap : i.metalnessMap ? d = i.metalnessMap : i.alphaMap ? d = i.alphaMap : i.emissiveMap && (d = i.emissiveMap), void 0 !== d && (d instanceof THREE.WebGLRenderTarget && (d = d.texture), t = d.offset, d = d.repeat, c.offsetRepeat.value.set(t.x, t.y, d.x, d.y)), c.envMap.value = i.envMap, c.flipEnvMap.value = i.envMap instanceof THREE.CubeTexture ? -1 : 1, c.reflectivity.value = i.reflectivity, c.refractionRatio.value = i.refractionRatio
                }
                i instanceof THREE.LineBasicMaterial ? (c.diffuse.value = i.color, c.opacity.value = i.opacity) : i instanceof THREE.LineDashedMaterial ? (c.diffuse.value = i.color, c.opacity.value = i.opacity, c.dashSize.value = i.dashSize, c.totalSize.value = i.dashSize + i.gapSize, c.scale.value = i.scale) : i instanceof THREE.PointsMaterial ? (c.diffuse.value = i.color, c.opacity.value = i.opacity, c.size.value = i.size * q, c.scale.value = .5 * T.clientHeight, c.map.value = i.map, null !== i.map && (d = i.map.offset, i = i.map.repeat, c.offsetRepeat.value.set(d.x, d.y, i.x, i.y))) : i instanceof THREE.MeshLambertMaterial ? (i.lightMap && (c.lightMap.value = i.lightMap, c.lightMapIntensity.value = i.lightMapIntensity), i.emissiveMap && (c.emissiveMap.value = i.emissiveMap)) : i instanceof THREE.MeshPhongMaterial ? (c.specular.value = i.specular, c.shininess.value = Math.max(i.shininess, 1e-4), i.lightMap && (c.lightMap.value = i.lightMap, c.lightMapIntensity.value = i.lightMapIntensity), i.emissiveMap && (c.emissiveMap.value = i.emissiveMap), i.bumpMap && (c.bumpMap.value = i.bumpMap, c.bumpScale.value = i.bumpScale), i.normalMap && (c.normalMap.value = i.normalMap, c.normalScale.value.copy(i.normalScale)), i.displacementMap && (c.displacementMap.value = i.displacementMap, c.displacementScale.value = i.displacementScale, c.displacementBias.value = i.displacementBias)) : i instanceof THREE.MeshPhysicalMaterial ? (c.clearCoat.value = i.clearCoat, c.clearCoatRoughness.value = i.clearCoatRoughness, m(c, i)) : i instanceof THREE.MeshStandardMaterial ? m(c, i) : i instanceof THREE.MeshDepthMaterial ? i.displacementMap && (c.displacementMap.value = i.displacementMap, c.displacementScale.value = i.displacementScale, c.displacementBias.value = i.displacementBias) : i instanceof THREE.MeshNormalMaterial && (c.opacity.value = i.opacity), THREE.WebGLUniforms.upload(ce, n.uniformsList, c, B)
            }
            return h.set(ce, r, "modelViewMatrix"), h.set(ce, r, "normalMatrix"), h.setValue(ce, "modelMatrix", r.matrixWorld), n = n.dynamicUniforms, null !== n && (THREE.WebGLUniforms.evalDynamic(n, c, r, e), THREE.WebGLUniforms.upload(ce, n, c, B)), s
        }

        function m(e, t) {
            e.roughness.value = t.roughness, e.metalness.value = t.metalness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap), t.metalnessMap && (e.metalnessMap.value = t.metalnessMap), t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale)), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
        }

        function g(e) {
            var t;
            if (e === THREE.RepeatWrapping) return ce.REPEAT;
            if (e === THREE.ClampToEdgeWrapping) return ce.CLAMP_TO_EDGE;
            if (e === THREE.MirroredRepeatWrapping) return ce.MIRRORED_REPEAT;
            if (e === THREE.NearestFilter) return ce.NEAREST;
            if (e === THREE.NearestMipMapNearestFilter) return ce.NEAREST_MIPMAP_NEAREST;
            if (e === THREE.NearestMipMapLinearFilter) return ce.NEAREST_MIPMAP_LINEAR;
            if (e === THREE.LinearFilter) return ce.LINEAR;
            if (e === THREE.LinearMipMapNearestFilter) return ce.LINEAR_MIPMAP_NEAREST;
            if (e === THREE.LinearMipMapLinearFilter) return ce.LINEAR_MIPMAP_LINEAR;
            if (e === THREE.UnsignedByteType) return ce.UNSIGNED_BYTE;
            if (e === THREE.UnsignedShort4444Type) return ce.UNSIGNED_SHORT_4_4_4_4;
            if (e === THREE.UnsignedShort5551Type) return ce.UNSIGNED_SHORT_5_5_5_1;
            if (e === THREE.UnsignedShort565Type) return ce.UNSIGNED_SHORT_5_6_5;
            if (e === THREE.ByteType) return ce.BYTE;
            if (e === THREE.ShortType) return ce.SHORT;
            if (e === THREE.UnsignedShortType) return ce.UNSIGNED_SHORT;
            if (e === THREE.IntType) return ce.INT;
            if (e === THREE.UnsignedIntType) return ce.UNSIGNED_INT;
            if (e === THREE.FloatType) return ce.FLOAT;
            if (t = le.get("OES_texture_half_float"), null !== t && e === THREE.HalfFloatType) return t.HALF_FLOAT_OES;
            if (e === THREE.AlphaFormat) return ce.ALPHA;
            if (e === THREE.RGBFormat) return ce.RGB;
            if (e === THREE.RGBAFormat) return ce.RGBA;
            if (e === THREE.LuminanceFormat) return ce.LUMINANCE;
            if (e === THREE.LuminanceAlphaFormat) return ce.LUMINANCE_ALPHA;
            if (e === THREE.DepthFormat) return ce.DEPTH_COMPONENT;
            if (e === THREE.AddEquation) return ce.FUNC_ADD;
            if (e === THREE.SubtractEquation) return ce.FUNC_SUBTRACT;
            if (e === THREE.ReverseSubtractEquation) return ce.FUNC_REVERSE_SUBTRACT;
            if (e === THREE.ZeroFactor) return ce.ZERO;
            if (e === THREE.OneFactor) return ce.ONE;
            if (e === THREE.SrcColorFactor) return ce.SRC_COLOR;
            if (e === THREE.OneMinusSrcColorFactor) return ce.ONE_MINUS_SRC_COLOR;
            if (e === THREE.SrcAlphaFactor) return ce.SRC_ALPHA;
            if (e === THREE.OneMinusSrcAlphaFactor) return ce.ONE_MINUS_SRC_ALPHA;
            if (e === THREE.DstAlphaFactor) return ce.DST_ALPHA;
            if (e === THREE.OneMinusDstAlphaFactor) return ce.ONE_MINUS_DST_ALPHA;
            if (e === THREE.DstColorFactor) return ce.DST_COLOR;
            if (e === THREE.OneMinusDstColorFactor) return ce.ONE_MINUS_DST_COLOR;
            if (e === THREE.SrcAlphaSaturateFactor) return ce.SRC_ALPHA_SATURATE;
            if (t = le.get("WEBGL_compressed_texture_s3tc"), null !== t) {
                if (e === THREE.RGB_S3TC_DXT1_Format) return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (e === THREE.RGBA_S3TC_DXT1_Format) return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (e === THREE.RGBA_S3TC_DXT3_Format) return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (e === THREE.RGBA_S3TC_DXT5_Format) return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if (t = le.get("WEBGL_compressed_texture_pvrtc"), null !== t) {
                if (e === THREE.RGB_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (e === THREE.RGB_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (e === THREE.RGBA_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (e === THREE.RGBA_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (t = le.get("WEBGL_compressed_texture_etc1"), null !== t && e === THREE.RGB_ETC1_Format) return t.COMPRESSED_RGB_ETC1_WEBGL;
            if (t = le.get("EXT_blend_minmax"), null !== t) {
                if (e === THREE.MinEquation) return t.MIN_EXT;
                if (e === THREE.MaxEquation) return t.MAX_EXT
            }
            return 0
        }
        console.log("THREE.WebGLRenderer", THREE.REVISION), e = e || {};
        var T = void 0 !== e.canvas ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
            v = void 0 !== e.context ? e.context : null,
            y = void 0 !== e.alpha ? e.alpha : !1,
            R = void 0 !== e.depth ? e.depth : !0,
            x = void 0 !== e.stencil ? e.stencil : !0,
            H = void 0 !== e.antialias ? e.antialias : !1,
            b = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0,
            _ = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1,
            M = [],
            w = [],
            S = -1,
            A = [],
            L = -1,
            C = new Float32Array(8),
            P = [],
            D = [];
        this.domElement = T, this.context = null, this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1, this.toneMapping = THREE.LinearToneMapping, this.toneMappingWhitePoint = this.toneMappingExposure = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
        var B = this,
            U = null,
            I = null,
            O = null,
            F = -1,
            $ = "",
            N = null,
            G = new THREE.Vector4,
            V = null,
            z = new THREE.Vector4,
            k = 0,
            j = new THREE.Color(0),
            W = 0,
            X = T.width,
            Y = T.height,
            q = 1,
            Z = new THREE.Vector4(0, 0, X, Y),
            Q = !1,
            K = new THREE.Vector4(0, 0, X, Y),
            J = new THREE.Frustum,
            ee = new THREE.WebGLClipping,
            te = !1,
            ie = !1,
            re = new THREE.Sphere,
            ne = new THREE.Matrix4,
            ae = new THREE.Vector3,
            oe = {
                hash: "",
                ambient: [0, 0, 0],
                directional: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                point: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: [],
                shadows: []
            },
            se = {
                calls: 0,
                vertices: 0,
                faces: 0,
                points: 0
            };
        this.info = {
            render: se,
            memory: {
                geometries: 0,
                textures: 0
            },
            programs: null
        };
        var ce;
        try {
            if (y = {
                    alpha: y,
                    depth: R,
                    stencil: x,
                    antialias: H,
                    premultipliedAlpha: b,
                    preserveDrawingBuffer: _
                }, ce = v || T.getContext("webgl", y) || T.getContext("experimental-webgl", y), null === ce) {
                if (null !== T.getContext("webgl")) throw "Error creating WebGL context with your selected attributes.";
                throw "Error creating WebGL context."
            }
            void 0 === ce.getShaderPrecisionFormat && (ce.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }), T.addEventListener("webglcontextlost", n, !1)
        } catch (he) {
            console.error("THREE.WebGLRenderer: " + he)
        }
        var le = new THREE.WebGLExtensions(ce);
        le.get("WEBGL_depth_texture"), le.get("OES_texture_float"), le.get("OES_texture_float_linear"), le.get("OES_texture_half_float"), le.get("OES_texture_half_float_linear"), le.get("OES_standard_derivatives"), le.get("ANGLE_instanced_arrays"), le.get("OES_element_index_uint") && (THREE.BufferGeometry.MaxIndex = 4294967296);
        var ue = new THREE.WebGLCapabilities(ce, le, e),
            pe = new THREE.WebGLState(ce, le, g),
            de = new THREE.WebGLProperties,
            fe = new THREE.WebGLTextures(ce, le, pe, de, ue, g, this.info),
            Ee = new THREE.WebGLObjects(ce, de, this.info),
            me = new THREE.WebGLPrograms(this, ue),
            ge = new THREE.WebGLLights;
        this.info.programs = me.programs;
        var Te = new THREE.WebGLBufferRenderer(ce, le, se),
            ve = new THREE.WebGLIndexedBufferRenderer(ce, le, se),
            ye = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1),
            Re = new THREE.PerspectiveCamera,
            xe = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), new THREE.MeshBasicMaterial({
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            }));
        e = THREE.ShaderLib.cube;
        var He = new THREE.Mesh(new THREE.BoxBufferGeometry(5, 5, 5), new THREE.ShaderMaterial({
            uniforms: e.uniforms,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader,
            side: THREE.BackSide,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        }));
        i(), this.context = ce, this.capabilities = ue, this.extensions = le, this.properties = de, this.state = pe;
        var be = new THREE.WebGLShadowMap(this, oe, Ee, ue);
        this.shadowMap = be;
        var _e = new THREE.SpritePlugin(this, P),
            Me = new THREE.LensFlarePlugin(this, D);
        this.getContext = function() {
            return ce
        }, this.getContextAttributes = function() {
            return ce.getContextAttributes()
        }, this.forceContextLoss = function() {
            le.get("WEBGL_lose_context").loseContext()
        }, this.getMaxAnisotropy = function() {
            return ue.getMaxAnisotropy()
        }, this.getPrecision = function() {
            return ue.precision
        }, this.getPixelRatio = function() {
            return q
        }, this.setPixelRatio = function(e) {
            void 0 !== e && (q = e, this.setSize(K.z, K.w, !1))
        }, this.getSize = function() {
            return {
                width: X,
                height: Y
            }
        }, this.setSize = function(e, t, i) {
            X = e, Y = t, T.width = e * q, T.height = t * q, !1 !== i && (T.style.width = e + "px", T.style.height = t + "px"), this.setViewport(0, 0, e, t)
        }, this.setViewport = function(e, t, i, r) {
            pe.viewport(K.set(e, t, i, r))
        }, this.setScissor = function(e, t, i, r) {
            pe.scissor(Z.set(e, t, i, r))
        }, this.setScissorTest = function(e) {
            pe.setScissorTest(Q = e)
        }, this.getClearColor = function() {
            return j
        }, this.setClearColor = function(e, i) {
            j.set(e), W = void 0 !== i ? i : 1, t(j.r, j.g, j.b, W)
        }, this.getClearAlpha = function() {
            return W
        }, this.setClearAlpha = function(e) {
            W = e, t(j.r, j.g, j.b, W)
        }, this.clear = function(e, t, i) {
            var r = 0;
            (void 0 === e || e) && (r |= ce.COLOR_BUFFER_BIT), (void 0 === t || t) && (r |= ce.DEPTH_BUFFER_BIT), (void 0 === i || i) && (r |= ce.STENCIL_BUFFER_BIT), ce.clear(r)
        }, this.clearColor = function() {
            this.clear(!0, !1, !1)
        }, this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }, this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }, this.clearTarget = function(e, t, i, r) {
            this.setRenderTarget(e), this.clear(t, i, r)
        }, this.resetGLState = r, this.dispose = function() {
            A = [], L = -1, w = [], S = -1, T.removeEventListener("webglcontextlost", n, !1)
        }, this.renderBufferImmediate = function(e, t, i) {
            pe.initAttributes();
            var r = de.get(e);
            if (e.hasPositions && !r.position && (r.position = ce.createBuffer()), e.hasNormals && !r.normal && (r.normal = ce.createBuffer()), e.hasUvs && !r.uv && (r.uv = ce.createBuffer()), e.hasColors && !r.color && (r.color = ce.createBuffer()), t = t.getAttributes(), e.hasPositions && (ce.bindBuffer(ce.ARRAY_BUFFER, r.position), ce.bufferData(ce.ARRAY_BUFFER, e.positionArray, ce.DYNAMIC_DRAW), pe.enableAttribute(t.position), ce.vertexAttribPointer(t.position, 3, ce.FLOAT, !1, 0, 0)), e.hasNormals) {
                if (ce.bindBuffer(ce.ARRAY_BUFFER, r.normal), "MeshPhongMaterial" !== i.type && "MeshStandardMaterial" !== i.type && "MeshPhysicalMaterial" !== i.type && i.shading === THREE.FlatShading)
                    for (var n = 0, a = 3 * e.count; a > n; n += 9) {
                        var o = e.normalArray,
                            s = (o[n + 0] + o[n + 3] + o[n + 6]) / 3,
                            c = (o[n + 1] + o[n + 4] + o[n + 7]) / 3,
                            h = (o[n + 2] + o[n + 5] + o[n + 8]) / 3;
                        o[n + 0] = s, o[n + 1] = c, o[n + 2] = h, o[n + 3] = s, o[n + 4] = c, o[n + 5] = h, o[n + 6] = s, o[n + 7] = c, o[n + 8] = h
                    }
                ce.bufferData(ce.ARRAY_BUFFER, e.normalArray, ce.DYNAMIC_DRAW), pe.enableAttribute(t.normal), ce.vertexAttribPointer(t.normal, 3, ce.FLOAT, !1, 0, 0)
            }
            e.hasUvs && i.map && (ce.bindBuffer(ce.ARRAY_BUFFER, r.uv), ce.bufferData(ce.ARRAY_BUFFER, e.uvArray, ce.DYNAMIC_DRAW), pe.enableAttribute(t.uv), ce.vertexAttribPointer(t.uv, 2, ce.FLOAT, !1, 0, 0)), e.hasColors && i.vertexColors !== THREE.NoColors && (ce.bindBuffer(ce.ARRAY_BUFFER, r.color), ce.bufferData(ce.ARRAY_BUFFER, e.colorArray, ce.DYNAMIC_DRAW), pe.enableAttribute(t.color), ce.vertexAttribPointer(t.color, 3, ce.FLOAT, !1, 0, 0)), pe.disableUnusedAttributes(), ce.drawArrays(ce.TRIANGLES, 0, e.count), e.count = 0
        }, this.renderBufferDirect = function(e, t, i, r, n, a) {
            f(r);
            var o = E(e, t, r, n),
                c = !1;
            if (e = i.id + "_" + o.id + "_" + r.wireframe, e !== $ && ($ = e, c = !0), t = n.morphTargetInfluences, void 0 !== t) {
                e = [];
                for (var h = 0, c = t.length; c > h; h++) {
                    var l = t[h];
                    e.push([l, h])
                }
                e.sort(s), 8 < e.length && (e.length = 8);
                for (var u = i.morphAttributes, h = 0, c = e.length; c > h; h++) l = e[h], C[h] = l[0], 0 !== l[0] ? (t = l[1], !0 === r.morphTargets && u.position && i.addAttribute("morphTarget" + h, u.position[t]), !0 === r.morphNormals && u.normal && i.addAttribute("morphNormal" + h, u.normal[t])) : (!0 === r.morphTargets && i.removeAttribute("morphTarget" + h), !0 === r.morphNormals && i.removeAttribute("morphNormal" + h));
                o.getUniforms().setValue(ce, "morphTargetInfluences", C), c = !0
            }
            if (t = i.index, h = i.attributes.position, !0 === r.wireframe && (t = Ee.getWireframeAttribute(i)), null !== t ? (e = ve, e.setIndex(t)) : e = Te, c) {
                var c = void 0,
                    p;
                if (i instanceof THREE.InstancedBufferGeometry && (p = le.get("ANGLE_instanced_arrays"), null === p)) console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                else {
                    void 0 === c && (c = 0), pe.initAttributes();
                    var l = i.attributes,
                        o = o.getAttributes(),
                        u = r.defaultAttributeValues,
                        d;
                    for (d in o) {
                        var m = o[d];
                        if (m >= 0) {
                            var g = l[d];
                            if (void 0 !== g) {
                                var T = ce.FLOAT,
                                    v = g.array,
                                    y = g.normalized;
                                v instanceof Float32Array ? T = ce.FLOAT : v instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : v instanceof Uint16Array ? T = ce.UNSIGNED_SHORT : v instanceof Int16Array ? T = ce.SHORT : v instanceof Uint32Array ? T = ce.UNSIGNED_INT : v instanceof Int32Array ? T = ce.INT : v instanceof Int8Array ? T = ce.BYTE : v instanceof Uint8Array && (T = ce.UNSIGNED_BYTE);
                                var v = g.itemSize,
                                    R = Ee.getAttributeBuffer(g);
                                if (g instanceof THREE.InterleavedBufferAttribute) {
                                    var x = g.data,
                                        H = x.stride,
                                        g = g.offset;
                                    x instanceof THREE.InstancedInterleavedBuffer ? (pe.enableAttributeAndDivisor(m, x.meshPerAttribute, p), void 0 === i.maxInstancedCount && (i.maxInstancedCount = x.meshPerAttribute * x.count)) : pe.enableAttribute(m), ce.bindBuffer(ce.ARRAY_BUFFER, R), ce.vertexAttribPointer(m, v, T, y, H * x.array.BYTES_PER_ELEMENT, (c * H + g) * x.array.BYTES_PER_ELEMENT)
                                } else g instanceof THREE.InstancedBufferAttribute ? (pe.enableAttributeAndDivisor(m, g.meshPerAttribute, p), void 0 === i.maxInstancedCount && (i.maxInstancedCount = g.meshPerAttribute * g.count)) : pe.enableAttribute(m), ce.bindBuffer(ce.ARRAY_BUFFER, R), ce.vertexAttribPointer(m, v, T, y, 0, c * v * g.array.BYTES_PER_ELEMENT)
                            } else if (void 0 !== u && (T = u[d], void 0 !== T)) switch (T.length) {
                                case 2:
                                    ce.vertexAttrib2fv(m, T);
                                    break;
                                case 3:
                                    ce.vertexAttrib3fv(m, T);
                                    break;
                                case 4:
                                    ce.vertexAttrib4fv(m, T);
                                    break;
                                default:
                                    ce.vertexAttrib1fv(m, T)
                            }
                        }
                    }
                    pe.disableUnusedAttributes()
                }
                null !== t && ce.bindBuffer(ce.ELEMENT_ARRAY_BUFFER, Ee.getAttributeBuffer(t))
            }
            if (p = 1 / 0, null !== t ? p = t.count : void 0 !== h && (p = h.count), d = i.drawRange.start, t = i.drawRange.count, h = null !== a ? a.start : 0, c = null !== a ? a.count : 1 / 0, a = Math.max(0, d, h), p = Math.min(0 + p, d + t, h + c) - 1, p = Math.max(0, p - a + 1), n instanceof THREE.Mesh)
                if (!0 === r.wireframe) pe.setLineWidth(r.wireframeLinewidth * (null === I ? q : 1)), e.setMode(ce.LINES);
                else switch (n.drawMode) {
                    case THREE.TrianglesDrawMode:
                        e.setMode(ce.TRIANGLES);
                        break;
                    case THREE.TriangleStripDrawMode:
                        e.setMode(ce.TRIANGLE_STRIP);
                        break;
                    case THREE.TriangleFanDrawMode:
                        e.setMode(ce.TRIANGLE_FAN)
                } else n instanceof THREE.Line ? (r = r.linewidth, void 0 === r && (r = 1), pe.setLineWidth(r * (null === I ? q : 1)), n instanceof THREE.LineSegments ? e.setMode(ce.LINES) : e.setMode(ce.LINE_STRIP)) : n instanceof THREE.Points && e.setMode(ce.POINTS);
            i instanceof THREE.InstancedBufferGeometry ? 0 < i.maxInstancedCount && e.renderInstances(i, a, p) : e.render(a, p)
        }, this.render = function(e, i, r, n) {
            if (!1 == i instanceof THREE.Camera) console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            else {
                var a = e.fog;
                $ = "", F = -1, N = null, !0 === e.autoUpdate && e.updateMatrixWorld(), null === i.parent && i.updateMatrixWorld(), i.matrixWorldInverse.getInverse(i.matrixWorld), ne.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), J.setFromMatrix(ne), M.length = 0, L = S = -1, P.length = 0, D.length = 0, ie = this.localClippingEnabled, te = ee.init(this.clippingPlanes, ie, i), p(e, i), w.length = S + 1, A.length = L + 1, !0 === B.sortObjects && (w.sort(c), A.sort(h)), te && ee.beginShadows();
                for (var o = M, s = 0, l = 0, u = o.length; u > l; l++) {
                    var f = o[l];
                    f.castShadow && (oe.shadows[s++] = f)
                }
                oe.shadows.length = s, be.render(e, i);
                for (var o = M, E = f = 0, m = 0, g, T, v, y, R = i.matrixWorldInverse, x = 0, H = 0, b = 0, _ = 0, s = 0, l = o.length; l > s; s++)
                    if (u = o[s], g = u.color, T = u.intensity, v = u.distance, y = u.shadow && u.shadow.map ? u.shadow.map.texture : null, u instanceof THREE.AmbientLight) f += g.r * T, E += g.g * T, m += g.b * T;
                    else if (u instanceof THREE.DirectionalLight) {
                    var C = ge.get(u);
                    C.color.copy(u.color).multiplyScalar(u.intensity), C.direction.setFromMatrixPosition(u.matrixWorld), ae.setFromMatrixPosition(u.target.matrixWorld), C.direction.sub(ae), C.direction.transformDirection(R), (C.shadow = u.castShadow) && (C.shadowBias = u.shadow.bias, C.shadowRadius = u.shadow.radius, C.shadowMapSize = u.shadow.mapSize), oe.directionalShadowMap[x] = y, oe.directionalShadowMatrix[x] = u.shadow.matrix, oe.directional[x++] = C
                } else u instanceof THREE.SpotLight ? (C = ge.get(u), C.position.setFromMatrixPosition(u.matrixWorld), C.position.applyMatrix4(R), C.color.copy(g).multiplyScalar(T), C.distance = v, C.direction.setFromMatrixPosition(u.matrixWorld), ae.setFromMatrixPosition(u.target.matrixWorld), C.direction.sub(ae), C.direction.transformDirection(R), C.coneCos = Math.cos(u.angle), C.penumbraCos = Math.cos(u.angle * (1 - u.penumbra)), C.decay = 0 === u.distance ? 0 : u.decay, (C.shadow = u.castShadow) && (C.shadowBias = u.shadow.bias, C.shadowRadius = u.shadow.radius, C.shadowMapSize = u.shadow.mapSize), oe.spotShadowMap[b] = y, oe.spotShadowMatrix[b] = u.shadow.matrix, oe.spot[b++] = C) : u instanceof THREE.PointLight ? (C = ge.get(u), C.position.setFromMatrixPosition(u.matrixWorld), C.position.applyMatrix4(R), C.color.copy(u.color).multiplyScalar(u.intensity), C.distance = u.distance, C.decay = 0 === u.distance ? 0 : u.decay, (C.shadow = u.castShadow) && (C.shadowBias = u.shadow.bias, C.shadowRadius = u.shadow.radius, C.shadowMapSize = u.shadow.mapSize), oe.pointShadowMap[H] = y, void 0 === oe.pointShadowMatrix[H] && (oe.pointShadowMatrix[H] = new THREE.Matrix4), ae.setFromMatrixPosition(u.matrixWorld).negate(), oe.pointShadowMatrix[H].identity().setPosition(ae), oe.point[H++] = C) : u instanceof THREE.HemisphereLight && (C = ge.get(u), C.direction.setFromMatrixPosition(u.matrixWorld), C.direction.transformDirection(R), C.direction.normalize(), C.skyColor.copy(u.color).multiplyScalar(T), C.groundColor.copy(u.groundColor).multiplyScalar(T), oe.hemi[_++] = C);
                oe.ambient[0] = f, oe.ambient[1] = E, oe.ambient[2] = m, oe.directional.length = x, oe.spot.length = b, oe.point.length = H, oe.hemi.length = _, oe.hash = x + "," + H + "," + b + "," + _ + "," + oe.shadows.length, te && ee.endShadows(), se.calls = 0, se.vertices = 0, se.faces = 0, se.points = 0, void 0 === r && (r = null), this.setRenderTarget(r), o = e.background, null === o ? t(j.r, j.g, j.b, W) : o instanceof THREE.Color && t(o.r, o.g, o.b, 1), (this.autoClear || n) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), o instanceof THREE.CubeTexture ? (Re.projectionMatrix.copy(i.projectionMatrix), Re.matrixWorld.extractRotation(i.matrixWorld), Re.matrixWorldInverse.getInverse(Re.matrixWorld), He.material.uniforms.tCube.value = o, He.modelViewMatrix.multiplyMatrices(Re.matrixWorldInverse, He.matrixWorld), Ee.update(He), B.renderBufferDirect(Re, null, He.geometry, He.material, He, null)) : o instanceof THREE.Texture && (xe.material.map = o, Ee.update(xe), B.renderBufferDirect(ye, null, xe.geometry, xe.material, xe, null)), e.overrideMaterial ? (n = e.overrideMaterial, d(w, i, a, n), d(A, i, a, n)) : (pe.setBlending(THREE.NoBlending), d(w, i, a), d(A, i, a)), _e.render(e, i), Me.render(e, i, z), r && fe.updateRenderTargetMipmap(r), pe.setDepthTest(!0), pe.setDepthWrite(!0), pe.setColorWrite(!0)
            }
        }, this.setFaceCulling = function(e, t) {
            pe.setCullFace(e), pe.setFlipSided(t === THREE.FrontFaceDirectionCW)
        }, this.allocTextureUnit = function() {
            var e = k;
            return e >= ue.maxTextures && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + ue.maxTextures), k += 1, e
        }, this.setTexture2D = function() {
            var e = !1;
            return function(t, i) {
                t instanceof THREE.WebGLRenderTarget && (e || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), e = !0), t = t.texture), fe.setTexture2D(t, i)
            }
        }(), this.setTexture = function() {
            var e = !1;
            return function(t, i) {
                e || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), e = !0), fe.setTexture2D(t, i)
            }
        }(), this.setTextureCube = function() {
            var e = !1;
            return function(t, i) {
                t instanceof THREE.WebGLRenderTargetCube && (e || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), e = !0), t = t.texture), t instanceof THREE.CubeTexture || Array.isArray(t.image) && 6 === t.image.length ? fe.setTextureCube(t, i) : fe.setTextureCubeDynamic(t, i)
            }
        }(), this.getCurrentRenderTarget = function() {
            return I
        }, this.setRenderTarget = function(e) {
            (I = e) && void 0 === de.get(e).__webglFramebuffer && fe.setupRenderTarget(e);
            var t = e instanceof THREE.WebGLRenderTargetCube,
                i;
            e ? (i = de.get(e), i = t ? i.__webglFramebuffer[e.activeCubeFace] : i.__webglFramebuffer, G.copy(e.scissor), V = e.scissorTest, z.copy(e.viewport)) : (i = null, G.copy(Z).multiplyScalar(q), V = Q, z.copy(K).multiplyScalar(q)), O !== i && (ce.bindFramebuffer(ce.FRAMEBUFFER, i), O = i), pe.scissor(G), pe.setScissorTest(V), pe.viewport(z), t && (t = de.get(e.texture), ce.framebufferTexture2D(ce.FRAMEBUFFER, ce.COLOR_ATTACHMENT0, ce.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, t.__webglTexture, e.activeMipMapLevel))
        }, this.readRenderTargetPixels = function(e, t, i, r, n, a) {
            if (!1 == e instanceof THREE.WebGLRenderTarget) console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            else {
                var o = de.get(e).__webglFramebuffer;
                if (o) {
                    var s = !1;
                    o !== O && (ce.bindFramebuffer(ce.FRAMEBUFFER, o), s = !0);
                    try {
                        var c = e.texture;
                        c.format !== THREE.RGBAFormat && g(c.format) !== ce.getParameter(ce.IMPLEMENTATION_COLOR_READ_FORMAT) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : c.type === THREE.UnsignedByteType || g(c.type) === ce.getParameter(ce.IMPLEMENTATION_COLOR_READ_TYPE) || c.type === THREE.FloatType && le.get("WEBGL_color_buffer_float") || c.type === THREE.HalfFloatType && le.get("EXT_color_buffer_half_float") ? ce.checkFramebufferStatus(ce.FRAMEBUFFER) === ce.FRAMEBUFFER_COMPLETE ? t >= 0 && t <= e.width - r && i >= 0 && i <= e.height - n && ce.readPixels(t, i, r, n, g(c.format), g(c.type), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                    } finally {
                        s && ce.bindFramebuffer(ce.FRAMEBUFFER, O)
                    }
                }
            }
        }
    }, THREE.WebGLRenderTarget = function(e, t, i) {
        this.uuid = THREE.Math.generateUUID(), this.width = e, this.height = t, this.scissor = new THREE.Vector4(0, 0, e, t), this.scissorTest = !1, this.viewport = new THREE.Vector4(0, 0, e, t), i = i || {}, void 0 === i.minFilter && (i.minFilter = THREE.LinearFilter), this.texture = new THREE.Texture(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.depthBuffer = void 0 !== i.depthBuffer ? i.depthBuffer : !0, this.stencilBuffer = void 0 !== i.stencilBuffer ? i.stencilBuffer : !0, this.depthTexture = null
    }, Object.assign(THREE.WebGLRenderTarget.prototype, THREE.EventDispatcher.prototype, {
        setSize: function(e, t) {
            (this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), THREE.WebGLRenderTargetCube = function(e, t, i) {
        THREE.WebGLRenderTarget.call(this, e, t, i), this.activeMipMapLevel = this.activeCubeFace = 0
    }, THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype), THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube,
    THREE.WebGLBufferRenderer = function(e, t, i) {
        var r;
        this.setMode = function(e) {
            r = e
        }, this.render = function(t, n) {
            e.drawArrays(r, t, n), i.calls++, i.vertices += n, r === e.TRIANGLES && (i.faces += n / 3)
        }, this.renderInstances = function(n) {
            var a = t.get("ANGLE_instanced_arrays");
            if (null === a) console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            else {
                var o = n.attributes.position,
                    s = 0,
                    s = o instanceof THREE.InterleavedBufferAttribute ? o.data.count : o.count;
                a.drawArraysInstancedANGLE(r, 0, s, n.maxInstancedCount), i.calls++, i.vertices += s * n.maxInstancedCount, r === e.TRIANGLES && (i.faces += n.maxInstancedCount * s / 3)
            }
        }
    }, THREE.WebGLClipping = function() {
        function e() {
            h.value !== r && (h.value = r, h.needsUpdate = n > 0), i.numPlanes = n
        }

        function t(e, t, r, n) {
            var a = null !== e ? e.length : 0,
                o = null;
            if (0 !== a) {
                if (o = h.value, !0 !== n || null === o)
                    for (n = r + 4 * a, t = t.matrixWorldInverse, c.getNormalMatrix(t), (null === o || o.length < n) && (o = new Float32Array(n)), n = 0; n !== a; ++n, r += 4) s.copy(e[n]).applyMatrix4(t, c), s.normal.toArray(o, r), o[r + 3] = s.constant;
                h.value = o, h.needsUpdate = !0
            }
            return i.numPlanes = a, o
        }
        var i = this,
            r = null,
            n = 0,
            a = !1,
            o = !1,
            s = new THREE.Plane,
            c = new THREE.Matrix3,
            h = {
                value: null,
                needsUpdate: !1
            };
        this.uniform = h, this.numPlanes = 0, this.init = function(e, i, o) {
            var s = 0 !== e.length || i || 0 !== n || a;
            return a = i, r = t(e, o, 0), n = e.length, s
        }, this.beginShadows = function() {
            o = !0, t(null)
        }, this.endShadows = function() {
            o = !1, e()
        }, this.setState = function(i, s, c, l, u) {
            if (!a || null === i || 0 === i.length || o && !s) o ? t(null) : e();
            else {
                s = o ? 0 : n;
                var p = 4 * s,
                    d = l.clippingState || null;
                for (h.value = d, d = t(i, c, p, u), i = 0; i !== p; ++i) d[i] = r[i];
                l.clippingState = d, this.numPlanes += s
            }
        }
    }, THREE.WebGLIndexedBufferRenderer = function(e, t, i) {
        var r, n, a;
        this.setMode = function(e) {
            r = e
        }, this.setIndex = function(i) {
            i.array instanceof Uint32Array && t.get("OES_element_index_uint") ? (n = e.UNSIGNED_INT, a = 4) : (n = e.UNSIGNED_SHORT, a = 2)
        }, this.render = function(t, o) {
            e.drawElements(r, o, n, t * a), i.calls++, i.vertices += o, r === e.TRIANGLES && (i.faces += o / 3)
        }, this.renderInstances = function(o, s, c) {
            var h = t.get("ANGLE_instanced_arrays");
            null === h ? console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (h.drawElementsInstancedANGLE(r, c, n, s * a, o.maxInstancedCount), i.calls++, i.vertices += c * o.maxInstancedCount, r === e.TRIANGLES && (i.faces += o.maxInstancedCount * c / 3))
        }
    }, THREE.WebGLExtensions = function(e) {
        var t = {};
        this.get = function(i) {
            if (void 0 !== t[i]) return t[i];
            var r;
            switch (i) {
                case "WEBGL_depth_texture":
                    r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                case "WEBGL_compressed_texture_etc1":
                    r = e.getExtension("WEBGL_compressed_texture_etc1");
                    break;
                default:
                    r = e.getExtension(i)
            }
            return null === r && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), t[i] = r
        }
    }, THREE.WebGLCapabilities = function(e, t, i) {
        function r(t) {
            if ("highp" === t) {
                if (0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision) return "highp";
                t = "mediump"
            }
            return "mediump" === t && 0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision ? "mediump" : "lowp"
        }
        var n;
        this.getMaxAnisotropy = function() {
            if (void 0 !== n) return n;
            var i = t.get("EXT_texture_filter_anisotropic");
            return n = null !== i ? e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }, this.getMaxPrecision = r, this.precision = void 0 !== i.precision ? i.precision : "highp", this.logarithmicDepthBuffer = void 0 !== i.logarithmicDepthBuffer ? i.logarithmicDepthBuffer : !1, this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), this.maxVertexTextures = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.maxCubemapSize = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), this.maxAttributes = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.maxVertexUniforms = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), this.maxVaryings = e.getParameter(e.MAX_VARYING_VECTORS), this.maxFragmentUniforms = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), this.vertexTextures = 0 < this.maxVertexTextures, this.floatFragmentTextures = !!t.get("OES_texture_float"), this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures, i = r(this.precision), i !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", i, "instead."), this.precision = i), this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!t.get("EXT_frag_depth"))
    }, THREE.WebGLGeometries = function(e, t, i) {
        function r(e) {
            var o = e.target;
            e = a[o.id], null !== e.index && n(e.index);
            var s = e.attributes,
                c;
            for (c in s) n(s[c]);
            o.removeEventListener("dispose", r), delete a[o.id], c = t.get(o), c.wireframe && n(c.wireframe), t["delete"](o), o = t.get(e), o.wireframe && n(o.wireframe), t["delete"](e), i.memory.geometries--
        }

        function n(i) {
            var r;
            r = i instanceof THREE.InterleavedBufferAttribute ? t.get(i.data).__webglBuffer : t.get(i).__webglBuffer, void 0 !== r && (e.deleteBuffer(r), i instanceof THREE.InterleavedBufferAttribute ? t["delete"](i.data) : t["delete"](i))
        }
        var a = {};
        this.get = function(e) {
            var t = e.geometry;
            if (void 0 !== a[t.id]) return a[t.id];
            t.addEventListener("dispose", r);
            var n;
            return t instanceof THREE.BufferGeometry ? n = t : t instanceof THREE.Geometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new THREE.BufferGeometry).setFromObject(e)), n = t._bufferGeometry), a[t.id] = n, i.memory.geometries++, n
        }
    }, THREE.WebGLLights = function() {
        var e = {};
        this.get = function(t) {
            if (void 0 !== e[t.id]) return e[t.id];
            var i;
            switch (t.type) {
                case "DirectionalLight":
                    i = {
                        direction: new THREE.Vector3,
                        color: new THREE.Color,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new THREE.Vector2
                    };
                    break;
                case "SpotLight":
                    i = {
                        position: new THREE.Vector3,
                        direction: new THREE.Vector3,
                        color: new THREE.Color,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new THREE.Vector2
                    };
                    break;
                case "PointLight":
                    i = {
                        position: new THREE.Vector3,
                        color: new THREE.Color,
                        distance: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new THREE.Vector2
                    };
                    break;
                case "HemisphereLight":
                    i = {
                        direction: new THREE.Vector3,
                        skyColor: new THREE.Color,
                        groundColor: new THREE.Color
                    }
            }
            return e[t.id] = i
        }
    }, THREE.WebGLObjects = function(e, t, i) {
        function r(i, r) {
            var n = i instanceof THREE.InterleavedBufferAttribute ? i.data : i,
                a = t.get(n);
            void 0 === a.__webglBuffer ? (a.__webglBuffer = e.createBuffer(), e.bindBuffer(r, a.__webglBuffer), e.bufferData(r, n.array, n.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW), a.version = n.version) : a.version !== n.version && (e.bindBuffer(r, a.__webglBuffer), !1 === n.dynamic || -1 === n.updateRange.count ? e.bufferSubData(r, 0, n.array) : 0 === n.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(r, n.updateRange.offset * n.array.BYTES_PER_ELEMENT, n.array.subarray(n.updateRange.offset, n.updateRange.offset + n.updateRange.count)), n.updateRange.count = 0), a.version = n.version)
        }

        function n(e, t, i) {
            if (t > i) {
                var r = t;
                t = i, i = r
            }
            return r = e[t], void 0 === r ? (e[t] = [i], !0) : -1 === r.indexOf(i) ? (r.push(i), !0) : !1
        }
        var a = new THREE.WebGLGeometries(e, t, i);
        this.getAttributeBuffer = function(e) {
            return e instanceof THREE.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
        }, this.getWireframeAttribute = function(i) {
            var a = t.get(i);
            if (void 0 !== a.wireframe) return a.wireframe;
            var o = [],
                s = i.index,
                c = i.attributes;
            if (i = c.position, null !== s)
                for (var c = {}, s = s.array, h = 0, l = s.length; l > h; h += 3) {
                    var u = s[h + 0],
                        p = s[h + 1],
                        d = s[h + 2];
                    n(c, u, p) && o.push(u, p), n(c, p, d) && o.push(p, d), n(c, d, u) && o.push(d, u)
                } else
                    for (s = c.position.array, h = 0, l = s.length / 3 - 1; l > h; h += 3) u = h + 0, p = h + 1, d = h + 2, o.push(u, p, p, d, d, u);
            return o = new THREE.BufferAttribute(new(65535 < i.count ? Uint32Array : Uint16Array)(o), 1), r(o, e.ELEMENT_ARRAY_BUFFER), a.wireframe = o
        }, this.update = function(t) {
            var i = a.get(t);
            t.geometry instanceof THREE.Geometry && i.updateFromObject(t), t = i.index;
            var n = i.attributes;
            null !== t && r(t, e.ELEMENT_ARRAY_BUFFER);
            for (var o in n) r(n[o], e.ARRAY_BUFFER);
            t = i.morphAttributes;
            for (o in t)
                for (var n = t[o], s = 0, c = n.length; c > s; s++) r(n[s], e.ARRAY_BUFFER);
            return i
        }
    }, THREE.WebGLProgram = function() {
        function e(e) {
            switch (e) {
                case THREE.LinearEncoding:
                    return ["Linear", "( value )"];
                case THREE.sRGBEncoding:
                    return ["sRGB", "( value )"];
                case THREE.RGBEEncoding:
                    return ["RGBE", "( value )"];
                case THREE.RGBM7Encoding:
                    return ["RGBM", "( value, 7.0 )"];
                case THREE.RGBM16Encoding:
                    return ["RGBM", "( value, 16.0 )"];
                case THREE.RGBDEncoding:
                    return ["RGBD", "( value, 256.0 )"];
                case THREE.GammaEncoding:
                    return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
                default:
                    throw Error("unsupported encoding: " + e)
            }
        }

        function t(t, i) {
            var r = e(i);
            return "vec4 " + t + "( vec4 value ) { return " + r[0] + "ToLinear" + r[1] + "; }"
        }

        function i(t, i) {
            var r = e(i);
            return "vec4 " + t + "( vec4 value ) { return LinearTo" + r[0] + r[1] + "; }"
        }

        function r(e, t) {
            var i;
            switch (t) {
                case THREE.LinearToneMapping:
                    i = "Linear";
                    break;
                case THREE.ReinhardToneMapping:
                    i = "Reinhard";
                    break;
                case THREE.Uncharted2ToneMapping:
                    i = "Uncharted2";
                    break;
                case THREE.CineonToneMapping:
                    i = "OptimizedCineon";
                    break;
                default:
                    throw Error("unsupported toneMapping: " + t)
            }
            return "vec3 " + e + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
        }

        function n(e, t, i) {
            return e = e || {}, [e.derivatives || t.envMapCubeUV || t.bumpMap || t.normalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(o).join("\n")
        }

        function a(e) {
            var t = [],
                i;
            for (i in e) {
                var r = e[i];
                !1 !== r && t.push("#define " + i + " " + r)
            }
            return t.join("\n")
        }

        function o(e) {
            return "" !== e
        }

        function s(e, t) {
            return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
        }

        function c(e) {
            return e.replace(/#include +<([\w\d.]+)>/g, function(e, t) {
                var i = THREE.ShaderChunk[t];
                if (void 0 === i) throw Error("Can not resolve #include <" + t + ">");
                return c(i)
            })
        }

        function h(e) {
            return e.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(e, t, i, r) {
                for (e = "", t = parseInt(t); t < parseInt(i); t++) e += r.replace(/\[ i \]/g, "[ " + t + " ]");
                return e
            })
        }
        var l = 0;
        return function(e, u, p, d) {
            var f = e.context,
                E = p.extensions,
                m = p.defines,
                g = p.__webglShader.vertexShader,
                T = p.__webglShader.fragmentShader,
                v = "SHADOWMAP_TYPE_BASIC";
            d.shadowMapType === THREE.PCFShadowMap ? v = "SHADOWMAP_TYPE_PCF" : d.shadowMapType === THREE.PCFSoftShadowMap && (v = "SHADOWMAP_TYPE_PCF_SOFT");
            var y = "ENVMAP_TYPE_CUBE",
                R = "ENVMAP_MODE_REFLECTION",
                x = "ENVMAP_BLENDING_MULTIPLY";
            if (d.envMap) {
                switch (p.envMap.mapping) {
                    case THREE.CubeReflectionMapping:
                    case THREE.CubeRefractionMapping:
                        y = "ENVMAP_TYPE_CUBE";
                        break;
                    case THREE.CubeUVReflectionMapping:
                    case THREE.CubeUVRefractionMapping:
                        y = "ENVMAP_TYPE_CUBE_UV";
                        break;
                    case THREE.EquirectangularReflectionMapping:
                    case THREE.EquirectangularRefractionMapping:
                        y = "ENVMAP_TYPE_EQUIREC";
                        break;
                    case THREE.SphericalReflectionMapping:
                        y = "ENVMAP_TYPE_SPHERE"
                }
                switch (p.envMap.mapping) {
                    case THREE.CubeRefractionMapping:
                    case THREE.EquirectangularRefractionMapping:
                        R = "ENVMAP_MODE_REFRACTION"
                }
                switch (p.combine) {
                    case THREE.MultiplyOperation:
                        x = "ENVMAP_BLENDING_MULTIPLY";
                        break;
                    case THREE.MixOperation:
                        x = "ENVMAP_BLENDING_MIX";
                        break;
                    case THREE.AddOperation:
                        x = "ENVMAP_BLENDING_ADD"
                }
            }
            var H = 0 < e.gammaFactor ? e.gammaFactor : 1,
                E = n(E, d, e.extensions),
                b = a(m),
                _ = f.createProgram();
            p instanceof THREE.RawShaderMaterial ? (m = [b].filter(o).join("\n"), v = [b].filter(o).join("\n")) : (m = ["precision " + d.precision + " float;", "precision " + d.precision + " int;", "#define SHADER_NAME " + p.__webglShader.name, b, d.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + H, "#define MAX_BONES " + d.maxBones, d.map ? "#define USE_MAP" : "", d.envMap ? "#define USE_ENVMAP" : "", d.envMap ? "#define " + R : "", d.lightMap ? "#define USE_LIGHTMAP" : "", d.aoMap ? "#define USE_AOMAP" : "", d.emissiveMap ? "#define USE_EMISSIVEMAP" : "", d.bumpMap ? "#define USE_BUMPMAP" : "", d.normalMap ? "#define USE_NORMALMAP" : "", d.displacementMap && d.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", d.specularMap ? "#define USE_SPECULARMAP" : "", d.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", d.metalnessMap ? "#define USE_METALNESSMAP" : "", d.alphaMap ? "#define USE_ALPHAMAP" : "", d.vertexColors ? "#define USE_COLOR" : "", d.flatShading ? "#define FLAT_SHADED" : "", d.skinning ? "#define USE_SKINNING" : "", d.useVertexTexture ? "#define BONE_TEXTURE" : "", d.morphTargets ? "#define USE_MORPHTARGETS" : "", d.morphNormals && !1 === d.flatShading ? "#define USE_MORPHNORMALS" : "", d.doubleSided ? "#define DOUBLE_SIDED" : "", d.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + d.numClippingPlanes, d.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", d.shadowMapEnabled ? "#define " + v : "", d.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", d.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", d.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(o).join("\n"), v = [E, "precision " + d.precision + " float;", "precision " + d.precision + " int;", "#define SHADER_NAME " + p.__webglShader.name, b, d.alphaTest ? "#define ALPHATEST " + d.alphaTest : "", "#define GAMMA_FACTOR " + H, d.useFog && d.fog ? "#define USE_FOG" : "", d.useFog && d.fogExp ? "#define FOG_EXP2" : "", d.map ? "#define USE_MAP" : "", d.envMap ? "#define USE_ENVMAP" : "", d.envMap ? "#define " + y : "", d.envMap ? "#define " + R : "", d.envMap ? "#define " + x : "", d.lightMap ? "#define USE_LIGHTMAP" : "", d.aoMap ? "#define USE_AOMAP" : "", d.emissiveMap ? "#define USE_EMISSIVEMAP" : "", d.bumpMap ? "#define USE_BUMPMAP" : "", d.normalMap ? "#define USE_NORMALMAP" : "", d.specularMap ? "#define USE_SPECULARMAP" : "", d.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", d.metalnessMap ? "#define USE_METALNESSMAP" : "", d.alphaMap ? "#define USE_ALPHAMAP" : "", d.vertexColors ? "#define USE_COLOR" : "", d.flatShading ? "#define FLAT_SHADED" : "", d.doubleSided ? "#define DOUBLE_SIDED" : "", d.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + d.numClippingPlanes, d.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", d.shadowMapEnabled ? "#define " + v : "", d.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", d.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", d.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", d.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", d.envMap && e.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", d.toneMapping !== THREE.NoToneMapping ? "#define TONE_MAPPING" : "", d.toneMapping !== THREE.NoToneMapping ? THREE.ShaderChunk.tonemapping_pars_fragment : "", d.toneMapping !== THREE.NoToneMapping ? r("toneMapping", d.toneMapping) : "", d.outputEncoding || d.mapEncoding || d.envMapEncoding || d.emissiveMapEncoding ? THREE.ShaderChunk.encodings_pars_fragment : "", d.mapEncoding ? t("mapTexelToLinear", d.mapEncoding) : "", d.envMapEncoding ? t("envMapTexelToLinear", d.envMapEncoding) : "", d.emissiveMapEncoding ? t("emissiveMapTexelToLinear", d.emissiveMapEncoding) : "", d.outputEncoding ? i("linearToOutputTexel", d.outputEncoding) : "", d.depthPacking ? "#define DEPTH_PACKING " + p.depthPacking : "", "\n"].filter(o).join("\n")), g = c(g, d), g = s(g, d), T = c(T, d), T = s(T, d), !1 == p instanceof THREE.ShaderMaterial && (g = h(g), T = h(T)), T = v + T, g = THREE.WebGLShader(f, f.VERTEX_SHADER, m + g), T = THREE.WebGLShader(f, f.FRAGMENT_SHADER, T), f.attachShader(_, g), f.attachShader(_, T), void 0 !== p.index0AttributeName ? f.bindAttribLocation(_, 0, p.index0AttributeName) : !0 === d.morphTargets && f.bindAttribLocation(_, 0, "position"), f.linkProgram(_), d = f.getProgramInfoLog(_), y = f.getShaderInfoLog(g), R = f.getShaderInfoLog(T), H = x = !0, !1 === f.getProgramParameter(_, f.LINK_STATUS) ? (x = !1, console.error("THREE.WebGLProgram: shader error: ", f.getError(), "gl.VALIDATE_STATUS", f.getProgramParameter(_, f.VALIDATE_STATUS), "gl.getProgramInfoLog", d, y, R)) : "" !== d ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", d) : ("" === y || "" === R) && (H = !1), H && (this.diagnostics = {
                runnable: x,
                material: p,
                programLog: d,
                vertexShader: {
                    log: y,
                    prefix: m
                },
                fragmentShader: {
                    log: R,
                    prefix: v
                }
            }), f.deleteShader(g), f.deleteShader(T);
            var M;
            this.getUniforms = function() {
                return void 0 === M && (M = new THREE.WebGLUniforms(f, _, e)), M
            };
            var w;
            return this.getAttributes = function() {
                if (void 0 === w) {
                    for (var e = {}, t = f.getProgramParameter(_, f.ACTIVE_ATTRIBUTES), i = 0; t > i; i++) {
                        var r = f.getActiveAttrib(_, i).name;
                        e[r] = f.getAttribLocation(_, r)
                    }
                    w = e
                }
                return w
            }, this.destroy = function() {
                f.deleteProgram(_), this.program = void 0
            }, Object.defineProperties(this, {
                uniforms: {
                    get: function() {
                        return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                    }
                },
                attributes: {
                    get: function() {
                        return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                    }
                }
            }), this.id = l++, this.code = u, this.usedTimes = 1, this.program = _, this.vertexShader = g, this.fragmentShader = T, this
        }
    }(), THREE.WebGLPrograms = function(e, t) {
        function i(e, t) {
            var i;
            return e ? e instanceof THREE.Texture ? i = e.encoding : e instanceof THREE.WebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), i = e.texture.encoding) : i = THREE.LinearEncoding, i === THREE.LinearEncoding && t && (i = THREE.GammaEncoding), i
        }
        var r = [],
            n = {
                MeshDepthMaterial: "depth",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points"
            },
            a = "precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes depthPacking".split(" ");
        this.getParameters = function(r, a, o, s, c) {
            var h = n[r.type],
                l;
            t.floatVertexTextures && c && c.skeleton && c.skeleton.useVertexTexture ? l = 1024 : (l = Math.floor((t.maxVertexUniforms - 20) / 4), void 0 !== c && c instanceof THREE.SkinnedMesh && (l = Math.min(c.skeleton.bones.length, l), l < c.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + c.skeleton.bones.length + ", this GPU supports just " + l + " (try OpenGL instead of ANGLE)")));
            var u = e.getPrecision();
            null !== r.precision && (u = t.getMaxPrecision(r.precision), u !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", u, "instead."));
            var p = e.getCurrentRenderTarget();
            return {
                shaderID: h,
                precision: u,
                supportsVertexTextures: t.vertexTextures,
                outputEncoding: i(p ? p.texture : null, e.gammaOutput),
                map: !!r.map,
                mapEncoding: i(r.map, e.gammaInput),
                envMap: !!r.envMap,
                envMapMode: r.envMap && r.envMap.mapping,
                envMapEncoding: i(r.envMap, e.gammaInput),
                envMapCubeUV: !!r.envMap && (r.envMap.mapping === THREE.CubeUVReflectionMapping || r.envMap.mapping === THREE.CubeUVRefractionMapping),
                lightMap: !!r.lightMap,
                aoMap: !!r.aoMap,
                emissiveMap: !!r.emissiveMap,
                emissiveMapEncoding: i(r.emissiveMap, e.gammaInput),
                bumpMap: !!r.bumpMap,
                normalMap: !!r.normalMap,
                displacementMap: !!r.displacementMap,
                roughnessMap: !!r.roughnessMap,
                metalnessMap: !!r.metalnessMap,
                specularMap: !!r.specularMap,
                alphaMap: !!r.alphaMap,
                combine: r.combine,
                vertexColors: r.vertexColors,
                fog: !!o,
                useFog: r.fog,
                fogExp: o instanceof THREE.FogExp2,
                flatShading: r.shading === THREE.FlatShading,
                sizeAttenuation: r.sizeAttenuation,
                logarithmicDepthBuffer: t.logarithmicDepthBuffer,
                skinning: r.skinning,
                maxBones: l,
                useVertexTexture: t.floatVertexTextures && c && c.skeleton && c.skeleton.useVertexTexture,
                morphTargets: r.morphTargets,
                morphNormals: r.morphNormals,
                maxMorphTargets: e.maxMorphTargets,
                maxMorphNormals: e.maxMorphNormals,
                numDirLights: a.directional.length,
                numPointLights: a.point.length,
                numSpotLights: a.spot.length,
                numHemiLights: a.hemi.length,
                numClippingPlanes: s,
                shadowMapEnabled: e.shadowMap.enabled && c.receiveShadow && 0 < a.shadows.length,
                shadowMapType: e.shadowMap.type,
                toneMapping: e.toneMapping,
                physicallyCorrectLights: e.physicallyCorrectLights,
                premultipliedAlpha: r.premultipliedAlpha,
                alphaTest: r.alphaTest,
                doubleSided: r.side === THREE.DoubleSide,
                flipSided: r.side === THREE.BackSide,
                depthPacking: void 0 !== r.depthPacking ? r.depthPacking : !1
            }
        }, this.getProgramCode = function(e, t) {
            var i = [];
            if (t.shaderID ? i.push(t.shaderID) : (i.push(e.fragmentShader), i.push(e.vertexShader)), void 0 !== e.defines)
                for (var r in e.defines) i.push(r), i.push(e.defines[r]);
            for (r = 0; r < a.length; r++) i.push(t[a[r]]);
            return i.join()
        }, this.acquireProgram = function(t, i, n) {
            for (var a, o = 0, s = r.length; s > o; o++) {
                var c = r[o];
                if (c.code === n) {
                    a = c, ++a.usedTimes;
                    break
                }
            }
            return void 0 === a && (a = new THREE.WebGLProgram(e, n, t, i), r.push(a)), a
        }, this.releaseProgram = function(e) {
            if (0 === --e.usedTimes) {
                var t = r.indexOf(e);
                r[t] = r[r.length - 1], r.pop(), e.destroy()
            }
        }, this.programs = r
    }, THREE.WebGLProperties = function() {
        var e = {};
        this.get = function(t) {
            t = t.uuid;
            var i = e[t];
            return void 0 === i && (i = {}, e[t] = i), i
        }, this["delete"] = function(t) {
            delete e[t.uuid]
        }, this.clear = function() {
            e = {}
        }
    }, THREE.WebGLShader = function() {
        function e(e) {
            e = e.split("\n");
            for (var t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
            return e.join("\n")
        }
        return function(t, i, r) {
            var n = t.createShader(i);
            return t.shaderSource(n, r), t.compileShader(n), !1 === t.getShaderParameter(n, t.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", i === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(n), e(r)), n
        }
    }(), THREE.WebGLShadowMap = function(e, t, i, r) {
        function n(t, i, r, n) {
            var a = t.geometry,
                o = null,
                o = m,
                s = t.customDepthMaterial;
            return r && (o = g, s = t.customDistanceMaterial), s ? o = s : (s = !1, i.morphTargets && (a instanceof THREE.BufferGeometry ? s = a.morphAttributes && a.morphAttributes.position && 0 < a.morphAttributes.position.length : a instanceof THREE.Geometry && (s = a.morphTargets && 0 < a.morphTargets.length)), t = t instanceof THREE.SkinnedMesh && i.skinning, a = 0, s && (a |= 1), t && (a |= 2), o = o[a]), e.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length && (s = o.uuid, t = i.uuid, a = T[s], void 0 === a && (a = {}, T[s] = a), s = a[t], void 0 === s && (s = o.clone(), a[t] = s), o = s), o.visible = i.visible, o.wireframe = i.wireframe, t = i.side, w.renderSingleSided && t == THREE.DoubleSide && (t = THREE.FrontSide), w.renderReverseSided && (t === THREE.FrontSide ? t = THREE.BackSide : t === THREE.BackSide && (t = THREE.FrontSide)), o.side = t, o.clipShadows = i.clipShadows, o.clippingPlanes = i.clippingPlanes, o.wireframeLinewidth = i.wireframeLinewidth, o.linewidth = i.linewidth, r && void 0 !== o.uniforms.lightPos && o.uniforms.lightPos.value.copy(n), o
        }

        function a(e, t, i) {
            if (!1 !== e.visible) {
                e.layers.test(t.layers) && (e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.Points) && e.castShadow && (!1 === e.frustumCulled || !0 === c.intersectsObject(e)) && !0 === e.material.visible && (e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, e.matrixWorld), E.push(e)), e = e.children;
                for (var r = 0, n = e.length; n > r; r++) a(e[r], t, i)
            }
        }
        var o = e.context,
            s = e.state,
            c = new THREE.Frustum,
            h = new THREE.Matrix4,
            l = t.shadows,
            u = new THREE.Vector2,
            p = new THREE.Vector2(r.maxTextureSize, r.maxTextureSize),
            d = new THREE.Vector3,
            f = new THREE.Vector3,
            E = [],
            m = Array(4),
            g = Array(4),
            T = {},
            v = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0)],
            y = [new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1)],
            R = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4];
        t = new THREE.MeshDepthMaterial, t.depthPacking = THREE.RGBADepthPacking, t.clipping = !0, r = THREE.ShaderLib.distanceRGBA;
        for (var x = THREE.UniformsUtils.clone(r.uniforms), H = 0; 4 !== H; ++H) {
            var b = 0 !== (1 & H),
                _ = 0 !== (2 & H),
                M = t.clone();
            M.morphTargets = b, M.skinning = _, m[H] = M, b = new THREE.ShaderMaterial({
                defines: {
                    USE_SHADOWMAP: ""
                },
                uniforms: x,
                vertexShader: r.vertexShader,
                fragmentShader: r.fragmentShader,
                morphTargets: b,
                skinning: _,
                clipping: !0
            }), g[H] = b
        }
        var w = this;
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = THREE.PCFShadowMap, this.renderSingleSided = this.renderReverseSided = !0, this.render = function(t, r) {
            if (!1 !== w.enabled && (!1 !== w.autoUpdate || !1 !== w.needsUpdate) && 0 !== l.length) {
                s.clearColor(1, 1, 1, 1), s.disable(o.BLEND), s.setDepthTest(!0), s.setScissorTest(!1);
                for (var m, g, T = 0, x = l.length; x > T; T++) {
                    var H = l[T],
                        b = H.shadow;
                    if (void 0 === b) console.warn("THREE.WebGLShadowMap:", H, "has no shadow.");
                    else {
                        var _ = b.camera;
                        if (u.copy(b.mapSize), u.min(p), H instanceof THREE.PointLight) {
                            m = 6, g = !0;
                            var M = u.x,
                                S = u.y;
                            R[0].set(2 * M, S, M, S), R[1].set(0, S, M, S), R[2].set(3 * M, S, M, S), R[3].set(M, S, M, S), R[4].set(3 * M, 0, M, S), R[5].set(M, 0, M, S), u.x *= 4, u.y *= 2
                        } else m = 1, g = !1;
                        for (null === b.map && (b.map = new THREE.WebGLRenderTarget(u.x, u.y, {
                                minFilter: THREE.NearestFilter,
                                magFilter: THREE.NearestFilter,
                                format: THREE.RGBAFormat
                            }), _.updateProjectionMatrix()), b instanceof THREE.SpotLightShadow && b.update(H), M = b.map, b = b.matrix, f.setFromMatrixPosition(H.matrixWorld), _.position.copy(f), e.setRenderTarget(M), e.clear(), M = 0; m > M; M++) {
                            g ? (d.copy(_.position), d.add(v[M]), _.up.copy(y[M]), _.lookAt(d), s.viewport(R[M])) : (d.setFromMatrixPosition(H.target.matrixWorld), _.lookAt(d)), _.updateMatrixWorld(), _.matrixWorldInverse.getInverse(_.matrixWorld), b.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), b.multiply(_.projectionMatrix), b.multiply(_.matrixWorldInverse), h.multiplyMatrices(_.projectionMatrix, _.matrixWorldInverse), c.setFromMatrix(h), E.length = 0, a(t, r, _);
                            for (var S = 0, A = E.length; A > S; S++) {
                                var L = E[S],
                                    C = i.update(L),
                                    P = L.material;
                                if (P instanceof THREE.MultiMaterial)
                                    for (var D = C.groups, P = P.materials, B = 0, U = D.length; U > B; B++) {
                                        var I = D[B],
                                            O = P[I.materialIndex];
                                        !0 === O.visible && (O = n(L, O, g, f), e.renderBufferDirect(_, null, C, O, L, I))
                                    } else O = n(L, P, g, f), e.renderBufferDirect(_, null, C, O, L, null)
                            }
                        }
                    }
                }
                m = e.getClearColor(), g = e.getClearAlpha(), e.setClearColor(m, g), w.needsUpdate = !1
            }
        }
    }, THREE.WebGLState = function(e, t, i) {
        function r(t, i, r) {
            var n = new Uint8Array(4),
                a = e.createTexture();
            for (e.bindTexture(t, a), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST), t = 0; r > t; t++) e.texImage2D(i + t, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, n);
            return a
        }
        var n = this;
        this.buffers = {
            color: new THREE.WebGLColorBuffer(e, this),
            depth: new THREE.WebGLDepthBuffer(e, this),
            stencil: new THREE.WebGLStencilBuffer(e, this)
        };
        var a = e.getParameter(e.MAX_VERTEX_ATTRIBS),
            o = new Uint8Array(a),
            s = new Uint8Array(a),
            c = new Uint8Array(a),
            h = {},
            l = null,
            u = null,
            p = null,
            d = null,
            f = null,
            E = null,
            m = null,
            g = null,
            T = !1,
            v = null,
            y = null,
            R = null,
            x = null,
            H = null,
            b = null,
            _ = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
            M = null,
            w = {},
            S = new THREE.Vector4,
            A = new THREE.Vector4,
            L = {};
        L[e.TEXTURE_2D] = r(e.TEXTURE_2D, e.TEXTURE_2D, 1), L[e.TEXTURE_CUBE_MAP] = r(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), this.init = function() {
            this.clearColor(0, 0, 0, 1), this.clearDepth(1), this.clearStencil(0), this.enable(e.DEPTH_TEST), this.setDepthFunc(THREE.LessEqualDepth), this.setFlipSided(!1), this.setCullFace(THREE.CullFaceBack), this.enable(e.CULL_FACE), this.enable(e.BLEND), this.setBlending(THREE.NormalBlending)
        }, this.initAttributes = function() {
            for (var e = 0, t = o.length; t > e; e++) o[e] = 0
        }, this.enableAttribute = function(i) {
            o[i] = 1, 0 === s[i] && (e.enableVertexAttribArray(i), s[i] = 1), 0 !== c[i] && (t.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(i, 0), c[i] = 0)
        }, this.enableAttributeAndDivisor = function(t, i, r) {
            o[t] = 1, 0 === s[t] && (e.enableVertexAttribArray(t), s[t] = 1), c[t] !== i && (r.vertexAttribDivisorANGLE(t, i), c[t] = i)
        }, this.disableUnusedAttributes = function() {
            for (var t = 0, i = s.length; t !== i; ++t) s[t] !== o[t] && (e.disableVertexAttribArray(t), s[t] = 0)
        }, this.enable = function(t) {
            !0 !== h[t] && (e.enable(t), h[t] = !0)
        }, this.disable = function(t) {
            !1 !== h[t] && (e.disable(t), h[t] = !1)
        }, this.getCompressedTextureFormats = function() {
            if (null === l && (l = [], t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc") || t.get("WEBGL_compressed_texture_etc1")))
                for (var i = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), r = 0; r < i.length; r++) l.push(i[r]);
            return l
        }, this.setBlending = function(t, r, n, a, o, s, c, h) {
            t !== THREE.NoBlending ? (this.enable(e.BLEND), (t !== u || h !== T) && (t === THREE.AdditiveBlending ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE, e.ONE, e.ONE)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE)) : t === THREE.SubtractiveBlending ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ZERO, e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : t === THREE.MultiplyBlending ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.SRC_COLOR)) : h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)), u = t, T = h), t === THREE.CustomBlending ? (o = o || r, s = s || n, c = c || a, (r !== p || o !== E) && (e.blendEquationSeparate(i(r), i(o)), p = r, E = o), (n !== d || a !== f || s !== m || c !== g) && (e.blendFuncSeparate(i(n), i(a), i(s), i(c)), d = n, f = a, m = s, g = c)) : g = m = E = f = d = p = null) : (this.disable(e.BLEND), u = t)
        }, this.setColorWrite = function(e) {
            this.buffers.color.setMask(e)
        }, this.setDepthTest = function(e) {
            this.buffers.depth.setTest(e)
        }, this.setDepthWrite = function(e) {
            this.buffers.depth.setMask(e)
        }, this.setDepthFunc = function(e) {
            this.buffers.depth.setFunc(e)
        }, this.setStencilTest = function(e) {
            this.buffers.stencil.setTest(e)
        }, this.setStencilWrite = function(e) {
            this.buffers.stencil.setMask(e)
        }, this.setStencilFunc = function(e, t, i) {
            this.buffers.stencil.setFunc(e, t, i)
        }, this.setStencilOp = function(e, t, i) {
            this.buffers.stencil.setOp(e, t, i)
        }, this.setFlipSided = function(t) {
            v !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), v = t)
        }, this.setCullFace = function(t) {
            t !== THREE.CullFaceNone ? (this.enable(e.CULL_FACE), t !== y && (t === THREE.CullFaceBack ? e.cullFace(e.BACK) : t === THREE.CullFaceFront ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))) : this.disable(e.CULL_FACE), y = t
        }, this.setLineWidth = function(t) {
            t !== R && (e.lineWidth(t), R = t)
        }, this.setPolygonOffset = function(t, i, r) {
            t ? (this.enable(e.POLYGON_OFFSET_FILL), (x !== i || H !== r) && (e.polygonOffset(i, r), x = i, H = r)) : this.disable(e.POLYGON_OFFSET_FILL)
        }, this.getScissorTest = function() {
            return b;
        }, this.setScissorTest = function(t) {
            (b = t) ? this.enable(e.SCISSOR_TEST): this.disable(e.SCISSOR_TEST)
        }, this.activeTexture = function(t) {
            void 0 === t && (t = e.TEXTURE0 + _ - 1), M !== t && (e.activeTexture(t), M = t)
        }, this.bindTexture = function(t, i) {
            null === M && n.activeTexture();
            var r = w[M];
            void 0 === r && (r = {
                type: void 0,
                texture: void 0
            }, w[M] = r), (r.type !== t || r.texture !== i) && (e.bindTexture(t, i || L[t]), r.type = t, r.texture = i)
        }, this.compressedTexImage2D = function() {
            try {
                e.compressedTexImage2D.apply(e, arguments)
            } catch (t) {
                console.error(t)
            }
        }, this.texImage2D = function() {
            try {
                e.texImage2D.apply(e, arguments)
            } catch (t) {
                console.error(t)
            }
        }, this.clearColor = function(e, t, i, r) {
            this.buffers.color.setClear(e, t, i, r)
        }, this.clearDepth = function(e) {
            this.buffers.depth.setClear(e)
        }, this.clearStencil = function(e) {
            this.buffers.stencil.setClear(e)
        }, this.scissor = function(t) {
            !1 === S.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), S.copy(t))
        }, this.viewport = function(t) {
            !1 === A.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), A.copy(t))
        }, this.reset = function() {
            for (var t = 0; t < s.length; t++) 1 === s[t] && (e.disableVertexAttribArray(t), s[t] = 0);
            h = {}, M = l = null, w = {}, y = v = u = null, this.buffers.color.reset(), this.buffers.depth.reset(), this.buffers.stencil.reset()
        }
    }, THREE.WebGLColorBuffer = function(e, t) {
        var i = !1,
            r = new THREE.Vector4,
            n = null,
            a = new THREE.Vector4;
        this.setMask = function(t) {
            n === t || i || (e.colorMask(t, t, t, t), n = t)
        }, this.setLocked = function(e) {
            i = e
        }, this.setClear = function(t, i, n, o) {
            r.set(t, i, n, o), !1 === a.equals(r) && (e.clearColor(t, i, n, o), a.copy(r))
        }, this.reset = function() {
            i = !1, n = null, a = new THREE.Vector4
        }
    }, THREE.WebGLDepthBuffer = function(e, t) {
        var i = !1,
            r = null,
            n = null,
            a = null;
        this.setTest = function(i) {
            i ? t.enable(e.DEPTH_TEST) : t.disable(e.DEPTH_TEST)
        }, this.setMask = function(t) {
            r === t || i || (e.depthMask(t), r = t)
        }, this.setFunc = function(t) {
            if (n !== t) {
                if (t) switch (t) {
                    case THREE.NeverDepth:
                        e.depthFunc(e.NEVER);
                        break;
                    case THREE.AlwaysDepth:
                        e.depthFunc(e.ALWAYS);
                        break;
                    case THREE.LessDepth:
                        e.depthFunc(e.LESS);
                        break;
                    case THREE.LessEqualDepth:
                        e.depthFunc(e.LEQUAL);
                        break;
                    case THREE.EqualDepth:
                        e.depthFunc(e.EQUAL);
                        break;
                    case THREE.GreaterEqualDepth:
                        e.depthFunc(e.GEQUAL);
                        break;
                    case THREE.GreaterDepth:
                        e.depthFunc(e.GREATER);
                        break;
                    case THREE.NotEqualDepth:
                        e.depthFunc(e.NOTEQUAL);
                        break;
                    default:
                        e.depthFunc(e.LEQUAL)
                } else e.depthFunc(e.LEQUAL);
                n = t
            }
        }, this.setLocked = function(e) {
            i = e
        }, this.setClear = function(t) {
            a !== t && (e.clearDepth(t), a = t)
        }, this.reset = function() {
            i = !1, a = n = r = null
        }
    }, THREE.WebGLStencilBuffer = function(e, t) {
        var i = !1,
            r = null,
            n = null,
            a = null,
            o = null,
            s = null,
            c = null,
            h = null,
            l = null;
        this.setTest = function(i) {
            i ? t.enable(e.STENCIL_TEST) : t.disable(e.STENCIL_TEST)
        }, this.setMask = function(t) {
            r === t || i || (e.stencilMask(t), r = t)
        }, this.setFunc = function(t, i, r) {
            (n !== t || a !== i || o !== r) && (e.stencilFunc(t, i, r), n = t, a = i, o = r)
        }, this.setOp = function(t, i, r) {
            (s !== t || c !== i || h !== r) && (e.stencilOp(t, i, r), s = t, c = i, h = r)
        }, this.setLocked = function(e) {
            i = e
        }, this.setClear = function(t) {
            l !== t && (e.clearStencil(t), l = t)
        }, this.reset = function() {
            i = !1, l = h = c = s = o = a = n = r = null
        }
    }, THREE.WebGLTextures = function(e, t, i, r, n, a, o) {
        function s(e, t) {
            if (e.width > t || e.height > t) {
                var i = t / Math.max(e.width, e.height),
                    r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                return r.width = Math.floor(e.width * i), r.height = Math.floor(e.height * i), r.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, r.width, r.height), console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + r.width + "x" + r.height, e), r
            }
            return e
        }

        function c(e) {
            return THREE.Math.isPowerOfTwo(e.width) && THREE.Math.isPowerOfTwo(e.height)
        }

        function h(t) {
            return t === THREE.NearestFilter || t === THREE.NearestMipMapNearestFilter || t === THREE.NearestMipMapLinearFilter ? e.NEAREST : e.LINEAR
        }

        function l(t) {
            t = t.target, t.removeEventListener("dispose", l);
            e: {
                var i = r.get(t);
                if (t.image && i.__image__webglTextureCube) e.deleteTexture(i.__image__webglTextureCube);
                else {
                    if (void 0 === i.__webglInit) break e;
                    e.deleteTexture(i.__webglTexture)
                }
                r["delete"](t)
            }
            m.textures--
        }

        function u(t) {
            t = t.target, t.removeEventListener("dispose", u);
            var i = r.get(t),
                n = r.get(t.texture);
            if (t) {
                if (void 0 !== n.__webglTexture && e.deleteTexture(n.__webglTexture), t.depthTexture && t.depthTexture.dispose(), t instanceof THREE.WebGLRenderTargetCube)
                    for (n = 0; 6 > n; n++) e.deleteFramebuffer(i.__webglFramebuffer[n]), i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer[n]);
                else e.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer);
                r["delete"](t.texture), r["delete"](t)
            }
            m.textures--
        }

        function p(t, o) {
            var h = r.get(t);
            if (0 < t.version && h.__version !== t.version) {
                var u = t.image;
                if (void 0 === u) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", t);
                else {
                    if (!1 !== u.complete) {
                        void 0 === h.__webglInit && (h.__webglInit = !0, t.addEventListener("dispose", l), h.__webglTexture = e.createTexture(), m.textures++), i.activeTexture(e.TEXTURE0 + o), i.bindTexture(e.TEXTURE_2D, h.__webglTexture), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, t.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, t.unpackAlignment);
                        var p = s(t.image, n.maxTextureSize);
                        if ((t.wrapS !== THREE.ClampToEdgeWrapping || t.wrapT !== THREE.ClampToEdgeWrapping || t.minFilter !== THREE.NearestFilter && t.minFilter !== THREE.LinearFilter) && !1 === c(p))
                            if (u = p, u instanceof HTMLImageElement || u instanceof HTMLCanvasElement) {
                                var f = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                                f.width = THREE.Math.nearestPowerOfTwo(u.width), f.height = THREE.Math.nearestPowerOfTwo(u.height), f.getContext("2d").drawImage(u, 0, 0, f.width, f.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + u.width + "x" + u.height + "). Resized to " + f.width + "x" + f.height, u), p = f
                            } else p = u;
                        var u = c(p),
                            f = a(t.format),
                            E = a(t.type);
                        d(e.TEXTURE_2D, t, u);
                        var T = t.mipmaps;
                        if (t instanceof THREE.DepthTexture) {
                            if (T = e.DEPTH_COMPONENT, t.type === THREE.FloatType) {
                                if (!g) throw Error("Float Depth Texture only supported in WebGL2.0");
                                T = e.DEPTH_COMPONENT32F
                            } else g && (T = e.DEPTH_COMPONENT16);
                            i.texImage2D(e.TEXTURE_2D, 0, T, p.width, p.height, 0, f, E, null)
                        } else if (t instanceof THREE.DataTexture)
                            if (0 < T.length && u) {
                                for (var v = 0, y = T.length; y > v; v++) p = T[v], i.texImage2D(e.TEXTURE_2D, v, f, p.width, p.height, 0, f, E, p.data);
                                t.generateMipmaps = !1
                            } else i.texImage2D(e.TEXTURE_2D, 0, f, p.width, p.height, 0, f, E, p.data);
                        else if (t instanceof THREE.CompressedTexture)
                            for (v = 0, y = T.length; y > v; v++) p = T[v], t.format !== THREE.RGBAFormat && t.format !== THREE.RGBFormat ? -1 < i.getCompressedTextureFormats().indexOf(f) ? i.compressedTexImage2D(e.TEXTURE_2D, v, f, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(e.TEXTURE_2D, v, f, p.width, p.height, 0, f, E, p.data);
                        else if (0 < T.length && u) {
                            for (v = 0, y = T.length; y > v; v++) p = T[v], i.texImage2D(e.TEXTURE_2D, v, f, f, E, p);
                            t.generateMipmaps = !1
                        } else i.texImage2D(e.TEXTURE_2D, 0, f, f, E, p);
                        return t.generateMipmaps && u && e.generateMipmap(e.TEXTURE_2D), h.__version = t.version, void(t.onUpdate && t.onUpdate(t))
                    }
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", t)
                }
            }
            i.activeTexture(e.TEXTURE0 + o), i.bindTexture(e.TEXTURE_2D, h.__webglTexture)
        }

        function d(i, o, s) {
            s ? (e.texParameteri(i, e.TEXTURE_WRAP_S, a(o.wrapS)), e.texParameteri(i, e.TEXTURE_WRAP_T, a(o.wrapT)), e.texParameteri(i, e.TEXTURE_MAG_FILTER, a(o.magFilter)), e.texParameteri(i, e.TEXTURE_MIN_FILTER, a(o.minFilter))) : (e.texParameteri(i, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(i, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), o.wrapS === THREE.ClampToEdgeWrapping && o.wrapT === THREE.ClampToEdgeWrapping || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", o), e.texParameteri(i, e.TEXTURE_MAG_FILTER, h(o.magFilter)), e.texParameteri(i, e.TEXTURE_MIN_FILTER, h(o.minFilter)), o.minFilter !== THREE.NearestFilter && o.minFilter !== THREE.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", o)), !(s = t.get("EXT_texture_filter_anisotropic")) || o.type === THREE.FloatType && null === t.get("OES_texture_float_linear") || o.type === THREE.HalfFloatType && null === t.get("OES_texture_half_float_linear") || !(1 < o.anisotropy || r.get(o).__currentAnisotropy) || (e.texParameterf(i, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, n.getMaxAnisotropy())), r.get(o).__currentAnisotropy = o.anisotropy)
        }

        function f(t, n, o, s) {
            var c = a(n.texture.format),
                h = a(n.texture.type);
            i.texImage2D(s, 0, c, n.width, n.height, 0, c, h, null), e.bindFramebuffer(e.FRAMEBUFFER, t), e.framebufferTexture2D(e.FRAMEBUFFER, o, s, r.get(n.texture).__webglTexture, 0), e.bindFramebuffer(e.FRAMEBUFFER, null)
        }

        function E(t, i) {
            e.bindRenderbuffer(e.RENDERBUFFER, t), i.depthBuffer && !i.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, i.width, i.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, t)) : i.depthBuffer && i.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, i.width, i.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, t)) : e.renderbufferStorage(e.RENDERBUFFER, e.RGBA4, i.width, i.height), e.bindRenderbuffer(e.RENDERBUFFER, null)
        }
        var m = o.memory,
            g = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext;
        this.setTexture2D = p, this.setTextureCube = function(t, o) {
            var h = r.get(t);
            if (6 === t.image.length)
                if (0 < t.version && h.__version !== t.version) {
                    h.__image__webglTextureCube || (t.addEventListener("dispose", l), h.__image__webglTextureCube = e.createTexture(), m.textures++), i.activeTexture(e.TEXTURE0 + o), i.bindTexture(e.TEXTURE_CUBE_MAP, h.__image__webglTextureCube), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, t.flipY);
                    for (var u = t instanceof THREE.CompressedTexture, p = t.image[0] instanceof THREE.DataTexture, f = [], E = 0; 6 > E; E++) f[E] = u || p ? p ? t.image[E].image : t.image[E] : s(t.image[E], n.maxCubemapSize);
                    var g = c(f[0]),
                        T = a(t.format),
                        v = a(t.type);
                    for (d(e.TEXTURE_CUBE_MAP, t, g), E = 0; 6 > E; E++)
                        if (u)
                            for (var y, R = f[E].mipmaps, x = 0, H = R.length; H > x; x++) y = R[x], t.format !== THREE.RGBAFormat && t.format !== THREE.RGBFormat ? -1 < i.getCompressedTextureFormats().indexOf(T) ? i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + E, x, T, y.width, y.height, 0, y.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + E, x, T, y.width, y.height, 0, T, v, y.data);
                        else p ? i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + E, 0, T, f[E].width, f[E].height, 0, T, v, f[E].data) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + E, 0, T, T, v, f[E]);
                    t.generateMipmaps && g && e.generateMipmap(e.TEXTURE_CUBE_MAP), h.__version = t.version, t.onUpdate && t.onUpdate(t)
                } else i.activeTexture(e.TEXTURE0 + o), i.bindTexture(e.TEXTURE_CUBE_MAP, h.__image__webglTextureCube)
        }, this.setTextureCubeDynamic = function(t, n) {
            i.activeTexture(e.TEXTURE0 + n), i.bindTexture(e.TEXTURE_CUBE_MAP, r.get(t).__webglTexture)
        }, this.setupRenderTarget = function(t) {
            var n = r.get(t),
                a = r.get(t.texture);
            t.addEventListener("dispose", u), a.__webglTexture = e.createTexture(), m.textures++;
            var o = t instanceof THREE.WebGLRenderTargetCube,
                s = c(t);
            if (o) {
                n.__webglFramebuffer = [];
                for (var h = 0; 6 > h; h++) n.__webglFramebuffer[h] = e.createFramebuffer()
            } else n.__webglFramebuffer = e.createFramebuffer();
            if (o) {
                for (i.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture), d(e.TEXTURE_CUBE_MAP, t.texture, s), h = 0; 6 > h; h++) f(n.__webglFramebuffer[h], t, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + h);
                t.texture.generateMipmaps && s && e.generateMipmap(e.TEXTURE_CUBE_MAP), i.bindTexture(e.TEXTURE_CUBE_MAP, null)
            } else i.bindTexture(e.TEXTURE_2D, a.__webglTexture), d(e.TEXTURE_2D, t.texture, s), f(n.__webglFramebuffer, t, e.COLOR_ATTACHMENT0, e.TEXTURE_2D), t.texture.generateMipmaps && s && e.generateMipmap(e.TEXTURE_2D), i.bindTexture(e.TEXTURE_2D, null);
            if (t.depthBuffer) {
                if (n = r.get(t), a = t instanceof THREE.WebGLRenderTargetCube, t.depthTexture) {
                    if (a) throw Error("target.depthTexture not supported in Cube render targets");
                    if (t instanceof THREE.WebGLRenderTargetCube) throw Error("Depth Texture with cube render targets is not supported!");
                    if (e.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer), !(t.depthTexture instanceof THREE.DepthTexture)) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    r.get(t.depthTexture).__webglTexture && t.depthTexture.image.width === t.width && t.depthTexture.image.height === t.height || (t.depthTexture.image.width = t.width, t.depthTexture.image.height = t.height, t.depthTexture.needsUpdate = !0), p(t.depthTexture, 0), t = r.get(t.depthTexture).__webglTexture, e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, t, 0)
                } else if (a)
                    for (n.__webglDepthbuffer = [], a = 0; 6 > a; a++) e.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer[a]), n.__webglDepthbuffer[a] = e.createRenderbuffer(), E(n.__webglDepthbuffer[a], t);
                else e.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer), n.__webglDepthbuffer = e.createRenderbuffer(), E(n.__webglDepthbuffer, t);
                e.bindFramebuffer(e.FRAMEBUFFER, null)
            }
        }, this.updateRenderTargetMipmap = function(t) {
            var n = t.texture;
            n.generateMipmaps && c(t) && n.minFilter !== THREE.NearestFilter && n.minFilter !== THREE.LinearFilter && (t = t instanceof THREE.WebGLRenderTargetCube ? e.TEXTURE_CUBE_MAP : e.TEXTURE_2D, n = r.get(n).__webglTexture, i.bindTexture(t, n), e.generateMipmap(t), i.bindTexture(t, null))
        }
    }, THREE.WebGLUniforms = function() {
        var e = new THREE.Texture,
            t = new THREE.CubeTexture,
            i = [],
            r = [],
            n = function(e, t, r) {
                var n = e[0];
                if (0 >= n || n > 0) return e;
                var a = t * r,
                    o = i[a];
                if (void 0 === o && (o = new Float32Array(a), i[a] = o), 0 !== t)
                    for (n.toArray(o, 0), n = 1, a = 0; n !== t; ++n) a += r, e[n].toArray(o, a);
                return o
            },
            a = function(e, t) {
                var i = r[t];
                void 0 === i && (i = new Int32Array(t), r[t] = i);
                for (var n = 0; n !== t; ++n) i[n] = e.allocTextureUnit();
                return i
            },
            o = function(e, t) {
                e.uniform1f(this.addr, t)
            },
            s = function(e, t) {
                e.uniform1i(this.addr, t)
            },
            c = function(e, t) {
                void 0 === t.x ? e.uniform2fv(this.addr, t) : e.uniform2f(this.addr, t.x, t.y)
            },
            h = function(e, t) {
                void 0 !== t.x ? e.uniform3f(this.addr, t.x, t.y, t.z) : void 0 !== t.r ? e.uniform3f(this.addr, t.r, t.g, t.b) : e.uniform3fv(this.addr, t)
            },
            l = function(e, t) {
                void 0 === t.x ? e.uniform4fv(this.addr, t) : e.uniform4f(this.addr, t.x, t.y, t.z, t.w)
            },
            u = function(e, t) {
                e.uniformMatrix2fv(this.addr, !1, t.elements || t)
            },
            p = function(e, t) {
                e.uniformMatrix3fv(this.addr, !1, t.elements || t)
            },
            d = function(e, t) {
                e.uniformMatrix4fv(this.addr, !1, t.elements || t)
            },
            f = function(t, i, r) {
                var n = r.allocTextureUnit();
                t.uniform1i(this.addr, n), r.setTexture2D(i || e, n)
            },
            E = function(e, i, r) {
                var n = r.allocTextureUnit();
                e.uniform1i(this.addr, n), r.setTextureCube(i || t, n)
            },
            m = function(e, t) {
                e.uniform2iv(this.addr, t)
            },
            g = function(e, t) {
                e.uniform3iv(this.addr, t)
            },
            T = function(e, t) {
                e.uniform4iv(this.addr, t)
            },
            v = function(e) {
                switch (e) {
                    case 5126:
                        return o;
                    case 35664:
                        return c;
                    case 35665:
                        return h;
                    case 35666:
                        return l;
                    case 35674:
                        return u;
                    case 35675:
                        return p;
                    case 35676:
                        return d;
                    case 35678:
                        return f;
                    case 35680:
                        return E;
                    case 5124:
                    case 35670:
                        return s;
                    case 35667:
                    case 35671:
                        return m;
                    case 35668:
                    case 35672:
                        return g;
                    case 35669:
                    case 35673:
                        return T
                }
            },
            y = function(e, t) {
                e.uniform1fv(this.addr, t)
            },
            R = function(e, t) {
                e.uniform1iv(this.addr, t)
            },
            x = function(e, t) {
                e.uniform2fv(this.addr, n(t, this.size, 2))
            },
            H = function(e, t) {
                e.uniform3fv(this.addr, n(t, this.size, 3))
            },
            b = function(e, t) {
                e.uniform4fv(this.addr, n(t, this.size, 4))
            },
            _ = function(e, t) {
                e.uniformMatrix2fv(this.addr, !1, n(t, this.size, 4))
            },
            M = function(e, t) {
                e.uniformMatrix3fv(this.addr, !1, n(t, this.size, 9))
            },
            w = function(e, t) {
                e.uniformMatrix4fv(this.addr, !1, n(t, this.size, 16))
            },
            S = function(t, i, r) {
                var n = i.length,
                    o = a(r, n);
                for (t.uniform1iv(this.addr, o), t = 0; t !== n; ++t) r.setTexture2D(i[t] || e, o[t])
            },
            A = function(e, i, r) {
                var n = i.length,
                    o = a(r, n);
                for (e.uniform1iv(this.addr, o), e = 0; e !== n; ++e) r.setTextureCube(i[e] || t, o[e])
            },
            L = function(e) {
                switch (e) {
                    case 5126:
                        return y;
                    case 35664:
                        return x;
                    case 35665:
                        return H;
                    case 35666:
                        return b;
                    case 35674:
                        return _;
                    case 35675:
                        return M;
                    case 35676:
                        return w;
                    case 35678:
                        return S;
                    case 35680:
                        return A;
                    case 5124:
                    case 35670:
                        return R;
                    case 35667:
                    case 35671:
                        return m;
                    case 35668:
                    case 35672:
                        return g;
                    case 35669:
                    case 35673:
                        return T
                }
            },
            C = function(e, t, i) {
                this.id = e, this.addr = i, this.setValue = v(t.type)
            },
            P = function(e, t, i) {
                this.id = e, this.addr = i, this.size = t.size, this.setValue = L(t.type)
            },
            D = function(e) {
                this.id = e, this.seq = [], this.map = {}
            };
        D.prototype.setValue = function(e, t) {
            for (var i = this.seq, r = 0, n = i.length; r !== n; ++r) {
                var a = i[r];
                a.setValue(e, t[a.id])
            }
        };
        var B = /([\w\d_]+)(\])?(\[|\.)?/g,
            U = function(e, t, i) {
                this.seq = [], this.map = {}, this.renderer = i, i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
                for (var r = 0; r !== i; ++r) {
                    var n = e.getActiveUniform(t, r),
                        a = e.getUniformLocation(t, n.name),
                        o = this,
                        s = n.name,
                        c = s.length;
                    for (B.lastIndex = 0;;) {
                        var h = B.exec(s),
                            l = B.lastIndex,
                            u = h[1],
                            p = h[3];
                        if ("]" === h[2] && (u |= 0), void 0 === p || "[" === p && l + 2 === c) {
                            s = o, n = void 0 === p ? new C(u, n, a) : new P(u, n, a), s.seq.push(n), s.map[n.id] = n;
                            break
                        }
                        p = o.map[u], void 0 === p && (p = new D(u), u = o, o = p, u.seq.push(o), u.map[o.id] = o), o = p
                    }
                }
            };
        return U.prototype.setValue = function(e, t, i) {
            t = this.map[t], void 0 !== t && t.setValue(e, i, this.renderer)
        }, U.prototype.set = function(e, t, i) {
            var r = this.map[i];
            void 0 !== r && r.setValue(e, t[i], this.renderer)
        }, U.prototype.setOptional = function(e, t, i) {
            t = t[i], void 0 !== t && this.setValue(e, i, t)
        }, U.upload = function(e, t, i, r) {
            for (var n = 0, a = t.length; n !== a; ++n) {
                var o = t[n],
                    s = i[o.id];
                !1 !== s.needsUpdate && o.setValue(e, s.value, r)
            }
        }, U.seqWithValue = function(e, t) {
            for (var i = [], r = 0, n = e.length; r !== n; ++r) {
                var a = e[r];
                a.id in t && i.push(a)
            }
            return i
        }, U.splitDynamic = function(e, t) {
            for (var i = null, r = e.length, n = 0, a = 0; a !== r; ++a) {
                var o = e[a],
                    s = t[o.id];
                s && !0 === s.dynamic ? (null === i && (i = []), i.push(o)) : (a > n && (e[n] = o), ++n)
            }
            return r > n && (e.length = n), i
        }, U.evalDynamic = function(e, t, i, r) {
            for (var n = 0, a = e.length; n !== a; ++n) {
                var o = t[e[n].id],
                    s = o.onUpdateCallback;
                void 0 !== s && s.call(o, i, r)
            }
        }, U
    }(), THREE.LensFlarePlugin = function(e, t) {
        var i, r, n, a, o, s, c, h, l, u, p = e.context,
            d = e.state,
            f, E, m, g, T, v;
        this.render = function(y, R, x) {
            if (0 !== t.length) {
                y = new THREE.Vector3;
                var H = x.w / x.z,
                    b = .5 * x.z,
                    _ = .5 * x.w,
                    M = 16 / x.w,
                    w = new THREE.Vector2(M * H, M),
                    S = new THREE.Vector3(1, 1, 0),
                    A = new THREE.Vector2(1, 1),
                    L = new THREE.Box2;
                if (L.min.set(0, 0), L.max.set(x.z - 16, x.w - 16), void 0 === g) {
                    var M = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                        C = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    f = p.createBuffer(), E = p.createBuffer(), p.bindBuffer(p.ARRAY_BUFFER, f), p.bufferData(p.ARRAY_BUFFER, M, p.STATIC_DRAW), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, E), p.bufferData(p.ELEMENT_ARRAY_BUFFER, C, p.STATIC_DRAW), T = p.createTexture(), v = p.createTexture(), d.bindTexture(p.TEXTURE_2D, T), p.texImage2D(p.TEXTURE_2D, 0, p.RGB, 16, 16, 0, p.RGB, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST), d.bindTexture(p.TEXTURE_2D, v), p.texImage2D(p.TEXTURE_2D, 0, p.RGBA, 16, 16, 0, p.RGBA, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST);
                    var M = m = {
                            vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                            fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                        },
                        C = p.createProgram(),
                        P = p.createShader(p.FRAGMENT_SHADER),
                        D = p.createShader(p.VERTEX_SHADER),
                        B = "precision " + e.getPrecision() + " float;\n";
                    p.shaderSource(P, B + M.fragmentShader), p.shaderSource(D, B + M.vertexShader), p.compileShader(P), p.compileShader(D), p.attachShader(C, P), p.attachShader(C, D), p.linkProgram(C), g = C, l = p.getAttribLocation(g, "position"), u = p.getAttribLocation(g, "uv"), i = p.getUniformLocation(g, "renderType"), r = p.getUniformLocation(g, "map"), n = p.getUniformLocation(g, "occlusionMap"), a = p.getUniformLocation(g, "opacity"), o = p.getUniformLocation(g, "color"), s = p.getUniformLocation(g, "scale"), c = p.getUniformLocation(g, "rotation"), h = p.getUniformLocation(g, "screenPosition")
                }
                for (p.useProgram(g), d.initAttributes(), d.enableAttribute(l), d.enableAttribute(u), d.disableUnusedAttributes(), p.uniform1i(n, 0), p.uniform1i(r, 1), p.bindBuffer(p.ARRAY_BUFFER, f), p.vertexAttribPointer(l, 2, p.FLOAT, !1, 16, 0), p.vertexAttribPointer(u, 2, p.FLOAT, !1, 16, 8), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, E), d.disable(p.CULL_FACE), d.setDepthWrite(!1), C = 0, P = t.length; P > C; C++)
                    if (M = 16 / x.w, w.set(M * H, M), D = t[C], y.set(D.matrixWorld.elements[12], D.matrixWorld.elements[13], D.matrixWorld.elements[14]), y.applyMatrix4(R.matrixWorldInverse), y.applyProjection(R.projectionMatrix), S.copy(y), A.x = x.x + S.x * b + b - 8, A.y = x.y + S.y * _ + _ - 8, !0 === L.containsPoint(A)) {
                        d.activeTexture(p.TEXTURE0), d.bindTexture(p.TEXTURE_2D, null), d.activeTexture(p.TEXTURE1), d.bindTexture(p.TEXTURE_2D, T), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGB, A.x, A.y, 16, 16, 0), p.uniform1i(i, 0), p.uniform2f(s, w.x, w.y), p.uniform3f(h, S.x, S.y, S.z), d.disable(p.BLEND), d.enable(p.DEPTH_TEST), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), d.activeTexture(p.TEXTURE0), d.bindTexture(p.TEXTURE_2D, v), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGBA, A.x, A.y, 16, 16, 0), p.uniform1i(i, 1), d.disable(p.DEPTH_TEST), d.activeTexture(p.TEXTURE1), d.bindTexture(p.TEXTURE_2D, T), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), D.positionScreen.copy(S), D.customUpdateCallback ? D.customUpdateCallback(D) : D.updateLensFlares(), p.uniform1i(i, 2), d.enable(p.BLEND);
                        for (var B = 0, U = D.lensFlares.length; U > B; B++) {
                            var I = D.lensFlares[B];
                            .001 < I.opacity && .001 < I.scale && (S.x = I.x, S.y = I.y, S.z = I.z, M = I.size * I.scale / x.w, w.x = M * H, w.y = M, p.uniform3f(h, S.x, S.y, S.z), p.uniform2f(s, w.x, w.y), p.uniform1f(c, I.rotation), p.uniform1f(a, I.opacity), p.uniform3f(o, I.color.r, I.color.g, I.color.b), d.setBlending(I.blending, I.blendEquation, I.blendSrc, I.blendDst), e.setTexture2D(I.texture, 1), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0))
                        }
                    } d.enable(p.CULL_FACE), d.enable(p.DEPTH_TEST), d.setDepthWrite(!0), e.resetGLState()
            }
        }
    }, THREE.SpritePlugin = function(e, t) {
        function i(e, t) {
            return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : t.id - e.id
        }
        var r, n, a, o, s, c, h, l, u, p, d, f, E, m, g, T, v, y = e.context,
            R = e.state,
            x, H, b, _, M = new THREE.Vector3,
            w = new THREE.Quaternion,
            S = new THREE.Vector3;
        this.render = function(A, L) {
            if (0 !== t.length) {
                if (void 0 === b) {
                    var C = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                        P = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    x = y.createBuffer(), H = y.createBuffer(), y.bindBuffer(y.ARRAY_BUFFER, x), y.bufferData(y.ARRAY_BUFFER, C, y.STATIC_DRAW), y.bindBuffer(y.ELEMENT_ARRAY_BUFFER, H), y.bufferData(y.ELEMENT_ARRAY_BUFFER, P, y.STATIC_DRAW);
                    var C = y.createProgram(),
                        P = y.createShader(y.VERTEX_SHADER),
                        D = y.createShader(y.FRAGMENT_SHADER);
                    y.shaderSource(P, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n")), y.shaderSource(D, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n")), y.compileShader(P), y.compileShader(D), y.attachShader(C, P), y.attachShader(C, D), y.linkProgram(C), b = C, T = y.getAttribLocation(b, "position"), v = y.getAttribLocation(b, "uv"), r = y.getUniformLocation(b, "uvOffset"), n = y.getUniformLocation(b, "uvScale"), a = y.getUniformLocation(b, "rotation"), o = y.getUniformLocation(b, "scale"), s = y.getUniformLocation(b, "color"), c = y.getUniformLocation(b, "map"), h = y.getUniformLocation(b, "opacity"), l = y.getUniformLocation(b, "modelViewMatrix"), u = y.getUniformLocation(b, "projectionMatrix"), p = y.getUniformLocation(b, "fogType"), d = y.getUniformLocation(b, "fogDensity"), f = y.getUniformLocation(b, "fogNear"), E = y.getUniformLocation(b, "fogFar"), m = y.getUniformLocation(b, "fogColor"), g = y.getUniformLocation(b, "alphaTest"), C = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), C.width = 8, C.height = 8, P = C.getContext("2d"), P.fillStyle = "white", P.fillRect(0, 0, 8, 8), _ = new THREE.Texture(C), _.needsUpdate = !0
                }
                y.useProgram(b), R.initAttributes(), R.enableAttribute(T), R.enableAttribute(v), R.disableUnusedAttributes(), R.disable(y.CULL_FACE), R.enable(y.BLEND), y.bindBuffer(y.ARRAY_BUFFER, x), y.vertexAttribPointer(T, 2, y.FLOAT, !1, 16, 0), y.vertexAttribPointer(v, 2, y.FLOAT, !1, 16, 8), y.bindBuffer(y.ELEMENT_ARRAY_BUFFER, H), y.uniformMatrix4fv(u, !1, L.projectionMatrix.elements), R.activeTexture(y.TEXTURE0), y.uniform1i(c, 0), P = C = 0, (D = A.fog) ? (y.uniform3f(m, D.color.r, D.color.g, D.color.b), D instanceof THREE.Fog ? (y.uniform1f(f, D.near), y.uniform1f(E, D.far), y.uniform1i(p, 1), P = C = 1) : D instanceof THREE.FogExp2 && (y.uniform1f(d, D.density), y.uniform1i(p, 2), P = C = 2)) : (y.uniform1i(p, 0), P = C = 0);
                for (var D = 0, B = t.length; B > D; D++) {
                    var U = t[D];
                    U.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse, U.matrixWorld), U.z = -U.modelViewMatrix.elements[14]
                }
                t.sort(i);
                for (var I = [], D = 0, B = t.length; B > D; D++) {
                    var U = t[D],
                        O = U.material;
                    !1 !== O.visible && (y.uniform1f(g, O.alphaTest), y.uniformMatrix4fv(l, !1, U.modelViewMatrix.elements), U.matrixWorld.decompose(M, w, S), I[0] = S.x, I[1] = S.y, U = 0, A.fog && O.fog && (U = P), C !== U && (y.uniform1i(p, U), C = U), null !== O.map ? (y.uniform2f(r, O.map.offset.x, O.map.offset.y), y.uniform2f(n, O.map.repeat.x, O.map.repeat.y)) : (y.uniform2f(r, 0, 0), y.uniform2f(n, 1, 1)), y.uniform1f(h, O.opacity), y.uniform3f(s, O.color.r, O.color.g, O.color.b), y.uniform1f(a, O.rotation), y.uniform2fv(o, I), R.setBlending(O.blending, O.blendEquation, O.blendSrc, O.blendDst), R.setDepthTest(O.depthTest), R.setDepthWrite(O.depthWrite), O.map ? e.setTexture2D(O.map, 0) : e.setTexture2D(_, 0), y.drawElements(y.TRIANGLES, 6, y.UNSIGNED_SHORT, 0))
                }
                R.enable(y.CULL_FACE), e.resetGLState()
            }
        }
    }, Object.assign(THREE, {
        Face4: function(e, t, i, r, n, a, o) {
            return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new THREE.Face3(e, t, i, n, a, o)
        },
        LineStrip: 0,
        LinePieces: 1,
        MeshFaceMaterial: THREE.MultiMaterial,
        PointCloud: function(e, t) {
            return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new THREE.Points(e, t)
        },
        Particle: THREE.Sprite,
        ParticleSystem: function(e, t) {
            return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new THREE.Points(e, t)
        },
        PointCloudMaterial: function(e) {
            return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new THREE.PointsMaterial(e)
        },
        ParticleBasicMaterial: function(e) {
            return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new THREE.PointsMaterial(e)
        },
        ParticleSystemMaterial: function(e) {
            return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new THREE.PointsMaterial(e)
        },
        Vertex: function(e, t, i) {
            return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new THREE.Vector3(e, t, i)
        }
    }), Object.assign(THREE.Box2.prototype, {
        empty: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function(e) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
        }
    }), Object.assign(THREE.Box3.prototype, {
        empty: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function(e) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
        },
        isIntersectionSphere: function(e) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
        }
    }), Object.assign(THREE.Matrix3.prototype, {
        multiplyVector3: function(e) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
        },
        multiplyVector3Array: function(e) {
            return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
        }
    }), Object.assign(THREE.Matrix4.prototype, {
        extractPosition: function(e) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
        },
        setRotationFromQuaternion: function(e) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
        },
        multiplyVector3: function(e) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), e.applyProjection(this)
        },
        multiplyVector4: function(e) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
        },
        multiplyVector3Array: function(e) {
            return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
        },
        rotateAxis: function(e) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
        },
        crossVector: function(e) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
        },
        translate: function(e) {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function(e) {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function(e) {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function(e) {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function(e, t) {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
        }
    }), Object.assign(THREE.Plane.prototype, {
        isIntersectionLine: function(e) {
            return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e)
        }
    }), Object.assign(THREE.Quaternion.prototype, {
        multiplyVector3: function(e) {
            return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
        }
    }), Object.assign(THREE.Ray.prototype, {
        isIntersectionBox: function(e) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
        },
        isIntersectionPlane: function(e) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e)
        },
        isIntersectionSphere: function(e) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
        }
    }), Object.assign(THREE.Vector3.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(e) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
        },
        getScaleFromMatrix: function(e) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
        },
        getColumnFromMatrix: function(e, t) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e)
        }
    }), Object.assign(THREE.Object3D.prototype, {
        getChildByName: function(e) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
        },
        renderDepth: function(e) {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(e, t) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
        }
    }), Object.defineProperties(THREE.Object3D.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
            },
            set: function(e) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function(e) {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }), Object.defineProperties(THREE.LOD.prototype, {
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
            }
        }
    }), THREE.PerspectiveCamera.prototype.setLens = function(e, t) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== t && (this.filmGauge = t), this.setFocalLength(e)
    }, Object.defineProperties(THREE.Light.prototype, {
        onlyShadow: {
            set: function(e) {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e
            }
        },
        shadowCameraLeft: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e
            }
        },
        shadowCameraRight: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e
            }
        },
        shadowCameraTop: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e
            }
        },
        shadowCameraBottom: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e
            }
        },
        shadowCameraNear: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e
            }
        },
        shadowCameraFar: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e
            }
        },
        shadowCameraVisible: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(e) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e
            }
        },
        shadowDarkness: {
            set: function(e) {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(e) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e
            }
        },
        shadowMapHeight: {
            set: function(e) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e
            }
        }
    }), Object.defineProperties(THREE.BufferAttribute.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
            }
        }
    }), Object.assign(THREE.BufferGeometry.prototype, {
        addIndex: function(e) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
        },
        addDrawCall: function(e, t, i) {
            void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }), Object.defineProperties(THREE.BufferGeometry.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
            }
        }
    }), Object.defineProperties(THREE.Material.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            },
            set: function(e) {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE." + this.type + ": .wrapRGB has been removed."), new THREE.Color
            }
        }
    }), Object.defineProperties(THREE.MeshPhongMaterial.prototype, {
        metal: {
            get: function() {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
            },
            set: function(e) {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }), Object.defineProperties(THREE.ShaderMaterial.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
            },
            set: function(e) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e
            }
        }
    }), THREE.EventDispatcher.prototype = Object.assign(Object.create({
        constructor: THREE.EventDispatcher,
        apply: function(e) {
            console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in."), Object.assign(e, this)
        }
    }), THREE.EventDispatcher.prototype), Object.assign(THREE.WebGLRenderer.prototype, {
        supportsFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            return this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(e) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    }), Object.defineProperties(THREE.WebGLRenderer.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e
            }
        },
        shadowMapCullFace: {
            get: function() {
                return this.shadowMap.cullFace
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), this.shadowMap.cullFace = e
            }
        }
    }), Object.defineProperties(THREE.WebGLShadowMap.prototype, {
        cullFace: {
            get: function() {
                return this.renderReverseSided ? THREE.CullFaceFront : THREE.CullFaceBack
            },
            set: function(e) {
                e = e !== THREE.CullFaceBack, console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + e + "."), this.renderReverseSided = e
            }
        }
    }), Object.defineProperties(THREE.WebGLRenderTarget.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
            }
        }
    }), Object.assign(THREE.Audio.prototype, {
        load: function(e) {
            console.warn("THREE.Audio: .load has been deprecated. Please use THREE.AudioLoader.");
            var t = this;
            return (new THREE.AudioLoader).load(e, function(e) {
                t.setBuffer(e)
            }), this
        }
    }), Object.assign(THREE.AudioAnalyser.prototype, {
        getData: function(e) {
            return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
        }
    }), THREE.GeometryUtils = {
        merge: function(e, t, i) {
            console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
            var r;
            t instanceof THREE.Mesh && (t.matrixAutoUpdate && t.updateMatrix(), r = t.matrix, t = t.geometry), e.merge(t, r, i)
        },
        center: function(e) {
            return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), e.center()
        }
    }, THREE.ImageUtils = {
        crossOrigin: void 0,
        loadTexture: function(e, t, i, r) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            var n = new THREE.TextureLoader;
            return n.setCrossOrigin(this.crossOrigin), e = n.load(e, i, void 0, r), t && (e.mapping = t), e
        },
        loadTextureCube: function(e, t, i, r) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            var n = new THREE.CubeTextureLoader;
            return n.setCrossOrigin(this.crossOrigin), e = n.load(e, i, void 0, r), t && (e.mapping = t), e
        },
        loadCompressedTexture: function() {
            console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
        },
        loadCompressedTextureCube: function() {
            console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
        }
    }, THREE.Projector = function() {
        console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(e, t) {
            console.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t)
        }, this.unprojectVector = function(e, t) {
            console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t)
        }, this.pickingRay = function(e, t) {
            console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        }
    }, THREE.CanvasRenderer = function() {
        console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {}
    }, THREE.CurveUtils = {
        tangentQuadraticBezier: function(e, t, i, r) {
            return 2 * (1 - e) * (i - t) + 2 * e * (r - i)
        },
        tangentCubicBezier: function(e, t, i, r, n) {
            return -3 * t * (1 - e) * (1 - e) + 3 * i * (1 - e) * (1 - e) - 6 * e * i * (1 - e) + 6 * e * r * (1 - e) - 3 * e * e * r + 3 * e * e * n
        },
        tangentSpline: function(e, t, i, r, n) {
            return 6 * e * e - 6 * e + (3 * e * e - 4 * e + 1) + (-6 * e * e + 6 * e) + (3 * e * e - 2 * e)
        },
        interpolate: function(e, t, i, r, n) {
            e = .5 * (i - e), r = .5 * (r - t);
            var a = n * n;
            return (2 * t - 2 * i + e + r) * n * a + (-3 * t + 3 * i - 2 * e - r) * a + e * n + t
        }
    }, THREE.SceneUtils = {
        createMultiMaterialObject: function(e, t) {
            for (var i = new THREE.Group, r = 0, n = t.length; n > r; r++) i.add(new THREE.Mesh(e, t[r]));
            return i
        },
        detach: function(e, t, i) {
            e.applyMatrix(t.matrixWorld), t.remove(e), i.add(e)
        },
        attach: function(e, t, i) {
            var r = new THREE.Matrix4;
            r.getInverse(i.matrixWorld), e.applyMatrix(r), t.remove(e), i.add(e)
        }
    }, THREE.ShapeUtils = {
        area: function(e) {
            for (var t = e.length, i = 0, r = t - 1, n = 0; t > n; r = n++) i += e[r].x * e[n].y - e[n].x * e[r].y;
            return .5 * i
        },
        triangulate: function() {
            return function(e, t) {
                var i = e.length;
                if (3 > i) return null;
                var r = [],
                    n = [],
                    a = [],
                    o, s, c;
                if (0 < THREE.ShapeUtils.area(e))
                    for (s = 0; i > s; s++) n[s] = s;
                else
                    for (s = 0; i > s; s++) n[s] = i - 1 - s;
                var h = 2 * i;
                for (s = i - 1; i > 2;) {
                    if (0 >= h--) {
                        console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
                        break
                    }
                    o = s, o >= i && (o = 0), s = o + 1, s >= i && (s = 0), c = s + 1, c >= i && (c = 0);
                    var l;
                    e: {
                        var u = l = void 0,
                            p = void 0,
                            d = void 0,
                            f = void 0,
                            E = void 0,
                            m = void 0,
                            g = void 0,
                            T = void 0,
                            u = e[n[o]].x,
                            p = e[n[o]].y,
                            d = e[n[s]].x,
                            f = e[n[s]].y,
                            E = e[n[c]].x,
                            m = e[n[c]].y;
                        if (Number.EPSILON > (d - u) * (m - p) - (f - p) * (E - u)) l = !1;
                        else {
                            var v = void 0,
                                y = void 0,
                                R = void 0,
                                x = void 0,
                                H = void 0,
                                b = void 0,
                                _ = void 0,
                                M = void 0,
                                w = void 0,
                                S = void 0,
                                w = M = _ = T = g = void 0,
                                v = E - d,
                                y = m - f,
                                R = u - E,
                                x = p - m,
                                H = d - u,
                                b = f - p;
                            for (l = 0; i > l; l++)
                                if (g = e[n[l]].x, T = e[n[l]].y, !(g === u && T === p || g === d && T === f || g === E && T === m) && (_ = g - u, M = T - p, w = g - d, S = T - f, g -= E, T -= m, w = v * S - y * w, _ = H * M - b * _, M = R * T - x * g, w >= -Number.EPSILON && M >= -Number.EPSILON && _ >= -Number.EPSILON)) {
                                    l = !1;
                                    break e
                                } l = !0
                        }
                    }
                    if (l) {
                        for (r.push([e[n[o]], e[n[s]], e[n[c]]]), a.push([n[o], n[s], n[c]]), o = s, c = s + 1; i > c; o++, c++) n[o] = n[c];
                        i--, h = 2 * i
                    }
                }
                return t ? a : r
            }
        }(),
        triangulateShape: function(e, t) {
            function i(e) {
                var t = e.length;
                t > 2 && e[t - 1].equals(e[0]) && e.pop()
            }

            function r(e, t, i) {
                return e.x !== t.x ? e.x < t.x ? e.x <= i.x && i.x <= t.x : t.x <= i.x && i.x <= e.x : e.y < t.y ? e.y <= i.y && i.y <= t.y : t.y <= i.y && i.y <= e.y
            }

            function n(e, t, i, n, a) {
                var o = t.x - e.x,
                    s = t.y - e.y,
                    c = n.x - i.x,
                    h = n.y - i.y,
                    l = e.x - i.x,
                    u = e.y - i.y,
                    p = s * c - o * h,
                    d = s * l - o * u;
                if (Math.abs(p) > Number.EPSILON) {
                    if (p > 0) {
                        if (0 > d || d > p) return [];
                        if (c = h * l - c * u, 0 > c || c > p) return []
                    } else {
                        if (d > 0 || p > d) return [];
                        if (c = h * l - c * u, c > 0 || p > c) return []
                    }
                    return 0 === c ? !a || 0 !== d && d !== p ? [e] : [] : c === p ? !a || 0 !== d && d !== p ? [t] : [] : 0 === d ? [i] : d === p ? [n] : (a = c / p, [{
                        x: e.x + a * o,
                        y: e.y + a * s
                    }])
                }
                return 0 !== d || h * l !== c * u ? [] : (s = 0 === o && 0 === s, c = 0 === c && 0 === h, s && c ? e.x !== i.x || e.y !== i.y ? [] : [e] : s ? r(i, n, e) ? [e] : [] : c ? r(e, t, i) ? [i] : [] : (0 !== o ? (e.x < t.x ? (o = e, c = e.x, s = t, e = t.x) : (o = t, c = t.x, s = e, e = e.x), i.x < n.x ? (t = i, p = i.x, h = n, i = n.x) : (t = n, p = n.x, h = i, i = i.x)) : (e.y < t.y ? (o = e, c = e.y, s = t, e = t.y) : (o = t, c = t.y, s = e, e = e.y), i.y < n.y ? (t = i, p = i.y, h = n, i = n.y) : (t = n, p = n.y, h = i, i = i.y)), p >= c ? p > e ? [] : e === p ? a ? [] : [t] : i >= e ? [t, s] : [t, h] : c > i ? [] : c === i ? a ? [] : [o] : i >= e ? [o, s] : [o, h]))
            }

            function a(e, t, i, r) {
                var n = t.x - e.x,
                    a = t.y - e.y;
                t = i.x - e.x, i = i.y - e.y;
                var o = r.x - e.x;
                return r = r.y - e.y, e = n * i - a * t, n = n * r - a * o, Math.abs(e) > Number.EPSILON ? (t = o * i - r * t, e > 0 ? n >= 0 && t >= 0 : n >= 0 || t >= 0) : n > 0
            }
            i(e), t.forEach(i);
            var o, s, c, h, l, u = {};
            for (c = e.concat(), o = 0, s = t.length; s > o; o++) Array.prototype.push.apply(c, t[o]);
            for (o = 0, s = c.length; s > o; o++) l = c[o].x + ":" + c[o].y, void 0 !== u[l] && console.warn("THREE.ShapeUtils: Duplicate point", l, o), u[l] = o;
            o = function(e, t) {
                function i(e, t) {
                    var i = s.length - 1,
                        r = e - 1;
                    0 > r && (r = i);
                    var n = e + 1;
                    return n > i && (n = 0), (i = a(s[e], s[r], s[n], c[t])) ? (i = c.length - 1, r = t - 1, 0 > r && (r = i), n = t + 1, n > i && (n = 0), (i = a(c[t], c[r], c[n], s[e])) ? !0 : !1) : !1
                }

                function r(e, t) {
                    var i, r;
                    for (i = 0; i < s.length; i++)
                        if (r = i + 1, r %= s.length, r = n(e, t, s[i], s[r], !0), 0 < r.length) return !0;
                    return !1
                }

                function o(e, i) {
                    var r, a, o, s;
                    for (r = 0; r < h.length; r++)
                        for (a = t[h[r]], o = 0; o < a.length; o++)
                            if (s = o + 1, s %= a.length, s = n(e, i, a[o], a[s], !0), 0 < s.length) return !0;
                    return !1
                }
                var s = e.concat(),
                    c, h = [],
                    l, u, p, d, f, E = [],
                    m, g, T, v = 0;
                for (l = t.length; l > v; v++) h.push(v);
                m = 0;
                for (var y = 2 * h.length; 0 < h.length;) {
                    if (y--, 0 > y) {
                        console.log("Infinite Loop! Holes left:" + h.length + ", Probably Hole outside Shape!");
                        break
                    }
                    for (u = m; u < s.length; u++) {
                        for (p = s[u], l = -1, v = 0; v < h.length; v++)
                            if (d = h[v], f = p.x + ":" + p.y + ":" + d, void 0 === E[f]) {
                                for (c = t[d], g = 0; g < c.length; g++)
                                    if (d = c[g], i(u, g) && !r(p, d) && !o(p, d)) {
                                        l = g, h.splice(v, 1), m = s.slice(0, u + 1), d = s.slice(u), g = c.slice(l), T = c.slice(0, l + 1), s = m.concat(g).concat(T).concat(d), m = u;
                                        break
                                    } if (l >= 0) break;
                                E[f] = !0
                            } if (l >= 0) break
                    }
                }
                return s
            }(e, t);
            var p = THREE.ShapeUtils.triangulate(o, !1);
            for (o = 0, s = p.length; s > o; o++)
                for (h = p[o], c = 0; 3 > c; c++) l = h[c].x + ":" + h[c].y, l = u[l], void 0 !== l && (h[c] = l);
            return p.concat()
        },
        isClockWise: function(e) {
            return 0 > THREE.ShapeUtils.area(e)
        },
        b2: function() {
            return function(e, t, i, r) {
                var n = 1 - e;
                return n * n * t + 2 * (1 - e) * e * i + e * e * r
            }
        }(),
        b3: function() {
            return function(e, t, i, r, n) {
                var a = 1 - e,
                    o = 1 - e;
                return a * a * a * t + 3 * o * o * e * i + 3 * (1 - e) * e * e * r + e * e * e * n
            }
        }()
    }, THREE.Curve = function() {}, THREE.Curve.prototype = {
        constructor: THREE.Curve,
        getPoint: function(e) {
            return console.warn("THREE.Curve: Warning, getPoint() not implemented!"), null
        },
        getPointAt: function(e) {
            return e = this.getUtoTmapping(e), this.getPoint(e)
        },
        getPoints: function(e) {
            e || (e = 5);
            for (var t = [], i = 0; e >= i; i++) t.push(this.getPoint(i / e));
            return t
        },
        getSpacedPoints: function(e) {
            e || (e = 5);
            for (var t = [], i = 0; e >= i; i++) t.push(this.getPointAt(i / e));
            return t
        },
        getLength: function() {
            var e = this.getLengths();
            return e[e.length - 1]
        },
        getLengths: function(e) {
            if (e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var t = [],
                i, r = this.getPoint(0),
                n, a = 0;
            for (t.push(0), n = 1; e >= n; n++) i = this.getPoint(n / e), a += i.distanceTo(r), t.push(a), r = i;
            return this.cacheArcLengths = t
        },
        updateArcLengths: function() {
            this.needsUpdate = !0, this.getLengths()
        },
        getUtoTmapping: function(e, t) {
            var i = this.getLengths(),
                r = 0,
                n = i.length,
                a;
            a = t ? t : e * i[n - 1];
            for (var o = 0, s = n - 1, c; s >= o;)
                if (r = Math.floor(o + (s - o) / 2), c = i[r] - a, 0 > c) o = r + 1;
                else {
                    if (!(c > 0)) {
                        s = r;
                        break
                    }
                    s = r - 1
                } return r = s, i[r] === a ? r / (n - 1) : (o = i[r], i = (r + (a - o) / (i[r + 1] - o)) / (n - 1))
        },
        getTangent: function(e) {
            var t = e - 1e-4;
            return e += 1e-4, 0 > t && (t = 0), e > 1 && (e = 1), t = this.getPoint(t), this.getPoint(e).clone().sub(t).normalize()
        },
        getTangentAt: function(e) {
            return e = this.getUtoTmapping(e), this.getTangent(e)
        }
    }, THREE.Curve.create = function(e, t) {
        return e.prototype = Object.create(THREE.Curve.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
    }, THREE.CurvePath = function() {
        this.curves = [], this.autoClose = !1
    }, THREE.CurvePath.prototype = Object.assign(Object.create(THREE.Curve.prototype), {
        constructor: THREE.CurvePath,
        add: function(e) {
            this.curves.push(e)
        },
        closePath: function() {
            var e = this.curves[0].getPoint(0),
                t = this.curves[this.curves.length - 1].getPoint(1);
            e.equals(t) || this.curves.push(new THREE.LineCurve(t, e))
        },
        getPoint: function(e) {
            var t = e * this.getLength(),
                i = this.getCurveLengths();
            for (e = 0; e < i.length;) {
                if (i[e] >= t) return t = i[e] - t, e = this.curves[e], i = e.getLength(), e.getPointAt(0 === i ? 0 : 1 - t / i);
                e++
            }
            return null
        },
        getLength: function() {
            var e = this.getCurveLengths();
            return e[e.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0, this.cacheLengths = null, this.getLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            for (var e = [], t = 0, i = 0, r = this.curves.length; r > i; i++) t += this.curves[i].getLength(), e.push(t);
            return this.cacheLengths = e
        },
        getSpacedPoints: function(e) {
            e || (e = 40);
            for (var t = [], i = 0; e >= i; i++) t.push(this.getPoint(i / e));
            return this.autoClose && t.push(t[0]), t
        },
        getPoints: function(e) {
            e = e || 12;
            for (var t = [], i, r = 0, n = this.curves; r < n.length; r++)
                for (var a = n[r], a = a.getPoints(a instanceof THREE.EllipseCurve ? 2 * e : a instanceof THREE.LineCurve ? 1 : a instanceof THREE.SplineCurve ? e * a.points.length : e), o = 0; o < a.length; o++) {
                    var s = a[o];
                    i && i.equals(s) || (t.push(s), i = s)
                }
            return this.autoClose && 1 < t.length && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t
        },
        createPointsGeometry: function(e) {
            return e = this.getPoints(e), this.createGeometry(e)
        },
        createSpacedPointsGeometry: function(e) {
            return e = this.getSpacedPoints(e), this.createGeometry(e)
        },
        createGeometry: function(e) {
            for (var t = new THREE.Geometry, i = 0, r = e.length; r > i; i++) {
                var n = e[i];
                t.vertices.push(new THREE.Vector3(n.x, n.y, n.z || 0))
            }
            return t
        }
    }), THREE.Font = function(e) {
        this.data = e
    }, Object.assign(THREE.Font.prototype, {
        generateShapes: function(e, t, i) {
            void 0 === t && (t = 100), void 0 === i && (i = 4);
            var r = this.data;
            e = String(e).split("");
            var n = t / r.resolution,
                a = 0;
            t = [];
            for (var o = 0; o < e.length; o++) {
                var s;
                s = n;
                var c = a,
                    h = r.glyphs[e[o]] || r.glyphs["?"];
                if (h) {
                    var l = new THREE.ShapePath,
                        u = [],
                        p = THREE.ShapeUtils.b2,
                        d = THREE.ShapeUtils.b3,
                        f = void 0,
                        E = void 0,
                        m = E = f = void 0,
                        g = void 0,
                        T = void 0,
                        v = void 0,
                        y = void 0,
                        R = void 0,
                        g = void 0;
                    if (h.o)
                        for (var x = h._cachedOutline || (h._cachedOutline = h.o.split(" ")), H = 0, b = x.length; b > H;) switch (x[H++]) {
                            case "m":
                                f = x[H++] * s + c, E = x[H++] * s, l.moveTo(f, E);
                                break;
                            case "l":
                                f = x[H++] * s + c, E = x[H++] * s, l.lineTo(f, E);
                                break;
                            case "q":
                                if (f = x[H++] * s + c, E = x[H++] * s, T = x[H++] * s + c, v = x[H++] * s, l.quadraticCurveTo(T, v, f, E), g = u[u.length - 1])
                                    for (var m = g.x, g = g.y, _ = 1; i >= _; _++) {
                                        var M = _ / i;
                                        p(M, m, T, f), p(M, g, v, E)
                                    }
                                break;
                            case "b":
                                if (f = x[H++] * s + c, E = x[H++] * s, T = x[H++] * s + c, v = x[H++] * s, y = x[H++] * s + c, R = x[H++] * s, l.bezierCurveTo(T, v, y, R, f, E), g = u[u.length - 1])
                                    for (m = g.x, g = g.y, _ = 1; i >= _; _++) M = _ / i, d(M, m, T, y, f), d(M, g, v, R, E)
                        }
                    s = {
                        offset: h.ha * s,
                        path: l
                    }
                } else s = void 0;
                a += s.offset, t.push(s.path)
            }
            for (i = [], r = 0, e = t.length; e > r; r++) Array.prototype.push.apply(i, t[r].toShapes());
            return i
        }
    }), THREE.Path = function(e) {
        THREE.CurvePath.call(this), this.currentPoint = new THREE.Vector2, e && this.fromPoints(e)
    }, THREE.Path.prototype = Object.assign(Object.create(THREE.CurvePath.prototype), {
        constructor: THREE.Path,
        fromPoints: function(e) {
            this.moveTo(e[0].x, e[0].y);
            for (var t = 1, i = e.length; i > t; t++) this.lineTo(e[t].x, e[t].y)
        },
        moveTo: function(e, t) {
            this.currentPoint.set(e, t)
        },
        lineTo: function(e, t) {
            var i = new THREE.LineCurve(this.currentPoint.clone(), new THREE.Vector2(e, t));
            this.curves.push(i), this.currentPoint.set(e, t)
        },
        quadraticCurveTo: function(e, t, i, r) {
            e = new THREE.QuadraticBezierCurve(this.currentPoint.clone(), new THREE.Vector2(e, t), new THREE.Vector2(i, r)), this.curves.push(e), this.currentPoint.set(i, r)
        },
        bezierCurveTo: function(e, t, i, r, n, a) {
            e = new THREE.CubicBezierCurve(this.currentPoint.clone(), new THREE.Vector2(e, t), new THREE.Vector2(i, r), new THREE.Vector2(n, a)), this.curves.push(e), this.currentPoint.set(n, a)
        },
        splineThru: function(e) {
            var t = [this.currentPoint.clone()].concat(e),
                t = new THREE.SplineCurve(t);
            this.curves.push(t), this.currentPoint.copy(e[e.length - 1])
        },
        arc: function(e, t, i, r, n, a) {
            this.absarc(e + this.currentPoint.x, t + this.currentPoint.y, i, r, n, a)
        },
        absarc: function(e, t, i, r, n, a) {
            this.absellipse(e, t, i, i, r, n, a)
        },
        ellipse: function(e, t, i, r, n, a, o, s) {
            this.absellipse(e + this.currentPoint.x, t + this.currentPoint.y, i, r, n, a, o, s)
        },
        absellipse: function(e, t, i, r, n, a, o, s) {
            e = new THREE.EllipseCurve(e, t, i, r, n, a, o, s), 0 < this.curves.length && (t = e.getPoint(0), t.equals(this.currentPoint) || this.lineTo(t.x, t.y)), this.curves.push(e), e = e.getPoint(1), this.currentPoint.copy(e)
        }
    }), THREE.ShapePath = function() {
        this.subPaths = [], this.currentPath = null
    }, THREE.ShapePath.prototype = {
        moveTo: function(e, t) {
            this.currentPath = new THREE.Path, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t)
        },
        lineTo: function(e, t) {
            this.currentPath.lineTo(e, t)
        },
        quadraticCurveTo: function(e, t, i, r) {
            this.currentPath.quadraticCurveTo(e, t, i, r)
        },
        bezierCurveTo: function(e, t, i, r, n, a) {
            this.currentPath.bezierCurveTo(e, t, i, r, n, a)
        },
        splineThru: function(e) {
            this.currentPath.splineThru(e)
        },
        toShapes: function(e, t) {
            function i(e) {
                for (var t = [], i = 0, r = e.length; r > i; i++) {
                    var n = e[i],
                        a = new THREE.Shape;
                    a.curves = n.curves, t.push(a)
                }
                return t
            }

            function r(e, t) {
                for (var i = t.length, r = !1, n = i - 1, a = 0; i > a; n = a++) {
                    var o = t[n],
                        s = t[a],
                        c = s.x - o.x,
                        h = s.y - o.y;
                    if (Math.abs(h) > Number.EPSILON) {
                        if (0 > h && (o = t[a], c = -c, s = t[n], h = -h), !(e.y < o.y || e.y > s.y))
                            if (e.y === o.y) {
                                if (e.x === o.x) return !0
                            } else {
                                if (n = h * (e.x - o.x) - c * (e.y - o.y), 0 === n) return !0;
                                0 > n || (r = !r)
                            }
                    } else if (e.y === o.y && (s.x <= e.x && e.x <= o.x || o.x <= e.x && e.x <= s.x)) return !0
                }
                return r
            }
            var n = THREE.ShapeUtils.isClockWise,
                a = this.subPaths;
            if (0 === a.length) return [];
            if (!0 === t) return i(a);
            var o, s, c, h = [];
            if (1 === a.length) return s = a[0], c = new THREE.Shape, c.curves = s.curves, h.push(c), h;
            var l = !n(a[0].getPoints()),
                l = e ? !l : l;
            c = [];
            var u = [],
                p = [],
                d = 0,
                f;
            u[d] = void 0, p[d] = [];
            for (var E = 0, m = a.length; m > E; E++) s = a[E], f = s.getPoints(), o = n(f), (o = e ? !o : o) ? (!l && u[d] && d++, u[d] = {
                s: new THREE.Shape,
                p: f
            }, u[d].s.curves = s.curves, l && d++, p[d] = []) : p[d].push({
                h: s,
                p: f[0]
            });
            if (!u[0]) return i(a);
            if (1 < u.length) {
                for (E = !1, s = [], n = 0, a = u.length; a > n; n++) c[n] = [];
                for (n = 0, a = u.length; a > n; n++)
                    for (o = p[n], l = 0; l < o.length; l++) {
                        for (d = o[l], f = !0, m = 0; m < u.length; m++) r(d.p, u[m].p) && (n !== m && s.push({
                            froms: n,
                            tos: m,
                            hole: l
                        }), f ? (f = !1, c[m].push(d)) : E = !0);
                        f && c[n].push(d)
                    }
                0 < s.length && (E || (p = c))
            }
            for (E = 0, n = u.length; n > E; E++)
                for (c = u[E].s, h.push(c), s = p[E], a = 0, o = s.length; o > a; a++) c.holes.push(s[a].h);
            return h
        }
    }, THREE.Shape = function() {
        THREE.Path.apply(this, arguments), this.holes = []
    }, THREE.Shape.prototype = Object.assign(Object.create(THREE.Path.prototype), {
        constructor: THREE.Shape,
        extrude: function(e) {
            return new THREE.ExtrudeGeometry(this, e)
        },
        makeGeometry: function(e) {
            return new THREE.ShapeGeometry(this, e)
        },
        getPointsHoles: function(e) {
            for (var t = [], i = 0, r = this.holes.length; r > i; i++) t[i] = this.holes[i].getPoints(e);
            return t
        },
        extractAllPoints: function(e) {
            return {
                shape: this.getPoints(e),
                holes: this.getPointsHoles(e)
            }
        },
        extractPoints: function(e) {
            return this.extractAllPoints(e)
        }
    }), THREE.LineCurve = function(e, t) {
        this.v1 = e, this.v2 = t
    }, THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype), THREE.LineCurve.prototype.constructor = THREE.LineCurve, THREE.LineCurve.prototype.getPoint = function(e) {
        if (1 === e) return this.v2.clone();
        var t = this.v2.clone().sub(this.v1);
        return t.multiplyScalar(e).add(this.v1), t
    }, THREE.LineCurve.prototype.getPointAt = function(e) {
        return this.getPoint(e)
    }, THREE.LineCurve.prototype.getTangent = function(e) {
        return this.v2.clone().sub(this.v1).normalize()
    }, THREE.QuadraticBezierCurve = function(e, t, i) {
        this.v0 = e, this.v1 = t, this.v2 = i
    }, THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype), THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve, THREE.QuadraticBezierCurve.prototype.getPoint = function(e) {
        var t = THREE.ShapeUtils.b2;
        return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y))
    }, THREE.QuadraticBezierCurve.prototype.getTangent = function(e) {
        var t = THREE.CurveUtils.tangentQuadraticBezier;
        return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y)).normalize()
    }, THREE.CubicBezierCurve = function(e, t, i, r) {
        this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = r
    }, THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype), THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve, THREE.CubicBezierCurve.prototype.getPoint = function(e) {
        var t = THREE.ShapeUtils.b3;
        return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
    }, THREE.CubicBezierCurve.prototype.getTangent = function(e) {
        var t = THREE.CurveUtils.tangentCubicBezier;
        return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
    }, THREE.SplineCurve = function(e) {
        this.points = void 0 == e ? [] : e
    }, THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype), THREE.SplineCurve.prototype.constructor = THREE.SplineCurve, THREE.SplineCurve.prototype.getPoint = function(e) {
        var t = this.points;
        e *= t.length - 1;
        var i = Math.floor(e);
        e -= i;
        var r = t[0 === i ? i : i - 1],
            n = t[i],
            a = t[i > t.length - 2 ? t.length - 1 : i + 1],
            t = t[i > t.length - 3 ? t.length - 1 : i + 2],
            i = THREE.CurveUtils.interpolate;
        return new THREE.Vector2(i(r.x, n.x, a.x, t.x, e), i(r.y, n.y, a.y, t.y, e))
    }, THREE.EllipseCurve = function(e, t, i, r, n, a, o, s) {
        this.aX = e, this.aY = t, this.xRadius = i, this.yRadius = r, this.aStartAngle = n, this.aEndAngle = a, this.aClockwise = o, this.aRotation = s || 0
    }, THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype), THREE.EllipseCurve.prototype.constructor = THREE.EllipseCurve, THREE.EllipseCurve.prototype.getPoint = function(e) {
        for (var t = 2 * Math.PI, i = this.aEndAngle - this.aStartAngle, r = Math.abs(i) < Number.EPSILON; 0 > i;) i += t;
        for (; i > t;) i -= t;
        i < Number.EPSILON && (i = r ? 0 : t), !0 !== this.aClockwise || r || (i = i === t ? -t : i - t), t = this.aStartAngle + e * i, e = this.aX + this.xRadius * Math.cos(t);
        var n = this.aY + this.yRadius * Math.sin(t);
        return 0 !== this.aRotation && (t = Math.cos(this.aRotation), i = Math.sin(this.aRotation), r = e - this.aX, n -= this.aY, e = r * t - n * i + this.aX, n = r * i + n * t + this.aY), new THREE.Vector2(e, n)
    }, THREE.ArcCurve = function(e, t, i, r, n, a) {
        THREE.EllipseCurve.call(this, e, t, i, i, r, n, a);
    }, THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype), THREE.ArcCurve.prototype.constructor = THREE.ArcCurve, THREE.LineCurve3 = THREE.Curve.create(function(e, t) {
        this.v1 = e, this.v2 = t
    }, function(e) {
        if (1 === e) return this.v2.clone();
        var t = new THREE.Vector3;
        return t.subVectors(this.v2, this.v1), t.multiplyScalar(e), t.add(this.v1), t
    }), THREE.QuadraticBezierCurve3 = THREE.Curve.create(function(e, t, i) {
        this.v0 = e, this.v1 = t, this.v2 = i
    }, function(e) {
        var t = THREE.ShapeUtils.b2;
        return new THREE.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y), t(e, this.v0.z, this.v1.z, this.v2.z))
    }), THREE.CubicBezierCurve3 = THREE.Curve.create(function(e, t, i, r) {
        this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = r
    }, function(e) {
        var t = THREE.ShapeUtils.b3;
        return new THREE.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), t(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
    }), THREE.SplineCurve3 = THREE.Curve.create(function(e) {
        console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"), this.points = void 0 == e ? [] : e
    }, function(e) {
        var t = this.points;
        e *= t.length - 1;
        var i = Math.floor(e);
        e -= i;
        var r = t[0 == i ? i : i - 1],
            n = t[i],
            a = t[i > t.length - 2 ? t.length - 1 : i + 1],
            t = t[i > t.length - 3 ? t.length - 1 : i + 2],
            i = THREE.CurveUtils.interpolate;
        return new THREE.Vector3(i(r.x, n.x, a.x, t.x, e), i(r.y, n.y, a.y, t.y, e), i(r.z, n.z, a.z, t.z, e))
    }), THREE.CatmullRomCurve3 = function() {
        function e() {}
        var t = new THREE.Vector3,
            i = new e,
            r = new e,
            n = new e;
        return e.prototype.init = function(e, t, i, r) {
            this.c0 = e, this.c1 = i, this.c2 = -3 * e + 3 * t - 2 * i - r, this.c3 = 2 * e - 2 * t + i + r
        }, e.prototype.initNonuniformCatmullRom = function(e, t, i, r, n, a, o) {
            e = ((t - e) / n - (i - e) / (n + a) + (i - t) / a) * a, r = ((i - t) / a - (r - t) / (a + o) + (r - i) / o) * a, this.init(t, i, e, r)
        }, e.prototype.initCatmullRom = function(e, t, i, r, n) {
            this.init(t, i, n * (i - e), n * (r - t))
        }, e.prototype.calc = function(e) {
            var t = e * e;
            return this.c0 + this.c1 * e + this.c2 * t + this.c3 * t * e
        }, THREE.Curve.create(function(e) {
            this.points = e || [], this.closed = !1
        }, function(e) {
            var a = this.points,
                o, s;
            s = a.length, 2 > s && console.log("duh, you need at least 2 points"), e *= s - (this.closed ? 0 : 1), o = Math.floor(e), e -= o, this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / a.length) + 1) * a.length : 0 === e && o === s - 1 && (o = s - 2, e = 1);
            var c, h, l;
            if (this.closed || o > 0 ? c = a[(o - 1) % s] : (t.subVectors(a[0], a[1]).add(a[0]), c = t), h = a[o % s], l = a[(o + 1) % s], this.closed || s > o + 2 ? a = a[(o + 2) % s] : (t.subVectors(a[s - 1], a[s - 2]).add(a[s - 1]), a = t), void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
                var u = "chordal" === this.type ? .5 : .25;
                s = Math.pow(c.distanceToSquared(h), u), o = Math.pow(h.distanceToSquared(l), u), u = Math.pow(l.distanceToSquared(a), u), 1e-4 > o && (o = 1), 1e-4 > s && (s = o), 1e-4 > u && (u = o), i.initNonuniformCatmullRom(c.x, h.x, l.x, a.x, s, o, u), r.initNonuniformCatmullRom(c.y, h.y, l.y, a.y, s, o, u), n.initNonuniformCatmullRom(c.z, h.z, l.z, a.z, s, o, u)
            } else "catmullrom" === this.type && (s = void 0 !== this.tension ? this.tension : .5, i.initCatmullRom(c.x, h.x, l.x, a.x, s), r.initCatmullRom(c.y, h.y, l.y, a.y, s), n.initCatmullRom(c.z, h.z, l.z, a.z, s));
            return new THREE.Vector3(i.calc(e), r.calc(e), n.calc(e))
        })
    }(), THREE.ClosedSplineCurve3 = function(e) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3."), THREE.CatmullRomCurve3.call(this, e), this.type = "catmullrom", this.closed = !0
    }, THREE.ClosedSplineCurve3.prototype = Object.create(THREE.CatmullRomCurve3.prototype), THREE.BoxGeometry = function(e, t, i, r, n, a) {
        THREE.Geometry.call(this), this.type = "BoxGeometry", this.parameters = {
            width: e,
            height: t,
            depth: i,
            widthSegments: r,
            heightSegments: n,
            depthSegments: a
        }, this.fromBufferGeometry(new THREE.BoxBufferGeometry(e, t, i, r, n, a)), this.mergeVertices()
    }, THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry, THREE.CubeGeometry = THREE.BoxGeometry, THREE.BoxBufferGeometry = function(e, t, i, r, n, a) {
        function o(e, t, i, r, n, a, o, c, h, v, y) {
            var R = a / h,
                x = o / v,
                H = a / 2,
                b = o / 2,
                _ = c / 2;
            o = h + 1;
            for (var M = v + 1, w = a = 0, S = new THREE.Vector3, A = 0; M > A; A++)
                for (var $ = A * x - b, L = 0; o > L; L++) S[e] = (L * R - H) * r, S[t] = $ * n, S[i] = _, u[f] = S.x, u[f + 1] = S.y, u[f + 2] = S.z, S[e] = 0, S[t] = 0, S[i] = c > 0 ? 1 : -1, p[f] = S.x, p[f + 1] = S.y, p[f + 2] = S.z, d[E] = L / h, d[E + 1] = 1 - A / v, f += 3, E += 2, a += 1;
            for (A = 0; v > A; A++)
                for (L = 0; h > L; L++) e = g + L + o * (A + 1), t = g + (L + 1) + o * (A + 1), i = g + (L + 1) + o * A, l[m] = g + L + o * A, l[m + 1] = e, l[m + 2] = i, l[m + 3] = e, l[m + 4] = t, l[m + 5] = i, m += 6, w += 6;
            s.addGroup(T, w, y), T += w, g += a
        }
        THREE.BufferGeometry.call(this), this.type = "BoxBufferGeometry", this.parameters = {
            width: e,
            height: t,
            depth: i,
            widthSegments: r,
            heightSegments: n,
            depthSegments: a
        };
        var s = this;
        r = Math.floor(r) || 1, n = Math.floor(n) || 1, a = Math.floor(a) || 1;
        var c = function(e, t, i) {
                return e = 0 + (e + 1) * (t + 1) * 2 + (e + 1) * (i + 1) * 2, e += (i + 1) * (t + 1) * 2
            }(r, n, a),
            h = function(e, t, i) {
                return e = 0 + e * t * 2 + e * i * 2, e += i * t * 2, 6 * e
            }(r, n, a),
            l = new(h > 65535 ? Uint32Array : Uint16Array)(h),
            u = new Float32Array(3 * c),
            p = new Float32Array(3 * c),
            d = new Float32Array(2 * c),
            f = 0,
            E = 0,
            m = 0,
            g = 0,
            T = 0;
        o("z", "y", "x", -1, -1, i, t, e, a, n, 0), o("z", "y", "x", 1, -1, i, t, -e, a, n, 1), o("x", "z", "y", 1, 1, e, i, t, r, a, 2), o("x", "z", "y", 1, -1, e, i, -t, r, a, 3), o("x", "y", "z", 1, -1, e, t, i, r, n, 4), o("x", "y", "z", -1, -1, e, t, -i, r, n, 5), this.setIndex(new THREE.BufferAttribute(l, 1)), this.addAttribute("position", new THREE.BufferAttribute(u, 3)), this.addAttribute("normal", new THREE.BufferAttribute(p, 3)), this.addAttribute("uv", new THREE.BufferAttribute(d, 2))
    }, THREE.BoxBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.BoxBufferGeometry.prototype.constructor = THREE.BoxBufferGeometry, THREE.CircleGeometry = function(e, t, i, r) {
        THREE.Geometry.call(this), this.type = "CircleGeometry", this.parameters = {
            radius: e,
            segments: t,
            thetaStart: i,
            thetaLength: r
        }, this.fromBufferGeometry(new THREE.CircleBufferGeometry(e, t, i, r))
    }, THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.CircleGeometry.prototype.constructor = THREE.CircleGeometry, THREE.CircleBufferGeometry = function(e, t, i, r) {
        THREE.BufferGeometry.call(this), this.type = "CircleBufferGeometry", this.parameters = {
            radius: e,
            segments: t,
            thetaStart: i,
            thetaLength: r
        }, e = e || 50, t = void 0 !== t ? Math.max(3, t) : 8, i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI;
        var n = t + 2,
            a = new Float32Array(3 * n),
            o = new Float32Array(3 * n),
            n = new Float32Array(2 * n);
        o[2] = 1, n[0] = .5, n[1] = .5;
        for (var s = 0, c = 3, h = 2; t >= s; s++, c += 3, h += 2) {
            var l = i + s / t * r;
            a[c] = e * Math.cos(l), a[c + 1] = e * Math.sin(l), o[c + 2] = 1, n[h] = (a[c] / e + 1) / 2, n[h + 1] = (a[c + 1] / e + 1) / 2
        }
        for (i = [], c = 1; t >= c; c++) i.push(c, c + 1, 0);
        this.setIndex(new THREE.BufferAttribute(new Uint16Array(i), 1)), this.addAttribute("position", new THREE.BufferAttribute(a, 3)), this.addAttribute("normal", new THREE.BufferAttribute(o, 3)), this.addAttribute("uv", new THREE.BufferAttribute(n, 2)), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
    }, THREE.CircleBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.CircleBufferGeometry.prototype.constructor = THREE.CircleBufferGeometry, THREE.CylinderBufferGeometry = function(e, t, i, r, n, a, o, s) {
        function c(i) {
            var n, a, c, l = new THREE.Vector2,
                u = new THREE.Vector3,
                p = 0,
                v = !0 === i ? e : t,
                x = !0 === i ? 1 : -1;
            for (a = g, n = 1; r >= n; n++) f.setXYZ(g, 0, y * x, 0), E.setXYZ(g, 0, x, 0), l.x = .5, l.y = .5, m.setXY(g, l.x, l.y), g++;
            for (c = g, n = 0; r >= n; n++) {
                var H = n / r * s + o,
                    b = Math.cos(H),
                    H = Math.sin(H);
                u.x = v * H, u.y = y * x, u.z = v * b, f.setXYZ(g, u.x, u.y, u.z), E.setXYZ(g, 0, x, 0), l.x = .5 * b + .5, l.y = .5 * H * x + .5, m.setXY(g, l.x, l.y), g++
            }
            for (n = 0; r > n; n++) l = a + n, u = c + n, !0 === i ? (d.setX(T, u), T++, d.setX(T, u + 1)) : (d.setX(T, u + 1), T++, d.setX(T, u)), T++, d.setX(T, l), T++, p += 3;
            h.addGroup(R, p, !0 === i ? 1 : 2), R += p
        }
        THREE.BufferGeometry.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: i,
            radialSegments: r,
            heightSegments: n,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        };
        var h = this;
        e = void 0 !== e ? e : 20, t = void 0 !== t ? t : 20, i = void 0 !== i ? i : 100, r = Math.floor(r) || 8, n = Math.floor(n) || 1, a = void 0 !== a ? a : !1, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
        var l = 0;
        !1 === a && (e > 0 && l++, t > 0 && l++);
        var u = function() {
                var e = (r + 1) * (n + 1);
                return !1 === a && (e += (r + 1) * l + r * l), e
            }(),
            p = function() {
                var e = r * n * 6;
                return !1 === a && (e += r * l * 3), e
            }(),
            d = new THREE.BufferAttribute(new(p > 65535 ? Uint32Array : Uint16Array)(p), 1),
            f = new THREE.BufferAttribute(new Float32Array(3 * u), 3),
            E = new THREE.BufferAttribute(new Float32Array(3 * u), 3),
            m = new THREE.BufferAttribute(new Float32Array(2 * u), 2),
            g = 0,
            T = 0,
            v = [],
            y = i / 2,
            R = 0;
        ! function() {
            var a, c, l = new THREE.Vector3,
                u = new THREE.Vector3,
                p = 0,
                x = (t - e) / i;
            for (c = 0; n >= c; c++) {
                var H = [],
                    b = c / n,
                    _ = b * (t - e) + e;
                for (a = 0; r >= a; a++) {
                    var M = a / r;
                    u.x = _ * Math.sin(M * s + o), u.y = -b * i + y, u.z = _ * Math.cos(M * s + o), f.setXYZ(g, u.x, u.y, u.z), l.copy(u), (0 === e && 0 === c || 0 === t && c === n) && (l.x = Math.sin(M * s + o), l.z = Math.cos(M * s + o)), l.setY(Math.sqrt(l.x * l.x + l.z * l.z) * x).normalize(), E.setXYZ(g, l.x, l.y, l.z), m.setXY(g, M, 1 - b), H.push(g), g++
                }
                v.push(H)
            }
            for (a = 0; r > a; a++)
                for (c = 0; n > c; c++) l = v[c + 1][a], u = v[c + 1][a + 1], x = v[c][a + 1], d.setX(T, v[c][a]), T++, d.setX(T, l), T++, d.setX(T, x), T++, d.setX(T, l), T++, d.setX(T, u), T++, d.setX(T, x), T++, p += 6;
            h.addGroup(R, p, 0), R += p
        }(), !1 === a && (e > 0 && c(!0), t > 0 && c(!1)), this.setIndex(d), this.addAttribute("position", f), this.addAttribute("normal", E), this.addAttribute("uv", m)
    }, THREE.CylinderBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.CylinderBufferGeometry.prototype.constructor = THREE.CylinderBufferGeometry, THREE.CylinderGeometry = function(e, t, i, r, n, a, o, s) {
        THREE.Geometry.call(this), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: i,
            radialSegments: r,
            heightSegments: n,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        }, this.fromBufferGeometry(new THREE.CylinderBufferGeometry(e, t, i, r, n, a, o, s)), this.mergeVertices()
    }, THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry, THREE.ConeBufferGeometry = function(e, t, i, r, n, a, o) {
        THREE.CylinderBufferGeometry.call(this, 0, e, t, i, r, n, a, o), this.type = "ConeBufferGeometry", this.parameters = {
            radius: e,
            height: t,
            radialSegments: i,
            heightSegments: r,
            thetaStart: a,
            thetaLength: o
        }
    }, THREE.ConeBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.ConeBufferGeometry.prototype.constructor = THREE.ConeBufferGeometry, THREE.ConeGeometry = function(e, t, i, r, n, a, o) {
        THREE.CylinderGeometry.call(this, 0, e, t, i, r, n, a, o), this.type = "ConeGeometry", this.parameters = {
            radius: e,
            height: t,
            radialSegments: i,
            heightSegments: r,
            openEnded: n,
            thetaStart: a,
            thetaLength: o
        }
    }, THREE.ConeGeometry.prototype = Object.create(THREE.CylinderGeometry.prototype), THREE.ConeGeometry.prototype.constructor = THREE.ConeGeometry, THREE.EdgesGeometry = function(e, t) {
        function i(e, t) {
            return e - t
        }
        THREE.BufferGeometry.call(this);
        var r = Math.cos(THREE.Math.DEG2RAD * (void 0 !== t ? t : 1)),
            n = [0, 0],
            a = {},
            o = ["a", "b", "c"],
            s;
        e instanceof THREE.BufferGeometry ? (s = new THREE.Geometry, s.fromBufferGeometry(e)) : s = e.clone(), s.mergeVertices(), s.computeFaceNormals();
        var c = s.vertices;
        s = s.faces;
        for (var h = 0, l = s.length; l > h; h++)
            for (var u = s[h], p = 0; 3 > p; p++) {
                n[0] = u[o[p]], n[1] = u[o[(p + 1) % 3]], n.sort(i);
                var d = n.toString();
                void 0 === a[d] ? a[d] = {
                    vert1: n[0],
                    vert2: n[1],
                    face1: h,
                    face2: void 0
                } : a[d].face2 = h
            }
        n = [];
        for (d in a) o = a[d], (void 0 === o.face2 || s[o.face1].normal.dot(s[o.face2].normal) <= r) && (h = c[o.vert1], n.push(h.x), n.push(h.y), n.push(h.z), h = c[o.vert2], n.push(h.x), n.push(h.y), n.push(h.z));
        this.addAttribute("position", new THREE.BufferAttribute(new Float32Array(n), 3))
    }, THREE.EdgesGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.EdgesGeometry.prototype.constructor = THREE.EdgesGeometry, THREE.ExtrudeGeometry = function(e, t) {
        "undefined" != typeof e && (THREE.Geometry.call(this), this.type = "ExtrudeGeometry", e = Array.isArray(e) ? e : [e], this.addShapeList(e, t), this.computeFaceNormals())
    }, THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry, THREE.ExtrudeGeometry.prototype.addShapeList = function(e, t) {
        for (var i = e.length, r = 0; i > r; r++) this.addShape(e[r], t)
    }, THREE.ExtrudeGeometry.prototype.addShape = function(e, t) {
        function i(e, t, i) {
            return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(i).add(e)
        }

        function r(e, t, i) {
            var r = 1,
                r = e.x - t.x,
                n = e.y - t.y,
                a = i.x - e.x,
                o = i.y - e.y,
                s = r * r + n * n;
            if (Math.abs(r * o - n * a) > Number.EPSILON) {
                var c = Math.sqrt(s),
                    h = Math.sqrt(a * a + o * o),
                    s = t.x - n / c;
                if (t = t.y + r / c, a = ((i.x - o / h - s) * o - (i.y + a / h - t) * a) / (r * o - n * a), i = s + r * a - e.x, e = t + n * a - e.y, r = i * i + e * e, 2 >= r) return new THREE.Vector2(i, e);
                r = Math.sqrt(r / 2)
            } else e = !1, r > Number.EPSILON ? a > Number.EPSILON && (e = !0) : r < -Number.EPSILON ? a < -Number.EPSILON && (e = !0) : Math.sign(n) === Math.sign(o) && (e = !0), e ? (i = -n, e = r, r = Math.sqrt(s)) : (i = r, e = n, r = Math.sqrt(s / 2));
            return new THREE.Vector2(i / r, e / r)
        }

        function n(e, t) {
            var i, r;
            for (F = e.length; 0 <= --F;) {
                i = F, r = F - 1, 0 > r && (r = e.length - 1);
                for (var n = 0, a = d + 2 * l, n = 0; a > n; n++) {
                    var o = U * n,
                        s = U * (n + 1),
                        c = t + i + o,
                        o = t + r + o,
                        h = t + r + s,
                        s = t + i + s,
                        c = c + M,
                        o = o + M,
                        h = h + M,
                        s = s + M;
                    _.faces.push(new THREE.Face3(c, o, s, null, null, 1)), _.faces.push(new THREE.Face3(o, h, s, null, null, 1)), c = g.generateSideWallUV(_, c, o, h, s), _.faceVertexUvs[0].push([c[0], c[1], c[3]]), _.faceVertexUvs[0].push([c[1], c[2], c[3]])
                }
            }
        }

        function a(e, t, i) {
            _.vertices.push(new THREE.Vector3(e, t, i))
        }

        function o(e, t, i) {
            e += M, t += M, i += M, _.faces.push(new THREE.Face3(e, t, i, null, null, 0)), e = g.generateTopUV(_, e, t, i), _.faceVertexUvs[0].push(e)
        }
        var s = void 0 !== t.amount ? t.amount : 100,
            c = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
            h = void 0 !== t.bevelSize ? t.bevelSize : c - 2,
            l = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
            u = void 0 !== t.bevelEnabled ? t.bevelEnabled : !0,
            p = void 0 !== t.curveSegments ? t.curveSegments : 12,
            d = void 0 !== t.steps ? t.steps : 1,
            f = t.extrudePath,
            E, m = !1,
            g = void 0 !== t.UVGenerator ? t.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator,
            T, v, y, R;
        f && (E = f.getSpacedPoints(d), m = !0, u = !1, T = void 0 !== t.frames ? t.frames : new THREE.TubeGeometry.FrenetFrames(f, d, !1), v = new THREE.Vector3, y = new THREE.Vector3, R = new THREE.Vector3), u || (h = c = l = 0);
        var x, H, b, _ = this,
            M = this.vertices.length,
            f = e.extractPoints(p),
            p = f.shape,
            w = f.holes;
        if (f = !THREE.ShapeUtils.isClockWise(p)) {
            for (p = p.reverse(), H = 0, b = w.length; b > H; H++) x = w[H], THREE.ShapeUtils.isClockWise(x) && (w[H] = x.reverse());
            f = !1
        }
        var S = THREE.ShapeUtils.triangulateShape(p, w),
            A = p;
        for (H = 0, b = w.length; b > H; H++) x = w[H], p = p.concat(x);
        var L, C, P, D, B, U = p.length,
            I, O = S.length,
            f = [],
            F = 0;
        for (P = A.length, L = P - 1, C = F + 1; P > F; F++, L++, C++) L === P && (L = 0), C === P && (C = 0), f[F] = r(A[F], A[L], A[C]);
        var $ = [],
            N, G = f.concat();
        for (H = 0, b = w.length; b > H; H++) {
            for (x = w[H], N = [], F = 0, P = x.length, L = P - 1, C = F + 1; P > F; F++, L++, C++) L === P && (L = 0), C === P && (C = 0), N[F] = r(x[F], x[L], x[C]);
            $.push(N), G = G.concat(N)
        }
        for (L = 0; l > L; L++) {
            for (P = L / l, D = c * (1 - P), C = h * Math.sin(P * Math.PI / 2), F = 0, P = A.length; P > F; F++) B = i(A[F], f[F], C), a(B.x, B.y, -D);
            for (H = 0, b = w.length; b > H; H++)
                for (x = w[H], N = $[H], F = 0, P = x.length; P > F; F++) B = i(x[F], N[F], C), a(B.x, B.y, -D)
        }
        for (C = h, F = 0; U > F; F++) B = u ? i(p[F], G[F], C) : p[F], m ? (y.copy(T.normals[0]).multiplyScalar(B.x), v.copy(T.binormals[0]).multiplyScalar(B.y), R.copy(E[0]).add(y).add(v), a(R.x, R.y, R.z)) : a(B.x, B.y, 0);
        for (P = 1; d >= P; P++)
            for (F = 0; U > F; F++) B = u ? i(p[F], G[F], C) : p[F], m ? (y.copy(T.normals[P]).multiplyScalar(B.x), v.copy(T.binormals[P]).multiplyScalar(B.y), R.copy(E[P]).add(y).add(v), a(R.x, R.y, R.z)) : a(B.x, B.y, s / d * P);
        for (L = l - 1; L >= 0; L--) {
            for (P = L / l, D = c * (1 - P), C = h * Math.sin(P * Math.PI / 2), F = 0, P = A.length; P > F; F++) B = i(A[F], f[F], C), a(B.x, B.y, s + D);
            for (H = 0, b = w.length; b > H; H++)
                for (x = w[H], N = $[H], F = 0, P = x.length; P > F; F++) B = i(x[F], N[F], C), m ? a(B.x, B.y + E[d - 1].y, E[d - 1].x + D) : a(B.x, B.y, s + D)
        }! function() {
            if (u) {
                var e;
                for (e = 0 * U, F = 0; O > F; F++) I = S[F], o(I[2] + e, I[1] + e, I[0] + e);
                for (e = d + 2 * l, e *= U, F = 0; O > F; F++) I = S[F], o(I[0] + e, I[1] + e, I[2] + e)
            } else {
                for (F = 0; O > F; F++) I = S[F], o(I[2], I[1], I[0]);
                for (F = 0; O > F; F++) I = S[F], o(I[0] + U * d, I[1] + U * d, I[2] + U * d)
            }
        }(),
        function() {
            var e = 0;
            for (n(A, e), e += A.length, H = 0, b = w.length; b > H; H++) x = w[H], n(x, e), e += x.length
        }()
    }, THREE.ExtrudeGeometry.WorldUVGenerator = {
        generateTopUV: function(e, t, i, r) {
            return e = e.vertices, t = e[t], i = e[i], r = e[r], [new THREE.Vector2(t.x, t.y), new THREE.Vector2(i.x, i.y), new THREE.Vector2(r.x, r.y)]
        },
        generateSideWallUV: function(e, t, i, r, n) {
            return e = e.vertices, t = e[t], i = e[i], r = e[r], n = e[n], .01 > Math.abs(t.y - i.y) ? [new THREE.Vector2(t.x, 1 - t.z), new THREE.Vector2(i.x, 1 - i.z), new THREE.Vector2(r.x, 1 - r.z), new THREE.Vector2(n.x, 1 - n.z)] : [new THREE.Vector2(t.y, 1 - t.z), new THREE.Vector2(i.y, 1 - i.z), new THREE.Vector2(r.y, 1 - r.z), new THREE.Vector2(n.y, 1 - n.z)]
        }
    }, THREE.ShapeGeometry = function(e, t) {
        THREE.Geometry.call(this), this.type = "ShapeGeometry", !1 === Array.isArray(e) && (e = [e]), this.addShapeList(e, t), this.computeFaceNormals()
    }, THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ShapeGeometry.prototype.constructor = THREE.ShapeGeometry, THREE.ShapeGeometry.prototype.addShapeList = function(e, t) {
        for (var i = 0, r = e.length; r > i; i++) this.addShape(e[i], t);
        return this
    }, THREE.ShapeGeometry.prototype.addShape = function(e, t) {
        void 0 === t && (t = {});
        var i = t.material,
            r = void 0 === t.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator,
            n, a, o, s = this.vertices.length;
        n = e.extractPoints(void 0 !== t.curveSegments ? t.curveSegments : 12);
        var c = n.shape,
            h = n.holes;
        if (!THREE.ShapeUtils.isClockWise(c))
            for (c = c.reverse(), n = 0, a = h.length; a > n; n++) o = h[n], THREE.ShapeUtils.isClockWise(o) && (h[n] = o.reverse());
        var l = THREE.ShapeUtils.triangulateShape(c, h);
        for (n = 0, a = h.length; a > n; n++) o = h[n], c = c.concat(o);
        for (h = c.length, a = l.length, n = 0; h > n; n++) o = c[n], this.vertices.push(new THREE.Vector3(o.x, o.y, 0));
        for (n = 0; a > n; n++) h = l[n], c = h[0] + s, o = h[1] + s, h = h[2] + s, this.faces.push(new THREE.Face3(c, o, h, null, null, i)), this.faceVertexUvs[0].push(r.generateTopUV(this, c, o, h))
    }, THREE.LatheBufferGeometry = function(e, t, i, r) {
        THREE.BufferGeometry.call(this), this.type = "LatheBufferGeometry", this.parameters = {
            points: e,
            segments: t,
            phiStart: i,
            phiLength: r
        }, t = Math.floor(t) || 12, i = i || 0, r = r || 2 * Math.PI, r = THREE.Math.clamp(r, 0, 2 * Math.PI);
        for (var n = (t + 1) * e.length, a = t * e.length * 6, o = new THREE.BufferAttribute(new(a > 65535 ? Uint32Array : Uint16Array)(a), 1), s = new THREE.BufferAttribute(new Float32Array(3 * n), 3), c = new THREE.BufferAttribute(new Float32Array(2 * n), 2), h = 0, l = 0, u = 1 / t, p = new THREE.Vector3, d = new THREE.Vector2, n = 0; t >= n; n++)
            for (var a = i + n * u * r, f = Math.sin(a), E = Math.cos(a), a = 0; a <= e.length - 1; a++) p.x = e[a].x * f, p.y = e[a].y, p.z = e[a].x * E, s.setXYZ(h, p.x, p.y, p.z), d.x = n / t, d.y = a / (e.length - 1), c.setXY(h, d.x, d.y), h++;
        for (n = 0; t > n; n++)
            for (a = 0; a < e.length - 1; a++) i = a + n * e.length, h = i + e.length, u = i + e.length + 1, p = i + 1, o.setX(l, i), l++, o.setX(l, h), l++, o.setX(l, p), l++, o.setX(l, h), l++, o.setX(l, u), l++, o.setX(l, p), l++;
        if (this.setIndex(o), this.addAttribute("position", s), this.addAttribute("uv", c), this.computeVertexNormals(), r === 2 * Math.PI)
            for (r = this.attributes.normal.array, o = new THREE.Vector3, s = new THREE.Vector3, c = new THREE.Vector3, i = t * e.length * 3, a = n = 0; n < e.length; n++, a += 3) o.x = r[a + 0], o.y = r[a + 1], o.z = r[a + 2], s.x = r[i + a + 0], s.y = r[i + a + 1], s.z = r[i + a + 2], c.addVectors(o, s).normalize(), r[a + 0] = r[i + a + 0] = c.x, r[a + 1] = r[i + a + 1] = c.y, r[a + 2] = r[i + a + 2] = c.z
    }, THREE.LatheBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.LatheBufferGeometry.prototype.constructor = THREE.LatheBufferGeometry, THREE.LatheGeometry = function(e, t, i, r) {
        THREE.Geometry.call(this), this.type = "LatheGeometry", this.parameters = {
            points: e,
            segments: t,
            phiStart: i,
            phiLength: r
        }, this.fromBufferGeometry(new THREE.LatheBufferGeometry(e, t, i, r)), this.mergeVertices()
    }, THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry, THREE.PlaneGeometry = function(e, t, i, r) {
        THREE.Geometry.call(this), this.type = "PlaneGeometry", this.parameters = {
            width: e,
            height: t,
            widthSegments: i,
            heightSegments: r
        }, this.fromBufferGeometry(new THREE.PlaneBufferGeometry(e, t, i, r))
    }, THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry, THREE.PlaneBufferGeometry = function(e, t, i, r) {
        THREE.BufferGeometry.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
            width: e,
            height: t,
            widthSegments: i,
            heightSegments: r
        };
        var n = e / 2,
            a = t / 2;
        i = Math.floor(i) || 1, r = Math.floor(r) || 1;
        var o = i + 1,
            s = r + 1,
            c = e / i,
            h = t / r;
        t = new Float32Array(o * s * 3), e = new Float32Array(o * s * 3);
        for (var l = new Float32Array(o * s * 2), u = 0, p = 0, d = 0; s > d; d++)
            for (var f = d * h - a, E = 0; o > E; E++) t[u] = E * c - n, t[u + 1] = -f, e[u + 2] = 1, l[p] = E / i, l[p + 1] = 1 - d / r, u += 3, p += 2;
        for (u = 0, n = new(65535 < t.length / 3 ? Uint32Array : Uint16Array)(i * r * 6), d = 0; r > d; d++)
            for (E = 0; i > E; E++) a = E + o * (d + 1), s = E + 1 + o * (d + 1), c = E + 1 + o * d, n[u] = E + o * d, n[u + 1] = a, n[u + 2] = c, n[u + 3] = a, n[u + 4] = s, n[u + 5] = c, u += 6;
        this.setIndex(new THREE.BufferAttribute(n, 1)), this.addAttribute("position", new THREE.BufferAttribute(t, 3)), this.addAttribute("normal", new THREE.BufferAttribute(e, 3)), this.addAttribute("uv", new THREE.BufferAttribute(l, 2))
    }, THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.PlaneBufferGeometry.prototype.constructor = THREE.PlaneBufferGeometry, THREE.RingBufferGeometry = function(e, t, i, r, n, a) {
        THREE.BufferGeometry.call(this), this.type = "RingBufferGeometry", this.parameters = {
            innerRadius: e,
            outerRadius: t,
            thetaSegments: i,
            phiSegments: r,
            thetaStart: n,
            thetaLength: a
        }, e = e || 20, t = t || 50, n = void 0 !== n ? n : 0, a = void 0 !== a ? a : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8, r = void 0 !== r ? Math.max(1, r) : 1;
        var o = (i + 1) * (r + 1),
            s = i * r * 6,
            s = new THREE.BufferAttribute(new(s > 65535 ? Uint32Array : Uint16Array)(s), 1),
            c = new THREE.BufferAttribute(new Float32Array(3 * o), 3),
            h = new THREE.BufferAttribute(new Float32Array(3 * o), 3),
            o = new THREE.BufferAttribute(new Float32Array(2 * o), 2),
            l = 0,
            u = 0,
            p, d = e,
            f = (t - e) / r,
            E = new THREE.Vector3,
            m = new THREE.Vector2,
            g;
        for (e = 0; r >= e; e++) {
            for (g = 0; i >= g; g++) p = n + g / i * a, E.x = d * Math.cos(p), E.y = d * Math.sin(p), c.setXYZ(l, E.x, E.y, E.z), h.setXYZ(l, 0, 0, 1), m.x = (E.x / t + 1) / 2, m.y = (E.y / t + 1) / 2, o.setXY(l, m.x, m.y), l++;
            d += f
        }
        for (e = 0; r > e; e++)
            for (t = e * (i + 1), g = 0; i > g; g++) n = p = g + t, a = p + i + 1, l = p + i + 2, p += 1, s.setX(u, n), u++, s.setX(u, a), u++, s.setX(u, l), u++, s.setX(u, n), u++, s.setX(u, l), u++, s.setX(u, p), u++;
        this.setIndex(s), this.addAttribute("position", c), this.addAttribute("normal", h), this.addAttribute("uv", o)
    }, THREE.RingBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.RingBufferGeometry.prototype.constructor = THREE.RingBufferGeometry, THREE.RingGeometry = function(e, t, i, r, n, a) {
        THREE.Geometry.call(this), this.type = "RingGeometry", this.parameters = {
            innerRadius: e,
            outerRadius: t,
            thetaSegments: i,
            phiSegments: r,
            thetaStart: n,
            thetaLength: a
        }, this.fromBufferGeometry(new THREE.RingBufferGeometry(e, t, i, r, n, a))
    }, THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.RingGeometry.prototype.constructor = THREE.RingGeometry, THREE.SphereGeometry = function(e, t, i, r, n, a, o) {
        THREE.Geometry.call(this), this.type = "SphereGeometry", this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: i,
            phiStart: r,
            phiLength: n,
            thetaStart: a,
            thetaLength: o
        }, this.fromBufferGeometry(new THREE.SphereBufferGeometry(e, t, i, r, n, a, o))
    }, THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry, THREE.SphereBufferGeometry = function(e, t, i, r, n, a, o) {
        THREE.BufferGeometry.call(this), this.type = "SphereBufferGeometry", this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: i,
            phiStart: r,
            phiLength: n,
            thetaStart: a,
            thetaLength: o
        }, e = e || 50, t = Math.max(3, Math.floor(t) || 8), i = Math.max(2, Math.floor(i) || 6), r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 2 * Math.PI, a = void 0 !== a ? a : 0, o = void 0 !== o ? o : Math.PI;
        for (var s = a + o, c = (t + 1) * (i + 1), h = new THREE.BufferAttribute(new Float32Array(3 * c), 3), l = new THREE.BufferAttribute(new Float32Array(3 * c), 3), c = new THREE.BufferAttribute(new Float32Array(2 * c), 2), u = 0, p = [], d = new THREE.Vector3, f = 0; i >= f; f++) {
            for (var E = [], m = f / i, g = 0; t >= g; g++) {
                var T = g / t,
                    v = -e * Math.cos(r + T * n) * Math.sin(a + m * o),
                    y = e * Math.cos(a + m * o),
                    R = e * Math.sin(r + T * n) * Math.sin(a + m * o);
                d.set(v, y, R).normalize(), h.setXYZ(u, v, y, R), l.setXYZ(u, d.x, d.y, d.z), c.setXY(u, T, 1 - m), E.push(u), u++
            }
            p.push(E)
        }
        for (r = [], f = 0; i > f; f++)
            for (g = 0; t > g; g++) n = p[f][g + 1], o = p[f][g], u = p[f + 1][g], d = p[f + 1][g + 1], (0 !== f || a > 0) && r.push(n, o, d), (f !== i - 1 || s < Math.PI) && r.push(o, u, d);
        this.setIndex(new(65535 < h.count ? THREE.Uint32Attribute : THREE.Uint16Attribute)(r, 1)), this.addAttribute("position", h), this.addAttribute("normal", l), this.addAttribute("uv", c), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
    }, THREE.SphereBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.SphereBufferGeometry.prototype.constructor = THREE.SphereBufferGeometry, THREE.TextGeometry = function(e, t) {
        t = t || {};
        var i = t.font;
        return !1 == i instanceof THREE.Font ? (console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new THREE.Geometry) : (i = i.generateShapes(e, t.size, t.curveSegments), t.amount = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), THREE.ExtrudeGeometry.call(this, i, t), void(this.type = "TextGeometry"))
    }, THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype), THREE.TextGeometry.prototype.constructor = THREE.TextGeometry, THREE.TorusBufferGeometry = function(e, t, i, r, n) {
        THREE.BufferGeometry.call(this), this.type = "TorusBufferGeometry", this.parameters = {
            radius: e,
            tube: t,
            radialSegments: i,
            tubularSegments: r,
            arc: n
        }, e = e || 100, t = t || 40, i = Math.floor(i) || 8, r = Math.floor(r) || 6, n = n || 2 * Math.PI;
        var a = (i + 1) * (r + 1),
            o = i * r * 6,
            o = new(o > 65535 ? Uint32Array : Uint16Array)(o),
            s = new Float32Array(3 * a),
            c = new Float32Array(3 * a),
            a = new Float32Array(2 * a),
            h = 0,
            l = 0,
            u = 0,
            p = new THREE.Vector3,
            d = new THREE.Vector3,
            f = new THREE.Vector3,
            E, m;
        for (E = 0; i >= E; E++)
            for (m = 0; r >= m; m++) {
                var g = m / r * n,
                    T = E / i * Math.PI * 2;
                d.x = (e + t * Math.cos(T)) * Math.cos(g), d.y = (e + t * Math.cos(T)) * Math.sin(g), d.z = t * Math.sin(T), s[h] = d.x, s[h + 1] = d.y, s[h + 2] = d.z, p.x = e * Math.cos(g), p.y = e * Math.sin(g), f.subVectors(d, p).normalize(), c[h] = f.x, c[h + 1] = f.y, c[h + 2] = f.z, a[l] = m / r, a[l + 1] = E / i, h += 3, l += 2
            }
        for (E = 1; i >= E; E++)
            for (m = 1; r >= m; m++) e = (r + 1) * (E - 1) + m - 1, t = (r + 1) * (E - 1) + m, n = (r + 1) * E + m, o[u] = (r + 1) * E + m - 1, o[u + 1] = e, o[u + 2] = n, o[u + 3] = e, o[u + 4] = t, o[u + 5] = n, u += 6;
        this.setIndex(new THREE.BufferAttribute(o, 1)), this.addAttribute("position", new THREE.BufferAttribute(s, 3)), this.addAttribute("normal", new THREE.BufferAttribute(c, 3)), this.addAttribute("uv", new THREE.BufferAttribute(a, 2))
    }, THREE.TorusBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.TorusBufferGeometry.prototype.constructor = THREE.TorusBufferGeometry, THREE.TorusGeometry = function(e, t, i, r, n) {
        THREE.Geometry.call(this), this.type = "TorusGeometry", this.parameters = {
            radius: e,
            tube: t,
            radialSegments: i,
            tubularSegments: r,
            arc: n
        }, this.fromBufferGeometry(new THREE.TorusBufferGeometry(e, t, i, r, n))
    }, THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry, THREE.TorusKnotBufferGeometry = function(e, t, i, r, n, a) {
        function o(e, t, i, r, n) {
            var a = Math.cos(e),
                o = Math.sin(e);
            e *= i / t, t = Math.cos(e), n.x = r * (2 + t) * .5 * a, n.y = r * (2 + t) * o * .5, n.z = r * Math.sin(e) * .5
        }
        THREE.BufferGeometry.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
            radius: e,
            tube: t,
            tubularSegments: i,
            radialSegments: r,
            p: n,
            q: a
        }, e = e || 100, t = t || 40, i = Math.floor(i) || 64, r = Math.floor(r) || 8, n = n || 2, a = a || 3;
        var s = (r + 1) * (i + 1),
            c = r * i * 6,
            c = new THREE.BufferAttribute(new(c > 65535 ? Uint32Array : Uint16Array)(c), 1),
            h = new THREE.BufferAttribute(new Float32Array(3 * s), 3),
            l = new THREE.BufferAttribute(new Float32Array(3 * s), 3),
            s = new THREE.BufferAttribute(new Float32Array(2 * s), 2),
            u, p, d = 0,
            f = 0,
            E = new THREE.Vector3,
            m = new THREE.Vector3,
            g = new THREE.Vector2,
            T = new THREE.Vector3,
            v = new THREE.Vector3,
            y = new THREE.Vector3,
            R = new THREE.Vector3,
            x = new THREE.Vector3;
        for (u = 0; i >= u; ++u)
            for (p = u / i * n * Math.PI * 2, o(p, n, a, e, T), o(p + .01, n, a, e, v), R.subVectors(v, T), x.addVectors(v, T), y.crossVectors(R, x), x.crossVectors(y, R), y.normalize(), x.normalize(), p = 0; r >= p; ++p) {
                var H = p / r * Math.PI * 2,
                    b = -t * Math.cos(H),
                    H = t * Math.sin(H);
                E.x = T.x + (b * x.x + H * y.x), E.y = T.y + (b * x.y + H * y.y), E.z = T.z + (b * x.z + H * y.z), h.setXYZ(d, E.x, E.y, E.z), m.subVectors(E, T).normalize(), l.setXYZ(d, m.x, m.y, m.z), g.x = u / i, g.y = p / r, s.setXY(d, g.x, g.y), d++
            }
        for (p = 1; i >= p; p++)
            for (u = 1; r >= u; u++) e = (r + 1) * p + (u - 1), t = (r + 1) * p + u, n = (r + 1) * (p - 1) + u, c.setX(f, (r + 1) * (p - 1) + (u - 1)), f++, c.setX(f, e), f++, c.setX(f, n), f++, c.setX(f, e), f++, c.setX(f, t), f++, c.setX(f, n), f++;
        this.setIndex(c), this.addAttribute("position", h), this.addAttribute("normal", l), this.addAttribute("uv", s)
    }, THREE.TorusKnotBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.TorusKnotBufferGeometry.prototype.constructor = THREE.TorusKnotBufferGeometry, THREE.TorusKnotGeometry = function(e, t, i, r, n, a, o) {
        THREE.Geometry.call(this), this.type = "TorusKnotGeometry", this.parameters = {
            radius: e,
            tube: t,
            tubularSegments: i,
            radialSegments: r,
            p: n,
            q: a
        }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new THREE.TorusKnotBufferGeometry(e, t, i, r, n, a)), this.mergeVertices()
    }, THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry, THREE.TubeGeometry = function(e, t, i, r, n, a) {
        THREE.Geometry.call(this), this.type = "TubeGeometry", this.parameters = {
            path: e,
            segments: t,
            radius: i,
            radialSegments: r,
            closed: n,
            taper: a
        }, t = t || 64, i = i || 1, r = r || 8, n = n || !1, a = a || THREE.TubeGeometry.NoTaper;
        var o = [],
            s, c, h = t + 1,
            l, u, p, d, f, E = new THREE.Vector3,
            m, g, T;
        for (m = new THREE.TubeGeometry.FrenetFrames(e, t, n), g = m.normals, T = m.binormals, this.tangents = m.tangents, this.normals = g, this.binormals = T, m = 0; h > m; m++)
            for (o[m] = [], l = m / (h - 1), f = e.getPointAt(l), s = g[m], c = T[m], p = i * a(l), l = 0; r > l; l++) u = l / r * 2 * Math.PI, d = -p * Math.cos(u), u = p * Math.sin(u), E.copy(f), E.x += d * s.x + u * c.x, E.y += d * s.y + u * c.y, E.z += d * s.z + u * c.z, o[m][l] = this.vertices.push(new THREE.Vector3(E.x, E.y, E.z)) - 1;
        for (m = 0; t > m; m++)
            for (l = 0; r > l; l++) a = n ? (m + 1) % t : m + 1, h = (l + 1) % r, e = o[m][l], i = o[a][l], a = o[a][h], h = o[m][h], E = new THREE.Vector2(m / t, l / r), g = new THREE.Vector2((m + 1) / t, l / r), T = new THREE.Vector2((m + 1) / t, (l + 1) / r), s = new THREE.Vector2(m / t, (l + 1) / r), this.faces.push(new THREE.Face3(e, i, h)), this.faceVertexUvs[0].push([E, g, s]), this.faces.push(new THREE.Face3(i, a, h)), this.faceVertexUvs[0].push([g.clone(), T, s.clone()]);
        this.computeFaceNormals(), this.computeVertexNormals()
    }, THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TubeGeometry.prototype.constructor = THREE.TubeGeometry, THREE.TubeGeometry.NoTaper = function(e) {
        return 1
    }, THREE.TubeGeometry.SinusoidalTaper = function(e) {
        return Math.sin(Math.PI * e)
    }, THREE.TubeGeometry.FrenetFrames = function(e, t, i) {
        var r = new THREE.Vector3,
            n = [],
            a = [],
            o = [],
            s = new THREE.Vector3,
            c = new THREE.Matrix4;
        t += 1;
        var h, l, u;
        for (this.tangents = n, this.normals = a, this.binormals = o, h = 0; t > h; h++) l = h / (t - 1), n[h] = e.getTangentAt(l), n[h].normalize();
        for (a[0] = new THREE.Vector3, o[0] = new THREE.Vector3, e = Number.MAX_VALUE, h = Math.abs(n[0].x), l = Math.abs(n[0].y), u = Math.abs(n[0].z), e >= h && (e = h, r.set(1, 0, 0)), e >= l && (e = l, r.set(0, 1, 0)), e >= u && r.set(0, 0, 1), s.crossVectors(n[0], r).normalize(), a[0].crossVectors(n[0], s), o[0].crossVectors(n[0], a[0]), h = 1; t > h; h++) a[h] = a[h - 1].clone(), o[h] = o[h - 1].clone(), s.crossVectors(n[h - 1], n[h]), s.length() > Number.EPSILON && (s.normalize(), r = Math.acos(THREE.Math.clamp(n[h - 1].dot(n[h]), -1, 1)), a[h].applyMatrix4(c.makeRotationAxis(s, r))), o[h].crossVectors(n[h], a[h]);
        if (i)
            for (r = Math.acos(THREE.Math.clamp(a[0].dot(a[t - 1]), -1, 1)), r /= t - 1, 0 < n[0].dot(s.crossVectors(a[0], a[t - 1])) && (r = -r), h = 1; t > h; h++) a[h].applyMatrix4(c.makeRotationAxis(n[h], r * h)), o[h].crossVectors(n[h], a[h])
    }, THREE.PolyhedronGeometry = function(e, t, i, r) {
        function n(e) {
            var t = e.normalize().clone();
            t.index = c.vertices.push(t) - 1;
            var i = Math.atan2(e.z, -e.x) / 2 / Math.PI + .5;
            return e = Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5, t.uv = new THREE.Vector2(i, 1 - e), t
        }

        function a(e, t, i) {
            var r = new THREE.Face3(e.index, t.index, i.index, [e.clone(), t.clone(), i.clone()]);
            c.faces.push(r), m.copy(e).add(t).add(i).divideScalar(3), r = Math.atan2(m.z, -m.x), c.faceVertexUvs[0].push([s(e.uv, e, r), s(t.uv, t, r), s(i.uv, i, r)])
        }

        function o(e, t) {
            for (var i = Math.pow(2, t), r = n(c.vertices[e.a]), o = n(c.vertices[e.b]), s = n(c.vertices[e.c]), h = [], l = 0; i >= l; l++) {
                h[l] = [];
                for (var u = n(r.clone().lerp(s, l / i)), p = n(o.clone().lerp(s, l / i)), d = i - l, f = 0; d >= f; f++) h[l][f] = 0 === f && l === i ? u : n(u.clone().lerp(p, f / d))
            }
            for (l = 0; i > l; l++)
                for (f = 0; 2 * (i - l) - 1 > f; f++) r = Math.floor(f / 2), 0 === f % 2 ? a(h[l][r + 1], h[l + 1][r], h[l][r]) : a(h[l][r + 1], h[l + 1][r + 1], h[l + 1][r])
        }

        function s(e, t, i) {
            return 0 > i && 1 === e.x && (e = new THREE.Vector2(e.x - 1, e.y)), 0 === t.x && 0 === t.z && (e = new THREE.Vector2(i / 2 / Math.PI + .5, e.y)), e.clone()
        }
        THREE.Geometry.call(this), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: e,
            indices: t,
            radius: i,
            detail: r
        }, i = i || 1, r = r || 0;
        for (var c = this, h = 0, l = e.length; l > h; h += 3) n(new THREE.Vector3(e[h], e[h + 1], e[h + 2]));
        e = this.vertices;
        for (var u = [], p = h = 0, l = t.length; l > h; h += 3, p++) {
            var d = e[t[h]],
                f = e[t[h + 1]],
                E = e[t[h + 2]];
            u[p] = new THREE.Face3(d.index, f.index, E.index, [d.clone(), f.clone(), E.clone()]);
        }
        for (var m = new THREE.Vector3, h = 0, l = u.length; l > h; h++) o(u[h], r);
        for (h = 0, l = this.faceVertexUvs[0].length; l > h; h++) t = this.faceVertexUvs[0][h], r = t[0].x, e = t[1].x, u = t[2].x, p = Math.max(r, e, u), d = Math.min(r, e, u), p > .9 && .1 > d && (.2 > r && (t[0].x += 1), .2 > e && (t[1].x += 1), .2 > u && (t[2].x += 1));
        for (h = 0, l = this.vertices.length; l > h; h++) this.vertices[h].multiplyScalar(i);
        this.mergeVertices(), this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, i)
    }, THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.PolyhedronGeometry.prototype.constructor = THREE.PolyhedronGeometry, THREE.DodecahedronGeometry = function(e, t) {
        var i = (1 + Math.sqrt(5)) / 2,
            r = 1 / i;
        THREE.PolyhedronGeometry.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -r, -i, 0, -r, i, 0, r, -i, 0, r, i, -r, -i, 0, -r, i, 0, r, -i, 0, r, i, 0, -i, 0, -r, i, 0, -r, -i, 0, r, i, 0, r], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, t), this.type = "DodecahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }, THREE.DodecahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype), THREE.DodecahedronGeometry.prototype.constructor = THREE.DodecahedronGeometry, THREE.IcosahedronGeometry = function(e, t) {
        var i = (1 + Math.sqrt(5)) / 2;
        THREE.PolyhedronGeometry.call(this, [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, t), this.type = "IcosahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }, THREE.IcosahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype), THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry, THREE.OctahedronGeometry = function(e, t) {
        THREE.PolyhedronGeometry.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t), this.type = "OctahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }, THREE.OctahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype), THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry, THREE.TetrahedronGeometry = function(e, t) {
        THREE.PolyhedronGeometry.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, t), this.type = "TetrahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }, THREE.TetrahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype), THREE.TetrahedronGeometry.prototype.constructor = THREE.TetrahedronGeometry, THREE.ParametricGeometry = function(e, t, i) {
        THREE.Geometry.call(this), this.type = "ParametricGeometry", this.parameters = {
            func: e,
            slices: t,
            stacks: i
        };
        var r = this.vertices,
            n = this.faces,
            a = this.faceVertexUvs[0],
            o, s, c, h, l = t + 1;
        for (o = 0; i >= o; o++)
            for (h = o / i, s = 0; t >= s; s++) c = s / t, c = e(c, h), r.push(c);
        var u, p, d, f;
        for (o = 0; i > o; o++)
            for (s = 0; t > s; s++) e = o * l + s, r = o * l + s + 1, h = (o + 1) * l + s + 1, c = (o + 1) * l + s, u = new THREE.Vector2(s / t, o / i), p = new THREE.Vector2((s + 1) / t, o / i), d = new THREE.Vector2((s + 1) / t, (o + 1) / i), f = new THREE.Vector2(s / t, (o + 1) / i), n.push(new THREE.Face3(e, r, c)), a.push([u, p, f]), n.push(new THREE.Face3(r, h, c)), a.push([p.clone(), d, f.clone()]);
        this.computeFaceNormals(), this.computeVertexNormals()
    }, THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ParametricGeometry.prototype.constructor = THREE.ParametricGeometry, THREE.WireframeGeometry = function(e) {
        function t(e, t) {
            return e - t
        }
        THREE.BufferGeometry.call(this);
        var i = [0, 0],
            r = {},
            n = ["a", "b", "c"];
        if (e instanceof THREE.Geometry) {
            var a = e.vertices,
                o = e.faces,
                s = 0,
                c = new Uint32Array(6 * o.length);
            e = 0;
            for (var h = o.length; h > e; e++)
                for (var l = o[e], u = 0; 3 > u; u++) {
                    i[0] = l[n[u]], i[1] = l[n[(u + 1) % 3]], i.sort(t);
                    var p = i.toString();
                    void 0 === r[p] && (c[2 * s] = i[0], c[2 * s + 1] = i[1], r[p] = !0, s++)
                }
            for (i = new Float32Array(6 * s), e = 0, h = s; h > e; e++)
                for (u = 0; 2 > u; u++) r = a[c[2 * e + u]], s = 6 * e + 3 * u, i[s + 0] = r.x, i[s + 1] = r.y, i[s + 2] = r.z;
            this.addAttribute("position", new THREE.BufferAttribute(i, 3))
        } else if (e instanceof THREE.BufferGeometry) {
            if (null !== e.index) {
                for (h = e.index.array, a = e.attributes.position, n = e.groups, s = 0, 0 === n.length && e.addGroup(0, h.length), c = new Uint32Array(2 * h.length), o = 0, l = n.length; l > o; ++o) {
                    e = n[o], u = e.start, p = e.count, e = u;
                    for (var d = u + p; d > e; e += 3)
                        for (u = 0; 3 > u; u++) i[0] = h[e + u], i[1] = h[e + (u + 1) % 3], i.sort(t), p = i.toString(), void 0 === r[p] && (c[2 * s] = i[0], c[2 * s + 1] = i[1], r[p] = !0, s++)
                }
                for (i = new Float32Array(6 * s), e = 0, h = s; h > e; e++)
                    for (u = 0; 2 > u; u++) s = 6 * e + 3 * u, r = c[2 * e + u], i[s + 0] = a.getX(r), i[s + 1] = a.getY(r), i[s + 2] = a.getZ(r)
            } else
                for (a = e.attributes.position.array, s = a.length / 3, c = s / 3, i = new Float32Array(6 * s), e = 0, h = c; h > e; e++)
                    for (u = 0; 3 > u; u++) s = 18 * e + 6 * u, c = 9 * e + 3 * u, i[s + 0] = a[c], i[s + 1] = a[c + 1], i[s + 2] = a[c + 2], r = 9 * e + (u + 1) % 3 * 3, i[s + 3] = a[r], i[s + 4] = a[r + 1], i[s + 5] = a[r + 2];
            this.addAttribute("position", new THREE.BufferAttribute(i, 3))
        }
    }, THREE.WireframeGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.WireframeGeometry.prototype.constructor = THREE.WireframeGeometry, THREE.AxisHelper = function(e) {
        e = e || 1;
        var t = new Float32Array([0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e]),
            i = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]);
        e = new THREE.BufferGeometry, e.addAttribute("position", new THREE.BufferAttribute(t, 3)), e.addAttribute("color", new THREE.BufferAttribute(i, 3)), t = new THREE.LineBasicMaterial({
            vertexColors: THREE.VertexColors
        }), THREE.LineSegments.call(this, e, t)
    }, THREE.AxisHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.AxisHelper.prototype.constructor = THREE.AxisHelper, THREE.ArrowHelper = function() {
        var e = new THREE.BufferGeometry;
        e.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 1, 0], 3));
        var t = new THREE.CylinderBufferGeometry(0, .5, 1, 5, 1);
        return t.translate(0, -.5, 0),
            function(i, r, n, a, o, s) {
                THREE.Object3D.call(this), void 0 === a && (a = 16776960), void 0 === n && (n = 1), void 0 === o && (o = .2 * n), void 0 === s && (s = .2 * o), this.position.copy(r), this.line = new THREE.Line(e, new THREE.LineBasicMaterial({
                    color: a
                })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new THREE.Mesh(t, new THREE.MeshBasicMaterial({
                    color: a
                })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(i), this.setLength(n, o, s)
            }
    }(), THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.ArrowHelper.prototype.constructor = THREE.ArrowHelper, THREE.ArrowHelper.prototype.setDirection = function() {
        var e = new THREE.Vector3,
            t;
        return function(i) {
            .99999 < i.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > i.y ? this.quaternion.set(1, 0, 0, 0) : (e.set(i.z, 0, -i.x).normalize(), t = Math.acos(i.y), this.quaternion.setFromAxisAngle(e, t))
        }
    }(), THREE.ArrowHelper.prototype.setLength = function(e, t, i) {
        void 0 === t && (t = .2 * e), void 0 === i && (i = .2 * t), this.line.scale.set(1, Math.max(0, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(i, t, i), this.cone.position.y = e, this.cone.updateMatrix()
    }, THREE.ArrowHelper.prototype.setColor = function(e) {
        this.line.material.color.copy(e), this.cone.material.color.copy(e)
    }, THREE.BoxHelper = function(e, t) {
        void 0 === t && (t = 16776960);
        var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            r = new Float32Array(24),
            n = new THREE.BufferGeometry;
        n.setIndex(new THREE.BufferAttribute(i, 1)), n.addAttribute("position", new THREE.BufferAttribute(r, 3)), THREE.LineSegments.call(this, n, new THREE.LineBasicMaterial({
            color: t
        })), void 0 !== e && this.update(e)
    }, THREE.BoxHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.BoxHelper.prototype.constructor = THREE.BoxHelper, THREE.BoxHelper.prototype.update = function() {
        var e = new THREE.Box3;
        return function(t) {
            if (t instanceof THREE.Box3 ? e.copy(t) : e.setFromObject(t), !e.isEmpty()) {
                t = e.min;
                var i = e.max,
                    r = this.geometry.attributes.position,
                    n = r.array;
                n[0] = i.x, n[1] = i.y, n[2] = i.z, n[3] = t.x, n[4] = i.y, n[5] = i.z, n[6] = t.x, n[7] = t.y, n[8] = i.z, n[9] = i.x, n[10] = t.y, n[11] = i.z, n[12] = i.x, n[13] = i.y, n[14] = t.z, n[15] = t.x, n[16] = i.y, n[17] = t.z, n[18] = t.x, n[19] = t.y, n[20] = t.z, n[21] = i.x, n[22] = t.y, n[23] = t.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
            }
        }
    }(), THREE.BoundingBoxHelper = function(e, t) {
        var i = void 0 !== t ? t : 8947848;
        this.object = e, this.box = new THREE.Box3, THREE.Mesh.call(this, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
            color: i,
            wireframe: !0
        }))
    }, THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype), THREE.BoundingBoxHelper.prototype.constructor = THREE.BoundingBoxHelper, THREE.BoundingBoxHelper.prototype.update = function() {
        this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position)
    }, THREE.CameraHelper = function(e) {
        function t(e, t, r) {
            i(e, r), i(t, r)
        }

        function i(e, t) {
            r.vertices.push(new THREE.Vector3), r.colors.push(new THREE.Color(t)), void 0 === a[e] && (a[e] = []), a[e].push(r.vertices.length - 1)
        }
        var r = new THREE.Geometry,
            n = new THREE.LineBasicMaterial({
                color: 16777215,
                vertexColors: THREE.FaceColors
            }),
            a = {};
        t("n1", "n2", 16755200), t("n2", "n4", 16755200), t("n4", "n3", 16755200), t("n3", "n1", 16755200), t("f1", "f2", 16755200), t("f2", "f4", 16755200), t("f4", "f3", 16755200), t("f3", "f1", 16755200), t("n1", "f1", 16755200), t("n2", "f2", 16755200), t("n3", "f3", 16755200), t("n4", "f4", 16755200), t("p", "n1", 16711680), t("p", "n2", 16711680), t("p", "n3", 16711680), t("p", "n4", 16711680), t("u1", "u2", 43775), t("u2", "u3", 43775), t("u3", "u1", 43775), t("c", "t", 16777215), t("p", "c", 3355443), t("cn1", "cn2", 3355443), t("cn3", "cn4", 3355443), t("cf1", "cf2", 3355443), t("cf3", "cf4", 3355443), THREE.LineSegments.call(this, r, n), this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
    }, THREE.CameraHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.CameraHelper.prototype.constructor = THREE.CameraHelper, THREE.CameraHelper.prototype.update = function() {
        function e(e, a, o, s) {
            if (r.set(a, o, s).unproject(n), e = i[e], void 0 !== e)
                for (a = 0, o = e.length; o > a; a++) t.vertices[e[a]].copy(r)
        }
        var t, i, r = new THREE.Vector3,
            n = new THREE.Camera;
        return function() {
            t = this.geometry, i = this.pointMap, n.projectionMatrix.copy(this.camera.projectionMatrix), e("c", 0, 0, -1), e("t", 0, 0, 1), e("n1", -1, -1, -1), e("n2", 1, -1, -1), e("n3", -1, 1, -1), e("n4", 1, 1, -1), e("f1", -1, -1, 1), e("f2", 1, -1, 1), e("f3", -1, 1, 1), e("f4", 1, 1, 1), e("u1", .7, 1.1, -1), e("u2", -.7, 1.1, -1), e("u3", 0, 2, -1), e("cf1", -1, 0, 1), e("cf2", 1, 0, 1), e("cf3", 0, -1, 1), e("cf4", 0, 1, 1), e("cn1", -1, 0, -1), e("cn2", 1, 0, -1), e("cn3", 0, -1, -1), e("cn4", 0, 1, -1), t.verticesNeedUpdate = !0
        }
    }(), THREE.DirectionalLightHelper = function(e, t) {
        THREE.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, void 0 === t && (t = 1);
        var i = new THREE.BufferGeometry;
        i.addAttribute("position", new THREE.Float32Attribute([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
        var r = new THREE.LineBasicMaterial({
            fog: !1
        });
        this.add(new THREE.Line(i, r)), i = new THREE.BufferGeometry, i.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 0, 1], 3)), this.add(new THREE.Line(i, r)), this.update()
    }, THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.DirectionalLightHelper.prototype.constructor = THREE.DirectionalLightHelper, THREE.DirectionalLightHelper.prototype.dispose = function() {
        var e = this.children[0],
            t = this.children[1];
        e.geometry.dispose(), e.material.dispose(), t.geometry.dispose(), t.material.dispose()
    }, THREE.DirectionalLightHelper.prototype.update = function() {
        var e = new THREE.Vector3,
            t = new THREE.Vector3,
            i = new THREE.Vector3;
        return function() {
            e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), i.subVectors(t, e);
            var r = this.children[0],
                n = this.children[1];
            r.lookAt(i), r.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), n.lookAt(i), n.scale.z = i.length()
        }
    }(), THREE.EdgesHelper = function(e, t, i) {
        t = void 0 !== t ? t : 16777215, THREE.LineSegments.call(this, new THREE.EdgesGeometry(e.geometry, i), new THREE.LineBasicMaterial({
            color: t
        })), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
    }, THREE.EdgesHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.EdgesHelper.prototype.constructor = THREE.EdgesHelper, THREE.FaceNormalsHelper = function(e, t, i, r) {
        this.object = e, this.size = void 0 !== t ? t : 1, e = void 0 !== i ? i : 16776960, r = void 0 !== r ? r : 1, t = 0, i = this.object.geometry, i instanceof THREE.Geometry ? t = i.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead."), i = new THREE.BufferGeometry, t = new THREE.Float32Attribute(6 * t, 3), i.addAttribute("position", t), THREE.LineSegments.call(this, i, new THREE.LineBasicMaterial({
            color: e,
            linewidth: r
        })), this.matrixAutoUpdate = !1, this.update()
    }, THREE.FaceNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.FaceNormalsHelper.prototype.constructor = THREE.FaceNormalsHelper, THREE.FaceNormalsHelper.prototype.update = function() {
        var e = new THREE.Vector3,
            t = new THREE.Vector3,
            i = new THREE.Matrix3;
        return function() {
            this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
            for (var r = this.object.matrixWorld, n = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, a = a.faces, s = 0, c = 0, h = a.length; h > c; c++) {
                var l = a[c],
                    u = l.normal;
                e.copy(o[l.a]).add(o[l.b]).add(o[l.c]).divideScalar(3).applyMatrix4(r), t.copy(u).applyMatrix3(i).normalize().multiplyScalar(this.size).add(e), n.setXYZ(s, e.x, e.y, e.z), s += 1, n.setXYZ(s, t.x, t.y, t.z), s += 1
            }
            return n.needsUpdate = !0, this
        }
    }(), THREE.GridHelper = function(e, t, i, r) {
        t = t || 1, i = new THREE.Color(void 0 !== i ? i : 4473924), r = new THREE.Color(void 0 !== r ? r : 8947848);
        for (var n = t / 2, a = 2 * e / t, o = [], s = [], c = 0, h = 0, l = -e; t >= c; c++, l += a) {
            o.push(-e, 0, l, e, 0, l), o.push(l, 0, -e, l, 0, e);
            var u = c === n ? i : r;
            u.toArray(s, h), h += 3, u.toArray(s, h), h += 3, u.toArray(s, h), h += 3, u.toArray(s, h), h += 3
        }
        e = new THREE.BufferGeometry, e.addAttribute("position", new THREE.Float32Attribute(o, 3)), e.addAttribute("color", new THREE.Float32Attribute(s, 3)), o = new THREE.LineBasicMaterial({
            vertexColors: THREE.VertexColors
        }), THREE.LineSegments.call(this, e, o)
    }, THREE.GridHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.GridHelper.prototype.constructor = THREE.GridHelper, THREE.GridHelper.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }, THREE.HemisphereLightHelper = function(e, t) {
        THREE.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new THREE.Color, new THREE.Color];
        var i = new THREE.SphereGeometry(t, 4, 2);
        i.rotateX(-Math.PI / 2);
        for (var r = 0; 8 > r; r++) i.faces[r].color = this.colors[4 > r ? 0 : 1];
        r = new THREE.MeshBasicMaterial({
            vertexColors: THREE.FaceColors,
            wireframe: !0
        }), this.lightSphere = new THREE.Mesh(i, r), this.add(this.lightSphere), this.update()
    }, THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.HemisphereLightHelper.prototype.constructor = THREE.HemisphereLightHelper, THREE.HemisphereLightHelper.prototype.dispose = function() {
        this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
    }, THREE.HemisphereLightHelper.prototype.update = function() {
        var e = new THREE.Vector3;
        return function() {
            this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
        }
    }(), THREE.PointLightHelper = function(e, t) {
        this.light = e, this.light.updateMatrixWorld();
        var i = new THREE.SphereBufferGeometry(t, 4, 2),
            r = new THREE.MeshBasicMaterial({
                wireframe: !0,
                fog: !1
            });
        r.color.copy(this.light.color).multiplyScalar(this.light.intensity), THREE.Mesh.call(this, i, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
    }, THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype), THREE.PointLightHelper.prototype.constructor = THREE.PointLightHelper, THREE.PointLightHelper.prototype.dispose = function() {
        this.geometry.dispose(), this.material.dispose()
    }, THREE.PointLightHelper.prototype.update = function() {
        this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }, THREE.SkeletonHelper = function(e) {
        this.bones = this.getBoneList(e);
        for (var t = new THREE.Geometry, i = 0; i < this.bones.length; i++) this.bones[i].parent instanceof THREE.Bone && (t.vertices.push(new THREE.Vector3), t.vertices.push(new THREE.Vector3), t.colors.push(new THREE.Color(0, 0, 1)), t.colors.push(new THREE.Color(0, 1, 0)));
        t.dynamic = !0, i = new THREE.LineBasicMaterial({
            vertexColors: THREE.VertexColors,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        }), THREE.LineSegments.call(this, t, i), this.root = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    }, THREE.SkeletonHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.SkeletonHelper.prototype.constructor = THREE.SkeletonHelper, THREE.SkeletonHelper.prototype.getBoneList = function(e) {
        var t = [];
        e instanceof THREE.Bone && t.push(e);
        for (var i = 0; i < e.children.length; i++) t.push.apply(t, this.getBoneList(e.children[i]));
        return t
    }, THREE.SkeletonHelper.prototype.update = function() {
        for (var e = this.geometry, t = (new THREE.Matrix4).getInverse(this.root.matrixWorld), i = new THREE.Matrix4, r = 0, n = 0; n < this.bones.length; n++) {
            var a = this.bones[n];
            a.parent instanceof THREE.Bone && (i.multiplyMatrices(t, a.matrixWorld), e.vertices[r].setFromMatrixPosition(i), i.multiplyMatrices(t, a.parent.matrixWorld), e.vertices[r + 1].setFromMatrixPosition(i), r += 2)
        }
        e.verticesNeedUpdate = !0, e.computeBoundingSphere()
    }, THREE.SpotLightHelper = function(e) {
        THREE.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, e = new THREE.BufferGeometry;
        for (var t = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], i = 0, r = 1; 32 > i; i++, r++) {
            var n = i / 32 * Math.PI * 2,
                a = r / 32 * Math.PI * 2;
            t.push(Math.cos(n), Math.sin(n), 1, Math.cos(a), Math.sin(a), 1)
        }
        e.addAttribute("position", new THREE.Float32Attribute(t, 3)), t = new THREE.LineBasicMaterial({
            fog: !1
        }), this.cone = new THREE.LineSegments(e, t), this.add(this.cone), this.update()
    }, THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.SpotLightHelper.prototype.constructor = THREE.SpotLightHelper, THREE.SpotLightHelper.prototype.dispose = function() {
        this.cone.geometry.dispose(), this.cone.material.dispose()
    }, THREE.SpotLightHelper.prototype.update = function() {
        var e = new THREE.Vector3,
            t = new THREE.Vector3;
        return function() {
            var i = this.light.distance ? this.light.distance : 1e3,
                r = i * Math.tan(this.light.angle);
            this.cone.scale.set(r, r, i), e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t.sub(e)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        }
    }(), THREE.VertexNormalsHelper = function(e, t, i, r) {
        this.object = e, this.size = void 0 !== t ? t : 1, e = void 0 !== i ? i : 16711680, r = void 0 !== r ? r : 1, t = 0, i = this.object.geometry, i instanceof THREE.Geometry ? t = 3 * i.faces.length : i instanceof THREE.BufferGeometry && (t = i.attributes.normal.count), i = new THREE.BufferGeometry, t = new THREE.Float32Attribute(6 * t, 3), i.addAttribute("position", t), THREE.LineSegments.call(this, i, new THREE.LineBasicMaterial({
            color: e,
            linewidth: r
        })), this.matrixAutoUpdate = !1, this.update()
    }, THREE.VertexNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.VertexNormalsHelper.prototype.constructor = THREE.VertexNormalsHelper, THREE.VertexNormalsHelper.prototype.update = function() {
        var e = new THREE.Vector3,
            t = new THREE.Vector3,
            i = new THREE.Matrix3;
        return function() {
            var r = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
            var n = this.object.matrixWorld,
                a = this.geometry.attributes.position,
                o = this.object.geometry;
            if (o instanceof THREE.Geometry)
                for (var s = o.vertices, c = o.faces, h = o = 0, l = c.length; l > h; h++)
                    for (var u = c[h], p = 0, d = u.vertexNormals.length; d > p; p++) {
                        var f = u.vertexNormals[p];
                        e.copy(s[u[r[p]]]).applyMatrix4(n), t.copy(f).applyMatrix3(i).normalize().multiplyScalar(this.size).add(e), a.setXYZ(o, e.x, e.y, e.z), o += 1, a.setXYZ(o, t.x, t.y, t.z), o += 1
                    } else if (o instanceof THREE.BufferGeometry)
                        for (r = o.attributes.position, s = o.attributes.normal, p = o = 0, d = r.count; d > p; p++) e.set(r.getX(p), r.getY(p), r.getZ(p)).applyMatrix4(n), t.set(s.getX(p), s.getY(p), s.getZ(p)), t.applyMatrix3(i).normalize().multiplyScalar(this.size).add(e), a.setXYZ(o, e.x, e.y, e.z), o += 1, a.setXYZ(o, t.x, t.y, t.z), o += 1;
            return a.needsUpdate = !0, this
        }
    }(), THREE.WireframeHelper = function(e, t) {
        var i = void 0 !== t ? t : 16777215;
        THREE.LineSegments.call(this, new THREE.WireframeGeometry(e.geometry), new THREE.LineBasicMaterial({
            color: i
        })), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
    }, THREE.WireframeHelper.prototype = Object.create(THREE.LineSegments.prototype), THREE.WireframeHelper.prototype.constructor = THREE.WireframeHelper, THREE.ImmediateRenderObject = function(e) {
        THREE.Object3D.call(this), this.material = e, this.render = function(e) {}
    }, THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype), THREE.ImmediateRenderObject.prototype.constructor = THREE.ImmediateRenderObject, THREE.MorphBlendMesh = function(e, t) {
        THREE.Mesh.call(this, e, t), this.animationsMap = {}, this.animationsList = [];
        var i = this.geometry.morphTargets.length;
        this.createAnimation("__default", 0, i - 1, i / 1), this.setAnimationWeight("__default", 1)
    }, THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype), THREE.MorphBlendMesh.prototype.constructor = THREE.MorphBlendMesh, THREE.MorphBlendMesh.prototype.createAnimation = function(e, t, i, r) {
        t = {
            start: t,
            end: i,
            length: i - t + 1,
            fps: r,
            duration: (i - t) / r,
            lastFrame: 0,
            currentFrame: 0,
            active: !1,
            time: 0,
            direction: 1,
            weight: 1,
            directionBackwards: !1,
            mirroredLoop: !1
        }, this.animationsMap[e] = t, this.animationsList.push(t)
    }, THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(e) {
        for (var t = /([a-z]+)_?(\d+)/i, i, r = {}, n = this.geometry, a = 0, o = n.morphTargets.length; o > a; a++) {
            var s = n.morphTargets[a].name.match(t);
            if (s && 1 < s.length) {
                var c = s[1];
                r[c] || (r[c] = {
                    start: 1 / 0,
                    end: -(1 / 0)
                }), s = r[c], a < s.start && (s.start = a), a > s.end && (s.end = a), i || (i = c)
            }
        }
        for (c in r) s = r[c], this.createAnimation(c, s.start, s.end, e);
        this.firstAnimation = i
    }, THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(e) {
        (e = this.animationsMap[e]) && (e.direction = 1, e.directionBackwards = !1)
    }, THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(e) {
        (e = this.animationsMap[e]) && (e.direction = -1, e.directionBackwards = !0)
    }, THREE.MorphBlendMesh.prototype.setAnimationFPS = function(e, t) {
        var i = this.animationsMap[e];
        i && (i.fps = t, i.duration = (i.end - i.start) / i.fps)
    }, THREE.MorphBlendMesh.prototype.setAnimationDuration = function(e, t) {
        var i = this.animationsMap[e];
        i && (i.duration = t, i.fps = (i.end - i.start) / i.duration)
    }, THREE.MorphBlendMesh.prototype.setAnimationWeight = function(e, t) {
        var i = this.animationsMap[e];
        i && (i.weight = t)
    }, THREE.MorphBlendMesh.prototype.setAnimationTime = function(e, t) {
        var i = this.animationsMap[e];
        i && (i.time = t)
    }, THREE.MorphBlendMesh.prototype.getAnimationTime = function(e) {
        var t = 0;
        return (e = this.animationsMap[e]) && (t = e.time), t
    }, THREE.MorphBlendMesh.prototype.getAnimationDuration = function(e) {
        var t = -1;
        return (e = this.animationsMap[e]) && (t = e.duration), t
    }, THREE.MorphBlendMesh.prototype.playAnimation = function(e) {
        var t = this.animationsMap[e];
        t ? (t.time = 0, t.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + e + "] undefined in .playAnimation()")
    }, THREE.MorphBlendMesh.prototype.stopAnimation = function(e) {
        (e = this.animationsMap[e]) && (e.active = !1)
    }, THREE.MorphBlendMesh.prototype.update = function(e) {
        for (var t = 0, i = this.animationsList.length; i > t; t++) {
            var r = this.animationsList[t];
            if (r.active) {
                var n = r.duration / r.length;
                r.time += r.direction * e, r.mirroredLoop ? (r.time > r.duration || 0 > r.time) && (r.direction *= -1, r.time > r.duration && (r.time = r.duration, r.directionBackwards = !0), 0 > r.time && (r.time = 0, r.directionBackwards = !1)) : (r.time %= r.duration, 0 > r.time && (r.time += r.duration));
                var a = r.start + THREE.Math.clamp(Math.floor(r.time / n), 0, r.length - 1),
                    o = r.weight;
                a !== r.currentFrame && (this.morphTargetInfluences[r.lastFrame] = 0, this.morphTargetInfluences[r.currentFrame] = 1 * o, this.morphTargetInfluences[a] = 0, r.lastFrame = r.currentFrame, r.currentFrame = a), n = r.time % n / n, r.directionBackwards && (n = 1 - n), r.currentFrame !== r.lastFrame ? (this.morphTargetInfluences[r.currentFrame] = n * o, this.morphTargetInfluences[r.lastFrame] = (1 - n) * o) : this.morphTargetInfluences[r.currentFrame] = o
            }
        }
    };
var Detector = {
    canvas: !!window.CanvasRenderingContext2D,
    webgl: function() {
        try {
            var e = document.createElement("canvas");
            return !(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl"))
        } catch (t) {
            return !1
        }
    }(),
    workers: !!window.Worker,
    fileapi: window.File && window.FileReader && window.FileList && window.Blob,
    getWebGLErrorMessage: function() {
        var e = document.createElement("div");
        return e.id = "webgl-error-message", e.style.fontFamily = "monospace", e.style.fontSize = "13px", e.style.fontWeight = "normal", e.style.textAlign = "center", e.style.background = "#fff", e.style.color = "#000", e.style.padding = "1.5em", e.style.width = "400px", e.style.margin = "5em auto 0", this.webgl || (e.innerHTML = window.WebGLRenderingContext ? ['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n") : ['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")), e
    },
    addGetWebGLMessage: function(e) {
        var t, i, r;
        e = e || {}, t = void 0 !== e.parent ? e.parent : document.body, i = void 0 !== e.id ? e.id : "oldie", r = Detector.getWebGLErrorMessage(), r.id = i, t.appendChild(r)
    }
};
"object" == typeof module && (module.exports = Detector);
var Stats = function() {
    function e(e) {
        return r.appendChild(e.dom), e
    }

    function t(e) {
        for (var t = 0; t < r.children.length; t++) r.children[t].style.display = t === e ? "block" : "none";
        i = e
    }
    var i = 0,
        r = document.createElement("div");
    r.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", r.addEventListener("click", function(e) {
        e.preventDefault(), t(++i % r.children.length)
    }, !1);
    var n = (performance || Date).now(),
        a = n,
        o = 0,
        s = e(new Stats.Panel("FPS", "#0ff", "#002")),
        c = e(new Stats.Panel("MS", "#0f0", "#020"));
    if (self.performance && self.performance.memory) var h = e(new Stats.Panel("MB", "#f08", "#201"));
    return t(0), {
        REVISION: 16,
        dom: r,
        addPanel: e,
        showPanel: t,
        begin: function() {
            n = (performance || Date).now()
        },
        end: function() {
            o++;
            var e = (performance || Date).now();
            if (c.update(e - n, 200), e > a + 1e3 && (s.update(1e3 * o / (e - a), 100), a = e, o = 0, h)) {
                var t = performance.memory;
                h.update(t.usedJSHeapSize / 1048576, t.jsHeapSizeLimit / 1048576)
            }
            return e
        },
        update: function() {
            n = this.end()
        },
        domElement: r,
        setMode: t
    }
};
Stats.Panel = function(e, t, i) {
    var r = 1 / 0,
        n = 0,
        a = Math.round,
        o = a(window.devicePixelRatio || 1),
        s = 80 * o,
        c = 48 * o,
        h = 3 * o,
        l = 2 * o,
        u = 3 * o,
        p = 15 * o,
        d = 74 * o,
        f = 30 * o,
        E = document.createElement("canvas");
    E.width = s, E.height = c, E.style.cssText = "width:80px;height:48px";
    var m = E.getContext("2d");
    return m.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif", m.textBaseline = "top", m.fillStyle = i, m.fillRect(0, 0, s, c), m.fillStyle = t, m.fillText(e, h, l), m.fillRect(u, p, d, f), m.fillStyle = i, m.globalAlpha = .9, m.fillRect(u, p, d, f), {
        dom: E,
        update: function(c, g) {
            r = Math.min(r, c), n = Math.max(n, c), m.fillStyle = i, m.globalAlpha = 1, m.fillRect(0, 0, s, p), m.fillStyle = t, m.fillText(a(c) + " " + e + " (" + a(r) + "-" + a(n) + ")", h, l), m.drawImage(E, u + o, p, d - o, f, u, p, d - o, f), m.fillRect(u + d - o, p, o, f), m.fillStyle = i, m.globalAlpha = .9, m.fillRect(u + d - o, p, o, a((1 - c / g) * f))
        }
    }
}, "object" == typeof module && (module.exports = Stats), THREE.TrackballControls = function(e, t) {
    function i(e) {
        p.enabled !== !1 && (window.removeEventListener("keydown", i), g = m, m === d.NONE && (e.keyCode !== p.keys[d.ROTATE] || p.noRotate ? e.keyCode !== p.keys[d.ZOOM] || p.noZoom ? e.keyCode !== p.keys[d.PAN] || p.noPan || (m = d.PAN) : m = d.ZOOM : m = d.ROTATE))
    }

    function r(e) {
        p.enabled !== !1 && (m = g, window.addEventListener("keydown", i, !1))
    }

    function n(e) {
        p.enabled !== !1 && (e.preventDefault(), e.stopPropagation(), m === d.NONE && (m = e.button), m !== d.ROTATE || p.noRotate ? m !== d.ZOOM || p.noZoom ? m !== d.PAN || p.noPan || (w.copy(P(e.pageX, e.pageY)), S.copy(w)) : (H.copy(P(e.pageX, e.pageY)), b.copy(H)) : (y.copy(D(e.pageX, e.pageY)), v.copy(y)), document.addEventListener("mousemove", a, !1), document.addEventListener("mouseup", o, !1), p.dispatchEvent(L))
    }

    function a(e) {
        p.enabled !== !1 && (e.preventDefault(), e.stopPropagation(), m !== d.ROTATE || p.noRotate ? m !== d.ZOOM || p.noZoom ? m !== d.PAN || p.noPan || S.copy(P(e.pageX, e.pageY)) : b.copy(P(e.pageX, e.pageY)) : (v.copy(y), y.copy(D(e.pageX, e.pageY))))
    }

    function o(e) {
        p.enabled !== !1 && (e.preventDefault(), e.stopPropagation(), m = d.NONE, document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", o), p.dispatchEvent(C))
    }

    function s(e) {
        if (p.enabled !== !1) {
            e.preventDefault(), e.stopPropagation();
            var t = 0;
            e.wheelDelta ? t = e.wheelDelta / 40 : e.detail && (t = -e.detail / 3), H.y += .01 * t, p.dispatchEvent(L), p.dispatchEvent(C)
        }
    }

    function c(e) {
        if (p.enabled !== !1) {
            switch (e.touches.length) {
                case 1:
                    m = d.TOUCH_ROTATE, y.copy(D(e.touches[0].pageX, e.touches[0].pageY)), v.copy(y);
                    break;
                default:
                    m = d.TOUCH_ZOOM_PAN;
                    var t = e.touches[0].pageX - e.touches[1].pageX,
                        i = e.touches[0].pageY - e.touches[1].pageY;
                    M = _ = Math.sqrt(t * t + i * i);
                    var r = (e.touches[0].pageX + e.touches[1].pageX) / 2,
                        n = (e.touches[0].pageY + e.touches[1].pageY) / 2;
                    w.copy(P(r, n)), S.copy(w)
            }
            p.dispatchEvent(L)
        }
    }

    function h(e) {
        if (p.enabled !== !1) switch (e.preventDefault(), e.stopPropagation(), e.touches.length) {
            case 1:
                v.copy(y), y.copy(D(e.touches[0].pageX, e.touches[0].pageY));
                break;
            default:
                var t = e.touches[0].pageX - e.touches[1].pageX,
                    i = e.touches[0].pageY - e.touches[1].pageY;
                M = Math.sqrt(t * t + i * i);
                var r = (e.touches[0].pageX + e.touches[1].pageX) / 2,
                    n = (e.touches[0].pageY + e.touches[1].pageY) / 2;
                S.copy(P(r, n))
        }
    }

    function l(e) {
        if (p.enabled !== !1) {
            switch (e.touches.length) {
                case 0:
                    m = d.NONE;
                    break;
                case 1:
                    m = d.TOUCH_ROTATE, y.copy(D(e.touches[0].pageX, e.touches[0].pageY)), v.copy(y)
            }
            p.dispatchEvent(C)
        }
    }

    function u(e) {
        e.preventDefault()
    }
    var p = this,
        d = {
            NONE: -1,
            ROTATE: 0,
            ZOOM: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_ZOOM_PAN: 4
        };
    this.object = e, this.domElement = void 0 !== t ? t : document, this.enabled = !0, this.screen = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    }, this.rotateSpeed = 1, this.zoomSpeed = 1.2, this.panSpeed = .3, this.noRotate = !1, this.noZoom = !1, this.noPan = !1, this.staticMoving = !1, this.dynamicDampingFactor = .2, this.minDistance = 0, this.maxDistance = 1 / 0, this.keys = [65, 83, 68], this.target = new THREE.Vector3;
    var f = 1e-6,
        E = new THREE.Vector3,
        m = d.NONE,
        g = d.NONE,
        T = new THREE.Vector3,
        v = new THREE.Vector2,
        y = new THREE.Vector2,
        R = new THREE.Vector3,
        x = 0,
        H = new THREE.Vector2,
        b = new THREE.Vector2,
        _ = 0,
        M = 0,
        w = new THREE.Vector2,
        S = new THREE.Vector2;
    this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.up0 = this.object.up.clone();
    var A = {
            type: "change"
        },
        L = {
            type: "start"
        },
        C = {
            type: "end"
        };
    this.handleResize = function() {
        if (this.domElement === document) this.screen.left = 0, this.screen.top = 0, this.screen.width = window.innerWidth, this.screen.height = window.innerHeight;
        else {
            var e = this.domElement.getBoundingClientRect(),
                t = this.domElement.ownerDocument.documentElement;
            this.screen.left = e.left + window.pageXOffset - t.clientLeft, this.screen.top = e.top + window.pageYOffset - t.clientTop, this.screen.width = e.width, this.screen.height = e.height
        }
    }, this.handleEvent = function(e) {
        "function" == typeof this[e.type] && this[e.type](e)
    };
    var P = function() {
            var e = new THREE.Vector2;
            return function t(i, r) {
                return e.set((i - p.screen.left) / p.screen.width, (r - p.screen.top) / p.screen.height), e
            }
        }(),
        D = function() {
            var e = new THREE.Vector2;
            return function t(i, r) {
                return e.set((i - .5 * p.screen.width - p.screen.left) / (.5 * p.screen.width), (p.screen.height + 2 * (p.screen.top - r)) / p.screen.width), e
            }
        }();
    this.rotateCamera = function() {
        var e = new THREE.Vector3,
            t = new THREE.Quaternion,
            i = new THREE.Vector3,
            r = new THREE.Vector3,
            n = new THREE.Vector3,
            a = new THREE.Vector3,
            o;
        return function s() {
            a.set(y.x - v.x, y.y - v.y, 0), o = a.length(), o ? (T.copy(p.object.position).sub(p.target), i.copy(T).normalize(), r.copy(p.object.up).normalize(), n.crossVectors(r, i).normalize(), r.setLength(y.y - v.y), n.setLength(y.x - v.x), a.copy(r.add(n)), e.crossVectors(a, T).normalize(), o *= p.rotateSpeed, t.setFromAxisAngle(e, o), T.applyQuaternion(t), p.object.up.applyQuaternion(t), R.copy(e), x = o) : !p.staticMoving && x && (x *= Math.sqrt(1 - p.dynamicDampingFactor), T.copy(p.object.position).sub(p.target), t.setFromAxisAngle(R, x), T.applyQuaternion(t), p.object.up.applyQuaternion(t)), v.copy(y);
        }
    }(), this.zoomCamera = function() {
        var e;
        m === d.TOUCH_ZOOM_PAN ? (e = _ / M, _ = M, T.multiplyScalar(e)) : (e = 1 + (b.y - H.y) * p.zoomSpeed, 1 !== e && e > 0 && (T.multiplyScalar(e), p.staticMoving ? H.copy(b) : H.y += (b.y - H.y) * this.dynamicDampingFactor))
    }, this.panCamera = function() {
        var e = new THREE.Vector2,
            t = new THREE.Vector3,
            i = new THREE.Vector3;
        return function r() {
            e.copy(S).sub(w), e.lengthSq() && (e.multiplyScalar(T.length() * p.panSpeed), i.copy(T).cross(p.object.up).setLength(e.x), i.add(t.copy(p.object.up).setLength(e.y)), p.object.position.add(i), p.target.add(i), p.staticMoving ? w.copy(S) : w.add(e.subVectors(S, w).multiplyScalar(p.dynamicDampingFactor)))
        }
    }(), this.checkDistances = function() {
        p.noZoom && p.noPan || (T.lengthSq() > p.maxDistance * p.maxDistance && (p.object.position.addVectors(p.target, T.setLength(p.maxDistance)), H.copy(b)), T.lengthSq() < p.minDistance * p.minDistance && (p.object.position.addVectors(p.target, T.setLength(p.minDistance)), H.copy(b)))
    }, this.update = function() {
        T.subVectors(p.object.position, p.target), p.noRotate || p.rotateCamera(), p.noZoom || p.zoomCamera(), p.noPan || p.panCamera(), p.object.position.addVectors(p.target, T), p.checkDistances(), p.object.lookAt(p.target), E.distanceToSquared(p.object.position) > f && (p.dispatchEvent(A), E.copy(p.object.position))
    }, this.reset = function() {
        m = d.NONE, g = d.NONE, p.target.copy(p.target0), p.object.position.copy(p.position0), p.object.up.copy(p.up0), T.subVectors(p.object.position, p.target), p.object.lookAt(p.target), p.dispatchEvent(A), E.copy(p.object.position)
    }, this.dispose = function() {
        this.domElement.removeEventListener("contextmenu", u, !1), this.domElement.removeEventListener("mousedown", n, !1), this.domElement.removeEventListener("mousewheel", s, !1), this.domElement.removeEventListener("MozMousePixelScroll", s, !1), this.domElement.removeEventListener("touchstart", c, !1), this.domElement.removeEventListener("touchend", l, !1), this.domElement.removeEventListener("touchmove", h, !1), document.removeEventListener("mousemove", a, !1), document.removeEventListener("mouseup", o, !1), window.removeEventListener("keydown", i, !1), window.removeEventListener("keyup", r, !1)
    }, this.domElement.addEventListener("contextmenu", u, !1), this.domElement.addEventListener("mousedown", n, !1), this.domElement.removeEventListener("mousewheel", s, !1), this.domElement.addEventListener("MozMousePixelScroll", s, !1), this.domElement.addEventListener("touchstart", c, !1), this.domElement.addEventListener("touchend", l, !1), this.domElement.addEventListener("touchmove", h, !1), window.addEventListener("keydown", i, !1), window.addEventListener("keyup", r, !1), this.handleResize(), this.update()
}, THREE.TrackballControls.prototype = Object.create(THREE.EventDispatcher.prototype), THREE.TrackballControls.prototype.constructor = THREE.TrackballControls, THREE.EffectComposer = function(e, t) {
    if (this.renderer = e, void 0 === t) {
        var i = {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBAFormat,
                stencilBuffer: !1
            },
            r = e.getSize();
        t = new THREE.WebGLRenderTarget(r.width, r.height, i)
    }
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.passes = [], void 0 === THREE.CopyShader && console.error("THREE.EffectComposer relies on THREE.CopyShader"), this.copyPass = new THREE.ShaderPass(THREE.CopyShader)
}, Object.assign(THREE.EffectComposer.prototype, {
    swapBuffers: function() {
        var e = this.readBuffer;
        this.readBuffer = this.writeBuffer, this.writeBuffer = e
    },
    addPass: function(e) {
        this.passes.push(e);
        var t = this.renderer.getSize();
        e.setSize(t.width, t.height)
    },
    insertPass: function(e, t) {
        this.passes.splice(t, 0, e)
    },
    render: function(e) {
        var t = !1,
            i, r, n = this.passes.length;
        for (r = 0; n > r; r++)
            if (i = this.passes[r], i.enabled !== !1) {
                if (i.render(this.renderer, this.writeBuffer, this.readBuffer, e, t), i.needsSwap) {
                    if (t) {
                        var a = this.renderer.context;
                        a.stencilFunc(a.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), a.stencilFunc(a.EQUAL, 1, 4294967295)
                    }
                    this.swapBuffers()
                }
                void 0 !== THREE.MaskPass && (i instanceof THREE.MaskPass ? t = !0 : i instanceof THREE.ClearMaskPass && (t = !1))
            }
    },
    reset: function(e) {
        if (void 0 === e) {
            var t = this.renderer.getSize();
            e = this.renderTarget1.clone(), e.setSize(t.width, t.height)
        }
        this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2
    },
    setSize: function(e, t) {
        this.renderTarget1.setSize(e, t), this.renderTarget2.setSize(e, t);
        for (var i = 0; i < this.passes.length; i++) this.passes[i].setSize(e, t)
    }
}), THREE.Pass = function() {
    this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
}, Object.assign(THREE.Pass.prototype, {
    setSize: function(e, t) {},
    render: function(e, t, i, r, n) {
        console.error("THREE.Pass: .render() must be implemented in derived pass.")
    }
}), THREE.RenderPass = function(e, t, i, r, n) {
    THREE.Pass.call(this), this.scene = e, this.camera = t, this.overrideMaterial = i, this.clearColor = r, this.clearAlpha = void 0 !== n ? n : 0, this.clear = !0, this.needsSwap = !1
}, THREE.RenderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
    constructor: THREE.RenderPass,
    render: function(e, t, i, r, n) {
        var a = e.autoClear;
        e.autoClear = !1, this.scene.overrideMaterial = this.overrideMaterial;
        var o, s;
        this.clearColor && (o = e.getClearColor().getHex(), s = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), e.render(this.scene, this.camera, this.renderToScreen ? null : i, this.clear), this.clearColor && e.setClearColor(o, s), this.scene.overrideMaterial = null, e.autoClear = a
    }
}), THREE.MaskPass = function(e, t) {
    THREE.Pass.call(this), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1
}, THREE.MaskPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
    constructor: THREE.MaskPass,
    render: function(e, t, i, r, n) {
        var a = e.context,
            o = e.state;
        o.buffers.color.setMask(!1), o.buffers.depth.setMask(!1), o.buffers.color.setLocked(!0), o.buffers.depth.setLocked(!0);
        var s, c;
        this.inverse ? (s = 0, c = 1) : (s = 1, c = 0), o.buffers.stencil.setTest(!0), o.buffers.stencil.setOp(a.REPLACE, a.REPLACE, a.REPLACE), o.buffers.stencil.setFunc(a.ALWAYS, s, 4294967295), o.buffers.stencil.setClear(c), e.render(this.scene, this.camera, i, this.clear), e.render(this.scene, this.camera, t, this.clear), o.buffers.color.setLocked(!1), o.buffers.depth.setLocked(!1), o.buffers.stencil.setFunc(a.EQUAL, 1, 4294967295), o.buffers.stencil.setOp(a.KEEP, a.KEEP, a.KEEP)
    }
}), THREE.ClearMaskPass = function() {
    THREE.Pass.call(this), this.needsSwap = !1
}, THREE.ClearMaskPass.prototype = Object.create(THREE.Pass.prototype), Object.assign(THREE.ClearMaskPass.prototype, {
    render: function(e, t, i, r, n) {
        e.state.buffers.stencil.setTest(!1)
    }
}), THREE.ShaderPass = function(e, t) {
    THREE.Pass.call(this), this.textureID = void 0 !== t ? t : "tDiffuse", e instanceof THREE.ShaderMaterial ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = THREE.UniformsUtils.clone(e.uniforms), this.material = new THREE.ShaderMaterial({
        defines: e.defines || {},
        uniforms: this.uniforms,
        vertexShader: e.vertexShader,
        fragmentShader: e.fragmentShader
    })), this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), this.scene = new THREE.Scene, this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null), this.scene.add(this.quad)
}, THREE.ShaderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
    constructor: THREE.ShaderPass,
    render: function(e, t, i, r, n) {
        this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = i.texture), this.quad.material = this.material, this.renderToScreen ? e.render(this.scene, this.camera) : e.render(this.scene, this.camera, t, this.clear)
    }
});
