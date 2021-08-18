// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  //Number () convierte a float --> comprobar si es un numero
  let subtotalPrice = Math.floor((Number(price) * Number(quantity))*100)/100;
  subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return (subtotalPrice);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let absoluteTotal = 0;
  let products = document.querySelectorAll('.product');
  for (let i=0; i<products.length; i++){
    absoluteTotal += updateSubtotal(products[i]);
  // ITERATION 3
    let cartTotal = document.querySelector('#total-value span');
    cartTotal.innerHTML = absoluteTotal;
  }
  return (absoluteTotal);

}

// ITERATION 4

//But let's try to solve our problem one bit at a time. 
//Inside of the existing function you're passing to window.addEventListener(), 

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let parent = target.parentNode.parentNode
  parent.remove();
}

// ITERATION 5

function createProduct() {
  //crear product
  let product = document.createElement('tr');
  product.setAttribute('class','product')
  document.getElementById('tbody').appendChild(product);
  //crear name
  let name = document.createElement('td')
  name.setAttribute('class','name')
  product.appendChild(name)
  let nameSpan = document.createElement('span')
  name.appendChild(nameSpan)
  //localizar
  let createName = document.querySelector('.create-product input');
  //assignar
  nameSpan.innerHTML = createName.value;
  //limpiar
  createName.value = '';

  //crear Price
  let price = document.createElement('td')
  price.setAttribute('class','price')
  product.appendChild(price)
  price.innerHTML='$'
  let priceSpan = document.createElement('span')
  price.appendChild(priceSpan)
  //localizar
  let createPrice = document.querySelector('#precio-entrada');
  console.log(createPrice.value)
  //assignar
  priceSpan.innerHTML = createPrice.value;
  //limpiar
  createPrice.value = '';

  //crear Quantity
  let quantity = document.createElement('td')
  quantity.setAttribute('class','quantity')
  product.appendChild(quantity)
  let quantityInput = document.createElement('input')
  quantityInput.setAttribute('type','number')
  quantityInput.setAttribute('value','0')
  quantityInput.setAttribute('min','0')
  quantityInput.setAttribute('placeholder','Quantity')
  quantity.appendChild(quantityInput)

  //crear Subtotal

  let subtotal = document.createElement('td')
  subtotal.setAttribute('class','subtotal')
  product.appendChild(subtotal)
  subtotal.innerHTML='$'
  let subtotalSpan = document.createElement('span')
  subtotal.appendChild(subtotalSpan)
  subtotalSpan.innerHTML = '0'

  //crear RemoveButton

  let remove = document.createElement('td')
  remove.setAttribute('class','subtotal')
  product.appendChild(remove)
  let removeBtn = document.createElement('button')
  remove.appendChild(removeBtn)
  removeBtn.setAttribute('class','btn btn-remove')
  removeBtn.innerHTML = 'Remove'

  //... your code goes here

}


  
function callback() {
  //Evento para retirar calcular total
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //Evento para retirar producto
  let allRemoveButtons = document.querySelectorAll(".btn-remove");
  for (let i=0; i<allRemoveButtons.length; i++){
    allRemoveButtons[i].addEventListener('click', removeProduct);
  };
  //Evento para crear producto
  const addProductBtn = document.querySelector('.create-product .btn');
  addProductBtn.addEventListener('click', createProduct);
};

window.addEventListener('load', callback);

window.addEventListener('click', callback);