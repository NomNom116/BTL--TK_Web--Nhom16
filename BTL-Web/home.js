// home.js
// This script loads the shared header template, injects the hero content, and initializes header & cart functionality.
import cart from './cart.js';
import { initHeader } from './header.js';

const app = document.getElementById('app');
const temp = document.getElementById('temporaryContent');

async function loadTemplate() {
  try {
    // 1) Fetch and inject the global header template
    const res  = await fetch('template.html');
    const html = await res.text();
    app.innerHTML = html;

    // 2) Move the hero content into the template's content area
    const contentTab = document.getElementById('contentTab');
    contentTab.innerHTML = temp.innerHTML;
    temp.innerHTML = '';

    // 3) Initialize header interactions (search, user dropdown)
    initHeader();

    // 4) Initialize cart slide-out panel functionality
    cart();

  } catch (err) {
    console.error('Could not load template:', err);
  }
}

// Kick off the process
loadTemplate();
