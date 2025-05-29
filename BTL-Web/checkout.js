import products from "./products.js";

// 1. QUERY SELECTORS
const orderList      = document.querySelector(".order-list");
const subtotalEl     = document.querySelector(".subtotal");
const shippingFeeEl  = document.querySelector(".shipping-fee");
const totalEl        = document.querySelector(".total");
const checkoutForm   = document.getElementById("checkoutForm");
const checkoutBtn    = checkoutForm.querySelector(".btn-submit");

// 2. HẰNG SỐ
const SHIPPING_FEE = 50000;

// 3. LẤY GIỎ HÀNG
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 4. KHI DOM READY → RENDER ORDER + GẮN FORM SUBMIT
document.addEventListener("DOMContentLoaded", () => {
  renderOrderSummary();
  checkoutForm.addEventListener("submit", handleSubmit);
});
function renderOrderSummary() {
  orderList.innerHTML = "";
  let subtotal = 0;

  // Nếu giỏ trống
  if (cart.length === 0) {
    orderList.innerHTML = `
      <li class="order-item">
        <p>Giỏ hàng trống.</p>
        <a href="index.html">← Quay lại trang chủ</a>
      </li>`;
    subtotalEl.textContent    = "₫0";
    shippingFeeEl.textContent = "₫0";
    totalEl.textContent       = "₫0";
    checkoutBtn.disabled      = true;
    return;
  }

  // Ngược lại, render từng item
  cart.forEach(item => {
    const prod = products.find(p => p.id === item.product_id);
    if (!prod) return;
    const lineTotal = prod.price * item.quantity;
    subtotal += lineTotal;

    const li = document.createElement("li");
    li.className = "order-item";
    li.innerHTML = `
      <div class="item-info">
        <img src="${prod.image}" alt="${prod.name}" class="item-img">
        <div>
          <p class="item-name">${prod.name}</p>
          <p class="item-qty">Số lượng: ${item.quantity}</p>
        </div>
      </div>
      <p class="item-price">₫${lineTotal.toLocaleString()}</p>
    `;
    orderList.appendChild(li);
  });

  // Tính phí vận chuyển & tổng
  const shipping = SHIPPING_FEE;
  subtotalEl.textContent    = `₫${subtotal.toLocaleString()}`;
  shippingFeeEl.textContent = `₫${shipping.toLocaleString()}`;
  totalEl.textContent       = `₫${(subtotal + shipping).toLocaleString()}`;
  checkoutBtn.disabled      = false;
}

/**
 * Xử lý khi user bấm "Đặt hàng"
 */
function handleSubmit(e) {
  e.preventDefault();
  const f = checkoutForm;
  const data = {
    fullname: f.fullname.value.trim(),
    email:    f.email.value.trim(),
    phone:    f.phone.value.trim(),
    address:  f.address1.value.trim(),
    ward:     f.ward.value.trim(),
    district: f.district.value.trim(),
    city:     f.city.value.trim(),
    cart,
    subtotal: subtotalEl.textContent,
    shipping: shippingFeeEl.textContent,
    total:    totalEl.textContent
  };

  // Validate nhanh
  for (let key of ["fullname","email","phone","address","district","city"]) {
    if (!data[key]) {
      alert("Vui lòng nhập đầy đủ: " + key);
      return;
    }
  }

  // TODO: Thay bằng fetch gửi lên server nếu cần
  console.log("Đơn hàng gửi đi:", data);

  // Clear cart, báo thành công và redirect
  localStorage.removeItem("cart");
  alert("Đặt hàng thành công! Cảm ơn " + data.fullname);
  window.location.href = "home.html";
}

// Sau khi tính thành công order...
const user = JSON.parse(localStorage.getItem('loggedInUser'));
user.orders = user.orders || [];
user.orders.push({
  date: new Date().toLocaleDateString('vi-VN'),
  total: totalEl.textContent,
  items: cart  // nếu muốn chi tiết
});
localStorage.setItem('loggedInUser', JSON.stringify(user));

