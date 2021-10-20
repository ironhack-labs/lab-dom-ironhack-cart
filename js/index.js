// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = +product.querySelector('.price span').textContent;
  const quantity = +product.querySelector (`.quantity input`).value;
  const subTotal = price* quantity;
  product.querySelector (`.subtotal span`).textContent = subTotal;
  console.log( `price: `, price);
  console.log ("Quanity:",quantity);
  console.log ("sub Total:",subTotal);
  return subTotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll ('.product');
  let total = 0;
  [...products].forEach((singleProduct)=> {
    updateSubtotal(singleProduct);
    total += +singleProduct.querySelector(`.subtotal span`).textContent;
    
  })
  // ITERATION 3
  document.querySelector ("#total-value span ").textContent = total.toString ()
  console.log ("total")

}

// ITERATION 4

function removeProduct(event) {
  if (event.target.classList.contains("btn-remove")){
    const target = event.target;
    console.log ("the target in remove is:", target)
    target.closest("tr").remove();
    calculateAll()
  }
 
  //... your code goes here
}

// ITERATION 5

function createProduct() {

  const createProduct = document.querySelector('.creare-product');
  const name = createProduct.querySelector ('input[type="text"]').value;
  const html = ``



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
