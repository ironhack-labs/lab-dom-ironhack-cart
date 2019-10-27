/* var $cart = document.querySelector("#cart tbody");*/

var $calc = document.getElementById("calc");
let $product = document.getElementsByTagName("tr");

////Function Update
function updateSubtot($product) {
  /////Quantity
  let value = $product[1].getElementsByTagName("input")[0].value;

  var valueInNumber = parseInt(value, 10);
  console.log(valueInNumber);

  /////////// Price
  let priceUnit = $product[1].getElementsByClassName("pu");
  console.log({ priceUnit });

  let price = priceUnit[0].getElementsByTagName("span")[0].innerHTML;

  var priceInNumber = parseInt(price, 10);

  ////SubTotal

  let realSubTotal = priceInNumber * valueInNumber;

  let subTotal = $product[1].getElementsByClassName("subtot");
  console.log(subTotal);

  let subTotal2 = subTotal[0].getElementsByTagName("span")[0].innerHTML;
  console.log(typeof subTotal2);

  let subTotalNumber = parseInt(subTotal2, 10);
  console.log(subTotalNumber);

  subTotal[0].getElementsByTagName("span")[0].innerHTML = realSubTotal;

  return subTotalNumber;
}




function calcAll() {
let prodotti = document.getElementsByClassName("product");
console.log(prodotti.length);
const allProducts = [...prodotti];
console.log(allProducts);
  /* allProducts.forEach(function (ele, index) {
   updateSubtot(ele)
}); */

/*   for (i = 0; i < prodotti.length; i++) {
    updateSubtot($product[i]);
  } */
  updateSubtot($product);

}
$calc.onclick = calcAll;
