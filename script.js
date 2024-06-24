const prompt = require('prompt-sync')();

const name = prompt('What is your name? ');
console.log(`Hello, ${name}!`);

const ready = prompt('Are you ready to play a game? (yes/no) ');
if (ready === 'yes') {
    console.log('Great! Let\'s play!');
} else {
    console.log('Okay, see you next time!');
    process.exit(0);
}

console.log("There will be 5 questions. Good luck!");

var score = 0;

// QUESTION 1
console.log("----------------------------");
console.log("Question 1:");
console.log("What is the capital of France?");
const answer1 = prompt('Enter your answer: ');
if (answer1 === 'Paris') {
    console.log('Correct!');
    score += 1;
    console.log('Your score is now:', score);
} else if (answer1 === 'paris') {
    console.log('Correct!');
    score += 1;
    console.log('Your score is now:', score);
} else {
    console.log('Incorrect. The answer is Paris.');
    score += 0;
    console.log('Your score is now:', score);
}

// QUESTION 2
console.log("----------------------------");
console.log("Question 2:");
console.log("What is the capital of Germany?");
const answer2 = prompt('Enter your answer: ');
if (answer2 === 'Berlin') {
    console.log('Correct!');
    score += 1;
    console.log('Your score is now:', score);
} else if (answer2 === 'berlin') {
    console.log('Correct!');
    score += 1;
    console.log('Your score is now:', score);
} else {
    console.log('Incorrect. The answer is Berlin.');
    score += 0;
    console.log('Your score is now:', score);
}

// QUESTION 3
console.log("----------------------------");
console.log("Question 3:");
console.log("What is the capital of Italy?");
const answer3 = prompt('Enter your answer: ');
if (answer3 === 'Rome') {
    console.log('Correct!');
    score += 1;
    console.log('Your score is now:', score);
} else if (answer3 === 'rome') {
    console.log('Correct!');
    score += 1;
    console.log('Your score is now:', score);
} else {
    console.log('Incorrect. The answer is Rome.');
    score += 0;
    console.log('Your score is now:', score);
}

// QUESTION 4
console.log("----------------------------");
console.log("Question 4:");
console.log("What is the capital of Spain?");
const answer4 = prompt('Enter your answer: ');
if (answer4 === 'Madrid') {
    console.log('Correct!');
    score += 1;
    console.log('Your score is now:', score);
} else if (answer4 === 'madrid') {
    console.log('Correct!');
    score += 1;
    console.log('Your score is now:', score);
} else {
    console.log('Incorrect. The answer is Madrid.');
    score += 0;
    console.log('Your score is now:', score);
}

// QUESTION 5
console.log("----------------------------");
console.log("Question 5:");
console.log("What is the capital of Portugal?");
const answer5 = prompt('Enter your answer: ');
if (answer5 === 'Lisbon') {
    console.log('Correct!');
    score += 1;
    console.log('Your score is now:', score);
} else if (answer5 === 'lisbon') {
    console.log('Correct!');
    score += 1;
    console.log('Your score is now:', score);
} else {
    console.log('Incorrect. The answer is Lisbon.');
    score += 0;
    console.log('Your score is now:', score);
}

// TOTAL SCORE
console.log("----------------------------");
console.log("Your total score is:", score);
if (score >= 3) {
    console.log("Congratulations! You're a true fan of the capital cities of Europe.");
} else {
    console.log("Sorry, you don't have enough points to win. Maybe next time.");
    console.log("Want to try again?");
    if (prompt('Enter yes or no: ') === 'yes') {
        score = 0;
        console.log("Let's play again!");
        console.log("----------------------------");
        // QUESTION 1
        console.log("----------------------------");
        console.log("Question 1:");
        console.log("What is the capital of France?");
        const answer1 = prompt('Enter your answer: ');
        if (answer1 === 'Paris') {
            console.log('Correct!');
            score += 1;
            console.log('Your score is now:', score);
        } else if (answer1 === 'paris') {
            console.log('Correct!');
            score += 1;
            console.log('Your score is now:', score);
        } else {
            console.log('Incorrect. The answer is Paris.');
            score += 0;
            console.log('Your score is now:', score);
        }
        
        // QUESTION 2
        console.log("----------------------------");
        console.log("Question 2:");
        console.log("What is the capital of Germany?");
        const answer2 = prompt('Enter your answer: ');
        if (answer2 === 'Berlin') {
            console.log('Correct!');
            score += 1;
            console.log('Your score is now:', score);
        } else if (answer2 === 'berlin') {
            console.log('Correct!');
            score += 1;
            console.log('Your score is now:', score);
        } else {
            console.log('Incorrect. The answer is Berlin.');
            score += 0;
            console.log('Your score is now:', score);
        }
        
        // QUESTION 3
        console.log("----------------------------");
        console.log("Question 3:");
        console.log("What is the capital of Italy?");
        const answer3 = prompt('Enter your answer: ');
        if (answer3 === 'Rome') {
            console.log('Correct!');
            score += 1;
            console.log('Your score is now:', score);
        } else if (answer3 === 'rome') {
            console.log('Correct!');
            score += 1;
            console.log('Your score is now:', score);
        } else {
            console.log('Incorrect. The answer is Rome.');
            score += 0;
            console.log('Your score is now:', score);
        }
        
        // QUESTION 4
        console.log("----------------------------");
        console.log("Question 4:");
        console.log("What is the capital of Spain?");
        const answer4 = prompt('Enter your answer: ');
        if (answer4 === 'Madrid') {
            console.log('Correct!');
            score += 1;
            console.log('Your score is now:', score);
        } else if (answer4 === 'madrid') {
            console.log('Correct!');
            score += 1;
            console.log('Your score is now:', score);
        } else {
            console.log('Incorrect. The answer is Madrid.');
            score += 0;
            console.log('Your score is now:', score);
        }
        
        // QUESTION 5
        console.log("----------------------------");
        console.log("Question 5:");
        console.log("What is the capital of Portugal?");
        const answer5 = prompt('Enter your answer: ');
        if (answer5 === 'Lisbon') {
            console.log('Correct!');
            score += 1;
            console.log('Your score is now:', score);
        } else if (answer5 === 'lisbon') {
            console.log('Correct!');
            score += 1;
            console.log('Your score is now:', score);
        } else {
            console.log('Incorrect. The answer is Lisbon.');
            score += 0;
            console.log('Your score is now:', score);
        }
        
        // TOTAL SCORE
        console.log("----------------------------");
        console.log("Your total score is:", score);
        if (score >= 3) {
            console.log("Congratulations! You're a true fan of the capital cities of Europe.");
        } else {
            console.log("Sorry, you don't have enough points to win. Maybe next time.");
        }
        console.log("Thank you for playing!");
        
    } else {
        console.log("See you next time!");
        process.exit(0);
    }
}