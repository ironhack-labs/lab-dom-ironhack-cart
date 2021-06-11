// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal =  price * quantity;
  product.querySelector('.subtotal > span').innerHTML = subTotal;

  return subTotal;
}
 


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

    // const products = document.querySelectorAll('.product');
    let total = 0;
    document.querySelectorAll('.product').forEach(function (product) {
      console.log(product);
      total += updateSubtotal(product);
    });
    console.log(total);
    document.querySelector('#total-value').innerText = `Total: $${total}`;
    }
      
      //document.querySelector('#total-value span').innerHTML = ;

    //use updateSubtotal function on each product
    //calculate sum of them
    //use function updateSubtotal() and calculate products
  

  

  // ITERATION 3
  //... your code goes here
  //reuse total value and update corresponding DOM element 
  //calculate total price for products in cart by summing all of subtotal returned by updateSubtotal()
  //display that value on DOM

//console.log(calculateAll());

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // const name
  // const price
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
