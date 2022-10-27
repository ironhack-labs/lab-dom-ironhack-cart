/***********************************/
/* ITERATION 1: Calculate subtotal */
/***********************************/

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subtotalValue = quantity * price;

  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalValue;

  return subtotalValue;
}


/***********************************/
/* ITERATION 2 + 3: Calculate total*/
/***********************************/

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  let total = 0
  let productArr = document.querySelectorAll('.product').forEach((product) => {
    updateSubtotal(product);
    total += updateSubtotal(product);
    console.log(total);
    document.querySelector('#total-value span').innerText = total
  });    
}


/***********************************/
/* ITERATION 4: Remove product     */
/***********************************/

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const tr = event.currentTarget.parentNode.parentNode;
  tr.remove();
  calculateAll();
}



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  document.querySelectorAll('.btn-remove').forEach((product) => {
    product.addEventListener("click", removeProduct)
  })
});
