var leftCanvas = document.getElementById("canvas-left");
var lctx = leftCanvas.getContext("2d");

var leftImage = "./assets/bryce.jpg";

var screenWidth = screen.width;
var screenHeight = screen.height;

console.log(screenWidth);

leftCanvas.width = screenWidth/2;
leftCanvas.height = screenHeight;
rightCanvas.width = screenWidth/2;
rightCanvas.width = screenHeight;

lctx.drawImage(leftImage);
rctx.drawImage(rightImage);