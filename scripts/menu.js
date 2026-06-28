document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mainMenu');

  function setMenuState(open) {
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', !open);
  }

  toggle.addEventListener('click', function () {
    const isOpen = toggle.classList.contains('open');
    setMenuState(!isOpen);
  });

  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      setMenuState(false);
    }
  });
});
