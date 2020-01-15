var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $delete = document.querySelector(".btn.btn-delete");

let items = [];
$cart.querySelectorAll('tr').forEach($cart => {
  items.push($cart);
})
let number = items.length

function updateSubtot($product) {
  // Iteration 1.1
  let basePrice = $product.querySelector(".pu > span").innerHTML;
  let qty = $product.querySelector(".qty > label > input").value;
  let subTotal = basePrice * qty;
  $product.querySelector(".subtot > span").innerHTML = subTotal;
  return subTotal;
}

function calcAll() {
  // Iteration 1.2
  let total = 0;
  document.querySelectorAll(".product").forEach(function($product) {
    total += updateSubtot($product);
  });
  document.querySelector("h2 > span").innerHTML = total;
}

function deleteRow(index){
  const $item = items[index]
  console.log($item);
  const father = $item.parentNode
  father.removeChild($item)
}

function createItem(){
  let number = items.length
  const $productName = document.querySelector('tfoot input[type = "text"]');
  const $productPrice = document.querySelector('tfoot input[type = "number"]');
  console.log(number)

const newItem = document.createElement('tr')
newItem.className='product'

  const $newRow = `
  <td class="name">
    <span>${$productName.value}</span>
  </td>

  <td class="pu">
    $<span>${$productPrice.value}</span>
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
    <button class="btn btn-delete" onclick="deleteRow(${number})">Delete</button>
  </td>
`
newItem.innerHTML=$newRow

$cart.appendChild(newItem)
  items.push(newItem);
  $productName.value = '';
  $productPrice.value = '';
}

$calc.onclick = calcAll;

