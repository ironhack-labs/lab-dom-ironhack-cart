// ITERATION 1
//receivesL: two variables(price & quantity), 
//then GET DOM elements holding price & quantity.
// extract values from product & quantity.
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceHtml = product.querySelector('.price span').innerHTML;
//  console.log(price, typeof price)
  const quantityHtml = product.querySelector('.quantity input').value;
//  console.log(quantity, typeof quantity)
  const price = Number(priceHtml);
  const quantity = Number(quantityHtml);

  const subtotalPrice = price * quantity;

 // ALT SYNTAX 
 //const subtotalPrice = Number(price) * Number(quantity);

// console.log(subtotalPrice, typeof subtotalPrice)

 product.querySelector('.subtotal span').innerText = subtotalPrice;

return subtotalPrice; 
 //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

   
 const singleProduct = document.querySelector('.product');
 //updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  let cartTotal = 0; 
  const products = document.querySelectorAll('.product');
  //ALT SYNTAX 
  // [...products].forEach(element => {
  //   cartTotal += updateSubtotal(element);
  // })
  for(let counter = 0; counter < products.length; counter++) {
    cartTotal = cartTotal + updateSubtotal(products[counter]);
  }

  document.querySelector('#total-value span').innerText = cartTotal;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
 // console.log(event);
  const target = event.currentTarget;
  console.log('The target parent parent parent is:', target.parentNode.parentNode.parentNode);
  const rowToBeRemoved = target.parentNode.parentNode;
  const rowParent = target.parentNode.parentNode.parentNode;
  rowParent.removeChild(rowToBeRemoved);
  //... your code goes here
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
 // console.log(document.querySelector('.create-product [type="text"]').value)
  const productNameInputElement =   document.querySelector('.create-product [type="text"]');
  const productName = productNameInputElement.value;

  const productPriceInputElement =  document.querySelector('.create-product [type="number"]');
  const productPrice = productPriceInputElement.value;

  const tableBody = document.querySelector('tbody');

  tableBody.insertAdjacentHTML('beforeend', `
  <tr class="product">
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${Number(productPrice).toFixed(2)}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>
  `);

  const removeButtons = document.querySelectorAll('.btn-remove');
  
  const newRemoveButton = removeButtons[removeButtons.length - 1];

  newRemoveButton.addEventListener('click', removeProduct);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove');
 // console.log(removeButtons)
  for(let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
    const createButton = document.querySelector('#create');
    createButton.addEventListener('click', createProduct);

  
});
