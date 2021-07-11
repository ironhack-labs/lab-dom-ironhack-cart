// ITERATION 1

// const { product } = require("puppeteer");

function updateSubtotal(product) {
  const price = Number(product.querySelector(".price span").textContent);
  // const priceValue = Number(price.textContent)
  const quantity = Number(product.querySelector(".quantity input").value);
  // const quantityValue = Number(quantity.value) 
  const subtotal = product.querySelector(".subtotal span") // careful to take "PRODUCT" and not "DOCUMENT"
  const subtotalPrice = price * quantity
  subtotal.textContent = subtotalPrice
  // console.log("price " + price + " quantity " + quantity + " subtotal " + subtotalPrice)
  return subtotalPrice
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalPrice = 0
  const products = document.querySelectorAll(".product"); // renders it into an ARRAY format !!!
  products.forEach(product => {
    totalPrice += updateSubtotal(product)
  });

  document.querySelector("#total-value span").textContent = totalPrice
  }

  // ITERATION 3
  //... your code goes here



// function cloneProduct(product) {
//   const singleProduct = document.querySelector('.product');
//   const cart = document.querySelector("#cart tbody");
//   const newProduct = singleProduct.cloneNode(true)
//   cart.appendChild(newProduct)
// }



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("target.parentNode.parentNode " + target.parentNode.parentNode);
  console.log("target.parentNode " + target.parentNode);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
}



// ITERATION 5

function createProduct() {
  const newProduct = document.createElement("tr")
  newProduct.classList.add("product")
  const cart = document.querySelector("#cart tbody");
  cart.appendChild(newProduct)


  //... your code goes here
}

window.addEventListener('load', () => { // wait for everything to be loaded before activating the button
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const btnRemove = document.querySelectorAll(".btn-remove")
  btnRemove.forEach (button => {
    button.addEventListener('click', removeProduct) // DONT CALL THE FUCTION WITH ()
  })

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct)

  //... your code goes here
});


calculateAll()