var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var products = document.querySelectorAll("#cart tbody .product");

function updateSubtot(product) {
  // Iteration 1.1
  var subtot = $product.querySelector(".subtot>span");
  var qty = $product.querySelector(".qty>label>input");
  var price = $product.querySelector(".pu>span");
  var number = Number(pu.textContent) * Number(qty.value);
  subtot.innerHTML = String(number);
  return number;
}
​
function calcAll() {
  // Iteration 1.2
  let span = document.querySelector("#totalCart");
  span.innerHTML = "";
  let total = 0;
  products.forEach(product => {
  total += updateSubtot(product);
  });
  span.innerHTML = String(total);
};

function checkDelete($items) {
  var $items = $cart.querySelectorAll(".product");
  $items.forEach((item)=>{
    item.querySelector(".btn-delete").addEventListener("click", ()=>{
    item.innerHTML = ``;
    })
  })
};




