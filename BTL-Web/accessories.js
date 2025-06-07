// accessories.js
import products from './products.js';
import { initHeader } from './header.js';
import cart from './cart.js';

async function loadTemplate() {
  try {
    // Lấy template chung (header/nav/footer + <div id="contentTab">…</div>)
    const res = await fetch('./template.html');
    if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);
    const html = await res.text();
    document.getElementById('app').innerHTML = html;
  } catch (err) {
    console.error('Không load được template.html:', err);
    document.body.innerHTML = '<p>Xin lỗi, không thể tải khung chung trang.</p>';
    return;
  }

  initHeader();
  cart();
  renderAccessories();
}

function renderAccessories() {
  const container = document.getElementById('contentTab');
  if (!container) {
    console.error('Không tìm thấy #contentTab trong template.html');
    return;
  }

  // Lọc ra chỉ những product có category = 'accessories' (ignore case)
  const allAcc = products.filter(
    p => p.category && p.category.toLowerCase() === 'accessories'
  );

  if (allAcc.length === 0) {
    container.innerHTML = '<p>Chưa có sản phẩm Accessories nào.</p>';
    return;
  }

  // Các subCategory theo thứ tự muốn hiển thị
  const subcategories = [
    'Grip & Overgrip',
    'Headband & Wristband',
    'Racquet Bag',
    'Hat',
    'Bottle'
  ];

  let markup = '<h1 class="accessories-page">Accessories</h1>';

  subcategories.forEach(subcat => {
    // **Chú ý: đổi p.subcategory → p.subCategory**
    const arr = allAcc.filter(p => p.subCategory === subcat);
    if (arr.length === 0) return;

    markup += `
      <div class="accessory-group">
        <h2>${subcat}</h2>
        <div class="horizontal-slider">
    `;

    arr.forEach(prod => {
      const priceHTML = prod.salePrice
        ? `<span class="price-sale">${formatCurrency(prod.salePrice)}</span>
           <span class="price-old">${formatCurrency(prod.price)}</span>`
        : `<span class="price-sale">${formatCurrency(prod.price)}</span>`;

      markup += `
        <div class="accessory-card">
          <a href="./detail.html?id=${prod.id}">
            <div class="card-img">
              <img src="${prod.image}" alt="${escapeHtml(prod.name)}">
            </div>
            <div class="card-info">
              <h3>${escapeHtml(prod.name)}</h3>
              <div class="price">${priceHTML}</div>
            </div>
          </a>
        </div>
      `;
    });

    markup += `
        </div> <!-- .horizontal-slider -->
      </div> <!-- .accessory-group -->
    `;
  });

  container.innerHTML = markup;
}


function formatCurrency(number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

// Đơn giản escape các ký tự đặc biệt tránh XSS
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Chạy
loadTemplate();
