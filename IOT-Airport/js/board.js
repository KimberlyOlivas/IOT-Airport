function Board(x,y){
	this.x = x;
	this.y = y;
	this.radius = 5;

	this.show = function(){
		image(boardImage,x,y,60,60);
	}
}
