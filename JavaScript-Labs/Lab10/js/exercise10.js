$(function () {
  $('.animLoading').hide();
  $('#consume').on('click', function () {
    var url = $('#data-source').val();
    $('#results').empty(); $('.animLoading').show(); $('#consume').prop('disabled', true);
    $('#request-log').text('GET ' + url); $('#request-state').text('Đang tải…');
    var request = $.get({url: url, dataType: 'json', timeout: 7000});
    request.done(function (data) {
      if (!Array.isArray(data)) { $('#request-state').text('Dữ liệu không phải danh sách.'); return; }
      var ul = $('<ul>');
      $.each(data, function (index, value) { $('<li>').text(value.name).appendTo(ul); });
      $('#results').append(ul); $('#request-state').text('Thành công: ' + data.length + ' thành phố.');
      $('#request-log').append('\ndone: đã nhận JSON');
    }).fail(function (xhr, status, error) {
      $('#request-state').text('Không tải được dữ liệu: ' + status + '; HTTP ' + xhr.status + '.');
      $('#request-log').append('\nfail: ' + status + ' / ' + error);
    }).always(function () {
      $('.animLoading').stop(true, true).fadeOut('slow');
      $('#consume').prop('disabled', false); $('#request-log').append('\nalways: kết thúc yêu cầu');
    });
  });
});
