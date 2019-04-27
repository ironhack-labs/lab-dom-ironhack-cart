//===== Variables =====// 
// product variables
let productName = document.getElementsByClassName("product-name")
let unitPrice = document.getElementsByClassName("cost")
let userInput = document.getElementsByClassName("input")
let totalPrice = document.getElementsByClassName("total-price")
let resultPrice = document.getElementsByClassName("result-price")[0]
// list variables
let products = document.getElementsByTagName("li")
let productList = document.getElementsByTagName('ul')[0]
// button variables
let calculatePriceButton = document.getElementsByClassName("btn-success")[0]
let deleteBtn = document.getElementsByClassName("btn-delete")



///===== Buttons =====// 
calculatePriceButton.onclick = () => {
      updatePriceToAllProducts()
      updateResultPrice()
}

for(i = 0; i < deleteBtn.length; i++){
  deleteBtn[i].addEventListener("click", function(e){
    let target = e.currentTarget;
    let parent1 = target.parentElement
    let parent2 = parent1.parentElement
    let parent3 = parent2.parentElement
    let parent4 = parent3.parentElement
    parent4.removeChild(parent3)
    console.log(parent4)
  })
  console.log("click")
}



///===== Functionality =====// 
function getTotalPrice() {
      let result = unitPrice.innerText * parseInt(userInput.value)
      totalPrice.innerHTML = result;
}

function updatePriceToAllProducts(){
      for(i=0; i<products.length; i++){
        let result = unitPrice[i].innerText * parseInt(userInput[i].value)
        totalPrice[i].innerHTML = result;
      }
} 

function updateResultPrice(){
      let result = 0
      for(i=0; i<products.length; i++){
        result += parseInt(totalPrice[i].innerHTML) 
      }
      console.log(result)
      resultPrice.innerHTML = result
}






function deleteItem(e){
  var id = e.target.id;
  console.log("delete an item: " + id)
}

function deleteProduct(){

}

function getPriceByProduct(itemNode){
 
}

function updatePriceByProduct(productPrice, index){
  
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){}
  //var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  
  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

 /* for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};*/
