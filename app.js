// Functions
let score =  JSON.parse(localStorage.getItem
    ('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    };


   updateScoreEl();
// if (!score){
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     }
// }

// console.table(JSON.parse(localStorage.getItem('score')));

function playGame(playerMove){
    const computerMove = pickComputerMove();
    
    let result = '';
    
    if (playerMove === 'scissors'){
        if(computerMove === 'rock') {
            result = 'You lose.'
        } else if(computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.'
        }
    } else if (playerMove === 'paper'){
        if (computerMove === 'rock'){
            result = 'You win';
        } else if (computerMove === 'paper'){
            result = 'Tie';
        } else if (computerMove === 'scissors'){
            result = 'You lose';
        }
    } else if (playerMove === 'rock'){
        if (computerMove === 'rock'){
            result = 'Tie';
        } else if (computerMove === 'paper'){
            result = 'You lose';
        } else if (computerMove === 'scissors'){
            result = 'You win';
        }
    }

    if (result === 'You win.'){
        score.wins += 1;
    } else if (result === 'You lose.'){
        score.losses += 1;
    } else if (result === 'Tie.'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreEl();

    document.querySelector('.display-message').
    innerHTML = result;

    document.querySelector('.choice').
    innerHTML = `You
    <img src="images/${playerMove}-emoji.png" alt="" class="move-icon" >
    <img src="images/${computerMove}-emoji.png" alt="" class="move-icon" >
    Computer`;


//     alert(`You picked ${playerMove}. 
//     Computer picked ${computerMove}. 
//     ${result}.
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function updateScoreEl(){
    document.querySelector('.updates')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, 
    Ties: ${score.ties}`
}

function pickComputerMove(){
    const randomNumber = Math.random();
    
    let  computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
    }

    return computerMove;
}

function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.removeItem('score');
    updateScoreEl();
}