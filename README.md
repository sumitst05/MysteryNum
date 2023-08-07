# MysteryNum Game

MysteryNum is a number guessing game built using JavaScript and HTML/CSS. In this game, the player has to guess a randomly generated secret number. The objective is to find the correct number before the computer finds it. The guesses made by the computer are not random but sound and smart. 

## Getting Started

To play the game, you need a web browser with JavaScript support. No additional dependencies or installations are required.

1. Clone the repository or download the source code.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the dependencies by running the following command:

   ```bash
   npm install
   ```
4. Start the server:

    ```bash
    npm run devstart
    ```
5. Open a web browser and visit `http://localhost:3000` to play the game.


Alternatively, you can play the game online by visiting the [MysteryNum Game Website](https://sumitst05.github.io/MysteryNum/).

## File Structure

The project has the following file structure:

```
/
├── public/
│   ├── index.html
│   ├── MysteryNum.js
│   └── style.css
├── assets/
│   ├── background.jpg
│   ├── computer.png
│   └── human.png
├── server.js
└── package.json
```

## How to Play

- When you start the game, a secret number between a specified range will be generated.
- Enter your guess in the input field provided and click the "Guess" button.
- The game will provide feedback whether your guess is too high or too low.
- Keep guessing until you find the correct number or run out of attempts.
- The game will end and display the result (win or lose) along with the secret number.

## Features

- Responsive UI: The game interface is designed to work well on both desktop and mobile devices (in desktop mode).

## Contributing

Contributions to the MysteryNum game are welcome. If you find any bugs, have suggestions, or want to add new features, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the GNU General Public License. See the [LICENSE](LICENSE) file for more details.

