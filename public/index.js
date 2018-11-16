
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
//------------------------ follow scroll vertical movement UP ---------------------//
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
//------------------------ move text vertically ---------------------//
var text = document.querySelector(".foto_text_2");


function setMovementText(yPos, el) {
    var pos = -yPos;
    el.style.transform = "translate3d(0px, " + pos + "px, 0px)";
}

function scrollText() {

    yScrollPosition = window.scrollY;

    setMovementText(yScrollPosition, text);

    requestAnimationFrame(scrollText);
}

scrollText();
//------------------------ move text 3 vertically ---------------------//
var texto = document.querySelector(".foto_text_3");


// function setMovementText(yPos, el) {
//     var pos = -yPos;
//     el.style.transform = "translate3d(0px, " + pos + "px, 0px)";
// }

function scrollTexto() {

    yScrollPosition = window.scrollY;

    setMovementText(yScrollPosition, texto);

    requestAnimationFrame(scrollTexto);
}

scrollTexto();
//------------------------ move button 3 vertically ---------------------//
var button_3 = document.querySelector("#order_button_3");


// function setMovementText(yPos, el) {
//     var pos = -yPos;
//     el.style.transform = "translate3d(0px, " + pos + "px, 0px)";
// }

function scrollButton_3() {

    yScrollPosition = window.scrollY;

    setMovementText(yScrollPosition, button_3);

    requestAnimationFrame(scrollButton_3);
}

scrollButton_3();

//------------------------ move text 3 vertically ---------------------//
// var text_3 = document.querySelector(".foto_text_3");
// var button_3 = document.querySelector("#order_button_3");
//
// function scroll(x) {
//
//     yScrollPosition = window.scrollY; /// absoluter wert, was am code ändern
//
//     setMovementText(yScrollPosition, x);
//
//     requestAnimationFrame(scroll); hier: (function scroll(x)) reinsetzen oder nur (scroll(x))
// }
//
// scroll(text_3);
// scroll(button_3);

//------------------------ move text vertically ---------------------//
var button = document.querySelector("#order_button_2");


function setMovementButton(yPos, el) {
    var pos = -yPos;
    el.style.transform = "translate3d(0px, " + pos + "px, 0px)";
}

function scrollButton() {

    yScrollPosition = window.scrollY;

    setMovementButton(yScrollPosition, button);

    requestAnimationFrame(scrollButton);
}

scrollButton();
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


//------------------------ Modal -------------//

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("order_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
