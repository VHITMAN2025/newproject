function setAlarm() {
    const alarmTime = document.getElementById('alarmTime').value;
    if (!alarmTime) {
        alert('Please select a time for the alarm.');
        return;
    }

    // Convert alarm time to Date object
    const alarmDate = new Date();
    const [hours, minutes] = alarmTime.split(':');
    alarmDate.setHours(hours, minutes, 0, 0);

    const now = new Date();
    let timeToAlarm = alarmDate - now;

    // If the alarm time is for the next day
    if (timeToAlarm < 0) {
        timeToAlarm += 24 * 60 * 60 * 1000; // Add 24 hours
    }

    setTimeout(() => {
        alert('Time to wake up!');
    }, timeToAlarm);

    alert(`Alarm set for ${alarmDate.toLocaleTimeString()}`);
}
