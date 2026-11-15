// Phần dùng chung chỉ hỗ trợ điều hướng và hiển thị mã để đối chiếu.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-source]').forEach(function (details) {
    details.addEventListener('toggle', function () {
      if (!details.open || details.dataset.loaded) return;
      fetch(details.dataset.source).then(function (r) {
        if (!r.ok) throw new Error('Không đọc được mã nguồn');
        return r.text();
      }).then(function (text) {
        var pre = details.querySelector('pre');
        pre.textContent = '';
        text.split('\n').forEach(function (line) {
          var span = document.createElement('span');
          span.className = 'line'; span.textContent = line || ' '; pre.appendChild(span);
        });
        details.dataset.loaded = 'true';
      }).catch(function () { details.querySelector('pre').textContent = 'Mở file .js tương ứng trong VS Code hoặc chạy trang qua HTTP để xem mã tại đây.'; });
    });
  });
});
