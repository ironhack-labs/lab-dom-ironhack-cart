// ITERATION 1

function updateSubtotal(product) {
const price = product.querySelector('.price span');
const quantity = product.querySelector('.quantity input');

const subtotal = price.innerText * quantity.value;
const showSubtotal = product.querySelector('.subtotal span')
showSubtotal.innerText = subtotal; 
console.log(subtotal);
return subtotal;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productList = document.getElementsByClassName('product');
  const productsArr = [...productList];
  let sum = 0;
  for (let i = 0; i < productsArr.length; i++) { 
    sum += updateSubtotal(productsArr[i]);
}
    console.log(sum);
    const total = document.querySelector('#total-value span')
    total.innerText = sum;
  };

  // ITERATION 3
  //... your code goes here

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productRow = target.parentNode.parentNode;
  productRow.remove();
  calculateAll();
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //to remove products
  const removeEffect = document.querySelectorAll('.btn-remove');
  const removeArr = [...removeEffect];
  removeArr.forEach((e) => {
    e.addEventListener("click", removeProduct);
  })

});


// // ITERATION 5

// function createProduct() {
//   //... your code goes here
// }


