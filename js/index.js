// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseInt(product.querySelector('.price span').innerHTML);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = price * quantity;

  return price * quantity
}


// ITERATION 2
function calculateAll() {
  const productos = document.getElementsByClassName("product");
  for (let i = 0; i < productos.length; i++) {
    updateSubtotal(productos[i]);

  }
  // ITERATION 3
  let total = document.querySelector("#total-value span");
  total.innerHTML = [...productos].reduce(suma, 0)

  function suma(acc, valorActual) {
    return acc = acc + updateSubtotal(valorActual)
  }
}




// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});