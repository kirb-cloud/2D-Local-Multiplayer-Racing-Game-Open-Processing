
function keyPressed() {
	if (win==-1) {
		win=0;
	}
	if (win!= 0 && win!=-1)
		win=-1;
}  

function controls() {
	let ba = bobscar.maxA;
	let ja = janescar.maxA;
	if (keyIsDown(87)) {
		bobscar.force(createVector(0, -ba));
	}
	if (keyIsDown(83)) {
		bobscar.force(createVector(0, ba));
	}
	if (keyIsDown(65)) {
		bobscar.force(createVector(-ba, 0));
	}
	if (keyIsDown(68)) {
		bobscar.force(createVector(ba, 0));
	}

	if (keyIsDown(38)) {
		janescar.force(createVector(0, -ja));
	}
	if (keyIsDown(40)) {
		janescar.force(createVector(0, ja));
	}
	if (keyIsDown(37)) {
		janescar.force(createVector(-ja, 0));
	}
	if (keyIsDown(39)) {
		janescar.force(createVector(ja, 0));
	}
}