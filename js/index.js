// ITERATION 1

let total = 0;

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  let priceText = price.innerText;

  const quantity = product.querySelector('.quantity input').value;

  let newSubtotal = Number(priceText) * quantity;

  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = newSubtotal;

  total += newSubtotal;

  return newSubtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  let allProducts = document.querySelectorAll(`.product`);
  
  allProducts.forEach((product) => {
    updateSubtotal(product);
  })

  
  // ITERATION 3
  let newTotal = document.querySelector(`#total-value span`);
  newTotal.innerText = total;
  total = 0;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parent = target.parentNode;
  const grandParent = parent.parentNode;
  const greatGrandParent = grandParent.parentNode;

  console.log(grandParent);

  greatGrandParent.removeChild(grandParent);

}

// ITERATION 5

function createProduct() {
  const createName = document.querySelector('#productName').value;
  console.log(createName);
  const createPrice = document.querySelector('#productPrice').value;

  const tableBody = document.querySelector('#table-body');
  const newRow = document.createElement('tr')
  tableBody.appendChild(newRow);
  newRow.classList.add("product");

  newRow.innerHTML = `
    <td class="name">
      <span>${createName}</span>
    </td>
    <td class="price">$<span>${createPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" id = "myInput"/>
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`

  document.querySelector('#productName').value = "";
  document.querySelector('#productPrice').value = "";

  let allRemoveButtons = document.querySelectorAll(`.btn-remove`);
  
  allRemoveButtons.forEach((btn) => {
    btn.addEventListener(`click`, removeProduct);
  });


  /* THE LONG WAY! ALSO NEED TO ADD THE CREATEELEMENT COMPONENTS
  const nameData = newRow.appendChild(`td`);
  nameData.classList.add("name");
  const nameSpan = nameData.appendChild(`span`);
  nameSpan.innerText = `${createName}`;

  const priceData = newRow.appendChild(`td`);
  priceData.classList.add("price");
  const namePrice = priceData.appendChild(`span`);
  namePrice.innerText = `${createPrice}`;

  const quantityData = newRow.appendChild(`td`);
  quantityData.classList.add("quantity");
  const quantityInput = quantityData.appendChild("input");
  //FILL IN THE INPUT

  const subtotalData = newRow.appendChild(`td`);
  subtotalData.classList.add("subtotal");
  const subtotalSpan = subtotalData.appendChild(`span`);
  subtotalSpan.innerText = `0`;

  const actionData = newRow.appendChild(`td`);
  actionData.classList.add("action");
  const ationBtn = actionData.appendChild("input");
  ationBtn.innerText = `${remove}`;
  ationBtn.classList.add("btn btn-remove");*/


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let allRemoveButtons = document.querySelectorAll(`.btn-remove`);
  
  allRemoveButtons.forEach((btn) => {
    btn.addEventListener(`click`, removeProduct);
  });

  const createBtn = document.querySelector(`#create`);
  createBtn.addEventListener(`click`, createProduct);
});
