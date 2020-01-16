var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var btnCr = document.querySelector('#create')
var btnDe = document.querySelector('#btDelt')

function updateSubtot($product) {
    // Iteration 1.1
let unitPrice=$product.querySelector(".pu>span").innerText
console.log(unitPrice)
let quantity=$product.querySelector(".qty input").value
console.log(quantity)
$product.querySelector(".subtot").innerText=Math.round(unitPrice*quantity*100)/100
//.toFixed()

return (unitPrice*quantity)

}
//

function calcAll() {
// Iteration 1.2
let total=0
console.log(1)
$cart.querySelectorAll('.product').forEach($product=>{total+= updateSubtot($product)})
document.querySelector('h2 span').innerText=total

//.innerHTML=total

console.log(3)}





function newPduct() {

let newList=document.createElement('tr')
newList.classList.add('product')
let name1=document.querySelector('#ty1')
let name2=document.querySelector('#ty2')
let texto= `<td class="name">
<span>${name1.value}</span>
</td>

<td class="pu">
$<span>${name2.value}</span>
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
<button id="btDelt" class="btn btn-delete">Delete</button>
</td>`
newList.innerHTML=texto
let tbody=document.querySelector('tbody')
tbody.appendChild(newList)
name1.value= ""
name2.value= ""
}
function delPduct() {
  let delT=document.querySelector('tbody')
  delT.removeChild('.tr')
}

$calc.onclick = calcAll;
btnCr.onclick = newPduct;
btnDe.onclick = delPduct;