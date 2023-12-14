// Define the rules of the game
const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

// Define the options and their corresponding images
const options = [
  { name: "rock", image: "rock.png" },
  { name: "paper", image: "paper.png" },
  { name: "scissors", image: "scissors.png" },
];

// Get the buttons and images
const buttons = document.querySelectorAll(".main .navbar button");
const playerImage = document.querySelector(".gamebar .pone img");
const computerImage = document.querySelector(".gamebar .ptwo img");

// Get the win message
const winMessage = document.querySelector(".win");

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Clear the win message
    winMessage.innerHTML = "";

    // Get the player's choice
    const playerChoice = button.innerHTML.toLowerCase();

    // Set the player's image
    const playerOption = options.find((option) => option.name === playerChoice);
    playerImage.src = `images/${playerOption.image}`;

    // Get the computer's choice
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    // Set the computer's image
    computerImage.src = `images/${computerChoice.image}`;

    // Determine the winner
    if (rules[playerChoice] === computerChoice.name) {
      winMessage.innerHTML = "<h1>You Win! </h1>";
    } else if (playerChoice === computerChoice.name) {
      winMessage.innerHTML = "<h1>It's a Tie!</h1>";
    } else {
      winMessage.innerHTML = "<h1>You Lose!</h1>";
    }
  });
});
