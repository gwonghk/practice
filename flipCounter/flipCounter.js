import { qs, createElement } from '../utils.js';

const runCounter = (node) => {
  if (!node || node.value === '') return;
  const change = new InputEvent('change');

  let counter = 0;
  const max = 15;
  const timer = setInterval(() => {
    const value = counter.toLocaleString(
      'en-US',
      { minimumIntegerDigits: 2, useGrouping: false },
    );
    node.setAttribute('value', value);
    node.dispatchEvent(change);
    counter++;
    if (counter > max) {
      counter = 0;
    }
    return counter;
  }, 300);
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('flipCounter.js');

  const container = qs('.container');
  container.setAttribute('style', `
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    background-color: pink;
  `);

  const makeHiddenCounter = (documentFragment) => {
    const hiddenCounter = createElement('input', {
      id: 'hidden-counter',
      value: 0,
      style: `
        display: none
      `,
    });
    documentFragment.append(hiddenCounter);
  };

  const makeNumberPanels = (documentFragment) => {
    const numberPanelsCount = 2;
    for (let i = 0; i < numberPanelsCount; i++) {
      const numberPanel = createElement('div', {
        id: `number-panel-${i + 1}`,
        text: 0,
        style: `
          background-color: black;
          color: white;
          padding: 16px;
          margin: 16px;
          font-size: 24px;
        `,
      });
      documentFragment.append(numberPanel);
    }
  };

  const makeElements = () => {
    const documentFragment = new DocumentFragment();
    makeHiddenCounter(documentFragment);
    makeNumberPanels(documentFragment);
    container.append(documentFragment);
  };

  const init = () => {
    makeElements();
    const count = qs('#hidden-counter');
    runCounter(count);

    count.addEventListener('change', (e) => {
      const { value } = e.target;
      const [left, right] = value.split('');
      const num1 = qs('#number-panel-1');
      const num2 = qs('#number-panel-2');
      num1.innerHTML = left;
      num2.innerHTML = right;
    });
  };
  init();
});
