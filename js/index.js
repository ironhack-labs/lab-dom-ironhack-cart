// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerText);
  console.log(price);
  const quantity = Number(product.querySelector('.quantity input').value);
  console.log(quantity);
  // let subtotal = product.querySelector('.subtotal span').innerText;
  let subtotal1 = price * quantity;
  console.log(subtotal1);
  product.querySelector('.subtotal span').innerText = subtotal1;
  return subtotal1;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const holdSubTotal  = document.getElementsByClassName('product');
  for (element of holdSubTotal){
    updateSubtotal(element);
    console.log(holdSubTotal.innerText);
    // let subTotalArray = document.getElementsByClassName('product')
    // let totalHolder = subTotalArray.reduce((total, currentValue) => total + currentValue, 0).innerText;
    }
    
  // const subTotalArray = Number([...holdSubTotal].innerText);
  // console.log(subTotalArray);
  // 
  // console.log(totalHolder);
  // return totalHolder
  }
  // const total = numbers.reduce((accumulator, currentValue) => {
  //   console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
  //   return accumulator + currentValue;
  // }, 0)
// const products = document.getElementsByClassName('product')



  // ITERATION 3
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
