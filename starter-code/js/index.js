var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $delete = document.getElementsByClassName('btn btn-delete');
let tote = document.getElementById('totalPrice').innerHTML
let tr = document.getElementsByTagName('tr');

function calcAll() {

  function printTotal(totalizer) {
    document.getElementById('totalPrice').innerHTML = totalizer
  }
  let totalizer = 0
  for (i = 1; i < tr.length; i++) {
    function print(subtotal) {
      document.getElementsByTagName('tr')[i].getElementsByTagName('span')[2].innerHTML = subtotal

    }

    let price = document.getElementsByTagName('tr')[i].getElementsByTagName('span')[1].innerText
    let nroOfItems = document.getElementsByTagName('tr')[i].querySelector('input').value
    let sub = nroOfItems * price

    print(sub)
    totalizer += sub
  }
  printTotal(totalizer)
}

function rowDelete() {

  console.log("probando 123")
}

$calc.onclick = calcAll;
$delete.onclic = rowDelete 
