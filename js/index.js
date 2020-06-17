// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotalPrice = price * quantity;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.querySelectorAll(".product");
  
  let sum = 0;
  for (let i = 0; i < allProducts.length; i++) 
  {
    sum += updateSubtotal(allProducts[i]);
    console.log(updateSubtotal(allProducts[i]))
  }

  // allProducts.forEach((row) => {
  //   updateSubtotal(row);
  // });

  const totalPrice = document.querySelector("#total-value span");
  totalPrice.innerHTML = sum;
  
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {

  const removeItemBtn = document.getElementsByClassName('btn btn-remove');
  for (elem of removeItemBtn) {
    elem.addEventListener('click',removeProduct)
  }
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
