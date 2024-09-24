function game(playerMove) {

	let computerMove = computerChoice();
	let result ='';

	if (computerMove === playerMove) {
		result = "It's a Draw"
	} else if ((computerMove === 'rock' && playerMove === 'scissor') || (computerMove === 'paper' && playerMove === 'rock' ) || (computerMove === 'scissor' && playerMove === 'paper')) {
		result = 'You Lose'
	} else {
		result = 'You won'
	}

	alert(`you chose ${playerMove}, computer chose ${computerMove}. ${result}`)

	function computerChoice () {
		let num = Math.random();
		if (num > 0 && num < 1/3) {
			return 'rock';
		} else if (num >= 1/3 && num <2/3) {
			return 'scissor';
		} else if (num >=2/3 && num < 1) {
			return 'paper';
		}
	}
}