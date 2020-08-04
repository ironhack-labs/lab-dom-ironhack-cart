// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(`.price span`).innerHTML;
  const quantity = product.querySelector(`.quantity input`).value;
  const subTotal = price * quantity;
  const value = product.querySelector(`.subtotal span`);
  value.innerHTML = subTotal;
  return Number(value.innerHTML);
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
    let everything = document.querySelectorAll(`.product`);
    everything.forEach((product) => {
      updateSubtotal(product);
    });
    let calculation = [...everything].reduce((accumulator,currentValue) => {
      return accumulator + updateSubtotal(currentValue);
    }, 0);
    let finalPrice = document.querySelector(`#total-value span`);
    finalPrice.innerHTML = calculation;
    return calculation;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode.remove()
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  const [name, price] = document.querySelectorAll('tfoot input');
  const tbody = document.getElementsByTagName('tbody')[0];
  tbody.insertAdjacentHTML('beforeend', `
    <tr class="product">
      <td class="name">
        <span>${name.value}</span>
        </td>
      <td class="price">$<span>${price.value}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `)
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(removeButton => {removeButton.removeEventListener('click', removeProduct)});
  removeButtons.forEach(removeButton => {removeButton.addEventListener('click', removeProduct)});
  name = "";
  price = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});

const removeButton = document.querySelectorAll(`.btn-remove`);
removeButton.forEach((element) =>{
  element.addEventListener(`click`,removeProduct);
});

const createButton = document.getElementById(`create`);
createButton.addEventListener(`click`,createProduct);
