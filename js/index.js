// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let unitPrice = price.innerHTML
  let quantityProduct = quantity.value
  console.log(unitPrice)
  console.log(quantityProduct)
  let subtotal = parseFloat(unitPrice * quantityProduct)
  console.log(subtotal)
  product.querySelector('.subtotal span').innerHTML = subtotal
  //console.log('Calculating subtotal, yey!');
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  let total = 0
  const allProducts = document.getElementsByClassName('product')
  for (let item of allProducts) {
    updateSubtotal(item)
    let subtotals = item.querySelector('.subtotal span').innerHTML
    total += parseFloat(subtotals)
    total.toFixed(2)
    //const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //total.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(subtotals)
    console.log(item)
    //console.log(totalArray)
    console.log(total)
  }
  console.log(allProducts)
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  // const parent = target.parentNode.parentNode.parentNode
  // const child = target.parentNode.parentNode
  // parent.removeChild(child)
  //console.log(parent)
  let i = target.parentNode.parentNode.rowIndex;
  document.getElementById('cart').deleteRow(i);
  console.log(i)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  console.log('holiii')
  const item = document.querySelector('.newItem input').value;
  const itemPrice = document.querySelector('.newItemPrice input').value;
  console.log(item)
  console.log(itemPrice)
  let cloneTable = document.getElementById('cart');
  let cloneRow = document.querySelectorAll('tbody .product')[0];
  let allRow = cloneRow.cloneNode(true);
  console.log(allRow)
  allRow.querySelector('.name span').innerHTML = item
  allRow.querySelector('.price span').innerHTML = itemPrice
  cloneTable.appendChild(allRow);
  allRow.classList.add('newBtn')
  const button = document.querySelector('.newBtn .btn-remove')
  button.addEventListener('click', (e) => {
    removeProduct(e)
  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const allRemoveButtons = document.querySelectorAll('.btn-remove')
  console.log(allRemoveButtons)
  allRemoveButtons.forEach(function (eachRemoveButton) {
    eachRemoveButton.addEventListener('click', removeProduct);
  })
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

});
