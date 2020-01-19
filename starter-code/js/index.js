var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

// Iteration 1.1  Sproduct== tr.product

function updateSubtot($product) {
  //PRECIO
  const unitaryPriceStr = $product.querySelector(".pu span").innerText;
  const unitaryPrice = parseFloat(unitaryPriceStr);
  // console.log(unitaryPrice)

  //CANTIDAD
  const quantity = $product.querySelector(".qty");
  const quantityValue = parseFloat(quantity.querySelector("input").value);
  // console.log(quantityValue)

  //MULTIPLICACION
  const subtotal = unitaryPrice * quantityValue;
  // console.log(result)
  console.log(subtotal);
  $product.querySelector(".subtot span").innerHTML = subtotal;
  return subtotal;
}

// Iteration 1.2 & 3

function calcAll() {
  const allProducts = document.querySelectorAll(".product");
  let total = 0;

  allProducts.forEach(elm => {
    let subtotal = updateSubtot(elm);

    total += subtotal;
  });
  console.log(total);
  document.querySelector("h2 span").innerHTML = total;
}

$calc.onclick = calcAll;

// Iteration 4

function deleteProduct() {
  
  const botones = document.querySelectorAll(".btn-delete");
  
  botones.forEach()

  //.parentNode.remove());
}

"btn-delete".onclick = deleteProduct();
