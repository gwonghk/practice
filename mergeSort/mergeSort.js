import { qs, debounce, mergeSort } from '../utils.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('mergeSort.js loaded');
  const input = qs('input');
  input.value = '123,321,4241,24,55';
  const mergeSortTxt = qs('#mergeSort');

  const updateMergeSortText = debounce((text) => {
    if (typeof text !== 'string') return undefined;
    const arr = text.split(',').map((el) => Number(el));
    const sortedTxt = mergeSort(arr);
    mergeSortTxt.textContent = sortedTxt.join(', ');
    return undefined;
  });

  input.addEventListener('input', (e) => {
    updateMergeSortText(e.target.value);
  });

  const init = () => {
    updateMergeSortText(input.value);
  };
  init();
});
