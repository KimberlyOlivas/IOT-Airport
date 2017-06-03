function Carousel(x,y){
	this.x = x;
	this.y = y;
	this.radius = 5;

	this.show = function(){
		image(carouselImage,x,y,150,100);
	}
}
