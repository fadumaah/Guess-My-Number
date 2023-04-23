'use strict';


const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber)
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number((document.querySelector('.guess').value))
    console.log((guess));

    if (!guess){
        document.querySelector('.message').textContent = '⛔️ No number, please enter a guess!';
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number';
    } else if (guess > secretNumber){
        if (score > 0) {
        document.querySelector('.message').textContent = '📈 Too High';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lose';
        }
    } else if (guess < secretNumber){
        if (score > 0) {
            document.querySelector('.message').textContent = '📉 Too Low';
            score--;
        } else {
            document.querySelector('.message').textContent = '💥 You lose';
        }
    }
});



