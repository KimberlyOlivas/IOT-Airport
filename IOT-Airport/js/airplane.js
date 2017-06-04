function Airplane(x,y){
	this.x = x;
	this.y = y;
	this.radius = 40;

	this.show = function(){
		image(airplaneImage,x,y,150,150);
	}
}
