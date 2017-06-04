function Camera(x,y){
	this.x = x;
	this.y = y;
	this.radius = 5;

	this.show = function(){
		image(cameraImage,x,y,30,30);
	}
}
