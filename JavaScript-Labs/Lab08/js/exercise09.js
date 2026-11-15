var isCanadian = true;
function calculateTax(amount, tax) { return amount * tax(); }
function calculateTotal(price, quantity) {
  var amount = price * quantity;
  return amount + calculateTax(amount, function () { return isCanadian ? 0.05 : 0.0; });
}
document.write('<p>Price = $15.00; quantity = 2; thuế = 5%</p>');
document.write('<p id="tax-total">Total = $' + calculateTotal(15, 2).toFixed(2) + '</p>');
isCanadian = false;
document.write('<p>Không áp dụng thuế: $' + calculateTotal(15, 2).toFixed(2) + '</p>');
isCanadian = true;
