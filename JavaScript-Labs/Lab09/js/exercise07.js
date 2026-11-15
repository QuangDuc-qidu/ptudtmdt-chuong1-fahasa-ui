function setBackground(e) {
  e.target.style.backgroundColor = e.type === 'focus' ? '#FFE393' : 'white';
}
window.addEventListener('load', function () {
  var fields = document.querySelectorAll('input[type=text], input[type=password]');
  for (var i = 0; i < fields.length; i++) {
    fields[i].addEventListener('focus', setBackground);
    fields[i].addEventListener('blur', setBackground);
  }
  document.getElementById('sampleForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Bài tĩnh không gửi mật khẩu lên URL hoặc máy chủ.
    document.getElementById('form-result').textContent = 'Đã thử form; không gửi dữ liệu cá nhân trong bài thực hành.';
  });
});
