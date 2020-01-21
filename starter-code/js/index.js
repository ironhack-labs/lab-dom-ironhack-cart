var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
const products = [...document.querySelectorAll('.product')]

function updateSubtot(products) {
  products.forEach(e => {
    const priceCell = e.querySelector('.pu')
    const price = Number(priceCell.querySelector('span').innerHTML)
    const quantityCell = e.querySelector('.qty');
    const quantity = Number(quantityCell.querySelector('input').value);
    const subTotalCell = e.querySelector('.subtot')
    const newSubtotal = price * quantity;
    subTotalCell.innerHTML = '$' + newSubtotal.toFixed(2);
    return subTotalCell;
  })
}

function calcAll() {
  // Iteration 1.2
  updateSubtot(products);
  const subTotals = [...document.querySelectorAll('.subtot')]
  let totalInCents = 0;
  subTotals.forEach(e => {
    totalInCents += dollarsToCents(e.innerHTML);
  })

  total = centsToDollars(totalInCents);
  document.querySelector('h2').querySelector('span').innerHTML = total;
}
calc.onclick = calcAll;

function dollarsToCents(dollars) {
  cents = dollars.substr(1);
  cents *= 100;
  return cents
}

function centsToDollars(cents) {
  return (cents / 100).toFixed(2)
}

const deleteButtons = [...document.querySelectorAll('.btn-delete')]

deleteButtons.forEach(e => {
  e.addEventListener('click', deleteProduct)
})

function deleteProduct(productRow) {
  const row = productRow.currentTarget.parentNode.parentNode;
  const tableBody = row.parentNode;
  tableBody.removeChild(row)
}

const createButton = document.querySelector('#create');

createButton.addEventListener('click', createRow);

function createRow() {
  const newRow = document.querySelector('.new');
  const productName = newRow.querySelector('input[type=text]').value
  const price = Number(newRow.querySelector('input[type=number]').value)

  const neHTMLToAdd = `<tr class="product">
  <td class="name">
    <span>${productName}</span>
  </td>

  <td class="pu">
    $<span>${price.toFixed(2)}</span>
  </td>

  <td class="qty">
    <label>
      <input type="number" value="0" min="0">
    </label>
  </td>

  <td class="subtot">
    $<span>0</span>
  </td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
</tr>`

  const tbody = document.querySelector('tbody')

  tbody.innerHTML += neHTMLToAdd;

  newRow.querySelector('input[type=text]').value = ""
  newRow.querySelector('input[type=number]').value = ""

}