(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [967], {
        5642: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[shortCode]", function() {
                return n(9091)
            }])
        },
        9091: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return l
                },
                default: function() {
                    return u
                }
            });
            var c = n(5893),
                r = n(1163),
                i = n(9008),
                o = n.n(i),
                a = n(5675),
                s = n.n(a),
                A = n(7294),
                d = {
                    src: "/_next/static/media/link.bbbb20a9.png",
                    height: 94,
                    width: 94,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEWRANKTANK2rMapRNdMaXGQANGTANKLANCSANLAht6cGdWPANGuVtekKtm6cN6VA9OtRtt6rv//AAAADXRSTlP7Nv73AKbAJe3+8bj+QZKzpQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADpJREFUCJkFwQECACEEAMHtIlTo/6+9GWQsOCYMmlfbWE3GLAXyfpEOL76bOKdmJK3YrqTdEFN3NfkBPuYB15P//P4AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                l = !0;

            function u(e) {
                let {
                    host: t,
                    youtubeToken: n
                } = e, i = (0, r.useRouter)(), {
                    shortCode: a
                } = i.query, [l, u] = (0, A.useState)("copy link"), h = "vnd.youtube://youtube.com/redirect?event=comments&redir_token=".concat(n, "&q=").concat(t, "/").concat(a, "&html_redirect=1&html_redirect=1"), m = "youtube://youtube.com/redirect?event=comments&redir_token=".concat(n, "&q=").concat(t, "/").concat(a, "&html_redirect=1&html_redirect=1"), b = "https://www.youtube.com/redirect?event=comments&redir_token=".concat(n, "&q=").concat(t, "/").concat(a, "&html_redirect=1&html_redirect=1"), N = () => {
                    /Android/i.test(navigator.userAgent) ? window.location.href = h : /iPhone|iPad|iPod/i.test(navigator.userAgent) ? window.location.href = m : window.location.href = b
                }, _ = () => {
                    navigator.clipboard.writeText("".concat(t, "/").concat(a)), u("Copied Successfully")
                };
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(o(), {
                        children: (0, c.jsx)("title", {
                            children: "Join my profile"
                        })
                    }), (0, c.jsxs)("div", {
                        className: "LandingPage",
                        children: [(0, c.jsx)("h2", {
                            children: "Go to Personal Profile..."
                        }), (0, c.jsx)("button", {
                            className: "btn btn-offer",
                            onClick: N,
                            children: "Click here"
                        }), (0, c.jsxs)("div", {
                            className: "iphone-user",
                            children: [(0, c.jsxs)("p", {
                                className: "iphone-notice",
                                children: ["If you can't enter the site copy the link from ", (0, c.jsx)("span", {
                                    children: '"COPY LINK"'
                                }), " button and ", (0, c.jsx)("span", {
                                    children: "Past"
                                }), " it to any browser"]
                            }), (0, c.jsxs)("button", {
                                className: "btn btn-copy",
                                onClick: _,
                                children: [(0, c.jsx)(s(), {
                                    className: "link-img",
                                    src: d,
                                    alt: ""
                                }), " ", l]
                            })]
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], function() {
            return e(e.s = 5642)
        }), _N_E = e.O()
    }
]);
