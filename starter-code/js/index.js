let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');





function updateSubtot(product) {
  let priceUnit=product.querySelectorAll(".pu span")[0].innerText
  let quantity=product.querySelectorAll("input")[0].value
  return priceUnit * quantity
  
}
function calcAll() {
  for(let i=0;i<2;i++)
  {
  let product=document.getElementsByClassName("product")[i]
  let subTot=document.querySelectorAll(".subtot span")[i]
  subTot.innerText=updateSubtot(product,i)
  }
}
calc.onclick = calcAll;