var boxClass = 'movingDiv'; // Biến toàn cục để minh họa đúng nội dung Lab.
function outputBox(num) {
  var box = '<div class="' + boxClass + '" id="div' + num + '">This is div ' + num + '</div>';
  return box;
}
for (var count = 1; count < 6; count++) document.write(outputBox(count));
try { console.log(box); } catch (error) {
  document.write('<p class="note">' + error.name + ': box chỉ tồn tại trong outputBox, không truy cập được từ ngoài.</p>');
}
console.log('typeof window.box =', typeof window.box);
