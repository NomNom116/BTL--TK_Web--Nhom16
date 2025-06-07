// clothing-detail.js
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');

  const titleMap = {
    'quan-nam': 'Quần Nam',
    'ao-nam': 'Áo Nam',
    'quan-nu': 'Quần Nữ',
    'ao-nu': 'Áo Nữ',
  };

  document.title = titleMap[type] || 'Chi tiết sản phẩm';
  document.getElementById('product-title').textContent = titleMap[type] || 'Sản phẩm';
});
