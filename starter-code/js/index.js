let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');

let input1 = document.querySelectorAll('.qty input')[0]
input1.onchange = updateSubtot

function updateSubtot() {
  document.querySelectorAll('.subtot span')[0].innerHTML = Number(document.querySelectorAll('.pu span')[0].innerHTML) * Number(document.querySelectorAll('.qty input')[0].value)
  document.querySelectorAll('.subtot span')[1].innerHTML = Number(document.querySelectorAll('.pu span')[1].innerHTML) * Number(document.querySelectorAll('.qty input')[1].value)
}

function calcAll() {
    document.querySelector("h2 span").innerHTML = Number(document.querySelectorAll('.subtot span')[0].innerHTML) + Number(document.querySelectorAll('.subtot span')[1].innerHTML)
}

calc.onclick = calcAll;

function addProduct(name, price, position) {
  //clone first product
  let newProd = document.querySelector(".product").cloneNode(true)
  document.querySelector("tbody").appendChild(newProd)

  //set name & price
  document.querySelectorAll(".product .name span")[position].innerHTML = name;
  document.querySelectorAll('.pu span')[position].innerHTML = price;

  // reset quantity & subtotal
  document.querySelectorAll(".product .qty input")[position].value = 0;
  document.querySelectorAll(".product .subtot span")[position].innerText = 0;

  let input2 = document.querySelectorAll('.qty input')[1]
  input2.onchange = updateSubtot
}



