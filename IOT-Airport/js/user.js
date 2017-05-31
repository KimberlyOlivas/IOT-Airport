function User(x,y){
	this.x = x;
	this.y = y;
	this.frame = 0;
	this.radius = 16;
	this.direction = 3;  // 0:down 1:left 2:right 3:up

	this.show = function(){
		image(userImage, this.x, this.y, 32, 32, 32*this.frame, 32*this.direction, 32, 32);
		if(this.frame  === 2)
			this.frame = 0;
	}

	this.move = function(d){
		this.direction = d;
		if(this.direction === 0)
			this.y += 32;
		if(this.direction === 1)
				this.x -= 32;
		if(this.direction === 2)
			this.x += 32;
		if(this.direction === 3)
			this.y -= 32;
		this.frame++
	}

	this.colission = function(object){
		var dis = dist(this.x, this.y, object.x, object.y);
		if(dis < this.radius + object.radius)
			return true;
		return false;
	}

	this.setX = function(nx){
		this.x = 32* nx;
	}

	this.setY = function(ny){
		this.y = 32 *ny;
	}
}
