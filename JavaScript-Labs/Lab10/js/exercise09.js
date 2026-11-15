$(function () {
  $('#consume').on('click', function () {
    var url = $('#data-source').val();
    $('#results').empty(); $('#request-log').text('GET ' + url);
    $('#request-state').text('Đang tải dữ liệu…'); $('#consume').prop('disabled', true);
    $.get({url: url, dataType: 'json', timeout: 7000}, function (data, status) {
      if (status === 'success' && Array.isArray(data)) {
        var ul = $('<ul>');
        $.each(data, function (index, value) { $('<li>').text(value.name).appendTo(ul); });
        $('#results').append(ul);
        $('#request-state').text('Tải thành công ' + data.length + ' thành phố.');
      }
    }).fail(function (xhr, status, error) {
      $('#request-state').text('Không tải được dữ liệu: ' + status + '; HTTP ' + xhr.status + '.');
      $('#request-log').append('\nLỗi: ' + error);
    }).always(function () { $('#consume').prop('disabled', false); });
  });
});
