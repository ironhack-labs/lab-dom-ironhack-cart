var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
let cantidad = document.querySelectorAll('.qty input')
//let borrar = document.querySelectorAll(".btn-delete")
let create = document.getElementById("create")


function updateSubtot(articuloActual) {
  let preciounitario = parseInt(document.querySelectorAll('.pu span')[articuloActual].innerHTML)
  let cantidad = parseInt(document.querySelectorAll('.qty input')[articuloActual].value)
  document.querySelectorAll('.subtot span')[articuloActual].innerHTML = preciounitario * cantidad
  // Iteration 1.1
}

function calcAll() {
  // Iteration 1.2

  let preciounitario = document.querySelectorAll('.subtot span')
  let resultado = 0
  for (let index = 0; index < preciounitario.length; index++) {
    updateSubtot(index)
    resultado += parseInt(preciounitario[index].innerHTML);
  }
  console.log(document.querySelectorAll("h2 span"))
  document.querySelectorAll("h2 span")[0].innerText = resultado

}
function newArticle() {
  console.log(document.querySelector(".new input").value)
  let productName = document.querySelector(".new input").value
  document.querySelector(".new input").value= ""
  let productPrice = document.querySelectorAll(".new input")[1].value
  document.querySelectorAll(".new input")[1].value =""
  cart.innerHTML += `<tr class="product"><td class="name"><span>${productName}</span></td><td class="pu">$<span>${productPrice}</span></td><td class="qty"><label><input type="number" value="0" min="0" /></label></td><td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td></tr>`
  document.querySelector('#cart tbody')
  newButtonBorrarEvent()
  calcAll()
}
function borrarArticulo(e) {
  console.log(e.currentTarget)
  e.currentTarget.parentElement.parentElement.remove()
}

function newButtonBorrarEvent() {
 let borrar = document.querySelectorAll(".btn-delete")
  for (var i = 0; i < borrar.length; i++) {
    // console: imprime el elemento pulsado <p> 
    borrar[i].addEventListener('click', borrarArticulo, false);
  }
}


newButtonBorrarEvent()
create.onclick = newArticle;
cantidad.onclick = calcAll;
calc.onclick = calcAll;
console.log(cart)
console.log(calc)
