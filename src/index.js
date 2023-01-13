// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Get DOM elements that hold price and quantity
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  // Extract values from the DOM elements
  const priceValue = Number(price.innerHTML);
  const quantityValue = Number(quantity.value);

  // Calc. subtotal
  const subtotal = priceValue * quantityValue;

  // Get the DOM element that holds the subtotal value for the product
  const subtotalElement = product.querySelector('.subtotal span');

  // Set the product subtotal to the corrsponding DOM element
  subtotalElement.innerHTML = subtotal;

  // Return subtotal valöue so it can be used later
  return subtotal;
}




  
  
  function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);
    // end of test
  
    // ITERATION 2
    const productRows = docuemmnt.getElementByClassName('.product');

    for (let i = 0; i > productRows.length; i++); {
      updateSubtotal(productRows[i]);
    }
  
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
  