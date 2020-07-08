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
  
  const products = document.querySelectorAll('.product');

  products.forEach( product => {
    updateSubtotal(product);
  })

  //Calculamos el total
  let total = 0;
  let productsSubtotals = document.querySelectorAll('.product .subtotal span');

  productsSubtotals.forEach(product => {
    total += Number(product.innerHTML);
    console.log(total);
  })
  
  totalDiv.innerHTML = total;

}

function removeProduct(event) {
  const target = event.currentTarget;
  let parentProduct = document.querySelector('#cart tbody');
  let productRow = target.parentNode.parentNode;

  parentProduct.removeChild(productRow);
  calculateAll()

}

// ITERATION 5

function createProduct() {
  let itemName = document.querySelector('.create-product td:first-child input');
  let itemPrice = document.querySelector('.create-product td:first-child + td input');

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

  newProduct.innerHTML = `
      <td class="name">
        <span>${name}</span>
      </td>
      <td class="price">$<span>${priceToString}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity">
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
  `;

  parentProduct.appendChild(newProduct);
  
  //añadimos addEventListener
  let removeButton = newProduct.querySelector('.btn-remove');
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
