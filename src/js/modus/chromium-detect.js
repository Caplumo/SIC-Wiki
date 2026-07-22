// 给他妈的傻逼Chromium系擦屁股口牙！
if (typeof window !== 'undefined') {
  if (/Chrome/.test(navigator.userAgent) && !/Firefox/.test(navigator.userAgent)) {
    const observer = new MutationObserver(function () {
      if (!document.documentElement.classList.contains('is-chromium')) {
        document.documentElement.classList.add('is-chromium');
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    document.documentElement.classList.add('is-chromium');
  }
}