var canvas = new fabric.Canvas('myCanvas');
/*
Adding Hole And Bole Objects
Adding Hole And Ball Objects X , Y
Adding Hole And Ball Objects Width And Height
*/
var hole_obj = "";
var ball_obj = "";
var ball_x = 0;
var ball_y = 0;
var hole_y = 400;
var hole_x = 800;
// Functions 
function load_img() {
	fabric.Image.fromURL('golf-h.png', function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	})
	new_image();
}

function new_image() {
	fabric.Image.fromURL('ball.png', function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	})
}
// Key Down bLOCK
window.addEventListener('keydown', my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	if (ball_x == hole_x && ball_y == hole_y) {
		canvas.remove(ball_obj);
		document.getElementById('hd3').innerHTML = "You Did A Great Job!!";
		document.getElementById('myCanvas').style.borderColor = "red";
	}
	else{
		if (keyPressed == '37') {
			left();
		}
		if (keyPressed == '39') {
			right();
		}
		if (keyPressed == '38') {
			up();
		}
		if (keyPressed == '40') {
			down();
		}
	}
}
function down() {
	if (ball_y <= 450) {
		ball_y = ball_y + 10;
		canvas.remove(ball_obj);
		new_image();
	}
}
function up() {
	if (ball_y >= 0) {
		ball_y = ball_y - 10;
		canvas.remove(ball_obj);
		new_image();
	}
}
function left() {
	if (ball_x >= 0) {
		ball_x = ball_x - 10;
		canvas.remove(ball_obj);
		new_image();
	}
}
function right() {
	if (ball_x <= 1050) {
		ball_x = ball_x + 10;
		canvas.remove(ball_obj);
		new_image();
	}
}