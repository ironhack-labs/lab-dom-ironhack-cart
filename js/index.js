// ITERATION 1

function updateSubtotal(product) {
  let price = parseFloat(product.querySelector('.price span').innerHTML);
  let quantity = parseInt(product.querySelector('.quantity input').value);
  let subTotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  let total = 0;
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => {
    total += updateSubtotal(product);
  })
  document.querySelector("#total-value span").innerHTML = total;
}


function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.parentNode.parentNode;
  const tbody = productRow.parentNode;
  tbody.removeChild(productRow);
  calculateAll();
}


function createProduct(event) {
  const newProductInfo = document.querySelector('.create-product');
  const productName = newProductInfo.querySelector('.name').value;
  const productPrice = newProductInfo.querySelector('.price').value;
  const newProductRow = `<tr class="product">
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
                        </tr>`
  const products = document.getElementsByTagName('tbody')[0];
  products.innerHTML += newProductRow;
  
  newProductInfo.querySelector('.name').value = "";
  newProductInfo.querySelector('.price').value = 0;
  addRemoveEventListeners();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  addRemoveEventListeners();

  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', (ev) => createProduct(ev));
});

function addRemoveEventListeners() {
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  })
}