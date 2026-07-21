if (typeof window !== 'undefined') {
  // 给他妈的傻逼Chromium系擦屁股口牙！
  if (/Chrome/.test(navigator.userAgent) && !/Firefox/.test(navigator.userAgent)) {
    // 用 MutationObserver 监听 html 的 class 变化，Docusaurus 路由切换时会覆盖 class
    const observer = new MutationObserver(function () {
      if (!document.documentElement.classList.contains('is-chromium')) {
        document.documentElement.classList.add('is-chromium');
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // 立即添加一次
    document.documentElement.classList.add('is-chromium');
  }

  window.addEventListener('load', function () {
    // 搜索栏刷新
    const searchInput = document.querySelector('.navbar__search-input');
    if (searchInput) {
      searchInput.click();
    }
  });

  // 图片灯箱
  document.addEventListener('click', function (e) {
    const img = e.target.closest("[class^='img-'] img");
    if (!img) return;

    const imgSrc = img.src;
    const lbPad = document.createElement('div');
    const lbImg = document.createElement('img');
    const button = document.createElement('span');
    lbPad.classList.add('LB-pad');
    lbImg.classList.add('LB-img');
    button.classList.add('LB-button');
    lbImg.src = imgSrc;
    lbImg.alt = '原图';
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
    </svg>`;
    lbPad.appendChild(lbImg);
    lbPad.appendChild(button);
    document.documentElement.appendChild(lbPad);

    function closeLightbox() {
      document.documentElement.removeChild(lbPad);
    }

    button.addEventListener('click', closeLightbox);
    lbImg.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });
}