var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $create = document.getElementById('#create');
var $product = document.getElementsByClassName("product");
function updateSubtot($product) {
  // Iteration 1.1
  var unitPr = Number($product.querySelector('.pu span').textContent);
  var quantity = Number($product.querySelector('.qty input').value);

  var subtot = unitPr * quantity;
  var subTotal = $product.querySelector('.subtot');

  subTotal.innerHTML = subtot;


  // var qty = $product.getElementsByClassName("qty")[0];
  // var quant = qty.getElementsByTagName("input")[0];
  // console.log(quant.value);
  return subtot;
}

function calcAll() {
  // Iteration 1.2
  var productArr = [...$product];
  var sum = 0;
  productArr.forEach(function(el){
    var grandtot =updateSubtot(el);
    sum+=grandtot;
  }) 
  var total = document.querySelector("h2 span");
  total.innerHTML = sum;
}

$calc.onclick = calcAll;

var deleteBtns = [...document.getElementsByClassName('btn-delete')];

function deleteProduct(deleteBtns) {
  deleteBtns.addEventListener('click',function(e){
    var button = e.currentTarget;
    var productToDelete = button.parentNode.parentNode;
    var tBody = document.querySelector('tbody');
    tBody.removeChild(productToDelete);
  });
};

deleteBtns.forEach(function(element){
  deleteProduct(element);
});
// deleteBtns.forEach(element=> deleteProduct(element));
var creates = document.getElementById("create");
creates.onclick = function(){
  var nameElement = document.querySelector('.new input[type="text"]');
  var priceElement = document.querySelector('.new input[type="number"]');

  var newTr = document.createElement("tr");

  newTr.className = "product";
  newTr.innerHTML = `
  <td class="name">
  <span>${nameElement.value}</span>
  </td>
  <td class="pu">
    $<span>${priceElement.value}</span>
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
    <button class="btn btn-delete">delete</button>
  </td>
  `;
  $cart.appendChild(newTr);

  nameElement.value = "";
  priceElement.value = "";
};
