function building1(x,y, w, h, c1, c2, lights) {
	push();
	translate(x,y);
	scale(w,h);
	let mc = c1; // main color
	let rc = c2; // roof color
	let shadow = lerpColor(mc, color(0), 0.5); //mixes two colors fraction
	noStroke();
	fill(mc);
	beginShape();
	vertex(0,0);
	vertex(0,-0.7);
	vertex(0.7, -0.7);
	vertex(0.7, 0);
	vertex(0.4,0);
	vertex(0.4, -0.2);
	vertex(0.3, -0.2);
	vertex(0.3, 0);
	endShape(CLOSE);
	fill(rc);
	beginShape();
	vertex(0,-0.7);
	vertex(0.3,-1);
	vertex(1,-1);
	vertex(0.7,-0.7);
	endShape(CLOSE);
	fill(shadow);
	beginShape();
	vertex(1,-1);
	vertex(1,-0.3);
	vertex(0.7,0);
	vertex(0.7, -0.7);
	endShape(CLOSE);
	//lights
	if(lights){
		fill(255,255,200);//light yellow
	}
	else {
		fill(20,40,80) //dark blue
	}
	circle(0.5, -0.5, 0.15); // rect(upperLeftCornX, upperLeftCornY, w, h);
	circle(0.2, -0.4, 0.15);
	
	pop();
}
