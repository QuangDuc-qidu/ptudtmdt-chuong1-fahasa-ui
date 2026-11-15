// File được nạp ở head có chủ đích: chưa được đọc div1 ngay lúc này.
console.log('Trước load, div1 =', document.getElementById('div1'));
window.addEventListener('load', function () {
  var divToGet = document.getElementById('div1');
  document.getElementById('load-result').textContent = 'load đã chạy: ' + divToGet.innerHTML;
  alert(divToGet.innerHTML);
});
