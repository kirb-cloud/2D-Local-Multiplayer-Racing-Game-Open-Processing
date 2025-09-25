//notice the difference between objects and regular functions
function Plant (x,y,w,h,xv,yv, c1, c2) {
	//objects use this.notation
	this.maxA = 1.5;
	this.friction = .99;
	
	// create a velocity vector
	this.v = createVector(xv,yv);
	
	//a position vector
	//vectors are variables that store x,y values together.
	this.p = createVector(x,y);
	//a size vector
	this.s = createVector(w,h);
	
	//plant hitboxes
	//A hitbox for the plant two vectors: position and size
	this.hbp = createVector (x-w/2, y-h/3); //corner position of hb
	this.hbs = createVector (w , h/3);
	
	this.c1 = c1; //storing the c1 color in a perm. place
	this.c2 = c2;
	
	//objects have powers
	this.show = function () {
		//determine 

		tree3 (this.p.x,  this.p.y, this.s.x, this.s.y, this.c1, this.c2);
		
	}
	
	this.move = function () {
		let temp2 = map(this.p.y, windowHeight/3, windowHeight, 0.85, 1.15);
		this.hbp = createVector (this.p.x-this.s.x/2, this.p.y-this.s.y/3);
		this.hbs = createVector (this.s.x*temp2,temp2*this.s.y/3);
		
		this.v.mult(this.friction);

		//add the velocity to the position
		this.p.add(this.v);
		

		
		if (this.p.y>windowHeight) {
			this.v.y *= -1;
			this.p.y += this.v.y;
		}
		if (this.p.y<windowHeight/3) {
			this.v.y *= -1;
			this.p.y += this.v.y;
		}
		
	}
	
	//apply an acceleration vector to velocity
	this.force = function (a) {
		this.v.add(a);
	}
	
	
	
	
	
	
	
	
	
	
	
}