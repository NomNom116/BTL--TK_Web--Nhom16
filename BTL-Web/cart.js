// cart.js
import products from './products.js';

export default function cart() {
  const listCart     = document.querySelector('.cart-items');
  const itemCountEl  = document.querySelector('.item-count');
  const subtotalEl   = document.querySelector('.subtotal-amount');
  const checkoutBtn  = document.querySelector('.btn-checkout');

  if (!listCart || !itemCountEl || !subtotalEl || !checkoutBtn) {
    console.error('cart.js: thiếu phần tử DOM.');
    return;
  }

  let cartArr = JSON.parse(localStorage.getItem('cart')) || [];

  const formatCurrency = n =>
    new Intl.NumberFormat('vi-VN',{ style:'currency', currency:'VND' }).format(n);

  function renderCart() {
    listCart.innerHTML = '';
    let totalQty = 0, totalPrice = 0;

    if (cartArr.length === 0) {
      listCart.innerHTML = `<li class="empty">Giỏ hàng trống.</li>`;
      itemCountEl.textContent = 0;
      subtotalEl.textContent  = '0.00 ₫';
      checkoutBtn.classList.add('disabled');
      return;
    }

    cartArr.forEach(item => {
      const prod = products.find(p => String(p.id) === String(item.product_id));
      if (!prod) return;
      totalQty    += item.quantity;
      totalPrice  += prod.price * item.quantity;

      const li = document.createElement('li');
      li.className = 'cart-item';
      li.dataset.id = prod.id;
      li.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}" class="item-img">
        <div class="item-info">
          <p class="item-name">${prod.name}</p>
            <div class="cart-qty-control">
              <button class="cart-btn-decrease" data-id="${prod.id}">−</button>
              <span class="qty-number">${item.quantity}</span>
              <button class="cart-btn-increase" data-id="${prod.id}">+</button>
            </div>
            <button class="cart-btn-remove" data-id="${prod.id}" aria-label="Xóa">✕</button>
          <p class="item-price">${formatCurrency(prod.price * item.quantity)}</p>
        </div>
      `;
      listCart.appendChild(li);
    });

    itemCountEl.textContent = totalQty;
    subtotalEl.textContent  = formatCurrency(totalPrice);
    checkoutBtn.classList.remove('disabled');
  }

  function updateQty(id, newQty) {
    const idx = cartArr.findIndex(i => String(i.product_id) === String(id));
    if (newQty < 1) {
      if (idx > -1) cartArr.splice(idx, 1);
    } else if (idx === -1) {
      cartArr.push({ product_id: id, quantity: newQty });
    } else {
      cartArr[idx].quantity = newQty;
    }
    localStorage.setItem('cart', JSON.stringify(cartArr));
    renderCart();
  }

  listCart.addEventListener('click', e => {
    const id   = e.target.dataset.id;
    if (!id) return;
    const curr = cartArr.find(i => String(i.product_id) === id)?.quantity || 0;
    if (e.target.matches('.qty-minus')) updateQty(id, curr - 1);
    if (e.target.matches('.qty-plus'))  updateQty(id, curr + 1);
  });

  renderCart();
}

document.addEventListener('DOMContentLoaded', cart);
