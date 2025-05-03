const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
function isMobile() {
  return window.innerWidth <= 768;
}

signUpBtn.addEventListener('click', () => {
  if (isMobile()) {
    container.classList.add("vertical-panel-active");
  } else {
    container.classList.add("right-panel-active");
  }
});

signInBtn.addEventListener('click', () => {
  if (isMobile()) {
    container.classList.remove("vertical-panel-active");
  } else {
    container.classList.remove("right-panel-active");
  }
});


function handleSignUp(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();

  const confirmPassword = document
    .getElementById('confirmPassword')
    .value.trim();
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameRegex.test(firstName)) {
    Swal.fire({
      icon: 'warning',
      title: 'Invalid First Name',
      text: 'First name must contain only letters.',
    });
    return;
  }

  if (!nameRegex.test(lastName)) {
    Swal.fire({
      icon: 'warning',
      title: 'Invalid Last Name',
      text: 'Last name must contain only letters.',
    });
    return;
  }

  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: 'warning',
      title: 'Invalid Email',
      text: 'Please enter a valid email address.',
    });
    return;
  }

  if (password.length < 8) {
    Swal.fire({
      icon: 'warning',
      title: 'Weak Password',
      text: 'Password must be at least 8 characters long.',
    });
    return;
  }

  if (password !== confirmPassword) {
    Swal.fire({
      icon: 'error',
      title: 'Password Mismatch',
      text: 'Passwords do not match.',
    });
    return;
  }

  localStorage.setItem('isRegistered', 'true');
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('registeredEmail', email);
  localStorage.setItem('registeredPassword', password);
  Swal.fire({
    icon: 'success',
    title: 'Registration Successful',
    text: 'You can now log in.',
    showConfirmButton: false,
    timer: 2000,
  }).then(() => {
  container.classList.remove('right-panel-active');
  });
}
window.addEventListener('DOMContentLoaded', () => {
  const isRegistered = localStorage.getItem('isRegistered');

  if (isRegistered === 'true') {
    container.classList.remove('right-panel-active');
    Swal.fire({
      icon: 'info',
      title: 'You are already registered',
      text: 'Redirecting you to the login page...',
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
  container.classList.remove('right-panel-active');
    });
  }
  else {
    // Show sign-up panel by default
    container.classList.add('right-panel-active');
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('themeToggle');
  const isDark = localStorage.getItem('theme') === 'dark';

  if (isDark) {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️ Light Mode';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const darkMode = document.body.classList.contains('dark');
    toggleBtn.textContent = darkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  });
});


function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  const savedEmail = localStorage.getItem('registeredEmail');
  const savedPassword = localStorage.getItem('registeredPassword');

  if (email === savedEmail && password === savedPassword) {
    Swal.fire({
      icon: 'success',
      title: 'Login successful!',
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = 'Takeyourexam.html';
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid email or password!',
    });
  }
}



signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});
