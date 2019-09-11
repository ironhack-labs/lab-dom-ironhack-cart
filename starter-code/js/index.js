
function getTotalPrice(){
  let cartRows = document.getElementsByClassName("wrapper-div") 
  let rowTotal = document.getElementsByClassName("item-total")
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName("item-cost-span")[0]
    let quantityElement = cartRow.getElementsByClassName("cart-quantity")[0]
    let price = Number(priceElement.innerHTML)
    let quantity = Number(quantityElement.value)
    total = total + (price * quantity)
    rowTotal[i].innerHTML = price * quantity
  }
  document.getElementById("total-price").innerHTML = (`Total price: <span>$</span>${total}<span>.00</span>`)
}

let calculate = document.getElementById("calc-btn") 
calculate.addEventListener("click", getTotalPrice)

function deleteButton(){
  let deletebtn = document.getElementsByClassName("btn-delete")
  for (let i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener("click", function(event) {
      let buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
      getTotalPrice()
    })
  }
}
deleteButton()


function createItem(){
  let templateDiv = document.getElementsByClassName("wrapper-div")[0]
  let parentDiv = document.getElementById("cart-items")
  let clonedDiv = templateDiv.cloneNode(true)
  
  let inputName = document.getElementById("input1").value
  let inputPrice = document.getElementById("input2").value

  clonedDiv.getElementsByClassName("cart-item")[0].innerHTML = `${inputName}`
  clonedDiv.getElementsByClassName("item-cost-span")[0].innerHTML = `${inputPrice}`
  parentDiv.appendChild(clonedDiv)
  deleteButton()
  getTotalPrice()
}

let create = document.getElementById("create-btn")
create.addEventListener("click", createItem)
