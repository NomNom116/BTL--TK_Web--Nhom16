import products from '../products.js';
import initCart from '../cart.js';
import { initHeader } from '../header.js';

const app = document.getElementById('app');
const temp = document.getElementById('temporaryContent');

fetch('../template.html')
  .then(res => res.text())
  .then(html => {
    app.innerHTML = html;
    document.getElementById('contentTab').innerHTML = temp.innerHTML;
    temp.innerHTML = '';

    initHeader();
    
    const shoeProducts = products.filter(p => p.category === 'shoes');
    renderProducts(shoeProducts);
    initCart();
    initFilter(shoeProducts);
  })
  .catch(err => console.error('Error loading template:', err));

function renderProducts(list) {
  const container = document.querySelector('.listProduct');
  container.innerHTML = list
    .map(p => `
      <div class="item">
        <a href="shoes-detail.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}" />
        </a>
        <h2>${p.name}</h2>
        <div class="price">${p.price}đ</div>
        <button class="addCart" data-id="${p.id}">Add To Cart</button>
      </div>
    `).join('');
}

function initFilter(baseList) {
  const searchInput = document.getElementById('searchInput');
  const priceFilter = document.getElementById('priceFilter');

  const params = new URLSearchParams(window.location.search);
  const initialQ = params.get('q') || '';
  searchInput.value = initialQ;
  priceFilter.value = params.get('price') || 'all';

  const applyFilter = () => {
    const kw = searchInput.value.trim().toLowerCase();
    const priceSel = priceFilter.value;

    const filtered = baseList.filter(p => {
      const nameMatch = p.name.toLowerCase().includes(kw);
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
    initCart();
  };

  applyFilter();

  searchInput.addEventListener('input', () => {
    applyFilter();
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
