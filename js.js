const X = "X";
const ZERO = "O";
const FIELD_SIZE = 9;

let step = 0;
let field;

function getRandomInt(max) {
  	return Math.floor(Math.random() * Math.floor(max));
}

(function() { 
	for (var i = 1; i < 10; i++){
		document.getElementById('game').innerHTML += '<div id=' + i + ' class="block"></div>'
	}
	field = document.getElementsByClassName('block');
})();

const createImageAsset = (path) => {
	let image = new Image();
	image.src = path;
	return image;
}

const getXImage = () => {
	return createImageAsset('x.gif');
}

const getOImage = () => {
	return createImageAsset('o.gif');
}

document.getElementById('game').onclick = (event) => {
	if(event.target.className == 'block' &&
		step % 2 == 0) {

		pickOnCell(event.target, X, getXImage());
	}

	if(step < FIELD_SIZE-1){
		botStep(getOImage);
	}
	check_win();
}

function pickOnCell(element, val, image) { 
	element.id = val;
	element.appendChild(image);
	step++;
}

function botStep(botImage) {
	let i = 0;
	do {
		i = getRandomInt(FIELD_SIZE-1);
	} while(field[i].id == X || field[i].id == ZERO);

	pickOnCell(field[i], ZERO, botImage());
}

function check_win(){
	if(step > 4) {
		let winner = undefined;
		if(field[0].id == field[1].id && field[1].id == field[2].id){
			winner = field[1].id;
		} else if(field[3].id == field[4].id && field[4].id == field[5].id){
			winner = field[3].id;
		} else if(field[6].id == field[7].id && field[7].id == field[8].id){
			winner = field[6].id;
		} else if(field[0].id == field[3].id && field[3].id == field[6].id){
			winner = field[0].id;
		} else if(field[1].id == field[4].id && field[4].id == field[7].id){
			winner = field[1].id;
		} else if(field[2].id == field[5].id && field[5].id == field[8].id){
			winner = field[2].id;
		} else if(field[0].id == field[4].id && field[4].id == field[8].id){
			winner = field[4].id;
		} else if(field[2].id == field[4].id && field[4].id == field[6].id){
			winner = field[2].id;
		}

		if(winner) { 
			alert("Player " + winner + " Win!");
		}else if (step == FIELD_SIZE) {
		alert("Not winner!!")
	}
}

	
}

function refreshPage(e) {
	document.location.reload();
}
