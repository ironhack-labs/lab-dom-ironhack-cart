// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    //... your code goes here
    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');
    const subtotal = product.querySelector('.subtotal span');
  
    const priceValue = price.innerHTML;
    const quantityValue = quantity.value;
  
    let subtotalValue = priceValue * quantityValue;
    subtotal.innerHTML = subtotalValue;
    
    return subtotalValue;
}


/*
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
*/  

// ITERATION 2
  //... your code goes here

// ITERATION 3
  //... your code goes here

  function calculateAll() {

    const productRows = document.getElementsByClassName('product');
  
    let total = 0;
    for (let i = 0; i < productRows.length; i++) {
      const subtotal = updateSubtotal(productRows[i]);
      total += subtotal;
    };

  const result = document.querySelector("#total-value span")
  result.innerHTML = total.toString();  
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target to remove is:', target.parentNode.parentNode); //parentNode is to move up in the tree.
  target.parentNode.parentNode.remove();
}

const removeButton = document.getElementsByClassName('btn-remove');
for(let i = 0; i < removeButton.length; i++) {
  removeButton[i];
  removeButton[i].addEventListener('click', removeProduct);
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
