var intervalId;
var speed = 1; // change this value to adjust the speed of scrolling
var isPaused = false;
var isScrollingUp = false;

function startScrolling() {
  intervalId = setInterval(function() {
    if (!isPaused) {
      var currentPosition = window.pageYOffset;
      var maxPosition = document.body.scrollHeight - window.innerHeight;
      if (currentPosition >= maxPosition) {
        isScrollingUp = true;
      } else if (currentPosition <= 0) {
        isScrollingUp = false;
      }
      if (isScrollingUp) {
        window.scrollBy(0, -speed);
      } else {
        window.scrollBy(0, speed);
      }
    }
  }, 1);
}

function stopScrolling() {
  clearInterval(intervalId);
}

startScrolling();

document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyQ') {
    isPaused = !isPaused;
  }
});
