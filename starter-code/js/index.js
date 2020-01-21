var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $delete = document.getElementsByClassName('btn btn-delete');
var $create = document.getElementById('create');
var $tfoot = document.getElementsByTagName('tfoot');
var $prod = document.getElementsByClassName('product');

function remove() {
  for(var i = 0; i < $delete.length; i++) {
  
    $delete[i].addEventListener('click', function(e) {
      e.currentTarget.parentNode.parentNode.remove();
    }, false);}
  }

function updateSubtot($product) {
  let productPrice = $product.querySelector('.pu span').innerText; // select the unit price
  let productQuantity = $product.querySelector('.qty input').value; // select the product quantity
  let subTot = productPrice * productQuantity; //calculate subtotal
  $product.querySelector('.subtot span').innerText = subTot; //update front end HTML
  return subTot;
}

function calcAll() {
  // I went with a good old For loop, didn't try the forEach() method
  let total = 0;
  for (i = 0; i < document.getElementsByClassName('product').length; i++) {
    updateSubtot(document.getElementsByClassName('product')[i]);
    total += document.getElementsByClassName('subtot')[i].querySelector('span').innerText * 1; //transforming the subtot innertext string into a number
  }
  document.querySelector('h2 span').innerText = total;
}


function newProduct() {
  let newProductName = $tfoot[0].children[0].children[0].children[0].value;
  let newProductValue = $tfoot[0].children[0].children[1].children[0].value;
  x = $prod[0];
  x2 = x.cloneNode(true);
  $cart.appendChild(x2);
  $prod[$prod.length-1].children[0].children[0].innerText = newProductName;
  $prod[$prod.length-1].children[1].children[0].innerText = newProductValue;
  remove(); //adds the event listener for all the delete button. 

}


$calc.onclick = calcAll;
$create.onclick = newProduct;

