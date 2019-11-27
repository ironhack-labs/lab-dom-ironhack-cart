var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
var child = $cart.querySelector(".product");

function updateSubtot($product) {
  // Iteration 1.1

 $cart.querySelectorAll(".product").forEach(function(element){
 
  let price = element.querySelector(".pu span").innerText;
  let quantity = element.querySelector(".qty input").value;
  let subTotalTag = element.querySelector(".subtot span");

  let subTotal = Number(price) * Number(quantity);

  subTotalTag.innerText = subTotal;
 })
}

function calcAll() {
  // Iteration 1.2
  document.querySelector(".btn.btn-success").onclick = function() {
    updateSubtot();

    let total = 0;

    $cart.querySelectorAll(".product").forEach(function(element){
      let subTotal = element.querySelector(".subtot span").innerText;
      
      total = total + Number(subTotal);
  });
  document.querySelector("h2 span").innerText = total;
}
}

document.querySelector(".btn.btn-delete").onclick = function(){
  console.log("blabla")
  removeRow()
}


function removeRow(){
  child.parentNode.removeChild(child);
}


$calc.onclick = calcAll;
