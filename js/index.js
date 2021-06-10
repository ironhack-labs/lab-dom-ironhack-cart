// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText; //parseFloat ou Number p/ retornar um número. Usei innerText pois 25 é um texto e quero que retorne apenas o texto sem a tag, já que ja acessei a tag span em .price span.
  const quantity =  product.querySelector ('.quantity input').value;
  const subTotal = price * quantity;
  product .querySelector ('.subtotal span').innerText = subTotal;
  

  console.log('Calculating subtotal, yey!');
  return subTotal

 
};


// ITERATION 2
function calculateAll() {

  
  const allProducts  = document.getElementsByClassName ('product');
  const calculateTotal = document.querySelector('#total-value span');

  let total=0;

  for (let i = 0; i<allProducts.length; i++) {
     total += updateSubtotal(allProducts[i]);
  }
  calculateTotal.innerText = total;
  console.log(total);

 

}
   // ITERATION 3
  

     
  
 

// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
/*  const singleProduct = document.querySelector('.product');
updateSubtotal(singleProduct); */
// end of test








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
