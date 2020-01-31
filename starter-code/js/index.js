var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $total = document.querySelector('body > h2 > span');

function updateSubtot($product) {
  let priceUnit = Number($product.querySelector('.pu span').innerHTML);
  let quantity = Number($product.querySelector('.qty input').value);
  let newTotal = priceUnit * quantity;

  let $subTotal = $product.querySelector('.subtot span');

  $subTotal.innerHTML = newTotal;

  return quantity * priceUnit;
}

function calcAll() {
  // iterate through the products to get the total

  let total = 0;

  const $productList = $cart.querySelectorAll('.product');

  $productList.forEach(product => (total += updateSubtot(product)));
  $total.innerHTML = total.toFixed(2);
}

const $deleteProductRow = document.getElementsByClassName('rm');
//console.dir(deleteProductRow);
for (let i = 0; i < $deleteProductRow.length; i++) {
  let $deleteProductButton = $deleteProductRow[i];
  $deleteProductButton.addEventListener('click', nowDeleteRow);
}

function nowDeleteRow(event) {
  let $deleteBtnClicked = event.target;
  $deleteBtnClicked.parentElement.parentElement.remove();
}
/*I would appreciate some help...need to figure out how to update my total price in the cart with the new total after deletion of any row...thanks*/

let $createNewProducts = document.getElementById('create.btn');
$btn = document.createElement('button');
$btn.addEventListener('click', createNewRows);

function createNewRows(event) {
  let $btn = event.target;
  let $btnClicked = $btn.parentElement.parentElement;
  $Btn = $btnClicked.getElementsByClassName('.btn');
  const $itemsToAdd = `
  <tfoot>
    <tr class='new'>
      <td>
        <input type='text' />
        <span> ${name}</span>
      </td>

      <td class="pu">
        $<span>${number}</span>
      </td>

      <td class="qty">
        <label>
          <input type='number' value='0' min='0' />
        </label>
      </td>

      <td class='subtot'>$<span>0</span></td>

      <td class='rm'>
        <button id='create' class='btn'>
          Create
        </button>
      </td>
    </tr>
  </tfoot>
  `;
  $btn.append($itemsToAdd);
}

$calc.addEventListener('click', calcAll);
//can not make the create button work yet
