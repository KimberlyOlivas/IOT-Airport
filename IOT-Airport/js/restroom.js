function Restroom(x,y){
	this.x = x;
	this.y = y;
	this.radius = 25;

	this.show = function(){
		image(restroomImage,x,y,40,40);
	}
}
