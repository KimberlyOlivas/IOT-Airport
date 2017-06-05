function AirControl(x,y){
	this.x = x;
	this.y = y;
	this.radius = 40;

	this.show = function(){
		image(controlImage,x,y,50,50);
	}
}
