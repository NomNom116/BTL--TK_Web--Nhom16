// Hàm đăng ký
function registerUser() {
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;

  if (!fullname || !email || !password || !confirm) {
    alert("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  if (password !== confirm) {
    alert("Mật khẩu xác nhận không khớp.");
    return;
  }

  // Giả lập lưu user vào localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find(u => u.email === email);
  if (userExists) {
    alert("Email đã được đăng ký.");
    return;
  }

  users.push({ fullname, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công! Mời bạn đăng nhập.");
  location.href = "index.html";
}

// Hàm đăng nhập
function loginUser() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Vui lòng nhập đầy đủ email và mật khẩu.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Email hoặc mật khẩu không đúng.");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  alert("Đăng nhập thành công!");
  location.href = "home.html";
}
