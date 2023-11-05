import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputDateEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');
let calendarDate = null;
let dateNow;
let isActive = false;
let intervalId;
startBtnEl.classList.add('disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    calendarDate = selectedDates[0];
    selectedDate();
  },
};

flatpickr(inputDateEl, options);

function selectedDate() {
  dateNow = new Date();
  if (calendarDate < dateNow) {
    isActive = false;
    startBtnEl.classList.add('disabled');
    window.alert('Please choose a date in the future');
    return;
  } else {
    isActive = true;
    startBtnEl.classList.remove('disabled');
    startBtn();
  }
}

function startBtn() {
  startBtnEl.addEventListener('click', () => {
    if (isActive) {
      startBtnEl.classList.add('disabled');
      dateNow = new Date();
      intervalId = setInterval(() => {
        dateNow = new Date();
        const diff = calendarDate - dateNow;
        const time = convertMs(diff);
        if (calendarDate.getTime() < dateNow.getTime()) {
          clearInterval(intervalId);
          return;
        }
        render(time);
      }, 1000);
    }
  });
}

function render({ days, hours, minutes, seconds }) {
  const lastTime = `${days}:${hours}:${minutes}:${seconds}`;
  timerEl.textContent = lastTime;
  timerEl.classList.add('field');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
