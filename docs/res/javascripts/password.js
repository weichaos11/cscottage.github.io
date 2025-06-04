const CORRECT_PASSWORD = "your_password";

function checkPassword() {
  const stored = localStorage.getItem('site_auth');
  if (stored === CORRECT_PASSWORD) return true;
  
  const input = prompt("请输入访问密码:");
  if (input === CORRECT_PASSWORD) {
    localStorage.setItem('site_auth', input);
    return true;
  }
  window.location.href = "/";
  return false;
}

checkPassword();
