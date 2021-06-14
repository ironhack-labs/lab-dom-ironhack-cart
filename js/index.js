// ITERATION 1

//button functionality
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

//calculate subtotal
function updateSubtotal(product) {

  /////////////WORKING FOR ONE PRODUCT//////////////////
  console.log('Calculating subtotal, yey!');
  let priceEl = document.querySelector('.price span');
  let quantityInput = document.querySelector('.quantity input').value;
  //or: document.querySelector('.quantity input').value
  //-->accessing the two values: works.
  console.log(priceEl.innerHTML)
  console.log(quantityInput)

  //get the DOM element that should hold the subtotal
  //set the subtotal price to the corresponding DOM element
  let subtotalPrice = document.querySelector('.subtotal span').innerHTML
  subtotalPrice = priceEl.innerHTML * quantityInput;
  //return subtotalPrice;

  ////////////////WORKING FOR QUANTITY OF PRODUCTS/////////////////
  // console.log('Calculating subtotal, yey!');
  // let priceEl = document.querySelectorAll('.price span');
  // let quantityInput = document.querySelectorAll('.quantity input').value;
  // //or: document.querySelector('.quantity input').value
  // //-->accessing the two values: works.
  // console.log(priceEl.innerHTML)
  // console.log(quantityInput)

  // //get the DOM element that should hold the subtotal
  // //set the subtotal price to the corresponding DOM element
  // let subtotalPrice = document.querySelectorAll('.subtotal span').innerHTML 
  // subtotalPrice = priceEl.innerHTML * quantityInput;
  // calculateAll();

}
////<----doesnt display the subTotalValue... 


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let productNr = getElemntsByClassName('product');
  for (let i = 0; productNr.length > 0; i++) {
    updateSubtotal(productNr[i])

    // ITERATION 3
    //... your code goes here
    let totalSumElements = document.querySelector('totalValue span')

    ///add the elements of that array: .....
    let totalSum = document.getElementsByName('subtotalPrice')
    totalSum.innerHTML += updateSubtotal[i].priceEl

  }

}

// ITERATION 4


function removeProduct(event) {

  let removeCartItemButton = document.getElementByClassName('btn-remove');
  for (let i = 0; i < removeCartItemButton.length; i++) {
    let buttonR = removeCartItemButton[i];
    buttonR.addEventListener('clicked', function (event) {
      console.log('clicked')
    })

    const target = event.currentTarget;
    target.parentElement.parentElement.remove()



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
