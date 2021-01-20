// ### Iteration 1: updateSubtotal


function updateSubtotal(product) {

const price = product.querySelector('.price span ').textContent;

const subtotal = product.querySelector('.subtotal span ');

const quantity = product.querySelector('input').value;
const subtotalPrice = price*quantity;

//change textContent from subtotal 
subtotal.textContent = subtotalPrice

return subtotalPrice;

}


function calculateAll() {
 // code in the following two lines is added just for testing   purposes. //*const singleProduct = document.querySelector('.product')



  let total = 0;
  document.querySelectorAll('.product').forEach(function (product) {
    console.log(product);
    total += updateSubtotal(product);
  });
  console.log(total);
  document.querySelector('#total-value').innerText = `Total: $${total}`;
}

// ITERATION 4

function removeProduct(event) {
  /* This function is a copy from the solution */ 
  
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  const product = target.parentNode.parentNode;
  product.remove();
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();
}


// ITERATION 5

function createProduct() {
 //your code 
}

window.addEventListener('load', () => {
  
  //CaluclatePriceBtn
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  console.log(calculatePricesBtn )


/* this party copy from the solution */ 
  //CaluclatePriceBtn
  const removeProductBtns = document.querySelectorAll('.btn-remove');
  removeProductBtns.forEach(function (button) {
  button.onclick = removeProduct;
  });
  });
    
   






