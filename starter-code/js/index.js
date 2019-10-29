var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

//updateSubtot.onclick = function ($product) {
  
//};

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;


function updateText() {
  var x = document.querySelector("#cart > tbody > tr:nth-child(1) > td.qty > label > input[type=number]").value;
  document.querySelector("#cart > tbody > tr:nth-child(1) > td.qty > label > input[type=number]").value = x;
  //console.log(document.querySelector("#cart > tbody > tr:nth-child(1) > td.qty > label > input[type=number]").value);
  var y = document.querySelector("#cart > tbody > tr:nth-child(1) > td.subtot > span");
  y.innerHTML = Number(document.querySelector("#cart > tbody > tr:nth-child(1) > td.pu > span").innerHTML)*document.querySelector("#cart > tbody > tr:nth-child(1) > td.qty > label > input[type=number]").value;

    }

    function updateText1() {
      var w = document.querySelector("#cart > tbody > tr:nth-child(2) > td.qty > label > input").value;
      document.querySelector("#cart > tbody > tr:nth-child(2) > td.qty > label > input").value= w;
      //console.log(document.querySelector("#cart > tbody > tr:nth-child(2) > td.qty > label > input").value);
      var z = document.querySelector("#cart > tbody > tr:nth-child(2) > td:nth-child(4) > span");
      z.innerHTML = Number(document.querySelector("#cart > tbody > tr:nth-child(2) > td.pu > span").innerHTML)*document.querySelector("#cart > tbody > tr:nth-child(2) > td.qty > label > input").value;
    
        }

 

  



