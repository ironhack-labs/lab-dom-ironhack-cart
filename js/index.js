// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(`.price span`).innerText;
  const quantity = product.querySelector(`.quantity input`).value;
  const newSubtotalElement = product.querySelector(`.subtotal span`)
  console.log(price);
  console.log(quantity);
  newSubtotalElement.innerText = price * quantity;
  return price * quantity
}

function calculateAll() {

  const allProducts = document.querySelectorAll(`.product`)
  let total = 0
  allProducts.forEach((product) => {
    let subtotal = updateSubtotal(product)
    total += subtotal
  })
  console.log(allProducts);
  newTotal = document.querySelector(`#total-value span`).innerText=total
 


  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

  document.querySelectorAll(`.btn-remove`).forEach((removeButton) => {
    removeButton.onclick = (eventObj) => {
      eventObj.currentTarget.parentNode.parentNode.remove()
    }})
