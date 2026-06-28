document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('shopNowBtn');
  const mainContent = document.querySelector('.main__content');
  const clothes = document.querySelector('.clothes-selection');

  if (!btn || !mainContent || !clothes) return;

  btn.addEventListener('click', (e) => {
    // simple switch: hide main content, show clothes selection
    const isMainHidden = getComputedStyle(mainContent).display === 'none';
    if (isMainHidden) {
      mainContent.style.display = '';
      clothes.style.display = 'none';
      btn.textContent = 'Shop Now';
    } else {
      mainContent.style.display = 'none';
      clothes.style.display = 'block';
      btn.textContent = 'Back';
    }
    window.dispatchEvent(new Event('resize'));
  });
});
