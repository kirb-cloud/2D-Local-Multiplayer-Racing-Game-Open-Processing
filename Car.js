//notice the difference between objects and regular functions
function Car (b,x,y,w,h,xv,yv, c1, c2) {
	//objects use this.notation
	this.human = b;
	this.maxA = 1.5;
	this.friction = 0.92;
	
	//A hitbox for the car two vectors: position and size
	this.hbp = createVector (x-w/2, y-h/3); //corner position of hb
	this.hbs = createVector (w , h/3);
	
	
	// create a velocity vector
	this.v = createVector(xv,yv);
	
	//a position vector
	//vectors are variables that store x,y values together.
	this.p = createVector(x,y);
	//a size vector
	this.s = createVector(w,h);
	
	this.c1 = c1; //storing the c1 color in a perm. place
	this.c2 = c2;
	
	//objects have powers
	this.show = function () {
		//determine,
		if(this.v.x<0) {
			temp = -1;
		}
		else {
			temp = 1;
		}
		//fill(255,0,0);
		//rect(this.hbp.x,this.hbp.y,this.hbs.x,this.hbs.y);
		//use map to scale the size of truck by y position
		let temp2 = map(this.p.y, windowHeight/3, windowHeight, 0.75, 1.25); //
		car (this.p.x,  this.p.y, temp*this.s.x*temp2, this.s.y*temp2, this.c1, this.c2);
	}
	
	this.move = function () {
	
		
		//multiply friction to velocity
		if (this.human) {
			this.v.mult(this.friction);
		}
		//add the velocity to the position
		this.p.add(this.v);
		
		//check for bounce (is the car off the screen?)
		if (this.human==0 && this.p.x>RACE) {
			this.p.x = 0;
		}

		
		if (this.p.y>windowHeight) {
			this.v.y *= -1;
			this.p.y += this.v.y;
		}
		if (this.p.y<windowHeight/3) {
			this.v.y *= -1;
			this.p.y += this.v.y;
		}
		//reset hitboxes
		let temp2 = map(this.p.y, windowHeight/3, windowHeight, 0.85, 1.15); 
		this.hbp = createVector (this.p.x-this.s.x/2, this.p.y-this.s.y/3);
		this.hbs = createVector (this.s.x,this.s.y/3);
	}
	
	//apply an acceleration vector to velocity
	this.force = function (a) {
		this.v.add(a);
	}
	
	
	
	
	
	
	
	
	
	
	
}