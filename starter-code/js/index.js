var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $create = document.getElementById('create');

var $delete = document.querySelectorAll('.btn-delete');
// let deletes = Array.from($delete);



function updateSubtot(products) {

  let unitPrice = document.querySelectorAll('.pu > span');
  let qty = document.querySelectorAll('.qty input[type=number]');
  let subtotal = document.querySelectorAll('.subtot > span');
  let total = 0;


  if (unitPrice !== []) {
    for (let i = 0; i<products.length; i++){
        total = parseFloat(unitPrice[i].innerText) * parseFloat(qty[i].value);
        subtotal[i].innerHTML = total;
    }
  }
}

function calcAll() {
  let $products = document.querySelectorAll('.product');
  let products = Array.from($products);
  updateSubtot(products);

  let result = 0;

  if (products !== []){
    $products.forEach(elem => result += elem.querySelector('.pu span').innerText * elem.querySelector('.qty input').value);
  }
  document.querySelector('h2 span').innerHTML = result;
}
$calc.onclick = calcAll;

function deleteItem(){

  let button = event.target;
  button.className = "btn btn-delete deleted";

  let toDelete = document.querySelector(".deleted");
  let buttonDelete = document.querySelectorAll('.btn-delete');

  let table = document.querySelectorAll('.product');

  for (let i = 0; i < table.length; i++) {
    if (buttonDelete[i] == toDelete) {
      table[i].remove();
    }
  }

  calcAll();
}
$delete.onclick = deleteItem;


function create(){

  var table = document.getElementById("cart").getElementsByTagName('tbody')[0];
  let newName = document.querySelector('input[type=text]').value;
  let newPrice = document.querySelector('.new input[type=number]').value;

  if(newName !== '' && newPrice !== ''){

  var row = table.insertRow(-1);
  row.className = "product";
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = newName;
  cell1.className = "name";
  cell2.innerHTML = "<td>$<span>" + newPrice + "</span></td>"
  cell2.className = "pu";
  cell3.innerHTML = "<td><label><input type='number' name='qty' value='0' min='0'></label></td>";
  cell3.className = "qty";
  cell4.innerHTML = "<td class='subtot'>$<span>0</span></td>";
  cell4.className = "subtot";
  cell5.innerHTML = "<td><button name='delete' class='btn btn-delete' onclick='deleteItem()'>Delete</button></td>";
  cell5.className = "rm";

  document.querySelector('input[type=text]').value = '';
  document.querySelector('.new input[type=number]').value = '';

  } else {
    alert("You must complete the information");
  }  
  calcAll();
}

$create.onclick = create;