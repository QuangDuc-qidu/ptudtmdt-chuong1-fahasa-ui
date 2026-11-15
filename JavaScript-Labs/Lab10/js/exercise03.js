$(function () {
  $('#advanced-form').on('submit', function (e) { e.preventDefault(); });
  $('#select-password').on('click', function () {
    $(':password').css('background-color', 'yellow');
    $('#selector-result').text(':password chọn ' + $(':password').length + ' ô mật khẩu.');
  });
  $('#select-fourth').on('click', function () {
    $('form :nth-child(4n)').css('background-color', 'yellow');
    $('#selector-result').text(':nth-child(4n) đếm vị trí phần tử con trong cha, bắt đầu từ 1.');
  });
  $('#select-word').on('click', function () {
    $('label:contains("word")').css('color', 'black').css('background-color', '#ffe393');
    $('#selector-result').text(':contains("word") chọn ' + $('label:contains("word")').length + ' nhãn chứa đúng chuỗi word.');
  });
});
