"use strict";

function _classCallCheck(i, e) {
    if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function() {
        function i(i, e) {
            for (var n = 0; n < e.length; n++) {
                var t = e[n];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(i, t.key, t)
            }
        }
        return function(e, n, t) {
            return n && i(e.prototype, n), t && i(e, t), e
        }
    }(),
    simplexNoise = new SimplexNoise,
    Node = function() {
        function i() {
            _classCallCheck(this, i), this.group = new THREE.Group, this.points = new Array, this.positions = null, this.indices = null, this.line = null, this.init()
        }
        return _createClass(i, [{
            key: "init",
            value: function() {
                var i = 10,
                    e = new THREE.BufferGeometry,
                    n = i * i * 3;
                this.positions = new Float32Array(3 * n * 2), this.indices = new Uint16Array(3 * n);
                var t = new THREE.QuadraticBezierCurve3,
                    s = UTILS.MATH.random(-50, 50),
                    o = UTILS.MATH.random(-50, 50),
                    r = UTILS.MATH.random(-50, 50),
                    a = UTILS.MATH.random(-50, 50),
                    u = UTILS.MATH.random(-50, 50),
                    l = UTILS.MATH.random(-50, 50);
                t.v0 = new THREE.Vector3(s, o, 0), t.v1 = new THREE.Vector3(r, a, 0), t.v2 = new THREE.Vector3(u, l, 0);
                for (var c = 0; c < 2 * i; c++) {
                    var h = t.getPoint(c / i),
                        d = h.x + 2 * simplexNoise.noise(h.x, h.y),
                        p = h.y + 2 * simplexNoise.noise(h.x, h.y),
                        f = h.z + 2 * simplexNoise.noise(h.x, h.y);
                    this.positions[6 * c] = d, this.positions[6 * c + 1] = p, this.positions[6 * c + 2] = f, this.positions[6 * c + 3] = d + 3 * (c / i * 2), this.positions[6 * c + 4] = p + 3 * (c / i * 2), this.positions[6 * c + 5] = f + 3 * (c / i * 2)
                }
                for (var T = 0; T < this.positions.length - 2; T++) this.indices[6 * T] = T, this.indices[6 * T + 1] = T + 2, this.indices[6 * T + 2] = T + 1, this.indices[6 * T + 3] = T, this.indices[6 * T + 4] = T + 1, this.indices[6 * T + 5] = T + 2;
                e.addAttribute("position", new THREE.BufferAttribute(this.positions, 3).setDynamic(!0)), e.addAttribute("index", new THREE.BufferAttribute(this.indices, 1)), e.computeBoundingSphere();
                var v = new THREE.LineBasicMaterial({
                    color: 16777215,
                    linewidth: 2,
                    overdraw: !0
                });
                this.line = new THREE.Mesh(e, v), this.group.add(this.line)
            }
        }, {
            key: "initParticle",
            value: function() {}
        }, {
            key: "initOption",
            value: function() {}
        }, {
            key: "initPoints",
            value: function() {}
        }, {
            key: "setPoints",
            value: function(i) {}
        }, {
            key: "update",
            value: function(i) {
                line.geometry.setDrawRange(0, i)
            }
        }, {
            key: "draw",
            value: function() {}
        }]), i
    }();
