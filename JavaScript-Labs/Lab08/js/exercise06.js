var stringOne = new String('Test');
var stringTwo = 'Test';
var stringThree = 'Test';
var stringFour = new String('Test');
document.write('<table><tr><th>Biểu thức</th><th>Kết quả</th></tr>');
var comparisons = [
 ['typeof stringOne', typeof stringOne], ['typeof stringThree', typeof stringThree],
 ['stringOne == stringTwo', stringOne == stringTwo], ['stringOne == stringFour', stringOne == stringFour],
 ['stringOne === stringTwo', stringOne === stringTwo], ['stringTwo === stringThree', stringTwo === stringThree],
 ['stringTwo === stringFour', stringTwo === stringFour]
];
for (var i = 0; i < comparisons.length; i++) document.write('<tr><td>' + comparisons[i][0] + '</td><td>' + comparisons[i][1] + '</td></tr>');
document.write('</table>');
var dateOne = new Date();
document.write('<p>Date: ' + dateOne.toString() + '</p>');
document.write('<p>Math.PI = ' + Math.PI + '; Math.sqrt(4) = ' + Math.sqrt(4) + '; Math.random() = ' + Math.random() + '</p>');
