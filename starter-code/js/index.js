var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  let $price = parseInt($product.querySelector(".pu span").innerHTML);
  let quantity = parseInt($product.querySelector(".qty input").value);
  let subtotal = $price * quantity;
  $product.querySelector(".subtot span").innerHTML = subtotal;
  return subtotal
}

function calcAll() {
  let productArr = [...document.querySelectorAll(".product")];
  let totalPrice = 0;
  productArr.forEach(function (element) {
    totalPrice += updateSubtot(element);
  });
  // let sumOfSubs = updateSubtot(document.querySelectorAll(element));
  document.querySelector("h2 span").innerHTML = totalPrice;
}

$calc.onclick = calcAll;

function deleteProduct() {
  btnArr = document.querySelectorAll(".rm .btn")
  for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].onclick = function () {
      btnArr[i].parentElement.parentElement.remove()
    }
  }
}

deleteProduct();