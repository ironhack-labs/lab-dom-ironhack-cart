var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
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
function createRow(){
  const name = document.querySelector('.new .name').value
  const price = document.querySelector('.new .price').value
  let table = document.querySelector("tbody")
  let newRow = document.querySelector("tbody tr").cloneNode(true)
  newRow.querySelector(".name span").innerHTML = name;
  newRow.querySelector(".pu span").innerHTML = price;
  table.appendChild(newRow)
}
function newArticle() {
  if(document.querySelector(".new input").value!=""&&document.querySelectorAll(".new input")[1].value!=""){
    let productName = document.querySelector(".new input").value
    let productPrice = document.querySelectorAll(".new input")[1].value
    let table = document.querySelector("tbody")
    let newRow = document.querySelector("tbody tr").cloneNode(true)
    newRow.querySelector(".name span").innerHTML = productName;
    newRow.querySelector(".pu span").innerHTML = productPrice;
    table.appendChild(newRow)
    newButtonBorrarEvent()
    document.querySelector(".new input").value= ""
    document.querySelectorAll(".new input")[1].value =""


  }
 console.log("algun campo esta vacio")
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
calc.onclick = calcAll;
console.log(cart)
console.log(calc)
