// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const result = Number(price * quantity);

  let subtotal = product.querySelector('.subtotal span').innerText = result;

  return subtotal;


}

function calculateAll() {
  // ITERATION 2 & 3
  const productRow = document.getElementsByClassName("product")
  let totalValue = (document.querySelector('#total-value span'));
  let finalresult= 0;
  
  for (let i = 0; i < productRow.length; i++){
    finalresult += (updateSubtotal(productRow[i]));
  }

  return totalValue.innerText = finalresult;
}

// ITERATION 4
function removeProduct(event) {

  const rowToRemove = event.currentTarget.parentNode.parentNode;
  rowToRemove.parentNode.removeChild(rowToRemove);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBotton = document.getElementsByClassName("btn-remove");
  for(let i = 0; i <removeBotton.length; i++){
    removeBotton[i].addEventListener('click', removeProduct);
  }
});
