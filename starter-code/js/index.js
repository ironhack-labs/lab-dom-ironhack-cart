var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $delete = document.querySelectorAll('.btn-delete')
var createBut = document.querySelector('.new #create')
function updateSubtot($product) {
 let priceUnit= $product.querySelector('.pu span').innerHTML;
 let theQuantity= $product.querySelector('.qty input').value;
 let subTotal= $product.querySelector('.subtot span');
  subTotal.innerHTML= Number(priceUnit *theQuantity);
  return subTotal
}
createBut.onclick = createRow
function createRow(){
  const name = document.querySelector('.new .name').value
  const price = document.querySelector('.new .price').value
  let table = document.querySelector("tbody")
  let newRow = document.querySelector("tbody tr").cloneNode(true)
  newRow.querySelector(".name span").innerHTML = name;
  newRow.querySelector(".pu span").innerHTML = price;
  table.appendChild(newRow)
  document.querySelector('.new .price').value = ''
  document.querySelector('.new .name').value = ''
  deleteAll();
}
function calcAll() {
  var row = document.querySelectorAll('.product');
  let total = document.querySelector('h2 span')
  let count = 0;
  for (let i = 0; i < row.length; i++){
    count = count + parseInt(updateSubtot(row[i]).innerHTML)
   
  }
  total.innerHTML = count
  return total
}


function deleteAll(){
  for (let i = 0; i < $delete.length; i++){
    $delete[i].onclick = function(e){
      if ($delete.length === 1){
        alert `necesitas tener 1`
      }else
      e.target.parentNode.parentNode.remove()
      calcAll()
      

  }
}
}
deleteAll()
$calc.onclick = calcAll
