// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price > span');
  const quantity = product.querySelector('.quantity > input');

  let priceValue = price.innerHTML
  let quantityValue = quantity.value

  let subtotal = priceValue * quantityValue
  console.log(subtotal)

  let subtotalClass = product.querySelector('.subtotal > span')
  subtotalClass.innerHTML = subtotal

  return subtotal

}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // get all products
  let total = 0
  const allProducts = document.querySelectorAll('.product');
  // loop through all products and update the subtotal each time
  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i])
    /* no need to add additional logic to subtract from subtotal 
    because once the LENGTH is reduced the subtotal 
    will update automatically
   */
  }


  // ITERATION 3
  //... your code goes here
  let totalValue = document.body.querySelector('#total-value > span')
  totalValue.innerHTML = total


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentElement.parentElement.remove()

  calculateAll()


}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newRow = document.querySelector('create-product')

  let newProductName = document.querySelector('.create-product input[type="text"]').value

  let newProductPrice = document.querySelector('.create-product input[type="number"]').value
  console.log(newProductName)
  console.log(newProductPrice)

  // Create the entire structure of the row, programmatically.

  // newRow.appendChild(newProductName)
  // newRow.appendChild(newProductPrice)






}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createButton = document.getElementById('create')
  createButton.addEventListener('click', createProduct)
  //... your code goes here
  let removeButtons = document.querySelectorAll('.btn-remove')
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
    console.log(removeButtons[i].parentElement.parentElement)
    /* parentElement will always return an HTML tag, 
    wheres parentNode can be an element node, text node or more. */
  }
});