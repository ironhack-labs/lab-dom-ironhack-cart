// ITERATION 1

function updateSubtotal(product) {
  
  let priceDOM = product.querySelector('.price span');
  
  let quantityDOM = product.querySelector('.quantity input');
  let quantity = quantityDOM.value;
 
  let priceTotal = priceDOM.innerHTML * quantity;
 
  let subTotalDOM = product.querySelector('.subtotal span');
  subTotalDOM.innerText = priceTotal;

  return priceTotal
};


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let variosProductos = document.querySelectorAll(".product");
  let contenedor = 0;

  for(let elementoProducto of variosProductos){
    updateSubtotal(elementoProducto);
   
    let funcionTotalSingle = updateSubtotal(elementoProducto);
    contenedor+= funcionTotalSingle;
    console.log(contenedor);
    
  }
 
  
  // ITERATION 3
  let totalValueDOM = document.querySelector("#total-value span");
    totalValueDOM.innerHTML= contenedor;
    
    return contenedor

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
