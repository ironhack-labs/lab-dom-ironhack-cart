
// ITERATION 1

function updateSubtotal(product) {////**** */
  console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const precio=priceElement.innerHTML
  const cantidad=quantityElement.value
  const Sub=precio*cantidad
  const ElemSubTotal=product.querySelector('.subtotal span')
  console.log("Sub total", Sub)
  console.log("ElementoSubtotall", ElemSubTotal)
  ElemSubTotal.innerHTML=Sub
  return Sub
  
  //console.log(Sub)
  //console.log("precio", precio, "cantidad",cantidad)
  
  //... your code goes here
}

function calculateAll() {
  
  const singleProduct = document.querySelector('.product');
  const allProducts = document. getElementsByClassName('product')
  console.log(allProducts)
  let Total=0
  for(i=0;i<allProducts.length;i++){
    console.log('iterando', allProducts[i])
    x=updateSubtotal(allProducts [i])
    Total+=x
    
  }
  document.querySelector('#total-value span').innerHTML = Total


  updateSubtotal(singleProduct);
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
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  console.log(calculatePricesBtn)
  //... your code goes here
});
