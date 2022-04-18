document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.carousel-container');
  const star = container.querySelector('.star');
  const starsCount = 5;

  const addStars = (count) => {
    const documentFragment = new DocumentFragment();
    for (let i = 0; i < count; i++) {
      const node = star.cloneNode(true);
      node.setAttribute('id', `star-${i}`);
      node.dataset.index = i;

      node.onclick = () => {
        const stars = [...document.querySelectorAll('.star')];
        let counter = 0;
        for (let j = 0; j < stars.length; j++) {
          const currentStar = stars[j];
          if (counter < i) {
            currentStar.classList.remove('checked');
          } else {
            currentStar.classList.add('checked');
          }
          counter++;
        }
      };

      documentFragment.append(node);
    }

    container.append(documentFragment);
    star.remove();
  };

  addStars(starsCount);
});
