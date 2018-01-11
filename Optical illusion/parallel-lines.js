function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

}

function draw() {
	noLoop();
	var length = 200;
	stroke(50);
	strokeWeight(12);
	line(windowWidth/2-length, 600, windowWidth/2+length, 600);
	line(windowWidth/2-length, 150, windowWidth/2+length, 150);

	strokeWeight(8);
	stroke(150);
	line(windowWidth/2-20,0,windowWidth/2-length-20,windowHeight);
	line(windowWidth/2+20,0,windowWidth/2+length+20,windowHeight);
}
