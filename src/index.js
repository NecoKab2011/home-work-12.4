const daysElement = document.querySelector('[data-value="days"]');
const hoursElement = document.querySelector('[data-value="hours"]');
const minsElement = document.querySelector('[data-value="mins"]');
const secsElement = document.querySelector('[data-value="secs"]');

function startCountdown(endDate) {
    function updateTimer() {
        const timeNow = new Date().getTime();
        const timeLeft = endDate - timeNow;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minsElement.textContent = mins;
        secsElement.textContent = secs;
    }

    updateTimer();

    const timer = setInterval(updateTimer, 1000);
    if (timeLeft <= 0) {
        clearInterval(timer);
        return;
    }
}

startCountdown(new Date('2025-04-17T00:00:00'));
