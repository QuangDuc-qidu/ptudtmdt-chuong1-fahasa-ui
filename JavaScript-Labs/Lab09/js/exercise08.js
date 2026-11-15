function checkForEmptyFields(e) {
  e.preventDefault(); // Luôn giữ bài minh họa trên trang, không đưa dữ liệu vào query string.
  var errorArea = document.getElementById('errors');
  errorArea.className = 'hidden'; errorArea.textContent = '';
  var fields = document.querySelectorAll('#sampleForm input[type=text], #sampleForm input[type=password]');
  var fieldList = [];
  for (var i = 0; i < fields.length; i++) {
    var empty = fields[i].value.trim() === '';
    fields[i].classList.toggle('invalid', empty);
    fields[i].setAttribute('aria-invalid', String(empty));
    if (empty) fieldList.push(fields[i]);
  }
  document.getElementById('form-result').textContent = '';
  if (fieldList.length > 0) {
    errorArea.textContent = "The following fields can't be empty: " + fieldList.map(function (f) { return f.id; }).join(', ');
    errorArea.className = 'visible'; fieldList[0].focus();
  } else {
    document.getElementById('form-result').textContent = 'Dữ liệu hợp lệ: các ô đều đã được nhập. Đây là form thực hành, chưa tạo tài khoản.';
  }
}
function init() { document.getElementById('sampleForm').addEventListener('submit', checkForEmptyFields); }
window.addEventListener('load', init);
