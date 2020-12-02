// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('input').value;
  const priceXQuantity = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = priceXQuantity;
  return subtotal.innerHTML;
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach(product => {
    updateSubtotal(product);
    total += Number(updateSubtotal(product));
  });

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const product = (event.currentTarget).parentNode.parentNode; // -> Es el abuelo del evento 'btn-remove' === tr 'product' -> target === product
  const target = product;
  const tBody = document.getElementsByTagName('tbody')[0]; // ¿Como se hace escalable si se añadiese otra tabla? --> ¿Añadiendo una clase?
  tBody.removeChild(target);
  calculateAll(-target); // -> pasando el negativo de target (= product) se resta el importe automáticamente de calculateAll()
}

// ITERATION 5

function createProduct(event) {
  // Crea una copia profunda de la primera row "product" para usar como "plantilla"
  const tBody = document.getElementsByTagName('tbody')[0];
  const productToCopy = document.querySelector('tbody .product');
  const newProduct = productToCopy.cloneNode(true);

  // Crea el target e itera sobre los inputs ProductPrice y ProductName para extraer sus valores:
  const createProduct = (event.currentTarget).parentNode.parentNode; 
  const target = createProduct.querySelectorAll('input');
  let targetName;
  let targetPrice;
  target.forEach(input => {
    input.type.includes('text') ? targetName = input.value : targetPrice = input.value; 
  });

  // Modifica la copia de la primera row "product" y añade los valores ProductPrice y ProductName extraídos
  const newProductPrice = newProduct.querySelector('.price span');
  const newProductName = newProduct.querySelector('.name span');
  newProductPrice.innerHTML = targetPrice;
  newProductName.innerHTML = targetName;

  
  // Añade la copia de "product" con el innerHTML actualizado a la tabla.
  tBody.appendChild(newProduct);
  createProduct.reset();
  // target.forEach(input => {
  //   input.reset();
  // });
  // console.log(targetName);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.querySelectorAll('.btn-remove');
  removeProductBtns.forEach(removeProductBtn => {
    removeProductBtn.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});

