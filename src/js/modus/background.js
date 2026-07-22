// 背景图层级div
if (typeof window !== 'undefined') {
  const bgLayer = document.createElement('div');
  bgLayer.className = 'bg-layer';
  document.body.insertBefore(bgLayer, document.body.firstChild);
}