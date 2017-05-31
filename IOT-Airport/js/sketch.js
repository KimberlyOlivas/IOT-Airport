//Objects
var backgnd;
var user;
var airplane;

//Arrays
var walls = [];
var scanners = [];
var machines = [];
var chairs = [];

//Images
var userImage;
var wallImage;
var scannerImage;
var machineImage;
var chairImage;
var airplaneImage;

function preload(){
	userImage = loadImage("images/user.png");
	wallImage = loadImage("images/wall.jpg");
	scannerImage = loadImage("images/scanner.png");
	machineImage = loadImage("images/machine.png");
	chairImage = loadImage("images/chair.png");
	airplaneImage = loadImage("images/airplane.png");
}

function setup(){
	var cnv = createCanvas(864,512);
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
	user.show();
	airplane.show();
	for(var i = 0; i < machines.length; i++){
		if(user.colission(machines[i])){
			user.setY(8);
			$("#modal").load("first.html");
		}
	}
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
