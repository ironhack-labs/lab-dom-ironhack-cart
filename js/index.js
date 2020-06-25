// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const qty = product.querySelector('.quantity input').value;
  const subtotalText = product.querySelector('.subtotal');  // $<span>0</span>
  subtotalText.innerHTML = `$<span>`+(price*qty).toFixed(2).toString()+`</span>`;
  return price*qty;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach(productInCart => {
    total += updateSubtotal(productInCart);
  })

  // ITERATION 3
  document.getElementById('total-value').innerText = "Total: $"+total.toFixed(2).toString();
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  //console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  //console.log(event.target.parentNode.parentNode.getElementsByTagName('input')[0]);
  const newProductName = event.target.parentNode.parentNode.getElementsByTagName('input')[0].value;
  const newProductPrice = event.target.parentNode.parentNode.getElementsByTagName('input')[1].value;
  //console.log(newProductName, " ", newProductPrice);
  const tableRow = document.getElementsByClassName('product')[document.getElementsByClassName('product').length-1];
  const productTable = document.querySelector('#cart tbody');
  const newTr = document.createElement('tr');
  productTable.appendChild(newTr);
  newTr.innerHTML = `
  
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
  </td>`;
  newTr.querySelector('.btn-remove').addEventListener('click', removeProduct);
  console.log(newTr);
  newTr.className = 'product'; 
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Event listener for Remove buttons
  const removeProductBtns = document.getElementsByClassName('btn-remove');
  Array.from(removeProductBtns).forEach(removeButton => {   
    removeButton.addEventListener('click', removeProduct);  
  });

  //Event listener for Create button  
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
