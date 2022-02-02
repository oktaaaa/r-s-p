const result = document.querySelector('.result')
const buttons = document.querySelectorAll('button')
let compScore = 0;
let playerScore = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    
    const playerSelection = button.id;
    const compSelection = compPlay();
    playRound(playerSelection,compSelection);
  });
});

function compPlay(){
  const choices = ['Rock', 'Scissors', 'Paper'];
  const compChoices = choices[Math.floor(Math.random() * 3)];
  return compChoices
}

const playRound = function(playerSelection, compSelection){
    const theMatch = `${playerSelection} vs ${compSelection}`;
  
    if(playerSelection === compSelection){
      result.textContent = 'It is a tie'
      return;
    } 
    if ( playerSelection === 'Rock'){
        if(compSelection === 'Scissors'){
          playerScore++
          result.textContent = `${theMatch}. You Win. The Score is ${playerScore}`
        } else {
            result.textContent =`${theMatch}. You lose. The Score is ${playerScore}`
        }  
        
    } else if (playerSelection === 'Scissors'){
        if(compSelection === 'Paper'){
          playerScore++
          result.textContent =`${theMatch}. You Win. The Score is ${playerScore}`
        } else {
            result.textContent = `${theMatch}. You lose. The Score is ${playerScore}`
        }
        
    } else if(playerSelection === 'Paper'){
        if(compSelection === 'Rock'){
            playerScore++  
            result.textContent =`${theMatch}. You Win. The Score is ${playerScore}`
        } else {
            result.textContent = `${theMatch}. You lose. The Score is ${playerScore}`
        }
    }
  win_condition ()
}


function win_condition () {
  if(playerScore === 5) {
    result.innerHTML = 'Player Wins!!!';
    playerScore = 0;
  }
  if(compScore === 5) {
    result.innerHTML = 'Computer Wins!!!';
    compScore = 0;
  }
  
  
}