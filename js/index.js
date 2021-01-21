// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price= product.querySelector('.price span');
  const quantity= product.querySelector('.quantity input');
  const subtotal= product.querySelector('.subtotal span');
  const priceVal= Number(price.innerHTML);
  const quantityVal= Number(quantity.value);
  const mult= priceVal * quantityVal
  subtotal.innerHTML= mult
  return mult
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 // ITERATION 3
  let products= document.getElementsByClassName('product')
  prodArr= [...products]
  let total=0
  for (i=0; i<prodArr.length; i++){
    total += updateSubtotal(prodArr[i]) 
    const totalPrice= document.querySelector('#total-value span');
    totalPrice.innerHTML= total
  }
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
} 

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtn=document.querySelectorAll('.btn btn-remove')
  for (i=0; i<removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", (removeProduct) => { 
    })
  }
  
});
