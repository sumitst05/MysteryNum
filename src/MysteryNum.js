document.addEventListener('DOMContentLoaded', function() {
  var sparkleContainer = document.querySelector('.sparkle-container')
  var display = document.querySelector('.display') // Get display element

  var maxSparkles = 50 // Maximum number of sparkles in the game area

  function createSparkle() {
    var sparkles = sparkleContainer.querySelectorAll('.sparkle-dot')

    // Remove older sparkles if the maximum threshold is reached
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

  // Attach event listener to numpad buttons
  var numpadButtons = document.querySelectorAll('.numpad div')
  for (var i = 0; i < numpadButtons.length; i++) {
    numpadButtons[i].addEventListener('click', function() {
      display.textContent = this.textContent // Update display content with the pressed number
    })
  }
})
