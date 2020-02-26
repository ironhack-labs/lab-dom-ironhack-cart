var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
let create = document.getElementById("create")
let backuprow = document.querySelector("tbody tr").cloneNode(true)


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
  console.log(backuprow)
console.log(document.querySelector("tbody tr"))
  let productName = document.querySelector(".new input").value
  let productPrice = document.querySelectorAll(".new input")[1].value
  let table = document.querySelector("tbody")
let newRow =""
console.log(document.querySelector("tbody tr") )
  if (document.querySelector("tbody tr") === "") {
    newRow= backuprow
  } else {
    newRow = document.querySelector("tbody tr").cloneNode(true)

  }
  if (document.querySelector(".new input").value != "" && document.querySelectorAll(".new input")[1].value != "") {

    newRow.querySelector(".name span").innerHTML = productName;
    newRow.querySelector(".pu span").innerHTML = productPrice;
    table.appendChild(newRow)
    RefreshButtons()
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

function RefreshButtons() {
  let borrar = document.querySelectorAll(".btn-delete");
  for (var i = 0; i < borrar.length; i++) {
    borrar[i].addEventListener('click', borrarArticulo, false);
  }
  console.log(document.querySelectorAll('.qty input'))
  let refresh = document.querySelectorAll('.qty input')
  
  for (let j = 0; j < refresh.length; j++) {
    refresh[j].addEventListener('change', calcAll,false);

  }

 

}

RefreshButtons()
create.onclick = newArticle;
calc.onclick = calcAll;

