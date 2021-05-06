// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').textContent;
  let quantityTag = product.querySelector('input');
  let quantity = quantityTag.value;
  let subtotal = quantity * price;
  let subtotalItem = product.querySelector('.subtotal span');
  subtotalItem.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {

  // ITERATION 2
  let productsList = document.getElementsByClassName('product');
  let total = 0;
  for (let i = 0; i < productsList.length; i++) {

    // ITERATION 3
    total += updateSubtotal(productsList[i]);
  }
  let totalItem = document.querySelector('#total-value span');
  totalItem.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.parentNode.removeChild(target);
}

// ITERATION 5

function createProduct() {
  let newProductName = document.querySelector(`.create-product input[type="text"]`).value;
  let newProductQuantity = document.querySelector(`.create-product input[type="number"]`).value;
  let newRow = document.createElement('tr');
  newRow.innerHTML = `<td class="name">
  <span>${newProductName}</span>
</td>
<td class="price">$<span>${newProductQuantity}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`

  let parent = document.querySelector("tbody");
  console.log(parent)
  parent.appendChild(newRow);
}

window.addEventListener('load', () => {
  let calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeProductBtns.length; i++) {
    removeProductBtns[i].addEventListener('click', removeProduct)
    }
  
  let createBtn = document.getElementById("create");
  createBtn.addEventListener('click', createProduct)
});
