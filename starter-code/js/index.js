var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');

let product = document.querySelector(".product");
let products = document.querySelectorAll(".product");

//Take the price and the quantity, multiply them and return SubTotal
function updateSubtot(product) {
  let productPrice = Number(product.querySelector('.pu > span').innerHTML);
  let productQty = product.querySelector('.qty input').value;
  let subTotal = productPrice * productQty;
  product.querySelector('.subtot > span').innerHTML = subTotal;
  return subTotal;
}

//For each product refresh the price and the total amount
function calcAll() {
  let subTotal = 0;
  [...cart.children].forEach(product => subTotal += updateSubtot(product));
  document.querySelector('h2 > span').innerHTML = subTotal;
}
calc.onclick = calcAll;

//Delete a product
let deleteButtons = document.getElementsByClassName('btn-delete');

for(let i=0; i < deleteButtons.length; i++){
  deleteButtons[i].onclick = function(e){
    e.target.parentNode.parentNode.remove();
  }
}

//Create a new product
let createButton = document.getElementById('create');

function createProduct() {
  let newLine = document.createElement('tr');
  newLine.setAttribute('class', 'product');
  newLine.innerHTML = `
      <td class = "name">
        <span>${(text).value}</span>
      </td>
      <td class = "pu">
        <span>${(number).value}</span>
      </td>
      <td class = "qty">
        <label>
          <input type = "number" value = "0" min = "0">
        </label>
      </td>
      <td class = "subtot">
        <span>$0</span>
      </td>
      <td class = "rm">
        <button class="btn btn-delete">Delete</button>
      </td>
      </tr>`
      cart.appendChild(newLine)
  console.log('estas pinchando el boton');
}
createButton.onclick = createProduct;
