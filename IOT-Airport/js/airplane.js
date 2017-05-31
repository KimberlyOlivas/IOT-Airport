function Airplane(x,y){
	this.x = x;
	this.y = y;
	this.radius = 35;

	this.show = function(){
		image(airplaneImage,x,y,70,70);
	}
}
