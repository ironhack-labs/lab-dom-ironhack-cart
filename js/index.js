// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = document.querySelector('.price span');
  let quantity = document.querySelector('.quantity input');
  //-->accessing the two values: works.
  console.log(price)
  console.log(quantity)

  // let priceValue = price.innerHTML
  // let quantityValue = quantity.value
  // let subtotalPrice = priceValue * quantityValue

  let subtotalPrice = price.innerHTML * quantity.value

  //get the DOM element that should hold the subtotal
  let subtotalField = document.querySelector('.subtotal span')

  //set the subtotal price to the corresponding DOM element
  subtotalField.innerHTML = '....'  ///<<<<-----here's a mistake....
  //return subtotalPrice;
}
////<----doesnt work yet




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
              // const singleProduct = document.querySelector('.product');
              // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
let productNr = getElemntsByClassName('product')
                //tried haha:) ->>
                      // for (let i=0; productNr.length > 1; i++)
                      //     (productNr[i]) => {updateSubtotal()}

                      //Wo.Wie Rferenz table#cart???



  // ITERATION 3
  //... your code goes here
  let totalSumElements = document.querySelector('totalValue span')

  ///add the elements of that array: .....
  let totalSum = document.getElementsByName('subtotalPrice')
  totalSum.innerHTML = 

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
