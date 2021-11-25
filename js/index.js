// ITERATION 1

function updateSubtotal(product) {
  //Traeme del HTML a Class = price y quantity
  const price = product.querySelector('.price span');
  const quantity = product.querySelector(".quantity input");
  // Sacar el valor que se le da en el HTML
  const quantityVal = quantity.value;
  const priceVal = Number(price.innerHTML);
  // Calculamos el SubTotal con los valor del HTML 
  const subTotal = priceVal * quantityVal;
  const subTotalDon = product.querySelector(".subtotal span");

  return subTotalDon.innerHTML = subTotal;

}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let sumTotal = 0;

  allProducts.forEach((product) => {
    sumTotal += updateSubtotal(product);
  });
  // ITERATION 3
  //... your code goes here
  let totalPrice = document.querySelector("#total-value span") 
  return (totalPrice.innerHTML = sumTotal);
}

// ITERATION 4

function removeProduct(event) {
  //The currentTarget event property returns the element whose event listeners triggered the event.
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove() //button > td > tr, elimina tr (product)
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll('.btn-remove');
  removeButton.forEach((btn) =>{
    btn.addEventListener('click', removeProduct);
  })
  //... your code goes here
});
