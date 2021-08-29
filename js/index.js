

window.addEventListener('load', () => {
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(removeButton => {removeButton.addEventListener('click', removeProduct)})
  
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct)
});

// ITERATION 1


function updateSubtotal(product) {
  
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let priceString = price.innerText;
  let quantityString = quantity.value;
  
  let subTotalNumber = Number(priceString) * Number (quantityString)
  
  let subTotal = product.querySelector('.subtotal span')

  subTotal.innerHTML = subTotalNumber

  return subTotalNumber;
}

// ITERATION 2 and 3

function calculateAll() {

  let list = document.getElementsByClassName('product')
  let totalAbsoluto = 0;

  for (let i=0; i<list.length; i++){
    totalAbsoluto += updateSubtotal(list[i]);
    let cartTotal
    cartTotal = document.querySelector('#total-value span')
    cartTotal.innerHTML = totalAbsoluto
  }
}

/// BONUS ///

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.remove();
  calculateAll()
}

// ITERATION 5

function createProduct() {

  let productName = document.get

  const target = document.getElementsByTagName("tbody")
  console.log(target)


  /* const target = event.currentTarget.parentNode.parentNode.parentNode
  console.log("CreateProduct target: " + target) */

}

