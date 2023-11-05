const formEl = document.querySelector('.form');
const firstDelayEl = formEl.querySelector('input[name="delay"]');
const delayStepEl = formEl.querySelector('input[name="step"]');
const amountEl = formEl.querySelector('input[name="amount"]');

formEl.lastElementChild.addEventListener('submit', createPromises);

function createPromises() {
  const firstDelay = parseInt(firstDelayEl.value);
  const delayStep = parseInt(delayStepEl.value);
  const amount = parseInt(amountEl.value);

  for (let i = 0; i < amount; i++) {
    const promise = createPromise(i, firstDelay + i * delayStep);

    promise
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
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
