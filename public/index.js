

$(document).ready(function(){
    alert($("div").scrollTop());

});

// $(document).ready(function(){
//     if ($("birdy").scrollTop() + " 20px"){
//         alert("du bist spitze!");
//     }
// });

// var birdy = $("#top");
// fly.on("mousedown", function() {
//     $("#container").on("mousemove", function(e) {
//         var offset = e.offsetX;
//         console.log(e.target.id);
//         if (e.target.id == "bar") {
//             return;
//         } else {
//             slider.css({ left: offset });
//             topPicture.css({ width: offset + "px" });
//             // slider.css({ left: offset });
//         }
//     });
// });
// $(document).on("mouseup", function() {
//     $("#container").off("mousemove");
// });
