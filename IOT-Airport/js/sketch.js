//Objects
var backgnd;
var user;
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
var cameras = [];
var airplanes = [];

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
var cameraImage

function preload() {
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
  cameraImage = loadImage("images/camera.png");
}

function setup() {
  var cnv = createCanvas(1000, 544);
  cnv.position(180, 120);
  backgnd = new Background();
  for (var i = 0; i < backgnd.rows; i++)
    for (var j = 0; j < backgnd.columns; j++) {
      if (backgnd.matrix[i][j] === 'w')
        walls.push(new Wall(j * 32, i * 32));
      if (backgnd.matrix[i][j] === 'u')
        user = new User(j * 32, i * 32);
      if (backgnd.matrix[i][j] === 's')
        scanners.push(new Scanner(j * 32, i * 32));
      if (backgnd.matrix[i][j] === 'm')
        machines.push(new Machine(j * 32, i * 32));
      if (backgnd.matrix[i][j] === 'c')
        chairs.push(new Chair(j * 32, i * 32));
      if (backgnd.matrix[i][j] === 'a')
        airplanes.push(new Airplane(j * 32, i * 32));
      if (backgnd.matrix[i][j] === 'st')
        coffee = new CoffeeShop(j * 32, i * 32);
      if (backgnd.matrix[i][j] === 'b') {
        walls.push(new Wall(j * 32, i * 32));
        board = new Board(j * 32, i * 32);
      }
      if (backgnd.matrix[i][j] === 'o')
        office = new Office(j * 32, i * 32);
      if (backgnd.matrix[i][j] === 'cr')
        carousels.push(new Carousel(j * 32, i * 32));
      if (backgnd.matrix[i][j] === 'v')
        vending.push(new VendingMachine(j * 32, i * 32));
      if (backgnd.matrix[i][j] === 'wca') {
        walls.push(new Wall(j * 32, i * 32));
        cameras.push(new Camera(j * 32, i * 32));
      }
    }
}

function draw() {
  background('#dce7ff');
  for (var i = 0; i < walls.length; i++)
    walls[i].show();
  for (var i = 0; i < scanners.length; i++)
    scanners[i].show();
  for (var i = 0; i < machines.length; i++)
    machines[i].show();
  for (var i = 0; i < chairs.length; i++)
    chairs[i].show();
  for (var i = 0; i < carousels.length; i++)
    carousels[i].show();
  for (var i = 0; i < vending.length; i++)
    vending[i].show();
  for (var i = 0; i < cameras.length; i++)
    cameras[i].show();
		for (var i = 0; i < airplanes.length; i++)
	    airplanes[i].show();

	//EVENTS
	if(user.colission(coffee)){
		user.setX(20);
		window.open("shops.html", 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,width=1330,height=700,resizable=no');
	}

  for (var i = 0; i < machines.length; i++) {
    var machine = machines[i];
    if (user.colission(machine)) {
      if (machine.x == 27*32 && machine.y == 11*32) {
        user.setY(8);
        window.open("identity.html", 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,width=1330,height=700,resizable=no');
      }
			if (machine.x == 21*32 && machine.y == 5*32) {
        user.setY(8);
        window.open("baggage.html", 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,width=1330,height=700,resizable=no');
      }
			if (machine.x == 5*32 && machine.y == 14*32) {
        user.setX(3);
        window.open("access.html", 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,width=1330,height=700,resizable=no');
      }
			if (machine.x == 5*32 && machine.y == 4*32) {
        user.setX(8);
        window.open("migration.html", 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,width=1330,height=700,resizable=no');
      }
    }
  }

	for (var i = 0; i < chairs.length; i++) {
    var chair = chairs[i];
    if (user.colission(chair)) {
      if ((chair.x == 11*32 || chair.x == 12*32 || chair.x == 13*32 || chair.x == 14*32)
						&& (chair.y == 12*32 || chair.y == 13*32 )) {
        user.setX(8);
        window.open("airplaneNotif.html", 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,width=1600,height=700,resizable=no');
      }
    }
  }

	for (var i = 0; i < airplanes.length; i++) {
    var airplane = airplanes[i];
    if (user.colission(airplane)) {
      if (airplane.x == 0 && airplane.y == 11*32) {
        user.setY(8);
        window.open("seats.html", 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,width=1600,height=700,resizable=no');
				//setTimeOut(function(){}, 1000);
      }
			if (airplane.x == 0 && airplane.y == 2*32) {
        user.setX(2);
        window.open("distance.html", 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,width=1600,height=700,resizable=no');
				//setTimeOut(function(){}, 1000);
      }
    }
  }

	if(user.x == 28*32 && user.y == 14*32 ){
		user.setX(27);
		window.open("checkin.html", 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,width=1600,height=700,resizable=no');
	}

	if(user.x == 28*32 && user.y == 1*32 ){
		user.setX(30);
		window.open("security.html", 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,width=1600,height=700,resizable=no');
	}



  coffee.show();
  user.show();
  board.show();
  office.show();
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    if (backgnd.matrix[user.y / 32 + 1][user.x / 32] != 'w')
      user.move(0);
  }
  if (keyCode === LEFT_ARROW) {
    if (backgnd.matrix[user.y / 32][user.x / 32 - 1] != 'w')
      user.move(1);
  }
  if (keyCode === RIGHT_ARROW) {
    if (backgnd.matrix[user.y / 32][user.x / 32 + 1] != 'w')
      user.move(2);
  }
  if (keyCode === UP_ARROW) {
    if (backgnd.matrix[user.y / 32 - 1][user.x / 32] != 'w')
      user.move(3);
  }
}
