// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector(".price span")
  
  const quantity = product.querySelector(".quantity input")
  
  const subtotal = product.querySelector(".subtotal span")

  const totalProduct = price.innerHTML * quantity.value

  subtotal.innerHTML = totalProduct.toFixed(2)

  return parseInt (subtotal.innerHTML)

}

// ITERATION 2
function calculateAll() {
  
  const singleProduct = document.querySelectorAll('.product')

  let calculatePrices = 0
  
  singleProduct.forEach(function (eachSingleProduct) {

  updateSubtotal(eachSingleProduct)

  calculatePrices += updateSubtotal(eachSingleProduct)

// ITERATION 3
    })
  const total = document.querySelector("#total-value span")
    
  total.innerHTML = calculatePrices.toFixed (2)

  return total.innerHTML
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
