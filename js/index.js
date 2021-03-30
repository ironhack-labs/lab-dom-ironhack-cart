// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
  //console.log('updateSubtotal', price, quantity, subtotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  products.forEach(function (singleProduct) {
    updateSubtotal(singleProduct);
  });

  // ITERATION 3
  //... your code goes here
  const totalPricesDom = document.querySelectorAll('.product .subtotal span');
  let totalPrice = 0;
  for (let domEl of totalPricesDom) {
    totalPrice += Number.parseFloat(domEl.innerText);
  }
  document.querySelector('#total-value span').innerText = totalPrice.toFixed(2);
  //console.log(document.querySelector('.product .subtotal span').innerText);
  // console.log('totalPrice', totalPrice);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parentTR = target.parentNode.parentNode;
  const parentTBODY = parentTR.parentNode;

  parentTBODY.removeChild(parentTR);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log('createProduct');

  let productNameDom = document.querySelector(
    '.create-product input[type="text"]'
  );
  let productValDom = document.querySelector(
    '.create-product input[type="number"]'
  );

  let tr = document.createElement('tr');
  tr.classList.add('product');
  tr.innerHTML = `
            <td class="name"><span></span></td>
            <td class="price">$<span></span></td>
            <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
            <td class="subtotal">$<span>0</span></td>
            <td class="action"><button>Remove</button></td>`;
  tr.querySelector('button').classList.add('btn', 'btn-remove');
  tr.querySelector('button').addEventListener('click', removeProduct);

  tr.querySelector('.name span').innerText = productNameDom.value;
  tr.querySelector('.price span').innerText = productValDom.value;

  document.querySelector('#cart tbody').appendChild(tr);

  productNameDom.value = '';
  productValDom.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  document
    .querySelectorAll('.product .btn-remove')
    .forEach(function (removeButton) {
      removeButton.addEventListener('click', removeProduct);
    });

  document.getElementById('create').addEventListener('click', createProduct);
});
