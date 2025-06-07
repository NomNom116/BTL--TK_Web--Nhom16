// detail.js
import products from './products.js';
import { initHeader } from './header.js';
import cart from './cart.js';

const app = document.getElementById('app');
const temp = document.getElementById('temporaryContent');

async function loadTemplate() {
  try {
    const res = await fetch('./template.html');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const tpl = await res.text();
    app.innerHTML = tpl;
  } catch (e) {
    console.error('Không tải template:', e);
    document.body.innerHTML = '<p>Không thể tải giao diện chung.</p>';
    return;
  }

  // 1. Khởi tạo header, cart UI
  initHeader();
  cart(); // khởi UI giỏ hàng, badge…

  // 2. Copy content tạm vào contentTab
  const contentTab = document.getElementById('contentTab');
  contentTab.innerHTML = temp.innerHTML;
  temp.remove();

  // 3. Lấy id từ URL
  const pid = new URLSearchParams(window.location.search).get('id');
  const prod = products.find(p => p.id === pid);
  if (!prod) {
    contentTab.innerHTML = '<p>Không tìm thấy sản phẩm.</p>';
    return;
  }

  renderDetail(prod);
}

function renderDetail(prod) {
  // Điền tên, giá, mô tả, rating như cũ
  document.getElementById('prodName').textContent = prod.name;

  if (prod.salePrice) {
    document.getElementById('salePrice').textContent = formatCurrency(prod.salePrice);
    document.getElementById('oldPrice').textContent = formatCurrency(prod.price);
  } else {
    document.getElementById('salePrice').textContent = formatCurrency(prod.price);
    document.getElementById('oldPrice').remove();
  }

  document.getElementById('prodDesc').textContent = prod.description || '';

  const starsEl = document.getElementById('stars');
  const countEl = document.getElementById('ratingCount');
  const rating = prod.rating || 0;
  const maxStar = 5;
  let starStr = '';
  for (let i = 1; i <= maxStar; i++) {
    starStr += (i <= rating) ? '★' : '☆';
  }
  starsEl.textContent = starStr;
  countEl.textContent = `(${prod.ratingCount || 0})`;

  // Ảnh chính, thumbnail
  const mainImg = document.getElementById('mainImg');
  mainImg.src = prod.image;
  mainImg.alt = prod.name;

  const thumbList = document.getElementById('thumbList');
  thumbList.innerHTML = '';
  const imgArr = (prod.images && prod.images.length) ? prod.images : [prod.image];
  imgArr.forEach(src => {
    const btn = document.createElement('button');
    btn.className = 'thumb-item';
    const img = document.createElement('img');
    img.src = src;
    img.alt = prod.name;
    btn.append(img);
    btn.addEventListener('click', () => {
      mainImg.src = src;
    });
    thumbList.append(btn);
  });

  // Chọn màu
  const colorBox = document.getElementById('colorOptions');
  colorBox.innerHTML = '';
  const colors = prod.colors || [prod.image];
  colors.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'color-item';
    if (item.startsWith('#')) {
      btn.style.backgroundColor = item;
    } else {
      const img = document.createElement('img');
      img.src = item;
      btn.append(img);
    }
    btn.addEventListener('click', () => {
      mainImg.src = item;
    });
    colorBox.append(btn);
  });

  // Số lượng
  const qtyInput = document.getElementById('qtyInput');
  let qty = 1;
  document.getElementById('qtyMinus').addEventListener('click', () => {
    if (qty > 1) {
      qty--;
      qtyInput.value = qty;
    }
  });
  document.getElementById('qtyPlus').addEventListener('click', () => {
    qty++;
    qtyInput.value = qty;
  });

  // Nút Add to Bag: lưu vào localStorage, rồi dispatch event để cart.js tự cập nhật badge và dropdown
  document.getElementById('addToCartBtn').addEventListener('click', () => {
    // Lấy mảng cart hiện tại từ localStorage, nếu chưa có thì tạo mới
    let cartArr = JSON.parse(localStorage.getItem('cart')) || [];
    const idx = cartArr.findIndex(i => i.product_id === prod.id);
    if (idx > -1) {
      // nếu đã tồn tại, chỉ tăng số lượng
      cartArr[idx].quantity += qty;
    } else {
      cartArr.push({ product_id: prod.id, quantity: qty });
    }
    localStorage.setItem('cart', JSON.stringify(cartArr));
    // Phát sự kiện để cart.js lắng nghe và cập nhật UI
    window.dispatchEvent(new Event('cartUpdated'));
  });

  // Nút yêu thích
  const favBtn = document.getElementById('favBtn');
  let fav = false;
  favBtn.addEventListener('click', () => {
    fav = !fav;
    favBtn.textContent = fav ? '❤️' : '♡';
  });
}

function formatCurrency(n) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n);
}

loadTemplate();
