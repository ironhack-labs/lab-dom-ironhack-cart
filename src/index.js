// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector(".quantity input")
  const subtotal = parseInt(price.innerText) * parseInt(quantity.value)
  const subTotalElement = product.querySelector(".subtotal span")
  subTotalElement.innerText = subtotal
  return subtotal
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  let total = 0
  products.forEach(product =>{
    updateSubtotal(product)
    total += updateSubtotal(product)
  })
  const totalValueElement = document.getElementById("total-value")
  totalValueElement.innerText = total
  return total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll("button.btn-remove")
  removeButtons.forEach(button => {
    button.addEventListener("click", function(event){
      removeProduct(event)
    })
  })
  //... your code goes here
});
