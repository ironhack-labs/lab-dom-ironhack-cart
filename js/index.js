// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  
  const quantity = product.querySelector('.quantity input').value;
   
  const subtotal = product.querySelector('.subtotal span');

  const subtotalValue = price * quantity;

  product.querySelector('.subtotal span').textContent = subtotalValue;

 return subtotalValue;




  

}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0 
  const allProducts = document.querySelectorAll('.product')
  allProducts.forEach(element => {
    total += updateSubtotal(element)
  });

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span')
  totalValue.innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', );
  
  document.querySelector('#cart tbody').removeChild(target.parentNode);


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
