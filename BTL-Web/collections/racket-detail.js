import products from './products.js';
import initCart from './cart.js';
import { initHeader } from './header.js';

const app = document.getElementById('app');
const temp = document.getElementById('temporaryContent');

// Load giao diện template.html
fetch('template.html')
  .then(res => res.text())
  .then(html => {
    app.innerHTML = html;
    document.getElementById('contentTab').innerHTML = temp.innerHTML;
    temp.innerHTML = '';

    initHeader();
    initCart();
    initDetail();
  })
  .catch(err => console.error('Error loading template:', err));

// Hàm hiển thị chi tiết sản phẩm
function initDetail() {
  const id = new URLSearchParams(window.location.search).get('id');
  const prod = products.find(p => p.id == id);

  if (!prod) {
    window.location.href = 'index.html'; // Chuyển hướng nếu không tìm thấy sản phẩm
    return;
  }

  const detail = document.querySelector('.detail');
  detail.querySelector('.image img').src = prod.image;
  detail.querySelector('.image img').alt = prod.name;
  detail.querySelector('.name').innerText = prod.name;
  detail.querySelector('.price').innerText = prod.price.toLocaleString() + 'đ';
  detail.querySelector('.description').innerText = prod.description;
  detail.querySelector('.addCart').dataset.id = prod.id;

  // Gợi ý các sản phẩm tương tự
  const listSimilar = document.querySelector('.listProduct');
  listSimilar.innerHTML = '';

  const similarProducts = products.filter(p => p.id != prod.id).slice(0, 4); // Lấy 4 sản phẩm khác

  similarProducts.forEach(p => {
    const el = document.createElement('div');
    el.classList.add('item');
    el.innerHTML = `
      <a href="detail.html?id=${p.id}">
        <img src="${p.image}" alt="${p.name}" />
      </a>
      <h2>${p.name}</h2>
      <div class="price">${p.price.toLocaleString()}đ</div>
      <button class="addCart" data-id="${p.id}">Add To Cart</button>
    `;
    listSimilar.appendChild(el);
  });
}
