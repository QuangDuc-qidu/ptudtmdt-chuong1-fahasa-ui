var literalOrder = { product: 'Self Portrait in a Straw Hat', price: 15, quantity: 2, total: function () { return this.price * this.quantity; } };
console.log('Dot:', literalOrder.product, 'Bracket:', literalOrder['product']);
console.log('order.total là hàm:', typeof literalOrder.total, 'order.total() là kết quả:', literalOrder.total());
function Order(product, price, quantity) {
  this.product = product; this.price = price; this.quantity = quantity;
  this.total = function () { return this.price * this.quantity; };
  this.output = function () {
    document.write('<article class="box"><h3>' + this.product + '</h3><p>Price = $' + this.price.toFixed(2) + '; Quantity = ' + this.quantity + '</p><strong>Total = $' + this.total().toFixed(2) + '</strong></article>');
  };
}
var example1 = new Order('Self Portrait in a Straw Hat', 15, 2);
var example2 = new Order('Untitled #23', 10, 4);
document.write('<div class="facts">'); example1.output(); example2.output(); document.write('</div>');
