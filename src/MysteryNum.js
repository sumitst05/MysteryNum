document.addEventListener('DOMContentLoaded', function () {
  var sparkleContainer = document.querySelector('.sparkle-container')
  var maxSparkles = 50 // Maximum number of sparkles in the game area

  function createSparkle() {
    var sparkles = sparkleContainer.querySelectorAll('.sparkle-dot')

    // Remove older sparkles if the maximum number of sparkles is reached
    if (sparkles.length >= maxSparkles) {
      sparkleContainer.removeChild(sparkles[0])
    }

    var sparkle = document.createElement('div')
    sparkle.classList.add('sparkle-dot')
    sparkle.style.top = Math.random() * 500 + 'px'
    sparkle.style.left = Math.random() * 700 + 'px'
    sparkleContainer.appendChild(sparkle)
  }

  // Create a new sparkle every 200 milliseconds
  setInterval(createSparkle, 200)

  let isPlayerTurn = true
  let isGameEnded = false

  function isGameOver(num, playerGuess, computerGuess) {
    if (num === playerGuess) {
      return 0
    } else if (num === computerGuess) {
      return 1
    } else {
      return -1
    }
  }

  var num = Math.floor(Math.random() * 10) + 1 // Generate a random number between 1 and 10

  function checkGuess(guess, num) {
    var output
    if (isPlayerTurn) {
      output = document.querySelector('.player-output')
    } else {
      output = document.querySelector('.computer-output')
    }
    if (guess > num) {
      output.innerText = 'Too High!'
    } else if (guess < num) {
      output.innerText = 'Too Low!'
    } else {
      output.innerText = guess + ' is Correct!'
    }
  }

  var pDisplay = document.querySelector('.player-display') // Get player display element
  var numpadButtons = document.querySelectorAll('.numpad div')

  async function playerTurn() {
    return new Promise((resolve) => {
      function handleButtonClick() {
        if (isGameEnded) {
          return // Exit the function if the game has ended
        }
        pDisplay.textContent = this.textContent // Update display content with the pressed number
        var playerGuess = parseInt(this.textContent)
        checkGuess(playerGuess, num) // Call checkGuess with the playerGuess value and target number
        resolve(playerGuess)
      }

      for (var i = 0; i < numpadButtons.length; i++) {
        numpadButtons[i].addEventListener('click', handleButtonClick)
      }
    })
  }

  var exception = 0

  async function computerTurn(mi, ma, prevPlayerGuess) {
    return new Promise((resolve) => {
      var computerGuess = 0

      if (ma - mi === 1) {
        exception++
        if (prevPlayerGuess === mi) {
          computerGuess = ma
        } else if (prevPlayerGuess === ma) {
          computerGuess = mi
        } else {
          computerGuess = exception & 1 ? mi : ma
        }
      } else {
        computerGuess = Math.floor((mi + ma) / 2)
      }

      var cDisplay = document.querySelector('.computer-display') // Get computer display element
      cDisplay.textContent = computerGuess
      checkGuess(computerGuess, num)
      resolve(computerGuess)
    })
  }

  var mi = 1,
    ma = 10

  function adjustRange(guess, num) {
    var guessIsInsideRange = guess > mi && guess < ma

    if (guessIsInsideRange) {
      if (guess < num) {
        mi = guess + 1
      } else if (guess > num) {
        ma = guess - 1
      }
    }

    return [mi, ma]
  }

  async function gameLogic() {
    var playerGuess = 0,
      computerGuess = 0,
      prevPlayerGuess = 0

    while (isGameOver(num, playerGuess, computerGuess) === -1) {
      if (isPlayerTurn) {
        playerGuess = await playerTurn()
        prevPlayerGuess = playerGuess
        isPlayerTurn = false
      } else {
        var range = adjustRange(playerGuess, num)
        computerGuess = await computerTurn(range[0], range[1], prevPlayerGuess)
        range = adjustRange(computerGuess, num)
        isPlayerTurn = true
      }
    }
    if (isGameOver(num, playerGuess, computerGuess) !== -1) {
      isGameEnded = true
    }
  }

  gameLogic()
})
