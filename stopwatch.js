document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('stopwatchDisplay');
    const startButton = document.getElementById('startStopwatch');
    const stopButton = document.getElementById('stopStopwatch');
    const resetButton = document.getElementById('resetStopwatch');

    let startTime, updatedTime, difference, tInterval, running = false;

    function startTimer() {
        if (!running) {
            startTime = new Date().getTime();
            tInterval = setInterval(updateTime, 1);
            running = true;
        }
    }

    function stopTimer() {
        clearInterval(tInterval);
        running = false;
    }

    function resetTimer() {
        clearInterval(tInterval);
        display.textContent = '00:00:00';
        running = false;
    }

    function updateTime() {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime;
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    function pad(num) {
        return num < 10 ? '0' + num : num;
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});
