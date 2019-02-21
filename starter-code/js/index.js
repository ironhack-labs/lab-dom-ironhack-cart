function getPrice() {
  var result = document.getElementById("productPrice").innerHTML;
  var regex = /(\d+)/g;
  var price = result.match(regex);
  var qty = document.getElementById("quantity").value;
  var realQty = Number(qty);
  var totalPrice = price * realQty;
  document.getElementById("finalPrice").innerHTML = '$'+totalPrice;
  console.log(totalPrice); 
  }
