import products from './products.js';

function cart() {
  const listCart     = document.querySelector('.cart-list');
  const iconCart     = document.querySelector('#cartBtn');
  const badge        = iconCart.querySelector('.cart-count');
  const body         = document.body;
  const closeBtn     = document.querySelector('.close-cart');
  const checkBtn     = document.querySelector('.btn-checkout');
  const totalPriceEl = document.querySelector('.total-price');

  let cartArr = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCart(id, qty) {
    const idx = cartArr.findIndex(i => i.product_id === Number(id));
    if (qty <= 0) {
      if (idx > -1) cartArr.splice(idx, 1);
    } else if (idx < 0) {
      cartArr.push({ product_id: Number(id), quantity: qty });
    } else {
      cartArr[idx].quantity = qty;
    }
    localStorage.setItem('cart', JSON.stringify(cartArr));
    render();
  }

  function render() {
    listCart.innerHTML = '';
    let totalQty   = 0;
    let totalPrice = 0;

    cartArr.forEach(item => {
      const prod = products.find(p => p.id === item.product_id);
      if (!prod) return;
      totalQty   += item.quantity;
      totalPrice += prod.price * item.quantity;

      const li = document.createElement('li');
      li.className = 'item';
      li.dataset.id = prod.id;
      li.innerHTML = `
      <li class="cart-item" data-id="${prod.id}">
      <div class="item-info">
        <img src="${prod.image}" alt="${prod.name}" class="item-img">
        <div class="item-details">
          <h3 class="item-name">${prod.name}</h3>
          <p class="item-model">Blade 100L v8</p> <!-- nếu có model hoặc thông tin phụ -->
        </div>
      </div>
      <div class="item-quantity">
        <button class="minus" data-id="${prod.id}">−</button>
        <span>${item.quantity}</span>
        <button class="plus"  data-id="${prod.id}">+</button>
      </div>
      <div class="item-price">${(prod.price * item.quantity).toLocaleString()}đ</div>
      </li>
      `;
      listCart.appendChild(li);
    });

    badge.textContent        = totalQty;
    totalPriceEl.textContent = `${totalPrice.toFixed(2)}đ`;
  }

  iconCart.addEventListener('click', () => body.classList.toggle('activeTabCart'));
  closeBtn.addEventListener('click', () => body.classList.remove('activeTabCart'));
  checkBtn.addEventListener('click', () => {
    body.classList.remove('activeTabCart');
    window.location.href = 'checkout.html';
  });

  document.addEventListener('click', e => {
    const id = e.target.dataset.id;
    if (!id) return;
    const idx = cartArr.findIndex(i => i.product_id === Number(id));
    if (e.target.classList.contains('addCart')) {
    // Lấy số lượng hiện tại (nếu có), +1 rồi update
    const existing = cartArr.find(i => i.product_id === Number(id));
    const currentQty = existing ? existing.quantity : 0;
    updateCart(id, currentQty + 1);
    return;
    }

    if (e.target.classList.contains('minus'))    updateCart(id, idx > -1 ? cartArr[idx].quantity - 1 : 0);
    if (e.target.classList.contains('plus'))     updateCart(id, idx > -1 ? cartArr[idx].quantity + 1 : 1);
    if (e.target.classList.contains('deleteBtn')) updateCart(id, 0);
  });

  render();
}

export default cart;