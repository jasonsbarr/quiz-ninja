const quiz = [
    [`What is Superman's real name?`, `Clark Kent`],
    [`What is Wonder Woman's real name?`, `Diana Prince`],
    [`What is Batman's real name?`, `Bruce Wayne`],
];

function play(quiz) {
    let score = 0;

    // Main game loop
    for (const [question, answer] of quiz) {
        const response = ask(question);
        check(response, answer);
    }

    // End of main game loop
    gameOver();

    // Game functions
    function ask(question) {
        return prompt(question);
    }

    function check(response, answer) {
        if (response === answer) {
            alert(`Correct!`);
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}.`);
        }
    }

    function gameOver() {
        alert(`Game over. You scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}

play(quiz);
