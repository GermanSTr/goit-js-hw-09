import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputDateEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('button[data-start]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    console.log(selectedDate);
  },
};

flatpickr(inputDateEl, options);
// isPassTime();

// function isPassTime() {
//   const date = new Date();
//   if (options < date) {
//     console.log('1');
//     window.alert('Please choose a date in the future');
//   }
//   console.log('2');
// }
