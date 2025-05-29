import cart from './cart.js';
import { initHeader } from './header.js';

const app = document.getElementById('app');
const temp = document.getElementById('temporaryContent');

async function loadTemplate() {
  try {
    const res = await fetch('template.html');
    const html = await res.text();
    app.innerHTML = html;

    const contentTab = document.getElementById('contentTab');
    contentTab.innerHTML = temp.innerHTML;
    temp.innerHTML = '';

    initHeader();
    cart();
  } catch (err) {
    console.error('Could not load template:', err);
  }
}
loadTemplate();