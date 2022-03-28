// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('input')
  let finalResult = price.textContent * quantity.value
  product.querySelector('.subtotal span').innerHTML = finalResult

  return finalResult
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let priceTotal = 0
  let tagName = document.getElementsByTagName('tr')
  for (let i = 0; i < tagName.length; i++) {
    if (tagName[i].querySelector('input')) {
      priceTotal += updateSubtotal(tagName[i]);
    }
  }
  let resultFinal = document.querySelector('#total-value span');
  resultFinal.innerHTML = priceTotal





  //const singleProduct = document.querySelector('.product')
  //console.log(singleProduct)







  // let allProducts = document.querySelectorAll('.product')
  // //console.log(allProducts)



  // allProducts.forEach(eachproducts => {

  //   //   document.getElementsByClassName('quantity')


  //   console.log(eachproducts)
  // })








  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
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
