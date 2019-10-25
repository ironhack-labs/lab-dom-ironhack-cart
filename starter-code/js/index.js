var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $create = document.getElementById('create');
const createInput = document.querySelectorAll(".new input")
//let products = document.querySelectorAll(".product");
//let itemInput = document.querySelectorAll(".product input");
// let itemUnitPrice = document.querySelectorAll(".pu span");
//let subTot = document.querySelectorAll(".subtot span");
const basketTot = document.querySelector("h2 span");
let deleteButtons = document.querySelectorAll('.btn-delete');


function updateSubtot() {
  let products = document.querySelectorAll(".product");
  let subTot = document.querySelectorAll(".subtot span");
  let itemUnitPrice = document.querySelectorAll(".pu span");
  let itemInput = document.querySelectorAll(".product input");
  // Iteration 1.1
  for (let i = 0; i < products.length; i++) {
    let unitPrice = Number(itemUnitPrice[i].innerText);
    let inputValue = Number(itemInput[i].value);
    let price = (unitPrice * inputValue);
    subTot[i].innerText = `${price.toFixed(2)}`;
  }
}

function calcAll() {
  let subTot = document.querySelectorAll(".subtot span");
  // Iteration 1.2

  updateSubtot()
  let finalPrice = 0;
  subTot.forEach(subtot => finalPrice += Number(subtot.innerText));
  basketTot.innerText = `${finalPrice.toFixed(2)}`;
}


function deleteBut() {
  console.log("clicked");
  this.parentElement.parentElement.remove();
}

function addProduct() {
  console.log("product added");
  let product = document.createElement("tr");
  product.className = "product";
  product.innerHTML = `<td class="name">
  <span>${createInput[0].value}</span>
</td>

<td class="pu">
  $<span>${Number(createInput[1].value).toFixed(2)}</span>
</td>

<td class="qty">
  <label>
    <input type="number" min="0">
  </label>
</td>

<td class="subtot">
  $<span>0</span>
</td>

<td class="rm">
  <button class="btn btn-delete">Delete</button>
</td>`

  $cart.appendChild(product);
  deleteButtons = document.querySelectorAll('.btn-delete');
  deleteButtons.forEach(button => {
    button.onclick = deleteBut;
  });
}

$calc.onclick = calcAll;
$create.onclick = addProduct;

deleteButtons.forEach(button => {
  button.onclick = deleteBut;
});