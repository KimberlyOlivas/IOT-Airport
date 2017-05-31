function Scanner(x,y){
	this.x = x;
	this.y = y;
	this.radius = 30;

	this.show = function(){
		image(scannerImage,x,y,60,60);
	}
}
