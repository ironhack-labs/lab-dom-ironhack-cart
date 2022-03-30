// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = Number(product.querySelector('.quantity input').value);
  const subtotal = price * quantity;
  
  product.querySelector('.subtotal span').textContent =subtotal;

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
  const products = document.querySelectorAll('.product');

  //[...products].forEach(element => { . //either forEach or for loop works in this case (forEach you need to use spread to create an array to loop on).
  //  total = total + updateSubtotal(element);
  //})

  for(let i = 0; i < products.length; i ++) {
    total += updateSubtotal(products[i]);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;

};

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget; //initial point from click
  const rowToBeRemoved = target.parentNode.parentNode; //from target/click point we find the parent = tr class='product' <- our row.
  const rowParent = target.parentNode.parentNode.parentNode; // from target/click we then also find the overall parent - <tbody> <- the entire table. 
  rowParent.removeChild(rowToBeRemoved); // then from the parent we remove our designated child - row we want to remove from table. 
  
  calculateAll();  // due to change in products let's trigger a calcualteAll again... 

}

// ITERATION 5

function createProduct() {
  
  const productNameInputElement = document.querySelector('.create-product [type="text"]'); // we read the product name provided during input
  const productName = productNameInputElement.value;

  const productPriceInputElement = document.querySelector('.create-product [type="number"]'); //we read the price provided during input. 
  const productPrice = productPriceInputElement.value;

  const tableBody = document.querySelector('tbody'); // we locate the table holding our products (represented by each row).

  tableBody.insertAdjacentHTML('beforeend', ` //we then insert a string block while inserting our inputed values appropriately. 
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

  const removeButtons = document.querySelectorAll('.btn-remove'); // we then locate all of our remove buttons (as there is now a new one with our above "new product")
  const newRemoveButton = removeButtons[removeButtons.length - 1]; //we then locate the last button (the new one just inserted)
  newRemoveButton.addEventListener('click', removeProduct); //and we add an eventlister so it has functionality like the rest. 

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');// we locate all elements assigned btn-remove class.
  for(let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct); // we then loop assigning event listner, so if clicked function removeProducts is called. 
  }

  const createButton = document.querySelector('#create'); //locate elements with id of create.
  createButton.addEventListener('click', createProduct); // add event listner, when clicked call function createProduct.

});
