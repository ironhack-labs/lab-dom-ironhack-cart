// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = product.querySelector('.subtotal span');
  const total = price * quantity
  subTotal.innerHTML = total
  return total
}


function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  const arrayAllProducts = [...allProducts];
  arrayAllProducts.forEach(element => {
    updateSubtotal(element)
    console.log(element)
  });
  const sum = arrayAllProducts.map(product => updateSubtotal(product)).reduce((a, c) => a + c);

  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = sum;
  console.log(sum)
}


// ITERATION 4

function removeProduct(event) {
  event.currentTarget.parentNode.parentNode.remove();
  calculateAll(); //
  // const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  // const product = target.parentNode.parentNode;     // => two parents means that I target root that are two steps backwards
  // product.remove();
  // calculateAll(); // calcula again
}

  //... your code goes here


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName("btn-remove");
  const arrayRemoveButtons = [...removeButtons];
  arrayRemoveButtons.forEach(element => {
    element.addEventListener("click", removeProduct); 
  });
  //... your code goes here
});
