// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').innerHTML);
  let quantity = parseFloat(product.querySelector('.quantity input').value);
  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = price * quantity;
  return subTotal.innerHTML;
  //... your code goes here
}
function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product');
  let productsArr = [...products];
  let total = productsArr.reduce((acc,product) => acc + parseFloat(updateSubtotal(product)),0);

  // ITERATION 3
  let totalValue = document.querySelector("#total-value span")
  totalValue.innerHTML = total
  console.log(totalValue)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let toBeRemoved = target.parentElement.parentElement
  toBeRemoved.parentElement.removeChild(toBeRemoved)
  calculateAll()
  
}

// ITERATION 5

function createProduct() {
  let table = document.querySelector("tbody")
  let newName = document.querySelector('#createName').value
  let newPrice = document.querySelector('#createPrice').value
  let product = document.querySelector(".product")
  let newItem = product.cloneNode(true)
  newItem.querySelector(".name span").innerText = newName
  newItem.querySelector(".price span").innerText = newPrice
  newItem.querySelector(".btn-remove").addEventListener('click', removeProduct)
  table.appendChild(newItem)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll('.btn-remove');
  const removeArray = [...removeButton]
    for (i=0;i<removeArray.length;i++) {
      removeArray[i].addEventListener('click', removeProduct);
    }
  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});
