var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $total = document.querySelector('h2 span');

function updateSubtot($product) {
  // Iteration 1.1
    let price = Number($product.querySelector('.pu span').innerHTML);
    let num = Number($product.querySelector('.qty input').value);
    $product.querySelector('.subtot span').innerHTML = price*num;
    return price*num;
}


function calcAll() {
  // Iteration 1.2
  let productArr = [...$cart.children];
  let subtotArr = productArr.map(updateSubtot);
  let sum =subtotArr.reduce((a,b)=>a+b);
  $total.innerHTML = sum;


}
$calc.onclick = calcAll;

function addNewRow (product,price) {
  //create a new row
  let newRow = $cart.insertRow();
  newRow.className = 'product';
  //create cell 1
  let name = newRow.insertCell();
  name.className = 'name';
  let span = document.createElement('span');
  span.innerHTML = product;
  name.appendChild(span);
  //create cell 2
  let pu = newRow.insertCell();
  pu.className='pu';
  let span2 = document.createElement('span')
  span2.innerHTML = price;
  pu.appendChild(document.createTextNode('$'));
  pu.appendChild(span2);
  //create cell 3
  let qty = newRow.insertCell();
  qty.className = 'qty';
  let input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.setAttribute('value', '0');
  input.setAttribute('min', '0');
  let label = document.createElement('label');
  label.appendChild(input);
  qty.appendChild(label);
  //create cell 4
  let subtot = newRow.insertCell();
  subtot.className = 'subtot';
  subtot.insertAdjacentHTML('afterbegin', '$<span>0</span>');
  //create cell 5
  let rm = newRow.insertCell();
  rm.className = 'rm';
  let button = document.createElement('button');
  button.innerHTML = 'Delete';
  button.classList.add('btn', 'btn-delete');
  rm.appendChild(button);
};

addNewRow('IronShirt','15.00');

console.log($cart)

function deleteItem (e) {
  
  if(e.target.classList.contains('btn-delete')) {
    let trToDelete = e.target.parentNode.parentNode;
    trToDelete.parentNode.removeChild(trToDelete);
    
  }
}

$cart.addEventListener('click',deleteItem);

let $new = document.querySelector('.new ');
let button = $new.children[4].children[0]
let productName = $new.children[0].children[0];
let unitPrice = $new.children[1].children[0];


function addButton(e) {
  let product = productName.value;
  let price = unitPrice.value;
  addNewRow (product,price);
} 

button.addEventListener('click',addButton);


