import products from './products.js';

const cart = () => {
  const listCart = document.querySelector('.listCart');
  const iconCart = document.querySelector('.icon-cart');
  const badge = iconCart.querySelector('span');
  const body = document.querySelector('body');
  const closeBtn = document.querySelector('.close');
  const checkBtn = document.querySelector('.checkOut');
  let cartArr = [];

  iconCart.addEventListener('click', () => body.classList.toggle('activeTabCart'));
  closeBtn.addEventListener('click', () => body.classList.toggle('activeTabCart'));
  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      body.classList.remove('activeTabCart');
      window.location.href = 'checkout.html';
    });
  }

  const updateCart = (id, qty) => {
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
  };

  const render = () => {
    listCart.innerHTML = '';
    let totalQty = 0;
    cartArr.forEach(item => {
      const prod = products.find(p => p.id === item.product_id);
      if (!prod) return;
      totalQty += item.quantity;
      const div = document.createElement('div');
      div.classList.add('item');
      div.dataset.id = prod.id;
      div.innerHTML = `
        <div class="image"><img src="${prod.image}" alt="${prod.name}"/></div>
        <div class="name">${prod.name}</div>
        <div class="totalPrice">$${(prod.price * item.quantity).toFixed(2)}</div>
        <div class="quantity">
          <span class="minus" data-id="${prod.id}">&lt;</span>
          <span>${item.quantity}</span>
          <span class="plus" data-id="${prod.id}">&gt;</span>
        </div>
        <button class="deleteBtn" data-id="${prod.id}">Delete</button>`;
      listCart.appendChild(div);
    });
    badge.innerText = totalQty;
  };

  document.addEventListener('click', e => {
    const id = e.target.dataset.id;
    if (!id) return;
    const idx = cartArr.findIndex(i => i.product_id === Number(id));
    if (e.target.classList.contains('addCart')) updateCart(id, idx < 0 ? 1 : cartArr[idx].quantity + 1);
    if (e.target.classList.contains('minus')) updateCart(id, (idx > -1 ? cartArr[idx].quantity - 1 : 0));
    if (e.target.classList.contains('plus')) updateCart(id, (idx > -1 ? cartArr[idx].quantity + 1 : 1));
    if (e.target.classList.contains('deleteBtn')) updateCart(id, 0);
  });

  const init = () => {
    cartArr = JSON.parse(localStorage.getItem('cart')) || [];
    render();
  };
  init();
};

export default cart;