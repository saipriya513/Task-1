// Global variables
let timer;
let isRunning = false;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCount = 1;

// Function to start/stop the stopwatch
function startStop() {
  if (isRunning) {
    clearInterval(timer);  // Stop the stopwatch
    document.getElementById('startStop').textContent = "Start";
  } else {
    // Start the stopwatch
    timer = setInterval(updateTime, 10);
    document.getElementById('startStop').textContent = "Pause";
  }
  isRunning = !isRunning;
}

// Function to update the time
function updateTime() {
  milliseconds++;

  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  document.getElementById('time').textContent =
    formatTime(minutes) + ":" + formatTime(seconds) + "." + formatTime(milliseconds);
}

// Function to format time as two digits
function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

// Function to reset the stopwatch
function reset() {
  clearInterval(timer);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.getElementById('time').textContent = "00:00.00";
  document.getElementById('startStop').textContent = "Start";
  document.getElementById('laps').innerHTML = "";  // Clear lap times
  lapCount = 1;
}

// Function to record lap times
function recordLap() {
  if (isRunning) {
    let lapTime = formatTime(minutes) + ":" + formatTime(seconds) + "." + formatTime(milliseconds);
    let lapList = document.getElementById('laps');
    let lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount++}: ${lapTime}`;
    lapList.appendChild(lapItem);
  }
}
