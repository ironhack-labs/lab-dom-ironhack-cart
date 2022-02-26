// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;
  //alert(price);

  const quantity = product.querySelector('.quantity input');
  const currentQuantity = quantity.value;
  // alert(currentQuantity);

  const subtotalPrice = price * currentQuantity;
  //alert(subtotalPrice);

  const subtotal = product.querySelector('.subtotal span').textContent = subtotalPrice
  //alert(subtotal);

  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total = total + updateSubtotal(products[i]);
  }

  // ITERATION 3
  const totalValue = document.getElementById("total-value").firstElementChild;
  //const theValue = totalValue.innerText;
  //alert(theValue);
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productWeWantToRemove = target.parentNode.parentNode;
  productWeWantToRemove.parentNode.removeChild(productWeWantToRemove);
  //console.log(target.parentNode.parentNode);
}

// ITERATION 5

function createProduct() {
  //console.log('Creating a product');
  const nameElement = document.querySelector('.create-product input[type="text"]');
  const priceElement = document.querySelector('.create-product input[type="number"]');

  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  const htmlStringOfProduct = `
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
        `;
  newTableRow.innerHTML = htmlStringOfProduct;

  const removeButton = newTableRow.querySelector('button');
  removeButton.addEventListener('click', removeProduct);

  const tableBodyElement = document.querySelector('tbody');
  tableBodyElement.appendChild(newTableRow);
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  const removeButtons = document.querySelectorAll('.product button');
  const removeButtonsArray = [...removeButtons];
  removeButtonsArray.forEach((removeButton) => {
    removeButton.addEventListener('click', removeProduct);
  });
});
