console.log('✅ [custom.js] 脚本文件已加载并开始执行');

// ========== 2. 当前 DOM 状态 ==========
console.log('📄 当前 readyState:', document.readyState);

// ========== 3. 监听 DOM 完全就绪 ==========
function onReady() {
  console.log('✅ [custom.js] DOM 已完全就绪');

  // 尝试获取 Docusaurus 的关键根节点
  const root = document.getElementById('__docusaurus');
  if (root) {
    console.log('✅ 找到 #__docusaurus 根节点', root);
  } else {
    console.warn('❌ 未找到 #__docusaurus，页面可能不是标准 Docusaurus 结构');
  }

  // 尝试获取导航栏（常见类名）
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    console.log('✅ 找到导航栏 .navbar', navbar);
    // 做一个视觉标记，方便你肉眼确认
    navbar.style.outline = '3px solid red';
    console.log('🔴 已给导航栏添加红色边框（临时视觉标记）');
  } else {
    console.warn('❌ 未找到导航栏 .navbar');
  }

  // 测试一个简单的 DOM 修改
  const footer = document.querySelector('.footer');
  if (footer) {
    const p = document.createElement('p');
    p.textContent = '⚡ 检测脚本已生效';
    p.style.color = 'lime';
    p.style.backgroundColor = '#222';
    p.style.padding = '4px';
    p.style.textAlign = 'center';
    footer.prepend(p);
    console.log('🟢 已在页脚添加检测文本');
  }
}

// 根据当前 readyState 决定执行时机
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onReady);
} else {
  onReady();
}
