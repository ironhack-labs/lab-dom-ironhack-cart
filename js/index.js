function updateSubtotal(product) {
 // console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let displaySubTotalPrice = product.querySelector('.subtotal span');

  var subTotalPrice = price * quantity;
 // displaySubTotalPrice = displaySubTotalPrice.innerHTML = subTotalPrice;


  return displaySubTotalPrice.innerHTML = subTotalPrice;;
}


function calculateAll() {
  const singleProduct = document.getElementsByClassName('product');
  let total = 0;

  Array.prototype.forEach.call(singleProduct, function(element) {
    let oneLineProduct = element;
    let oneProductSubTotal = updateSubtotal(oneLineProduct);
    total = oneProductSubTotal + total;
   // return oneProductSubTotal;
});

document.querySelector('#total-value span').innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);

  let productLine = target.parentNode.parentNode;
  let parentLine = document.querySelector('tbody');
   parentLine.removeChild(productLine);
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveBtn = document.querySelectorAll(".btn.btn-remove");
  console.log(typeof allRemoveBtn, allRemoveBtn)
  Array.prototype.forEach.call(allRemoveBtn, function(element) {
  element.addEventListener('click',removeProduct);
 

});


});

