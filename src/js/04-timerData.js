const formElData = document.querySelector('.formData');
const startElData = formElData.querySelector('input[name="start"]');
const finishElData = formElData.querySelector('input[name="finish"]');
const summaryElData = formElData.querySelector('input[name="amount"]');

formElData.addEventListener('submit', centralEvent);

function centralEvent(evt) {
  evt.preventDefault();
  const startTime = startElData.value;
  const endTime = finishElData.value;

  const elapsedTime = calculateElapsedTime(startTime, endTime);

  summaryElData.value = elapsedTime;
  console.log(`Пройшло часу ${elapsedTime}`);
}

function calculateElapsedTime(startTime, endTime) {
  if (startTime === 0 && endTime === 0) {
    return;
  } else {
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);

    const diffMs = end - start;

    const hours = Math.floor(diffMs / 1000 / 60 / 60);
    const minutes = Math.floor((diffMs / 1000 / 60) % 60);

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    console.log(`${formattedHours}:${formattedMinutes}`);
    return `${formattedHours}:${formattedMinutes}`;
  }
}
