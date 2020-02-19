var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');






function updateSubtot() {
total = 0

for (let i = 0; i <= document.getElementsByClassName("pu").length; i++ )
{ 

  let unitPrice = document.getElementsByClassName("pu")[i].innerText
  let unitQuantity = document.getElementsByClassName("qty")[i].value
  subtot = unitPrice * unitQuantity
document.getElementsByClassName("subtot")[i].innerText = subtot
total = total + subtot

}

}


function calcAll() {

updateSubtot()
document.getElementsByClassName("total")[0].innerText = "thisisatest"  //if I put this line before the for loop it works just fine (I adjusted the "subtot" and "total" tags a little) but for some reason this line does not run after the function before has been called. Why is that?

}
calc.onclick = calcAll;