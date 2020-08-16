// ITERATION 1

function updateSubtotal(product) {  
    const $price = product.querySelector('.price span').innerText;
    const $quantity = product.querySelector('.quantity input').value;
    const $subtotal = product.querySelector('.subtotal span')
    const multiplier = +$price * +$quantity

    return $subtotal.innerHTML = multiplier
}

function calculateAll() {
  const multiProduct = document.querySelectorAll('.product');
  for (let i = 0; i < multiProduct.length; i++) { 
    updateSubtotal(multiProduct[i]);
  };
  
  const $total = document.querySelector("#total-value span")
  const $subtotal = document.querySelectorAll('.subtotal span')
  let suma = 0
  for (let i = 0; i < $subtotal.length; i++) { 
    suma += Number($subtotal[i].innerText)
    $total.innerText = suma
  };
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtn = document.querySelectorAll(".btn .btn-remove")
  for (let i = 0; i < removeBtn; i++) { 
    removeBtn.addEventListener('click', removeProduct);
  }
});