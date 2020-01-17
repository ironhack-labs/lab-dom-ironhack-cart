var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $delete = $cart.querySelectorAll(".btn-delete");
var $create = document.getElementById("create");
var $new = document.querySelector(".new");

function updateSubtot($product) {
  var subtot = $product.querySelector(".subtot>span");
  var qty = $product.querySelector(".qty>label>input");
  var price = $product.querySelector(".pu>span");

  subtot.innerHTML = qty.value*price.textContent;
  return subtot;
};

function calcAll() {
  var $items = $cart.querySelectorAll(".product");
  var total = document.querySelector("h2>span");
  total.innerHTML = "";
  var calc = 0;
  $items.forEach(($product)=>{
    calc += Number(updateSubtot($product).textContent);
  });
  total.innerHTML = calc;
};

function checkDelete($items) {
  var $items = $cart.querySelectorAll(".product");
  $items.forEach((item)=>{
    item.querySelector(".btn-delete").addEventListener("click", ()=>{
      item.innerHTML = ``;
    })
  })
};

function createNew(){
  var newName = $new.querySelector("td:nth-child(1)>input");
  var newPrice = $new.querySelector("td:nth-child(2)>input");
  $cart.innerHTML += `<tr class="product">
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
checkDelete();
}

$calc.onclick = calcAll;
$create.onclick = createNew;
window.onload = checkDelete;


