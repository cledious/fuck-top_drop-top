document.addEventListener('DOMContentLoaded', () => {
  const clothes = document.querySelector('.clothes-selection');
  const ring = document.getElementById('clothesRing');
  const galleryTitle = document.querySelector('.clothes-gallery__title');
  const galleryGrid = document.querySelector('.clothes-gallery__grid');
  if (!clothes || !ring || !galleryTitle || !galleryGrid) return;
  const items = Array.from(ring.querySelectorAll('.clothes-item'));
  const galleryData = {
    hat: Array.from({ length: 10 }, (_, i) => ({
      name: `Classic Hat ${i + 1}`,
      price: `$${29 + i}`,
      image: `https://via.placeholder.com/140x100?text=Hat+${i + 1}`,
      colors: ['black', 'bone', 'white'],
    })),
    shirt: Array.from({ length: 10 }, (_, i) => ({
      name: `Signature Shirt ${i + 1}`,
      price: `$${39 + i}`,
      image: `https://via.placeholder.com/140x100?text=Shirt+${i + 1}`,
      colors: ['black', 'bone', 'white'],
    })),
    pants: Array.from({ length: 10 }, (_, i) => ({
      name: `Styled Pants ${i + 1}`,
      price: `$${49 + i}`,
      image: `https://via.placeholder.com/140x100?text=Pants+${i + 1}`,
      colors: ['black', 'bone', 'white'],
    })),
    soks: Array.from({ length: 10 }, (_, i) => ({
      name: `Premium Socks ${i + 1}`,
      price: `$${19 + i}`,
      image: `https://via.placeholder.com/140x100?text=Socks+${i + 1}`,
      colors: ['black', 'bone', 'white'],
    })),
    shoes: Array.from({ length: 10 }, (_, i) => ({
      name: `Modern Shoes ${i + 1}`,
      price: `$${59 + i}`,
      image: `https://via.placeholder.com/140x100?text=Shoes+${i + 1}`,
      colors: ['black', 'bone', 'white'],
    })),
  };
  // no rotation: use scroll to move selection index
  let selectedIndex = 0;

  function positionItems() {
    const count = items.length;
    const rect = ring.getBoundingClientRect();
    const defaultItemSize = 52;
    const itemSize = Math.max(items[0]?.offsetWidth || defaultItemSize, items[0]?.offsetHeight || defaultItemSize, defaultItemSize);
    const radius = Math.min(rect.width, rect.height) / 2 - itemSize / 2 - 14;
    items.forEach((el, i) => {
      const itemAngle = (360 / count) * i;
      el.dataset._angle = itemAngle; // store base angle
      el.style.transform = `rotate(${itemAngle}deg) translate(${radius}px) rotate(-${itemAngle}deg) translate(-50%,-50%)`;
    });
  }

  function setSelected(index) {
    selectedIndex = ((index % items.length) + items.length) % items.length;
    items.forEach((el, i) => el.classList.toggle('selected', i === selectedIndex));
    const currentItem = items[selectedIndex];
    const category = currentItem.dataset.cat;
    const hint = document.querySelector('.clothes-selection__hint');
    const defaultLogo = './img/logos/mainlogo.svg';
    if (hint) hint.textContent = `Selected: ${category}`;
    if (galleryTitle && galleryGrid) {
      galleryTitle.textContent = `Items for ${category.charAt(0).toUpperCase() + category.slice(1)}`;
      galleryGrid.innerHTML = galleryData[category]
        .map(item => {
          return `
            <article class="clothes-gallery__card">
              <img src="${defaultLogo}" alt="${item.name} logo" class="clothes-gallery__image" />
              <div class="clothes-gallery__info">
                <strong>${item.name}</strong>
                <span class="clothes-gallery__price">${item.price}</span>
              </div>
              <p class="clothes-gallery__description">${item.description}</p>
              <div class="clothes-gallery__colors">
                ${item.colors.map(color => `<span class="clothes-gallery__swatch clothes-gallery__swatch--${color}"></span>`).join('')}
              </div>
            </article>
          `;
        })
        .join('');
    }
  }

  // click selection: select the clicked item
  items.forEach((it, idx) => {
    it.addEventListener('click', () => setSelected(idx));
  });

  window.addEventListener('resize', () => positionItems());
  window.addEventListener('load', () => { positionItems(); setSelected(0); });
  positionItems();
});
