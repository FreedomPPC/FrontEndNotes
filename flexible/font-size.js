// JavaScript Document
!(function(win, doc){
    function setFontSize() {
        var winWidth =  doc.documentElement.clientWidth;
		var winHeight =  doc.documentElement.clientHeight;
		
        doc.documentElement.style.fontSize = (winWidth / 750) * 100 + 'px' ;
    }
 
    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
    var timer = null;
 
    win.addEventListener(evt, function () {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }, false);
    
    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
        }
    }, false);
 
    // 初始化
    setFontSize();
}(window, document));
