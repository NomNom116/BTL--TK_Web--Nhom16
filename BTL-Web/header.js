// header.js
// Export function to initialize header, search, user menu, and cart toggle
export function initHeader() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  if (!menuToggle) return;
  menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });

  // Toggle search bar
  const searchBtn = document.getElementById('searchBtn');
  const searchContainer = document.getElementById('searchContainer');
  const searchForm = document.getElementById('searchForm');
  const searchField = document.getElementById('searchField');
  if (searchBtn && searchContainer && searchForm && searchField) {
    searchBtn.addEventListener('click', e => {
      e.stopPropagation();
      searchContainer.classList.toggle('active');
      if (searchContainer.classList.contains('active')) searchField.focus();
    });
    document.addEventListener('click', e => {
      if (!searchContainer.contains(e.target) && e.target !== searchBtn) {
        searchContainer.classList.remove('active');
      }
    });
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      const q = searchField.value.trim();
      if (q) window.location.href = `category.html?q=${encodeURIComponent(q)}`;
    });
  }

  // User dropdown menu
  const userBtn = document.getElementById('userBtn');
  const userMenu = document.getElementById('userMenu');
  if (userBtn && userMenu) {
    userBtn.addEventListener('click', e => {
      e.stopPropagation();
      userMenu.innerHTML = '';
      const user = JSON.parse(localStorage.getItem('loggedInUser'));
      if (user) {
        const profileBtn = document.createElement('button');
        profileBtn.textContent = 'Profile';
        profileBtn.addEventListener('click', () => window.location.href = 'profile.html');
        const logoutBtn = document.createElement('button');
        logoutBtn.textContent = 'Logout';
        logoutBtn.addEventListener('click', () => {
          localStorage.removeItem('loggedInUser');
          window.location.href = 'index.html';
        });
        userMenu.append(profileBtn, logoutBtn);
      } else {
        const loginBtn = document.createElement('button');
        loginBtn.textContent = 'Login';
        loginBtn.addEventListener('click', () => window.location.href = 'login.html');
        userMenu.append(loginBtn);
      }
      userMenu.classList.toggle('active');
    });
    document.addEventListener('click', e => {
      if (!userMenu.contains(e.target) && e.target !== userBtn) {
        userMenu.classList.remove('active');
      }
    });
  }
}
