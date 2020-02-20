var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $deletebtn = document.querySelectorAll('.btn-delete');
let tbody = document.querySelector('tbody');
let createBtn = document.querySelector('button[id="create"]');


for(let i=0; i<$deletebtn.length; i++){
  $deletebtn[i].onclick = deleteProduct;
}


function updateSubtot($product) {

  let rows = document.querySelectorAll(`${$product}`);

  let qty = [];
  let unitPrice = [];
  let subtot = [];

  for(let i=0; i<rows.length; i++){

    qty.push(Number(rows[i].querySelector('.qty input').value));
    unitPrice.push(Number(rows[i].querySelector('.pu span').innerText));
    subtot.push(qty[i] * unitPrice[i]);
    
    rows[i].querySelector('td[class="subtot"] span').innerText = subtot[i];

  }

  let total = subtot.reduce((sum, product) => sum + product);
  document.querySelector('h2 > span').innerText = total;
  
  return subtot;

}

function calcAll() {
  updateSubtot('.product');

}

function deleteProduct(){

  let activeButton = event.currentTarget;
  let parentProduct = activeButton.parentNode.parentNode;
  tbody.removeChild(parentProduct);

}


function createProduct(){
  let productName = document.querySelector('.new input[type="text"]').value;
  let productPrice = document.querySelector('.new input[type="number"]').value;

  let newProduct = document.querySelectorAll(".product")[0].cloneNode(true);

  newProduct.querySelector('.name span').innerText = productName;
  newProduct.querySelector('.pu span').innerText = productPrice;
  newProduct.querySelector('.btn-delete').onclick = deleteProduct;
  document.querySelectorAll("tbody")[0].appendChild(newProduct);

}


createBtn.onclick = createProduct;

$calc.onclick = calcAll;