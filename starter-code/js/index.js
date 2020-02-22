var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let value = $product.querySelectorAll(".qty input")[0].value;
  let unitPrice = $product.querySelectorAll(".pu span")[0].innerHTML;
  let subTotal=value*unitPrice;
  $product.querySelectorAll(".subtot span")[0].innerHTML=subTotal;
  return subTotal;
}

function calcAll() {
  // Iteration 1.2
  let $products = document.querySelectorAll(".product");
  let grandTotal = 0;
  for (let i=0; i<$products.length; i++){
    grandTotal += updateSubtot($products[i])
  };
  document.querySelector("h2 span").innerHTML = grandTotal;
};
$calc.onclick = calcAll;

var $deleteButtons = document.querySelectorAll(".btn.btn-delete");
for(let i = 0 ; i < $deleteButtons.length; i++){
  addDeleteEventListener($deleteButtons[i]);
}

var $addButton=document.querySelector("#create");
$addButton.addEventListener("click",function(){
  let $base = document.querySelectorAll("tbody tr")[0];
  let $cloned = $base.cloneNode(true);
  $cloned.querySelectorAll(".qty input")[0].value="0";
  $cloned.querySelectorAll(".subtot span")[0].innerHTML="0";
  $cloned.querySelector(".name span").innerHTML = document.querySelectorAll(".new input")[0].value;
  $cloned.querySelector(".pu span").innerHTML = document.querySelectorAll(".new input")[1].value;
  let $newDeleteButton = $cloned.querySelectorAll(".btn.btn-delete")[0];
  addDeleteEventListener($newDeleteButton);
  let $addPoint = document.querySelectorAll(".product")[0];
  let $parent = document.querySelectorAll("tbody")[0];
  $parent.insertBefore($cloned,$addPoint);
  document.querySelectorAll(".new input")[0].value = "";
  document.querySelectorAll(".new input")[1].value = "";
})

function addDeleteEventListener ($button){    // Trying to apply DRY!
$button.addEventListener("click", function(event){
  let $toBeDeleted = event.currentTarget.closest("tr");
  let $parentOfToBeDeleted=$toBeDeleted.closest("tbody");
  $parentOfToBeDeleted.removeChild($toBeDeleted);
  calcAll();
})
}