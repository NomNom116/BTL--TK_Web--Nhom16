// deals.js
import products from './products.js';
import { initHeader } from './header.js';
import cart from './cart.js';

const app = document.getElementById('app');
const temp = document.getElementById('temporaryContent');

async function loadTemplate() {
  try {
    // 1) Lấy template chung
    const res = await fetch('./template.html');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    app.innerHTML = await res.text();
  } catch (err) {
    console.error('Không tải được template.html:', err);
    document.body.innerHTML = '<p>Không thể tải giao diện chung.</p>';
    return;
  }

  // 2) Chèn nội dung riêng vào #contentTab
  const contentTab = document.getElementById('contentTab');
  contentTab.innerHTML = temp.innerHTML;
  temp.remove();

  // 3) Khởi tạo header + cart UI
  initHeader();
  cart();

  // 4) Render sản phẩm giảm giá
  renderDeals();
}

function renderDeals() {
  const container = document.querySelector('.deals-list');

  // Lọc ra chỉ sản phẩm có salePrice < price
  const deals = products.filter(
    p => p.salePrice !== undefined && p.salePrice < p.price
  );

  if (deals.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#555;">Hiện không có ưu đãi nào.</p>';
    return;
  }

  // Tạo markup dạng grid
  container.innerHTML = `
    <div class="grid-deals">
      ${deals.map(p => `
        <div class="deal-card">
          <a href="./detail.html?id=${encodeURIComponent(p.id)}">
            <div class="deal-img">
              <img src="${p.image}" alt="${escapeHtml(p.name)}" />
            </div>
            <h2 class="deal-name">${escapeHtml(p.name)}</h2>
            <div class="deal-prices">
              <span class="price-old">${formatCurrency(p.price)}</span>
              <span class="price-sale">${formatCurrency(p.salePrice)}</span>
              <span class="deal-percent">-${calcDiscount(p.price, p.salePrice)}%</span>
            </div>
          </a>
        </div>
      `).join('')}
    </div>
  `;
}

// Tính % giảm giá (lấy phần nguyên)
function calcDiscount(orig, sale) {
  return Math.round(((orig - sale) / orig) * 100);
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
