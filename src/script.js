let randomNumber = Math.floor(Math.random() * 10) + 1;
let guesses = 0;

function guessNumber() {
    let guessInput = document.getElementById("guessInput");
    let result = document.getElementById("result");

    if (guessInput.value === "") {
        result.innerHTML = "Please enter a number.";
    } else if (isNaN(guessInput.value)) {
        result.innerHTML = "Please enter a valid number.";
    } else {
        let guess = parseInt(guessInput.value)
        guesses++;

        if (guess < randomNumber) {
            result.innerHTML = "Too low! Guess again.";
        } else if (guess > randomNumber) {
            result.innerHTML = "Too high! Guess again.";
        } else {
            result.innerHTML = "Congratulations! You guessed the number in " + guesses + " guesses.";
            document.getElementById("guessInput").disabled = true;
        }
    }

    guessInput.value = "";
    guessInput.focus();
}
