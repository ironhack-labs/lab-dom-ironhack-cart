// ITERATION 1

function updateSubtotal(product) {
  const price=product.querySelector('.price span');
    const priceValue= product.innerText;
const quantity=product.querySelector('.quantity input');
  const quantityValue= quantity.value;

  const subtotal=parseFloat(priceValue) * parseInt(quantityValue);
  
const subtotalElement=product.querySelector('.subtotal span');
    subtotalElement.innerText=Number(subtotal.toFixed(2));
    
    return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
const productsElements=document.getElementsByClassName('product');
let result =document.getElementsByClassName('product');
for (let i=0, len=productsElements.length|0; i<len; i=i+1|0) {
    result += "\n  " + productsElements[i].textContent;
}


  // ITERATION 3
  //... your code goes here
  for (let product of productsElements) {
  let subtotal = updateSubtotal(productsElements);
    total += subtotal;
}
const totalCart = document.querySelector('h2 span');

  totalCart.innerText = Number(total.toFixed(2));
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
