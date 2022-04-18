import { qs, addGlobalEventListener, debounce } from '../utils.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('debounce.js loaded');
  const input = qs('input');
  const defaultTxt = qs('#default');
  const debounceTxt = qs('#debounce');

  const updateDebounceText = debounce((text) => {
    debounceTxt.textContent = text;
  });

  input.addEventListener('input', (e) => {
    defaultTxt.textContent = e.target.value;
    updateDebounceText(e.target.value);
  });

  console.log('input', input);
  console.log('defaultTxt', defaultTxt);
  console.log('debounceTxt', debounceTxt);
});
