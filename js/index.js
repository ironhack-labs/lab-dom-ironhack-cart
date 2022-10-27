// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  //... your code goes here
  const forPrice = price.innerText;
  const forQuantity = quantity.value;
  const totalPrice = forPrice * forQuantity;
  const forSubTotal = product.querySelector(".subtotal span")
  
  forSubTotal.innerHTML = totalPrice 
   return totalPrice 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
      let elProducto = document.getElementsByClassName('product')
     let contador = 0
     for(let i = 0; i < elProducto.length; i++){
      contador += updateSubtotal(elProducto[i]);
    } 
  
  // ITERATION 3
  let elElemento = document.getElementById('total-value')
  let elementoTotal = elElemento.getElementsByTagName('span')
  elementoTotal[0].innerHTML = contador
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
