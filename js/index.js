// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')

  const priceValue = price.innerText
  // console.log(priceValue)
  const qtyValue = quantity.value
  // console.log(qtyValue)
  const subTotal = qtyValue * priceValue
  // console.log(subTotal)
  let subTotalPlace = product.querySelector('.subtotal span')
  subTotalPlace.innerText = subTotal
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let everyRow = document.getElementsByClassName('product')
  // updateSubtotal(everyRow)
  for (let i = 0; i < everyRow.length; i++) {
    updateSubtotal(everyRow[i])
    // console.log(everyRow[i])
  }


  // ITERATION 3
  //... your code goes here
  // let allTotal = document.querySelectorAll('.subtotal span')
  // console.log(allTotal)
  // let sumArray = []
  // for (let i = 0; i < allTotal.length; i++) {
  //   sumArray.push(allTotal[i].innerText)
  // }
  // console.log(sumArray)
  // let newValue = sumArray.reduce(function (previousValue, currentValue) {
  //     return parseInt(previousValue) + parseInt(currentValue)
  //   },
  //   0)
  // console.log(newValue)
  // const totalPricePlace = document.getElementById('total-value')
  // totalPricePlace.innerText = `Total: $${newValue}`

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