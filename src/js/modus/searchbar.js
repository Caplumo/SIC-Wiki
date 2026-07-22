// 搜索栏刷新
if (typeof window !== 'undefined') {
  window.addEventListener('load', function () {
    const searchInput = document.querySelector('.navbar__search-input');
    if (searchInput) {
      searchInput.click();
    }
  });
}