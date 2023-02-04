const storageEl = document.getElementById('storage-input');
const storageValueEl = document.querySelector('.storage__value');
const transferEl = document.getElementById('transfer-input');
const transferValueEl = document.querySelector('.transfer__value');

let storageValue = storageEl.value;
let transferValue = transferEl.value;

const bunnyHDDEl = document.getElementById('HDD');
const scalewayMultiEl = document.getElementById('Multi');

export const valueCalculation = () => {
  storageValueEl.textContent = storageEl.value;
  storageValue = storageEl.value;
  transferValueEl.textContent = transferEl.value;
  transferValue = transferEl.value;

  let blackblazeValue = storageValue * 0.005 + transferValue * 0.01;
  let bunnyValue = bunnyHDDEl.checked
    ? storageValue * 0.01 + transferValue * 0.01
    : storageValue * 0.02 + transferValue * 0.01;
  let scalewayValue;
  if (storageValue <= 75 && transferValue <= 75) {
    scalewayValue = 0;
  } else if (storageValue <= 75 && transferValue > 75) {
    scalewayValue = (transferValue - 75) * 0.02;
  } else if (storageValue > 75 && transferValue <= 75) {
    scalewayValue = scalewayMultiEl.checked
      ? (storageValue - 75) * 0.06
      : (storageValue - 75) * 0.03;
  } else {
    scalewayValue = scalewayMultiEl.checked
      ? (storageValue - 75) * 0.06 + (transferValue - 75) * 0.02
      : (storageValue - 75) * 0.03 + (transferValue - 75) * 0.02;
  }
  let vultrValue = storageValue * 0.01 + transferValue * 0.01;

  blackblazeValue = blackblazeValue < 7 ? 7 : blackblazeValue.toFixed(1);
  bunnyValue = bunnyValue > 10 ? 10 : bunnyValue.toFixed(1);
  scalewayValue = scalewayValue.toFixed(1);
  vultrValue = vultrValue < 5 ? 5 : vultrValue.toFixed(1);

  return {
    blackblazeValue: blackblazeValue,
    bunnyValue: bunnyValue,
    scalewayValue: scalewayValue,
    vultrValue: vultrValue,
  };
};
