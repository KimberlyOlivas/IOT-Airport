function Store(x,y){
	this.x = x;
	this.y = y;
	this.radius = 25;

	this.show = function(){
		image(storeImage,x,y,80,80);
	}
}
