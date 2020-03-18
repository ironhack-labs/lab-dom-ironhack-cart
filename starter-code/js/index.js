//Produto
let product = document.querySelectorAll(".product");
//removeBtn
let removeBtn = document.querySelectorAll(".btn-remove");
//table
const table = document.querySelector("tbody");

//createBtn
const createBtn = document.querySelector("#create");


// ITERATION 1

function updateSubtotal() {
  //Preço
  let price = document.querySelectorAll(".price span");
  // ...
  //Subtotal
  let subtotal = document.querySelectorAll(".subtotal span");
  let accumulator = 0;

  [...price].map(($price, i) => {
    let unit = document.querySelectorAll("input[type='number']");

    unit = [...unit][i].value;
    let parcial = Number($price.innerHTML) * unit;
    
    [...subtotal][i].innerHTML = parcial;

    accumulator += parcial;
  })

  return accumulator;
}

function calculateAll() {
  //Total
  let total = document.querySelector("#total-value span");

  let totalSum = updateSubtotal();
  // ITERATION 3
  //...
  total.innerHTML = totalSum;
}


//EVENTS
//window load
window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

//click event on REMOVE button
[...removeBtn].map(elem => elem.addEventListener('click', function(e){
  productRemoveListener(e)
}, false));

//click event on CREATE button
createBtn.addEventListener("click", function(){
  createProduct();
}, false)


// ITERATION 4

function productRemoveListener(event) {
  
  let currentProduct = event.target.parentNode.parentNode;
  table.removeChild(currentProduct);

  calculateAll();
}

// ITERATION 5

function createProduct(event) {

  
    let productName = document.querySelector(".create-product input[type='text']");
    let productPrice = document.querySelector(".create-product input[type='number']");

if(productName.value != "" && productPrice.value != 0){

  table.innerHTML += `<tr class="product">
  <td class="name">
  <span>${productName.value}</span>
  </td>
  <td class="price">$<span>${productPrice.value}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>
  </tr>`
  
  removeBtn = document.querySelectorAll(".btn-remove");
  
  [...removeBtn].map(elem => elem.addEventListener('click', function(e){
    productRemoveListener(e)
  }, false));
  
  productName.value = "";
  productPrice.value = 0;
} else {
  alert("You must enter a price and a product name");
}
  // ...
  //text input value
  //number input value
  //appendChild() in tbody
}


