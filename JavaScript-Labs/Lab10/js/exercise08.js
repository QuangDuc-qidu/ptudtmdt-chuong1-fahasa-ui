$(function () {
  $('#animate-box').on('click', function () {
    var stage = $('.animation-stage');
    var left = Math.min(495, stage.width() - 200);
    var top = Math.min(400, stage.height() - 210);
    $('#animation-result').text('Đang chạy ba hoạt ảnh theo thứ tự…');
    $('#box').stop(true, false)
      .animate({left: left + 'px', opacity: 1, height: '50px'}, 500)
      .animate({top: top + 'px', opacity: .2}, 500)
      .animate({height: '200px'}, 2000, function () { $('#animation-result').text('Đã hoàn thành cả ba hoạt ảnh.'); });
  });
  $('#reset-box').on('click', function () {
    $('#box').stop(true, true).css({left: 0, top: 0, opacity: .4, height: '150px'});
    $('#animation-result').text('Đã đặt lại.');
  });
});
