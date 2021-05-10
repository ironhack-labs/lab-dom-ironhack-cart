// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price  =  product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  const revenue = price * quantity;

  subtotal.innerHTMl = revenue;

  return revenue;

}


  // ITERATION 2
  function calculateAll() {
    const products = document.querySelectorAll(".product");
  
    let totalSum = 0;
  
    for (i = 0; i < total.length; i++) {
      totalSum += updateSubtotal(products[i]);
    }
  

   
  //... your code goes here

  // ITERATION 3
  
  const total = document.querySelector("#total-value span");
  return (total.innerHTML = totalSum);
}

  //... your code goes here

  
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

  const removeButton = document.querySelector("#remove");
  removeButton.addEventListener("click", removeProduct);
  //... your code goes here
});
