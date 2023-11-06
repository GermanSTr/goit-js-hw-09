import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const firstDelayEl = formEl.querySelector('input[name="delay"]');
const delayStepEl = formEl.querySelector('input[name="step"]');
const amountEl = formEl.querySelector('input[name="amount"]');

formEl.addEventListener('submit', createPromises);

function createPromises(evt) {
  evt.preventDefault();
  const firstDelay = parseInt(firstDelayEl.value);
  const delayStep = parseInt(delayStepEl.value);
  const amount = parseInt(amountEl.value);

  for (let i = 0; i < amount; i++) {
    const promise = createPromise(i, firstDelay + i * delayStep);

    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const obj = {
      position,
      delay,
    };

    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj);
      } else {
        reject(obj);
      }
    }, delay);
  });
}
