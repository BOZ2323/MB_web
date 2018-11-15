
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

var ufo = document.querySelector("#ufo_1");
var yScrollPosition;

function setUfo(yPos, el) {
    var pos = -yPos;
    el.style.transform = "translate3d(0px, " + pos + "px, 0px)";
}

// function scrollLoopUfo() {
//
//     yScrollPosition = window.scrollY;
//
//     setUfo(yScrollPosition, ufo);
//
//     requestAnimationFrame(scrollLoopUfo,5);
// }
//
// scrollLoopUfo();
var framesToSkip = 120,
    counter = 0;

function loop() {
    yScrollPosition = window.scrollY;

    setUfo(yScrollPosition, ufo);

    if (counter < framesToSkip) {
        counter++;
        requestAnimationFrame(loop);
        return;
    }

    /// do regular stuff

    counter = 0;
    requestAnimationFrame(loop);
}
loop();
//------------------------ follow scroll bar movement UP ---------------------//
var birdy = document.querySelector("#birdy");


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

//------------------------ movement HORIZONTAL from left to right -------------//

var roverII = document.querySelector("#roverII");


function setHorizontal(yPos, el) {
    var pos = -yPos;
    var xPos = pos+7300;
    el.style.transform = "translate3d(" + xPos + "px, 0px, 30px)";
}

function horizontalMoveRight() {

    yScrollPosition = window.scrollY;

    setHorizontal(yScrollPosition, roverII);

    requestAnimationFrame(horizontalMoveRight);
}

horizontalMoveRight();
