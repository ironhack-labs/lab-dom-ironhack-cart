// ITERATION 1
function updateSubtotal(product) {
  const priceHolder = product.querySelector('.price span');
  const price = priceHolder.innerHTML;
  const qunatityHolder = product.querySelector('.quantity input');
  const quantity = qunatityHolder.value;
  const subtotalPrice = price * quantity;
  // console.log(subtotalPrice)
  const subtotalHolder = product.querySelector(".subtotal");
  subtotalHolder.innerHTML = "$" + subtotalPrice;
  return subtotalPrice;
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // console.log(singleProduct)
  const products = document.getElementsByClassName("product");
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += updateSubtotal(products[i]);
  }
  // console.log(sum);
  const totalHolder = document.querySelector("#total-value span");
  totalHolder.innerHTML = sum;

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
