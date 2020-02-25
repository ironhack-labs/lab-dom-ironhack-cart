var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');




function updateSubtot($product) {

 let priceUnit= $product.querySelector('.pu span').innerHTML;
 let theQuantity= $product.querySelector('.qty input').value;
 let subTotal= $product.querySelector('.subtot span');

  subTotal.innerHTML= Number(priceUnit *theQuantity);

  return subTotal
}

function createRow(){
  const name = document.querySelector('.new .name').value
  const price = document.querySelector('.new .price').value
  let table = document.querySelector("tbody")
  let newRow = document.querySelector("tbody tr").cloneNode(true)
  newRow.querySelector(".name span").innerHTML = name;
  newRow.querySelector(".pu span").innerHTML = price;
  table.appendChild(newRow)
  setDeleteEventListener();

}

 
function calcAll() {

  var row = document.querySelectorAll('.product');
  let total = document.querySelector('h2 span')
  let count = 0;

  for (let i = 0; i < row.length; i++){
    count +=  parseInt(updateSubtot(row[i]).innerHTML)
    console.log(count)
  }
  
  total.innerHTML = count

  return total
 
}
$calc.onclick = calcAll