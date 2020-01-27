var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

// iteration 1.1

function updateSubtot($product) {
  const $subtotal = $product.querySelector('.subtot span');
  const $priceUnit = Number($product.querySelector('td.pu span').innerText);
  const $quantity = Number($product.querySelector('td.qty input').value);

  const subtotal = $priceUnit * $quantity;
  $subtotal.innerText = subtotal.toFixed(2);

  return subtotal;
}


// iteration 1.2/2/3

function calcAll() {
  const $$allProducts = document.querySelectorAll('tr.product');

  let total = 0;

  for (let $product of $$allProducts) {
    let subtotal = updateSubtot($product);

    total += subtotal;

    const $totalSpan = document.querySelector('h2 span');
    $totalSpan.innerText = total.toFixed(2);

  }
}

// to call the function when the Calculate Prices button is clicked

// $calc.onclick = calcAll;

$calc.addEventListener('click', event => {
  calcAll();
});


// iteration 4

const removeProduct = event => {
  const $button = event.target;
  const $productRow = $button.parentNode.parentNode;
  const $tableBody = $productRow.parentNode;

  $tableBody.removeChild($productRow);

  calcAll();

};

const $$removeButtons = document.getElementsByClassName('btn-delete');
for (let $removebutton of $$removeButtons) {
  $removebutton.addEventListener('click', removeProduct)

  };


  // iteration 5

  const $inputNewProductName = document.querySelector('.new input');
  const $inputNewProductName = document.querySelector('.new input[type="number"]');

  const $newProductButton = document.querySelector('.new button');

  const createNewProductRow = event => {
   
    const name = $inputNewProductName.value;
    const price = $inputNewProductPrice.value;
    $inputNewProductName.value = '';
    $inputNewProductPrice.value = '';

    $cart.innerHTML += 
    `
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

`
  };

  $newProductButton.addEventListener('click', createNewProductRow);
