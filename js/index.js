// ITERATION 1
function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText
  let quantity = product.querySelector('.quantity input').value
  subtotal = price * quantity
  product.querySelector('.subtotal span').innerText = subtotal
  return price * quantity

}


console.log('Calculating subtotal, yey!');

//... your code goes here


function calculateAll() {
  const allProducts = document.querySelectorAll('.product')
let total=0
  allProducts.forEach((product) => {
    let subtotal = updateSubtotal(product)
    total+= subtotal
  })
console.log(allProducts)
document.querySelector('#total-value span').innerText =total






  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3

  

  

  //... your code goes here

}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let parentOfTarget = target.parentNode;

   parentOfTarget.removeChild(target); 
}

// ITERATION 5
function createProduct() {


  
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.action')
  removeBtn.forEach((product) => {
    addEventListener('click', removeProduct);


    const createProductBtn = document.getElementById('create');
    createProductBtn.addEventListener('click', createProduct);  
    });
  //... your code goes here
});
