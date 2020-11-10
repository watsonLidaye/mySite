// JavaScript Document
//rem适配


/*  (function (doc, win) {
          var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
              var clientWidth = docEl.clientWidth;
              if (!clientWidth) return;
              docEl.style.fontSize = 10 * (clientWidth / 640) + 'px';
			  alert(docEl.style.fontSize);
            };
			
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);


*/


window.publicInfo = {
    //变量
    winW:document.body.clientWidth,
    winH:document.body.clientHeight,
    
    //浏览器类别
    //isFirefox : null,
    prefix : null,
    loadEnd : [],
    hasTouch : function(){return "ontouchend" in document ? true : false;}(),
};


(function(){

var doc = document,
    win = window,
    docEl = doc.documentElement,
    resizeEvt = 'onorientationchange' in window ? 'orientationchange' : 'resize',
    bodyEle = document.getElementsByTagName('body')[0],
    recalc = function () {
        
        var winH = window.innerHeight,
            winW = window.innerWidth;

            var sizeV = 100 * (winW / 750);
        
        sizeV = sizeV>100?100:sizeV;
        docEl.style.fontSize = sizeV + 'px';
        bodyEle.style.fontSize = '24px';
        
        window.publicInfo.htmlFontSize = sizeV;
        
    };
recalc();

if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, function(){
    if(resizeEvt==='orientationchange'){
        setTimeout(recalc,300);//orientationchange事件发生时 立马获取的window的宽高不正确 要延时获取才行
    }else{
        recalc();
    }
}, false);

}());