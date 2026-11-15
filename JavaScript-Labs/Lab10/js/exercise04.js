$(function () {
  function reportMove(e) { $('#message').text('x=' + e.pageX + ' y=' + e.pageY); }
  $('.panel').on('mousemove', reportMove)
    .on('mouseleave', function () { $('#message').text('goodbye!'); })
    .on('click', function () { $('#message').text('stopped move reporting'); $('.panel').off('mousemove'); });
  $('#restart-listener').on('click', function () { $('.panel').off('mousemove').on('mousemove', reportMove); });
});
