// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  //debugger
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  product.querySelector('.subtotal span').innerText = price * quantity;

  return price * quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let sum = 0;
  const setOfProducts = document.getElementsByClassName('product');
  for (let singleProduct of setOfProducts)
    sum = sum + updateSubtotal(singleProduct);

  // end of test
  document.querySelector('#total-value span').innerText = sum;
  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4
//... your code goes here
document.addEventListener('DOMContentLoaded', () => {
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(function (button, index) {
    button.addEventListener('click', removeProduct);
    //console.log(index);
  });
  const addBtn = document.querySelector('#create');
  addBtn.addEventListener('click', createProduct);
  //console.log(addBtn);
});

function removeProduct(event) {
  //console.log('asd');
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const table = target.parentNode.parentNode.parentNode;
  const row = target.parentNode.parentNode;
  table.removeChild(row);
  //target.removeChild();
  //... your code goes here
}
// ITERATION 5
function createProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in add is:', target);
  const row = target.parentNode.parentNode;
  let name = row.querySelectorAll('.create-product td input')[0].value;
  let price = row.querySelectorAll('.create-product td input')[1].value;
  //let quantity = product.querySelector('.quantity input').value;
  console.log(price);
  //... your code goes here
  myCreateFunction(price, name);
}
function myCreateFunction(price, name) {
  if (!(price * 1) && !name) {
    return;
  }
  var table = document.querySelector('#cart tbody');
  var row = table.insertRow(-1);
  row.classList.add('product');

  row.innerHTML = `
        <tr class="product">
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
  `;
  row.querySelector('.btn-remove').addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  console.log('xxxxxx');
});
