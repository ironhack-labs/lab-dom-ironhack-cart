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
  
  const firstParent = target.parentNode
  
  const secondParent = firstParent.parentNode

  const thirdParent = secondParent.parentNode

  thirdParent.removeChild(secondParent)

  calculateAll()
  
  }


// ITERATION 5

function createProduct() {


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const buttons = document.querySelectorAll('.btn.btn-remove')

  buttons.forEach(function (eachButton)
  {
    eachButton.addEventListener ('click', removeProduct)
  })

 

});
