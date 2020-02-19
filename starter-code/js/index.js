let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');
let buttonDelete1=document.getElementsByClassName("btn-delete")[0]
let buttonDelete2=document.getElementsByClassName("btn-delete")[1]






function updateSubtot(product) {
  let priceUnit=product.querySelectorAll(".pu span")[0].innerText
  let quantity=product.querySelectorAll("input")[0].value
  return priceUnit * quantity
  
}
function calcAll() {
  let total=0
  for(let i=0;i<document.getElementsByClassName("product").length;i++)
  {
  let product=document.getElementsByClassName("product")[i]
  let subTot=document.querySelectorAll(".subtot span")[i]
  subTot.innerText=updateSubtot(product)
  total+=Number(subTot.innerText)
  }
  document.querySelectorAll("h2 span")[0].innerText=total
}

let removeProduct=function(event){
  let wholeTable=event.currentTarget.parentNode.parentNode.parentNode
  let productToRemove=event.currentTarget.parentNode.parentNode
  wholeTable.removeChild(productToRemove)
}


calc.onclick = calcAll;
buttonDelete1.onclick=removeProduct
buttonDelete2.onclick=removeProduct

