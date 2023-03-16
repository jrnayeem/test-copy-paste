self.__BUILD_MANIFEST = function(s) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, "static/chunks/pages/index-d627038981f5821a.js"],
        "/_error": ["static/chunks/pages/_error-8353112a01355ec2.js"],
        "/dashboard": [s, "static/chunks/pages/dashboard-695336560c8ae608.js"],
        "/login": ["static/chunks/pages/login-730da063ac3a8710.js"],
        "/red/[shortCode]": ["static/chunks/pages/red/[shortCode]-a7ba1575bf2cd4e4.js"],
        "/[shortCode]": ["static/chunks/pages/[shortCode]-a1fdba94433dd9b8.js"],
        sortedPages: ["/", "/_app", "/_error", "/dashboard", "/login", "/red/[shortCode]", "/[shortCode]"]
    }
}("static/chunks/966-53de5406f01f386b.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();