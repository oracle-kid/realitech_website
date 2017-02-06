!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("vue-easy-slider", [], e) : "object" == typeof exports ? exports["vue-easy-slider"] = e() : t["vue-easy-slider"] = e()
}(this, function () {
    return function (t) {
        function e(n) {
            if (i[n])return i[n].exports;
            var s = i[n] = {exports: {}, id: n, loaded: !1};
            return t[n].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports
        }

        var i = {};
        return e.m = t, e.c = i, e.p = "", e(0)
    }([function (t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.SliderItem = e.Slider = void 0;
        var s = i(1), o = n(s), r = i(18), a = n(r);
        e.Slider = o["default"], e.SliderItem = a["default"]
    }, function (t, e, i) {
        var n, s;
        i(2), n = i(6), s = i(17), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports["default"]), s && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = s)
    }, function (t, e, i) {
        var n = i(3);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(5)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(4)(), e.push([t.id, ".slider[_v-ecc22c56]{position:relative;overflow:hidden}.slider-content[_v-ecc22c56]{position:relative;height:100%}.slider-indicators[_v-ecc22c56]{position:absolute;bottom:0;z-index:99;padding:1rem}.slider-center[_v-ecc22c56]{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.slider-left[_v-ecc22c56]{left:0}.slider-right[_v-ecc22c56]{right:0}.slider-indicator-icon[_v-ecc22c56]{display:inline-block;width:10px;height:10px;margin:0 .1rem;cursor:pointer;border-radius:50%;background-color:rgba(0,0,0,.2)}.slider-indicator-active[_v-ecc22c56]{background-color:hsla(0,0%,100%,.2)}.slider-btn[_v-ecc22c56]{position:absolute;top:50%;z-index:99;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer;background-color:#000;-webkit-transition:opacity .3s;transition:opacity .3s;opacity:.3}.slider-btn[_v-ecc22c56]:hover{opacity:.5}.slider-left-btn[_v-ecc22c56]{left:0;padding:1rem .5rem .75rem .8rem}.slider-right-btn[_v-ecc22c56]{right:0;padding:1rem .8rem .75rem .5rem}.slider-icon[_v-ecc22c56]{display:inline-block;width:20px;height:20px;border-left:2px solid #fff;border-bottom:2px solid #fff}.slider-icon-left[_v-ecc22c56]{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.slider-icon-right[_v-ecc22c56]{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}", ""])
    }, function (t, e) {
        t.exports = function () {
            var t = [];
            return t.toString = function () {
                for (var t = [], e = 0; e < this.length; e++) {
                    var i = this[e];
                    i[2] ? t.push("@media " + i[2] + "{" + i[1] + "}") : t.push(i[1])
                }
                return t.join("")
            }, t.i = function (e, i) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var n = {}, s = 0; s < this.length; s++) {
                    var o = this[s][0];
                    "number" == typeof o && (n[o] = !0)
                }
                for (s = 0; s < e.length; s++) {
                    var r = e[s];
                    "number" == typeof r[0] && n[r[0]] || (i && !r[2] ? r[2] = i : i && (r[2] = "(" + r[2] + ") and (" + i + ")"), t.push(r))
                }
            }, t
        }
    }, function (t, e, i) {
        function n(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i], s = p[n.id];
                if (s) {
                    s.refs++;
                    for (var o = 0; o < s.parts.length; o++)s.parts[o](n.parts[o]);
                    for (; o < n.parts.length; o++)s.parts.push(l(n.parts[o], e))
                } else {
                    for (var r = [], o = 0; o < n.parts.length; o++)r.push(l(n.parts[o], e));
                    p[n.id] = {id: n.id, refs: 1, parts: r}
                }
            }
        }

        function s(t) {
            for (var e = [], i = {}, n = 0; n < t.length; n++) {
                var s = t[n], o = s[0], r = s[1], a = s[2], l = s[3], c = {css: r, media: a, sourceMap: l};
                i[o] ? i[o].parts.push(c) : e.push(i[o] = {id: o, parts: [c]})
            }
            return e
        }

        function o(t, e) {
            var i = h(), n = y[y.length - 1];
            if ("top" === t.insertAt)n ? n.nextSibling ? i.insertBefore(e, n.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), y.push(e); else {
                if ("bottom" !== t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                i.appendChild(e)
            }
        }

        function r(t) {
            t.parentNode.removeChild(t);
            var e = y.indexOf(t);
            e >= 0 && y.splice(e, 1)
        }

        function a(t) {
            var e = document.createElement("style");
            return e.type = "text/css", o(t, e), e
        }

        function l(t, e) {
            var i, n, s;
            if (e.singleton) {
                var o = m++;
                i = v || (v = a(e)), n = c.bind(null, i, o, !1), s = c.bind(null, i, o, !0)
            } else i = a(e), n = d.bind(null, i), s = function () {
                r(i)
            };
            return n(t), function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)return;
                    n(t = e)
                } else s()
            }
        }

        function c(t, e, i, n) {
            var s = i ? "" : n.css;
            if (t.styleSheet)t.styleSheet.cssText = x(e, s); else {
                var o = document.createTextNode(s), r = t.childNodes;
                r[e] && t.removeChild(r[e]), r.length ? t.insertBefore(o, r[e]) : t.appendChild(o)
            }
        }

        function d(t, e) {
            var i = e.css, n = e.media, s = e.sourceMap;
            if (n && t.setAttribute("media", n), s && (i += "\n/*# sourceURL=" + s.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"), t.styleSheet)t.styleSheet.cssText = i; else {
                for (; t.firstChild;)t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(i))
            }
        }

        var p = {}, u = function (t) {
            var e;
            return function () {
                return "undefined" == typeof e && (e = t.apply(this, arguments)), e
            }
        }, f = u(function () {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }), h = u(function () {
            return document.head || document.getElementsByTagName("head")[0]
        }), v = null, m = 0, y = [];
        t.exports = function (t, e) {
            e = e || {}, "undefined" == typeof e.singleton && (e.singleton = f()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
            var i = s(t);
            return n(i, e), function (t) {
                for (var o = [], r = 0; r < i.length; r++) {
                    var a = i[r], l = p[a.id];
                    l.refs--, o.push(l)
                }
                if (t) {
                    var c = s(t);
                    n(c, e)
                }
                for (var r = 0; r < o.length; r++) {
                    var l = o[r];
                    if (0 === l.refs) {
                        for (var d = 0; d < l.parts.length; d++)l.parts[d]();
                        delete p[l.id]
                    }
                }
            }
        };
        var x = function () {
            var t = [];
            return function (e, i) {
                return t[e] = i, t.filter(Boolean).join("\n")
            }
        }()
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = i(7);
        e["default"] = {
            data: function () {
                return {posFlag: 0, childrenArr: [], childrenLength: 0}
            },
            props: {
                width: {type: String, "default": "auto"},
                height: {type: String, "default": "300px"},
                interval: {type: Number, "default": 3e3},
                speed: {type: Number, "default": 500},
                auto: {type: Boolean, "default": !0},
                indicators: {"default": "center"},
                controlBtn: {type: Boolean, "default": !0},
                animation: {type: String, "default": "normal"}
            },
            computed: {
                thisSpeed: function () {
                    var t = this.speed / 1e3;
                    return t.toFixed(2)
                }, indicatorClass: function () {
                    if (this.indicators)return "slider-" + this.indicators
                }
            },
            methods: {
                autoplay: function () {
                    function t() {
                        return setInterval(function () {
                            n.posFlag < n.$children.length - 2 ? n.posFlag++ : n.posFlag = 0, i.animation(s, n.posFlag)
                        }, n.interval)
                    }

                    var e = void 0, i = this.$refs.content, n = this, s = this.posFlag;
                    return function () {
                        e ? (clearInterval(e), e = t()) : n.auto && n.$children.length > 2 && (e = t())
                    }
                }, next: function () {
                    var t = this.$refs.content, e = this.posFlag;
                    this.posFlag < this.$children.length - 2 ? ++this.posFlag : this.posFlag = 0, t.animation(e, this.posFlag), this.autoplay()
                }, preview: function () {
                    var t = this.$refs.content, e = this.posFlag;
                    this.posFlag > 0 ? --this.posFlag : this.posFlag = this.$children.length - 2, t.animation(e, this.posFlag, "preview"), this.autoplay()
                }, jump2: function (t) {
                    var e = this.$refs.content, i = this.posFlag;
                    e.animation(i, t, "jump"), this.posFlag = t, this.autoplay()
                }
            },
            events: {
                scaleSliderWidth: function (t) {
                    var e = this;
                    t(this.$el.clientWidth, this.$children.length - 1), this.scaleSliderWidth = function () {
                        t(e.$el.clientWidth, e.$children.length - 1)
                    }
                }, addChildrenLength: function () {
                    this.childrenLength++, this.childrenArr.push(this.childrenArr.length), "normal" === this.animation && this.scaleSliderWidth(), this.autoplay()
                }, scaleItemsWidth: function (t) {
                    t(this.$el.clientWidth)
                }
            },
            ready: function () {
                this.autoplay = this.autoplay(), this.autoplay()
            },
            components: {normal: n.normal, fade: n.fade}
        }
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.infinite = e.fade = e.normal = void 0;
        var s = i(8), o = n(s), r = i(11), a = n(r), l = i(14), c = n(l);
        e.normal = o["default"], e.fade = a["default"], e.infinite = c["default"]
    }, function (t, e, i) {
        var n, s;
        n = i(9), s = i(10), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports["default"]), s && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = s)
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = {
            data: function () {
                return {width: ""}
            }, methods: {
                scaleWidth: function (t, e) {
                    var i = t * e;
                    this.width = t, this.$el.style.width = i + "px"
                }, animation: function (t, e, i) {
                    this.$el.style.transform = "translate3d( " + e * -this.width + "px, 0, 0 )", this.$el.style.webkitTransform = "translate3d( " + e * -this.width + "px, 0, 0 )"
                }
            }, ready: function () {
                this.$dispatch("scaleSliderWidth", this.scaleWidth)
            }
        }
    }, function (t, e) {
        t.exports = " <div> <slot></slot> </div> "
    }, function (t, e, i) {
        var n, s;
        n = i(12), s = i(13), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports["default"]), s && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = s)
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = {
            data: function () {
                return {items: {}}
            }, props: {speed: String}, methods: {
                animation: function (t, e, i) {
                    function n(t, e) {
                        var i = this;
                        this.items[t].style.opacity = 0, this.items[e].style.opacity = 1, setTimeout(function () {
                            i.items[t].style.zIndex = o, i.items[e].style.zIndex = o + 1
                        }, 1e3 * parseInt(this.speed))
                    }

                    var s = this, o = this.items.length;
                    "preview" === i ? e === o - 1 ? n.call(this, 0, e) : n.call(this, e + 1, e) : "jump" === i ? (Array.prototype.forEach.call(this.items, function (t, e) {
                        t.style.opacity = 0, setTimeout(function () {
                            t.style.zIndex = o
                        }, 1e3 * parseInt(s.speed))
                    }), this.items[e].style.opacity = 1, setTimeout(function () {
                        s.items[e].style.zIndex = o + 1
                    }, 1e3 * parseInt(this.speed))) : 0 === e ? n.call(this, o - 1, e) : n.call(this, e - 1, e)
                }, init: function () {
                    var t = this, e = this.items = this.$el.children, i = e.length;
                    Array.prototype.forEach.call(e, function (e, n) {
                        e.style.position = "absolute", e.style.left = 0, e.style.top = 0, e.style.zIndex = i - n, e.style.transition = "opacity " + t.speed + "s", e.style.opacity = 0
                    }), e[0].style.opacity = 1
                }
            }, ready: function () {
                this.init()
            }
        }
    }, function (t, e) {
        t.exports = " <div> <slot></slot> </div> "
    }, function (t, e, i) {
        var n, s;
        n = i(15), s = i(16), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports["default"]), s && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = s)
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = {
            methods: {
                animation: function (t, e, i) {
                }
            }
        }
    }, function (t, e) {
        t.exports = " <div> <slot></slot> </div> "
    }, function (t, e) {
        t.exports = ' <div class=slider :style="{ width: width, height: height }" _v-ecc22c56=""> <component :is=animation :style="{ transition: \'all \' + thisSpeed + \'s\' }" :speed=thisSpeed class=slider-content v-ref:content="" _v-ecc22c56=""> <slot _v-ecc22c56=""></slot> </component> <div class="slider-btn slider-left-btn" @click.stop=preview v-if=controlBtn _v-ecc22c56=""> <i class="slider-icon slider-icon-left" _v-ecc22c56=""></i> </div> <div class="slider-btn slider-right-btn" @click.stop=next v-if=controlBtn _v-ecc22c56=""> <i class="slider-icon slider-icon-right" _v-ecc22c56=""></i> </div> <div class=slider-indicators v-if="indicators !== false" :class=indicatorClass @click.stop="" _v-ecc22c56=""> <i class=slider-indicator-icon :class="{ \'slider-indicator-active\': posFlag === $index }" v-for="i in childrenArr" @click="jump2( $index )" _v-ecc22c56=""></i> </div> </div> '
    }, function (t, e, i) {
        var n, s;
        i(19), n = i(21), s = i(22), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports["default"]), s && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = s)
    }, function (t, e, i) {
        var n = i(20);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(5)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        e = t.exports = i(4)(), e.push([t.id, ".slider-item[_v-7780938a]{float:left;width:100%;height:100%}", ""])
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = {
            methods: {
                scaleItemWidth: function (t) {
                    this.$el.style.width = t + "px"
                }
            }, ready: function () {
                this.$dispatch("scaleItemsWidth", this.scaleItemWidth), this.$dispatch("addChildrenLength")
            }
        }
    }, function (t, e) {
        t.exports = ' <div class=slider-item _v-7780938a=""> <slot _v-7780938a=""></slot> </div> '
    }])
});