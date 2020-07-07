// ITERATION 1

const totalDiv = document.querySelector('#total-value span');

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  let price = Number(product.querySelector('.price span').innerHTML);
  let quantity = Number(product.querySelector('.quantity input').value);
  let subtotal = price*quantity;
  if(subtotal > 0){
    product.querySelector('.subtotal span').innerHTML = (price*quantity).toFixed(2);
  }
  return subtotal;
}

function calculateAll() {
  
  let noQuantity = true;
  

  const products = document.querySelectorAll('.product');
  //console.log(products);
  let checkSubtotals = document.querySelectorAll('.product .quantity input');
  //console.log(checkSubtotals);

  for(let i = 0; i < checkSubtotals.length; i++){
    //console.log(checkSubtotals[i].value);
    if(Number(checkSubtotals[i].value) > 0) noQuantity = false
  }

  if(!noQuantity){
    for(let i = 0; i < products.length; i++){
      updateSubtotal(products[i]);
    }
  } else {
    alert('Debes seleccionar una cantidad para algun elemento')
  }

  //Calculamos el total
  if(!noQuantity){
    let total = 0;
    let productsSubtotals = document.querySelectorAll('.product .subtotal span');

    for(let i = 0; i < productsSubtotals.length; i++){
      total += Number(productsSubtotals[i].innerHTML);
    }
    
    totalDiv.innerHTML = total;
  }
  
}

function removeProduct(event) {
  const target = event.currentTarget;
  let parentProduct = document.querySelector('#cart tbody');
  let productRow = target.parentNode.parentNode;

  //check price
  let subtotalProduct = productRow.querySelector('.subtotal span');

  totalDiv.innerHTML = Number(totalDiv.innerHTML) - Number(subtotalProduct.innerHTML);
  parentProduct.removeChild(productRow);

}

// ITERATION 5

function createProduct() {
  let itemName = document.querySelector('.create-product td:first-child input');
  let itemPrice = document.querySelector('.create-product td:first-child + td input');
  console.log(Number(itemPrice.value))

  if(itemName.value !== '' || Number(itemPrice.value) != 0){
    
    // Creamos Dom para el nuevo producto
    createDomProduct(itemName.value, Number(itemPrice.value))
  
    // reset form
    itemName.value = '';
    itemPrice.value = 0;

  } else {
    alert('Para crear un producto debes rellenar el nombre y el precio')
  }
}

function createDomProduct(name, price){
  
  //pasamos price a string para chequear si tiene decimales o no
  let priceToString = price.toString();

  // chequeamos si el usuario a puesto solo el precio sin decimales, si no le añadimos dos ceros
  if(priceToString.indexOf('.') === -1){
    priceToString += '.00';
  // chequeams que el usuario haya puesto 2 decimales, si no, le ponemos el 0 del final
  } else if( priceToString.split('.') !== 1 ){
    let decimalNumbers = priceToString.split('.');
    if(decimalNumbers[1].length < 2){
      priceToString += "0";
    }
  }

  let parentProduct = document.querySelector('#cart tbody');
  let newProduct = document.createElement('tr');

  newProduct.setAttribute('class', 'product');
  //td name
  let newProductTdName = document.createElement('td');
  newProductTdName.setAttribute('class', 'name');

      //td name span
      let newProductTdNameSpan = document.createElement('span');
      newProductTdNameSpan.innerHTML = name;
      newProductTdName.appendChild(newProductTdNameSpan);

  newProduct.appendChild(newProductTdName)

  //td price
  let newProductTdPrice = document.createElement('td');
  newProductTdPrice.setAttribute('class', 'price');

      //td price $
      newProductTdPriceDollar = document.createTextNode('$');
      newProductTdPrice.appendChild(newProductTdPriceDollar)

      //td price span
      let newProductTdPriceSpan = document.createElement('span');
      newProductTdPriceSpan.innerHTML = priceToString;
      newProductTdPrice.appendChild(newProductTdPriceSpan);

  newProduct.appendChild(newProductTdPrice)

  //td quantity
  let newProductTdQuantity = document.createElement('td');
  newProductTdQuantity.setAttribute('class', 'quantity');

    //td quantity input
    let newProductTdQuantityInput = document.createElement('input');
    newProductTdQuantityInput.setAttribute('type', 'number');
    newProductTdQuantityInput.setAttribute('value', '0');
    newProductTdQuantityInput.setAttribute('min', '0');
    newProductTdQuantityInput.setAttribute('placeholder', 'Quantity');
    newProductTdQuantity.appendChild(newProductTdQuantityInput);

  newProduct.appendChild(newProductTdQuantity)

  //td subtotal
  let newProductTdSubtotal = document.createElement('td');
  newProductTdSubtotal.setAttribute('class', 'subtotal');

    //td subtotal $
    newProductTdSubtotalDollar = document.createTextNode('$');
    newProductTdSubtotal.appendChild(newProductTdSubtotalDollar)

    //td subtotal span
    let newProductTdSubtotalSpan = document.createElement('span');
    newProductTdSubtotalSpan.innerHTML = '0';
    newProductTdSubtotal.appendChild(newProductTdSubtotalSpan);

  newProduct.appendChild(newProductTdSubtotal);


    //td action
    let newProductTdAction = document.createElement('td');
    newProductTdAction.setAttribute('class', 'action');

      //td action button $
      let newProductTdActionButton = document.createElement('button');
      newProductTdActionButton.classList.add('btn');
      newProductTdActionButton.classList.add('btn-remove');
      newProductTdActionButton.textContent = 'Remove';
      newProductTdAction.appendChild(newProductTdActionButton);

    newProduct.appendChild(newProductTdAction)

  parentProduct.appendChild(newProduct);


  //añadimos addEventListener
  let removeButton = document.querySelector('.product:last-child .action .btn-remove');
  removeButton.addEventListener('click', removeProduct)
}

window.addEventListener('load', () => {
  // Calculate Button
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Remove Buttons
  let removeButtons = document.querySelectorAll('.product .action .btn-remove');
  for(let i=0; i<removeButtons.length;i++){
    removeButtons[i].addEventListener('click', removeProduct)
  }

  //Create Button
  let createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);

});
