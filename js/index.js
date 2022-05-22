// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
//... your code goes here

  const price = parseFloat(product.querySelector('.price span').innerText)
  const quantity = parseInt(product.querySelector('.quantity input').value)
  const subtotal = price * quantity
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2)

  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = Array.from(document.querySelectorAll('.product'))
  
  // end of test

  // ITERATION 3
  //... your code goes here
  const total = products.reduce((total, product) => {
    return total + updateSubtotal(product)
  }, 0)
  document.querySelector('#total-value span').innerText = total.toFixed(2)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector('.create-product input[type=text]')
  const namePro = productName.value
  const productPrice = document.querySelector('.create-product input[type=number]')
  const pricePro = productPrice.value
  parseFloat(productPrice)
  const createProduct = document.querySelector('.product').cloneNode(true);

  createProduct.querySelector('.name span').innerText = namePro
  createProduct.querySelector('.price span').innerText = pricePro
  
  createProduct.querySelector('.btn-remove').addEventListener('click', (event) => {
     removeProduct(event)
  })

  document.querySelector('tbody').append(createProduct);

  productName.value = ''
  productPrice.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove')
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', (event) => {
      const mensaje = confirm("¿Quieres borrar el producto?");
            if (mensaje) {
            removeProduct(event)
            }
            else {
            alert("Denegado el borrado");
            }
    });
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
