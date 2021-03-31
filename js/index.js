// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerText);
  const quantity = Number(product.querySelector('.quantity input').value);
  const subTotal = price * quantity;
  product.querySelector('.subtotal').innerText = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.querySelectorAll('.product');
  let subTotal = 0;
  for (let i = 0; i < allProducts.length; i++) {
    subTotal += updateSubtotal(allProducts[i]);
    console.log(subTotal);
  }
  document.querySelector('#total-value span').innerHTML = subTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parentElement = target.parentNode.parentNode.parentNode;
  parentElement.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector(".create-product input[type='text']").value;
  const price = document.querySelector(".create-product input[type='number']").value;

  const parentNode = document.querySelector('tbody');
  const newItem = document.createElement('tr');
  newItem.setAttribute('class', 'product');
  parentNode.appendChild(newItem);

  const itemName = document.createElement('td');
  itemName.setAttribute('class', 'name');
  itemName.innerText = name;
  newItem.appendChild(itemName);

  const itemPrice = document.createElement('td');

  itemPrice.setAttribute('class', 'price');
  itemPrice.innerHTML = `$<span>${price}</span>`; 
  newItem.appendChild(itemPrice);

  const itemQuantity = document.createElement('td');
  itemQuantity.setAttribute('class', 'quantity');
  itemQuantity.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity"></input>'
  newItem.appendChild(itemQuantity)


  const itemSubtotal = document.createElement('td');
  itemSubtotal.setAttribute('class', 'subtotal');
  itemSubtotal.innerText = '$0';
  newItem.appendChild(itemSubtotal);

  const itemRemove = document.createElement('td');
  itemRemove.setAttribute('class', 'action');
  newItem.appendChild(itemRemove);

  const removeBtn = document.createElement('button');
  removeBtn.setAttribute('class', 'btn btn-remove');
  removeBtn.innerText = 'Remove';
  itemRemove.appendChild(removeBtn);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.querySelectorAll('.btn.btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }
  document.querySelector('#create').addEventListener('click', createProduct);
});
