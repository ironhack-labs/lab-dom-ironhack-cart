// ITERATION 1
function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML)
  const quantity = Number(product.querySelector('.quantity input').value);
  const subtotalValue = price * quantity;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = subtotalValue;

  return subtotalValue;
}

function calculateAll() {
  let totalValue = 0;

  // ITERATION 2
  const trProducts = document.querySelectorAll('tbody > tr');

  for (element of trProducts) {
    updateSubtotal(element)
    totalValue += updateSubtotal(element)
  };
  
  // ITERATION 3
  const total = document.querySelector('#total-value span')
  
  total.textContent = totalValue

}

//ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  target.parentNode.parentNode.remove();

  calculateAll();
}

//ITERATION 5
function createProduct() {
  let copiedNode = document.querySelector('.product').cloneNode(true);
  const inputName = document.querySelector('input[type="text"]').value;
  const inputPrice = document.querySelector('input[placeholder="Product Price"]').value;

  if (inputName === '' || inputPrice === '') {
    alert('Please insert a name and a price.');
    return
  }

  document.querySelector('tbody').appendChild(copiedNode);

  let newNameValue = copiedNode.querySelector('.name span');
  let newPriceValue = copiedNode.querySelector('.price span');

  newNameValue.textContent = inputName;
  newPriceValue.textContent = inputPrice;

  copiedNode.querySelector('.btn-remove').addEventListener('click', removeProduct);

  document.querySelector('#textInput').value = '';
  document.querySelector('#priceInput').value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (button of removeBtns) {
    button.addEventListener('click', removeProduct);
  }

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct)
});
