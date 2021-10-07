// ITERATION 1

function updateSubtotal(product) {

  const price=product.querySelector(`.price span`)
  const quantity=product.querySelector(`.quantity input`)
  const priceValue=parseInt(price.innerHTML);
  const quantifyValue=parseInt(quantity.value);



  const subtotalValue= priceValue*quantifyValue;


  const subtotal = product.querySelector(`.subtotal span`)

  subtotal.textContent = subtotalValue
  return subtotalValue

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  
  updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  
  const allProduct=Array.from(document.querySelectorAll('.product'))


  const subtotalAll = allProduct.map(product => updateSubtotal(product))


  // ITERATION 3

  const total= document.querySelector('#total-value span')
  
  const totalvalue= subtotalAll.reduce((acc,cv) => acc+cv)

  console.log(totalvalue)
  total.innerText=totalvalue

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
