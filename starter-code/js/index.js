let greenButton = document.getElementById("calculate");
let redButton = document.getElementsByClassName("deleteButton");
let blueButton = document.getElementById("blueButton");
// console.log(blueButton)



let price = document.querySelectorAll(".itemPrice");
// console.log(price[1])
let amount = document.querySelectorAll(".inputQuantity");
let total = document.querySelectorAll(".itemTotalPrice");
let putDivsInArray = document.getElementsByClassName("container")[0];
let totValue = document.getElementById("totalValue");
// console.log(totValue.innerHTML);


// --- red button variables ---
let eachItem = document.getElementsByClassName("item");
let container = document.getElementById("container");
// console.log(container)

for(let j = 0 ; j < redButton.length ; j++){
redButton[j].onclick = function () {
  eachItem[j].innerHTML = ""
    // console.log(eachItem[j])
}
  }

// ----- green button click event ----
greenButton.onclick = function () {
  let newArray =[]
  for (let i = 0; i < price.length; i++) {
  let unitPrice = Number(price[i].innerHTML);
  let unitAmount = (Number(amount[i].value));
  let calculation = Number(unitPrice) * Number(unitAmount);
      total[i].innerHTML = Number(calculation);
  let newTry = total[i].innerHTML;
      // push new tries to an array, than reduce that array.
      newArray.push(Number(newTry))
     }
         
     var finalResult = newArray.reduce((accumulator, current)=>{
            // console.log(accumulator, current);
     let sum =  accumulator + current;
        return sum
        }, 0);
        // console.log(totValue)
      totValue.innerHTML = finalResult
      // console.log(finalResult);
      
    }
// ------ blue button variables ----

blueButton.onclick = function () {
  let container = document.getElementById("container");
  let firstDiv = document.getElementById("item1")
  let eachItem = document.getElementsByClassName("item");


  let newItemName = document.createElement("div")
  console.log(newItemName);
  let inputName = document.getElementById("productName").value;
  console.log(inputName)
  let nameText = document.createTextNode(inputName);

  eachItem.appendChild(nameText);
  container.insertBefore(newItemName , firstDiv)


  
}

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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


  // var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }

