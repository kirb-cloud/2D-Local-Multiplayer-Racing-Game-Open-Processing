function car (x,y, w, h, c1, c2) {
	push();
	translate(x-1/2,y);
	scale(w,h);
	fill(c1);
	noStroke();
	beginShape();
	vertex(0.3,-0.6);
	vertex(0.5,-0.6);
	vertex(0.6,-0.4);
	vertex(0.8,-0.4);
	vertex(0.8,-0.2);
	vertex(0,-0.2);
	vertex(0,-0.4);
	vertex(0.2,-0.4);
	vertex(0.3,-0.6);
	//begin the cutout
	//the cutout vertices must wind the opposite direction
	beginContour();
	vertex(0.5,-0.56);
	vertex(0.3,-0.56);
	vertex(0.25,-0.4);
	vertex(0.55,-0.4);
	endContour(CLOSE);
	endShape(CLOSE);
	fill(c2);
	rect(0,-0.3,0.05,0.15);
	rect(0.75,-0.3,0.05,0.15);
	rect(0,-0.2,0.8,0.05);
	fill(0);
	ellipse(0.15,-0.15+0.05,0.15+0.1);
	ellipse(0.65,-0.15+0.05,0.15+0.1);
	fill(180);
	ellipse(0.15,-0.15+0.05,0.05+0.1);
	ellipse(0.65,-0.15+0.05,0.05+0.1);
	pop();
}