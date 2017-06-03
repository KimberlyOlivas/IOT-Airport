//Objects
var backgnd;
var user;
var airplane;
var coffee;
var board;
var office;


//Arrays
var walls = [];
var scanners = [];
var machines = [];
var chairs = [];
var carousels = [];
var vending = [];

//Images
var userImage;
var wallImage;
var scannerImage;
var machineImage;
var chairImage;
var airplaneImage;
var coffeeImage;
var boardImage;
var officeImage;
var carouselImage;
var vendingImage;

function preload(){
	userImage = loadImage("images/user.png");
	wallImage = loadImage("images/wall.jpg");
	scannerImage = loadImage("images/scanner.png");
	machineImage = loadImage("images/machine.png");
	chairImage = loadImage("images/chair.png");
	airplaneImage = loadImage("images/airplane2.png");
	coffeeImage = loadImage("images/coffeeshop.png");
	boardImage = loadImage("images/board1.png");
	officeImage = loadImage("images/office.png");
	carouselImage = loadImage("images/carousel1.png");
	vendingImage = loadImage("images/vendingMachine.png");
}

function setup(){
	var cnv = createCanvas(1000,544);
	cnv.position(180, 120);
	backgnd = new Background();
	for(var i = 0; i < backgnd.rows; i++)
		for(var j = 0; j < backgnd.columns; j++){
			if(backgnd.matrix[i][j] === 'w')
				walls.push(new Wall(j * 32, i * 32));
			if(backgnd.matrix[i][j] === 'u')
				user = new User(j * 32, i * 32);
			if(backgnd.matrix[i][j] === 's')
					scanners.push(new Scanner(j * 32, i * 32));
			if(backgnd.matrix[i][j] === 'm')
					machines.push(new Machine(j * 32, i * 32));
			if(backgnd.matrix[i][j] === 'c')
					chairs.push(new Chair(j * 32, i * 32));
			if(backgnd.matrix[i][j] === 'a')
					airplane = new Airplane(j * 32, i * 32);
			if(backgnd.matrix[i][j] === 'st')
        coffee = new CoffeeShop(j * 32, i * 32);
			if(backgnd.matrix[i][j] === 'b')
        board = new Board(j * 32, i * 32);
			if(backgnd.matrix[i][j] === 'o')
        office = new Office(j * 32, i * 32);
			if(backgnd.matrix[i][j] === 'cr')
        carousels.push(new Carousel(j * 32, i * 32));
			if(backgnd.matrix[i][j] === 'v')
				vending.push(new VendingMachine(j * 32, i * 32));
		}
}

function draw(){
	background('#dce7ff');
	for(var i = 0; i < walls.length; i++)
		walls[i].show();
	for(var i = 0; i < scanners.length; i++)
		scanners[i].show();
	for(var i = 0; i < machines.length; i++)
		machines[i].show();
	for(var i = 0; i < chairs.length; i++)
		chairs[i].show();
	for(var i = 0; i < carousels.length; i++)
		carousels[i].show();
	for(var i = 0; i < vending.length; i++)
		vending[i].show();
	for(var i = 0; i < machines.length; i++){
		if(user.colission(machines[i])){
			user.setY(8);
			window.open("identity.html",'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=no,width=1330,height=700,resizable=no');
		}
	}
	coffee.show();
	user.show();
	airplane.show();
	board.show();
	office.show();
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		if(backgnd.matrix[user.y/32+1][user.x/32] != 'w')
			user.move(0);
	}
	if(keyCode === LEFT_ARROW){
		if(backgnd.matrix[user.y/32][user.x/32-1] != 'w')
			user.move(1);
	}
	if(keyCode === RIGHT_ARROW){
		if(backgnd.matrix[user.y/32][user.x/32+1] != 'w')
			user.move(2);
	}
	if(keyCode === UP_ARROW){
		if(backgnd.matrix[user.y/32-1][user.x/32] != 'w')
			user.move(3);
	}
}
