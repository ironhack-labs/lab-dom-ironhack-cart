window.onload = function() {
  function deleteItem(e) {}

  function getPriceByProduct(itemNode) {}

  function updatePriceByProduct(productPrice, index) {}

  function getTotalPrice() {}

  function createQuantityInput() {}

  function createDeleteButton() {}

  function createQuantityNode() {}

  function createItemNode(dataType, itemData) {}

  function createNewItemRow(itemName, itemUnitPrice) {}

  function createNewItem() {}

  let calculate = document.getElementById('calculate')

  calculate.onclick = () => {
    let price = document.getElementsByName('itemPrice')
    let quantity = document.getElementsByName('qty')
    let subtotal = document.getElementsByName('subtotal')
    let totalPrice = 0

    for (let i = 0; i < price.length; i++) {
      let mathProduct = parseFloat(price[i].innerHTML) * parseInt(quantity[i].value)
      subtotal[i].innerHTML = mathProduct

      totalPrice += mathProduct
    }

    document.getElementById('totalPrice').innerHTML = totalPrice

    // Delete Buttons
    deleteButton = document.getElementById('btn-delete')
    deleteButton2 = document.getElementById('btn-delete2')

    let remove1 = document.getElementById('contenedor1')
    let remove2 = document.getElementById('contenedor2')

    deleteButton.onclick = () => {
      remove1.remove()
    }

    deleteButton2.onclick = () => {
      remove2.remove()
    }
  }
}
