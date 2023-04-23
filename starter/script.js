'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber)
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function (){
    const guess = Number((document.querySelector('.guess').value))
    console.log((guess));

    // when there is no input
    if (!guess){
        document.querySelector('.message').textContent = '⛔️ No number, please enter a guess!';
    // when guess is correct
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score >= highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }        
    // when guess is incorrect
    } else if (guess != secretNumber){
        document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High' : '📉 Too Low';;
        score--;
        document.querySelector('.score').textContent = score; }
});


document.querySelector('.again').addEventListener('click',function (){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
   

})