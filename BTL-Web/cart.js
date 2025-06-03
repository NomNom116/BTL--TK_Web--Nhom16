// cart.js
import products from './products.js';
function cart() {
  const listCart         = document.querySelector('.cart-items');       // container cho .cart-item
  const iconCart         = document.querySelector('#cartBtn');          // icon giỏ hàng
  const badge            = iconCart.querySelector('.cart-count');       // chấm/badge số lượng
  const itemCountEl      = document.querySelector('.item-count');       // <span class="item-count">
  const subtotalAmountEl = document.querySelector('.subtotal-amount');  // <span class="subtotal-amount">
  const body             = document.body;
  const closeBtn         = document.querySelector('.close-cart');       // nút ×
  const checkBtn         = document.querySelector('.btn-checkout');     // nút Checkout

  let cartArr = JSON.parse(localStorage.getItem('cart')) || [];
  function updateCart(id, qty) {
    const prodId = Number(id);
    const idx = cartArr.findIndex(item => item.product_id === prodId);

    if (qty <= 0) {
      // xóa item đó khỏi cartArr
      if (idx > -1) cartArr.splice(idx, 1);
    } else if (idx < 0) {
      // chưa có trong cartArr, push mới
      cartArr.push({ product_id: prodId, quantity: qty });
    } else {
      // đã có, cập nhật quantity
      cartArr[idx].quantity = qty;
    }

    // lưu lại localStorage và render lại
    localStorage.setItem('cart', JSON.stringify(cartArr));
    render();
  }

  /**
   * Rút gọn text nếu quá dài (để không tràn layout)
   * @param {string} text 
   * @param {number} maxLength 
   * @returns {string}
   */
  function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength - 1) + '…' : text;
  }

  /**
   * Vẽ nội dung giỏ hàng lên DOM
   */
  function render() {
    // 3) Reset nội dung
    listCart.innerHTML = '';

    let totalQty = 0;
    let totalPrice = 0;

    // Nếu giỏ trống, hiển thị message
    if (cartArr.length === 0) {
      listCart.innerHTML = `
        <div class="empty-cart">
          <p>Your cart is empty.</p>
        </div>
      `;
    } else {
      // Với mỗi item trong cartArr
      cartArr.forEach(item => {
        const prod = products.find(p => p.id === item.product_id);
        if (!prod) return;

        totalQty += item.quantity;
        totalPrice += prod.price * item.quantity;

        // Tạo one .cart-item block
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.dataset.id = prod.id;

        // Inner HTML theo layout mới
        div.innerHTML = `
          <div class="item-image">
            <img src="${prod.image}" alt="${prod.name}" />
          </div>
          <div class="item-details">
            <h3 class="item-title">${truncateText(prod.name, 60)}</h3>
            <p class="item-subtitle">${prod.subtitle || ''}</p>
            <p class="item-price">${(prod.price * item.quantity).toFixed(2)}đ</p>
            <div class="item-qty">
              <label>Quantity:</label>
              <button class="qty-minus" data-id="${prod.id}">&minus;</button>
              <span class="qty-number">${item.quantity}</span>
              <button class="qty-plus" data-id="${prod.id}">&plus;</button>
              <button class="item-delete" data-id="${prod.id}" aria-label="Remove">&#128465;</button>
            </div>
          </div>
        `;

        listCart.appendChild(div);
      });
    }

    // 4) Cập nhật badge, item-count và subtotal-amount
    badge.textContent = totalQty;
    itemCountEl.textContent = totalQty;
    subtotalAmountEl.textContent = `${totalPrice.toFixed(2)}đ`;
  }

  // 5) Các sự kiện mở/đóng cart, chuyển trang
  iconCart.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
  });
  closeBtn.addEventListener('click', () => {
    body.classList.remove('activeTabCart');
  });
  checkBtn.addEventListener('click', () => {
    body.classList.remove('activeTabCart');
    window.location.href = 'checkout.html';
  });

  // 6) Delegate click cho các nút tăng, giảm, xóa, và addCart
  document.addEventListener('click', e => {
    const id = e.target.dataset.id;
    if (!id) return;

    // Tìm index hiện tại (nếu có) trong cartArr
    const idx = cartArr.findIndex(i => i.product_id === Number(id));
    const currentQty = idx > -1 ? cartArr[idx].quantity : 0;

    // If click “Add to Cart” button trên trang product/category
    if (e.target.classList.contains('addCart')) {
      updateCart(id, currentQty + 1);
      return; // ngăn chồng logic xuống dưới
    }

    // Giảm số lượng
    if (e.target.classList.contains('qty-minus')) {
      updateCart(id, currentQty - 1);
    }
    // Tăng số lượng
    if (e.target.classList.contains('qty-plus')) {
      updateCart(id, currentQty + 1);
    }
    // Xóa item
    if (e.target.classList.contains('item-delete')) {
      updateCart(id, 0);
    }
  });

  // 7) Lần đầu tiên gọi khi khởi cart
  render();
}

export default cart;
