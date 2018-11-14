
//------------------------ at scrollposition change to active ---------------------//


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


//------------------------ follow scroll bar movement UP ---------------------//

var birdy = document.querySelector("#birdy");
var yScrollPosition;

function setTranslate(yPos, el) {
    var pos = -yPos;
    el.style.transform = "translate3d(0px, " + pos + "px, 0px)";
}

function scrollLoop() {

    yScrollPosition = window.scrollY;

    setTranslate(yScrollPosition, birdy);

    requestAnimationFrame(scrollLoop);
}

scrollLoop();
//------------------------ follow scroll bar movement HORIZONTAL -------------//

var rover = document.querySelector("#rover");


function setTranslateHorizontal(yPos, el) {
    var pos = -yPos;
    var xPos = pos;
    el.style.transform = "translate3d(" + xPos + "px, 0px, 30px)";
}

function horizontalMove() {

    yScrollPosition = window.scrollY;

    setTranslateHorizontal(yScrollPosition, rover);

    requestAnimationFrame(horizontalMove);
}

horizontalMove();
