// ITERATION 1
function updateSubtotal(product) {
  const quantity = product.querySelector(".quantity input").value;
  const subTotal = product.querySelector(".subtotal span");
  const price = product.querySelector(".price span").innerHTML;
  const total = `${Number(price * quantity)}`;
  subTotal.innerHTML = total;
  return total;
}
  
 // let price = product.querySelector(".price span").innerHTML;
 // let quantity = product.querySelector(".quantity input").value;
 // let subtotalPrice = price * quantity;
 // let subtotal = product.querySelector(".subtotal span").innerHTML;
 // subtotal = subtotalPrice;
 // return subtotal;


//function calculateAll() {
//  // code in the following two lines is added just for testing purposes.
//  // it runs when only iteration 1 is completed. at later point, it can be removed.
//  const singleProduct = document.querySelector('.product');
//  updateSubtotal(singleProduct);
//}
  // end of test

  // ITERATION 2
  //... your code goes here
  function calculateAll() {
    const everyProduct = document.querySelectorAll('tr.product');
    everyProduct.forEach(function (product) {
      updateSubtotal(product);
    })
  }


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
