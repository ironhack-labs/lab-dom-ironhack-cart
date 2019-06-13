const qtyIntem = document.querySelectorAll("input")
const product = document.querySelector(".product") 
const name = document.querySelector('.pr-name')
const priceStr = document.querySelectorAll(".pr-price")
const deleteBtn = document.querySelector('.btn-delete')
const clacBtn = document.querySelector('.btn-success')
const itemTotal = document.querySelectorAll(".item-total")
const totalPurch = document.querySelector("#total")



function getPriceByProduct(itemNode,index){
  let priceNum = parseInt(itemNode[index].textContent.substring(1))
  return priceNum
}

function updatePriceByProduct(){
  for(let i = 0; i <itemTotal.length; i++)
  itemTotal[i].textContent = `$${getTotalPrice(priceStr,i)}.00`
}

function getTotalPrice(itemNode,index) {
 return getPriceByProduct(itemNode,index)*createQuantityInput(index)
}

function createQuantityInput(index){
  return qtyIntem[index].value
}
function absoluteTotal(){
   let total = 0;
   for(let i = 0; i <itemTotal.length; i++){
   total += getTotalPrice(priceStr,i)}
   return total
}
function updateAbsoluteTotal(){
  totalPurch.textContent = `Your total is: $${absoluteTotal()}`
}

clacBtn.onclick = function(){
  updatePriceByProduct()
  updateAbsoluteTotal()
}

