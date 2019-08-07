!(function(win, doc) {
    function setFontSize() {
        if (doc.body) {
            var winWidth =
                doc.documentElement.clientWidth || doc.body.clientWidth;
            if (winWidth > 750) {
                winWidth = 750;
            }
            doc.documentElement.style.fontSize = (winWidth / 750) * 100 + "px";
        } else {
            doc.addEventListener("DOMContentLoaded", setFontSize);
        }
    }
    var evt = "onorientationchange" in win ? "orientationchange" : "resize";
    var timer = null;
    win.addEventListener(
        evt,
        function() {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
        },
        false
    );
    win.addEventListener(
        "pageshow",
        function(e) {
            if (e.persisted) {
                clearTimeout(timer);
                timer = setTimeout(setFontSize, 300);
            }
        },
        false
    );
    setFontSize();
})(window, document);
