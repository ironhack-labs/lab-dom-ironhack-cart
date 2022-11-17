// ITERATION 1

function updateSubtotal(product) {
  const price = document.querySelectorAll('.price span').innerHTML;
  const quantity = document.querySelectorAll('.quantity input').value;
  const subtotal = document.querySelectorAll('.subtotal span');
  
  const priceNum = Number(price);
  const quantityNum = Number(quantity)
  const subtotalNum = priceNum * quantityNum

  subtotal.innerHTML = subtotalNum
  
  console.log(subtotalNum);
  return subtotalNum;
// console shows number
}


  // have to think about this idea once more - I think it is not the right approach for this solution
  // With this idea I don't get the foreach product sum ....
  /* const priceProducts = document.getElementsByClassName('product');

  priceProductsArray = [...priceProducts];
  
  const priceTotal = priceProductsArray.reduce((accumulator, value) => {
    return (accumulator + value);
  }, 0);

  const priceTotalNum = Number(priceTotal);
  updateSubtotal(priceTotalNum)
  console.log(priceTotalNum); */


  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /*  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  function calculateAll() {
  let productAll = document.getElementsByClassName('product');
  let total = 0;
  
   productAll.forEach(product => total += updateSubtotal(product));


  // ITERATION 3
  document.getElementById('total-value span').innerHTML = total;
}
// still needs to be done ---
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
