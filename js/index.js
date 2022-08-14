// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');



  let price = product.querySelector('.price span').innerHTML;

  let quantity = product.querySelector('.quantity input').value;

  let subTotal = price * quantity;

  return product.querySelector('.subtotal span').innerHTML = subTotal;



  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let totalPrice = 0;

  for (let i = 0; i < document.getElementsByClassName('product').length; i++) {
    updateSubtotal(document.getElementsByClassName('product')[i]);

    totalPrice += updateSubtotal(document.getElementsByClassName('product')[i]);
    console.log(totalPrice)
  }


  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = totalPrice


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
  let calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeAll = document.querySelector('.btn-remove');
  removeAll.addEventListener('click', removeProduct);

  for (let i = 0; i < document.querySelectorAll('.btn-remove').length; i++) {

    btnRemove = document.querySelectorAll('.btn-remove')[i];

    btnRemove.addEventListener('click', removeProduct)
  }
  //... your code goes here
});
