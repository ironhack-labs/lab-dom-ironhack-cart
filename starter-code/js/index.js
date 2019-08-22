const bigTot = document.querySelector('#bigTotal')

document.querySelector("#calc").onclick = () => {
  calcPrice()
}

document.querySelector(".btn-create").onclick = () => {
  addProduct()
}

document.querySelector(".btn-delete").onclick = () => {
  removeProduct()
}

function calcPrice (){
  let prices = document.querySelectorAll('.price')
  let qty = document.querySelectorAll(".qty")
  let subtotal = document.querySelectorAll('.subtotal')
  let totalPrice = 0;
  let total = 0;

  for (i = 0; i < prices.length; i++) {
    total = parseFloat(prices[i].innerHTML)
    total *= parseFloat(qty[i].value)
    subtotal[i].innerText = `$ ${total}`
    totalPrice += total
  }
  bigTot.innerText = totalPrice
}

function addProduct (){
  let parent = document.querySelector('.cart')
  let newPrd = document.querySelector('#newproduct')
  let newPrc = document.querySelector('#newprice')
  
  let newproduct = newPrd.value
  let newprice = newPrc.value


let newItem = `
<li class="row prdct">
<span class="buble">${newproduct}</span>
<span class="price">${newprice}</span>
<input type="number" class="qty" value="0">
<span class="subtotal"></span>
<button class="btn-delete" onclick="removeProduct()">Delete</button>
</li>
`
parent.insertAdjacentHTML("afterend", newItem)
parent.lastChild.onclick = removeProduct
}

function removeProduct (e){
let lli = e.target.parentNode
let deleteButtons = lli.parentNode //ref a UL
  deleteButtons.removeChild(lli)
  console.log('remove', e)  
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc');
  var createItemButton = document.querySelector('.btn-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = removeProduct;
  }
}

