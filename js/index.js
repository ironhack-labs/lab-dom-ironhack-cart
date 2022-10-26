// ITERATION 1

function updateSubtotal(product) {

console.log('Calculating subtotal, yey!');

   const price = product.querySelector('.price span');
   const quantity = product.querySelector('.quantity input');

   const priceValue = parseFloat(price.innerText);
   const quantityValue = quantity.valueAsNumber;
//   // price.innerHTML = '';
//  // quantity.innerHTML = '';

   let totalSub = priceValue * quantityValue;
  let subClass = product.querySelector('.subtotal span');
  
   subClass.innerHTML = totalSub;
   return totalSub;

}

function calculateAll() {
//   // code in the following two lines is added just for testing purposes.
//   // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
//   // end of test

//   // ITERATION 2
   const products = document.querySelectorAll('.product')
   let total = 0;

   for (let i = 0; i < products.length; i++) {
      // updateSubtotal(products[i])
     total += updateSubtotal(products[i])
   }
   
   // ITERATION 3
    const grandTotal = document.querySelector('#total-value span')
    grandTotal.innerHTML = total;

    // return grandTotal;
 }

// ITERATION 4

function removeProduct(event) {
   const target = event.currentTarget;
   console.log('The target in remove is:', target);
   const row = target.parentNode.parentNode
   const ancestor = row.parentNode

   ancestor.removeChild(row)
   calculateAll()
 }

// ITERATION 5

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove')
  for (let buttons of removeButtons) {
    buttons.addEventListener('click', removeProduct)
  }
});
