// support.js
import cart from './cart.js';
import { initHeader } from './header.js';

const app = document.getElementById('app');
const temp = document.getElementById('temporaryContent');

async function loadTemplate() {
  try {
    // 1) Fetch template.html (chứa header + footer)
    const res = await fetch('template.html');
    const html = await res.text();
    app.innerHTML = html;

    // 2) Inject nội dung Support (từ temp vào #contentTab)
    const contentTab = document.getElementById('contentTab');
    contentTab.innerHTML = temp.innerHTML;
    // xóa tạm (đỡ bị hiển thị dưới chân trang)
    temp.innerHTML = '';

    // 3) Khởi header (search, dropdown user, menu mobile…)
    initHeader();

    // 4) Khởi cart (nếu có)
    cart();

    // 5) Khởi sự kiện cho FAQ toggle
    initFAQ();
  } catch (err) {
    console.error('Could not load template:', err);
  }
}

// Hàm hỗ trợ toggle show/hide cho FAQ
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const icon = button.querySelector('.faq-toggle-icon');
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.textContent = '+';
      } else {
        // Đóng tất cả answer khác
        document.querySelectorAll('.faq-answer').forEach(ans => (ans.style.maxHeight = null));
        document.querySelectorAll('.faq-toggle-icon').forEach(ic => (ic.textContent = '+'));

        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '−';
      }
    });
  });
}

// Kick off
loadTemplate();
