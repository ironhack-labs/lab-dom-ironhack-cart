// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

const price = product.querySelector('.price span').innerText
const quantity = product.querySelector('.quantity input').value
let sum = price * quantity
let subtotal = product.querySelector('.subtotal span')
subtotal.innerText = sum
console.log(sum)
return sum
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
    // ITERATION 2
    // ITERATION 3

    const productArray = document.querySelectorAll('.product');
    const newArr = [...productArray];
       let total = newArr.reduce((acc, product) => {
      return acc + updateSubtotal(product);
    }, 0);
      document.querySelector('#total-value span').innerText = total;
  }

// ITERATION 4

function removeProduct(event) {
  event.currentTarget.parentNode.parentNode.remove();
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
