var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var subTot = 0;


// add the thingy
document.getElementById("create").onclick = function(){
  let newName = document.querySelectorAll('.new input')[0].value
  let newPrice = Number(document.querySelectorAll('.new input')[1].value)
  newPrice = newPrice.toFixed(2)

  var node = document.createElement("TR");
  node.className = "product";
  node.innerHTML = "<td class=\"name\"><span>" + newName + "</span></td><td class=\"pu\">$<span>" + newPrice + "</span></td><td class=\"qty\"><label><input type=\"number\" value=\"0\" min=\"0\"></label></td><td class=\"subtot\"> $<span>0</span> </td> <td class=\"rm\"> <button class=\"btn btn-delete\">Delete</button> </td>";
  document.querySelector('#cart').appendChild(node)

  
document.querySelectorAll('.btn-delete').forEach (function(delbut){
  delbut.onclick = function() {
    delbut.parentElement.parentElement.remove();
  }
})
}


function updateSubtot($product) {
  // Iteration 1.1
  var price = rowIndex.querySelector('.pu span').innerText;
  var quantity = rowIndex.querySelector('.qty input').value;
  subTot = price * quantity
  rowIndex.querySelector('.subtot > span').innerText = subTot.toFixed(2);
  return subTot
}


let rowIndex = 0

function calcAll() {
  // Iteration 1.2
  let rows = document.getElementsByClassName('product')
  let totTot = 0;
  for (i = 0; i < rows.length; i++){
    rowIndex = rows[i]
    updateSubtot()
    totTot += subTot
  }

  document.querySelector('h2 > span').innerText = totTot.toFixed(2);

}
$calc.onclick = calcAll;


