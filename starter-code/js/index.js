function deleteItem(e){
  let wrapper = document.getElementsByClassName("container")[0]
  let parent = document.getElementsByClassName("main")[0]
  console.log(parent)
  parent.removeChild(wrapper)
}

function getPriceByProduct(itemNode){
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let price = document.getElementsByClassName("input")
  let quantity = document.getElementsByClassName("quantity")
  let result = document.getElementsByClassName("result")
  let cost = 0
  let finalPrice = 0
  let totalPrice = 0
  let total = document.getElementsByClassName("total")
  console.log(quantity.length)
  for (let i = 0; i<quantity.length;i++){
      console.log(i)
      cost = ((price[i].innerHTML).slice(1,(price[i].innerHTML).length))
      console.log(cost)
      finalPrice = parseFloat(cost) * parseInt(quantity[i].value)
      console.log(finalPrice)
      result[i].innerHTML = finalPrice
      totalPrice += finalPrice
    }
  total[0].innerHTML = (`$${totalPrice}`)
}
function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItem(){
  let parent = document.getElementsByClassName("main")[0]
  let create_container = document.createElement("div")
  let create_row = document.createElement("div")
  let create_col = document.createElement("div")  
  let create_col1 = document.createElement("div")
  let create_col2 = document.createElement("div")  
  let create_col3 = document.createElement("div")  
  let create_col4 = document.createElement("div")  
  let create_text = document.createElement("p")
  let create_text1 = document.createElement("p")
  let create_text2 = document.createElement("p")
  let create_text3 = document.createElement("span")  
  let create_input = document.createElement("input")
  let create_delete = document.createElement("button")
  create_container.setAttribute("class", "container")
  create_row.setAttribute("class","row")
  create_col.setAttribute("class", "col")
  create_col1.setAttribute("class", "col")
  create_col2.setAttribute("class", "col")
  create_col2.setAttribute("class", "flexbox")
  create_col3.setAttribute("class", "col")
  create_col4.setAttribute("class", "col")  
  create_input.setAttribute("class", "quantity")
  create_delete.setAttribute("class","btn-delete")
  create_text1.setAttribute("class","input")
  create_text3.setAttribute("class","result")
  parent.appendChild(create_container)
  create_container.appendChild(create_row)
  create_row.appendChild(create_col)
  create_row.appendChild(create_col1)
  create_row.appendChild(create_col2)
  create_row.appendChild(create_col3)
  create_row.appendChild(create_col4)
  create_col.appendChild(create_text)
  create_col1.appendChild(create_text1)
  create_col2.appendChild(create_text2)
  create_col2.appendChild(create_input)
  create_col3.appendChild(create_text3)
  create_col4.appendChild(create_delete)  
  create_text.innerHTML = document.getElementsByClassName("product_name")[0].value
  console.log(document.getElementsByClassName("product_name")[0].value)
  create_text1.innerHTML = (`$${document.getElementsByClassName("quant")[0].value}`)
  create_text2.innerHTML = "QTY"
  create_text3.innerHTML = 0
  create_delete.innerHTML = "Delete"
}

function createNewItemRow(itemName, itemUnitPrice){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('btn-success');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  console.log(calculatePriceButton)
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  console.log(deleteButtons.length)
  for(var i = 0; i<deleteButtons.length ; i++){
     deleteButtons[i].onclick = deleteItem;
}
}
