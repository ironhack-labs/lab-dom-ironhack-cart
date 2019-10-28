var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.

  let price = $product.querySelector("#put").innerHTML

  let quanty = $product.querySelector("#prueba").value

  return price * quanty
}


// let button = document.getElementById("calc")

// console.log(button)
// button.onclick = function () {

//   let input = document.getElementsByTagName('input')
//   console.log(input)


// }

function calcAll() {
  document.querySelectorAll(".product").forEach(product => {
    let priceProduct = updateSubtot(product)
    product.querySelector("#subtot").innerHTML = priceProduct

  })


}
$calc.onclick = calcAll;