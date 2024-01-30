// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //Taking the value of the price and quantity spans
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  //Conversion of the value to a float number
  const priceValue = parseFloat(price.textContent);
  const quantityValue = parseFloat(quantity.value);
  console.log(quantityValue)
  //Calculating the total and giving the value to the subtotal span
  const subtotalResult = priceValue * quantityValue;
  const subtotal = product.querySelector('.subtotal span');
  return subtotal.textContent = subtotalResult;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //Calculating all the subtotals with a forEach bucle.
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(function (producto) { updateSubtotal(producto) });
  // ITERATION 3
  //Selecting all the subtotal span and leting the totalPrice to 0
  const allPrices = document.querySelectorAll('.subtotal span');
  let totalPrice = 0;
  //calculating the totalPrice adding all the Subtotals
  allPrices.forEach(function (priceSpan) { totalPrice += parseFloat(priceSpan.textContent) });
  //Geting the total-value span to a Constant and giving it the result converted to a float with 2 decimals.
  const totalValue = document.querySelector('#total-value span');
  return totalValue.textContent = totalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //Getting the <tr> node
  const row = target.parentNode.parentNode;
  //Gettinh the tbody node 
  const tbody = row.parentNode;
  //Removing the tr node
  return tbody.removeChild(row);
}
// ITERATION 5

function createProduct() {
  //Getting the values on input
  const nameInput= document.querySelector('.create-product input[type="text"]');
  const priceInput= document.querySelector('.create-product input[type="number"]')
  //Do nothing if there is not Product Name or Price
  if(nameInput.value.trim()===''|| isNaN(parseFloat(priceInput.value))){
    return;
  }
  //Declare a new const to create a new tr with the tr class
  const newProduct = document.createElement('tr');
  newProduct.className='product';
  //Declare al the const to create all the td with his classes
  const name = document.createElement('td'); 
  name.className='name';
  const price = document.createElement('td'); 
  price.className='price';
  const quantity = document.createElement('td'); 
  quantity.className='quantity';
  const subtotal = document.createElement('td'); 
  subtotal.className='subtotal';
  const action = document.createElement('td');
  action.className='action';
  //Filling the td's with his values
  name.innerHTML=`<span>${nameInput.value}</span>`;
  price.innerHTML=`$<span>${parseFloat(priceInput.value).toFixed(2)}</span>`;
  quantity.innerHTML='<input type="number" value="0" min="0" placeholder="Quantity"/>';
  subtotal.innerHTML='$<span>0</span>';
  action.innerHTML='<button class="btn btn-remove">Remove</button>';
  //Adding the td's with new values to the tr
  newProduct.appendChild(name);
  newProduct.appendChild(price);
  newProduct.appendChild(quantity);
  newProduct.appendChild(subtotal);
  newProduct.appendChild(action);
  //Adding the new product to the table
  const tbody=document.querySelector('#cart tbody');
  tbody.appendChild(newProduct);
  //Adding the event to the remove button because the eventCaller on window.addEventListener only applies to the original products
  //We can do it by event delegation but i'm not being able to make it work**
  const RemoveBtn= action.querySelector('.btn-remove');
  RemoveBtn.addEventListener('click', removeProduct);
  //Cleaning the Input Fields
  nameInput.value='';
  priceInput.value='0';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //Adding an EventListener to all .btn-remove
  const deleteProductBtn = document.querySelectorAll('.btn-remove');
  deleteProductBtn.forEach(function (btn) { btn.addEventListener('click', removeProduct) });
  //We can do it by event delegation but i'm not being able to make it work**

  //Adding an EventListener for the Create Button
  const createBtn =document.getElementById('create');
  createBtn.addEventListener('click',createProduct);

});
