var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let btnDlt = [...document.querySelectorAll(".rm .btn")];
let btnCrt = document.querySelector("#create.btn")

function updateSubtot($product) {
  let $price = parseFloat($product.querySelector(".pu span").innerHTML);
  let quantity = parseFloat($product.querySelector(".qty input").value);
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
  document.querySelector("h2 span").innerHTML = totalPrice;
}

function deleteProduct() {
  for (let i = 0; i < btnDlt.length; i++) {
    btnDlt[i].onclick = function (e) {
      e.currentTarget.parentNode.parentNode.remove()
    }
  }
}

btnCrt.onclick = function () {
  let newPrt = document.createElement("tr");
  let newPrtName = document.querySelector(".product-name").value;
  let newPrtPrc = document.querySelector(".product-price").value;
  newPrt.setAttribute("class", "product");
  newPrt.innerHTML = `
      <td class="name">
            <span>${newPrtName}</span>
          </td>
      
          <td class="pu">
            $<span>${newPrtPrc}</span>
          </td>
      
          <td class="qty">
            <label>
              <input type="number" value="0" min="0">
            </label>
          </td>
      
          <td class="subtot">
            $<span>0</span>
          </td>
      
          <td class="rm">
            <button class="btn btn-delete">Delete</button>
          </td>`
    ;
  $cart.appendChild(newPrt);
  btnDlt = [...document.querySelectorAll(".rm .btn")];
  deleteProduct();
  document.querySelector(".product-name").value = "";
  document.querySelector(".product-price").value = "";
  return btnDlt;
}

$calc.onclick = calcAll;
btnDlt.onclick = deleteProduct();


