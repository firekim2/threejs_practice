function shuffle(t) {
    for (var e = t.length, s, i; e;) i = Math.floor(Math.random() * e--), s = t[e], t[e] = t[i], t[i] = s;
    return t
}

var ct = ct || new Centi,
    RZM = RZM || {};
RZM.PATH = "/",

/*    function() {
        var t = {
            word: "",
            pos: {
                x: 0,
                y: 0
            },
            nears: [{
                word: "",
                value: 1,
                target: 1
            }],
            ploted: !1,
            ploted_index: -1,
            modified_y: !1
        }
    }(),*/

    RZM.SrcMap = function(t, e, s) {
        this.console_dom = s, this.datas = e, this.scene = t, this.word_counting = {}, this.income_cnt = 0, this.ploted_cnt = 0, this.fulled = !1, this.NUM = 32768;
        var i = new THREE.Geometry;
        for (w = 0; w < this.NUM; w++) {
            var n;
            switch (w % 4) {
                case 0:
                    n = new THREE.Vector3(100, 0, parseInt(100 * ct.rnd(-1, 1)));
                    break;
                case 1:
                    n = new THREE.Vector3(-100, 0, parseInt(100 * ct.rnd(-1, 1)));
                    break;
                case 2:
                    n = new THREE.Vector3(parseInt(100 * ct.rnd(-1, 1)), 0, 100);
                    break;
                case 3:
                    n = new THREE.Vector3(parseInt(100 * ct.rnd(-1, 1)), 0, -100);
                    break;
                default:
                    n = new THREE.Vector3(100, 0, parseInt(100 * ct.rnd(-1, 1)))
            }
            n.y = ct.rnd(1) * ct.rnd(1) * ct.rnd(1) * -50, i.vertices.push(n)
        }
        var a = (new THREE.TextureLoader).load(RZM.PATH + "images/index/circle.png"),
            o = new THREE.PointsMaterial({
                size: 4,
                sizeAttenuation: !1,
                map: a,
                alphaTest: 0,
                depthTest: !0,
                transparent: !0,
                opacity: .3,
                blending: THREE.AdditiveBlending
            }),
            r = new THREE.Points(i, o);
        if (this.particles = r, 0) {
            var d = new THREE.CubeGeometry(200, 50, 200),
                c = new THREE.MeshBasicMaterial({
                    color: 16777215
                }),
                p = new THREE.Mesh(d, c);
            p.position.y = 25;
            var h = new THREE.EdgesHelper(p, 16777215);
            h.material.linewidth = 1, h.material.opacity = .5, h.material.transparent = !0, this.scene.add(h), h.geometry.translate(0, 25, 0)
        }
        var l, f, u = 512;
        ! function() {
            l = document.createElement("canvas"), l.width = l.height = u, f = l.getContext("2d")
        }(), this.canvas_size = u, this.context = f, this.canvas = l;

        var v = new THREE.Texture(this.canvas);
        v.needsUpdate = !0;
        var E = new THREE.MeshBasicMaterial({
                map: v,
                color: 16777215,
                fog: !1,
                opacity: 1,
                transparent: !0,
                depthTest: !0,
                alphaTest: !1,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide
            }),
            m = new THREE.PlaneGeometry(200, 200, 1, 1),
            a = new THREE.Mesh(m, E);

        if (a.rotation.x = -ct.PI / 2, this.scene.add(a), ct.ctx = this.context, ct.canvas = this.canvas, this.texture = v, 0) {
            var l, f, u = 1024;
            ! function() {
                l = document.createElement("canvas"), l.width = l.height = u, f = l.getContext("2d")
            }(), this.top_canvas = l, f.font = "128pt Arial", f.fillStyle = "#ffffff", f.fillText("Nature of Rhizomatiks", 0, 128);
            var v = new THREE.Texture(this.top_canvas);
            v.needsUpdate = !0;
            var E = new THREE.MeshBasicMaterial({
                    map: v,
                    color: 16777215,
                    fog: !1,
                    opacity: 1,
                    transparent: !0,
                    depthTest: !1,
                    alphaTest: 0,
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide
                }),
                m = new THREE.PlaneGeometry(200, 200, 1, 1),
                a = new THREE.Mesh(m, E);
            a.position.y = 50, a.rotation.x = -ct.PI / 2, this.scene.add(a), this.top_texture = v
        }



        var l, f, u = 1024;
        ! function() {
            l = document.createElement("canvas"), l.width = l.height = u, f = l.getContext("2d")
        }(), this.chart_canvas = l, f.font = "64pt Arial", f.fillStyle = "#ffffff", f.fillText("Nature of Rhizomatiks", 0, 128);
        var v = new THREE.Texture(this.chart_canvas);
        v.needsUpdate = !0;
        var E = new THREE.MeshBasicMaterial({
                map: v,
                color: 16777215,
                fog: !1,
                opacity: 1,
                transparent: !0,
                depthTest: !1,
                alphaTest: 0,
                blending: THREE.AdditiveBlending,
                side: THREE.FrontSide
            }),
            m = new THREE.PlaneGeometry(200, 200, 1, 1),
            a = new THREE.Mesh(m, E);
        a.position.y = -50, a.rotation.x = ct.PI / 2, a.rotation.z = ct.PI, this.scene.add(a), this.chart_texture = v, this.spheres = [], this.lines = [], this.word_sprites = [], this.word_canvas = [];
        for (var w = 0; 20 > w; w++) {
            var x = this.createText("test"),
                v = new THREE.Texture(x);
            v.needsUpdate = !0;
            var E = new THREE.SpriteMaterial({
                    map: v,
                    color: 16777215,
                    fog: !0,
                    opacity: 1,
                    transparent: !0,
                    depthTest: !0,
                    alphaTest: !1,
                    blending: THREE.NormalBlending
                }),
                a = new THREE.Sprite(E),
                _ = 0 == w ? 50 : 20;
            a.scale.set(_, _, _), this.word_canvas.push(x), this.word_sprites.push(a)
        }
        this.next_step_index = -1, this.step_hist = [], this.sphere_asset = {
            geom: new THREE.SphereGeometry(.3, 10, 10),
            material: new THREE.MeshBasicMaterial({
                color: 16777215
            }),
            red_material: new THREE.MeshBasicMaterial({
                color: 16720384
            })
        }, this.color_map = [16734221, 16736769, 16742913, 16749826, 16756739, 16763396, 16769030, 16773129, 15792908, 14351885, 12713232, 10943765, 9239839, 7798063, 6552905, 5176682, 3800464, 2555318, 1441241, 1375734];
        var T = new THREE.GridHelper(100, 20);
        T.material.color = new THREE.Color(2433040), T.material.blending = THREE.AdditiveBlending, this.scene.add(T), this.scene.add(this.particles)

    },

    RZM.SrcMap.prototype.setConsoleDom = function(t) {
        this.console_dom = t
    }, RZM.SrcMap.prototype.toCanvasPosition = function(t) {
        return ct.zmap(t, -100, 100, 0, this.canvas_size)
    }, RZM.SrcMap.prototype.createText = function(t) {
        var e = document.createElement("canvas"),
            s = 128,
            i = 10;
        e.width = e.height = s;
        var n = e.getContext("2d");
        return n.font = i + "pt Helvetica, Arial", n.fillStyle = "#ffffff", n.fillText(t, 0, 12), e
    },

    RZM.SrcMap.prototype.drawText = function(t, e) {
        var s = 12,
            i = t.getContext("2d");
        i.clearRect(0, 0, 128, 128), i.font = s + "pt Helvetica, Arial", i.fillStyle = "#ffffff", i.textAlign = "center";
        var n = 16;
        if (e.length > n) {
            for (var a = [], o = 0; o < e.length; o += n) a.push(e.substr(o, o + n));
            for (var o = 0; o < a.length; o++) i.fillText(a[o], 64, 59 + 16 * o - 16 * (a.length - 1), 128)
        } else i.fillText(e, 64, 59, 128);
        return t
    },

     RZM.SrcMap.prototype.drawHist = function(t, e, s) {
        if (0 != s.length && void 0 != this.console_dom) {
            for (var i = "", n = 0, a = s.length - 1; a >= 0; a--) {
                var o = this.datas[s[a]].word;
                if (i += 0 == n ? "<span style='color:#ff4437'>" + o + "</span><br />" : o + "<br />", n++, n > 20) break
            }
            this.console_dom.innerHTML = i
        }
    }, RZM.SrcMap.prototype.drawChart = function(t, e, s) {
        var i = 24,
            n = 32,
            a = t.getContext("2d");
        a.clearRect(0, 0, 1024, 1024), a.font = i + "pt Helvetica, Arial", a.fillStyle = "#e21010", a.textAlign = "left";
        for (var o = Object.keys(s), r = [], d = 0, c = o.length - 1; c >= 0; c--) {
            var p = o[c];
            r.push({
                word: p,
                val: s[o[c]]
            })
        }
        r.sort(function(t, e) {
            return -t.val + e.val
        });
        for (var c = 0; c < r.length; c++) {
            var p = "[ " + r[c].val + " ] " + r[c].word;
            if (a.fillText(p, 2, 25 + n * c), d++, a.fillStyle = "#e5e5e5", c * n > 1024) break
        }
        e.needsUpdate = !0
    },

    RZM.SrcMap.prototype.modifyHeight = function(t) {

        if (this.fulled && t >= 0 && t < this.datas.length) {
            var e = this.datas[t];
            if (!e.modified_y) {
                for (var s = ct.vec2(e.pos.x, e.pos.z), i = ct.vec2(0, 0), n = 0; n < this.datas.length; n++)
                    if (t != n) {
                        var a = this.datas[n];
                        i.x = a.pos.x, i.y = a.pos.z;
                        var o = ct.dist(s, i);
                        1 > o && (e.pos.y += 2 * (1 - ct.zmap(o, 0, 1, 0, 1)))
                    } e.modified_y = !0
            }
            if (-1 != e.ploted_index) {
                var r = this.particles.geometry;
                r.vertices[e.ploted_index].x = e.pos.x, r.vertices[e.ploted_index].y = e.pos.y, r.vertices[e.ploted_index].z = e.pos.z, r.verticesNeedUpdate = !0
            }
        }
    },

    RZM.SrcMap.prototype.checkLoop = function() {
        if (0 != this.step_hist.length)
            for (var t = this.step_hist.length - 1; t >= 0; t--) {
                for (var e = this.step_hist[t], s = 0, i = 0; i < this.step_hist.length; i++) t != i && e == this.step_hist[i] && s++;
                if (this.step_hist.length > 40 && s > .1 * this.step_hist.length) {
                    this.next_step_index = -1, this.step_hist = [];
                    break
                }
            }
    },

     RZM.SrcMap.prototype.update = function() {
         
        if (ct.c % 30 < 20 && this.datas.length > 0) {
            for (var t, e = 0; e < this.lines.length; e++) this.lines[e].parent.remove(this.lines[e]), this.lines[e].geometry.dispose(), this.lines[e].material.dispose();
            this.lines = [];
            for (var e = 0; e < this.word_sprites.length; e++) this.word_sprites[e].parent && this.word_sprites[e].parent.remove(this.word_sprites[e]);
            this.next_step_index > this.datas.length - 1 && (this.next_step_index = -1);
            var s = -1 == this.next_step_index ? parseInt(ct.rnd(this.datas.length)) : this.next_step_index;
            this.step_hist.push(s), this.drawHist(this.top_canvas, this.top_texture, this.step_hist);
            var i = this.datas[s];
            void 0 == this.word_counting[i.word] ? this.word_counting[i.word] = 1 : this.word_counting[i.word]++, this.drawChart(this.chart_canvas, this.chart_texture, this.word_counting);
            var n = i.nears;
            i.ploted || (i.ploted = !0, this.plot(i));
            for (var e = 0; e < this.spheres.length; e++) this.spheres[e].visible = n.length > e;
            for (var a = [], e = 0; e < n.length; e++) {
                if (void 0 == n[e].target) {
                    n[e].target = -1;
                    for (var o = 0; o < this.datas.length; o++)
                        if (this.datas[o].word == n[e].word) {
                            n[e].target = o;
                            break
                        }
                }
                var r = n[e].target;
                if (-1 != r) {
                    e > 0 && a.push(r);
                    var d = this.datas[r];
                    if (this.drawText(this.word_canvas[e], d.word), this.word_sprites[e].material.map.needsUpdate = !0, this.word_sprites[e].position.set(d.pos.x, d.pos.y, d.pos.z), this.scene.add(this.word_sprites[e]), this.spheres.length < e + 1) {
                        var c = new THREE.Mesh(this.sphere_asset.geom, 0 == e ? this.sphere_asset.red_material : this.sphere_asset.material);
                        c.position.x = d.pos.x, c.position.y = d.pos.y, c.position.z = d.pos.z, this.scene.add(c), this.spheres.push(c)
                    } else {
                        var c = this.spheres[e];
                        c.position.x = d.pos.x, c.position.y = d.pos.y, c.position.z = d.pos.z
                    }
                    t = this.getLine({
                        x: i.pos.x,
                        y: 0,
                        z: i.pos.z
                    }, {
                        x: d.pos.x,
                        y: 0,
                        z: d.pos.z
                    }, this.color_map[e % this.color_map.length]), this.scene.add(t), this.lines.push(t), t = this.getLine({
                        x: d.pos.x,
                        y: 0,
                        z: d.pos.z
                    }, d.pos, this.color_map[e % this.color_map.length]), this.scene.add(t), this.lines.push(t), ct.bm(3), ct.col(255, 1), ct.line(this.toCanvasPosition(i.pos.x), this.toCanvasPosition(i.pos.z), this.toCanvasPosition(d.pos.x), this.toCanvasPosition(d.pos.z)), d.ploted || (d.ploted = !0, this.plot(d)), this.modifyHeight(r)
                }
            }
            if (this.texture.needsUpdate = !0, a.length > 0) {
                this.next_step_index = a[parseInt(ct.rnd(a.length))];
                var d = this.datas[this.next_step_index];
                ct.bm(3), ct.col(255, 2), ct.line(this.toCanvasPosition(i.pos.x), this.toCanvasPosition(i.pos.z), this.toCanvasPosition(d.pos.x), this.toCanvasPosition(d.pos.z))
            }
            this.checkLoop()
        }
    }, RZM.SrcMap.prototype.getLine = function(t, e, s) {
        var i = new THREE.Geometry;
        i.vertices.push(new THREE.Vector3(t.x, t.y, t.z)), i.vertices.push(new THREE.Vector3(e.x, e.y, e.z));
        var n = new THREE.Line(i, new THREE.LineBasicMaterial({
            color: s
        }));
        return n
    }, RZM.SrcMap.prototype.checkData = function(t) {
        this.fulled || void 0 != t.nears && (this.income_cnt++, this.income_cnt > this.NUM - 1 && (this.fulled = !0))
    }, RZM.SrcMap.prototype.plot = function(t) {
        if (!(this.ploted_cnt > this.NUM - 1)) {
            var e = this.particles.geometry;
            t.ploted = !0, t.ploted_index = this.ploted_cnt, e.vertices[this.ploted_cnt].x = t.pos.x, e.vertices[this.ploted_cnt].y = t.pos.y, e.vertices[this.ploted_cnt].z = t.pos.z, e.verticesNeedUpdate = !0, this.ploted_cnt++
        }
    }, RZM.SrcMapData = function() {
        this.NUM = 101, this.PREFIX = RZM.PATH + "scripts/libs/rzm_src/", this.EXT = ".json", this.loaded_cnt = 0, this.random_index_arr = [], this.random_index_arr = function(t) {
            e = [20]
            return shuffle(e)
        }(this.NUM), this.datas = []
    }, RZM.SrcMapData.prototype.loadNext = function(t) {
        if (this.loaded_cnt > this.NUM - 1) return !1;
        var e = this.PREFIX + this.random_index_arr[this.loaded_cnt] + this.EXT,
            s = new XMLHttpRequest,
            i = this;
        return s.open("GET", e, !0), s.onload = function(e) {
            if (4 === s.readyState) {
                if (200 === s.status) {
                    i.loaded_cnt++;
                    for (var n = JSON.parse(s.responseText), a = n.length, o = 0; o < n.length; o++) n[o].pos.x = ct.zmap(n[o].pos.x, 0, 1, -100, 100), n[o].pos.z = ct.zmap(n[o].pos.y, 0, 1, -100, 100), n[o].pos.y = 0, n[o].ploted = !1, n[o].ploted_index = -1, n[o].modified_y = !1, void 0 != n[o].nears && i.datas.push(n[o]), t(n[o], o == a - 1)
                }
            } else console.error(s.statusText)
        }, s.send(null), !0
    };
var ct = ct || new Centi,
    RzmSrcMap = RzmSrcMap || {};
! function() {
    function t(t, e) {
        var s = new XMLHttpRequest;
        s.open("GET", t), s.onload = function() {
            e && e(this.responseText)
        }, s.send(null)
    }

    function e() {
        l = new THREE.Scene, R = new THREE.Object3D, l.add(R),
            function() {
                f = new THREE.PerspectiveCamera(67, window.innerWidth / window.innerHeight, .01, 1e3), f.position.z = 0, f.position.y = 1300, ct.tween(f.position).to({
                    x: 0,
                    y: 100,
                    z: 190
                }, 5e3).easing(ct.SineInOut).onComplete(function() {
                    w.enabled = !0
                }.bind(this)).start()
            }(),
            function() {
                u = new THREE.WebGLRenderer({
                    antialias: !0,
                    alpha: !0
                }), u.setSize(window.innerWidth, window.innerHeight), u.setClearColor(0, 1), u.autoClear = !0, u.sortObjects = !1, w = new THREE.TrackballControls(f, u.domElement), w.staticMoving = !0, w.enabled = !1
            }(),
            function() {
                v = document.createElement("div"), E = document.createElement("div"), v.appendChild(u.domElement), document.getElementById("main-visual").appendChild(v), s()
            }(), T = new THREE.EffectComposer(u), T.addPass(new THREE.RenderPass(l, f)), t(RZM.PATH + "scripts/libs/shaders/pass.vert", function(e) {
                var s = e;
                t(RZM.PATH + "scripts/libs/shaders/lut.frag", function(t) {
                    var e = t;
                    const i = new THREE.ShaderPass({
                        vertexShader: s,
                        fragmentShader: e,
                        uniforms: {
                            tDiffuse: {
                                type: "t",
                                value: new THREE.Texture
                            },
                            tLookup: {
                                type: "t",
                                value: new THREE.Texture
                            }
                        }
                    });
                    T.addPass(i);
                    const n = (new THREE.TextureLoader).load(RZM.PATH + "scripts/libs/images/bluefilm3.png");
                    n.generateMipmaps = !1, n.minFilter = THREE.LinearFilter, i.uniforms.tLookup.value = n, T.passes[T.passes.length - 1].renderToScreen = !0
                })
            }), M = new RZM.SrcMapData, g = new RZM.SrcMap(R, M.datas, E), M.loadNext(r), c();
        var e = new WindowResizeHelper(c);
        e.enable()
    }

    function s() {
        E = document.createElement("div"), document.getElementById("main-visual").appendChild(E), E.setAttribute("id", "console_dom"), $("#console_dom").css({
            color: "#aaafbf",
            position: "absolute",
            top: "80px",
            left: "80px",
            "font-family": "Helvetica Neue LT W02_71488916",
            "font-size": "14px"
        }), void 0 != g && g.setConsoleDom(E)
    }

    function i(t) {
        t ? (E && (document.getElementById("main-visual").removeChild(E), E = null), n()) : (s(), a())
    }

    function n() {
        a(), H = setInterval(o, 3e3)
    }

    function a() {
        H && clearInterval(H)
    }

    function o() {
        w.enabled = !1, ct.tween(f.position).to(y[parseInt(ct.rnd(y.length))], 1e3).easing(ct.SineInOut).onComplete(function() {
            w.enabled = !0
        }.bind(this)).start()
    }

    function r(t, e) {
        g.checkData(t), e && !g.fulled && setTimeout(function() {
            M.loadNext(r)
        }, 1e3)
    }

    function d() {
        TWEEN.update(), h = requestAnimationFrame(d), R.rotateY(.0012), g.update(), w.update(), T.render(), ct.c++
    }

    function c(t) {
        p(window.innerWidth, window.innerHeight)
    }

    function p(t, e) {
        z != t && (z = t, f.aspect = t / e, f.updateProjectionMatrix(), u.setSize(t, e), T.setSize(t, e), w.handleResize())
    }
    if (!Detector.webgl) return void Detector.addGetWebGLMessage();
    RzmSrcMap && (RzmSrcMap.resize = function(t, e) {
        p(t, e)
    }, RzmSrcMap.pause = function() {
        cancelAnimationFrame(h)
    }, RzmSrcMap.resume = function() {
        void 0 != h && cancelAnimationFrame(h), d()
    }, RzmSrcMap.isSp = function(t) {
        i(t)
    });
    var h, l, f, u, v, E, m, w, x = new THREE.Clock,
        _ = {
            len: 100,
            phi: ct.rnd(-10, 10),
            theta: ct.rnd(-10, 10),
            rands: [ct.rnd(1e3), ct.rnd(1e3), ct.rnd(1e3)],
            zoom_factor: 1,
            max_zoom_factor: 2.2
        },
        T, R, g, M, H, y = [{
            x: 0,
            y: 100,
            z: 190
        }, {
            x: -9.690854960882843,
            y: 372.8226805956328,
            z: 9.923145054163989
        }, {
            x: 136.62327483254674,
            y: 9.941131636889398,
            z: 11.21156430983925
        }, {
            x: -6.892367152530661,
            y: -273.86005564794374,
            z: 7.062599702642858
        }, {
            x: 4.7186803956095495,
            y: .903842568295749,
            z: 214.65534496940862
        }, {
            x: 1.776282944624743,
            y: .3402392203090014,
            z: 80.80408001280772
        }];
    e(), d();
    var z = 0
}();
