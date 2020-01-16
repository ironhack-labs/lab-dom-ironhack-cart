var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
var createBtn = document.getElementById('create');
var tbody = document.querySelector("tbody");
var inputName = document.getElementById("input-name");
var inputPrice = document.getElementById("input-price");

function updateSubtot(product) {
  var price = Number(product.querySelector('.pu span').textContent);
  console.log(price);
  var subTot = price * product.querySelector('.qty input').value;
  console.log(subTot);
  product.querySelector('.subtot span').textContent = subTot;
  return subTot;
}

function calcAll() {
  var productList = document.querySelectorAll('.product');
  var totalValue = 0;
  for (i=0; i<productList.length; i++) {
  var subTotal = updateSubtot(productList[i]);
  totalValue += subTotal;
  document.querySelector('h2 span').textContent = totalValue;
  }
}

calc.onclick = calcAll;

createBtn.onclick = function () {
  tbody.innerHTML += `<tr class="product">
  <td class="name">
    <span>${inputName.value}</span>
  </td>

  <td class="pu">
    $<span>${inputPrice.value}</span>
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
</tr>`;
listenDeleteBtns();
};

function listenDeleteBtns() {
  var deleteBtns = document.querySelectorAll('.btn-delete');

  deleteBtns.forEach(function(deleteBtn) {
    deleteBtn.onclick = function(e) {
      console.log("hey");
      return e.currentTarget.parentElement.parentElement.remove();
    };
  });
};

listenDeleteBtns();