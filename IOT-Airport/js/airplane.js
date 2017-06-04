function Airplane(x,y){
	this.x = x;
	this.y = y;
	this.radius = 50;

	this.show = function(){
		image(airplaneImage,x,y,150,150);
	}
}
