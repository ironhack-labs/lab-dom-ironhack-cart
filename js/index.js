// ITERATION 1

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButtons = document.querySelectorAll(".btn.btn-remove")
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct)
  })

  let createButton = document.getElementById("create");
  createButton.addEventListener("click", createProduct);
  //... your code goes here*/
});


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(".price span").innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let subtotal = product.querySelector(".subtotal span")

  let subtotalPrice = price * quantity; 

  subtotal.innerHTML = subtotalPrice;
  //console.log(subtotalPrice);
  return subtotalPrice;

  //... your code goes here
}

function calculateAll() {
  // ITERATION 2
  let products = document.querySelectorAll(".product");
  products.forEach((product) => {updateSubtotal(product);})

  // ITERATION 3
  let total = document.querySelector("#total-value span");
  let totalPrice = 0;
  let subtotalEach = document.querySelectorAll(".subtotal span")
  
  subtotalEach.forEach(
    (subtotalPrice) => {
      total.innerHTML = (totalPrice += Number(subtotalPrice.innerHTML))
    }
  )
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  let elementRemove = target.parentNode.parentNode;
  elementRemove.remove();
  //... your code goes here
}


// ITERATION 5

function createProduct(event) {
  let target = event.currentTarget;
  let newProductValues = target.parentNode.parentNode;

  let newProductInfo = newProductValues.querySelectorAll("input");
  
  let firstRow = document.querySelector(".product");
  let tableBody = firstRow.parentNode;
  let newRow = firstRow.cloneNode(true);

  let newProductName = newRow.querySelector(".name span");
  newProductName.innerHTML = newProductInfo[0].value;

  let newPriceField = newRow.querySelector(".price span");

  let newProductPrice = Number(newProductInfo[1].value)
  
  newPriceField.innerHTML = newProductPrice;

  newRow.querySelector(".btn.btn-remove").addEventListener("click", removeProduct)
  tableBody.appendChild(newRow);

  document.querySelectorAll(".create-product input").forEach((input) => input.value = "");

}

  /*newProductPrice = Number(newProductPrice.toFixed(2));

  console.log(newProductPrice);
  console.log(typeof newProductPrice);
  
  if(newProductPrice.length === 1 || newProductPrice.length === 2) {
    newProductPrice += ".00"
  } else if (newProductPrice.length = 2) 
  */

  //element.cloneNode(true)
  //let quantity = product.querySelector(".quantity input").value;

  //let createButton = document.getElementById("create");
  //createButton.addEventListener(("click"))
  //... your code goes here




/*
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
*/