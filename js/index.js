// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span')
  let quantity = product.querySelector('.quantity input')
  console.log('Calculating subtotal, yey!');

  let subtotal = price.innerHTML * quantity.value
  let subtotalResult = product.querySelector('.subtotal span')

  subtotalResult.innerText = subtotal
  return subtotal

}

function calculateAll() {

  const multipleProduct = document.querySelectorAll('.product');

  let valueSumatory = 0

  for (let i = 0; i < multipleProduct.length; i++) {
    valueSumatory += updateSubtotal(multipleProduct[i]);
  }

  let totalValue = document.querySelector('#total-value span')
  totalValue.innerText = valueSumatory
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const removeGranParent = target.parentNode.parentNode
  removeGranParent.parentNode.removeChild(removeGranParent)

  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButton = document.querySelectorAll('.action button')
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].onclick = removeProduct
  }
});
