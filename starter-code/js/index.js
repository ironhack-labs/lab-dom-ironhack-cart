let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');

let subtotal = document.querySelector(".subtot span")
let total = document.querySelector("h2 span")

function updateSubtot() {
  subtotal.innerText = Number(document.querySelector(".product .qty input").value) * Number(document.querySelector(".product .pu span").innerText)
  return subtotal.innerText
}

function calcAll() {  
  total.innerText = subtotal.innerText
}

//add another product

function addProduct(name, price) {
  cart.appendChild(document.querySelectorAll("tr.product")[0].cloneNode(true));
  document.querySelectorAll(".product .name")[0].innerText = name
  document.querySelectorAll(".product .pu span")[0].innerText = price
  document.querySelectorAll(".product .qty input")[0].value = 0
  document.querySelectorAll(".subtot span")[0].innerText = 0
}

calc.onclick = calcAll;

