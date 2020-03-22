let DATABASE = [];
let PLAYERS = [];
let toggle = 0;

function handleGameStart(){
	const gameStart = document.getElementById('start');
	const gamePlayers = document.getElementById('players');
	const gameOver = document.getElementById('gameOver');
	const gameOld = document.getElementById('old');


	gameStart.style.display = 'none';
	gameOver.style.display = 'none';
	gameOld.style.display = 'none';
	gamePlayers.style.display = 'flex';
}

function handleGamePlusUltra(){
	const playerOne = document.getElementById('playerOne').value;
	const playerTwo = document.getElementById('playerTwo').value;

	if(!validPlayer(playerOne, playerTwo)) return false;

	const gamePlusUltra = document.getElementById('plusUltra');
	const gamePlayers = document.getElementById('players');

	gamePlusUltra.style.display = 'flex';
	gamePlayers.style.display = 'none';

}

function handleDataPlayers(numBoard){
	const playerOne = document.getElementById('playerOne').value;
	const playerTwo = document.getElementById('playerTwo').value;

 	if(!validPlayer(playerOne, playerTwo)) return false;


	PLAYERS.push({player: playerOne, icone: 'X'});
	PLAYERS.push({player: playerTwo, icone: 'O'});

	const gamePlusUltra = document.getElementById('plusUltra');
	gamePlusUltra.style.display = 'none';

   	handleGameBoard(numBoard);

}

function handleGameBoard(numBoard){
	const gameBoard = document.getElementById('gameBoard');
	const gamePlayers = document.getElementById('players');

	gameBoard.setAttribute('class', 'gameBoard');
	gameBoard.style.display = 'grid';
	gamePlayers.style.display = 'none';
	
	const generateGameBoard = (!Number.isInteger(numBoard) || numBoard === 0) ? 1 : numBoard;


	for (let i = 0 ; i < 9 * generateGameBoard; i++) {
		const cell = document.createElement("LI");
		gameBoard.appendChild(cell);

		const cellUpdate = document.getElementsByTagName('LI')[i];
		const onClickAttr = document.createAttribute('onClick');

		onClickAttr.value = `handleMove(${i},${generateGameBoard})`;
		cellUpdate.setAttributeNode(onClickAttr);

		const  dataMove = { key: i, player: ''};

		DATABASE.push(dataMove);
	}

	if(numBoard > 1){
		const particles = document.getElementById('particles');
		const mainHeight = document.getElementById('main').clientHeight;

		window.innerHeight = mainHeight;
		particles.style.height = mainHeight+"px";

	}

	let playerStart = (Math.floor(Math.random() * 100)) % 2;

	if( playerStart === 0 ){
		toggle = 0;
		handlePopup(`<p> <strong> ${PLAYERS[0].player + " "} </strong> inicie a partida (: </p> `, 'custom', '#FF4500');
	}else{
		toggle = 1;
		handlePopup(`<p> <strong> ${PLAYERS[1].player + " "} </strong> inicie a partida (: </p>`, 'custom', '#4B0082');
	}

}

function handleMove(index, numBoard){

	const cells = document.querySelectorAll('#gameBoard li');
	
	const cell =  DATABASE[index];

	if(cell.player !== "") return handlePopup('Jogada já foi realizada.', 'error');

	cell.player = toggle;

	let straight = [
		[-3, 3, { position1: false, position2: false, column: 0}], 
		[ 3, 6, { position1: false, position2: false, column: 0}], 
		[-3,-6, { position1: false, position2: false, column: 0}],

		[ 1, 2, { position1: false, position2: false, column: 1}], 
		[ 4, 8, { position1: false, position2: false, column: 1}],
		[-2,-4, { position1: false, position2: false, column: 1}],

		[-1, 1, { position1: false, position2: false, column: 2}], 
		[-2, 2, { position1: false, position2: false, column: 2}], 
		[-4, 4, { position1: false, position2: false, column: 2}],

		[-1,-2, { position1: false, position2: false, column: 3}],
		[-4,-8, { position1: false, position2: false, column: 3}], 
		[ 2, 4, { position1: false, position2: false, column: 3}]
	];

	const movesNegative = [-1, -2, -3, -4, -6, -8];
	const movesPositive = [1, 2, 3, 4, 6, 8];
	const possibilityNegative = movesNegative.filter( move => { return ( !((index+(move)) < 0))});
	const possibilityPositive = movesPositive.filter( move => { return ( !((index+move) > (9*numBoard)-1))});

	const validMoves = possibilityNegative.concat(possibilityPositive);

	for(let i = 0; i < validMoves.length; i++){

		for(let s = 0; s < straight.length; s++){

			if(validMoves[i] === straight[s][0]){
				straight[s][2].position1 = true;
			}

			if(validMoves[i] === straight[s][1]){
				straight[s][2].position2 = true;
			}

		}
	}

	let gameOver = [];
	let column = 0;

	if(	index%3    === 0){ column = 1;}
	if((index-1)%3 === 0){ column = 2;}
	if((index-2)%3 === 0){ column = 3;}

	const validStraight = straight.filter( referee => {
	 	return (
 			referee[2].position1 === true && 
 			referee[2].position2 === true && 
 			(
 				referee[2].column === column || 
 				referee[2].column === 0 
 			) 
	 	);
	});

	gameOver = gameOver.concat(validStraight);

	for(let i = 0; i < gameOver.length; i++){

		if(
			DATABASE[cell.key+(gameOver[i][0])].player === cell.player &&
			DATABASE[cell.key+(gameOver[i][1])].player === cell.player &&
			DATABASE[cell.key].player === cell.player
		){

			for(let w = 0; w < 3; w++){
				if( w < 2){
					let cellWinner = DATABASE[cell.key+(gameOver[i][w])];
					cells[cellWinner.key].setAttribute('class', 'winner');
				}else{
					let icone = document.createTextNode(PLAYERS[cell.player].icone);
					cells[cell.key].setAttribute('class', 'winner');
					cells[cell.key].appendChild(icone);
				}
			}

			handlePopup(` <p><strong> ${PLAYERS[cell.player].player} </strong> ganhou a partida.</p>`, 'success');

			setTimeout(() => {handleGameOver(PLAYERS[cell.player].player)}, 2000); 
			return setTimeout(() => {cleanGame()}, 2000);
			
		}
	}

	if(cell.player === 0){
		let icone = document.createTextNode(PLAYERS[cell.player].icone);

		cells[cell.key].appendChild(icone);
		cells[cell.key].setAttribute('class', 'moveA');

	}else{
		let icone = document.createTextNode(PLAYERS[cell.player].icone);

		cells[cell.key].appendChild(icone);
		cells[cell.key].setAttribute('class', 'moveB');
	}

	const old = DATABASE.filter( playerNull => {
		return ( playerNull.player === "");
	});

	if(old.length === 0) {
		handlePopup('DEU VELHA!', 'success');

		setTimeout(() => {handleGameOld()}, 2000); 
		return setTimeout(() => {cleanGame()}, 2000);

	}

	let color = "";

	if(toggle === 0){ toggle = 1; color = "#4B0082"} else { toggle = 0; color = "#FF4500"}

	handlePopup(`<p><strong> ${PLAYERS[toggle].player + " "} </strong> realize sua jogada (:</p>`, 'custom', color);

}

function handleGameOver(winner){
	const gameBoard = document.getElementById('gameBoard');
	const gamePlayerWinner = document.getElementById('playerWinner');
	const gameOver = document.getElementById('gameOver');

	gameBoard.style.display = 'none';
	gamePlayerWinner.innerText = winner;
	gameOver.style.display = 'flex';
}

function handleGameOld(){
	const womenOld = ['womenOld1.jpg', 'womenOld2.jpg', 'womenOld3.jpg', 'womenOld4.jpg', 'womenOld5.jpg',]
	const image = Math.floor(Math.random() * 4);


	const gameBoard = document.getElementById('gameBoard');
	const gameOld = document.getElementById('old');
	const gameWomenOld = document.getElementById('womenOld');

	gameWomenOld.innerHTML = `<img src='assets/${womenOld[image]}' />`

	gameBoard.style.display = 'none';
	gameOld.style.display = 'flex';
}

function cleanGame(){
	const removeCell = document.querySelectorAll('#gameBoard li');


	for(let r = 0; r < removeCell.length; r++){
		removeCell[r].remove();
	}
	
	DATABASE = [];
	PLAYERS = [];
	straight = [];
	gameOver = [];
	column = 0;
	toggle = 0;
}


function handlePopup(message, situation, color){
	const popup = document.getElementById('popup');

	popup.innerHTML = message;
	popup.setAttribute('class', 'slideIn');
	window.scrollTo(0, 0);

	switch(situation){
		case 'error':
			popup.style.background = "#FF6347";
			break;
		case 'success':
			popup.style.background = "#00FF7F";
			break;
		case 'custom':
			popup.style.background = color;
			break;
		default:
			popup.style.background = "#00FF7F";
	}

	setTimeout( () => { 
		popup.setAttribute('class', 'slideOut');
	}, 3000);

	return false;
}


function validPlayer(playerOne, playerTwo){

	if( playerOne === "" || playerTwo === "")
		return handlePopup('Por favor! Preencha todos os campos. :(', 'error');

	if( playerOne === playerTwo)
		return handlePopup('Os nomes dos jogadores não podem ser iguais. :(', 'error');

	if( playerOne.length > 20 || playerTwo.length > 20)
		return handlePopup('O nome do jogador não pode ter mais de 20 caracteres :(', 'error');

	return true;
}

function signOut() {
	const gameStart = document.getElementById('start');
	const gameOver = document.getElementById('gameOver');
	const gameOld = document.getElementById('old');
	const playerOne = document.getElementById('playerOne');
	const playerTwo = document.getElementById('playerTwo');

	gameOver.style.display = 'none';
	gameOld.style.display = 'none';
	gameStart.style.display = 'flex';
	playerOne.value = "";
	playerTwo.value = "";

	cleanGame();
}