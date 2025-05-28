// index.js
import products from './products.js';
import cart from './cart.js';
import { initHeader } from './header.js';

const app = document.getElementById('app');
const tempContent = document.getElementById('temporaryContent');

async function loadTemplate() {
  try {
    // 1) Lấy template
    const res  = await fetch('template.html');
    const html = await res.text();

    // 2) Inject vào DOM
    app.innerHTML = html;
    document.getElementById('contentTab').innerHTML = tempContent.innerHTML;
    tempContent.innerHTML = '';

    // 3) Khởi các tương tác chung: header (search/user), cart slide-out
    initHeader();
    cart();

    // 4) Khởi danh sách sản phẩm
    initApp();

  } catch (err) {
    console.error('Failed to load template:', err);
  }
}

function initApp() {
  const list = document.querySelector('.listProduct');
  list.innerHTML = '';
  products.forEach(p => {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
      <a href="detail.html?id=${p.id}">
        <img src="${p.image}" alt="${p.name}" />
      </a>
      <h2>${p.name}</h2>
      <div class="price">$${p.price}</div>
      <button class="addCart" data-id="${p.id}">Add To Cart</button>
    `;
    list.appendChild(item);
  });
}

// Bắt đầu load
loadTemplate();
