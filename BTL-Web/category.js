import products from './products.js';
import cart from './cart.js';

const app = document.getElementById('app');
const temporaryContent = document.getElementById('temporaryContent');

fetch('/template.html')
    .then(res => res.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initFilter();
        renderProducts(products);
  });

function renderProducts(productList) {
    const listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = '';

    productList.forEach(product => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
        <a href="detail.html?id=${product.id}">
        <img src="${product.image}">
        </a>
        <h2>${product.name}</h2>
        <div class="price">$${product.price}</div>
        <button class="addCart" data-id="${product.id}">Add To Cart</button>
    `;
    listProductHTML.appendChild(item);
  });
}

function initFilter() {
    const searchInput = document.getElementById('searchInput');
    const priceFilter = document.getElementById('priceFilter');

    function applyFilter() {
    const keyword = searchInput.value.toLowerCase();
    const price = priceFilter.value;

    const filtered = products.filter(p => {
        const matchesName = p.name.toLowerCase().includes(keyword);
        const matchesPrice =
        price === 'all' ||
        (price === 'under200' && p.price < 200) ||
        (price === '200to250' && p.price >= 200 && p.price <= 250) ||
        (price === 'above250' && p.price > 250);
        return matchesName && matchesPrice;
    });
    renderProducts(filtered);
  }

    searchInput.addEventListener('input', applyFilter);
    priceFilter.addEventListener('change', applyFilter);
}
