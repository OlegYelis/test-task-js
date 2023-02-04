import { valueCalculation } from './valueCalculation';
import { minPriceCalculation } from './minPriceCalculation';

const blackblazeEl = document.querySelector('.blackblaze');
const bunnyEl = document.querySelector('.bunny');
const scalewayEl = document.querySelector('.scaleway');
const vultrEl = document.querySelector('.vultr');

const blackblazeSpanEl = document.querySelector('.blackblaze__value');
const bunnySpanEl = document.querySelector('.bunny__value');
const scalewaySpanEl = document.querySelector('.scaleway__value');
const vultrSpanEl = document.querySelector('.vultr__value');

export const inputHandler = () => {
  const value = valueCalculation();

  blackblazeSpanEl.textContent = `${value.blackblazeValue}$`;
  bunnySpanEl.textContent = `${value.bunnyValue}$`;
  scalewaySpanEl.textContent = `${value.scalewayValue}$`;
  vultrSpanEl.textContent = `${value.vultrValue}$`;

  blackblazeEl.style.width = `${+value.blackblazeValue * 2 + 10}px`;
  bunnyEl.style.width = `${+value.bunnyValue * 2 + 10}px`;
  scalewayEl.style.width = `${+value.scalewayValue * 2 + 10}px`;
  vultrEl.style.width = `${+value.vultrValue * 2 + 10}px`;

  const costArr = [
    +value.blackblazeValue,
    +value.bunnyValue,
    +value.scalewayValue,
    +value.vultrValue,
  ];

  minPriceCalculation(costArr);
};
