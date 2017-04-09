var angle = 0;

var slider;

// required for p5.js project
// creates canvas and angle slider
function setup() {
  	createCanvas(800, 800);
  	slider = createSlider(0, PI / 2, PI / 8, 0.01);
}

// required for p5.js project
// initiates the branch recursion for drawing the tree
function draw() {
  	background(51);
  	stroke(255);

  	angle = slider.value();

  	translate(width / 2, height);
  	branch(width / 4);
}

// recursive method that draws a tree with a variable angle
// @param len the length of the branch of the tree
function branch(len) {
	// changes the thickness of the branch based on the length of the branch
	strokeWeight(ceil(len / 10));

	// draws a branch
	line(0, 0, 0, -len);
	// moves the origin to (0, -len)
	translate(0, -len);
	
	if (len > 2) {
		// saves the previous translate location (the fork point in the tree --- Y)
		push();

		rotate(angle);
		branch(len * (2 / 3));

		// restores to the previous translate location
		pop();
		// saves the previous translate location
		push();

		rotate(-angle);
		branch(len * (2 / 3));

		pop();
	}
}