var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot() {
  const shoppingCart = document.querySelectorAll('#cart .product');
  const total = [];
  shoppingCart.forEach(element => {
    const price = element.querySelector('.pu span').innerHTML;
    const quantity = element.querySelector(`.qty label input`).value;
    let subtotal = element.querySelector(`.subtot span`);
    subtotal.innerHTML = +price * +quantity;
    total.push(subtotal.innerHTML)
  });
  document.getElementById('total').innerHTML = total.reduce((total, amount) => +total + +amount); 
}

$calc.onclick = calcAll;
function calcAll() {
  updateSubtot()
}

// DELETE ITEM
let deleteButtons = document.querySelectorAll(".btn-delete");
for (const deleteButton of deleteButtons) {
  deleteButton.addEventListener("click", deleteItem)
};

function deleteItem(event) {
  let itemToRemove = event.currentTarget.parentNode.parentNode;
  itemToRemove.parentNode.removeChild(itemToRemove)
};


// ADD ITEM 
let createButton = document.getElementById('create');
createButton.addEventListener("click", function() {
  price = document.getElementById('newItemPrice').value;
  name = document.getElementById('newItemName').value;
  let newItem = document.createElement(`tr`);
  newItem.className = 'product';
  newItem.innerHTML = 
  ` <td class="name">
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
    </td>`
  let append = document.getElementById(`append`)
  append.append(newItem);
  deleteButtons = document.querySelectorAll(".btn-delete");
  for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener("click", deleteItem)
  };
});
