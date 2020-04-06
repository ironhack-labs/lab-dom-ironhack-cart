// ITERATION 1
//... your code goes here
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  // console.log('Calculating subtotal, yey!');
  // console.log(price.innerHTML);
  // console.log(quantity.value);
  const subTot = price.innerHTML * quantity.value ;
  // console.log(subTot);
  // return subTot;
  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = `${subTot}`;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // console.log (singleProduct);
  // // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  // console.log(allProducts);
  let total = document.querySelector('#total-value span').innerHTML;
  total = 0;
  console.log(total);
  for (let i = 0; i < allProducts.length; i++) {
    total = total + updateSubtotal(allProducts[i]);
    console.log(total);
    // return total;
    }
    // let sum = "";
    // sum = total.toString();
    // console.log(sum);
 }
  
  

  // IT;ERATION 3
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

  //... your code goes here
});
