import products from './products.js';
import cart from './cart.js';

const appD = document.getElementById('app');
const tempD = document.getElementById('temporaryContent');

const loadDetail = () => {
  fetch('template.html')
    .then(res => res.text())
    .then(html => {
      appD.innerHTML = html;
      document.getElementById('contentTab').innerHTML = tempD.innerHTML;
      tempD.innerHTML = null;
      cart();
      initDetail();
    });
};
loadDetail();

const initDetail = () => {
  const id = new URLSearchParams(window.location.search).get('id');
  const prod = products.find(x => x.id == id);
  if (!prod) return window.location.href = 'index.html';

  const detail = document.querySelector('.detail');
  detail.querySelector('.image img').src = prod.image;
  detail.querySelector('.name').innerText = prod.name;
  detail.querySelector('.price').innerText = 'VND' + prod.price;
  detail.querySelector('.description').innerText = prod.description;
  detail.querySelector('.addCart').dataset.id = prod.id;

  const listSimilar = document.querySelector('.listProduct');
  listSimilar.innerHTML = '';
  products.forEach(p => {
    const el = document.createElement('div');
    el.classList.add('item');
    el.innerHTML = `
      <a href="detail.html?id=${p.id}">
        <img src="${p.image}" alt="${p.name}" />
      </a>
      <h2>${p.name}</h2>
      <div class="price">VND ${p.price}</div>
      <button class="addCart" data-id="${p.id}">Add To Cart</button>`;
    listSimilar.appendChild(el);
  });
};