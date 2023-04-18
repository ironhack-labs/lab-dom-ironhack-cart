// ITERATION 1 

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  
  const price = priceElement.innerHTML
  const quantity = quantityElement.value

  const subTotal = price * quantity;
  const subTotalElement = product.querySelector('.subtotal span');
  subTotalElement.innerHTML = subTotal;
  return subTotal;
  //... your code goes here
}




function calculateAll() {
 const arrayProducts = document.getElementsByClassName('product');
 let allPrices = 0; 
 for (i=0; i<arrayProducts.length; i++){
  allPrices += updateSubtotal(arrayProducts[i]);

 }
 
 const totalElement = document.querySelector('#total-value span')
 
 totalElement.innerHTML = allPrices

  // ITERATION 2 
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;// current target is a method to tell us the position in the tree
  console.log('The target in remove is:', target.parentNode.parentNode);// we go up the tree so that all the <tr> are removen
 target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.getElementsByClassName('btn-remove');
for(let i =0; i<removeButton.length; i++){
  removeButton[i].addEventListener('click', removeProduct);

}


  //... your code goes here
})


