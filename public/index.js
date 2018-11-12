// var birdy = document.getElementById("birdy");
//
// $(window).scroll(function (e) {
//     var scroll = $(window).scrollTop();
//     if(scroll > 100){
//         console.log('scroll', scroll)
//         birdy.classList.add("active");
//
//
//     }
//
// });


//------------------------ follow scroll bar movement ---------------------//

var birdy = document.querySelector("#birdy");
var yScrollPosition;

// scroll position
// var deltaY;
// The original position
// var origY;
// The distance it can move
// var distanceY;

// function easeInQuart(t, b, c, d) {
//   return c*(t/=d)*t*t*t+b;
// }

function setTranslate(yPos, el) {
    var pos = -yPos;
    el.style.transform = "translate3d(0px, " + pos + "px, 0px)";
}

function scrollLoop() {
    // var y += easeInQuart(deltaY, origY, distanceY, 1);
    yScrollPosition = window.scrollY;

    setTranslate(yScrollPosition, birdy);

    requestAnimationFrame(scrollLoop);
}

scrollLoop();
