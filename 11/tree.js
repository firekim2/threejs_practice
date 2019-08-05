"use strict";

function _classCallCheck(t, i) {
    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function() {
        function t(t, i) {
            for (var s = 0; s < i.length; s++) {
                var e = i[s];
                e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
            }
        }
        return function(i, s, e) {
            return s && t(i.prototype, s), e && t(i, e), i
        }
    }(),
    NUM = 300,
    PARTICLE_COUNT = 300,
    NodeContainer = function() {
        function t(i) {
            var s = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            _classCallCheck(this, t), this.nodeList = i, this.line = null, this.tri = null, this.trimap = [], this.tirPos = [], this.triCount = 3, this.isDrawLine = s, this.initLint()
        }
        return _createClass(t, [{
            key: "initLint",
            value: function() {
                var t = new THREE.BufferGeometry,
                    i = this.nodeList.length * this.nodeList.length * 3,
                    s = new Float32Array(3 * i * 2);
                t.addAttribute("position", new THREE.BufferAttribute(s, 3).setDynamic(!0)), t.computeBoundingSphere();
                for (var e = 0, n = 0, o = 0; o < this.nodeList.length; o++)
                    for (var r, a = 0, h = o + 1; h < this.nodeList.length; h++) {
                        var l = this.nodeList[o].position.x - this.nodeList[h].position.x,
                            p = this.nodeList[o].position.y - this.nodeList[h].position.y,
                            c = this.nodeList[o].position.z - this.nodeList[h].position.z,
                            d = Math.sqrt(l * l + p * p + c * c);
                        0 == o && (1 == h ? this.trimap.push(this.nodeList[h].position) : d > r ? this.trimap.push(this.nodeList[h].position) : this.trimap.unshift(this.nodeList[h].position)), h == o + 1 ? (r = d, a = h) : r > d && (r = d, a = h), h == this.nodeList.length - 1 && (s[e++] = this.nodeList[o].position.x, s[e++] = this.nodeList[o].position.y, s[e++] = this.nodeList[o].position.z, s[e++] = this.nodeList[a].position.x, s[e++] = this.nodeList[a].position.y, s[e++] = this.nodeList[a].position.z, n++)
                    }
                if (this.isDrawLine) {
                    var u = new THREE.LineBasicMaterial({
                        opacity: .5,
                        vertexColors: THREE.VertexColors,
                        blending: THREE.AdditiveBlending,
                        transparent: !0,
                        linewidth: 1
                    });
                    this.line = new THREE.LineSegments(t, u), this.line.geometry.attributes.position.needsUpdate = !0, t.setDrawRange(0, 2 * n)
                }
            }
        }, {
            key: "update",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .001 * Date.now();
                this.isDrawLine && (this.line.rotation.y = .1 * t, this.line.rotation.x = .1 * t)
            }
        }]), t
    }(),
    NodePoint = function() {
        function t() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new THREE.Vector3(0, 0, 0),
                e = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            _classCallCheck(this, t), this.num = i, this.points = [], this.nodePoints = [], this.nodeLines = [], this.position = s, this.range = 50, this.group = null, this.isDrawLine = e, this.v = new THREE.Vector3(2 * Math.random() - 1, 2 * Math.random() - 1, 2 * Math.random() - 1), this.sphere = null, this.lineMesh = null, this.group = new THREE.Group, this.init()
        }
        return _createClass(t, [{
            key: "init",
            value: function() {
                this.initPoints();
                new THREE.SphereGeometry(3), new THREE.MeshLambertMaterial({
                    transparent: !0,
                    opacity: .8,
                    color: 16777215,
                    wireframe: !1
                });
                this.sphere = this.createShpere(this.position, 5 * Math.random() + 1), this.group.add(this.sphere)
            }
        }, {
            key: "createShpere",
            value: function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                    s = new THREE.SphereGeometry(i),
                    e = new THREE.MeshBasicMaterial({
                        transparent: !0,
                        opacity: .8,
                        color: 16777215,
                        wireframe: !1
                    }),
                    n = new THREE.Mesh(s, e);
                return n.position.set(t.x, t.y, t.z), n
            }
        }, {
            key: "craeteLine",
            value: function(t, i) {
                var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
                    e = new THREE.BufferGeometry,
                    n = (t.length * t.length * 3, new Float32Array(3 * t.length * 2));
                e.addAttribute("position", new THREE.BufferAttribute(n, 3).setDynamic(!0)), e.computeBoundingSphere();
                for (var o = 0, r = 0; r < t.length; r++) n[o++] = i.x, n[o++] = i.y, n[o++] = i.z, n[o++] = t[r].x + i.x, n[o++] = t[r].y + i.y, n[o++] = t[r].z + i.z;
                var a = new THREE.LineBasicMaterial({
                    opacity: .7,
                    vertexColors: THREE.VertexColors,
                    blending: THREE.AdditiveBlending,
                    transparent: !0,
                    linewidth: s
                });
                return new THREE.LineSegments(e, a)
            }
        }, {
            key: "craeteCurveLine",
            value: function(t, i) {
                var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
                    e = new THREE.BufferGeometry,
                    n = (this.num * this.num * 3, new THREE.CatmullRomCurve3(t)),
                    o = n.getPoints(i),
                    r = new Float32Array(3 * o.length);
                e.addAttribute("position", new THREE.BufferAttribute(r, 3).setDynamic(!0)), e.computeBoundingSphere();
                for (var a = 0; a < t.length; a++) r[3 * a] = o[a].x, r[3 * a + 1] = o[a].y, r[3 * a + 2] = o[a].z;
                var h = new THREE.LineBasicMaterial({
                    opacity: .7,
                    vertexColors: THREE.VertexColors,
                    blending: THREE.AdditiveBlending,
                    transparent: !0,
                    linewidth: s
                });
                return new THREE.Line(e, h)
            }
        }, {
            key: "initPoints",
            value: function() {
                this.points = [];
                for (var t = 0; t < this.num; t++) this.points.push(new THREE.Vector3(25 * (2 * Math.random() - 1), 25 * (2 * Math.random() - 1), 25 * (2 * Math.random() - 1)));
                for (var i = 0; i < this.points.length; i++) {
                    var s = new THREE.Vector3(this.position.x + this.points[i].x, this.position.y + this.points[i].y, this.position.z + this.points[i].z),
                        e = s.clone(),
                        n = 3 * Math.random() + 1;
                    e.add(this.position), e.multiplyScalar(.5), e.add(new THREE.Vector3(10 * Math.random() - 5, 10 * Math.random() - 5, 10 * Math.random() - 5));
                    var o = this.createShpere(s, n);
                    this.group.add(o), this.nodePoints.push(o)
                }
                if (this.isDrawLine) {
                    var r = this.craeteLine(this.points, this.position, 1);
                    this.group.add(r)
                }
            }
        }, {
            key: "setPosition",
            value: function(t) {
                var i = t.clone();
                i.sub(this.position), this.position = t, this.sphere.position.set(this.position.x, this.position.y, this.position.z);
                for (var s = 0; s < this.nodePoints.length; s++) this.nodePoints[s].position.set(this.points[s].x + this.position.x, this.points[s].y + this.position.y, this.points[s].z + this.position.z)
            }
        }, {
            key: "update",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .001 * Date.now();
                this.group.rotation.y = .1 * t, this.group.rotation.x = .1 * t
            }
        }]), t
    }(),
    NodeTree = function() {
        function t() {
            _classCallCheck(this, t), this.group = null, this.positions = null, this.indices = null, this.particlePositions = null, this.pointCloud = null, this.linesMesh = null, this.colors = null, this.particles = null, this.nodePoints = [], this.particlesData = [], this.r = 800, this.rHalf = this.r / 2, this.idNodeConnected = !1, this.effectController = {
                showDots: !0,
                showLines: !0,
                minDistance: 100,
                limitConnections: !1,
                maxConnections: 10,
                particleCount: 500
            }, this.init()
        }
        return _createClass(t, [{
            key: "init",
            value: function() {
                this.group = new THREE.Group, this.isFirst = !0;
                var t = NUM * NUM * 3;
                this.positions = new Float32Array(3 * t), this.colors = new Float32Array(3 * t);
                var i = new THREE.PointsMaterial({
                    color: 16777215,
                    opacity: .6,
                    size: 3,
                    blending: THREE.AdditiveBlending,
                    transparent: !0,
                    sizeAttenuation: !1
                });
                this.particles = new THREE.BufferGeometry, this.particlePositions = new Float32Array(3 * NUM);
                for (var s = 0; s < NUM; s++) {
                    var e = UTILS.MATH.random(-this.r / 2, this.r / 2),
                        n = UTILS.MATH.random(-this.r / 2, this.r / 2),
                        o = UTILS.MATH.random(-this.r / 2, this.r / 2);
                    this.particlePositions[3 * s] = e, this.particlePositions[3 * s + 1] = n, this.particlePositions[3 * s + 2] = o, this.particlesData.push({
                        velocity: new THREE.Vector3(-.5 + 1 * Math.random(), -.5 + 1 * Math.random(), -.5 + 1 * Math.random()),
                        numConnections: 0
                    })
                }
                this.particles.setDrawRange(0, PARTICLE_COUNT), this.particles.addAttribute("position", new THREE.BufferAttribute(this.particlePositions, 3).setDynamic(!0)), this.pointCloud = new THREE.Points(this.particles, i), this.group.add(this.pointCloud);
                var r = new THREE.BufferGeometry;
                r.addAttribute("position", new THREE.BufferAttribute(this.positions, 3).setDynamic(!0)), r.addAttribute("color", new THREE.BufferAttribute(this.colors, 3).setDynamic(!0)), r.computeBoundingSphere(), r.setDrawRange(0, 0);
                var a = new THREE.LineBasicMaterial({
                    opacity: .7,
                    vertexColors: THREE.VertexColors,
                    blending: THREE.AdditiveBlending,
                    transparent: !0
                });
                this.linesMesh = new THREE.LineSegments(r, a), this.group.add(this.linesMesh)
            }
        }, {
            key: "setNodePoints",
            value: function(t) {
                var i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.nodePoints = t, this.idNodeConnected = !1, this.isDrawLine = i
            }
        }, {
            key: "update",
            value: function() {
                if (this.isFirst || !Modernizr.touchevents) {
                    this.isFirst = !1;
                    var t = 0,
                        i = 0,
                        s = 0,
                        e = this.idNodeConnected ? 0 : this.nodePoints;
                    this.idNodeConnected = !0;
                    for (var n = 0; n < PARTICLE_COUNT; n++) this.particlesData[n].numConnections = 0;
                    for (var o = e; o < PARTICLE_COUNT; o++) {
                        var r = this.particlesData[o];
                        if (this.particlePositions[3 * o] += r.velocity.x, this.particlePositions[3 * o + 1] += r.velocity.y, this.particlePositions[3 * o + 2] += r.velocity.z, (this.particlePositions[3 * o + 1] < -this.rHalf || this.particlePositions[3 * o + 1] > this.rHalf) && (r.velocity.y = -r.velocity.y), (this.particlePositions[3 * o] < -this.rHalf || this.particlePositions[3 * o] > this.rHalf) && (r.velocity.x = -r.velocity.x), (this.particlePositions[3 * o + 2] < -this.rHalf || this.particlePositions[3 * o + 2] > this.rHalf) && (r.velocity.z = -r.velocity.z), !(this.effectController.limitConnections && r.numConnections >= this.effectController.maxConnections) && this.isDrawLine)
                            for (var a = o + 1; a < PARTICLE_COUNT; a++) {
                                var h = this.particlesData[a];
                                if (!(this.effectController.limitConnections && this.particleDataB.numConnections >= this.effectController.maxConnections)) {
                                    var l = this.particlePositions[3 * o] - this.particlePositions[3 * a],
                                        p = this.particlePositions[3 * o + 1] - this.particlePositions[3 * a + 1],
                                        c = this.particlePositions[3 * o + 2] - this.particlePositions[3 * a + 2],
                                        d = Math.sqrt(l * l + p * p + c * c),
                                        u = this.effectController.minDistance;
                                    if (d < u) {
                                        r.numConnections++, h.numConnections++;
                                        var E = 1 - d / this.effectController.minDistance;
                                        this.positions[t++] = this.particlePositions[3 * o], this.positions[t++] = this.particlePositions[3 * o + 1], this.positions[t++] = this.particlePositions[3 * o + 2], this.positions[t++] = this.particlePositions[3 * a], this.positions[t++] = this.particlePositions[3 * a + 1], this.positions[t++] = this.particlePositions[3 * a + 2], this.colors[i++] = E, this.colors[i++] = E, this.colors[i++] = E, this.colors[i++] = E, this.colors[i++] = E, this.colors[i++] = E, s++
                                    }
                                }
                            }
                    }
                    this.linesMesh.geometry.setDrawRange(0, 2 * s), this.linesMesh.geometry.attributes.position.needsUpdate = !0, this.linesMesh.geometry.attributes.color.needsUpdate = !0, this.pointCloud.geometry.attributes.position.needsUpdate = !0;
                    var f = .001 * Date.now();
                    this.group.rotation.y = .1 * f, this.group.rotation.x = .1 * f
                }
            }
        }]), t
    }();
