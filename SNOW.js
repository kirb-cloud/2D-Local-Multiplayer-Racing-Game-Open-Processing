
function Snow() {
  this.x = random(0, width);
  this.y = random(0, height);
	this.size = random(2,15);
  
  this.show = function() {
		this.y += random(1,5);
		this.x += random(-3,5);
    
		if (this.y>height) {
			this.y = random(-100,-10);
			this.x = random(width);
  }
	}
	
  this.update = function() {
    fill(255);
		noStroke();
		ellipse(this.x,this.y,this.size);
	
}
}