document.addEventListener('DOMContentLoaded', () => {
    const digitalClock = document.getElementById('digitalClock');
    const timezoneSelect = document.getElementById('timezoneSelect');

    function updateClock() {
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: timezoneSelect.value };
        digitalClock.textContent = now.toLocaleTimeString([], options);
    }

    function populateTimezones() {
        const timezones = Intl.supportedValuesOf('timeZone');
        timezones.forEach(tz => {
            const option = document.createElement('option');
            option.value = tz;
            option.textContent = tz;
            timezoneSelect.appendChild(option);
        });
    }

    timezoneSelect.addEventListener('change', updateClock);
    populateTimezones();
    updateClock();
    setInterval(updateClock, 1000);
});
