// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const totalPrice = quantity * price;
  product.querySelector(".subtotal span").innerText = totalPrice;
  return totalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach(function (product) {
    removeProduct(product)
    total += updateSubtotal(product);
    
  });

  document.querySelector("#total-value span").innerText = total;

}

// ITERATION 4



function removeProduct(event) {
   const target = event.currentTarget;

  console.log('The target in remove is:', target.parentNode.parentNode);
  //const row = target.parentNode.parentNode

  
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

  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(function(button) {
    button.addEventListener("click", removeProduct);
  })
  
});
