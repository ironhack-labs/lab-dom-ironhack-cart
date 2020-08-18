// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  // console.log(price);
  let quantity = product.querySelector('.quantity input').value;
  // console.log(quantity);

  let multiply = price * quantity
  // console.log(multiply);
  
  let subTotal = product.querySelector('.subtotal span')
  subTotal.innerText = multiply; //reassigment
  
  return multiply

  }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  let allProducts = document.querySelectorAll('.product');
  // console.log(allProducts);
  let total = 0
  allProducts.forEach((product) => {
  updateSubtotal(product)
  total +=updateSubtotal(product)
})

  // console.log(newProduct);


  // ITERATION 3
  //... your code goes here
  
  
  document.querySelector('#total-value span').innerText = total
  



}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parent = event.target.parentElement;
  const grandFather = parent.parentElement;
  const princ = grandFather.parentElement;

  princ.removeChild(grandFather);  

  calculateAll();;
}



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');

  removeBtn.forEach((button) => {
    button.addEventListener('click', removeProduct)
    
  })

  //... your code goes here
});
