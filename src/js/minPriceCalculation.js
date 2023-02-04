const blackblazeEl = document.querySelector('.blackblaze');
const bunnyEl = document.querySelector('.bunny');
const scalewayEl = document.querySelector('.scaleway');
const vultrEl = document.querySelector('.vultr');

export const minPriceCalculation = costArr => {
  const minValue = Math.min(...costArr);
  const indexOfMinValue = costArr.indexOf(minValue);

  let activeMinEl = document.querySelector('.min_cost');

  if (activeMinEl) {
    activeMinEl.classList.remove('min_cost');
  }

  switch (indexOfMinValue) {
    case 0:
      blackblazeEl.classList.add('min_cost');
      break;
    case 1:
      bunnyEl.classList.add('min_cost');
      break;
    case 2:
      scalewayEl.classList.add('min_cost');
      break;
    case 3:
      vultrEl.classList.add('min_cost');
      break;
    default:
      break;
  }
};
