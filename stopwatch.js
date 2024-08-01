document.addEventListener('DOMContentLoaded', function() {
    let stopwatchInterval;
    let stopwatchTime = 0;

    const stopwatchDisplay = document.getElementById('stopwatchDisplay');
    const startStopwatchButton = document.getElementById('startStopwatch');
    const stopStopwatchButton = document.getElementById('stopStopwatch');
    const resetStopwatchButton = document.getElementById('resetStopwatch');

    function updateStopwatchDisplay() {
        const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
        const seconds = String(stopwatchTime % 60).padStart(2, '0');
        stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }

    startStopwatchButton.addEventListener('click', () => {
        if (!stopwatchInterval) {
            stopwatchInterval = setInterval(() => {
                stopwatchTime += 1;
                updateStopwatchDisplay();
            }, 1000);
        }
    });

    stopStopwatchButton.addEventListener('click', () => {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
    });

    resetStopwatchButton.addEventListener('click', () => {
        stopwatchTime = 0;
        updateStopwatchDisplay();
    });

    updateStopwatchDisplay();
});
