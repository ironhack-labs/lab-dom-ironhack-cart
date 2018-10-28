const inventory = [
  {name: "css",
  price: 17.99,
  id: "item0",
  quantity: 1},
  {name: "Javascript",
  price: 17.99,
  id: "item1",
  quantity: 1},
  {name: "NodeJs",
  price: 27.99,
  id: "item2",
  quantity: 1},
  {name: "Html5",
  price: 17.99,
  id: "item3",
  quantity: 1},
  {name: "CompletePackage",
  price: 49.99,
  id: "item4",
  quantity: 1}
]

// let inventoryHTMLItems = {
//   item7: theHtmlElement
// }

let shoppingCart = [];

for(let i = 0; i<inventory.length; i++){
  document.querySelector("#item" +i).addEventListener("click", addToCart)
  document.querySelector("#item" +i).addEventListener("click", changeColor)
}

function changeColor(e){
  let currentItem = e.currentTarget.id
  let background = document.querySelector(".spotlight")
  let image = document.querySelector(".spotlight-icon img")

  console.log(e.currentTarget.id)

  switch(e.currentTarget.id){
    case "item0":
    background.style.backgroundColor = "#5978C5";
    image.className = "css-logo"
    image.src = "../Ironhack-shop/CSS3_logo_and_wordmark.svg.png"
    break;
    case "item1":
    background.style.backgroundColor = "#F0DB4F";
    image.className = "js-logo"
    image.src = "../Ironhack-shop/JavaScript-logo.png"
    break;
    case "item2":
    background.style.backgroundColor = "#71BA54";
    image.className = "node-logo"
    image.src = "../Ironhack-shop/nodejs-new-pantone-black.png"
    break;
    case "item3":
    background.style.backgroundColor = "#F16529";
    image.className = "html-logo"
    image.src = "../Ironhack-shop/HTML_Logo.png"
    break;
    case "item4":
    background.style.backgroundColor = "#4D5253";
    image.className = "ironhack-logo"
    image.src = "../Ironhack-shop/static1.squarespace.png"
    break;
  }
}

function addToCart(e){
  let currentItem = inventory.find( (item)=>item.id==e.currentTarget.id);
  if(shoppingCart.includes(currentItem)){
    shoppingCart.find( (item)=>item.id==e.currentTarget.id).quantity++
  }else{
    shoppingCart.push(currentItem)
  }
  // console.log(shoppingCart.length)
  renderShoppingCart()
}

function removeFromCart(e){
    console.log(e.currentTarget.classList[1])
    let currentItem = inventory.find( (item)=>item.id==e.currentTarget.classList[1]);
  if(currentItem.quantity > 1){
    shoppingCart.find( (item)=>item.id==e.currentTarget.classList[1]).quantity--
  }else{
    shoppingCart.splice(shoppingCart.indexOf(currentItem),1)
  }
  // console.log(shoppingCart)
  renderShoppingCart()
}

renderShoppingCart()

function renderShoppingCart(){
  let checkout = document.querySelector(".checkout")

  while (checkout.firstChild) {
    checkout.removeChild(checkout.firstChild);
    }

  for(i of shoppingCart){

    let priceContainer = document.createElement("div")
    priceContainer.className = "itemcontainer " + i.id

    let name = document.createElement("li")
    name.className = "item-name "+ i.id
    name.textContent = inventory.find((item)=>item.id==name.classList[1]).name

    let quantity = document.createElement("li")
    quantity.className = "item-quantity "+ i.id
    quantity.textContent = "( " + inventory.find((item)=>item.id==quantity.classList[1]).quantity + " )"

    let price = document.createElement("li")
    price.className = "item-price "+ i.id
    price.textContent =Number(inventory.find((item)=>item.id==price.classList[1]).price * shoppingCart.find((item)=>item.id==price.classList[1]).quantity).toLocaleString("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2})

    let removebtn = document.createElement("button") 
    removebtn.className = "removebtn " + i.id
    removebtn.textContent = "-"

    let checkout = document.querySelector(".checkout");

    checkout.append(priceContainer);
    priceContainer.append(name)
    priceContainer.append(quantity)
    priceContainer.append(removebtn)
    priceContainer.append(price)
    // if(shoppingCart.includes(i))
    document.querySelector("."+ i.id).addEventListener("click", removeFromCart)
  }

    let priceContainer = document.createElement("div")
    priceContainer.className = "itemcontainer-total "

    let name = document.createElement("li")
    name.className = "item-name-total "
    name.textContent = "total"

    let price = document.createElement("li")
    price.className = "item-price-total "
    price.textContent =  (Math.round(shoppingCart.reduce((a, b) => a + b.price*b.quantity, 0)*100)/100).toLocaleString("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2})

    checkout.append(priceContainer);
    priceContainer.append(name)
    priceContainer.append(price)
}


// function cartItem(price, name) {
//   this.price = price
//   this.name = name
//   this.id = inventory.length - 1
//   cartItem.prototype.counter++
// }

// cartItem.prototype.counter = 0



// function deleteItem(e) {

// }

// function getPriceByProduct(itemNode) {

// }

// function updatePriceByProduct(productPrice, index) {

// }

// function getTotalPrice(arr) {
//   let sum =priceUnifier( Math.round(arr.reduce((a, b) => a + b.price*b.quantity, 0)*100)/100)
//   // console.log(sum)
//   return (sum)
// }

// function createQuantityInput() {

// }

// function createDeleteButton() {

// }

// function createQuantityNode() {

// }

// function createItemNode(dataType, itemData) {

// }

// function createNewItemRow(itemName, itemUnitPrice) {

// }

// function createNewItem() {

// }

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