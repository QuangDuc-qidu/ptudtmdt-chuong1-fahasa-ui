var msg = document.getElementById('msgArea');
document.getElementById('pageTitle').innerHTML = 'Even newer title';
var results = [];
results.push('innerHTML: ' + document.getElementById('first').innerHTML);
results.push('innerText: ' + document.getElementById('first').innerText);
results.push('class: ' + msg.getAttribute('class'));
var elem = document.getElementsByTagName('span');
results.push('Số span: ' + elem.length);
var counts = document.getElementsByClassName('count-number');
for (var i = 0; i < counts.length; i++) results.push('count-number: ' + counts[i].innerText);
var ps = document.querySelectorAll('#first p');
for (var j = 0; j < ps.length; j++) results.push('querySelectorAll: ' + ps[j].innerHTML);
msg.value = results.join('\n');
document.querySelector('#first p').style.color = '#1757ce';
document.getElementById('features').style.backgroundColor = '#ccebd7';
document.getElementById('show-message').addEventListener('click', function () {
  msg.setAttribute('class', msg.classList.contains('hidden') ? 'form-control' : 'hidden');
});
