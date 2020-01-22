var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $create = document.getElementById("create"); 

function updateSubtot($product) {
  // Iteration 1.1

for(let i=0; i< $product.length; i++){
  let productPrice = $product[i].querySelector(".pu span").innerText;
  let productQuantity = $product[i].querySelector(".qty input").value;
  let productSubtotal = productPrice * productQuantity;
  $product[i].querySelector('.subtot span').innerText = productSubtotal;
} 

}

function calcAll() {
  // Iteration 1.2
  let $products = document.querySelectorAll('.product');
  let products = Array.from($products);
  updateSubtot(products)
  let result = 0;

  if (products !== []) {
    $products.forEach(elem => result += elem.querySelector('.pu span').innerText * elem.querySelector('.qty input').value);
  }
  document.querySelector('h2 span').innerHTML = result; 

}
$calc.onclick = calcAll;

function createProduct() {
  let create = document.querySelector('#cart tbody');

  create.insertAdjacentHTML('beforeend', '<tr class="product"><td class="name"><span>Ironshirt</span></td><td class="pu">$<span>15.00</span></td><td class="qty"><label><input type="number" value="0" min="0"></label></td><td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td></tr>');

}
createProduct();

function deleteButtons(){
  let arrayDeleteButtons = document.querySelectorAll('.btn-delete')
  arrayDeleteButtons.forEach(function (button) {
    button.addEventListener("click", deleteProduct);
  });
}
deleteButtons();

function deleteProduct(event) {
  let button = event.currentTarget;
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function createYourProduct(){
  let newProductName = document.querySelector(".new input[type='text']").value;
  let newProductPrice = document.querySelector(".new input[type='number']").value;
  let row = document.querySelector(".product"); 
  let newRow = row.cloneNode(true); 
  let cart = document.querySelector("#cart tbody"); 
  let name = newRow.querySelector(".name");
  let price = newRow.querySelector(".pu span"); 
  price.innerHTML = newProductPrice; 
  name.innerHTML = newProductName; 
  let button = newRow.querySelector(".btn-delete"); 
  button.addEventListener("click", deleteProduct); 
  cart.appendChild(newRow); 
}

$create.onclick = createYourProduct;
$calc.onclick = calcAll; 