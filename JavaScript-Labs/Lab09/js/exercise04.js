var btn = document.getElementById('testButton');
var content = document.getElementById('content');
var pendingTimer;
function simpleHandler(event) {
  clearTimeout(pendingTimer);
  if (btn.textContent === 'Hide') {
    btn.textContent = 'Show'; content.className = 'makeItDisappear';
    pendingTimer = setTimeout(function () { content.style.display = 'none'; }, 1000);
  } else {
    btn.textContent = 'Hide'; content.style.display = 'block';
    pendingTimer = setTimeout(function () { content.className = 'makeItNormal'; }, 50);
  }
}
btn.addEventListener('click', simpleHandler);
var img = document.getElementById('mainImage');
img.addEventListener('mouseover', function () { img.className = 'makeItGray'; });
img.addEventListener('mouseout', function () { img.className = 'makeItNormal'; });
