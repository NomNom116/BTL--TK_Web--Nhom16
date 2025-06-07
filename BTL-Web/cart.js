// cart.js
import products from './products.js';

export default function cart() {
  const body             = document.body;
  const listCart         = document.querySelector('.cart-items');
  const iconCart         = document.getElementById('cartBtn');
  const badge            = document.querySelector('.cart-count');
  const itemCountEl      = document.querySelector('.item-count');
  const subtotalAmountEl = document.querySelector('.subtotal-amount');
  const closeBtn         = document.querySelector('.close-cart');
  const checkoutBtn      = document.querySelector('.btn-checkout');

  // Nếu thiếu bất kỳ phần tử quan trọng nào thì abort
  if (!listCart || !iconCart || !badge || !itemCountEl || !subtotalAmountEl) return;

  // Load cart từ localStorage hoặc tạo mới
  let cartArr = JSON.parse(localStorage.getItem('cart')) || [];

  // Lưu cartArr & render lại
  function saveAndRender() {
    localStorage.setItem('cart', JSON.stringify(cartArr));
    renderCart();
  }

  // Format tiền
  function fmt(price) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  }

  // Vẽ lại giỏ hàng
  function renderCart() {
    listCart.innerHTML = '';
    let totalQty = 0;
    let totalPrice = 0;

    if (cartArr.length === 0) {
      listCart.innerHTML = '<p class="empty-cart">Giỏ hàng trống.</p>';
    } else {
      cartArr.forEach(item => {
        const prod = products.find(p => String(p.id) === String(item.id));
        if (!prod) return;

        totalQty += item.quantity;
        totalPrice += prod.price * item.quantity;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.dataset.id = prod.id;
        div.innerHTML = `
          <div class="item-image">
            <img src="${prod.image}" alt="${prod.name}">
          </div>
          <div class="item-details">
            <h3 class="item-title">${prod.name}</h3>
            <p class="item-price">${fmt(prod.price * item.quantity)}</p>
            <div class="item-qty">
              <button class="qty-minus" data-id="${prod.id}">−</button>
              <span class="qty-number">${item.quantity}</span>
              <button class="qty-plus"  data-id="${prod.id}">+</button>
              <button class="item-delete" data-id="${prod.id}">🗑️</button>
            </div>
          </div>
        `;
        listCart.appendChild(div);
      });
    }

    badge.textContent            = totalQty;
    itemCountEl.textContent      = totalQty;
    subtotalAmountEl.textContent = fmt(totalPrice);
  }

  // Thay đổi quantity (nếu qty ≤0 thì xóa)
  function updateItem(id, qty) {
    id = String(id);
    const idx = cartArr.findIndex(i => String(i.id) === id);
    if (qty <= 0) {
      if (idx > -1) cartArr.splice(idx, 1);
    } else if (idx === -1) {
      cartArr.push({ id, quantity: qty });
    } else {
      cartArr[idx].quantity = qty;
    }
    saveAndRender();
  }

  // --- Event listeners ---

  // Toggle slide-out cart
  iconCart.addEventListener('click', e => {
    e.stopPropagation();
    body.classList.toggle('activeTabCart');
  });
  closeBtn.addEventListener('click', () => {
    body.classList.remove('activeTabCart');
  });
  document.addEventListener('click', e => {
    if (
      body.classList.contains('activeTabCart') &&
      !document.querySelector('.cartTab').contains(e.target) &&
      e.target !== iconCart
    ) {
      body.classList.remove('activeTabCart');
    }
  });

  // Checkout
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      body.classList.remove('activeTabCart');
      window.location.href = 'checkout.html';
    });
  }

  // Delegate cho tăng/giảm/xóa trong cart
  listCart.addEventListener('click', e => {
    const id = e.target.dataset.id;
    if (!id) return;
    const idx = cartArr.findIndex(i => String(i.id) === id);
    const curQty = idx > -1 ? cartArr[idx].quantity : 0;

    if (e.target.matches('.qty-minus')) {
      updateItem(id, curQty - 1);
    } else if (e.target.matches('.qty-plus')) {
      updateItem(id, curQty + 1);
    } else if (e.target.matches('.item-delete')) {
      updateItem(id, 0);
    }
  });

  // Bắt tất cả nút “Add to Bag” có class .btn-addcart
  document.querySelectorAll('.btn-addcart').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const idx = cartArr.findIndex(i => String(i.id) === id);
      const curQty = idx > -1 ? cartArr[idx].quantity : 0;
      updateItem(id, curQty + 1);
      // Mở cart panel ngay khi thêm
      body.classList.add('activeTabCart');
    });
  });

  // Lần đầu render
  renderCart();
}
