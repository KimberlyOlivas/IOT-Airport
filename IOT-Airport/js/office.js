function Office(x,y){
	this.x = x;
	this.y = y;
	this.radius = 5;

	this.show = function(){
		image(officeImage,x,y,100,100);
	}
}
