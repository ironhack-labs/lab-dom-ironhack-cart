var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
var products = document.querySelectorAll('#cart tbody .product');
var total = document.querySelector('#total span');
var deleteBtn = document.querySelectorAll('.rm .btn-delete')
var createBtn = document.getElementById('create');
var subTot;

function getTemplate(name, price) {
  return `<td class="name">
          <span>${name}</span>
        </td>
        <td class="pu">
          $<span>${price}</span>
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
        </td>`;
}

function updateSubtot(nodelist) {
  // Iteration 1.1
  nodelist.forEach(product => {
    subTot = product.querySelector('.pu span').textContent * product.querySelector('.qty input').value;
    product.querySelector('.subtot span').textContent = subTot;
  });
}
//updateSubtot()

function calcAll() {
  products = document.querySelectorAll('#cart tbody .product');
  updateSubtot(products)
  let sumTotal = 0;
  products.forEach(product => sumTotal += parseInt(product.querySelector('.subtot span').textContent));
  total.textContent = sumTotal;

}

calc.onclick = calcAll;


createBtn.onclick = function () {
  var productName = document.getElementById('new_product_name');
  var productPrice = document.getElementById('new_product_price');

  if (!productName.value || !productPrice.value) throw new Error('Missing product Name or Price');
  let tr = document.createElement(`tr`);
  tr.classList.add(`product`)
  cart.appendChild(tr)
  cart.querySelector('tr:last-of-type').innerHTML += getTemplate(productName.value, productPrice.value);

  tr.querySelector('.btn-delete').onclick = function (e) {
    let t = e.currentTarget.closest("tr.product");
    cart.removeChild(t);
    calcAll();
  }

  console.log(deleteBtn);
}

deleteBtn.forEach(element => element.onclick = function () {
  let thisTr = element.closest("tr.product");
  cart.removeChild(thisTr);
  calcAll();
});