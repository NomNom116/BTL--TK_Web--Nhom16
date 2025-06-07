// women-bottoms.js
import products from './products.js';
import { initHeader } from './header.js';
import cart from './cart.js';

async function loadTemplate() {
  const app = document.getElementById('app');
  try {
    app.innerHTML = await (await fetch('template.html')).text();
  } catch {
    app.innerHTML = '<p>Không thể tải giao diện chung.</p>';
    return;
  }

  initHeader();
  cart();

  const tmp = document.getElementById('temporaryContent');
  document.getElementById('contentTab').innerHTML = tmp.innerHTML;
  tmp.remove();

  renderGrid();
}

function renderGrid() {
  const list = products.filter(p =>
    p.category === 'women' &&
    p.subCategory && p.subCategory.toLowerCase() === 'bottoms'
  );
  const container = document.querySelector('.grid-rackets');
  container.innerHTML = list.map(p => `
    <div class="racket-card">
      <a href="detail.html?id=${p.id}">
        <div class="racket-img">
          <img src="${p.image}" alt="${p.name}" />
        </div>
        <h3 class="racket-name">${p.name}</h3>
        <div class="racket-price">
          ${new Intl.NumberFormat('vi-VN', {style:'currency',currency:'VND'}).format(p.price)}
        </div>
      </a>
    </div>
  `).join('');
  cart();
}

loadTemplate();
