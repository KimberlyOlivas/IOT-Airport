function Wall(x,y){
	this.x = x;
	this.y = y;
	this.radius = 16;

	this.show = function(){
		image(wallImage,x,y,32,32);
	}
}
