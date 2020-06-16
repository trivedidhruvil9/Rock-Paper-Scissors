let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomnumber = Math.floor(Math.random() * 3);
	return choices[randomnumber];
}

function converttoword(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissor";
}

function win(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smalluser = "user".fontsize(3).sub();
	const smallcomp = "comp".fontsize(3).sub();
	result_div.innerHTML = converttoword(userChoice) +(smalluser) + " Beats " + converttoword(computerChoice)+ (smallcomp) + ".You Won!";
}

function lose(userChoice,computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smalluser = "user".fontsize(3).sub();
	const smallcomp = "comp".fontsize(3).sub();
	result_div.innerHTML = converttoword(userChoice) +(smalluser) + " Beats " + converttoword(computerChoice)+ (smallcomp) + ".  You Lost!";
}

function draw(userChoice,computerChoice){
	const smalluser = "user".fontsize(3).sub();
	const smallcomp = "comp".fontsize(3).sub();
	result_div.innerHTML = converttoword(userChoice) +(smalluser) + " Beats " + converttoword(computerChoice)+ (smallcomp) + ".  It's A DRAW!";
}


	
function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "sp":
		case "pr":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "sr":
		case "ps":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "ss":
		case "pp":
			draw(userChoice, computerChoice);
			break;	}
}

function main() {
	rock_div.addEventListener('click',function(){
		game("r");
	})

	paper_div.addEventListener('click',function(){
		game("p")
	})

	scissor_div.addEventListener('click',function(){
		game("s")
	})
}

main();