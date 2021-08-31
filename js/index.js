// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let arrSumTot = []
  for (let i = 0; i < product.length;i++){
    const price = product[i].querySelector('.price span');
    const quantity = product[i].querySelector('.quantity input');
    const subtotal = product[i].querySelector('.subtotal span');

    let priceNum = parseInt(price.innerHTML);
    let quantityNum = parseInt(quantity.value);
    console.log(subtotal)
    let subtotalNum = priceNum * quantityNum;
    subtotal.innerHTML = `${subtotalNum}`
    arrSumTot.push(subtotalNum)

  }
  console.log(arrSumTot);
  return arrSumTot
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
    // ITERATION 2
  //... your code goes here
  let multiProduct = document.getElementsByClassName('product');
  console.log(multiProduct)
  //updateSubtotal(multiProduct)
  /*
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  */
  // end of test

  
  // ITERATION 3
  //... your code goes here
  let arrResultFinal = updateSubtotal(multiProduct);
  let sumTotal = 0;
  for(let i = 0; i < arrResultFinal.length; i++){
    sumTotal += arrResultFinal[i]
  }
  const total = document.querySelector('#total-value span')
  total.innerHTML = `${sumTotal}`
  console.log(sumTotal)
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
  let removeBtn = document.getElementsByClassName("btn btn-remove")
  
   
  //... your code goes here
});
