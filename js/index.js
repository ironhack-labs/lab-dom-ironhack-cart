// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let subtotal = Number(price.innerHTML) * Number(quantity.value);

  let subT = product.querySelector('.subtotal span');

  return (subT.innerHTML = subtotal);
}

function calculateAll() {
  // ITERATION 2
  let total = 0;
  const products = [...document.getElementsByClassName("product")];
  products.forEach((el) => (total += updateSubtotal(el)));

  // ITERATION 3
  const subT = document.querySelector("#total-value span");
  subT.innerHTML = total;


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const child = target.parentNode.parentNode;
  parent.removeChild(child);
}


// ITERATION 5

function createProduct() {
  let productList = document.querySelector('tbody');

  let newProduct = document.createElement('tr', { class: 'product' });

  newProduct.innerHTML = `
  <td class="name">
      <span>Ironhack Beach Towel</span>
    </td>
    <td class="price">$<span>12.50</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  productList.appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
