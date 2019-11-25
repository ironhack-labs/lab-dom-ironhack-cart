var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var subTotal = 0;
var rowIndex = 0;

function updateSubtot() {
  // Iteration 1.1

var price = rowIndex.querySelector(".pu span").innerText;
var quantity = rowIndex.querySelector(".qty input").value;
subTotal = price * quantity;
rowIndex.querySelector(".subtot > span").innerText = subTotal.toFixed(2);
return subTotal;
}

function calcAll() {
  // Iteration 1.2
  let x = 2;
  var rows = document.getElementsByClassName("product");
  var total = 0;
  for (var i = 0; i < rows.length; i++){
    rowIndex = rows[i];
    updateSubtot();
    total = total + subTotal;
  }
  document.querySelector("h2 > span").innerText = total.toFixed(2);
}

// Creat a new row

document.getElementById("create").onclick = function(){
  var newName = document.querySelectorAll(".new input")[0].value;
  var newPrice = Number(document.querySelectorAll(".new input")[1].value);
  newPrice = newPrice.toFixed(2);

  var newOne = document.createElement("tr");
  newOne.className = "product";
  newOne.innerHTML = "<td class=\"name\"><span>" + newName + "</span></td><td class=\"pu\">$<span>" + newPrice + "</span></td><td class=\"qty\"><label><input type=\"number\" value=\"0\" min=\"0\"></label></td><td class=\"subtot\"> $<span>0</span> </td> <td class=\"rm\"> <button class=\"btn btn-delete\">Delete</button> </td>";
  document.querySelector("#cart").appendChild(newOne);

// Delete Button

  document.querySelectorAll(".btn-delete").forEach (function(delButton){
    delButton.onclick = function(){
      delButton.parentElement.parentElement.remove();
    };
  });
};
$calc.onclick = calcAll;