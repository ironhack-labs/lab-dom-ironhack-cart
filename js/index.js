// ITERATION 1
function updateSubtotal(product) {
  const quantity = product.querySelector(".quantity input").value;
  const subTotal = product.querySelector(".subtotal span");
  const price = product.querySelector(".price span").innerText;
  const subtotalPrice = price * quantity;
  subTotal.innerText = subtotalPrice;
  return subtotalPrice;
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

  // ITERATION 2 + 3
  //... your code goes here
  function calculateAll() {
    const everyProduct = document.querySelectorAll('tr.product');
    let total = 0;
    everyProduct.forEach(function (product) {
      updateSubtotal(product);
      total = total + updateSubtotal(product);
    });
    document.querySelector("#total-value span").innerHTML = `${total}`;
  }


  // ITERATION 3
  //... see Iteration 2
  // let total = 0;
  // total += ...
  // document.querySelector("#total-value span").innerHTML = `$${total}`;

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  // if target fires / if event (Click) (send by browser) / click: addEventListener (see)
  //access parent, call removeChild
  //target.parentNode.removeChild();
  // if (target = truthy) {return quantity = ""};
  // Make sure the price gets updated accordingly when you remove products from the shopping cart.
  //calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const everyRemoveBtn = document.querySelectorAll(".btn.btn-remove");
  everyRemoveBtn.forEach(function (removeButton) {//Uncaught TypeError: removeBtn.forEach is not a function
  removeButton.addEventListener('click', removeProduct);
  })

});
