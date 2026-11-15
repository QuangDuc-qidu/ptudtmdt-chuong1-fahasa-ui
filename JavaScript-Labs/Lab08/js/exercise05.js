var count = 1;
count++;
var output = '<br>Count = ' + count;
var temp = count * 7;
console.log('script within the <head> element');
console.warn('oh no this is a warning — thông báo chủ động của Exercise 8.5');
console.error('panic!! error!! — thông báo minh họa console.error, không phải lỗi phát sinh');
document.getElementById('console-state').textContent = 'count = ' + count + '\noutput = ' + output + '\ntemp = ' + temp;
window.addEventListener('error', function (event) {
  document.getElementById('console-state').textContent = event.message;
});
document.getElementById('make-error').addEventListener('click', function () {
  doccumment.write('this text was written from JS'); // Lỗi có chủ đích để học Console.
});
document.getElementById('fix-error').addEventListener('click', function () {
  console.log('document được viết đúng');
  document.getElementById('console-state').textContent = 'Đã sửa doccumment thành document; count = ' + count + ', temp = ' + temp;
});
