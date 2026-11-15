$(function () {
  var msg = $('#msgArea');
  msg.val('here is some new text');
  $('#pageTitle').html('new Title');
  msg.val('My class is ' + msg.attr('class'));
  $('button').css('background-color', 'red');
  $('body').css('background-color', 'ivory');
  $('.center-icons').addClass('selected');
});
