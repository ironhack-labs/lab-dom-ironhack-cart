// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
   // select dom elements
   const price = product.querySelector('.price span').textContent;
   const quantity = product.querySelector('.quantity input').value;
   // calculate subtotal
   //const subtotal = Number((price * quantity).toFixed(2));
   const subTotal = parseFloat(price) * parseInt(quantity);
   // set the subtotal to element
   const subtotalEl = product.querySelector('.subtotal span');
   subtotalEl.textContent = subTotal;
   return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //...
  // ITERATION 3
  //...
  // transform nodelist into array to access array methods
  //const products = Array.from(document.querySelectorAll('.product')); // nodelist to array
  const products = document.querySelectorAll('.product'); // nodelist to array

  //const products = document.querySelectorAll('.product'); // nodelist to array
  // Option 1
  let total = 0;
  [...products].forEach( product => {
    total += updateSubtotal(product);
  });
  // Option 2
  //const total = products.reduce(( acc, currProduct) => acc += updateSubtotal(currProduct), 0);

  // ITERATION 3
  // set the total price
  document.querySelector('#total-value span').textContent = total;
}

// ITERATION 4
function removeProduct(event) {
  //const target = event.currentTarget;
  //console.log('The target in remove is:', target);

  //console.log('The target in remove is:', target);
  // Option 1 
  //const parent = event.currentTarget.parentNode.parentNode.remove();
  
  // Option 2 - traversing
    // event.currentTarget --> element that event listener is attached to or th element that handles the event.
  // event.target --> element that triggered the event / element clicked / root that raised the event
  // event.target --> btn-remove
  if(event.target.classList.contains('btn-remove')) {
      event.target.closest('.product').remove();
      calculateAll();
  }
}

// ITERATION 5 - Add products
function createProduct() {
  // get the values of the new product --> name and price
  const nameRaw = document.querySelector(".create-product input[type='text']").value;
  const priceRaw = document.querySelector(".create-product input[type='number']").value;
  // String card
  const productName = `${nameRaw.slice(0,1).toUpperCase()}${nameRaw.slice(1)}`;
  const price = Number(priceRaw).toFixed(2);
  //option 1
  const productCard = `
    <tr class="product">
      <td class="name">
        <span>${productName}</span>
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
  
    // select the parent to add the product created
    const parentToInsertCard = document.querySelector('#cart tbody');
    // el.insertAdjacentHTML(position, text)
    // Parses string cart to --> HTML and inserted into the tree
    parentToInsertCard.insertAdjacentHTML('beforeend', productCard);

    document.querySelector(".create-product input[type='text']").value = '';
    document.querySelector(".create-product input[type='number']").value = '';
  };

// Add event listener to remove buttons
// const addListenerToRemoveBtn = () => {
//   // select all the remove buttons
//   const removeBtnCollection = document.querySelectorAll('.action .btn-remove');
//   // iterate to add listener to each button
//   removeBtnCollection.forEach(removeBtnItem => {
//   removeBtnItem.addEventListener('click', removeProduct);
//   })
// };

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  // Add listener to remove buttons
  const productCard = document.querySelector('tbody');
  productCard.addEventListener('click', removeProduct);
  // const removeBtnCollection = document.querySelectorAll('.btn-remove');
  // // iterate to add listener to each button
  // removeBtnCollection.forEach(removeBtnItem => {
  // removeBtnItem.addEventListener('click', removeProduct);
  // })
});

