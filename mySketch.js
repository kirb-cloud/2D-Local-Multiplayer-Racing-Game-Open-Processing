var bobscar, janescar;

var win; //keeps track of the winner

var t = 100; //traffic number of cars on road. 
var p = 300; //100 plants
var m = 100; //100 mountains
var b = 50; //70 buildings 

var world = [];
var cars = [];
var plants = []; // a list to manage plant collisions
var mountains = [];
var buildings = [];
var snow = [];

var rdp, rds; //road position and size vectors
var CW, RACE, MILE; // carWidth, race length, length of a mile

var av; //average velocity of the racing cars

var rcm; //color for mountains
var rcb; //color for buildings

function setup() {
	world = [];
	cars = [];
	plants = [];
	mountains = [];
	buildings = []; 
	snow = [];
	win = -1; //no winner yet
	print(map(32, 8, 100, 200, 400)); //will print the right answer to console
	CW = 100; //cardWidth
	MILE = 352 * CW; //352 car lengths = a mile
	RACE = MILE; //a 1 mile race
	rdp = createVector(0, windowHeight / 3 + 2 * windowHeight / 9); // the road position
	rds = createVector(RACE, 2 * windowHeight / 9); //road size vector
	createCanvas(windowWidth, windowHeight);

	bobscar = new Car(true, 300, 4 * windowHeight / 7, CW, CW, 0, 0, color('rgb(197,105,172)'), color('rgb(132,125,224)'));
	janescar = new Car(true, 300, 5 * windowHeight / 7, CW, CW, 0, 0, color('rgb(140,117,155)'), color('rgb(104,105,140)'));

	//add snow to the scenery
	for(var i = 0; i < 200; i++) {
    snow[i] = new Snow();
}
	
	for (i = 0; i < p; i++) {
		let x1 = random(0, RACE);
		let x2 = random(0, RACE);
		
		let y1 = random(windowHeight / 3 + CW / 9, windowHeight / 3 + 2 * windowHeight / 9 - CW / 9);
		let y2 = random(windowHeight / 3 + 4 * windowHeight / 9 + CW / 9, windowHeight - CW / 9);
		//for plant
		let cw1 = random([-60, -50, 60, 100]);
		let cw2 = random([-60, -50, 60, 100]);
		let ch1 = random([70, 80, 90]);
		let ch2 = random([70, 80, 90]);
		//for mountain
		let mw1 = random([-100, -90, 100, 90]);
		let mw2 = random ([-100, -90, 100, 90]);
		let mh1 = random ([70, 80, 90]);
		let mh2 = random ([70, 80, 90]);
		//for building
		let bw1 = random([-90, -80, 80, 100]);
		let bw2 = random ([-60, -50, 80, 100]);
		let bh1 = random ([70, 80, 90]); 
		let bh2 = random ([70, 80, 90]); 
		
		let rc = color(random(20, 40), random(70, 150), random(40, 70));
		let rcm =color(random(50,20), random(20,40), random(80,60));
		let rcb = color(random(80,60), random(10,20), random(150,60));
		let temp1 = new Plant(x1, y1, cw1, ch1, 0, 0, rc, color('rgb(66,15,8)'));
		let temp2 = new Plant(x2, y2, cw2, ch2, 0, 0, rc, color('rgb(52,5,14)'));
		let temp3 = new Mountain (x1, windowHeight / 3, mw1, mh1, 0, 0, rcm, color('rgb(107,97,95)'));
		let temp4 = new Mountain (x2, windowHeight / 3, mw2, mh2, 0, 0, rcm, color('rgb(87,77,79)'));
		let temp5 = new Building (x1, windowHeight/2.5, bw1, bh1, 0, 0, rcb, color('rgb(108,91,197)'));
		let temp6 = new Building (x2, windowHeight/3*3, bw2, bh2, 0, 0, rcb, color('rgb(181,129,187)'));
		//store all the plants in the two lists: plants and world
		plants.push(temp1);
		plants.push(temp2);
		world.push(temp1);
		world.push(temp2);
		mountains.push(temp3);
		mountains.push(temp4);
		world.push(temp3);
		world.push(temp4);
		buildings.push(temp5);
		buildings.push(temp6);
		world.push(temp5);
		world.push(temp6);
	}
	//add traffic
	for (i = 0; i < t; i++) {
		let y = random(windowHeight / 3 + 2 * windowHeight / 9, windowHeight / 3 + 4 * windowHeight / 9);
		let x = random(MILE / 8, MILE);
		let v = random([10, 12, 15, 20]); //velocity
		let c1 = color(random(0, 255), random(0, 255), random(0, 255));
		let c2 = color(random(0, 255), random(0, 255), random(0, 255));
		let temp = new Car(false, x, y, CW, CW, v, 0, c1, c2);
		world.push(temp); //car pushed into world list
		cars.push(temp); // random car pushed into second list

	}

	world.push(bobscar);
	world.push(janescar);
	cars.push(bobscar);
	cars.push(janescar);

}

function draw() {
	//call the keyboard control function
	controls();
	runWorld();
	
	for(var i = 0; i < 200; i++) {
  snow[i].show();
  snow[i].update();
}
	textSize(20);
	fill('rgb(97,86,221)');
	textFont('Garamond');
	text("PLAYER 1", bobscar.p.x, 100);
	text("PLAYER 2", janescar.p.x, 150);
}

function runWorld() {
	//start screen.
	if (win == -1) {
		// you start screen biz goes here!
		textAlign(CENTER);
		background('rgb(170,158,216)');
	fill('rgb(62,53,42)');
	noStroke();
	rect(0,windowHeight/1.16, windowWidth,windowHeight);
	
	
	mountain(1190,700,400,400,'rgb(63,69,83)',1);
	mountain2(210,700,400,400,'rgb(63,69,83)',1); 
	
	//trees behind mountains 
	tree3(1190,710, 200,550, 'rgb(74,86,46)', 'rgb(145,101,64)');
	tree3(210,710, 200,550, 'rgb(78,89,51)', 'rgb(145,101,64)');
	
	mountain3(400,700,400,700,'rgb(104,109,122)',1);
	mountain4(1000,700,400,700,'rgb(104,109,122)',1);
	mountain5(50,700,400,700,'rgb(104,109,122)',1); 
	mountain6(1370,700,400,700,'rgb(104,109,122)',1);
	
	tree(300,740, 200,600, 'rgb(217,130,105)');
	tree2(1100,740, 200,600, 'rgb(217,130,105)');
	tree3(100,710, 200,600, 'rgb(66,89,10)', 'rgb(145,101,64)');
	tree3(1300,710, 200,600, 'rgb(66,89,10)', 'rgb(145,101,64)');
	tree3(500,715, 200,500, 'rgb(61,69,39)', 'rgb(145,101,64)');
	tree3(880,715, 200,500, 'rgb(61,69,39)', 'rgb(145,101,64)');
	
	building1(1250,770, 100,200, color('rgb(89,95,120)'), color('rgb(58,59,90)'), 1);
	building1(1150,770, 100,200, color('rgb(131,114,147)'), color('rgb(81,68,91)'), 0);
	building1(1350,770, 100,200, color('rgb(131,114,147)'), color('rgb(81,68,91)'), 0);
	
	building1(100,770, 100,200, color('rgb(89,95,120)'), color('rgb(58,59,90)'), 0);
	building1(0,770, 100,200, color('rgb(131,114,147)'), color('rgb(81,68,91)'), 1);
	building1(200,770, 100,200, color('rgb(131,114,147)'), color('rgb(81,68,91)'), 1);
	
	car(500,730,100,100,color('rgb(166,191,198)'),color('rgb(166,127,40)'));
	car(490,740,-75,75,color('rgb(223,113,79)'),color('rgb(209,203,213)'));
	car(800,730,100,100,color('rgb(206,185,110)'),color('rgb(102,98,89)'));
	car(950,740,-75,75,color('rgb(87,100,51)'),color('rgb(162,107,67)'));
	
	moon(710,200,'rgb(232,233,171)');
	
	person(90+600, 720, 30, 60, color('rgb(220,212,44)'), 99);
	person(150+550, 720, 30, 60, color('rgb(220,212,44)'), 0);
	person(200+520, 720, 30, 60, color('rgb(220,212,44)'), 1);
	person(250+490, 720, 30, 60, color('rgb(220,212,44)'), 2);
	person(300+460, 720, 30, 60, color('rgb(220,212,44)'), 3);
	
		fill('rgb(20,0,255)');
		textSize(40);
		text("PRESS ENTER TO START", windowWidth / 2, windowHeight / 2);
	} else if (win == 0) {

		let avp = (bobscar.p.x + janescar.p.x) / 2; //average position of bob and jane
		let dbbj = abs(bobscar.p.x - janescar.p.x); //the positive dist between bob&jane
		//use translate to move the primary camera
		if (dbbj + 4 * CW > windowWidth) {
			scale((windowWidth) / (dbbj + 4 * CW));
		}

		translate(-(avp - dbbj / 2 - 3 * CW), 0);


		background('rgb(170,158,216)');
		fill('rgb(38,35,34)');
		//tan landscape
		rect(0, windowHeight / 3, RACE, RACE);
		//gray road
		fill('rgb(94,90,90)');
		rect(rdp.x, rdp.y, rds.x, rds.y);
		//road stripes
		stroke('rgb(255,255,255)');
		strokeWeight(CW / 12);
		let yVal = rdp.y + rds.y / 2; //the center of the road
		for (i = 0; i * CW < RACE; i++) {
			line(0 + i * CW * 1.5, yVal, 3 * CW / 4 + i * CW * 1.5, yVal);

		}

		noStroke();
		//sort the world list by y position value.
		//get average x-velocity 
		av = (bobscar.v.x + janescar.v.x) / 2;
		//sort world objects according to their y-position value
		world.sort((a, b) => a.p.y - b.p.y);

		//check for a win
		if (bobscar.p.x > RACE || janescar.p.x > RACE) {
			if (bobscar.p.x > janescar.p.x) {
				win = "GG BOB!";
			} else {
				win = "GG JANE!"
			}
		}

		let rf = 0.95;
		let gf = 0.9;
		//Road collide detection
		if (collideRectRectVector(bobscar.hbp, bobscar.hbs, rdp, rds)) {
			bobscar.friction = rf; //road travel
		} else {
			bobscar.friction = gf; //gravel travel 
		}

		if (collideRectRectVector(janescar.hbp, janescar.hbs, rdp, rds)) {
			janescar.friction = rf; //road travel
		} else {
			janescar.friction = gf; //gravel travel 
		}

		//collide cars and cactii
		for (i = 0; i < cars.length; i++) {
			for (j = 0; j < plants.length; j++) {
				if (collideRectRectVector(cars[i].hbp, cars[i].hbs,
						plants[j].hbp, plants[j].hbs)) {

					let temp1 = p5.Vector.sub(cars[i].v, plants[j].v); //velocity dif
					let temp2 = createVector(((cars[i].p.x + cars[i].s.x / 2) - (plants[j].p.x - plants[j].s.x / 2)) / 2,
						((cars[i].p.y + cars[i].s.y / 6) - (plants[j].p.y - plants[j].s.y / 6)) / 2);
					//Cars colliding


					cars[i].v.sub(p5.Vector.mult(temp1, 0.2)); //we sub from bob
					plants[j].v.add(p5.Vector.mult(temp1, 1.8)); //we add to jane
					//bump effect
					temp2.mult(0.25);
					cars[i].p.add(temp2);
					plants[j].p.sub(temp2);

				}

			}
		}

		for (i = 0; i < cars.length; i++) {
			for (j = i + 1; j < cars.length; j++) {

				if (collideRectRectVector(cars[i].hbp, cars[i].hbs, cars[j].hbp, cars[j].hbs)) {
					let temp1 = p5.Vector.sub(cars[i].v, cars[j].v); //velocity dif
					let temp2 = createVector(((cars[i].p.x + cars[i].s.x / 2) - (cars[j].p.x - cars[j].s.x / 2)) / 2,
						((cars[i].p.y + cars[i].s.y / 6) - (cars[j].p.y - cars[j].s.y / 6)) / 2);
					//Cars colliding
					cars[i].v.sub(temp1); //we sub from bob
					cars[j].v.add(temp1); //we add to jane
					//bump effect
					temp2.mult(0.25);
					cars[i].p.add(temp2);
					cars[j].p.sub(temp2);
				}
			}
		}
		//go through the world list and move and show its contents
		for (i = 0; i < world.length; i++) {
			world[i].move();
			world[i].show();
		}
	} else {
		//you end screen biz goes here
		background('rgb(138,136,143)');
		
		mountain(1190,700,400,400,'rgb(63,69,83)',1);
	mountain2(210,700,400,400,'rgb(63,69,83)',1); 
	
	//trees behind mountains 
	tree3(1190,710, 200,550, 'rgb(42,44,39)', 'rgb(90,85,80)');
	tree3(210,710, 200,550, 'rgb(42,44,39)', 'rgb(96,89,83)');
	
	mountain3(400,700,400,700,'rgb(104,109,122)',1);
	mountain4(1000,700,400,700,'rgb(104,109,122)',1);
	mountain5(50,700,400,700,'rgb(104,109,122)',1); 
	mountain6(1370,700,400,700,'rgb(104,109,122)',1);
	
	tree(300,740, 200,600, 'rgb(160,150,147)');
	tree2(1100,740, 200,600, 'rgb(160,150,147)');
	tree3(100,710, 200,600, 'rgb(216,201,187)', 'rgb(129,114,101)');
	tree3(1300,710, 200,600, 'rgb(216,201,187)', 'rgb(128,108,92)');
	tree3(500,715, 200,500, 'rgb(216,201,187)', 'rgb(128,108,92)');
	tree3(880,715, 200,500, 'rgb(216,201,187)', 'rgb(128,108,92)');
	
	building1(1250,770, 100,200, color('rgb(89,95,120)'), color('rgb(58,59,90)'), 1);
	building1(1150,770, 100,200, color('rgb(131,114,147)'), color('rgb(81,68,91)'), 0);
	building1(1350,770, 100,200, color('rgb(131,114,147)'), color('rgb(81,68,91)'), 0);
	
	building1(100,770, 100,200, color('rgb(89,95,120)'), color('rgb(58,59,90)'), 0);
	building1(0,770, 100,200, color('rgb(131,114,147)'), color('rgb(81,68,91)'), 1);
	building1(200,770, 100,200, color('rgb(131,114,147)'), color('rgb(81,68,91)'), 1);
	
	car(500,730,100,100,color('rgb(23,25,26)'),color('rgb(225,220,207)'));
	car(490,740,-75,75,color('rgb(26,24,23)'),color('rgb(225,220,207)'));
	car(800,730,100,100,color('rgb(19,19,17)'),color('rgb(225,220,207)'));
	car(950,740,-75,75,color('rgb(23,23,22)'),color('rgb(225,220,207)'));
	
	moon(710,200,'rgb(210,210,192)');
	
	person(90+600, 720, 30, 60, color('rgb(10,9,8)'), 99);
	person(150+550, 720, 30, 60, color('rgb(10,9,8)'), 0);
	person(200+520, 720, 30, 60, color('rgb(10,9,8)'), 1);
	person(250+490, 720, 30, 60, color('rgb(10,9,8)'), 2);
	person(300+460, 720, 30, 60, color('rgb(10,9,8)'), 3);
		
		fill('rgb(41,41,46)');
		
		textSize(50);
		textAlign(CENTER);
		text(win, windowWidth / 2, windowHeight / 2);
		
		
	}
}