// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
const changeBodyColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
};

const setScore = function (score) {
    document.querySelector('.score').textContent = score;
};

const setNumWidth = function (width) {
    document.querySelector('.number').style.width = width;
};

const setTextContentByClass = function (className, output) {
    document.querySelector(className).textContent = output;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No number!');

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        // document.querySelector('.number').textContent = secretNumber;
        setTextContentByClass('.number', secretNumber);

        changeBodyColor('#60b347');
        setNumWidth('30rem');

        if (score > highscore) {
            highscore = score;
            // document.querySelector('.highscore').textContent = highscore;
            setTextContentByClass('.highscore', highscore);
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
            );
            score--;
            setScore(score);
        } else {
            displayMessage('💥 You lost the game!');
            setScore(0);
            changeBodyColor('#C62909');
        }
    }

    // When guess is too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent =
    //             '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent =
    //             '💥 You lost the game!';
    //         document.querySelector('body').style.backgroundColor = '#C62909';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    setScore(score);
    // document.querySelector('.number').textContent = '?';
    setTextContentByClass('.number', '?');
    document.querySelector('.guess').value = '';

    changeBodyColor('#222');
    setNumWidth('15rem');
});
