// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  const priceValue = price.innerHTML
  const quantityValue = quantity.value
  const productSubTotal = priceValue*quantityValue
  const subtotal = product.querySelector(".subtotal span")
  subtotal.textContent = productSubTotal
  return productSubTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let totalValue = 0
  // ITERATION 2
  const cartItems = document.querySelectorAll("#cart .product")
  cartItems.forEach(element => {
    totalValue += updateSubtotal(element)
  });
  // ITERATION 3
  const total = document.querySelector("#total-value span")
  total.textContent = totalValue
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parent = target.parentNode.parentNode.parentNode
  parent.removeChild(target.parentNode.parentNode)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  //get values
  newProductName = document.querySelector(".create-product input[type=text]")
  newProductPrice = document.querySelector(".create-product input[type=number]")
  //clone element - this is bad, if there is no element left anymore
  const newProductElement = document.querySelector(".product").cloneNode(true)
  //set new Values to the clone
  newProductElement.querySelector(".name").textContent = newProductName.value
  newProductElement.querySelector(".price span").textContent = newProductPrice.value
  //add remove eventListener
  newRemoveButton = newProductElement.querySelector(".product .btn-remove")
  newRemoveButton.addEventListener("click", removeProduct)
  //get tbody of document to append to
  const body = document.querySelector("tbody")
  //append new element to tablebody
  body.appendChild(newProductElement)
  //clear inputs
  newProductName.value = ""
  newProductPrice.value = "" //test
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //remove Button
  const removeButtons = document.querySelectorAll(".product .btn-remove")
  //console.log(removeButtons)
  removeButtons.forEach((removeButton) => {removeButton.addEventListener("click", removeProduct)
  })

  // create button
  const createButton = document.querySelector("#create")
  createButton.addEventListener("click", createProduct)
  
});
