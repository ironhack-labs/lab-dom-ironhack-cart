// var deleteButtons = document.getElementsByClassName('btn-delete');

function deleteItem(event){
    
  let whereToRemove = event.currentTarget.parentNode.parentNode
  whereToRemove.remove()

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  let inputsArray = document.getElementsByClassName('input')
  let unitPrices = document.getElementsByClassName('unitPrice')
  let totalPrices = document.getElementsByClassName('total')
  let totalTotal = document.getElementsByClassName('totalTotal')

  // totalPrices[0].innerHTML = inputsArray[0].value * unitPrices[0].innerText
  // totalPrices[1].innerHTML = inputsArray[1].value * unitPrices[1].innerText 
  // totalTotal[0].innerHTML = parseInt(totalPrices[0].innerHTML,10) + parseInt(totalPrices[1].innerHTML,10)
  
  // for (let i = 2; i < unitPrices.length; i++) {    
  //   totalPrices[i].innerHTML = inputsArray[i].value * unitPrices[i].innerText 
  //   totalTotal[0].innerHTML = parseInt(totalTotal[0].innerHTML,10) + parseInt(totalPrices[i].innerHTML,10)  
  // }

  // totalPrices[0].innerHTML = inputsArray[0].value * unitPrices[0].innerText
  // totalPrices[1].innerHTML = inputsArray[1].value * unitPrices[1].innerText 
  // totalTotal[0].innerHTML = parseInt(totalPrices[0].innerHTML,10) + parseInt(totalPrices[1].innerHTML,10)
  
  for (let i = 0; i < unitPrices.length; i++) {    
    totalPrices[i].innerHTML = inputsArray[i].value * unitPrices[i].innerText 
    // totalTotal[i].innerHTML = parseInt(totalTotal[i].innerHTML,10) + parseInt(totalPrices[i].innerHTML,10)  
  }

  totalTotal[0].innerHTML = 0
  for (let i = 0; i < unitPrices.length; i++) {    
    // totalPrices[i].innerHTML = inputsArray[i].value * unitPrices[i].innerText 
    totalTotal[0].innerHTML = parseInt(totalTotal[0].innerHTML,10) + parseInt(totalPrices[i].innerHTML,10)  
  }

    
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
  
  let parent = document.getElementById('container-chart');
  let nameNewProduct = document.getElementById('name-new-product').value
  let quantityNewProduct = document.getElementById('quantity-new-product').value

  // Crea div row
  let divRow = document.createElement('div');
  // Le aplica las clases row y justify-content-between
  divRow.setAttribute('class', 'row justify-content-between')
  

  // Crea 1a etiqueta div col-2

  let divCol = document.createElement('div')
  // le aplica la clase col-2
  divCol.setAttribute('class', 'col-2')

  // Crea etiqueta span name-new-product
  let spanTag = document.createElement('span')
  // Crea el texto capturado por el input
  let textSpan = document.createTextNode(nameNewProduct)
  // Inyecta el texto en el span
  spanTag.appendChild(textSpan)
  // spanTag.innerHTML = nameNewProduct  


  // Crea 2a etiqueta div col-2
  
  let divCol2 = document.createElement('div')
  // le aplica la clase col-2
  divCol2.setAttribute('class', 'col-2')
  // Crea etiqueta span quantity-new-product
  let spanTag2 = document.createElement('span')
  // Crea los atributos
  spanTag2.setAttribute('class', 'unitPrice')
  // Crea el texto capturado por el input
  let textSpan2 = document.createTextNode(quantityNewProduct)
  // Inyecta el texto en el span
  spanTag2.appendChild(textSpan2)


  // Crea la 3a etiqueta div col-2
  
  let divCol3 = document.createElement('div')
  // le aplica la clase col-2
  divCol3.setAttribute('class', 'col-2')
  
  // Crea un label
  let label1 = document.createElement('label')
  // Crea los atributos
  label1.setAttribute('for', 'quantity')
  label1.setAttribute('class', 'quantity')
  // Crea texto
  let textLabel = document.createTextNode('Qty')
  // Inyecta texto
  label1.appendChild(textLabel)

  // Crea un input
  let input1 = document.createElement('input')
  // Crea los atributos
  input1.setAttribute('class', 'input')
  input1.setAttribute('type', 'number')
  input1.setAttribute('name', 'quantity')
  input1.setAttribute('id', 'quantity')


  // Crea 4a etiqueta div col-2
  
  let divCol4 = document.createElement('div')
  // le aplica la clase col-2
  divCol4.setAttribute('class', 'col-2')
  // Crea etiqueta span quantity-new-product
  let spanTag3 = document.createElement('span')
  spanTag3.setAttribute('class', 'total')
  // Crea texto
  let textSpan3 = document.createTextNode('$0')
  // Inyecta texto
  spanTag3.appendChild(textSpan3)
  
  
  // Crea 5a etiqueta div col-2
  
  let divCol5 = document.createElement('div')
  // le aplica la clase col-2
  divCol5.setAttribute('class', 'col-2')
  
  // Crea un input
  let input2 = document.createElement('input')
  // Crea los atributos
  input2.setAttribute('type', 'submit')
  input2.setAttribute('value', 'Delete')
  input2.setAttribute('class', 'btn btn-delete')
  
  
  // inyección en el DOM
  parent.appendChild(divRow)
  divRow.appendChild(divCol)
  divCol.appendChild(spanTag)
  
  divRow.appendChild(divCol2)
  divCol2.appendChild(spanTag2)
  
  divRow.appendChild(divCol3)
  divCol3.appendChild(label1)
  divCol3.appendChild(input1)
  
  divRow.appendChild(divCol4)
  divCol4.appendChild(spanTag3)
  
  divRow.appendChild(divCol5)
  divCol5.appendChild(input2)
  
}



window.onload = function(){
  let calculatePriceButton = document.getElementById('calc-prices-button')
  let createItemButton = document.getElementById('new-item-create')
  let deleteButtons = document.getElementsByClassName('btn-delete')

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = () => {
    createNewItem ()
    for(var i = 0; i<deleteButtons.length; i++){  // Actualizo para que pueda borrar los carritos nuevos
      deleteButtons[i].onclick = deleteItem;
    }  
  }

  for(var i = 0; i<deleteButtons.length; i++){
    deleteButtons[i].onclick = deleteItem;
  }

}

