document.addEventListener('DOMContentLoaded', function() {
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
});
