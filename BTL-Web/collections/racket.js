import products from './products.js';
import initCart from './cart.js';
import { initHeader } from './header.js';

const app = document.getElementById('app');
const temp = document.getElementById('temporaryContent');

fetch('template.html')
  .then(res => res.text())
  .then(html => {
    app.innerHTML = html;
    document.getElementById('contentTab').innerHTML = temp.innerHTML;
    temp.innerHTML = '';

    initHeader();

    // Render lần đầu với toàn bộ products
    renderProducts(products);

    // Gắn event-delegation cho nút AddToCart
    initCart();

    // Khởi tạo filter (sẽ gọi renderProducts() lại khi filter thay đổi)
    initFilter();
  })
  .catch(err => console.error('Error loading template:', err));

function renderProducts(list) {
  const container = document.querySelector('.listProduct');
  container.innerHTML = list
    .map(p => `
      <div class="item">
        <a href="detail.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}" />
        </a>
        <h2>${p.name}</h2>
        <div class="price">${p.price}đ</div>
        <button class="addCart" data-id="${p.id}">Add To Cart</button>
      </div>
    `).join('');
}

// Initializes filters: search & price
function initFilter() {
  const searchInput = document.getElementById('searchInput');
  const priceFilter = document.getElementById('priceFilter');

  // Đọc parameter q từ URL
  const params = new URLSearchParams(window.location.search);
  const initialQ = params.get('q') || '';

  // Gán giá trị ban đầu
  searchInput.value = initialQ;
  priceFilter.value = params.get('price') || 'all';

  // Hàm apply filter
  const applyFilter = () => {
    const kw = searchInput.value.trim().toLowerCase();
    const priceSel = priceFilter.value;

    const filtered = products.filter(p => {
      // Filter theo tên
      const nameMatch = p.name.toLowerCase().includes(kw);
      // Filter theo giá
      let priceMatch = false;
      switch (priceSel) {
        case 'under2000000':
          priceMatch = p.price < 2000000;
          break;
        case '2000000to5000000':
          priceMatch = p.price >= 2000000 && p.price <= 5000000;
          break;
        case 'above5000000':
          priceMatch = p.price > 5000000;
          break;
        default:
          priceMatch = true;
      }
      return nameMatch && priceMatch;
    });

    renderProducts(filtered);
  };

  // Gọi filter lần đầu
  applyFilter();

  // Listener cho search & price
  searchInput.addEventListener('input', () => {
    applyFilter();
    // Cập nhật URL mà không reload
    const u = new URL(window.location);
    u.searchParams.set('q', searchInput.value);
    window.history.replaceState({}, '', u);
  });

  priceFilter.addEventListener('change', () => {
    applyFilter();
    const u = new URL(window.location);
    u.searchParams.set('price', priceFilter.value);
    window.history.replaceState({}, '', u);
  });
}