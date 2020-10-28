// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let theSubtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = theSubtotal;
  // subtotal
  return theSubtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  // const singleProduct = document.querySelector('.product');
  let total = 0;
  const allProducts = document.querySelectorAll('.product');
  console.log(allProducts)
  allProducts.forEach((item) => {
    total += updateSubtotal(item);
  })
  // let total = allProducts;
  // return allProducts; 
  console.log(total)
  document.querySelector('#total-value span').innerText = total;

  } // end calculateAll


  //... your code goes here

  // ITERATION 3
  //... your code goes here

// to fixed subtotal.toFixed.
// ITERATION 4

function removeProduct(event) {

  // const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  // const product = target.prentNode.parentNode;
  // product.remove();
  // //target.parentNOde.parentNode.parentNOde.removeChild(target.parentNode)
  // //... your code goes here
  // calculateAll();
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
