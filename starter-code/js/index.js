var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var allItemsList = document.getElementsByClassName("product");
var allProducts = [...allItemsList];

console.log($cart);
function updateSubtot(e, $product) {
  e.preventDefault()
  console.log($product);

  var totalSum = 0;
  $product.forEach(function(product) {
    //Get price per unit value
    var priceCollection = product.getElementsByClassName("pu")[0];
    var price = priceCollection.getElementsByTagName("span")[0];
    price = price.innerHTML
    console.log("price ", price)

    //Get quantity value
    var quantityCollection = product.getElementsByClassName("qty")[0];
    var quantity = quantityCollection.getElementsByTagName("input")[0];
    quantity = quantity.value;
    console.log("qunt ", quantity);

    //Calculate subtotal price
    var subtotal = (price * quantity).toFixed(2);
    console.log("sub ", subtotal);

    //Modify the HTML subtotal
    var subtotalPrice = product.getElementsByClassName("subtot")[0];
    subtotalPrice = subtotalPrice.getElementsByTagName("span")[0];
    subtotalPrice.innerHTML = subtotal;
    console.log("sbt ", subtotalPrice);

    //Update totalSum
    totalSum += Number(subtotal);
  })
  console.log("TOTAL ", totalSum);
  return totalSum;
}

function calcAll() {
  // Iteration 1.2
  $calc.addEventListener('click', function(e){
    var totalSum = updateSubtot(e, allProducts);

    //Get the total price
    var total = document.getElementsByClassName("total")[0];
    var totalPrice = total.getElementsByTagName("span")[0];
    console.log("total price ", totalPrice)

    //Modify the total in HTML
    totalPrice.innerHTML = totalSum;
    console.log("total count ", totalSum);
  })
}

$calc.onclick = calcAll();
