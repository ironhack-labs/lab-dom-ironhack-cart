// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  console.log(product);
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const priceValue = price.innerHTML
  //const quantityValue = quantity.innerHTML
  console.log(priceValue);
  console.log(quantity);
  var oneSub = priceValue*quantity
  console.log(oneSub);
  product.querySelector('.subtotal span').innerHTML = oneSub;
  return oneSub;
  //... your code goes here
}
 // ITERATION 2
  //... your code goes here
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
   const everyProduct = document.getElementsByClassName("product");
   console.log(everyProduct);
   var totalValue = 0;
   for (let i = 0; i < everyProduct.length; i++) {
     var subtotalOfProducts = updateSubtotal(everyProduct[i]);
     totalValue += subtotalOfProducts
   }
   
     // ITERATION 3
  //... your code goes here
   document.querySelector("#total-value span").innerText = totalValue;
  //updateSubtotal(everyProduct);
  //updateSubtotal(singleProduct);
  // end of test
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
  console.log(calculatePricesBtn);
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.getElementsByClassName("btn-remove");
  console.log(removeBtn);
    for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);}
});
  
  //removeBtn.addEventListener()
  //... your code goes here
