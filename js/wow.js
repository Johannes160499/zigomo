
(function () {
    var f, g, h, i = function (c, d) {
            return function () {
                return c.apply(d, arguments)
            }
        },
        j = [].indexOf || function (d) {
            for (var e = 0, k = this.length; k > e; e++) {
                if (e in this && this[e] === d) {
                    return e
                }
            }
            return -1
        };
    g = function () {
        function b() {}
        return b.prototype.extend = function (e, k) {
            var l, m;
            for (l in k) {
                m = k[l], null == e[l] && (e[l] = m)
            }
            return e
        }, b.prototype.isMobile = function (c) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c)
        }, b
    }(), h = this.WeakMap || this.MozWeakMap || (h = function () {
        function b() {
            this.keys = [], this.values = []
        }
        return b.prototype.get = function (k) {
            var l, m, n, o, p;
            for (p = this.keys, l = n = 0, o = p.length; o > n; l = ++n) {
                if (m = p[l], m === k) {
                    return this.values[l]
                }
            }
        }, b.prototype.set = function (k, l) {
            var m, n, o, p, q;
            for (q = this.keys, m = o = 0, p = q.length; p > o; m = ++o) {
                if (n = q[m], n === k) {
                    return void(this.values[m] = l)
                }
            }
            return this.keys.push(k), this.values.push(l)
        }, b
    }()), f = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (f = function () {
        function b() {
            console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return b.notSupported = !0, b.prototype.observe = function () {}, b
    }()), this.WOW = function () {
        function a(b) {
            null == b && (b = {}), this.scrollCallback = i(this.scrollCallback, this), this.scrollHandler = i(this.scrollHandler, this), this.start = i(this.start, this), this.scrolled = !0, this.config = this.util().extend(b, this.defaults), this.animationNameCache = new h
        }
        return a.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        }, a.prototype.init = function () {
            var b;
            return this.element = window.document.documentElement, "interactive" === (b = document.readyState) || "complete" === b ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = []
        }, a.prototype.start = function () {
            var k, l, m, n;
            if (this.stopped = !1, this.boxes = function () {
                    var b, o, p, q;
                    for (p = this.element.querySelectorAll("." + this.config.boxClass), q = [], b = 0, o = p.length; o > b; b++) {
                        k = p[b], q.push(k)
                    }
                    return q
                }.call(this), this.all = function () {
                    var b, o, p, q;
                    for (p = this.boxes, q = [], b = 0, o = p.length; o > b; b++) {
                        k = p[b], q.push(k)
                    }
                    return q
                }.call(this), this.boxes.length) {
                if (this.disabled()) {
                    this.resetStyle()
                } else {
                    for (n = this.boxes, l = 0, m = n.length; m > l; l++) {
                        k = n[l], this.applyStyle(k, !0)
                    }
                    window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
                }
            }
            return this.config.live ? new f(function (b) {
                return function (o) {
                    var p, q, r, s, t;
                    for (t = [], r = 0, s = o.length; s > r; r++) {
                        q = o[r], t.push(function () {
                            var c, d, u, v;
                            for (u = q.addedNodes || [], v = [], c = 0, d = u.length; d > c; c++) {
                                p = u[c], v.push(this.doSync(p))
                            }
                            return v
                        }.call(b))
                    }
                    return t
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, a.prototype.stop = function () {
            return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
        }, a.prototype.sync = function () {
            return f.notSupported ? this.doSync(this.element) : void 0
        }, a.prototype.doSync = function (e) {
            var k, l, m, n, o;
            if (!this.stopped) {
                if (null == e && (e = this.element), 1 !== e.nodeType) {
                    return
                }
                for (e = e.parentNode || e, n = e.querySelectorAll("." + this.config.boxClass), o = [], l = 0, m = n.length; m > l; l++) {
                    k = n[l], j.call(this.all, k) < 0 ? (this.applyStyle(k, !0), this.boxes.push(k), this.all.push(k), o.push(this.scrolled = !0)) : o.push(void 0)
                }
                return o
            }
        }, a.prototype.show = function (b) {
            return this.applyStyle(b), b.className = "" + b.className + " " + this.config.animateClass
        }, a.prototype.applyStyle = function (k, l) {
            var m, n, o;
            return n = k.getAttribute("data-wow-duration"), m = k.getAttribute("data-wow-delay"), o = k.getAttribute("data-wow-iteration"), this.animate(function (b) {
                return function () {
                    return b.customStyle(k, l, n, m, o)
                }
            }(this))
        }, a.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (b) {
                return window.requestAnimationFrame(b)
            } : function (b) {
                return b()
            }
        }(), a.prototype.resetStyle = function () {
            var k, l, m, n, o;
            for (n = this.boxes, o = [], l = 0, m = n.length; m > l; l++) {
                k = n[l], o.push(k.setAttribute("style", "visibility: visible;"))
            }
            return o
        }, a.prototype.customStyle = function (k, l, m, n, o) {
            return l && this.cacheAnimationName(k), k.style.visibility = l ? "hidden" : "visible", m && this.vendorSet(k.style, {
                animationDuration: m
            }), n && this.vendorSet(k.style, {
                animationDelay: n
            }), o && this.vendorSet(k.style, {
                animationIterationCount: o
            }), this.vendorSet(k.style, {
                animationName: l ? "none" : this.cachedAnimationName(k)
            }), k
        }, a.prototype.vendors = ["moz", "webkit"], a.prototype.vendorSet = function (k, l) {
            var m, n, o, p;
            p = [];
            for (m in l) {
                n = l[m], k["" + m] = n, p.push(function () {
                    var c, d, e, q;
                    for (e = this.vendors, q = [], c = 0, d = e.length; d > c; c++) {
                        o = e[c], q.push(k["" + o + m.charAt(0).toUpperCase() + m.substr(1)] = n)
                    }
                    return q
                }.call(this))
            }
            return p
        }, a.prototype.vendorCSS = function (k, l) {
            var m, n, o, p, q, r;
            for (n = window.getComputedStyle(k), m = n.getPropertyCSSValue(l), r = this.vendors, p = 0, q = r.length; q > p; p++) {
                o = r[p], m = m || n.getPropertyCSSValue("-" + o + "-" + l)
            }
            return m
        }, a.prototype.animationName = function (d) {
            var e;
            try {
                e = this.vendorCSS(d, "animation-name").cssText
            } catch (k) {
                e = window.getComputedStyle(d).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, a.prototype.cacheAnimationName = function (b) {
            return this.animationNameCache.set(b, this.animationName(b))
        }, a.prototype.cachedAnimationName = function (b) {
            return this.animationNameCache.get(b)
        }, a.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, a.prototype.scrollCallback = function () {
            var b;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var k, l, m, n;
                for (m = this.boxes, n = [], k = 0, l = m.length; l > k; k++) {
                    b = m[k], b && (this.isVisible(b) ? this.show(b) : n.push(b))
                }
                return n
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, a.prototype.offsetTop = function (c) {
            for (var d; void 0 === c.offsetTop;) {
                c = c.parentNode
            }
            for (d = c.offsetTop; c = c.offsetParent;) {
                d += c.offsetTop
            }
            return d
        }, a.prototype.isVisible = function (k) {
            var l, m, n, o, p;
            return m = k.getAttribute("data-wow-offset") || this.config.offset, p = window.pageYOffset, o = p + Math.min(this.element.clientHeight, innerHeight) - m, n = this.offsetTop(k), l = n + k.clientHeight, o >= n && l >= p
        }, a.prototype.util = function () {
            return null != this._util ? this._util : this._util = new g
        }, a.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, a
    }()
}).call(this);