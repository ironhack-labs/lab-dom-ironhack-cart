// ITERATION 1
//
//const { product } = require('puppeteer');

//const { product } = require('puppeteer');

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const priceVal = Number(price.innerHTML);

  const quantity = product.querySelector('.quantity input').value;
  let subTotalPrice = priceVal * quantity;
  product.querySelector('.subtotal span').innerHTML = subTotalPrice;
  return subTotalPrice;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let totalPrice = 0;
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(function (product) {
    totalPrice += updateSubtotal(product);
  });
  console.log(typeof allProducts);
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let parent = target.parentNode.parentNode.parentNode;
  console.log(typeof parent);
  parent.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  // const target = event.currentTarget;
  // const nameOfProduct = document.querySelector('.new-pro input').value;
  // const priceOfProduct = document.querySelector('.new-price input').value;
  // let newProduct = target.nameOfProduct;
  // let newPrice = target.priceOfProduct;
  let allInputs = document.querySelectorAll('.create-product input');
  let newProductName = allInputs[0].value;
  let newProductPrice = allInputs[1].value;
  console.log(newProductName, newProductPrice);
  let newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
        <td class="name">
          <span>${newProductName}</span>
        </td>
        <td class="price">$<span>${newProductPrice}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
`;
  console.log(newRow);
  let parent = document.querySelector('tbody');
  parent.appendChild(newRow);
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(function (button) {
    button.addEventListener('click', removeProduct);
  });
  allInputs[0].value = '';
  allInputs[1].value = 0;
}
// function createProduct() {
//   let allInputs = document.querySelectorAll('.create-product input');
//   let newProductName = allInputs[0].value;
//   let newProductPrice = allInputs[1].value;
//   let table = document.querySelector('.product').parentNode;
//   let row = table.insertRow(0);
//   row.innerHTML = `<tr class="product">
//   <td class="name">
//     <span>${newProductName}</span>
//   </td>
//   <td class="price">$<span>${newProductPrice}</span></td>
//   <td class="quantity">
//     <input type="number" value="0" min="0" placeholder="Quantity" />
//   </td>
//   <td class="subtotal">$<span>0</span></td>
//   <td class="action">
//     <button class="btn btn-remove">Remove</button>
//   </td>`;
//   //</tr>cell1.innerHTML = newProductName;
//   //</tr>cell2.innerHTML = '$' + newProductPrice;
//   //</tr>cell3.innerHTML = input
//   //</tr>cell4.innerHTML = SubTotal
//   //</tr>cell5.innerHTML = btn
//   //</tr>row.classList.add('product')
//   //cell5.classList.add('action')
//   console.log(newProductName);
//   console.log(newProductPrice);
//   console.log(table);
//   calculateAll();
//   RemoveBtn();
// }

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(function (button) {
    button.addEventListener('click', removeProduct);
  });
  document.querySelector('#create').addEventListener('click', createProduct);
});
