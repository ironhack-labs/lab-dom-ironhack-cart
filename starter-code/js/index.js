function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

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

window.onload = function () {

  //Aqui tenemos precio del producto
  //producto1
  let price = document.getElementById("precio-producto")
  priceProduct = price.innerText
  priceProductClean = priceProduct.replace("$", "")

  //producto2
  let price2 = document.getElementById("precio-producto2")
  priceProduct2 = price2.innerText
  priceProductClean2 = priceProduct2.replace("$", "")

  //Aqui tenemos el precio acumulado
  //producto1
  let cantidad = document.getElementById("precio-acumulado")
  cantidadProduct = cantidad.innerText
  cantidadProductClean = cantidadProduct.replace("$", "")

  //producto2
  let cantidad2 = document.getElementById("precio-acumulado2")
  cantidadProduct2 = cantidad2.innerText
  cantidadProductClean2 = cantidadProduct2.replace("$", "")

  //Aqui tenemos la cantidad de precios
  //producto1
  let inputQty = document.getElementById("cantidad")

  //producto2
  let inputQty2 = document.getElementById("cantidad2")


  //Boton calcular precio
  let buttonPrices = document.getElementById("buttonPrices")


  //Aqui esta el precio total

  let totalPrice = document.getElementById("precio-total")
  totalPriceProduct = totalPrice.innerText
  totalPriceProductClean = totalPriceProduct.replace("$", "")

  //Aqui esta el total de la suma


  buttonPrices.onclick = () => {

    cantidadProductClean = priceProductClean * inputQty.value
    cantidadProductClean2 = priceProductClean2 * inputQty2.value

    cantidad.innerHTML = `$${cantidadProductClean}.00`
    cantidad2.innerHTML = `$${cantidadProductClean2}.00`

    totalPrice.innerHTML = `$${cantidadProductClean + cantidadProductClean2}.00`

  }
  //ID botón delete 1
  buttonDelete = document.getElementById("remove")

  //ID botón delete 2
  buttonDelete2 = document.getElementById("remove2")

  //ID contenedor a borrar 1
  let deleteButt = document.getElementById("delete-div")

  //ID contenedor a borrar 2
  let deleteButt2 = document.getElementById("delete-div2")

  //Función borrar objeto 1
  buttonDelete.onclick = () => {

    deleteButt.remove()

  }

  //Función borrar objeto 2
  buttonDelete2.onclick = () => {

    deleteButt2.remove()
  }
}
