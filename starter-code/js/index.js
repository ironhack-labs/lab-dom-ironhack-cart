var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $product = $cart.querySelector(".product"); // need "." before product because it's a class. If no dot, then use className and not querySelector
var pu = $product.querySelector(".puI").textContent;
var qty = $product.querySelector(".qtyProduct").value; // already is a number ' type="number" '
var allProducts = $cart.querySelectorAll(".product");


// Iteration 1.1

function updateSubtot() { // = price unit * quantity
  // access to price unit:
  // //1)need access to the product: "var $product"
  // //2)now access to pu: "var pu"
  // //3)access to quantity: "var qty"
  // //4)calculate the subtotal:
  var subtotal = pu * qty;
  return subtotal;
  // console.log(qty);
  // console.log(subtotal);
}
updateSubtot($product);
//console.log(updateSubtot($product)); // 50 YESSSS


// Iteration 1.2

function calcAll(allProducts) {
  // for each row of products, calculate updateSubtotal
  var total = 0;
  allProducts.forEach(product => { // just 'product' and not "$product" ? in this case why we defined product before ?
    total += updateSubtot(product); // stock the result and added to the precedent one
  });
  return total;
}
//console.log(calcAll(allProducts)); // 100 YESSSSSS
$calc.onclick = calcAll; // calcAll is called ONLY when .calc (=Calculate prices button) is clicked