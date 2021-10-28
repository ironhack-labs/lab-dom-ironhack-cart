
function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const total = price * quantity;
  product.querySelector('.subtotal span').innerText = total
  return total;
}

function calculateAll() {
  
  const multiProducts = document.getElementsByClassName('product');
  for (let product of multiProducts) {
    updateSubtotal(product)

  
    const subtotals = document.querySelectorAll('.subtotal span')
    let total = 0;
    for (let subtotal of subtotals) {
      total += Number(subtotal.innerText);
    }   
    
    document.querySelector('#total-value span').innerText = total
  




  }

  // ITERATION 3
  //... your code goes here
  const totalValueSpan = document.querySelector('#total-value span');
  totalValueSpan.textContent = totalPrice;
  return totalPrice;
  

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const removeButton = document.querySelectorAll(".btn-remove")

for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].setAttribute("onclick", "removeProduct(this)")
}

function removeProduct(e) {
    const parent = e.parentNode.parentNode
    parent.remove()
}
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
