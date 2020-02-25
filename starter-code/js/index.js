var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
let create = document.getElementById("create")


function updateSubtot(articuloActual) {
  let preciounitario = parseInt(document.querySelectorAll('.pu span')[articuloActual].innerHTML)
  document.querySelectorAll('.pu span')[articuloActual].innerHTML = preciounitario
  let cantidad = parseInt(document.querySelectorAll('.qty input')[articuloActual].value)
  document.querySelectorAll('.qty input')[articuloActual].value = cantidad
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
  document.querySelectorAll("h2 span")[0].innerText = resultado

}
function newArticle() {
  if (document.querySelector(".new input").value != "" && document.querySelectorAll(".new input")[1].value != "") {
    let productName = document.querySelector(".new input").value
    let productPrice = document.querySelectorAll(".new input")[1].value
    let table = document.querySelector("tbody")
    let newRow = document.querySelector("tbody tr").cloneNode(true)
    newRow.querySelector(".name span").innerHTML = productName;
    newRow.querySelector(".pu span").innerHTML = productPrice;
    table.appendChild(newRow)
    newButtonBorrarEvent()
    document.querySelector(".new input").value = ""
    document.querySelectorAll(".new input")[1].value = ""
  } else {
    if (document.querySelector(".new input").value != "" == "") {
      alert("el campo Product name esta vacio")
    };
    if (document.querySelectorAll(".new input")[1].value != "" == "") {
      alert("el campo Price unit esta vacio ")
    };
  }
}
function borrarArticulo(e) {
  e.currentTarget.parentElement.parentElement.remove()
  calcAll()
}

function newButtonBorrarEvent() {
  let borrar = document.querySelectorAll(".btn-delete");
  for (var i = 0; i < borrar.length; i++) {
    borrar[i].addEventListener('click', borrarArticulo, false);
  }

}

newButtonBorrarEvent()
create.onclick = newArticle;
calc.onclick = calcAll;

