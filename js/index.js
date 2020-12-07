// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  const subtotalValue = Number(price) * quantity

  product.querySelector('.subtotal span').innerText = subtotalValue;

  return subtotalValue
}

const enableRemove = () => {
  const allRemoveButtons = document.getElementsByClassName('btn-remove');
  [...allRemoveButtons].map(button => {
    button.addEventListener('click', removeProduct);
  })
}

function calculateAll() {
  // ITERATION 2
  const allProductsArray = document.getElementsByClassName('product');
  const subTotals = [...allProductsArray].map((e) => updateSubtotal(e));
  // ITERATION 3
  const totalValue = subTotals.reduce((sum, num) => sum + num)
  document.querySelector('#total-value span').innerText = totalValue;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove()
}

// ITERATION 5
function createProduct() {
  //... your code goes here
  textInputCreate = document.querySelector('.create-product input[type=text]').value;
  unityPriceCreate = document.querySelector('.create-product input[type=number]').value;

  tbodyDOM = document.querySelector('tbody');

  const rowCreate = `<tr class="product">
    <td class="name">
      <span>${textInputCreate}</span>
    </td>
    <td class="price">$<span>${unityPriceCreate}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`

  if (!textInputCreate || unityPriceCreate <= 0) {
    alert('Please specify description and price')
  } else {
    //tbodyDOM.innerHTML += rowCreate
    tbodyDOM.insertAdjacentHTML('beforeend', rowCreate);
    enableRemove()
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  enableRemove()

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
