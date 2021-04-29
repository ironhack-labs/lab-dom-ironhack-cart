function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = Number(price*quantity);
  
  return Number(subtotal.textContent);
}

function calculateAll() {
  const total = document.querySelector('#total-value span');
  const products = [...document.getElementsByClassName("product")];

  sumOfSubtotals = 0;

  products.forEach(element => {
    sumOfSubtotals += updateSubtotal(element);
  });

  total.textContent = sumOfSubtotals;
}

function removeProduct(event) {
  const target = event.currentTarget;
  event.target.parentNode.parentNode.remove();
  calculateAll();
}

function createProduct() {
  const productName = document.querySelector('.create-product td input').value;
  const unitPrice = document.querySelector('.create-product td:nth-of-type(2) input').value;
  const container = document.getElementById('cart').getElementsByTagName('tbody')[0];

  const tr = document.createElement("tr");
  tr.setAttribute("class", "product");
  tr.innerHTML = `
    <tr class="product">
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${unitPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `;
  container.appendChild(tr);
  removeBtnAddListeners();
}

function removeBtnAddListeners() {
  const removeProductButtons = [...document.getElementsByClassName('btn btn-remove')];
  removeProductButtons.forEach(element => {element.addEventListener('click', removeProduct)});
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const createproductBtn = document.getElementById('create');

  calculatePricesBtn.addEventListener('click', calculateAll);
  createproductBtn.addEventListener('click', createProduct);
  removeBtnAddListeners();
});
