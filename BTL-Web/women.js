import products from './products.js';
import { initHeader } from './header.js';
import cart from './cart.js';

async function loadTemplate() {
    const app = document.getElementById('app');
    try {
        app.innerHTML = await (await fetch('template.html')).text();
    } catch {
        app.innerHTML = '<p>Không thể tải giao diện.</p>'; return;
    }
    initHeader(); cart();

    const ct = document.getElementById('contentTab');
    ct.innerHTML = document.getElementById('temporaryContent').innerHTML;

    renderSection('womens-tops-slider','women','tops','women-tops.html');
    renderSection('womens-bottoms-slider','women','bottoms','women-bottoms.html');
}

function renderSection(containerId, category, subCategory, seeAllLink) {
    const arr = products.filter(p=>
        p.category===category && p.subCategory.toLowerCase()===subCategory
    );
    const html = arr.map(p=>`
        <div class="accessory-card">
        <a href="detail.html?id=${p.id}">
            <div class="card-img"><img src="${p.image}" alt="${p.name}"></div>
            <div class="card-info">
            <h3>${p.name}</h3>
            <div class="price">
                ${new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(p.price)}
            </div>
            </div>
        </a>
        </div>
    `).join('') + `
        <div class="accessory-card see-all-card">
        <a href="${seeAllLink}" class="see-all-btn">See All</a>
        </div>
    `;
    document.getElementById(containerId).innerHTML = html;
}

loadTemplate();
