// ITERATION 1




function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    //... your code goes here
    const $price = product.querySelector(".price span"); 
    const $quantity = product.querySelector(".quantity input");
    const subTotalPrice  = product.querySelector(".subtotal span");
    
    const theQuality = Number($quantity.value); 
    const thePrice = Number($price.innerHTML);      

    const subtotal  = thePrice * theQuality;    
       
    return (subTotalPrice.innerHTML = subtotal);

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const $products = document.querySelectorAll('.product');
  let total = document.querySelector('#total-value span')
  let sum = 0;

  $products.forEach((product) => {
    sum += updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
   return (total.innerHTML = sum);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
   //button > td > tr, elimina tr (product)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
