const $cart = document.querySelector("#cart tbody");
const $calc = document.getElementById("calc");
const totalProducts = $cart.querySelectorAll("tr");

function updateSubtot($product) {
  // Iteration 1.1
  // const firstPrice = parseInt(
  //   document
  //     .getElementsByClassName("product")[0]
  //     .getElementsByTagName("span")[1].innerText
  // );
  // const quantityPrice = parseInt(
  //   document
  //     .getElementsByClassName("product")[0]
  //     .getElementsByTagName("input")[0].value
  // );

  // const subTotal = parseInt(
  //   document
  //     .getElementsByClassName("product")[0]
  //     .getElementsByTagName("span")[2].innerText
  // );

  const product = $product.querySelector(".product .name").innerText;
  const price = parseInt($product.querySelector(".product .pu span").innerText);
  const quantity = parseInt(
    $product.querySelector(".product .qty input").value
  );
  let subTotal = price * quantity;
  return subTotal;

  //document.querySelector("#cart .product .subtot span").innerText = subTotal

  //$product.addEventListener("click", e => e.currentTarget.remove());

  //tableProduct.after(document.querySelector("#cart tbody"));
  //document.querySelector("#cart tbody").append(tableProduct);
}

function calcAll() {
  // Iteration 1.2
  let totalPriceCalc = 0;
  for (let i = 0; i < totalProducts.length; i++) {
    let subTotalCalc = updateSubtot(totalProducts[i]);
    totalProducts[i].querySelector(".subtot span").innerText = subTotalCalc;
    totalPriceCalc += subTotalCalc;
  }
  document.querySelector("h2 span").innerText = totalPriceCalc;
}

$calc.onclick = calcAll;

//Delete Button
const deleteButtons = document.getElementsByClassName("btn-delete");

// Because we are working with a class, we need to obtain each 'element' of the button
// and go back to the totalProducts, and use the iteration to go to the parent and remove
// the child element from that parent.
for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", e =>
    totalProducts[i].parentNode.removeChild(totalProducts[i])
  );
}
