var first = document.getElementById('first');
console.log('firstChild:', first.firstChild, 'firstElementChild:', first.firstElementChild);
console.log('firstChild.nextSibling:', first.firstChild.nextSibling, 'parentNode:', first.parentNode);
var stories = document.getElementById('stories');
var lines = [];
for (var i = 0; i < stories.childNodes.length; i++) {
  var node = stories.childNodes[i];
  lines.push('child ' + i + ' = ' + node.nodeName + '; nodeType=' + node.nodeType);
  console.log(lines[lines.length - 1]);
  if (node.nodeType === Node.ELEMENT_NODE) node.style.backgroundColor = '#fff0c7';
}
document.getElementById('family-result').textContent = lines.join('\n');
