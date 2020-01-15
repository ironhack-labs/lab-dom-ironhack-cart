var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $create = document.getElementById('create');

function updateSubtot($product) {
  //accedemos 
  const unitPrice=$product.querySelector(".pu>span").innerText;
  const quantity=$product.querySelector(".qty input").value;
  let precio=Math.round(unitPrice*quantity*100)/100
  $product.querySelector (".subtot>span").innerText=precio;
  return precio;

}

function calcAll() {
  // Iteration 1.2
  let total=0 
  document.querySelectorAll(".product").forEach($product=>{
    total+=updateSubtot($product)
  })
  document.querySelector("#total >span").innerText=total;
}
$calc.onclick = calcAll;

function createProduct (){
const $body=document.querySelector("tbody")
const $name=document.getElementById("newName")
const $newPrice=document.getElementById("newPrice")
const $tr=document.createElement("tr")
$tr.className="product"
const price=Math.round($newPrice.value*100)/100
const $newProd=`<td class="name">
  <span>${$name.value}</span>
</td>

<td class="pu">
  $<span>${price}</span>
</td>

<td class="qty">
  <label>
    <input type="number" value="0" min="0">
  </label>
</td>

<td class="subtot">
  $<span>0</span>
</td>

<td class="rm">
  <button class="btn btn-delete">Delete</button>
</td>`
$tr.innerHTML=$newProd
$body.appendChild($tr)
$name.value=""
$newPrice.value=""
deleteNode()
}

$create.onclick = createProduct;

function deleteProduct(event){
  console.log(event)
  const $body=document.querySelector("tbody")
  const $ref=event.target.parentNode.parentNode
  $body.removeChild($ref)
  calcAll()
}

function deleteNode(){
  const $deletes = $cart.querySelectorAll(".btn-delete")
  $deletes.forEach(e => e.onclick = deleteProduct )
}

window.onload=()=>{
  deleteNode()
}