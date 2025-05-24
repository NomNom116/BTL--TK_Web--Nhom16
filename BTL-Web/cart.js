import products from "/products.js";

const cart = () => {
  let listCartHTML = document.querySelector('.listCart');
  let iconCart = document.querySelector('.icon-cart');
  let iconCartSpan = iconCart.querySelector('span');
  let body = document.querySelector('body');
  let closeCart = document.querySelector('.close');
  let checkOutBtn = document.querySelector('.checkOut');
  let cart = [];

  // Mở và đóng tab giỏ hàng
  iconCart.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
  });

  closeCart.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
  });

  // Nút Check Out
  if (checkOutBtn) {
    checkOutBtn.addEventListener('click', () => {
      body.classList.remove('activeTabCart');
      window.location.href = 'checkout.html';
    });
  }

  // Thêm, cập nhật, xóa sản phẩm trong giỏ
  const setProductInCart = (idProduct, value) => {
    idProduct = Number(idProduct);
    value = Number(value);

    let positionInCart = cart.findIndex(item => item.product_id === idProduct);
    if (value <= 0) {
      if (positionInCart >= 0) {
        cart.splice(positionInCart, 1);
      }
    } else if (positionInCart < 0) {
      cart.push({
        product_id: idProduct,
        quantity: value
      });
    } else {
      cart[positionInCart].quantity = value;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    addCartToHTML();
  };

  // Hiển thị giỏ hàng
  const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if (cart.length > 0) {
      cart.forEach(item => {
        let product = products.find(p => p.id === item.product_id);
        if (!product) return;
        totalQuantity += item.quantity;
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.dataset.id = item.product_id;
        newItem.innerHTML = `
          <div class="image">
              <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="name">${product.name}</div>
          <div class="totalPrice">$${(product.price * item.quantity).toFixed(2)}</div>
          <div class="quantity">
              <span class="minus" data-id="${product.id}"><</span>
              <span>${item.quantity}</span>
              <span class="plus" data-id="${product.id}">></span>
          </div>
          <button class="deleteBtn" data-id="${product.id}">Delete</button>
        `;
        listCartHTML.appendChild(newItem);
      });
    } else {
      listCartHTML.innerHTML = '<p>Giỏ hàng trống</p>';
    }
    iconCartSpan.innerText = totalQuantity;
  };

  // Sự kiện click toàn cục
  document.addEventListener('click', (event) => {
    let target = event.target;
    let idProduct = target.dataset.id;
    if (!idProduct) return;

    idProduct = Number(idProduct);
    let position = cart.findIndex(item => item.product_id === idProduct);
    let quantity = null;

    switch (true) {
      case target.classList.contains('addCart'):
        quantity = position < 0 ? 1 : cart[position].quantity + 1;
        setProductInCart(idProduct, quantity);
        break;
      case target.classList.contains('minus'):
        if (position >= 0) {
          quantity = cart[position].quantity - 1;
          setProductInCart(idProduct, quantity);
        }
        break;
      case target.classList.contains('plus'):
        if (position >= 0) {
          quantity = cart[position].quantity + 1;
          setProductInCart(idProduct, quantity);
        }
        break;
      case target.classList.contains('deleteBtn'):
        setProductInCart(idProduct, 0);
        break;
      default:
        break;
    }
  });

  // Khởi tạo giỏ hàng từ localStorage
  const initApp = () => {
    const savedCart = localStorage.getItem('cart');
    cart = savedCart ? JSON.parse(savedCart) : [];
    addCartToHTML();
  };

  initApp();
};

export default cart;
