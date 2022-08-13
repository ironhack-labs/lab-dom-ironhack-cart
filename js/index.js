// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  const subtotalBox = product.querySelector('.subtotal span');
  subtotalBox.textContent = price * quantity;
  return parseFloat(subtotalBox.textContent);
}

function calculateAll() {
  // ITERATION 2 and ITERATION 3
  const multipleProducts = document.querySelectorAll('.product');
  // console.log(multipleProducts);
  let totalPrice = 0;
  [...multipleProducts].forEach(element => {
    totalPrice += updateSubtotal(element);
  });
  const totalPriceBox = document.querySelector('#total-value span');
  totalPriceBox.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.parentNode.removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let products = document.querySelector('tbody');
  let newPrice = document.querySelector('.create-product input[type=number]').valueAsNumber;
  let newName = document.querySelector('.create-product input[type=text]').value;
  // I dont like this, but html forced my hand
  // I should instead use insertAdjacentElement()
  // its better :)
  products.insertAdjacentHTML('beforeend',
    `<tr class="product">
        <td class="name">
          <span>${newName}</span>
        </td>
        <td class="price">$<span>${newPrice}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
      </tr>`);
  // It add the action listener to the delete button to the new """node"""
  const removeProductBtns = document.querySelectorAll('.btn-remove');
  removeProductBtns[removeProductBtns.length - 1].addEventListener('click', removeProduct);

  //Resetting the values on create product after the new product has been added
  document.querySelector('.create-product input[type=text]').value = '';
  document.querySelector('.create-product input[type=number]').value = '';

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.querySelectorAll('.btn-remove');
  [...removeProductBtns].forEach(element => {
    element.addEventListener('click', removeProduct)
  });

  document.querySelector('#create').addEventListener('click', createProduct);
});
