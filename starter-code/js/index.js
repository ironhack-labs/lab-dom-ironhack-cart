var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $del = document.getElementsByClassName("btn btn-delete");
var $create = document.getElementById("create");

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
  // Iteration 1.2 // Iteration 3
    updateAllSubtots();
    updateTotal();
}

$calc.addEventListener("click", calcAll);  

// Iteration 4

function deleteItem(e){
  var product = e.currentTarget.parentNode.parentNode;
  var table = e.currentTarget.parentNode.parentNode.parentNode;
  table.removeChild(product);
}
function loadDeleteButtons(){
for (var i = 0; i < $del.length; i++){
  $del[i].addEventListener("click", deleteItem)
}
}
loadDeleteButtons();

//iteration 5

function create() {
  //var userInput = document.getElementsByClassName("new")[0];
  debugger
  var product = document.getElementsByClassName("product")[0];
  var newProduct = product.cloneNode(true);
  newProduct.getElementsByClassName("name")[0].firstElementChild.innerHTML = document.getElementById("new-name").value;
  newProduct.getElementsByClassName("price")[0].innerHTML = document.getElementById("new-quantity").value;
  $cart.appendChild(newProduct); 
  loadDeleteButtons()
}

$create.addEventListener("click", create);
