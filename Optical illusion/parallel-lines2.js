function setup() {
	createCanvas(400, 400);
	background(100);

}

var yLine1 = 0;
var yLine2 = 133;
var yLine3 = 266;

function draw() {
	background(100);
	var length = 150;
	var canvasSize = 200;

	//parallel lines
	stroke(50);
	strokeWeight(12);
	line(canvasSize-length, yLine2, canvasSize+length, yLine2);
	line(canvasSize-length, yLine3, canvasSize+length, yLine3);
	line(canvasSize-length, yLine1, canvasSize+length, yLine1);
	yLine1+=3;
	yLine2+=3;
	yLine3+=3;
	if (yLine1>400){
		yLine1 = 0;
	}
	if (yLine2>400){
		yLine2 = 0;
	}
	if (yLine3>400){
		yLine3 = 0;
	}

	strokeWeight(8);
	stroke(150);
	line(canvasSize-20,0,canvasSize-length,canvasSize*2);
	line(canvasSize+20,0,canvasSize+length,canvasSize*2);
}
