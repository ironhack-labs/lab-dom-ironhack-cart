// ITERATION 1
let sum = 0

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.product input').value;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = price * quantity;
  sum+= price * quantity
  };
  // ITERATION 2

  function calculateAll() {
    const listOfProducts = document.getElementsByClassName('product');
    const arraylistOfProducts = [...listOfProducts]
    arraylistOfProducts.forEach(element => {
      updateSubtotal(element)
      
    });
    
    const theTotal = document.querySelector('#total-value span');
    theTotal.innerHTML = sum;
    sum = 0
    }


  // ITERATION 3
  //... your code goes here



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
