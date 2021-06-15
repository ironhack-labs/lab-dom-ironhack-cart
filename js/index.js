// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const sum = price * quantity;
  const subtotal = (product.querySelector('.subtotal span').innerHTML = sum);
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const rows = document.querySelectorAll('.product');
  let sum = 0;
  for (let row of rows) {
    sum += updateSubtotal(row);
  }
  document.querySelector('#total-value span').innerHTML = sum;
}
// ITERATION 3
//... your code goes here

// ITERATION 4

function removeProduct() {
  // const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here

  let allButtons = document.querySelectorAll('.btn-remove');
  for (let button of allButtons) {
    button.onclick = function (event) {
      button.parentElement.parentElement.remove();
    };
  }
}

// ITERATION 5

// function createProduct() {
document.querySelector('#create').onclick = function (event) {
  const productName = document.querySelector('#productName').value;
  const productPrice = document.querySelector('#productPrice').value;

  document.querySelector('tbody').innerHTML += `  
   
   <tr class="product">
   <td class="name">
     <span>${productName}</span>
   </td>
   <td class="price">$<span>${productPrice}</span></td>
   <td class="quantity">
     <input type="number" value="0" min="0" placeholder="Quantity" />
   </td>
   <td class="subtotal">$<span>0</span></td>
   <td class="action">
     <button class="btn btn-remove">Remove</button>
   </td>
  </tr>
  `;
  removeProduct();
};

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

removeProduct();
