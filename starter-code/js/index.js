var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
    const subTotal = $product.querySelector('.qty input').value * parseFloat($product.querySelector('.pu span').innerText);
    $product.querySelector('.subtot span').innerText = subTotal;

    return subTotal;
}

function calcAll() {
  // Iteration 1.2IronBubble
    let total = 0;
    document.querySelectorAll('tr.product').forEach( product => {
        total += updateSubtot(product)
    });
    document.querySelector('h2#total span').innerText = total;
}
$calc.onclick = calcAll;

function removeAction() {
    document.querySelectorAll('.btn-delete').forEach( element => {
        element.addEventListener('click', function ()  {
            const tr = this.parentNode.parentNode;
            const tbody = tr.parentNode;
            tbody.removeChild(tr);
            calcAll();
        });
    });
}

document.querySelector('#create').addEventListener('click', function () {
    const createTr = this.parentNode.parentNode;

    document.querySelector('#cart tbody').insertAdjacentHTML('beforeend',` <tr class="product">
        <td class="name">
          <span>${createTr.querySelector('input[type=text]').value}</span>
        </td>

        <td class="pu">
          $<span>${createTr.querySelector('input[type=number]').value}</span>
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
      </tr>`);

    removeAction();
} );

removeAction();