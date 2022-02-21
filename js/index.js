// ITERATION 1


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //alert("Calculate Prices clicked!")
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity > input')

  const valuePrice = price.innerText
  const valueQuantity = quantity.value

  let subtotalPrice = valuePrice * valueQuantity
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = subtotalPrice

  console.log(subtotalPrice)
  return subtotalPrice



  // with the parameter product I can have not th first
  // product, but the one am into, cause with document.queryS...
  // I get the first product I meet, alwaays the first.
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  const products = document.getElementsByClassName("product")
  const productsArray = [...products]
  const selectTotalElement = document.querySelector("#total-value span")
  let total = 0

  productsArray.forEach((element) => {
    total += updateSubtotal(element)
  })
    
  selectTotalElement.innerText = total
  console.log(total)
  return total





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

  window.addEventListener('click', () => {
    const allRemoveButtons = document.querySelectorAll('.btn-remove')
    const ArrayOfAllRemoveButtons = [...allRemoveButtons]
    ArrayOfAllRemoveButtons.forEach((element) => {
      element.addEventListener('click', removeProduct)
    })

  
    
  })
  
  
  

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
});

