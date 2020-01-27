var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  /*
  const $priceSpan = $product.querySelector('td.pu span);
  const priceValue = $priceSpan.innerText;

  const $quantityInput = $product.querySelector('input');
  const quantityValue = $quantityInput.value;

  const subTotal = parseFloat(priceValue) * parseInt(quantityValue);

  const $subTotalSpan = $product.querySelector('.subtot span');

  $subTotalSpan.innerText = subtotal.tioFixed(2);

  return subTotal
  */
  const newSubTotal =
    parseFloat($product.querySelector('.pu > span').innerHTML) *
    parseInt($product.querySelector('.qty input').value);
  $product.querySelector('.subtot span').innerHTML = newSubTotal;
  return newSubTotal;
}

function calcAll() {
  // Iteration 1.2
  /*
let total = 0;

 //const $$allProduct = document.querySelectorAll('tr.product);

 for (let $product of $$allProducts){
   let subtotal = updateSubtot($product);
   total += subTotal
 }
 const $totalSpan = document.querySelector('h2 span');

 $totalSpan.innerText = total.toFixed(2);

*/

  let $$allProducts = 0;

  document.querySelectorAll('.product').forEach(function(product) {
    $$allProducts += updateSubtot(product);
  });

  document.querySelector('h2 span').innerText = $$allProducts;
}
$calc.onclick = calcAll;

//Iteration 4
const removeProduct = event => {
  const $button = event.target;

  const $productRow = $button.parentNode.parentNode;

  const $tableBody = $productRow.parentNode;

  $tableBody.removeChild($productRow);

  calcAll();
};

const $$removeButtons = document.getElementsByClassName('btn-delete');

for (let $removeButtons of $$removeButtons) {
  $removeButtons.addEventListener('click', removeProduct);
}

//Iteration 5

const $inputNewProductName = document.querySelector('.new input');
const $inputNewProductPrice = document.querySelector('.new input[type = "number"]');

const $newProductButton = document.querySelector('.new button');

const createNewProductRow = event => {
  const name = $inputNewProductName.value;
  const price = $inputNewProductPrice.value;

  $inputNewProductName.value = '';
  $inputNewProductPrice.value = '';

  const $tr = document.createElement('tr');
  $tr.classList.add('product');

  $cart.innerHTML += `
  <tr class="product">
          <td class="name">
            <span>${name}</span>
          </td>

          <td class="pu">$<span>${price}</span></td>

          <td class="qty">
            <label>
              <input type="number" value="0" min="0" />
            </label>
          </td>

          <td class="subtot">$<span>0</span></td>

          <td class="rm">
            <button class="btn btn-delete">Delete</button>
          </td>
        </tr>
  `;

  const $removeButton = $tr.querySelector('button');

  $cart.appendChild($tr);
};

$newProductButton.addEventListener('click', createNewProductRow);
