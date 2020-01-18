
var calc = document.getElementById('calc');
var cart = document.querySelector('#cart tbody');
var create = document.getElementById("create");
var newp = document.querySelector(".new");


function updateSubtot(product) {
  var quantity = product.querySelector('.qty>label>input');
  var subtot = product.querySelector('.subtot>span');
  var pu = product.querySelector('.pu>span');
  subtot.innerHTML = pu.textContent * quantity.value;
  return subtot;  
}

function calcAll() {
  var products = cart.querySelectorAll('.product');
  let total = document.querySelector("h2 > span");
  total.innerHTML = "";
  let temp = 0;
  products.forEach(product => {
    temp += Number(updateSubtot(product).textContent);
  });
  total.innerHTML = temp;
}

function deleteRow(products) {
  var products = cart.querySelectorAll('.product');
  products.forEach((product) => {
    product.querySelector(".btn-delete").addEventListener("click", () => {
      product.innerHTML = "";
    })
  });
};

function createRow() {
  var newName = document.querySelector(".insertName");
  var newPrice = document.querySelector(".insertPrice");
  cart.innerHTML += 
  `<tr class="product">
    <td class="name">
      <span>${newName.value}</span>
    </td>
    <td class="pu">
      $<span>${newPrice.value}</span>
    </td>
    <td class="qty">
      <label>
        <input type="number" value="1" min="1">
      </label>
    </td>
    <td class="subtot">
      $<span>0</span>
    </td>
    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>
  </tr>`;
  deleteRow();
}

calc.onclick = calcAll;
window.onload = deleteRow;
create.onclick = createRow;

