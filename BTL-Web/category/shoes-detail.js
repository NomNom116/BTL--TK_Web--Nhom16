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
    initCart();
    loadDetail();
  })
  .catch(err => console.error('Error loading template:', err));

function loadDetail() {
  const id = new URLSearchParams(window.location.search).get('id');
  const prod = products.find(p => p.id == id && p.category === 'shoes');

  if (!prod) {
    alert('Product not found!');
    window.location.href = 'shoes.html';  // Trở về trang danh sách giày
    return;
  }

  const detail = document.querySelector('.detail');
  detail.querySelector('.image img').src = prod.image;
  detail.querySelector('.image img').alt = prod.name;
  detail.querySelector('.name').innerText = prod.name;
  detail.querySelector('.price').innerText = prod.price + 'đ';
  detail.querySelector('.description').innerText = prod.description || 'No description available.';
  detail.querySelector('.addCart').dataset.id = prod.id;

  renderSimilarProducts(prod.id);
}

function renderSimilarProducts(currentId) {
  const container = document.querySelector('.listProduct');
  const shoeProducts = products.filter(p => p.category === 'shoes' && p.id != currentId);

  container.innerHTML = shoeProducts.map(p => `
    <div class="item">
      <a href="shoes-detail.html?id=${p.id}">
        <img src="${p.image}" alt="${p.name}">
      </a>
      <h2>${p.name}</h2>
      <div class="price">${p.price}đ</div>
      <button class="addCart" data-id="${p.id}">Add To Cart</button>
    </div>
  `).join('');

  // Gắn lại sự kiện "Add To Cart" cho các nút vừa tạo
  initCart();
}
