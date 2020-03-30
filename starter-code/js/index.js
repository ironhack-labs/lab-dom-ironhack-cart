// ITERATION 1

function updateSubtotal($product) {

  // console.log($product)
  
  let $productPrice = Number($product.querySelector('.price span').innerHTML)
  // console.log($productPrice)

  let $productQtity = Number($product.querySelector('.quantity input').value)
  // console.log($productQtity)

  let $subtotal = $productQtity * $productPrice
  // console.log($subtotal)

  $product.querySelector('.subtotal span').innerHTML = $subtotal
  // console.log($productSubtotal)

}

// ITERATION 2

function calculateAll() {

  let $allProducts = document.querySelectorAll('.product')
  console.log($allProducts)

  $allProducts.forEach(elem => updateSubtotal(elem))
  
  
  let $subtotalProducts = document.querySelectorAll('.subtotal span')

  console.log($subtotalProducts) 
  let total = 0
  $subtotalProducts.forEach(element => total =  total + Number(element.innerHTML))

  console.log(total.toFixed(2))

  document.querySelector('h2 span').innerHTML = total.toFixed(2)
  

}



window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');
  console.log($calculateTrigger)

  $calculateTrigger.addEventListener('click', calculateAll);

  
  
});

// ITERATION 4

function productRemoveListener(event) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}

