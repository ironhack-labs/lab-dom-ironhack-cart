// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const amount = price * quantity;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = amount;

  return subtotal;
}

function calculateAll() {

  // ITERATION 2
  const productRow = document.getElementsByClassName('product');

  for(let i = 0; i < productRow.length; i++){
    updateSubtotal(productRow[i]);
  }

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  const subtotalsArray = document.getElementsByClassName('subtotal');

  let totalSum = 0;

  for(let i = 0; i < subtotalsArray.length; i++){
    totalSum += parseFloat(subtotalsArray[i].querySelector('span').innerText);
  }

  total.innerText = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.parentNode.removeChild(target);
  
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const inputText = document.querySelectorAll('.create-product input')[0].value;
  const inputPrice = document.querySelectorAll('.create-product input')[1].value;

  const parent = document.querySelector('tbody');
  const newProduct = document.createElement('tr');
  newProduct.className = "product";

  const firstTd = newProduct.insertCell(0);
  firstTd.className = 'name';
  firstTd.innerHTML = `<span>${inputText}</span>`;

  const secondTd = newProduct.insertCell(1);
  secondTd.className = 'price';
  secondTd.innerHTML = `$<span>${inputPrice}</span>`;

  const thirdTd = newProduct.insertCell(2);
  thirdTd.className = 'quantity';
  thirdTd.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`;

  const fourthTd = newProduct.insertCell(3);
  fourthTd.className = 'subtotal';
  fourthTd.innerHTML = `$<span>0</span>`;

  const fifthTd = newProduct.insertCell(4);
  fifthTd.className = 'action';
  fifthTd.innerHTML = `<button class="btn btn-remove">Remove</button>`;

  parent.appendChild(newProduct);

  const removeBtnsArray = document.getElementsByClassName('btn-remove');
  for(let i = 0; i < removeBtnsArray.length; i++){
    removeBtnsArray[i].addEventListener('click', removeProduct);
  };

  inputText.value = "";
  inputPrice.value = 0;
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtnsArray = document.getElementsByClassName('btn-remove');
  for(let i = 0; i < removeBtnsArray.length; i++){
    removeBtnsArray[i].addEventListener('click', removeProduct);
  };

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
