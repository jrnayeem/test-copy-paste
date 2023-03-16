(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        6840: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(8554)
            }])
        },
        4829: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var o = n(5893),
                r = n(7294),
                a = n(2239);

            function i(e) {
                let {
                    path: t,
                    body: n,
                    afterPost: i,
                    children: s,
                    className: l,
                    id: c,
                    extra: u
                } = e, f = (0, r.useContext)(a.t), d = f.setIsLoading, p = async () => {
                    d(!0);
                    let e = await fetch(t, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(n)
                        }),
                        o = await e.json();
                    i(o, n), d(!1)
                };
                return (0, o.jsx)("button", {
                    onClick: p,
                    ...u,
                    className: l,
                    id: c,
                    children: s
                })
            }
        },
        2239: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return r
                }
            });
            var o = n(7294);
            let r = (0, o.createContext)(null)
        },
        4187: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return r
                }
            });
            var o = n(7294);
            let r = (0, o.createContext)(null)
        },
        3378: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return r
                }
            });
            var o = n(7294);
            let r = (0, o.createContext)(null)
        },
        227: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, n, o) {
                return !1
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9749: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(6495).Z,
                r = n(2648).Z,
                a = n(1598).Z,
                i = n(7273).Z,
                s = a(n(7294)),
                l = r(n(3121)),
                c = n(2675),
                u = n(139),
                f = n(8730);
            n(7238);
            var d = r(n(9824));
            let p = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            };

            function h(e) {
                return void 0 !== e.default
            }

            function g(e) {
                return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function m(e, t, n, r, a, i, s) {
                if (!e || e["data-loaded-src"] === t) return;
                e["data-loaded-src"] = t;
                let l = "decode" in e ? e.decode() : Promise.resolve();
                l.catch(() => {}).then(() => {
                    if (e.parentNode) {
                        if ("blur" === n && i(!0), null == r ? void 0 : r.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let n = !1,
                                a = !1;
                            r.current(o({}, t, {
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => a,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    a = !0, t.stopPropagation()
                                }
                            }))
                        }(null == a ? void 0 : a.current) && a.current(e)
                    }
                })
            }
            let v = s.forwardRef((e, t) => {
                    var {
                        imgAttributes: n,
                        heightInt: r,
                        widthInt: a,
                        qualityInt: l,
                        className: c,
                        imgStyle: u,
                        blurStyle: f,
                        isLazy: d,
                        fill: p,
                        placeholder: h,
                        loading: g,
                        srcString: v,
                        config: x,
                        unoptimized: b,
                        loader: y,
                        onLoadRef: j,
                        onLoadingCompleteRef: w,
                        setBlurComplete: C,
                        setShowAltText: E,
                        onLoad: S,
                        onError: A
                    } = e, _ = i(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
                    return g = d ? "lazy" : g, s.default.createElement(s.default.Fragment, null, s.default.createElement("img", Object.assign({}, _, n, {
                        width: a,
                        height: r,
                        decoding: "async",
                        "data-nimg": p ? "fill" : "1",
                        className: c,
                        loading: g,
                        style: o({}, u, f),
                        ref: s.useCallback(e => {
                            t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (A && (e.src = e.src), e.complete && m(e, v, h, j, w, C, b))
                        }, [v, h, j, w, C, A, b, t]),
                        onLoad: e => {
                            let t = e.currentTarget;
                            m(t, v, h, j, w, C, b)
                        },
                        onError: e => {
                            E(!0), "blur" === h && C(!0), A && A(e)
                        }
                    })))
                }),
                x = s.forwardRef((e, t) => {
                    let n, r;
                    var a, {
                            src: m,
                            sizes: x,
                            unoptimized: b = !1,
                            priority: y = !1,
                            loading: j,
                            className: w,
                            quality: C,
                            width: E,
                            height: S,
                            fill: A,
                            style: _,
                            onLoad: k,
                            onLoadingComplete: O,
                            placeholder: M = "empty",
                            blurDataURL: P,
                            layout: N,
                            objectFit: R,
                            objectPosition: z,
                            lazyBoundary: I,
                            lazyRoot: L
                        } = e,
                        T = i(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
                    let D = s.useContext(f.ImageConfigContext),
                        U = s.useMemo(() => {
                            let e = p || D || u.imageConfigDefault,
                                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                                n = e.deviceSizes.sort((e, t) => e - t);
                            return o({}, e, {
                                allSizes: t,
                                deviceSizes: n
                            })
                        }, [D]),
                        F = T,
                        B = F.loader || d.default;
                    delete F.loader;
                    let V = "__next_img_default" in B;
                    if (V) {
                        if ("custom" === U.loader) throw Error('Image with src "'.concat(m, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                    } else {
                        let e = B;
                        B = t => {
                            let {
                                config: n
                            } = t, o = i(t, ["config"]);
                            return e(o)
                        }
                    }
                    if (N) {
                        "fill" === N && (A = !0);
                        let e = {
                            intrinsic: {
                                maxWidth: "100%",
                                height: "auto"
                            },
                            responsive: {
                                width: "100%",
                                height: "auto"
                            }
                        }[N];
                        e && (_ = o({}, _, e));
                        let t = {
                            responsive: "100vw",
                            fill: "100vw"
                        }[N];
                        t && !x && (x = t)
                    }
                    let H = "",
                        Y = g(E),
                        W = g(S);
                    if ("object" == typeof(a = m) && (h(a) || void 0 !== a.src)) {
                        let e = h(m) ? m.default : m;
                        if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));
                        if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));
                        if (n = e.blurWidth, r = e.blurHeight, P = P || e.blurDataURL, H = e.src, !A) {
                            if (Y || W) {
                                if (Y && !W) {
                                    let t = Y / e.width;
                                    W = Math.round(e.height * t)
                                } else if (!Y && W) {
                                    let t = W / e.height;
                                    Y = Math.round(e.width * t)
                                }
                            } else Y = e.width, W = e.height
                        }
                    }
                    let K = !y && ("lazy" === j || void 0 === j);
                    ((m = "string" == typeof m ? m : H).startsWith("data:") || m.startsWith("blob:")) && (b = !0, K = !1), U.unoptimized && (b = !0), V && m.endsWith(".svg") && !U.dangerouslyAllowSVG && (b = !0);
                    let [Q, X] = s.useState(!1), [Z, q] = s.useState(!1), J = g(C), G = Object.assign(A ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: R,
                        objectPosition: z
                    } : {}, Z ? {} : {
                        color: "transparent"
                    }, _), $ = "blur" === M && P && !Q ? {
                        backgroundSize: G.objectFit || "cover",
                        backgroundPosition: G.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({
                            widthInt: Y,
                            heightInt: W,
                            blurWidth: n,
                            blurHeight: r,
                            blurDataURL: P
                        }), '")')
                    } : {}, ee = function(e) {
                        let {
                            config: t,
                            src: n,
                            unoptimized: o,
                            width: r,
                            quality: a,
                            sizes: i,
                            loader: s
                        } = e;
                        if (o) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: c
                        } = function(e, t, n) {
                            let {
                                deviceSizes: o,
                                allSizes: r
                            } = e;
                            if (n) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let o; o = e.exec(n); o) t.push(parseInt(o[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: r.filter(t => t >= o[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: r,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof t) return {
                                widths: o,
                                kind: "w"
                            };
                            let a = [...new Set([t, 2 * t].map(e => r.find(t => t >= e) || r[r.length - 1]))];
                            return {
                                widths: a,
                                kind: "x"
                            }
                        }(t, r, i), u = l.length - 1;
                        return {
                            sizes: i || "w" !== c ? i : "100vw",
                            srcSet: l.map((e, o) => "".concat(s({
                                config: t,
                                src: n,
                                quality: a,
                                width: e
                            }), " ").concat("w" === c ? e : o + 1).concat(c)).join(", "),
                            src: s({
                                config: t,
                                src: n,
                                quality: a,
                                width: l[u]
                            })
                        }
                    }({
                        config: U,
                        src: m,
                        unoptimized: b,
                        width: Y,
                        quality: J,
                        sizes: x,
                        loader: B
                    }), et = m, en = {
                        imageSrcSet: ee.srcSet,
                        imageSizes: ee.sizes,
                        crossOrigin: F.crossOrigin
                    }, eo = s.useRef(k);
                    s.useEffect(() => {
                        eo.current = k
                    }, [k]);
                    let er = s.useRef(O);
                    s.useEffect(() => {
                        er.current = O
                    }, [O]);
                    let ea = o({
                        isLazy: K,
                        imgAttributes: ee,
                        heightInt: W,
                        widthInt: Y,
                        qualityInt: J,
                        className: w,
                        imgStyle: G,
                        blurStyle: $,
                        loading: j,
                        config: U,
                        fill: A,
                        unoptimized: b,
                        placeholder: M,
                        loader: B,
                        srcString: et,
                        onLoadRef: eo,
                        onLoadingCompleteRef: er,
                        setBlurComplete: X,
                        setShowAltText: q
                    }, F);
                    return s.default.createElement(s.default.Fragment, null, s.default.createElement(v, Object.assign({}, ea, {
                        ref: t
                    })), y ? s.default.createElement(l.default, null, s.default.createElement("link", Object.assign({
                        key: "__nimg-" + ee.src + ee.srcSet + ee.sizes,
                        rel: "preload",
                        as: "image",
                        href: ee.srcSet ? void 0 : ee.src
                    }, en))) : null)
                });
            t.default = x, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1551: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(2648).Z,
                r = n(7273).Z,
                a = o(n(7294)),
                i = n(1003),
                s = n(7795),
                l = n(4465),
                c = n(2692),
                u = n(8245),
                f = n(9246),
                d = n(227),
                p = n(3468);
            let h = new Set;

            function g(e, t, n, o) {
                if (i.isLocalURL(t)) {
                    if (!o.bypassPrefetchedCheck) {
                        let r = void 0 !== o.locale ? o.locale : "locale" in e ? e.locale : void 0,
                            a = t + "%" + n + "%" + r;
                        if (h.has(a)) return;
                        h.add(a)
                    }
                    Promise.resolve(e.prefetch(t, n, o)).catch(e => {})
                }
            }

            function m(e) {
                return "string" == typeof e ? e : s.formatUrl(e)
            }
            let v = a.default.forwardRef(function(e, t) {
                let n, o;
                let {
                    href: s,
                    as: h,
                    children: v,
                    prefetch: x,
                    passHref: b,
                    replace: y,
                    shallow: j,
                    scroll: w,
                    locale: C,
                    onClick: E,
                    onMouseEnter: S,
                    onTouchStart: A,
                    legacyBehavior: _ = !1
                } = e, k = r(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = v, _ && ("string" == typeof n || "number" == typeof n) && (n = a.default.createElement("a", null, n));
                let O = !1 !== x,
                    M = a.default.useContext(c.RouterContext),
                    P = a.default.useContext(u.AppRouterContext),
                    N = null != M ? M : P,
                    R = !M,
                    {
                        href: z,
                        as: I
                    } = a.default.useMemo(() => {
                        if (!M) {
                            let e = m(s);
                            return {
                                href: e,
                                as: h ? m(h) : e
                            }
                        }
                        let [e, t] = i.resolveHref(M, s, !0);
                        return {
                            href: e,
                            as: h ? i.resolveHref(M, h) : t || e
                        }
                    }, [M, s, h]),
                    L = a.default.useRef(z),
                    T = a.default.useRef(I);
                _ && (o = a.default.Children.only(n));
                let D = _ ? o && "object" == typeof o && o.ref : t,
                    [U, F, B] = f.useIntersection({
                        rootMargin: "200px"
                    }),
                    V = a.default.useCallback(e => {
                        (T.current !== I || L.current !== z) && (B(), T.current = I, L.current = z), U(e), D && ("function" == typeof D ? D(e) : "object" == typeof D && (D.current = e))
                    }, [I, D, z, B, U]);
                a.default.useEffect(() => {
                    N && F && O && g(N, z, I, {
                        locale: C
                    })
                }, [I, z, F, C, O, null == M ? void 0 : M.locale, N]);
                let H = {
                    ref: V,
                    onClick(e) {
                        _ || "function" != typeof E || E(e), _ && o.props && "function" == typeof o.props.onClick && o.props.onClick(e), N && !e.defaultPrevented && function(e, t, n, o, r, s, l, c, u, f) {
                            let {
                                nodeName: d
                            } = e.currentTarget, p = "A" === d.toUpperCase();
                            if (p && (function(e) {
                                    let {
                                        target: t
                                    } = e.currentTarget;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !i.isLocalURL(n))) return;
                            e.preventDefault();
                            let h = () => {
                                "beforePopState" in t ? t[r ? "replace" : "push"](n, o, {
                                    shallow: s,
                                    locale: c,
                                    scroll: l
                                }) : t[r ? "replace" : "push"](o || n, {
                                    forceOptimisticNavigation: !f
                                })
                            };
                            u ? a.default.startTransition(h) : h()
                        }(e, N, z, I, y, j, w, C, R, O)
                    },
                    onMouseEnter(e) {
                        _ || "function" != typeof S || S(e), _ && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), N && (O || !R) && g(N, z, I, {
                            locale: C,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    },
                    onTouchStart(e) {
                        _ || "function" != typeof A || A(e), _ && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), N && (O || !R) && g(N, z, I, {
                            locale: C,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    }
                };
                if (!_ || b || "a" === o.type && !("href" in o.props)) {
                    let e = void 0 !== C ? C : null == M ? void 0 : M.locale,
                        t = (null == M ? void 0 : M.isLocaleDomain) && d.getDomainLocale(I, e, null == M ? void 0 : M.locales, null == M ? void 0 : M.domainLocales);
                    H.href = t || p.addBasePath(l.addLocale(I, e, null == M ? void 0 : M.defaultLocale))
                }
                return _ ? a.default.cloneElement(o, H) : a.default.createElement("a", Object.assign({}, k, H), n)
            });
            t.default = v, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9246: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: l
                } = e, c = l || !a, [u, f] = o.useState(!1), d = o.useRef(null), p = o.useCallback(e => {
                    d.current = e
                }, []);
                o.useEffect(() => {
                    if (a) {
                        if (c || u) return;
                        let e = d.current;
                        if (e && e.tagName) {
                            let o = function(e, t, n) {
                                let {
                                    id: o,
                                    observer: r,
                                    elements: a
                                } = function(e) {
                                    let t;
                                    let n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        o = s.find(e => e.root === n.root && e.margin === n.margin);
                                    if (o && (t = i.get(o))) return t;
                                    let r = new Map,
                                        a = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = r.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            })
                                        }, e);
                                    return t = {
                                        id: n,
                                        observer: a,
                                        elements: r
                                    }, s.push(n), i.set(n, t), t
                                }(n);
                                return a.set(e, t), r.observe(e),
                                    function() {
                                        if (a.delete(e), r.unobserve(e), 0 === a.size) {
                                            r.disconnect(), i.delete(o);
                                            let e = s.findIndex(e => e.root === o.root && e.margin === o.margin);
                                            e > -1 && s.splice(e, 1)
                                        }
                                    }
                            }(e, e => e && f(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: n
                            });
                            return o
                        }
                    } else if (!u) {
                        let e = r.requestIdleCallback(() => f(!0));
                        return () => r.cancelIdleCallback(e)
                    }
                }, [c, n, t, u, d.current]);
                let h = o.useCallback(() => {
                    f(!1)
                }, []);
                return [p, u, h]
            };
            var o = n(7294),
                r = n(4686);
            let a = "function" == typeof IntersectionObserver,
                i = new Map,
                s = [];
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        2675: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getImageBlurSvg = function(e) {
                let {
                    widthInt: t,
                    heightInt: n,
                    blurWidth: o,
                    blurHeight: r,
                    blurDataURL: a
                } = e, i = o || t, s = r || n, l = a.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
                return i && s ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i, " ").concat(s, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o && r ? "1" : "20", "'/%3E").concat(l, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a, "'/%3E%3C/svg%3E")
            }
        },
        9824: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    config: t,
                    src: n,
                    width: o,
                    quality: r
                } = e;
                return "".concat(t.path, "?url=").concat(encodeURIComponent(n), "&w=").concat(o, "&q=").concat(r || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n.__next_img_default = !0, t.default = n
        },
        8554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var o = n(5893);
            n(8339);
            var r = n(7294),
                a = n(1163),
                i = n(3378),
                s = n(2239),
                l = n(5675),
                c = n.n(l),
                u = {
                    src: "/_next/static/media/user.c4ddd816.png",
                    height: 48,
                    width: 48,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUA/34A/34A/34A/34A/35MaXEA/34A/34A/34A/34A/34A/n5Yk293AAAADHRSTlN0ivxCWQBMECXiqKhmzXshAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVQImQXBgQHAMAjDMCcQaLv//51EMjAJoWeaMH3s0wPbdi+wkbJQ+u59KiLbVkhKquQHJE4A+meTbLMAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                };

            function f() {
                let {
                    user: e
                } = (0, r.useContext)(i.S);
                return (0, o.jsx)("div", {
                    className: "logo",
                    children: e && (0, o.jsxs)("div", {
                        className: "user-logo",
                        children: [(0, o.jsx)(c(), {
                            className: "user-image",
                            src: u,
                            alt: "user icon",
                            width: 25,
                            height: 25
                        }), (0, o.jsx)("p", {
                            className: "user-name",
                            children: e.username
                        })]
                    })
                })
            }
            var d = n(1664),
                p = n.n(d),
                h = n(4829);

            function g() {
                let {
                    setUser: e
                } = (0, r.useContext)(i.S);
                return (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)(h.Z, {
                        className: "link btn red logout-button",
                        path: "/api/logout",
                        body: {},
                        afterPost: function(t) {
                            "SUCCESS" === t.type && e(null)
                        },
                        children: "Logout"
                    })
                })
            }
            var m = n(4187);

            function v() {
                let {
                    setPopup: e
                } = (0, r.useContext)(m.t), [t, n] = (0, r.useState)(!1);
                return (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsxs)("div", {
                        className: "menu",
                        children: [(0, o.jsxs)("button", {
                            className: "menu-button link",
                            onClick: () => n(!t),
                            children: ["Menu ", (0, o.jsx)("p", {
                                className: "down-arrow",
                                children: "^"
                            })]
                        }), (0, o.jsxs)("div", {
                            className: "menu-div",
                            style: {
                                transform: "scaleY(".concat(t ? 1 : 0, ")")
                            },
                            children: [(0, o.jsx)("button", {
                                className: "option",
                                onClick: () => {
                                    e("CreateDomain"), n(!1)
                                },
                                children: "Add Custom Domain"
                            }), (0, o.jsx)("button", {
                                className: "option",
                                onClick: () => {
                                    e("ChangeYoutubeToken"), n(!1)
                                },
                                children: "Change Youtube Token"
                            }), (0, o.jsx)("button", {
                                className: "option",
                                onClick: () => {
                                    e("CreateUser"), n(!1)
                                },
                                children: "Create User"
                            }), (0, o.jsx)("button", {
                                className: "option",
                                onClick: () => {
                                    e("ChangePassword"), n(!1)
                                },
                                children: "Change Password"
                            }), (0, o.jsx)("button", {
                                className: "option",
                                onClick: () => {
                                    e("ChangeNotice"), n(!1)
                                },
                                children: "Change Notice"
                            }), (0, o.jsx)("button", {
                                className: "option red",
                                onClick: () => {
                                    n(!1)
                                },
                                children: "^"
                            })]
                        })]
                    })
                })
            }

            function x() {
                let {
                    user: e
                } = (0, r.useContext)(i.S), t = (0, a.useRouter)(), n = "/dashboard" === t.pathname;
                return (0, o.jsx)("div", {
                    className: "links",
                    children: e ? (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)("div", {
                            className: "links-without-logout",
                            children: ["admin" === e.role && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(p(), {
                                    href: "/",
                                    className: "link",
                                    children: "Home"
                                }), (0, o.jsx)(p(), {
                                    href: "/dashboard",
                                    className: "link",
                                    children: "Dashboard"
                                })]
                            }), n && (0, o.jsx)(v, {})]
                        }), (0, o.jsx)(g, {})]
                    }) : (0, o.jsx)("p", {
                        className: "msg",
                        children: "You need to login first"
                    })
                })
            }

            function b() {
                return (0, o.jsxs)("nav", {
                    children: [(0, o.jsx)(f, {}), (0, o.jsx)(x, {})]
                })
            }

            function y() {
                return (y = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            var j = function() {};

            function w(e, t) {
                return Math.random() * (t - e + 1) + e
            }

            function C(e, t) {
                return Math.floor(w(e, t))
            }
            var E = (0, r.forwardRef)(function(e, t) {
                    var n = e.progress,
                        o = e.height,
                        a = e.className,
                        i = e.color,
                        s = void 0 === i ? "red" : i,
                        l = e.background,
                        c = e.onLoaderFinished,
                        u = e.transitionTime,
                        f = void 0 === u ? 300 : u,
                        d = e.loaderSpeed,
                        p = void 0 === d ? 500 : d,
                        h = e.waitingTime,
                        g = void 0 === h ? 1e3 : h,
                        m = e.shadow,
                        v = void 0 === m || m,
                        x = e.containerStyle,
                        b = e.style,
                        E = e.shadowStyle,
                        S = e.containerClassName,
                        A = (0, r.useRef)(!1),
                        _ = (0, r.useState)(0),
                        k = _[0],
                        O = _[1],
                        M = (0, r.useRef)({
                            active: !1,
                            refreshRate: 1e3
                        }),
                        P = (0, r.useState)(!1),
                        N = P[0],
                        R = P[1],
                        z = (0, r.useState)({
                            active: !1,
                            value: 20
                        }),
                        I = z[0],
                        L = z[1],
                        T = (0, r.useState)({
                            height: "100%",
                            background: s,
                            transition: "all " + p + "ms ease",
                            width: "0%"
                        }),
                        D = T[0],
                        U = T[1],
                        F = (0, r.useState)({
                            boxShadow: "0 0 10px " + s + ", 0 0 10px " + s,
                            width: "5%",
                            opacity: 1,
                            position: "absolute",
                            height: "100%",
                            transition: "all " + p + "ms ease",
                            transform: "rotate(3deg) translate(0px, -4px)",
                            left: "-10rem"
                        }),
                        B = F[0],
                        V = F[1];
                    (0, r.useEffect)(function() {
                        return A.current = !0,
                            function() {
                                A.current = !1
                            }
                    }, []), (0, r.useImperativeHandle)(t, function() {
                        return {
                            continuousStart: function(e, t) {
                                if (void 0 === t && (t = 1e3), !I.active) {
                                    if (N) console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
                                    else {
                                        var n = e || C(10, 20);
                                        M.current = {
                                            active: !0,
                                            refreshRate: t
                                        }, O(n), K(n)
                                    }
                                }
                            },
                            staticStart: function(e) {
                                if (!M.current.active) {
                                    if (N) console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
                                    else {
                                        var t = e || C(30, 50);
                                        L({
                                            active: !0,
                                            value: t
                                        }), O(t), K(t)
                                    }
                                }
                            },
                            complete: function() {
                                N ? console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!") : (O(100), K(100))
                            }
                        }
                    }), (0, r.useEffect)(function() {
                        U(y({}, D, {
                            background: s
                        })), V(y({}, B, {
                            boxShadow: "0 0 10px " + s + ", 0 0 5px " + s
                        }))
                    }, [s]), (0, r.useEffect)(function() {
                        if (t) {
                            if (t && void 0 !== n) return void console.warn('react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.');
                            K(k), R(!1)
                        } else n && K(n), R(!0)
                    }, [n]);
                    var H, Y, W, K = function e(t) {
                        t >= 100 ? (U(y({}, D, {
                            width: "100%"
                        })), v && V(y({}, B, {
                            left: t - 10 + "%"
                        })), setTimeout(function() {
                            A.current && (U(y({}, D, {
                                opacity: 0,
                                width: "100%",
                                transition: "all " + f + "ms ease-out",
                                color: s
                            })), setTimeout(function() {
                                A.current && (M.current.active && (M.current = y({}, M.current, {
                                    active: !1
                                }), O(0), e(0)), I.active && (L(y({}, I, {
                                    active: !1
                                })), O(0), e(0)), c && c(), O(0), e(0))
                            }, f))
                        }, g)) : (U(function(e) {
                            return y({}, e, {
                                width: t + "%",
                                opacity: 1,
                                transition: t > 0 ? "all " + p + "ms ease" : ""
                            })
                        }), v && V(y({}, B, {
                            left: t - 5.5 + "%",
                            transition: t > 0 ? "all " + p + "ms ease" : ""
                        })))
                    };
                    return H = function() {
                        var e = w(Math.min(10, (100 - k) / 5), Math.min(20, (100 - k) / 3));
                        k + e < 95 && (O(k + e), K(k + e))
                    }, Y = M.current.active ? M.current.refreshRate : null, W = (0, r.useRef)(j), (0, r.useEffect)(function() {
                        W.current = H
                    }), (0, r.useEffect)(function() {}, [void 0]), (0, r.useEffect)(function() {
                        if (null !== Y && !1 !== Y) {
                            var e = setInterval(function() {
                                return W.current()
                            }, Y);
                            return function() {
                                return clearInterval(e)
                            }
                        }
                    }, [Y]), (0, r.createElement)("div", {
                        className: void 0 === S ? "" : S,
                        style: y({}, {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            height: void 0 === o ? 2 : o,
                            background: void 0 === l ? "transparent" : l,
                            zIndex: 99999999999,
                            width: "100%"
                        }, void 0 === x ? {} : x)
                    }, (0, r.createElement)("div", {
                        className: void 0 === a ? "" : a,
                        style: y({}, D, void 0 === b ? {} : b)
                    }, v ? (0, r.createElement)("div", {
                        style: y({}, B, void 0 === E ? {} : E)
                    }) : null))
                }),
                S = n(6573),
                A = n.n(S),
                _ = n(9008),
                k = n.n(_);

            function O() {
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "57x57",
                        href: "/favicons/apple-icon-57x57.png"
                    }), (0, o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "60x60",
                        href: "/favicons/apple-icon-60x60.png"
                    }), (0, o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "72x72",
                        href: "/favicons/apple-icon-72x72.png"
                    }), (0, o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "76x76",
                        href: "/favicons/apple-icon-76x76.png"
                    }), (0, o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "114x114",
                        href: "/favicons/apple-icon-114x114.png"
                    }), (0, o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "120x120",
                        href: "/favicons/apple-icon-120x120.png"
                    }), (0, o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "144x144",
                        href: "/favicons/apple-icon-144x144.png"
                    }), (0, o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "152x152",
                        href: "/favicons/apple-icon-152x152.png"
                    }), (0, o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/favicons/apple-icon-180x180.png"
                    }), (0, o.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "192x192",
                        href: "/favicons/android-icon-192x192.png"
                    }), (0, o.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicons/favicon-32x32.png"
                    }), (0, o.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "96x96",
                        href: "/favicons/favicon-96x96.png"
                    }), (0, o.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicons/favicon-16x16.png"
                    }), (0, o.jsx)("link", {
                        rel: "manifest",
                        href: "/favicons/manifest.json"
                    }), (0, o.jsx)("meta", {
                        name: "msapplication-TileColor",
                        content: "#ffffff"
                    }), (0, o.jsx)("meta", {
                        name: "msapplication-TileImage",
                        content: "/favicons/ms-icon-144x144.png"
                    }), (0, o.jsx)("meta", {
                        name: "theme-color",
                        content: "#ffffff"
                    })]
                })
            }
            var M = function(e) {
                let {
                    Component: t,
                    pageProps: n
                } = e, l = (0, a.useRouter)(), [c, u] = (0, r.useState)(null), [f, d] = (0, r.useState)(!1), [p, h] = (0, r.useState)(null), [g, v] = (0, r.useState)(0), {
                    redirectPage: x
                } = n;
                return (0, r.useEffect)(() => {
                    let e = async () => {
                        let e = await fetch("/api/whoami", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }),
                            t = await e.json();
                        "SUCCESS" === t.type ? u(t.data) : l.push("/login"), d(!1)
                    };
                    c || x || (d(!0), e())
                }, [c]), (0, r.useEffect)(() => {
                    let e = e => {
                            v(30)
                        },
                        t = e => {
                            v(100)
                        };
                    return l.events.on("routeChangeStart", e), l.events.on("routeChangeComplete", t), l.events.on("routeChangeError", t), () => {
                        l.events.off("routeChangeStart", e), l.events.off("routeChangeComplete", t), l.events.off("routeChangeError", t)
                    }
                }, [l]), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(k(), {
                        children: (0, o.jsx)(O, {})
                    }), (0, o.jsx)(i.S.Provider, {
                        value: {
                            user: c,
                            setUser: u
                        },
                        children: (0, o.jsx)(s.t.Provider, {
                            value: {
                                isLoading: f,
                                setIsLoading: d
                            },
                            children: (0, o.jsxs)(m.t.Provider, {
                                value: {
                                    popup: p,
                                    setPopup: h
                                },
                                children: [!x && (0, o.jsx)(b, {}), (0, o.jsx)(E, {
                                    color: "#ff0084",
                                    height: 3,
                                    progress: g,
                                    onLoaderFinished: () => v(0)
                                }), f && (0, o.jsx)("div", {
                                    id: "preloader",
                                    children: (0, o.jsx)(A(), {
                                        className: "spinner",
                                        color: "#ff5500",
                                        loading: f
                                    })
                                }), x ? (0, o.jsx)(t, { ...n
                                }) : (0, o.jsx)("main", {
                                    style: {
                                        opacity: f ? .2 : 1
                                    },
                                    children: (0, o.jsx)(t, { ...n
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        8339: function() {},
        9008: function(e, t, n) {
            e.exports = n(3121)
        },
        5675: function(e, t, n) {
            e.exports = n(9749)
        },
        1664: function(e, t, n) {
            e.exports = n(1551)
        },
        1163: function(e, t, n) {
            e.exports = n(880)
        },
        6573: function(e, t, n) {
            "use strict";
            var o = this && this.__assign || function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                },
                r = this && this.__createBinding || (Object.create ? function(e, t, n, o) {
                    void 0 === o && (o = n);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, o, r)
                } : function(e, t, n, o) {
                    void 0 === o && (o = n), e[o] = t[n]
                }),
                a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                    return a(t, e), t
                },
                s = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && 0 > t.indexOf(o) && (n[o] = e[o]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) 0 > t.indexOf(o[r]) && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
                    return n
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = i(n(7294)),
                c = n(6657),
                u = (0, n(10).createAnimation)("FadeLoader", "50% {opacity: 0.3} 100% {opacity: 1}", "fade");
            t.default = function(e) {
                var t = e.loading,
                    n = e.color,
                    r = void 0 === n ? "#000000" : n,
                    a = e.speedMultiplier,
                    i = void 0 === a ? 1 : a,
                    f = e.cssOverride,
                    d = e.height,
                    p = void 0 === d ? 15 : d,
                    h = e.width,
                    g = void 0 === h ? 5 : h,
                    m = e.radius,
                    v = void 0 === m ? 2 : m,
                    x = e.margin,
                    b = void 0 === x ? 2 : x,
                    y = s(e, ["loading", "color", "speedMultiplier", "cssOverride", "height", "width", "radius", "margin"]),
                    j = (0, c.parseLengthAndUnit)(b).value + 18,
                    w = j / 2 + j / 5.5,
                    C = o({
                        display: "inherit",
                        position: "relative",
                        fontSize: "0",
                        top: j,
                        left: j,
                        width: "".concat(3 * j, "px"),
                        height: "".concat(3 * j, "px")
                    }, void 0 === f ? {} : f),
                    E = function(e) {
                        return {
                            position: "absolute",
                            width: (0, c.cssValue)(g),
                            height: (0, c.cssValue)(p),
                            margin: (0, c.cssValue)(b),
                            backgroundColor: r,
                            borderRadius: (0, c.cssValue)(v),
                            transition: "2s",
                            animationFillMode: "both",
                            animation: "".concat(u, " ").concat(1.2 / i, "s ").concat(.12 * e, "s infinite ease-in-out")
                        }
                    },
                    S = o(o({}, E(1)), {
                        top: "".concat(j, "px"),
                        left: "0"
                    }),
                    A = o(o({}, E(2)), {
                        top: "".concat(w, "px"),
                        left: "".concat(w, "px"),
                        transform: "rotate(-45deg)"
                    }),
                    _ = o(o({}, E(3)), {
                        top: "0",
                        left: "".concat(j, "px"),
                        transform: "rotate(90deg)"
                    }),
                    k = o(o({}, E(4)), {
                        top: "".concat(-1 * w, "px"),
                        left: "".concat(w, "px"),
                        transform: "rotate(45deg)"
                    }),
                    O = o(o({}, E(5)), {
                        top: "".concat(-1 * j, "px"),
                        left: "0"
                    }),
                    M = o(o({}, E(6)), {
                        top: "".concat(-1 * w, "px"),
                        left: "".concat(-1 * w, "px"),
                        transform: "rotate(-45deg)"
                    }),
                    P = o(o({}, E(7)), {
                        top: "0",
                        left: "".concat(-1 * j, "px"),
                        transform: "rotate(90deg)"
                    }),
                    N = o(o({}, E(8)), {
                        top: "".concat(w, "px"),
                        left: "".concat(-1 * w, "px"),
                        transform: "rotate(45deg)"
                    });
                return void 0 === t || t ? l.createElement("span", o({
                    style: C
                }, y), l.createElement("span", {
                    style: S
                }), l.createElement("span", {
                    style: A
                }), l.createElement("span", {
                    style: _
                }), l.createElement("span", {
                    style: k
                }), l.createElement("span", {
                    style: O
                }), l.createElement("span", {
                    style: M
                }), l.createElement("span", {
                    style: P
                }), l.createElement("span", {
                    style: N
                })) : null
            }
        },
        10: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createAnimation = void 0, t.createAnimation = function(e, t, n) {
                var o = "react-spinners-".concat(e, "-").concat(n);
                if ("undefined" == typeof window || !window.document) return o;
                var r = document.createElement("style");
                document.head.appendChild(r);
                var a = r.sheet,
                    i = "\n    @keyframes ".concat(o, " {\n      ").concat(t, "\n    }\n  ");
                return a && a.insertRule(i, 0), o
            }
        },
        6657: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.cssValue = t.parseLengthAndUnit = void 0;
            var n = {
                cm: !0,
                mm: !0,
                in: !0,
                px: !0,
                pt: !0,
                pc: !0,
                em: !0,
                ex: !0,
                ch: !0,
                rem: !0,
                vw: !0,
                vh: !0,
                vmin: !0,
                vmax: !0,
                "%": !0
            };

            function o(e) {
                if ("number" == typeof e) return {
                    value: e,
                    unit: "px"
                };
                var t, o = (e.match(/^[0-9.]*/) || "").toString();
                t = o.includes(".") ? parseFloat(o) : parseInt(o, 10);
                var r = (e.match(/[^0-9]*$/) || "").toString();
                return n[r] ? {
                    value: t,
                    unit: r
                } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
                    value: t,
                    unit: "px"
                })
            }
            t.parseLengthAndUnit = o, t.cssValue = function(e) {
                var t = o(e);
                return "".concat(t.value).concat(t.unit)
            }
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return t(6840), t(880)
        }), _N_E = e.O()
    }
]);