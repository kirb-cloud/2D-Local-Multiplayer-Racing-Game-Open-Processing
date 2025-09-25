function tree(x,y,w,h,c1,c2) {
	push();
	translate(x,y); //place the origin at tree insertion point
	scale(w,h); //use width and height to set tree scale
	
	//draw the tree with beginShape and endShape
	noStroke();
	fill(c1); //set the color of the tree.
	beginShape();
	vertex(-0.3,-0.3);
	vertex(-0.5,-0.3);
	vertex(-0.5,-0.4);
	vertex(-0.4,-0.4);
	vertex(-0.4,-0.45);
	vertex(-0.2,-0.45);
	vertex(-0.2,-0.4);
	vertex(-0.2,-0.4);
		vertex(-0.1,-0.4);
		vertex(-0.1,-0.3);
		vertex(-0.2,-0.3);
		vertex(-0.3,-0.3);//end of first canopy
	
	endShape(CLOSE);
	//draw the trunk
	fill(84,58,55); //set the color of the trunk
	beginShape();//begining of the trunk
	vertex(-0.3,-0.3);
	vertex(-0.2,-0.3);
	vertex(-0.2,-0.2);
	vertex(0.1,-0.2);
	vertex(0.1,-0.5);
	vertex(0.3,-0.5);
	vertex(0.3,-0.3); 
	vertex(0.5,-0.3);
	vertex(0.5,-0.2);
	vertex(0.3,-0.2);
	vertex(0.3,0);
	vertex(0.1,0);
	vertex(0.1,-0.1);
	vertex(-0.4,-0.1);
	vertex(-0.4,-0.3);

	
	endShape(CLOSE);
	fill(232,160,33);
	beginShape();//second canopy
	vertex(0.3,-0.5);
	vertex(0.5,-0.5);
	vertex(0.5,-0.6);
	vertex(0.4,-0.6);
	vertex(0.4,-0.7);
	vertex(0.3,-0.7);
	vertex(0.3,-0.8);
	vertex(0.1,-0.8);
	vertex(0.1,-0.8);
	vertex(0.1,-0.7);
	vertex(-0.1,-0.7);
	vertex(-0.1,-0.6);
	vertex(-0.2,-0.6);
	vertex(-0.2,-0.5);
	vertex(0,-0.5);
	vertex(0.3,-0.5);
	
	endShape(CLOSE);
	fill(220,200,162);
	beginShape();//third canopy
	vertex(-0.5,-0.8);
	vertex(-0.5,-0.9);
	vertex(-0.4,-0.9);
	vertex(-0.4,-1);
	vertex(-0.1,-1);
	vertex(-0.1,-0.9);
	vertex(0,-0.9);
	vertex(0,-0.8);
	
	endShape(CLOSE);
	fill(84,58,55);
	beginShape();//branch 
	vertex(-0.3,-0.8);
	vertex(-0.2,-0.8);
	vertex(-0.2,-0.7);
	vertex(-0.1,-0.7);
	vertex(-0.1,-0.65);
	vertex(-0.2,-0.65);
	vertex(-0.3,-0.8);
	
	
	endShape(CLOSE);
	pop();
}

function tree2(x,y,w,h,c1,c2) {
	push();
	translate(x,y); //place the origin at tree insertion point
	scale(w,h); //use width and height to set tree scale
	
	//draw the tree with beginShape and endShape
	noStroke();
	fill(c1); //set the color of the tree.
	beginShape();
	vertex(0.3,-0.3);
	vertex(0.5,-0.3);
	vertex(0.5,-0.4);
	vertex(0.4,-0.4);
	vertex(0.4,-0.45);
	vertex(0.2,-0.45);
	vertex(0.2,-0.4);
	vertex(0.2,-0.4);
		vertex(0.1,-0.4);
		vertex(0.1,-0.3);
		vertex(0.2,-0.3);
		vertex(0.3,-0.3);//end of first canopy
	
	endShape(CLOSE);
	fill(84,58,55); //set the color of the trunk
	beginShape();//begining of the trunk
	vertex(0.3,-0.3);
	vertex(0.2,-0.3);
	vertex(0.2,-0.2);
	vertex(-0.1,-0.2);
	vertex(-0.1,-0.5);
	vertex(-0.3,-0.5);
	vertex(-0.3,-0.3);
	vertex(-0.5,-0.3);
	vertex(-0.5,-0.2);
	vertex(-0.3,-0.2);
	vertex(-0.3,-0);
	vertex(-0.1,-0);
	vertex(-0.1,-0.1);
	vertex(0.4,-0.1);
	vertex(0.4,-0.3);

	
	endShape(CLOSE);
	fill(232,160,33);
	beginShape();//second canopy
	vertex(-0.3,-0.5);
	vertex(-0.5,-0.5);
	vertex(-0.5,-0.6);
	vertex(-0.4,-0.6);
	vertex(-0.4,-0.7);
	vertex(-0.3,-0.7);
	vertex(-0.3,-0.8);
	vertex(-0.1,-0.8);
	vertex(-0.1,-0.8);
	vertex(-0.1,-0.7);
	vertex(0.1,-0.7);
	vertex(0.1,-0.6);
	vertex(0.2,-0.6);
	vertex(0.2,-0.5);
	vertex(0,-0.5);
	vertex(-0.3,-0.5);
	
	endShape(CLOSE);
	fill(220,200,162);
	beginShape();//third canopy
	vertex(0.5,-0.8);
	vertex(0.5,-0.9);
	vertex(0.4,-0.9);
	vertex(0.4,-1);
	vertex(0.1,-1);
	vertex(0.1,-0.9);
	vertex(0,-0.9);
	vertex(0,-0.8);
	
	endShape(CLOSE);
	fill(84,58,55);
	beginShape();//branch 
	vertex(0.3,-0.8);
	vertex(0.2,-0.8);
	vertex(0.2,-0.7);
	vertex(0.1,-0.7);
	vertex(0.1,-0.65);
	vertex(0.2,-0.65);
	vertex(0.3,-0.8);
	
	endShape(CLOSE);
	pop();
}


function tree3(x,y,w,h,c1,c2) {
	push();
	translate(x,y); //place the origin at tree insertion point
	scale(w,h); //use width and height to set tree scale
	
	//draw the tree with beginShape and endShape
	noStroke();
	fill(c1); //set the color of the tree.
	//canopy
	
	beginShape();
	vertex(0,-0.5);
	vertex(0.2,-0.3);
	vertex(0.1,-0.3);
	vertex(0.3,-0.1);
	vertex(-0.3,-0.1);
	vertex(-0.1,-0.3);
	vertex(-0.2,-0.3);
	vertex(0,-0.5);	
	endShape(CLOSE);
	
	//trunk
	fill(c2); //set the color of the trunk
	beginShape();//begining of the trunk
	vertex(0.1,-0.1);
	vertex(0.1,0);
	vertex(-0.1,0);
	vertex(-0.1,-0.1);
	vertex(0.1,-0.1);
	endShape(CLOSE);
	pop();
}