// ITERATION 1


function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerHTML 

  const quantity = product.querySelector(".quantity input").value
  const subtotal = Number(price) * Number(quantity);
  const subtotalElement = product.querySelector(".subtotal span")
  subtotalElement.innerHTML = subtotal;
  return subtotal 
}



function calculateAll() {


  
   const cartItemElements = document.getElementsByClassName('product');

  let totalValue = 0;

  for(let cartItemElement of cartItemElements) {
    totalValue += updateSubtotal(cartItemElement);
  }
 



  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = totalValue
}

function removeProduct(event) {
  const target = event.currentTarget;

  const productRow = target.parentNode.parentNode;

  const productTable = productRow.parentNode;

  productTable.removeChild(productRow);

  calculateAll();
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
