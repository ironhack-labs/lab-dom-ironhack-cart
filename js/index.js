// ITERATION 1


function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotalPrice = price.innerHTML * quantity.value
  const subtotal = product.querySelector('.subtotal span')
 
  subtotal.innerText = subtotalPrice.toFixed(2)

  return subtotalPrice
}

function calculateAll() {
  
  const allProducts = document.querySelectorAll('.product');
  
  let valueSumatory = 0

  for (let i = 0; i < allProducts.length; i++){

    valueSumatory += updateSubtotal(allProducts[i])
  } 
  
  const totalValue = document.querySelector('#total-value span')

  totalValue.innerText = valueSumatory.toFixed(2)
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;

  const deleteGrandParent = target.parentNode.parentNode

  deleteGrandParent.parentNode.removeChild(deleteGrandParent)

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButton = document.querySelectorAll('.action button')

  for (i = 0; i < removeButton.length; i++) {

    removeButton[i].onclick = removeProduct
  }
  //... your code goes here
});
