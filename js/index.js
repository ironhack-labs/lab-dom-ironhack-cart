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
  const products = Array.from(document.querySelectorAll('.product')); // nodelist to array
  //const products = document.querySelectorAll('.product'); // nodelist to array
  // Option 1
  let total = 0;
  products.forEach( product => {
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
  // Quality values
  const productName = `${nameRaw.slice(0,1).toUpperCase()}${nameRaw.slice(1)}`;
  const price = Number(priceRaw).toFixed(2);
  
  // parent container
  const tbody = document.querySelector("tbody");

  // Create elements
  const trProduct = document.createElement("tr");
  trProduct.classList.add("product");
  
  // child 1
  const tdName = document.createElement("td");
  tdName.classList.add("name");
 
  const spanName = document.createElement("span");
  spanName.innerText = productName;
  tdName.appendChild(spanName);

  // child 2
  const tdPrice = document.createElement("td");
  tdPrice.classList.add("price");
  tdPrice.innerText = "$";

  const spanPrice = document.createElement("span");
  spanPrice.innerText = price;
 
  tdPrice.appendChild(spanPrice);  // append span

  // child 3 
  const tdQuantity = document.createElement("td");
  tdQuantity.classList.add("quantity");

  const inputQuantity = document.createElement("input");
  inputQuantity.type = "number";
  inputQuantity.value = 0;
  inputQuantity.min = 0;
  inputQuantity.placeholder = "Quantity";
  tdQuantity.appendChild(inputQuantity); // append input

  // child 4
  const tdSubtotal = document.createElement("td");
  tdSubtotal.classList.add("subtotal");
  tdSubtotal.innerText = '$';

  const spanSubtotal = document.createElement("span");
  spanSubtotal.innerText = 0;
  tdSubtotal.appendChild(spanSubtotal); // append span

  // child 5 
  const tdAction = document.createElement("td");
  tdAction.classList.add("action");

  const actionBtn = document.createElement("button");
  actionBtn.classList.add("btn", "btn-remove");
  actionBtn.innerText = "Remove";

  tdAction.appendChild(actionBtn); // append button
  
  // append child 1
  trProduct.appendChild(tdName);
  // append child 2
  trProduct.appendChild(tdPrice);
  // append child 3
  trProduct.appendChild(tdQuantity);
  // append child 4
  trProduct.appendChild(tdSubtotal);
  // append child 5
  trProduct.appendChild(tdAction);

  // add event listener
  trProduct.querySelector(".btn-remove").addEventListener("click", (event) => {
   removeProduct(event);
  });

  // append tbody
  tbody.appendChild(trProduct);

  document.querySelector(".create-product input[type='text']").value = '';
  document.querySelector(".create-product input[type='number']").value = '';
}

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

