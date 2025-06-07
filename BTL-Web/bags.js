// bags.js
import products from './products.js';
import { initHeader } from './header.js';
import cart from './cart.js';

const app = document.getElementById('app');
const temp = document.getElementById('temporaryContent');

async function loadTemplate() {
  try {
    // 1) Fetch template chung
    const res = await fetch('./template.html');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    app.innerHTML = await res.text();
  } catch (err) {
    console.error('Không tải được template.html:', err);
    document.body.innerHTML = '<p>Không thể tải giao diện chung.</p>';
    return;
  }

  // 2) Chèn nội dung riêng vào #contentTab rồi xoá placeholder
  const contentTab = document.getElementById('contentTab');
  contentTab.innerHTML = temp.innerHTML;
  temp.remove();

  // 3) Khởi tạo header + cart UI
  initHeader();
  cart();

  // 4) Render danh sách túi (lọc theo category = 'bags')
  renderBags();
}

function renderBags() {
  const container = document.querySelector('.bag-list');

  // Lọc ra chỉ sản phẩm có category = 'bags'
  const bags = products.filter(
    p => p.category && p.category.toLowerCase() === 'bags'
  );

  if (bags.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#555;">Chưa có sản phẩm nào.</p>';
    return;
  }

  // Tạo markup dạng grid
  container.innerHTML = `
    <div class="grid-bags">
      ${bags.map(p => `
        <div class="bag-card">
          <a href="./detail.html?id=${p.id}">
            <div class="bag-img">
              <img src="${p.image}" alt="${escapeHtml(p.name)}" />
            </div>
            <h2 class="bag-name">${escapeHtml(p.name)}</h2>
            <div class="bag-price">${formatCurrency(p.price)}</div>
          </a>
        </div>
      `).join('')}
    </div>
  `;
}

// Format số thành "x.xxx.xxx ₫"
function formatCurrency(n) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n);
}

// Escape ký tự để tránh XSS
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

loadTemplate();
