// ITERATION 1

function updateSubtotal(product) {
   console.log('Calculate subtotal');

    //... your code goes here

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  console.log(price, quantity);
  let subTotal = parseFloat(price)*parseFloat(quantity);
  product.querySelector(".subtotal span").innerHTML = subTotal;
  return subTotal;



}

function calculateAll() {
 
  const products = [...document.querySelectorAll(".product")];
  let total = 0;

  products.forEach(function(singleProduct){
    let subTotalProduct = updateSubtotal(singleProduct);
    total +=  subTotalProduct;
  });

 
 

  // ITERATION 2
  //this is the previous step
  

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = total;
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
