function deleteItem(e){
  e.target.parentNode.parentNode.remove()
}


// ----------------------------- 1. Primera parte -----------------------------

// 1. Que me devuelva el precio unitario de cada producto
function getPriceByProduct(itemNode){

  const productUnit = itemNode.querySelector(".quantity input").value // QTY box
  const productUnitPrice = itemNode.querySelector(".price span").innerText // $25

  return productUnit * parseInt(productUnitPrice) // 0 + getPriceByProduct

}


// 3. Actualiza el precio total de producto
function updatePriceByProduct(price, index){

  const productPrices = document.querySelectorAll('.total-price')[index]
  productPrices.innerText = `$${price}`
}


// 2. Suma de todos de todo los productos
function getTotalPrice() {

  const totalProducts = Array.from(document.querySelectorAll(".product")) //Hago aray de productos
  const totalPrices = totalProducts.reduce((acc, item) => acc + getPriceByProduct(item), 0) // De todos los products del array, acumulo las cantidades resultantes de la primera función

  // Esta es para la 3...
  totalProducts.forEach((e, i) => updatePriceByProduct(getPriceByProduct(e), i)) // Este forEach pasa de Product (Array), el valor y su index y le pasa estos valores a la funcion 2 como parametros

  document.querySelector('.calculate span').innerText = totalPrices // Pinta TOTAL PRICES

  

}



// ----------------------------- 2. Segunda parte -----------------------------




function createQuantityInput(){
    const div = document.createElement('div')
    div.classList.add('quantity')
    const label = document.createElement('label')
    label.innerText = 'QTY'
    const input = document.createElement('input')
    input.setAttribute("type", "number")
    input.setAttribute("value","0")
    input.setAttribute("min","0")
    div.appendChild(label)
    div.appendChild(input)
  
    return div
  
  }
  
  function createDeleteButton(){
    const div = document.createElement('div')
    div.classList.add('delete')
  
    const button = document.createElement('button')
    button.classList.add('btn-delete')
    button.classList.add('btn')
    button.innerText ='Delete'
    button.onclick = deleteItem;
    div.appendChild(button)
  
    return div
  }
  
  function createQuantityNode(){
    const div = document.createElement('div')
    div.classList.add('total-price')
    div.innerText = '0'
    return div
  }
  
  function createItemNode(dataType, itemData){
  
  }
  
  function createNewItemRow(itemName, itemUnitPrice){
  
    const divName = document.createElement('div')
    divName.classList.add('name')
    divName.innerText = itemName
  
    const divPrice = document.createElement('div')
    divPrice.classList.add('price')
    divPrice.innerHTML = '$<span>' + itemUnitPrice + '</span>'
  
    const divContainer = document.querySelector('.container')
    const divProduct = document.createElement('div')
    divProduct.classList.add('product')
    divProduct.appendChild(divName)
    divProduct.appendChild(divPrice)
    divProduct.appendChild(createQuantityInput())
    divProduct.appendChild(createQuantityNode())
    divProduct.appendChild(createDeleteButton())
    divContainer.appendChild(divProduct)
  }
  
  function createNewItem(){
    const name = document.getElementById('nameInput').value
    const price = document.getElementById('priceInput').value
    if(name && price){
      createNewItemRow(name,price)
    }
  }
  
  
  window.onload = function(){
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');
  
    calculatePriceButton.onclick = getTotalPrice;
    createItemButton.onclick = createNewItem;
  
    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
  };