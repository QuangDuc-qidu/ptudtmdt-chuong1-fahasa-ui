window.addEventListener('load', function () {
  var divs = document.querySelectorAll('.movingDiv');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseover', function (e) {
      var targetId = e.target.id; // Đặt breakpoint ở dòng này trong DevTools Sources.
      if (document.getElementById('pause-debug').checked) { debugger; }
      console.log('triggered by ' + targetId, e);
      document.getElementById('event-result').textContent = 'triggered by ' + targetId + '; event.type = ' + e.type;
    });
  }
});
