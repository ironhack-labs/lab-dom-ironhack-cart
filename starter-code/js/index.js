let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');

let priceUnit = document.querySelector('.pu span').innerHTML
let chosenQuant = document.querySelector('.qty input').value
let subTotal = document.querySelector('.subtot span')
let inputEvent = document.querySelector('.qty input')

inputEvent.onclick = updateSubtot

function updateSubtot() {
    subTotal.innerHTML = Number(priceUnit) * Number(document.querySelector('.qty input').value)
    console.log(subTotal)
  }

function calcAll() {
    document.querySelector("h2 span").innerHTML = document.querySelector('.subtot span').innerHTML
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


}

