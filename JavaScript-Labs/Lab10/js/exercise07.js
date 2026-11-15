$(function () {
  function movePreview(e) {
    var x = typeof e.pageX === 'number' ? e.pageX : $(this).offset().left;
    var y = typeof e.pageY === 'number' ? e.pageY : $(this).offset().top;
    var left = Math.max(8, Math.min(x + 30, window.scrollX + window.innerWidth - 310));
    $('#preview').css({top: (y + 15) + 'px', left: left + 'px'});
  }
  function removePreview() { $(this).removeClass('gray'); $('#preview').remove(); }
  $('figure img').on('mouseover focus', function (e) {
    $('#preview').remove();
    var newsrc = $(this).attr('src').replace('small', 'medium');
    var preview = $('<div id="preview"></div>');
    preview.append($('<img>').attr({src: newsrc, alt: $(this).attr('alt')}));
    preview.append($('<p>').text($(this).attr('alt')));
    $('body').append(preview); $(this).addClass('gray');
    movePreview.call(this, e); preview.fadeIn(1000);
  }).on('mouseleave blur', removePreview).on('mousemove', movePreview);
});
