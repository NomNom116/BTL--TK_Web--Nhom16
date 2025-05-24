import products from './products.js';

const checkoutPage = () => {
  const listCartHTML = document.querySelector('.listCart');
  const totalPriceHTML = document.querySelector('.totalPrice');
  
  let cart = [];

  // Lấy giỏ hàng từ localStorage
  const loadCart = () => {
    const storedCart = localStorage.getItem('cart');
    cart = storedCart ? JSON.parse(storedCart) : [];
  };

  // Lưu giỏ hàng vào localStorage
  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  // Tính tổng tiền
  const calculateTotal = () => {
    return cart.reduce((sum, item) => {
      const product = products.find(p => p.id === item.product_id);
      if (!product) return sum;
      return sum + product.price * item.quantity;
    }, 0);
  };

  // Hiển thị giỏ hàng ra HTML
  const renderCart = () => {
    listCartHTML.innerHTML = '';
    if (cart.length === 0) {
      listCartHTML.innerHTML = '<p>Your cart is empty.</p>';
      totalPriceHTML.innerText = '$0';
      return;
    }

    cart.forEach(item => {
      const product = products.find(p => p.id === item.product_id);
      if (!product) return;

      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.dataset.id = item.product_id;

      itemDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <div class="quantity-control">
            <button class="decrease" data-id="${product.id}">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="increase" data-id="${product.id}">+</button>
          </div>
          <p>Subtotal: $${(product.price * item.quantity).toFixed(2)}</p>
          <button class="remove-item" data-id="${product.id}">Remove</button>
        </div>
      `;

      listCartHTML.appendChild(itemDiv);
    });

    totalPriceHTML.innerText = '$' + calculateTotal().toFixed(2);
  };

  // Thay đổi số lượng sản phẩm
  const changeQuantity = (productId, delta) => {
    const index = cart.findIndex(item => item.product_id === productId);
    if (index < 0) return;

    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1); // Xóa sản phẩm nếu số lượng <= 0
    }
    saveCart();
    renderCart();
  };

  // Xóa sản phẩm khỏi giỏ
  const removeItem = (productId) => {
    cart = cart.filter(item => item.product_id !== productId);
    saveCart();
    renderCart();
  };

  // Lắng nghe sự kiện click trên listCartHTML
  listCartHTML.addEventListener('click', (e) => {
    const target = e.target;
    const id = parseInt(target.dataset.id);
    if (!id) return;

    if (target.classList.contains('increase')) {
      changeQuantity(id, 1);
    }
    else if (target.classList.contains('decrease')) {
      changeQuantity(id, -1);
    }
    else if (target.classList.contains('remove-item')) {
      removeItem(id);
    }
  });

  // Khởi tạo trang
  const init = () => {
    loadCart();
    renderCart();
  };

  init();
};

checkoutPage();

export default checkoutPage;
