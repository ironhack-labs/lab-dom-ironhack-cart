// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').innerText)

  const quantity = product.querySelector('.quantity input').valueAsNumber

  let subtotalPrice = price * quantity

  const subtotalElement = product.querySelector('.subtotal span')

  subtotalElement.innerText = subtotalPrice

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // console.log("Single product" + singleProduct);
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);



  // let total = 0;
  const allProducts = document.getElementsByClassName("product")
console.log(allProducts);
  const allProductsArray = [...allProducts];
  console.log(allProductsArray);
  // allProductsArray.forEach(function(domElement){
  //  domElement.innerHTML
  // });
  /*
  console.log("All products: " + typeof allProducts + typeof singleProduct);
     for (let i = 0; i < allProducts.length; i++){
         total = singleProduct + allProducts[i]
     }
 */
 
     updateSubtotal(allProducts);

  

  // ITERATION 3
  //... your code goes here
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
