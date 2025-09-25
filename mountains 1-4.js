function mountain(x,y,w,h,c1,snow) {
	push();
	translate(x,y);
	scale(w,h);
	
	noStroke();
	//draw mountain
	fill(c1)
	beginShape(); 
	vertex(-0.5,0);
		vertex(-0.2,-0.7);
		vertex(0,-1);
		vertex(0.2,-0.7);
		vertex(0.5,0);
	endShape(CLOSE);
	//use logic to test for snow
	if(snow) {
	fill(255);//white color for snow 
		beginShape();
		vertex(-0.2,-0.7);
		vertex(-0.1,-0.6);
		vertex(0,-0.7);
		vertex(0.1,-0.6);
		vertex(0.2,-0.7);
		vertex(0,-1);
		vertex(-0.2,-0.7);
		
		endShape(CLOSE);
	}
	pop();	
}

function mountain2(x,y,w,h,c1,snow) {
	push();
	translate(x,y);
	scale(w,h);
	
	noStroke();
	//draw mountain
	fill(c1)
	beginShape(); 
	vertex(0.5,0);
		vertex(0.2,-0.7);
		vertex(0,-1);
		vertex(-0.2,-0.7);
		vertex(-0.5,0);
	endShape(CLOSE);
	//use logic to test for snow
	if(snow) {
	fill(255);//white color for snow 
		beginShape();
		vertex(0.2,-0.7);
		vertex(0.1,-0.6);
		vertex(0,-0.7);
		vertex(-0.1,-0.6);
		vertex(-0.2,-0.7);
		vertex(0,-1);
		vertex(0.2,-0.7);
		
		endShape(CLOSE);
	}
	pop();	
}

function mountain3 (x,y,w,h,c1,snow) {
	push();
	translate(x,y);
	scale(w,h);
	
	noStroke();
	//draw mountain
	fill(c1)
	beginShape(); 
	vertex(0.5,0);
	vertex(-0.5,0);
	vertex(0,-0.5);
	vertex(0.5,0);
	endShape(CLOSE);
	
	//use logic to test for snow
	if(snow) {
	fill(255);//white color for snow 
		beginShape();
		vertex(0,-0.5);
		vertex(0.16,-0.35);
		vertex(0.1,-0.3);
		vertex(0,-0.4);
		vertex(-0.2,-0.3);
		vertex(0,-0.5);
		
		endShape(CLOSE);
	}
	pop();	
}

function mountain4 (x,y,w,h,c1,snow) {
	push();
	translate(x,y);
	scale(w,h);
	
	noStroke();
	//draw mountain
	fill(c1)
	beginShape(); 
	vertex(-0.5,0);
	vertex(0.5,0);
	vertex(-0,-0.5);
	vertex(-0.5,0);
	endShape(CLOSE);
	
	//use logic to test for snow
	if(snow) {
	fill(255);//white color for snow 
		beginShape();
		vertex(-0,-0.5);
		vertex(-0.16,-0.35);
		vertex(-0.1,-0.3);
		vertex(0,-0.4);
		vertex(0.2,-0.3);
		vertex(0,-0.5);
		
		endShape(CLOSE);
	}
	pop();	
}

function mountain5 (x,y,w,h,c1,snow) {
	push();
	translate(x,y);
	scale(w,h);
	
	noStroke();
	//draw mountain
	fill(c1)
	beginShape(); 
	vertex(0.5,0);
	vertex(-0.5,0);
	vertex(0,-0.5);
	vertex(0.5,0);
	endShape(CLOSE);
	
	//use logic to test for snow
	if(snow) {
	fill(255);//white color for snow 
		beginShape();
		vertex(0,-0.5);
		vertex(0.16,-0.35);
		vertex(0.1,-0.3);
		vertex(0,-0.4);
		vertex(-0.2,-0.3);
		vertex(0,-0.5);
		
		endShape(CLOSE);
	}
	pop();	
}

function mountain6 (x,y,w,h,c1,snow) {
	push();
	translate(x,y);
	scale(w,h);
	
	noStroke();
	//draw mountain
	fill(c1)
	beginShape(); 
	vertex(-0.5,0);
	vertex(0.5,0);
	vertex(-0,-0.5);
	vertex(-0.5,0);
	endShape(CLOSE);
	
	//use logic to test for snow
	if(snow) {
	fill(255);//white color for snow 
		beginShape();
		vertex(0,-0.5);
		vertex(-0.16,-0.35);
		vertex(-0.1,-0.3);
		vertex(0,-0.4);
		vertex(0.2,-0.3);
		vertex(0,-0.5);
		endShape(CLOSE);	
	}
	pop();	
}
	