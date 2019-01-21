// Variables
let productTotalPrice = document.getElementsByClassName('producttotalprice')
let productList = document.querySelector('#product-list');
let productQty = document.getElementsByClassName('product');
let units =  document.getElementsByClassName('units')
let price = document.getElementsByClassName('productunitprice');

function deleteItem(){

}

function getPriceByProduct(){
  let productQty = document.getElementsByClassName('product');
  let units =  document.getElementsByName('units')
  let price = document.getElementsByClassName('productunitprice');
  let producttotalprice = document.getElementsByClassName('producttotalprice')
  for(i=0; i<productQty.length; i++)
  {
    
    let priceunits =  price[i].innerText
    producttotalprice[i].innerText = parseInt(price[i].innerText) * units[i].value
  }
  getTotalPrice()
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let totalPrice = 0
  let producttotalprice = document.getElementsByClassName('producttotalprice')
  let showTotalPrice = document.getElementById('totalprice').firstElementChild.firstElementChild
  for(i=0; i<productQty.length; i++)
  {
    totalPrice += parseInt(producttotalprice[i].innerText)
  }
  showTotalPrice.innerText = totalPrice
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
  let productList = document.querySelector('#product-list');
  let newProductName = document.getElementById('newproduct')
  let newProductPrice = document.getElementById('newproductprice')
  let newItem = document.createElement("div")
  // Product row
  newItem.setAttribute("class", "product" )
  // Product name
  let productName = document.createElement("span")
  productName.setAttribute("id", "productname")
  productName.innerText = newProductName.value
  newItem.appendChild(productName)
  // Product price
  let productPrice = document.createElement("span")
  productPrice.setAttribute("class", "productunitprice")
  productPrice.innerText = newProductPrice.value
  newItem.appendChild(productPrice)
  //Product units
  let prodUnits = document.createElement("div")
  prodUnits.setAttribute("class","produnits")
  let productUnits = document.createElement("input") 
  productUnits.setAttribute("type", "number")
  productUnits.setAttribute("name","units")
  productUnits.value = Math.floor(Math.random()*15)
  productUnits.addEventListener('change', (e) => {
    getPriceByProduct()
    getTotalPrice()
  })
  prodUnits.append(productUnits)
  newItem.appendChild(prodUnits)
  // Product total price
  let productTotalPrice = document.createElement("span")
  productTotalPrice.setAttribute("class", "producttotalprice")
  productTotalPrice.innerText = newProductPrice.value * productUnits.value
  newItem.appendChild(productTotalPrice)
  // Delete button
  let deleteBtn = document.createElement("div")
  deleteBtn.setAttribute("class","deletebtn")
  let deleteButton = document.createElement("input")
  deleteButton.setAttribute("type", "button")
  deleteButton.setAttribute("class", "btn-delete")
  deleteButton.setAttribute("id", "btn-delete")
  deleteButton.addEventListener('click', (e) => {
    deleteButton.parentNode.parentNode.remove(e.target)
    getTotalPrice()
  })
  deleteButton.value = "Delete"
  deleteBtn.appendChild(deleteButton)
  newItem.appendChild(deleteBtn)
  
  // Adding the new product
  productList.appendChild(newItem)
}

window.onload = function(){
  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getPriceByProduct;

  createItemButton.onclick = createNewItem;
 
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
