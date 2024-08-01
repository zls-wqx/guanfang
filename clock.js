document.addEventListener('DOMContentLoaded', function() {
    const clockDisplay = document.getElementById('clockDisplay');
    const timezoneSelect = document.getElementById('timezoneSelect');
    
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }

    function populateTimezones() {
        const timezones = [
            'UTC', 'GMT', 'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
            'Europe/London', 'Europe/Paris', 'Asia/Tokyo', 'Australia/Sydney'
        ];
        timezones.forEach(zone => {
            const option = document.createElement('option');
            option.value = zone;
            option.textContent = zone;
            timezoneSelect.appendChild(option);
        });
    }

    populateTimezones();
    updateClock();
    setInterval(updateClock, 1000);
});
