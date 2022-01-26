// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  
  const subTprice = price.innerHTML * quantity.value;
   
  console.log('Calculating subtotal, yey!');

  subtotal.innerHTML = subTprice;
  console.log(price)
   return subTprice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /*  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  const allProduct = document.getElementsByClassName('product')
  let singleSubTotal = 0;
  for (i = 0; i < allProduct.length; i++) {
    singleSubTotal += updateSubtotal(allProduct[i]);
  }
  console.log(singleSubTotal)
  // ITERATION 3
  const total = document.querySelector('#total-value span');
  let finalTotal = 0;
  for (j = 0; j < singleSubTotal; j++) {
    finalTotal = singleSubTotal;
    total.innerHTML = finalTotal;
  };
  if (singleSubTotal === 0) {
    total.innerHTML = finalTotal;
    
  }

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  //... your code goes here
  const rowToRemove =  target.parentNode.parentNode;
  const parent = rowToRemove.parentNode;
  parent.removeChild(rowToRemove);
  calculateAll()
  }
  

// ITERATION 5

function createProduct() {
  //... your code goes here

  let newProduct = document.querySelector('.create-product input');
  let newPrice = document.querySelector('.create-product input[type ="number"]');
  let fixedPrice = Number(newPrice.value).toFixed(2);
  let newRow = document.createElement('tr')
  newRow.innerHTML = `
  <td class="name">
    <span> ${newProduct.value}</span>
  </td>
  <td class="price">$<span>${fixedPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;
  newRow.classList.add('product');
  const parent = document.querySelector('#cart tbody');
  parent.appendChild(newRow);
  newProduct.value = '';
  newPrice.value = 0;
  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (i=0; i< removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
  };
  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);

});
