// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');

    let subtotalPrice = price.innerHTML * quantity.value;

    let subtotal = product.querySelector(".subtotal span");
  
    subtotal.innerHTML = subtotalPrice;
  
    return subtotalPrice;  
  
  }

function calculateAll() {
  // ITERATION 2
  let allProducts = document.getElementsByClassName('product');
  let arrayOfProducts = [...allProducts];
 
  let total = 0;
  arrayOfProducts.forEach((element)=>{
    total += updateSubtotal(element);
  });
// ITERATION 3
  let totalAll = document.querySelector('#total-value span')
  totalAll.innerHTML = total 
  // end of test

}
///////////////////////////////////////////////////////////////////////////////////////////////


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
