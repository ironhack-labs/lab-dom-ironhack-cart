var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
let product = document.querySelector(".product");

function updateSubtot(product) {
  // Iteration 1.1

  //let price = product.querySelector(".pu > span").innerText;
  //let quantity = product.querySelector("input").value;
  //let subTotal = parseFloat(price) * parseFloat(quantity);
  //return subTotal;

  console.log(updateSubtot(product));

  let price = product.querySelector(".pu > span").innerText;
  let quantity = product.querySelector("input").value;
  let total = product.querySelector(".subtot span");
  let subTotal = parseFloat(price) * parseFloat(quantity);
  total.innerHTML = subTotal;
  return value;

}


let calcPrices = product.getElementsByClassName(".calc btn-success");
calcPrices.onclick = fuction {

}

product.setAttribute("subTotal", "td.qty");

document.getElementsByClassName(".pu > span").innerHtml = updatetotal(product);

//subTotal.innerHTML = sendBtn;
//let Subtotal = updateSubtot(product);
//product.span.innerText = subTotal;


function calcAll() {
  // Iteration 1.2

}
$calc.onclick = calcAll;

//document.querySelector('.product').remove()