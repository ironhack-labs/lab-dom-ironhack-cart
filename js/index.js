// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = document.querySelector('.price span').innerText
  let quan = document.querySelector('.quantity input').value
  let subtotal = price * quan;


document.querySelector(".subtotal span").innerText = subtotal

return subtotal
}
// console.log(quan)




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allproducts = document.querySelectorAll('.product');
  let total = 0;
  for (let product of allproducts) {
  total += updateSubtotal(product)
  
  console.log(product)
  
  
  // document.querySelector("#total-value span").innerText = total


  }


  //... your code goes here

  // ITERATION 3
  //... your code goes here
}
calculateAll()
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
