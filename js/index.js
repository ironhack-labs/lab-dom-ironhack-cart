// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  let quantity = product.querySelector ('.quantity input');

  let unitPriceItem = price.innerHTML
  let quantityItem = quantity.value

  let subtotalEachProduct = unitPriceItem * quantityItem

  let eachProduct = product.querySelector ('.subtotal span')

  eachProduct.innerHTML = subtotalEachProduct

  
  return subtotalEachProduct


}

function calculateAll() {
 
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
 
///Iteration 2//

  let subTotal = 0;

  let everyProduct = document.querySelectorAll('.product');

  everyProduct.forEach(function (element) {
     subTotal += updateSubtotal(element);
  });

//// Iteration 3////

document.getElementById('total-value').querySelector('span').innerHTML = subTotal


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const tableBody = target.parentNode.parentNode.parentNode;
  tableBody.removeChild(target.parentNode.parentNode);

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach (element => {
    element.addEventListener('click', removeProduct);
  })

});
