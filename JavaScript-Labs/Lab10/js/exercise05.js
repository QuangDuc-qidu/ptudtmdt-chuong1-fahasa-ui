$(function () {
  $('#insert-now').on('click', function () {
    $('#insert-zone .inserted').remove();
    var img = $('<img>').attr({src: 'images/art/thumbs/13030.jpg', alt: 'Ảnh được thêm bằng jQuery'}).addClass('inserted');
    var panel = $('#insert-zone .panel');
    var method = $('#insert-method').val();
    switch (method) {
      case 'after': panel.after(img); break;
      case 'before': panel.before(img); break;
      case 'append': panel.append(img); break;
      case 'prepend': panel.prepend(img); break;
      case 'appendTo': img.appendTo(panel); break;
      case 'prependTo': img.prependTo(panel); break;
      case 'insertBefore': img.insertBefore(panel); break;
    }
    $('#insert-result').text('Đã chèn bằng ' + method + '; phần tử cha của ảnh: ' + img.parent()[0].className);
  });
});
