// ITERATION 1

function updateSubtotal(product) {
//Get price and quantity values and convert them to numbers

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  console.log(Number(price), Number(quantity));

// Get the subtotal value
// Render the subtotal value in element class ".subtotal"

  const subtotal = Number(price) * Number(quantity);

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;
  return subtotal;

}

function calculateAll() {
  
  // ITERATION 2
  // Add new product to html
  // call new function uptate total

  const cartItemElements = document.getElementsByClassName('cart-item');

  let totalValue = 0;

  for (cartItemElement of cartItemElements) {
    totalValue += updateSubtotal(cartItemElement);
  }
  
  totalValue;
  // ITERATION 3

  const totalValueSpan = document.querySelector('#total-value span').innerHTML = totalValue;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  // Access parent of current target

  const productRow = target.parentNode.parentNode
  // Delete child associated to current target
  const productTable = productRow.parentNode

  productTable.removeChild(productRow)
                                      
  calculateAll();

}

// ITERATION 5

function createProduct() {
  
  // const createProductRow = document.getElementsByClassName('create-product')

  const createProductRowFoot = document.querySelector('tfoot')
  const newProductNameInput = createProductRowFoot.querySelector('input').value

  crea


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const productRemoveButtons = document.getElementsByClassName('btn-remove');
  for (const removeButton of productRemoveButtons) {
    removeButton.addEventListener('click', removeProduct)
  }

  const productCreateBtn = document.getElementById('create')
  productCreateBtn.addEventListener('click', createProduct)
                      
});
