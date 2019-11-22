var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $product = document.getElementsByClassName("product")[0];
var $quantity = document.getElementsByClassName("quantity")[0];
console.log($product);

//iteration 1
function updateTotal() {
  var total = document.getElementById("total");
  console.log(total);
  total.innerHTML = 0;
  var subtotals = document.getElementsByClassName("subtotal")
  console.log(subtotals);
    for(let i = 0; i< subtotals.length; i++){
      subvalues = parseInt(subtotals[i].innerHTML)
      total.innerHTML = parseInt(total.innerHTML) + subvalues;
  }
}

function updateSubtot(item) {
  // Iteration 1.1
  var quantity = parseInt(item.getElementsByClassName("quantity")[0].value);
  var price = parseInt(item.getElementsByClassName("price")[0].innerHTML);
  var subtotal = item.getElementsByClassName("subtotal")[0];
  subtotal.innerHTML = quantity * price;
}

function updateAllSubtots() {
  var items = document.getElementsByClassName("product");
    for (var i = 0; i< items.length; i++){
    updateSubtot(items[i]);
}
}

function calcAll() {
  // Iteration 1.2
    updateAllSubtots();
    updateTotal();
}

$calc.addEventListener("click", calcAll);  

