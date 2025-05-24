//Register
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;

    if (!name || !email || !pass || !confirm) {
        alert('Please fill in all fields.');
        return;
    }

    if (pass.length < 6) {
        alert('Password must be at least 6 characters.');
        return;
    }

    if (pass !== confirm) {
        alert('Passwords do not match!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const userExists = users.find(u => u.email === email);
    if (userExists) {
        alert('Email already registered.');
        return;
    }

    users.push({ name, email, password: pass });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registered successfully!');
    window.location.href = 'login.html';
});
const user = JSON.parse(localStorage.getItem('loggedInUser'));
if (user) {
    document.getElementById('userWelcome').innerText = `Hello, ${user.name}`;
    document.getElementById('logoutBtn').style.display = 'inline-block';
}

// Log in
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === pass);

    if (!user) {
        alert('Invalid email or password.');
        return;
    }

    localStorage.setItem('loggedInUser', JSON.stringify(user));
    alert(`Welcome, ${user.name}!`);
    window.location.href = 'index.html';
});

//Log out
const user = JSON.parse(localStorage.getItem('loggedInUser'));
if (user) {
    document.getElementById('userWelcome').innerText = `Hello, ${user.name}`;
    document.getElementById('logoutBtn').style.display = 'inline-block';
}

document.getElementById('logoutBtn')?.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    alert('You have been logged out.');
    window.location.href = 'index.html';
});


// RESET PASSWORD
document.getElementById('forgotForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('forgotEmail').value.trim();
    const newPassword = document.getElementById('newPassword').value;

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const index = users.findIndex(u => u.email === email);

    if (index === -1) {
        alert('Email not found.');
        return;
    }

    if (newPassword.length < 6) {
        alert('Password must be at least 6 characters.');
        return;
    }

    users[index].password = newPassword;
    localStorage.setItem('users', JSON.stringify(users));

    alert('Password reset successful!');
    window.location.href = 'login.html';
});
