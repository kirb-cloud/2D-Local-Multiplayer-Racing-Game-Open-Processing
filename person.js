function person (x,y, w, h, c1, s) { 
	push();
	translate(x,y);
	scale(w,h);
	//make a shape with an outline, but no fill
	stroke(c1);
	noFill();
	strokeWeight(0.05); //the thickness of the line
	
	if(s==99) {
	//arms
	beginShape();
	vertex(-0.3,-0.5);
	vertex(-0.1,-0.7);
	vertex(0.1,-0.7);
	vertex(0.3,-0.5);
	endShape(); //not closed
	//legs
	beginShape()
	vertex(-0.2,0);
	vertex(0,-0.3);
	vertex(0.2, 0);
	endShape();
	line(0, -0.3, 0,-0.7);
	//head
	strokeWeight(0.3);
	point(0,-0.9);
	}
	else if (s==0) {
		//arms
		beginShape();
		vertex(-0.34, -0.36);
		vertex(-0.21, -0.45);
		vertex(-0.16, -0.55);
		vertex(0.05, -0.68);
		vertex(0.15, -0.68);
		vertex(0.2, -0.5);
		vertex(0.3, -0.4);
		vertex(0.3, -0.3);
		endShape();
		//legs
		beginShape();
		vertex(-0.34,0);
		vertex(-0.43, -0.14);
		vertex(-0.18, -0.22);
		vertex(0, -0.36);
		vertex(0.36, 0);
		vertex(0.48, -0.08);
		endShape();
		//torso
		beginShape();
		vertex(0,-0.36);
		vertex(0.07, -0.7);
		endShape();
		fill(c1);
		noStroke();
		circle(0.1, -0.85, 0.25);
	}
	else if (s==1) {
		//arms
		beginShape();
		vertex(-0.5, -0.35);
		vertex(-0.36, -0.37);
		vertex(-0.2, -0.53);
		vertex(0.05, -0.62);
		vertex(0.1, -0.6);
		vertex(0.24, -0.45);
		vertex(0.4, -0.37);
		vertex(0.45, -0.3);
		endShape();
		//legs
		beginShape();
		vertex(-0.6,0);
		vertex(-0.5, -0.13);
		vertex(-0.25, -0.18);
		vertex(0, -0.34);
		vertex(0.2, -0.21);
		vertex(0.13, 0);
		vertex(0.26,0);
		endShape();
		//torso
		beginShape();
		vertex(0,-0.34);
		vertex(0.04, -0.7);
		endShape();
		fill(c1);
		noStroke();
		circle(0.1, -0.80, 0.25);
	}
		else if (s==2) {
	
		//legs
		beginShape();
		vertex(-0.2,-0.1);
		vertex(-0.11, -0.2);
		vertex(0.15, -0.23);
		vertex(0.08, -0.45);
		vertex(0.0, -0.4);
		vertex(-0.02, 0);
		vertex(0.1,0);
		endShape();
		//torso
		beginShape();
		vertex(0,-0.34);
		vertex(0.1, -0.8);
		endShape();
		fill(c1);
		noStroke();
		circle(0.15, -0.85, 0.25);
	}
	else if (s==3) {
		//arms
		beginShape();
		vertex(-0.0, -0.3);
		vertex(-0.15, -0.55);
		vertex(0.1, -0.75);
		vertex(0.15, -0.55);
		vertex(0.25, -0.4);
		vertex(0.24, -0.35);
		endShape();
		//legs
		beginShape();
		vertex(-0.2,0);
		vertex(-0.3, -0.1);
		vertex(-0, -0.45);
		vertex(0.21, -0.3);
		vertex(0.0, -0.18);
		vertex(0.08, -0.06);
		endShape();
		//torso
		beginShape();
		vertex(-0, -0.45);
		vertex(0.1, -0.75);
		endShape();
		fill(c1);
		noStroke();
		circle(0.1, -0.9, 0.25);
	}
	
	pop();
}