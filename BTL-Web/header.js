// header.js
import products from './products.js';

export function initHeader() {
  const body = document.body;
  const burgerBtn = document.getElementById('burgerBtn');
  const mainNav = document.querySelector('.main-nav');
  const searchBtn = document.getElementById('searchBtn');
  const searchContainer = document.getElementById('searchContainer');
  const searchField = document.getElementById('searchField');
  const searchForm = document.getElementById('searchForm');
  const userBtn = document.getElementById('userBtn');
  const cartBtn = document.getElementById('cartBtn');
  const cartTab = document.querySelector('.cartTab');

  // Khởi tạo trạng thái ban đầu
  body.classList.remove('activeTabMenu', 'activeTabCart');
  if (searchContainer) searchContainer.classList.remove('active');

  // 1) Menu hamburger (off-canvas)
  if (burgerBtn && mainNav) {
    burgerBtn.addEventListener('click', e => {
      e.stopPropagation();
      body.classList.toggle('activeTabMenu');
    });
    document.addEventListener('click', e => {
      if (
        body.classList.contains('activeTabMenu') &&
        !mainNav.contains(e.target) &&
        e.target !== burgerBtn
      ) {
        body.classList.remove('activeTabMenu');
      }
    });
  }

  // 2) Search popup
  if (searchBtn && searchContainer && searchField && searchForm) {
    searchBtn.addEventListener('click', e => {
      e.stopPropagation();
      searchContainer.classList.toggle('active');
      if (searchContainer.classList.contains('active')) {
        searchField.focus();
      }
    });
    document.addEventListener('click', e => {
      if (
        searchContainer.classList.contains('active') &&
        !searchContainer.contains(e.target) &&
        e.target !== searchBtn
      ) {
        searchContainer.classList.remove('active');
      }
    });
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      const q = searchField.value.trim().toLowerCase();
      const prod = products.find(p => p.name.toLowerCase().includes(q));
      if (prod) {
        window.location.href = `detail.html?id=${prod.id}`;
      } else {
        alert(`Không tìm thấy: "${searchField.value}"`);
      }
      searchContainer.classList.remove('active');
    });
  }


  // 4) Slide-out cart
  if (cartBtn && cartTab) {
    cartBtn.addEventListener('click', e => {
      e.stopPropagation();
      body.classList.toggle('activeTabCart');
    });
    document.addEventListener('click', e => {
      if (
        body.classList.contains('activeTabCart') &&
        !cartTab.contains(e.target) &&
        e.target !== cartBtn
      ) {
        body.classList.remove('activeTabCart');
      }
    });
  }
}