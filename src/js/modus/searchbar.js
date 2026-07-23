// 搜索栏刷新
if (typeof window !== 'undefined') {
  document.addEventListener('focusin', function (e) {
    if (e.target.matches('.navbar__search-input')) {
      if (
        window.matchMedia('not all and (hover: hover) and (pointer: fine)')
          .matches
      ) {
        e.target.style.position = 'fixed';
        e.target.style.top = '9px';
        e.target.style.left = '5vw';
        e.target.style.right = '5vw';
        e.target.style.width = 'auto';
      }
    }
  });

  document.addEventListener('focusout', function (e) {
    if (e.target.matches('.navbar__search-input')) {
      e.target.style.position = '';
      e.target.style.top = '';
      e.target.style.left = '';
      e.target.style.right = '';
      e.target.style.width = '';
    }
  });
}
