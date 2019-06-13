let todo = document.querySelectorAll(".around")
let name = document.querySelector("#name")
let precio = document.querySelectorAll(".precio")
let quiantity = document.querySelectorAll(".input")
let total = document.querySelectorAll(".total")
let borrar = document.querySelectorAll(".delete")
let seacabo = document.querySelector("#final")
let nuevo = document.querySelector(".nuevo")

function delete_row(e)
{ 
  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode)
  seacabo = document.querySelector("#final")
  borrar = document.querySelectorAll(".delete")
  total = document.querySelectorAll(".total")
  quiantity = document.querySelectorAll(".input")
  precio = document.querySelectorAll(".precio")
  name = document.querySelector("#name")
  todo = document.querySelectorAll(".around")
  nuevo = document.querySelector(".nuevo")
  ultimo()
}
function getPriceByProduct(itemNode){
    let uprecio=  itemNode.innerText
    uprecio = uprecio.substr(1);
    upprecio = parseInt(uprecio)
    return uprecio
}

function updatePriceByProduct(i){
      let unit = getPriceByProduct(precio[i])
      let precios = unit * parseInt(quiantity[i].value)
      let signo="$"
      final=signo + precios + ".00"
      total[i].innerText=final
}

function getTotalPrice() {
  let final = 0
  for  (let i = 0 ; i< precio.length;i++){
    final += parseInt((total[i].innerText).substr(1))
  }
  return final
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(){
    let nuevo_nombre = querySelector("#nuevo_n")
    let nuevo_precio = querySelector("#nuevo_p")


} 

function createNewItem(){

}
function  ultimo(){
  for  (let i = 0 ; i< precio.length;i++){
    updatePriceByProduct(i)
  }
  let terminado= getTotalPrice()
  seacabo.innerText="Total Price: $"+terminado
}
