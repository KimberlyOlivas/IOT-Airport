function SecurityBar(x,y){
	this.x = x;
	this.y = y;
	this.radius = 25;

	this.show = function(){
		image(secBarImage,x,y,30,30);
	}
}
