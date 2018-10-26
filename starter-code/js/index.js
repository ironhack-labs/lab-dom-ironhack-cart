const inventory = [
  {name: "a",
  price: 0.20,
  id: "item1",
  quantity: 1},
  {name: "b",
  price: 2.20,
  id: "item2",
  quantity: 1},
  {name: "c",
  price: 3.99,
  id: "item3",
  quantity: 1},
  {name: "d",
  price: 10.40,
  id: "item4",
  quantity: 1},
  {name: "e",
  price: 5.20,
  id: "item5",
  quantity: 1},
  {name: "f",
  price: 0.60,
  id: "item6",
  quantity: 1},
  {name: "g",
  price: 1.30,
  id: "item7",
  quantity: 1},
  {name: "h",
  price: 3.60,
  id: "item8",
  quantity: 1},
  {name: "i",
  price: 1.40,
  id: "item9",
  quantity: 1},
  {name: "j",
  price: 4.80,
  id: "item10",
  quantity: 1}
]

let shoppingCart = []

function addItemToCart(){
  let tempItem = this.classList[1]
  let currentItem = inventory.filter(obj => {return obj.id === tempItem})[0];
  if(shoppingCart.includes(currentItem)){
    currentItem.quantity += 1
  }else{
    shoppingCart.push(currentItem)
  }
  

  console.log(currentItem)
  setupCart()
  setupTotal()
}


for(let i = 1; i<=inventory.length; i++){
  document.querySelector(".item" + i).addEventListener("click", addItemToCart)
}

setupCart()
setupTotal()


function setupCart() {
  let itemlist = document.querySelector("#itemlist");
  let pricelist = document.querySelector("#itemprices");

    while (itemlist.firstChild) {
    itemlist.removeChild(itemlist.firstChild);
    }

    while (pricelist.firstChild) {
    pricelist.removeChild(pricelist.firstChild);
    }


  for (let i = 0; i < shoppingCart.length; i++) {
    

    let tempobj = document.createElement("li");
    tempobj.textContent = shoppingCart[i].name +  " (" + shoppingCart[i].quantity + ")";
    tempobj.className = "item"
    itemlist.appendChild(tempobj)


    let tempprice = document.createElement("li");
    let priceres = Math.round(shoppingCart[i].price*shoppingCart[i].quantity * 100)/100
    tempprice.textContent = priceUnifier(priceres);
    tempprice.className = "item"
    pricelist.append(tempprice)
  }
};

function priceUnifier(money){

  console.log(money)
  if(money == 0){
    return 0
  }
  if(money.toString().split("").includes(".")==false){
    return(money + ".00")
  }
  let moneySplit = money.toString().split(".")
  let cents = moneySplit[1]
  if(cents.length == 1){
    cents = Number(cents)*10
  }
  return(moneySplit[0] + "." + cents.toString()  )



}

function setupTotal() {
  let itemlist = document.querySelector("#itemlist");
  let pricelist = document.querySelector("#itemprices");

  let tempobj = document.createElement("li");
  tempobj.textContent = "total";
  tempobj.className = "price"
  itemlist.appendChild(tempobj)


  let tempprice = document.createElement("li");
  tempprice.className = "price"
  tempprice.textContent = getTotalPrice(shoppingCart);
  pricelist.append(tempprice)
}


// console.log(document.querySelector(".checkout"))




function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice(arr) {
  let sum =priceUnifier( Math.round(arr.reduce((a, b) => a + b.price*b.quantity, 0)*100)/100)
  console.log(sum)
  return (sum)
}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };