// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceVal=parseInt(price.innerText);
  const quantityVal = parseInt(quantity.value);
  const totalProduct= priceVal*quantityVal;
  const mySubtotal= product.querySelector('.subtotal span');
  mySubtotal.innerText=totalProduct;
  return totalProduct;
}

//ITERATION 2

function calculateAll() {
  const products= document.getElementsByClassName('product');
  let totalSum= 0;
  for(i=0; i<products.length; i++){
    const totalProducts= updateSubtotal(products[i]);
    totalSum+=totalProducts;
  }

  // ITERATION 3
  const totalValue=document.querySelector('#total-value span');
  totalValue.innerText=totalSum;
  console.log(totalSum)
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.parentNode.parentNode;
  const productTable= productRow.parentNode;

  productTable.removeChild(productRow)
  
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons= document.querySelectorAll('.btn-remove');
  for (let removeButton of removeButtons){
      removeButton.addEventListener('click', removeProduct)
  } 
});
