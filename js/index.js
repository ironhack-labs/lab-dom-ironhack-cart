// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').textContent);
  const quantity = Number(product.querySelector('.quantity input').value);
  //console.log (quantity);
  subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal;
  //console.log(subtotal);
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const trNodes = document.getElementsByClassName('product');
  let sum = 0;
  for(item of trNodes){
    sum = sum + updateSubtotal(item);
  }
  document.querySelector('#total-value span').innerText = sum;   

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4
const allRemoveButtons = document.querySelectorAll('.btn-remove');
for(button of allRemoveButtons){ 
  button.addEventListener('click',function removeProduct(event){
      const target = event.currentTarget.parentNode.parentNode;
      console.log('The target in remove is:', target);
      target.remove()
})
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
