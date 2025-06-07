// racket.js
import products from './products.js';
import { initHeader } from './header.js';
import cart from './cart.js';

const app = document.getElementById('app');
const temp = document.getElementById('temporaryContent');

async function loadTemplate() {
  try {
    // 1. Fetch template chung
    const res = await fetch('./template.html');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const tpl = await res.text();
    app.innerHTML = tpl;
  } catch (err) {
    console.error('Không tải được template.html:', err);
    document.body.innerHTML = '<p>Không thể tải giao diện chung.</p>';
    return;
  }

  // 2. Copy nội dung riêng của trang vào #contentTab
  const contentTab = document.getElementById('contentTab');
  contentTab.innerHTML = temp.innerHTML;
  temp.remove(); // xoá placeholder

  // 3. Khởi tạo header + cart UI
  initHeader();
  cart();

  // 4. Render tất cả sản phẩm có category = 'rackets'
  renderRackets();
}

function renderRackets() {
  const container = document.querySelector('.racket-list');
  // Lọc danh sách vợt
  const rackets = products.filter(p => p.category && p.category.toLowerCase() === 'rackets');

  if (rackets.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#555;">Chưa có sản phẩm nào.</p>';
    return;
  }

  // Tạo markup dạng lưới
  container.innerHTML = `
    <div class="grid-rackets">
      ${rackets.map(p => `
        <div class="racket-card">
          <a href="./detail.html?id=${p.id}">
            <div class="racket-img">
              <img src="${p.image}" alt="${escapeHtml(p.name)}" />
            </div>
            <h2 class="racket-name">${escapeHtml(p.name)}</h2>
            <div class="racket-price">${formatCurrency(p.price)}</div>
          </a>
        </div>
      `).join('')}
    </div>
  `;
}

// Format số thành chuỗi tiền tệ (Ví dụ 2500000 → "2.500.000 ₫")
function formatCurrency(n) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n);
}

// Đơn giản escape ký tự để tránh XSS
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

loadTemplate();
