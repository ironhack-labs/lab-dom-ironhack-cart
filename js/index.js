// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const  price = product.querySelector('.price span'); 
  const quantity= product.querySelector('.quantity input'); 
  const subTotalPrice = parseInt(price.innerHTML) * parseInt(quantity.value); 
  const SubTotal = product.querySelector('.subtotal span')
  subTotal.innerHTML = subTotalPrice
  return subTotalPrice
}

//we should use inner html 

function calculateAll() {
  const allproducts = document.getElementsByClassName('product');
  const arrProd = [...allproducts]; 
  arrProd.forEach(updateSubtotal)
 const total =  document.querySelector("#total-value > span")
  const total.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {

  .addEventListener(,removeProduct)
}
btn btn-remove

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
