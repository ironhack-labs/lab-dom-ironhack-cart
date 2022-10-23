// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  //... your code goes here

  // select price and quantity
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  //get priceValue and quantityValue, obtain subtotal
  const priceValue = price.textContent //gets the content of all elements
  const quantityValue = quantity.value //get a value from a form you can choose
  const subtotal = priceValue * quantityValue

  //select subtotal price and update

  product.querySelector('.subtotal span').textContent = subtotal

  //return subtotal
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const arrayProducts = document.querySelectorAll('.product') //create a matrix to contain every row of products
  let total = 0 //initialize a value for total
  // Loop for iterate over the matrix and execute updateSubtotal function for every index 
  for (let i = 0; i < arrayProducts.length; i++) {
    updateSubtotal(arrayProducts[i])

    // ITERATION 3
    //... your code goes here

    // iterate function adding value of the products to the total
    total += updateSubtotal(arrayProducts[i])


  }

  document.querySelector('#total-value span').textContent = total //select total value and insert total updated
  return total

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  let cartRow = event.querySelector('tbody')
  let singleProduct = event.querySelector('.product')
  let remove = event.removeChild(singleProduct)

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //similar to calculatePrices?

  const removeBtn = document.querySelector('.product button')
  removeBtn.addEventListener('click', removeProduct(event))



  //... your code goes here






});
