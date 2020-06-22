// ITERATION 1

function updateSubtotal(product) {
  const  price  =  product.querySelector ( '.price span' ); 
  const  quantity  =  product.querySelector ( '.quantity input' ) ;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = Number(price.innerHTML) * quantity.value;
  return Number(subtotal.innerHTML);
}
// ITERATION 2 - 3

function calculateAll() {
  const allProducts = document.querySelectorAll(".product");
  let sum = 0;
  for (let i = 0; i < allProducts.length; i++) 
{
  sum += updateSubtotal(allProducts[i]);
  console.log(updateSubtotal(allProducts[i]))
}
  const totalPrice = document.querySelector("#total-value span");
  totalPrice.innerHTML = sum;
}



//BONUS
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
