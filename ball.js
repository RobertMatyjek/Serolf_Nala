class Ball {
	constructor(x,y,r,color) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = color;
		this.xVelocity = 0;
		this.yVelocity = 0;
	}
	
	show() {
		if (this.color == 0) {
			fill(255,0,0);
		} else if (this.color == 1) {
			fill(0,255,0);
		} else if (this.color == 2) {
			fill(0,0,255);
		} else {
			fill(255);
		}
		
		ellipse(this.x, this.y, this.r, this.r);
	}
	
	update() {
		//this.x += this.xVelocity;
		//this.y += this.yVelocity;
	}
}
