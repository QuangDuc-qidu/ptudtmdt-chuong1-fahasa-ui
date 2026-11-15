function Country(name, iso, capital, population) {
  this.name = name; this.iso = iso; this.capital = capital; this.population = population;
}
var countries = [new Country('Bahamas', 'BS', 'Nassau', 301790), new Country('Canada', 'CA', 'Ottawa', 33679000), new Country('Germany', 'DE', 'Berlin', 81802257)];
countries.push(new Country('Spain', 'ES', 'Madrid', 46505963));
countries.push(new Country('United Kingdom', 'GB', 'London', 62348447));
document.write('<div class="facts">');
for (var i = 0; i < countries.length; i++) {
  var c = countries[i];
  document.write('<article class="box"><img class="boxImg" alt="Quốc kỳ ' + c.name + '" src="flags/' + c.iso + '.png">');
  for (var propertyName in c) {
    if (Object.prototype.hasOwnProperty.call(c, propertyName)) document.write('<p><strong>' + propertyName + ':</strong> ' + c[propertyName] + '</p>');
  }
  document.write('</article>');
}
document.write('</div>');
