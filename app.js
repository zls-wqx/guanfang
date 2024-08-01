document.addEventListener('DOMContentLoaded', function() {
    // 导航功能
    const homeLink = document.getElementById('homeLink');
    const clockLink = document.getElementById('clockLink');
    const stopwatchLink = document.getElementById('stopwatchLink');
    const musicLink = document.getElementById('musicLink');
    const aboutLink = document.getElementById('aboutLink');
    const contentSections = document.querySelectorAll('main section');

    function showSection(sectionId) {
        contentSections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('visible');
                section.classList.remove('hidden');
            } else {
                section.classList.remove('visible');
                section.classList.add('hidden');
            }
        });
    }

    homeLink.addEventListener('click', () => showSection('home'));
    clockLink.addEventListener('click', () => showSection('clock'));
    stopwatchLink.addEventListener('click', () => showSection('stopwatch'));
    musicLink.addEventListener('click', () => showSection('music'));
    aboutLink.addEventListener('click', () => showSection('about')); // 新增关于链接

    showSection('home'); // 默认显示主页

    // 数字时钟
    const digitalClock = document.getElementById('digitalClock');
    const timezoneSelect = document.getElementById('timezoneSelect');

    function updateClock() {
        const now = new Date();
        const timezone = timezoneSelect.value;
        const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const timeString = now.toLocaleTimeString('zh-CN', options);
        digitalClock.textContent = timeString;
    }

    function populateTimezones() {
        const timezones = [
            'Asia/Shanghai',
            'Asia/Tokyo',
            'Europe/London',
            'America/New_York'
            // 可以添加更多时区
        ];
        timezones.forEach(timezone => {
            const option = document.createElement('option');
            option.value = timezone;
            option.textContent = timezone;
            timezoneSelect.appendChild(option);
        });
    }

    populateTimezones();
    timezoneSelect.addEventListener('change', updateClock);
    setInterval(updateClock, 1000);
    updateClock();

    // 秒表功能
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

    // 音乐功能
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const musicList = document.getElementById('musicList');
    const audioPlayer = document.getElementById('audioPlayer');

    searchButton.addEventListener('click', () => {
   const query = searchInput.value;
    searchMusic(query);
});

function searchMusic(query) {
    const url = `https://dataiqs.com/api/kgmusic/?msg=${encodeURIComponent(query)}&type=&n=0&callback=handleMusicSearchResults`;

    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}

window.handleMusicSearchResults = function(response) {
    musicList.innerHTML = '';

    response.data.forEach(track => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.textContent = `${track.title} - ${track.artist}`;
        songItem.addEventListener('click', () => playMusic(track.preview));
        musicList.appendChild(songItem);
    });
};

function playMusic(url) {
    audioPlayer.src = url;
    audioPlayer.play();
}
