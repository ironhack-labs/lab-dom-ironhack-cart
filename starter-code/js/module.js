var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot(product) {
  let price = product.querySelector (".pu span");
  let quantity = product.querySelector (".qty label input");
  let subtotal = product.querySelector(".subtot span");
  let total = quantity.value * Number(price.innerHTML);
  subtotal.innerHTML = `${total}`
  return total;
}

function calcAll() {
  let totalPrice=0;
    document.querySelectorAll(".product").forEach(product => {
      totalPrice+= updateSubtot(product)
    });
    document.querySelector(".total-price span").innerHTML = `${totalPrice}`;
  }



$calc.onclick = calcAll;

document.querySelectorAll(".btn-delete").forEach(button => {
  button.onclick = function (event) {
  let row = event.target.parentNode.parentNode;
  row.parentNode.removeChild(row)
  }
})

document.getElementById("create").onclick = function (event){
  let inputName = event.target.querySelector.value
  let newTr = document.querySelector(".product").cloneNode(true);
  document.querySelector("tbody").appendChild(newTr);
  newTr.querySelector(".name span").innerHTML = `${document.getElementById("name-input").value}`;
  newTr.querySelector(".pu span").innerHTML = `${document.getElementById("pu-input").value}`;

}

