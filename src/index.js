// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  
  const priceInpt = price.innerText;
  const quantityInpt = quantity.value;

  const duckCalc = Number(priceInpt * quantityInpt);

  subtotal.innerText = duckCalc;
  
   return duckCalc;
}

function calculateAll() {
 // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
   // ITERATION 2
  const myProd = document.getElementsByClassName("product");
    console.log(myProd)
  if (myProd.length > 0){
    for(let i = 0; i < myProd.length; i++){
    const result = updateSubtotal(myProd[i])
    console.log(result)
    }
    const totalSub = document.querySelector("#total-value span")
    const total = totalSub.innerText
    total = result
  }
  // ITERATION 3

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
