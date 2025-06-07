// shoes.js (cũng nằm cùng thư mục với shoes.html)
import products from './products.js';
import { initHeader } from './header.js';
import cart from './cart.js';

const app = document.getElementById('app');
const tmp = document.getElementById('temporaryContent');

async function loadTemplate() {
  let tpl;
  try {
    const res = await fetch('template.html');
    if (!res.ok) throw new Error(res.status);
    tpl = await res.text();
  } catch {
    app.innerHTML = '<p>Không thể tải giao diện chung.</p>';
    return;
  }
  app.innerHTML = tpl;

  // chèn nội dung tạm vào
  const ct = document.getElementById('contentTab');
  ct.innerHTML = tmp.innerHTML;
  tmp.remove();

  // khởi header + cart
  initHeader();
  cart();

  renderShoes();
}

function renderShoes() {
  const container = document.querySelector('.grid-shoes');
  const shoes = products.filter(p => p.category?.toLowerCase() === 'shoes');
  container.innerHTML = shoes.map(p => `
    <div class="racket-card">
      <a href="detail.html?id=${p.id}">
        <div class="racket-img">
          <img src="${p.image}" alt="${p.name}"/>
        </div>
        <h3 class="racket-name">${p.name}</h3>
        <div class="racket-price">
          ${new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(p.price)}
        </div>
      </a>
    </div>
  `).join('');
  // bind lại nút add-cart
  cart();
}

loadTemplate();
