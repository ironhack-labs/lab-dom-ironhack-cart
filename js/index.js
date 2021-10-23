// ITERATION 1


  function updateSubtotal(product) {
    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');

    const subtotalPrice = quantity.value*price.innerHTML
   
    
    product.querySelector('.subtotal span').innerHTML = subtotalPrice
    
   return subtotalPrice
    
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  //cojemos los productos (el query selecrto by ID no funcionaba)
  let multipleProducts = document.querySelectorAll('.product')
  let total = 0
  
  for (i=0; i<multipleProducts.length; i++){
    
   updateSubtotal(multipleProducts[i])
   document.querySelector('#cart')[i] = updateSubtotal(multipleProducts[i])
  }
   
  multipleProducts.forEach(eachProduct => {
    updateSubtotal(eachProduct);
    
  });
  
  multipleProducts.forEach(eachProduct => {
    total += parseFloat(eachProduct.querySelector('.subtotal span').innerHTML);
  });

  //Seteamos (agregamos) el resultado de la suma de los products 
  document.querySelector('#total-value span').innerHTML=total;
  return total
  
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
