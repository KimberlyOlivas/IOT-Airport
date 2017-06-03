function VendingMachine(x,y){
	this.x = x;
	this.y = y;
	this.radius = 25;

	this.show = function(){
		image(vendingImage,x,y,80,80);
	}
}
