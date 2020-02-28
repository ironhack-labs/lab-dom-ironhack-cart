var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $deleteButtons = document.querySelectorAll(".btn.btn-delete");

function updateSubtot($product) {
  let value = $product.querySelectorAll(".qty input")[0].value;
  let price = $product.querySelectorAll(".pu span")[0].innerHTML;
  let subTot = value * price;
  $product.querySelectorAll(".subtot span")[0].innerHTML = subTot;
  return subTot;
}


function calcAll() {
  let productArr = document.querySelectorAll(".product");
  let total = 0;
  for (let i = 0; i < productArr.length; i++){
    total += updateSubtot(productArr[i]);
  }
  document.querySelectorAll("#total span")[0].innerHTML = total;
}

$calc.onclick = calcAll;

function deleteBtn() {
  for(let i = 0 ; i < $deleteButtons.length; i++){
    $deleteButtons[i].addEventListener("click", function(event){
      let closestRow = $deleteButtons[i].closest("tr");
      $cart.removeChild(closestRow);
      calcAll();
    })
  }
}



let $tfoot = document.querySelector("tfoot");
let $createBtn = document.querySelectorAll("#create")[0];


$createBtn.addEventListener("click", function(){
  let $newRow = document.querySelectorAll(".product")[0].cloneNode(true);
  let $body = document.querySelectorAll("tbody")[0];
  $body.appendChild($newRow);
  
  let $newName = $tfoot.querySelectorAll(".new #newProductName")[0].value;
  let $newPrice = $tfoot.querySelectorAll(".new #newProductPrice")[0].value;

  $newRow.querySelector(".product .name span").innerHTML = $newName;
  $newRow.querySelector(".product .pu span").innerHTML = $newPrice;
  
  $deleteButtons = document.querySelectorAll(".btn.btn-delete"); 
  deleteBtn();
})
