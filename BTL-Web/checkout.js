import products from "./products.js";

const cartList = document.querySelector(".listCart");
const totalPriceElem = document.querySelector(".totalPrice");
const checkoutBtn = document.querySelector(".btn-checkout");
const orderDetails = document.querySelector(".order-details");
const popup = document.getElementById("popup");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartList.innerHTML = `
      <p>Giỏ hàng trống.</p>
      <a href="index.html" class="back-home">← Quay lại trang chủ</a>
    `;
    totalPriceElem.textContent = "$0";
    checkoutBtn.disabled = true;
    return;
  }

  checkoutBtn.disabled = false;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.product_id);
    if (!product) return;

    const itemTotal = product.price * item.quantity;
    total += itemTotal;

    const itemElem = document.createElement("div");
    itemElem.className = "item";
    itemElem.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="info">
        <strong>${product.name}</strong>
        <span>Số lượng: ${item.quantity}</span>
        <span>Thành tiền: $${itemTotal.toFixed(2)}</span>
      </div>
    `;
    cartList.appendChild(itemElem);
  });

  totalPriceElem.textContent = `$${total.toFixed(2)}`;
}

function showPopupAndOrderDetails() {
  popup.style.display = "flex";

  setTimeout(() => {
    popup.style.display = "none";
    orderDetails.style.display = "block";

    const now = new Date();
    document.getElementById("orderDate").textContent = now.toLocaleDateString("vi-VN");

    document.querySelectorAll(".order-details .totalPrice").forEach(el => {
      el.textContent = totalPriceElem.textContent;
    });

    localStorage.removeItem("cart");
  }, 3000);
}

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) return;
  showPopupAndOrderDetails();
});

renderCart();
