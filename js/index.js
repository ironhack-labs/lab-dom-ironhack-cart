// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span');
  let quantity = product.querySelector(".quantity input")
  //console.log(price.innerText * quantity.value)
  let subtotalCalculated =  price.innerText * quantity.value
  let subtotal = product.querySelector(".subtotal span")
  subtotal.innerText = subtotalCalculated
  return subtotalCalculated
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0
  let products = document.querySelectorAll(".product")
  products.forEach( (elem) => {
    total += updateSubtotal(elem)
  })
  
  
  // ITERATION 3
  //... your code goes here
  
    let totalSpan = document.querySelector("#total-value span")
    totalSpan.innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove()
  calculateAll()

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let createInputs = document.querySelectorAll(".create-product input")
  //console.log(createInputs)
  //let products = document.querySelectorAll(".product")
  if (createInputs[0].value === "" || createInputs[1].value === "") {
    alert("input/s vacio/s")
  } else {
    let newProduct = document.createElement("tr")
    newProduct.classList.add("product")
    newProduct.innerHTML = `<td class="name">  <span>${createInputs[0].value}</span></td><td class="price">$<span>${createInputs[1].value}</span></td><td class="quantity">  <input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action">  <button class="btn btn-remove">Remove</button></td>`
    let tableBody = document.querySelector("tbody")
    tableBody.append(newProduct)
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
  let removeButtons = document.querySelectorAll(".btn-remove")
  removeButtons.forEach( (eachButton) => {
    eachButton.addEventListener("click", removeProduct)
  })
  let createButton = document.querySelector("#create")
  createButton.addEventListener("click", createProduct)
});
