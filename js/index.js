// ITERATION 1

function updateSubtotal(product) {

  let price = parseFloat(product.querySelector(".price span").innerText);
  let quantity = parseFloat(product.querySelector('.quantity input').value);
  let subTotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subTotal.toFixed(2);

  return subTotal;
}

function calculateAll() {

  let totalPrice = 0;
  let products = document.querySelectorAll('.product');

  products.forEach(product => {
    let subTotalPerProduct = updateSubtotal(product);
    totalPrice += subTotalPerProduct;
  });

  document.querySelector('h2 span').innerText = totalPrice;

}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  let tableBodyElement = document.querySelector("#cart tbody");
  let productRowElement = target.closest('tr');
  tableBodyElement.removeChild(productRowElement);

}

// ITERATION 5

function createProduct() {

  let productSpecs = document.querySelectorAll('.create-product input');

  let rowElement = document.createElement('tr');
  rowElement.setAttribute('class', 'product');

  let newProductRowHtml =
    ` <td class="name">
      <span>${productSpecs[0].value}</span>
    </td>
    <td class="price">$<span>${productSpecs[1].value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity">
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `
  rowElement.innerHTML = newProductRowHtml;

  document.querySelector("#cart tbody").appendChild(rowElement);

  //clear the values once an new product is created.
  productSpecs.forEach(spec => {
    spec.value = "";
  })

}

window.addEventListener('load', () => {

  //calculate price
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //remove a product
  let removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', removeProduct);
  })

  //add product
  let addButton = document.querySelector("#create");
  addButton.addEventListener('click', createProduct);

});