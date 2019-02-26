function deleteItem(e){
  itemRow = this
  
  while (itemRow.className != 'product-row'){
    itemRow = itemRow.parentElement
  }
  itemRow.remove()  
}

function getPriceByProduct(itemNode){
  var preco = parseInt(document.getElementsByClassName('product-price')[itemNode].innerText)
  var quantidade = parseInt(document.getElementsByClassName('quantity-input')[itemNode].value)
  return preco*quantidade
}

function getTotalPrice() {
  numProdutos = document.getElementsByClassName('product-row').length
  console.log(numProdutos)
  var soma = 0
  for(i=0;i<numProdutos;i++){
    document.getElementsByClassName('total-price')[i].innerText = getPriceByProduct(i)
    soma = soma + getPriceByProduct(i)
  }
  document.getElementById('total-price-value').innerText = soma
}

function createNewItem(){

  var itemRow = document.createElement('tr')
  itemRow.className = 'product-row'
  /*   inserindo nome do produto */
  var productName = document.createElement('td')
  productName.className = 'product-name'
  productName.innerText = document.getElementById('new-product-name').value
  itemRow.appendChild(productName)
  /*   inserindo preço do produto */
  var productPrice = document.createElement('td')
  productPrice.className = 'product-price'
  productPrice.innerText = document.getElementById('new-product-price').value
  productPrice.type = 'Number'
  itemRow.appendChild(productPrice)
  /*   inserindo a quantidade */
  var newInputData = document.createElement('td')
  var newInput = document.createElement('input')
  newInputData.className = 'quantity'
  newInput.className = 'quantity-input'
  newInput.type = 'number'
  newInput.value = '1'
  newInputData.appendChild(newInput)
  itemRow.appendChild(newInputData)
  /*   inserindo a preço total */
  var productTotalPrice = document.createElement('td')
  productTotalPrice.className = 'total-price'
  productTotalPrice.type = 'number'
  productTotalPrice.innerText = '10'
  itemRow.appendChild(productTotalPrice)
   /*   inserindo o botão de deletar */
  var newDeleteButtonData = document.createElement('td')
  var newDeleteButton = document.createElement('button')
  newDeleteButtonData.className = 'product-removal'
  newDeleteButton.className = 'btn-delete'
  newDeleteButton.type = 'button'
  newDeleteButton.innerText = 'Remover Produto' 
  newDeleteButtonData.appendChild(newDeleteButton)
  itemRow.appendChild(newDeleteButtonData)

  /* inserindo todas as informações como uma nova linha na tabela */
  var tabela = document.getElementsByClassName('table-body')[0]
  tabela.appendChild(itemRow)

/*   Contar o número de botões de deletar novamente */
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var botaoTeste = document.getElementsByClassName('btn-teste');


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
