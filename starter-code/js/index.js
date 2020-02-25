var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
let cantidad = document.querySelectorAll('.qty input')
let borrar = document.querySelectorAll(".btn-delete")


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
function newArticle(){

}
function borrarArticulo(e){
  console.log(e.currentTarget)
  e.currentTarget.parentElement.parentElement.remove()
}

function newButtonBorrarEvent(){
  for(var i = 0; i < borrar.length; i++){
    // console: imprime el elemento pulsado <p> 
    borrar[i].addEventListener('click',borrarArticulo, false);
  }
}


newButtonBorrarEvent()
cantidad.onclick = calcAll;
calc.onclick = calcAll;
console.log(cart)
console.log(calc)
