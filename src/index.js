// ITERATION 1
function updateSubtotal(product) {

  // recieve values
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  // calculate 
  const subtotal = price.innerText * quantity.value;

  // add result to DOM
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0;
  const products = document.getElementsByClassName('product');
  // Array.from(products).forEach( product => updateSubtotal(product) )
  for ( oneProduct of products ) total += updateSubtotal( oneProduct )

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;

  // to make it easier to read, just create a variable that targets the row
  const targetRow = event.currentTarget.parentNode.parentNode;

  // and then to get the parent of it, do row.parentNode, and then you can removeChild
  targetRow.parentNode.removeChild( targetRow );
  
  calculateAll();
}

// ITERATION 5
function createProduct() {
  const productName = document.querySelector('tfoot input[type=text]').value;
  const productPrice = document.querySelector('tfoot input[type=number]').value;
  
  const newProduct = `<tr class="product">
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
  </tr>`;

  document.querySelector('tbody').innerHTML += newProduct;

  const removeButtons = document.getElementsByClassName('btn-remove');
  for ( oneButton of removeButtons ) oneButton.addEventListener( 'click', removeProduct );
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener( 'click', calculateAll );

  const removeButtons = document.getElementsByClassName('btn-remove');
  for ( oneButton of removeButtons ) oneButton.addEventListener( 'click', removeProduct );

  const createButton = document.querySelector('#create');
  createButton.addEventListener( 'click', createProduct );
});
