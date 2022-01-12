// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span' )

  const priceNum = price.innerHTML;
  const quantityNum = quantity.value; 

   const subtotalNum = priceNum * quantityNum;
  subtotal.innerHTML = subtotalNum

console.log(subtotalNum)
  return subtotalNum
}

function calculateAll() {
  // ITERATION 2
  let totalSum = 0;
  const products = document.querySelectorAll('.product');

  products.forEach(singleProduct => {
    subtotal = updateSubtotal(singleProduct);

    totalSum += subtotal
  });
  

  // ITERATION 3
  const total = document.querySelector('#total-value span');
  total.innerHTML = totalSum;
}

// ITERATION 4
function removeProduct(event) {
  // the event being passed will be the button, this means parentNode of parentNode of the event will be the product we will want to delete
  console.log(event.currentTarget);
  const target = event.currentTarget.parentNode.parentNode; 
  target.parentNode.removeChild(target);

  const total = document.querySelector('#total-value span');
  const subtotal = target.querySelector('.subtotal span');

  total.innerHTML = total.innerHTML - subtotal.innerHTML;
}

// ITERATION 5

function createProduct() {
   // input values from the create product line
   // input values from the create product line
   let nameElement = document.querySelector(
    '.create-product input[type="text"]'
  );
  let priceElement = document.querySelector(
    '.create-product input[type="number"]'
  );

  let cart = document.querySelector('tbody'); // targets the cart DOM in which the new elements will be added

  // We proceed to create the product DOM element via 3 steps (create the element, add a class (optional), add some innerHTML (which can include other HTML tags))

  let newProduct = document.createElement('tr'); // to create the new product DOM element that will be added
  newProduct.className = 'product'; // to add a new class to the new product DOM element

  // We create the nested elements by passing a string that represents HTML elements to innerHTML
  // .innerHTML will cause the string to be parsed and converted to nested elements
  // the values from the input nameElement and priceElement are passed with string interpolation
  newProduct.innerHTML = `
    <tr class="product">
      <td class="name">
        <span>${nameElement.value}</span>
      </td>
      <td class="price">$<span>${priceElement.value}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `;

  cart.appendChild(newProduct); // now that we created the whole product DOM element we add it (append it) to the cart

  nameElement.value = ''; // to clear the name input for a new use
  priceElement.value = ''; // to clear the price input for a new use

  // since this is a new element the remove buttons won't have the functionalities, so we proceed to add them
  var deleteButton = newProduct.querySelector('.btn-remove'); // targets the new button not from document, but from the newProduct DOM element.
  deleteButton.addEventListener('click', removeProduct);
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((eachButton) => {
    eachButton.addEventListener('click', removeProduct);
  });

  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});
