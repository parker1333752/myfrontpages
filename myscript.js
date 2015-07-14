var CANVAS_WIDTH = 200, CANVAS_HEIGHT = 400;
var mycanvas , context;

window.onload = function(){
    createCanvas();
}

function createCanvas(){
    document.body.innerHTML = "<canvas id=\"mycanvas\" height=\"" + CANVAS_HEIGHT + "\" width=\"" + CANVAS_WIDTH + " \"></canvas>";
    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2d");
}

function drawRect(){

}
