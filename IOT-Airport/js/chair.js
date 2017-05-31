function Chair(x,y){
	this.x = x;
	this.y = y;
	this.radius = 16;

	this.show = function(){
		image(chairImage,x,y,32,32);
	}
}
