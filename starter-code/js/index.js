var $cart = document.querySelector('#cart tbody');
let $cartID = document.getElementById('cart')
var $calc = document.getElementById('calc');
let create = document.getElementById('create')

function updateSubtot($product) {
  //console.log("it is calling")
  let price = Number($product.querySelector('.pu span').innerText);
  let quantity = Number($product.querySelector('.qty label input').value)
  let amount = $product.querySelector('.subtot span')

  let subTotal = price * quantity
  amount.innerText =  subTotal
  return subTotal
}

function calcAll() {
  const products = $cart.getElementsByClassName('product')
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += updateSubtot(products[i]);
  }
  const result = document.querySelector('.total span');
  result.innerText = total
}

$calc.addEventListener('click',()=> calcAll())

$cartID.addEventListener("click", function(e) {
  if (e.target.className === "btn btn-delete") {
  const deleteRow = e.target.parentElement.parentElement;
    $cart.removeChild(deleteRow);
  }
});

create.addEventListener("click", function(){
  const newItem = document.getElementById('new-prod').value;
  const newPrice = document.getElementById('new-price').value;
  const newRow = document.createElement("tr");
  newRow.classList.add("product");

  newRow.innerHTML = `<td class="name"><span>${newItem}</span></td>
  <td class="pu">$<span>${newPrice}</span></td>
  <td class="qty"><label><input type="number" value="0" min="0"></label></td>
  <td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td>`

  $cart.appendChild(newRow);
})

