// let productsInCart = [ // Empecé a plantear hacer un objeto con los datos de los productos que hay dentro del carro para manejarlos mejor que leyendo con innerHTML ¿?
//   {
//     id: 0,
//     item: "IronBubble-Head",
//     price: 25.00,
//     qty: 0
//   },
//   {
//     id: 1,
//     item: "Ironshirt",
//     price: 15.00,
//     qty: 0
//   }
// ]

function deleteItem(e){

  let parent = e.currentTarget.parentNode //Devuelve el padre del target actual
  parent.parentNode.removeChild(e.currentTarget.parentNode) //Pero quiero un nivel más, (el padre del padre) y borrar "su hijo" (el bloque entero)
  getTotalPrice()

}

function getPriceByProduct(itemNode){

  const prices = document.querySelectorAll("#price") //Selecciono las ID price
  const quantities = document.querySelectorAll("#quantity") //Selecciono las ID quantity
  const items = document.querySelectorAll("#item") //Selecciono las ID item

  for (let i = 0; i < items.length; i++) { //Un for que guarde los contenidos de los items con las ID anteriores y haga el cálculo del total con ellas
    let item = items[i].innerHTML
    let price = prices[i].innerHTML
    //const price = Number(priceStr.replace(/[^0-9.-]+/g,"")) * Interesante para quitar simbolos a los números, pero luego vi que no hace falta si en el html lo pones fuera del span *
    let qty = quantities[i].value
    const calcTotal = price * qty
    totalByItem[i].innerHTML = calcTotal
  }

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() { //Suma el total de la columna de los precios y lo pone en el span con ID total

    const items = document.querySelectorAll("#item")
    const totalByItem = document.querySelectorAll("#totalByItem")
    const total = document.getElementById("total")

    let addTotal = 0

    for (let i = 0; i < items.length; i++) {
      addTotal += parseInt(totalByItem[i].innerHTML)
    }

    total.innerHTML = addTotal

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

  // productRow =  *********** Hasta aquí me ha dado tiempo, no está completo
  // appendChild(productRow) 

}

function createNewItem(productName, productPrice){

  // let lastIndex = productsInCart.length //Iba a empezar a guardar los items en el objeto productsInCart
  // productsInCart[lastIndex] = [ 
  //   { 
  //     id: lastIndex, 
  //     name: productName,
  //     price: productPrice,
  //     quantity: 0,
  //   } 
  // ]


}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  //var deleteThis = document.querySelectorAll("#delete-item")
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var quantityFields = document.querySelectorAll("#quantity")
  let addItem = document.getElementById("add-item")
    
  calculatePriceButton.onclick = getTotalPrice;
  addItem.onclick = createNewItem
  //deleteThis.onclick = deleteItem
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){ //Añade el evento onclick a los botones con la clase btn-delete 
    deleteButtons[i].onclick = deleteItem;
  }
  for(var i = 0; i < quantityFields.length ; i++){ //Añade el evento onclick a los botones con la id quantity 
    quantityFields[i].onchange = getPriceByProduct;
  }

};