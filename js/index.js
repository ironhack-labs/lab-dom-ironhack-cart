// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = +(product.querySelector('.price span').innerHTML)
  const quantity = +(product.querySelector('.quantity input').value)

  let result = price * quantity

  return product.querySelector('.subtotal span').innerHTML = result
}

// ITERATION 2 & 3
function calculateAll() {

  let products = Array.from(document.querySelectorAll('.product'))

  let total = products.reduce((acc, current) => {
    return acc + updateSubtotal(current)
  }, 0)

  return document.querySelector('#total-value span').innerHTML = total
 // Spread element (it's not an operator) works only with objects that are iterable (i.e. implement the @@iterator method). Array.from() works also on array-like objects (i.e. objects that have the length property and indexed elements) which are not iterable. 
}

// ITERATION 4

function productToRemove(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  

  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);

}

// ITERATION 5

function createProduct() {
  
  // Clonar un producto para crear uno nuevo y añadirlo
    const myList = document.querySelector('tbody')
    const myProduct = document.querySelector('tbody .product').cloneNode(true)
    

  // Recoger los datos
    const myProductName = document.querySelector("tfoot [type='text']").value
    const myProductPrice = document.querySelector("tfoot [type='number']").value
  
  // Meter datos en mi producto clonado
    myProduct.querySelector('.name span').innerHTML = myProductName;
    myProduct.querySelector('.price span').innerHTML = myProductPrice;
    myProduct.querySelector('.quantity input').value = 1;
    myProduct.querySelector('.subtotal span').innerHTML = 0;

    myList.appendChild(myProduct)
}




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.querySelector('tfoot .btn');
  createBtn.addEventListener('click', createProduct);

  const productsToRemove = document.querySelectorAll('.btn-remove')
  productsToRemove.forEach((product) => {
    product.addEventListener('click', productToRemove);
  })

  // PARA QUE FUNCIONE EL BOTON DE REMOVE DE LOS NUEVOS HAY QUE VOLVER A CARGAR EL 
  // CONTENIDO DEL HTML PARA QUE LEA LOS SIGUIENTES PRODUCTOS. NOSE HACERLO

});
