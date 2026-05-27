const score = JSON.parse(localStorage.getItem('score')) || { wins:0, losses:0, draws:0 };

function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'rock'){
        if (computerMove === 'scissors'){  
            result = 'You Win';
        } else if (computerMove ==='paper'){
            result = 'You Lose';
        } else if (computerMove ==='rock'){
            result = 'Draw';
        }
    } else if (playerMove === 'scissors'){
        if (computerMove === 'rock'){
            result = 'You Lose';
        } else if (computerMove ==='paper'){
            result = 'You Win';
        } else if (computerMove ==='scissors'){
            result = 'Draw';
        }
    } else if (playerMove ==='paper'){
        if (computerMove === 'rock'){
            result = 'You Win';
        } else if (computerMove ==='paper'){
            result = 'Draw';
        } else if (computerMove ==='scissors'){
            result = 'You Lose';
        } 
    } 
    
    if(result === 'You Win'){
        score.wins = score.wins + 1;
    } else if (result === 'You Lose'){
        score.losses += 1;
    } else if (result === 'Draw'){
        score.draws += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    updateScore();

    document.querySelector('.winOrLose')
        .innerHTML = result;

    document.querySelector('.moves')
        .innerHTML = `You<img src='image/${playerMove}-emoji.png' class='move-icon'><img src='image/${computerMove}-emoji.png' class='move-icon'>Computer`;                

    return alert(`You pick ${playerMove} and the computer pick ${computerMove}, ${result}! 
Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`);
};

function updateScore(){
    document.querySelector('.scoreBoard')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
};

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >=0 && randomNumber<1/3){
        computerMove = 'rock';
    } else if (randomNumber >=1/3 && randomNumber<2/3){
        computerMove = 'paper';
    } else if (randomNumber >=2/3 && randomNumber<1){
        computerMove = 'scissors';
    }  return computerMove;   
};