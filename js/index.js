// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price*quantity
  let subtotalLocation = product.querySelector('.subtotal span');
  subtotalLocation.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  
  // ITERATION 2
  // ITERATION 3
  const newProduct = document.getElementsByClassName('product');
  const total = document.querySelector('#total-value span');
  let totalAcc = 0; 
  for (let i=0; i<newProduct.length; i++){
    totalAcc += updateSubtotal(newProduct[i]);
  }
  total.innerHTML = totalAcc;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  targetParent = target.parentNode.parentNode.parentNode;
  row = target.parentNode.parentNode;
  targetParent.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector('.create-product input').value;
  const productPrice = document.querySelectorAll('.create-product input')[1].value;
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  document.querySelector('tbody').appendChild(newRow);
  const newProductRow = `<tr class="product"></tr><td class="name"><span>${productName}</span></td><td class="price">$<span>${productPrice}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td></tr>`;
  newRow.innerHTML = newProductRow;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName("btn-remove");
  for (let btn of removeBtn) {
    btn.addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});

