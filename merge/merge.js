import { qs, debounce, mergeSort } from '../utils.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('merge.js loaded');

  const init = () => {

  };
  init();
});

const game1 = {
  name: 'outer wilds',
  genre: 'exploration',
  links: {
    review: 'https://www.metacritic.com/game/playstation-4/outer-wilds',
    steam: 'https://store.steampowered.com/app/753640/Outer_Wilds/',
    wiki: 'https://en.wikipedia.org/wiki/Outer_Wilds',
  },
  platforms: [
    'Microsoft Windows',
    'Xbox One',
    'Nintendo Switch',
    'PlayStation 4',
  ],
};

const game2 = {
  name: 'triangle strategy',
  genre: 'tactical rpg',
  links: {
    review: 'https://www.metacritic.com/game/switch/triangle-strategy',
    wiki: 'https://en.wikipedia.org/wiki/Triangle_Strategy',
  },
  platforms: [
    'Nintendo Switch',
  ],
};
