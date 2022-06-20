// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = Number(price) * Number(quantity);
  product.querySelector('.subtotal span').textContent = subtotalPrice;
  return subtotalPrice;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let myTotal = 0;
  let myProductRows = document.getElementsByClassName('product');

  //OPTION 1 - forEACH
  // myProductRows = Array.from(myProductRows);
  // myProductRows.forEach(function (rowInMyProductRows){
  //   myTotal = myTotal + updateSubtotal(rowInMyProductRows);
  // });
  // document.querySelector('#total-value span').textContent = myTotal;

  //OPTION 2 - for loop
  for(let i = 0; i < myProductRows.length; i++){
    myTotal = myTotal + updateSubtotal(myProductRows[i]);
  }
  document.querySelector('#total-value span').textContent = myTotal;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentElement.parentElement);
  //... your code goes here
  // target.parentElement.parentElement.remove();
  target.closest('.product').remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newName = document.querySelector('.create-name');
  const newPrice = document.querySelector('.create-price');

  console.log(newName, newPrice);

  const newTableRow = document.createElement('tr');
  newTableRow.classList.add('product');

  newTableRow.innerHTML = `
    <td class="name">
      <span>${newName.value}</span>
    </td>
    <td class="price">$<span>${newPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  document.querySelector('tbody').appendChild(newTableRow);

  newName.value = '';
  newPrice.value = '';

  const removeBtns = document.querySelectorAll('.btn-remove');

  //OPTION 1 for getting last element of array
  removeBtns[removeBtns.length - 1].addEventListener('click', removeProduct);

  //OPTION 2 for getting last element of array
  // Array.from(removeBtns).slice(-1)[0].addEventListener('click', removeProduct);
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll('.btn-remove');
  for(let i = 0; i < removeBtns.length; i++){
    removeBtns[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
});