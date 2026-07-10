// 这个文件的作用：让侧边栏按文件名开头的数字排序

module.exports = async function navySidebarGenerator({ defaultSidebarItemsGenerator, ...args }) {
  // 先用默认方式生成侧边栏条目（保留分类折叠等结构）
  const items = await defaultSidebarItemsGenerator(args);
  // 对整个条目列表及其内部的子项递归排序
  return sortItemsByNumber(items);
};

// 从字符串开头提取数字，用于比较
function extractNumber(str) {
  const match = str.toString().match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 99999; // 没数字的排最后
}

// 递归排序：对数组中的每个元素按提取的数字排序，如果是分类则对其 items 再排序
function sortItemsByNumber(items) {
  return items
    .sort((a, b) => {
      const labelA = a.label || a.id || '';
      const labelB = b.label || b.id || '';
      return extractNumber(labelA) - extractNumber(labelB);
    })
    .map(item => {
      if (item.type === 'category' && item.items) {
        return { ...item, items: sortItemsByNumber(item.items) };
      }
      return item;
    });
}