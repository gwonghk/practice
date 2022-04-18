export const qs = (selector, parent = document) => {
  return parent.querySelector(selector);
};

export const qsa = (selector, parent = document) => {
  return [...parent.querySelectorAll(selector)];
};

export const addGlobalEventListener = ({
  type,
  selector,
  callback,
  options,
  parent = document,
}) => {
  parent.addEventListener(
    type,
    (e) => {
      if (e.target.matches(selector)) callback(e);
    },
    options,
  );
};

export const createElement = (type, options = {}) => {
  const el = document.createElement(type);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'class') {
      el.classList.add(value);
      return;
    }

    if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        el.dataset[dataKey] = dataValue;
      });
      return;
    }

    if (key === 'text') {
      el.textContent = value;
      return;
    }

    el.setAttribute(key, value);
  });
  return el;
};

export const debounce = (cb, delay = 1000) => {
  let timeout;
  const delayedFunc = (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
  return delayedFunc;
};

const mergeArr = (leftArr, rightArr) => {
  if (!Array.isArray(leftArr) || !Array.isArray(rightArr)) return undefined;
  if (leftArr.length < 1 || rightArr.length < 1) return undefined;
  const sortedArr = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    const leftItem = leftArr[leftIdx];
    const rightItem = rightArr[rightIdx];
    if (leftItem < rightItem) {
      sortedArr.push(leftItem);
      leftIdx++;
    } else {
      sortedArr.push(rightItem);
      rightIdx++;
    }
  }

  const result = [
    ...sortedArr,
    ...leftArr.slice(leftIdx),
    ...rightArr.slice(rightIdx),
  ];

  return result;
};

export const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const midIdx = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIdx);
  const rightArr = arr.slice(midIdx, arr.length);

  return mergeArr(mergeSort(leftArr), mergeSort(rightArr));
};
