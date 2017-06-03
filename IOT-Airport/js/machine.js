function Machine(x,y){
	this.x = x;
	this.y = y;
	this.radius = 33;

	this.show = function(){
		image(machineImage,x,y,50,50);
	}
}
