var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($poduct) {
  // Iteration 1.1
  let priceUnit = parseFloat($poduct.querySelector(".pu > span").innerHTML);
  let quantity = parseFloat($poduct.querySelector(".qty > label > input").value);
  let subtotal = priceUnit * quantity;
  $poduct.querySelector(".subtot > span").innerHTML = subtotal;
}

function calcAll() {
  // Iteration 1.2
  //let btnTotal = $cart.getElementById("calc");
  let products = document.querySelectorAll(".product");
    for(let i= 0; i < products.length; i++){
      updateSubtot(products[i])
    }
  let total = 0;
  let subtotals = document.querySelectorAll(".subtot span");
  for(let i = 0; i < subtotals.length; i++){
    console.log(subtotals[i].innerHTML)
    total += parseFloat(subtotals[i].innerHTML)
  }    
  document.querySelector("h2 span").innerHTML = total;
}
$calc.onclick = calcAll;

//Iteration 4: 

//Iteration 5: 
