// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  console.log(typeof price)
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotalPrice
  return subtotalPrice
}

function calculateAll() {

  // ITERATION 2

  let products = document.getElementsByClassName('product');
  let subtotalCalculation = [...products].map(product => updateSubtotal(product));


  // ITERATION 3

  document.querySelector('#total-value span').innerHTML = subtotalCalculation.reduce((acc, curr) => acc + curr);


}
// ITERATION 4

function removeProduct(event) {
  const productDeleteButton = event.currentTarget;
  const elementoPai = productDeleteButton.parentNode.parentNode.parentNode
  const elementoFileira = productDeleteButton.parentNode.parentNode
  return elementoPai.removeChild(elementoFileira)
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]').value;
  const unitPrice = document.querySelector('.create-product input[type="number"]').value;

  let trElement = document.createElement('tr');
  let tdName = document.createElement('td');
  let spanElement = document.createElement('span');
  let tdPrice = document.createElement('td');
  let tdPriceSpan = document.createElement('span');
  let tdQuantity = document.createElement('td');
  let tdSubtotal = document.createElement('td');
  let tdSubtotalSpan = document.createElement('span')
  let tdRemove = document.createElement('td');
  let input = document.createElement('input');
  let button = document.createElement('button');

  tdName.appendChild(spanElement);
  tdQuantity.appendChild(input);
  tdRemove.appendChild(button)
  trElement.appendChild(tdName);
  trElement.appendChild(tdPrice);
  trElement.appendChild(tdQuantity);
  trElement.appendChild(tdSubtotal);
  trElement.appendChild(tdRemove);
  tdPrice.setAttribute('class', 'price')
  tdPrice.append('$')
  tdPrice.appendChild(tdPriceSpan);
  trElement.setAttribute('class', 'product')
  tdName.setAttribute('class', 'name')
  tdQuantity.setAttribute('class', 'quantity')
  input.setAttribute('type', 'number')
  input.setAttribute('value', '0')
  input.setAttribute('min', '0')
  input.setAttribute('placeholder', 'Quantity')
  tdSubtotal.setAttribute('class', 'subtotal')
  tdSubtotal.append('$')
  tdSubtotalSpan.innerHTML = 0
  tdSubtotal.appendChild(tdSubtotalSpan)
  tdRemove.setAttribute('class', 'action')
  button.innerHTML = 'Remove'
  button.setAttribute('class', 'btn btn-remove')
  button.addEventListener('click', removeProduct);
  spanElement.innerHTML = nameInput;
  tdPriceSpan.innerHTML = unitPrice;

  let parent = document.getElementsByTagName('tbody')[0];
  parent.appendChild(trElement)

  //limpando os inputs
  nameInput.innerHTML = ''
  unitPrice.input = ''


}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const productList = document.getElementsByClassName('btn-remove')
  Array.from([...productList]).forEach(product => {
    return product.addEventListener('click', function (e) {
      removeProduct(e)
    })
  })

  const createProductButton = document.getElementById('create');
  createProductButton.addEventListener('click', function (e) {
    createProduct(e)
  })

});
