var $cart   = document.querySelector('#cart tbody');
var $calc   = document.getElementById('calc');
var $remove = document.getElementsByClassName('btn-delete');
var $add    = document.getElementsByTagName('tfoot');
var $crear  = document.getElementById('create');
var $structure = $cart.children[0].cloneNode(true);

function updateSubtot($product) {
  let $price = $product.cells[1].innerText;
  let price = $price.split('$') ;
  let valueSubTotal =  price[1]* $product.cells[2].children[0].children[0].value;
  $product.cells[3].children[0].innerText = valueSubTotal;
  return valueSubTotal;
}

function calcAll() {
  let total = 0;
  let $total = document.getElementsByTagName('h2');

  for(let a = 0; a < $cart.childElementCount; a++){
    total += updateSubtot($cart.children[a]);
  }

  $total[0].children[0].innerText = total;
  return total;
}

function remove(event){
  $cart.removeChild(event.currentTarget.parentNode.parentNode);
}

function add(){
  let name = $add[0].children[0].cells[0].children[0].value;
  let pu = $add[0].children[0].cells[1].children[0].value;

  var NewTexts = $structure;
  NewTexts.cells[0].children[0].innerText = name;
  NewTexts.cells[1].children[0].innerText = pu;

  let newProduct = NewTexts.cloneNode(true);

  $cart.append(newProduct);

  cleanTfood();
}

function cleanTfood(){
  $add[0].children[0].cells[0].children[0].value = "";
  $add[0].children[0].cells[1].children[0].value = "";
}

$calc.onclick = calcAll;
$crear.onclick = add;