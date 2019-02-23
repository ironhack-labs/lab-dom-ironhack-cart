/* função para cálculo de valor total para uma linha específica de produto */

function getTotalPriceByProduct(itemNode){
  var price = parseInt(document.getElementsByClassName('product-price')[itemNode].innerText);
  var quantidade = parseInt(document.getElementsByTagName('input')[itemNode].value);
  var resultado = price*quantidade;
  document.getElementsByClassName('total-price')[itemNode].innerText = resultado;
  return resultado
}

/* função para cálculo de valor total */

function getTotalPrice(){
  var soma = 0;
  numIteracoes = document.getElementsByClassName('product-name').length -1;
  for(i=0;i<=numIteracoes;i++)
  {
    getTotalPriceByProduct(i);
    soma = soma + getTotalPriceByProduct(i);
  }
  document.getElementById('shopping-total').innerText = soma;
}

/* Pergunta: porque o (e) já vem implementando na função de deletar item?
Removi (e) da função, por ora, por não entender seu funcionamento */

function deleteItem(itemNode)
{
  /*   Vamos pegar o id do botão clicado para termos a referência de qual produto deve ser removido */
  var numBotaoRemover = document.getElementsByTagName('button').length - 1 /* Subtração do botão de cálculo total */
  var botoes = document.getElementsByTagName('button')

  /*   for(i=0;i<=numBotaoRemover;i++){
    botoes[i].onclick = function idBotao (){
      console.log(botoes[i].id)
    }
  } */
  document.getElementsByClassName('cart-content')[itemNode].innerHTML =""
}

function createQuantityInput(){
  var node = document.createElement('input')
  var textNode = document.createTextNode('Quantidade')
  node.appendChild(textNode)
  node.className = "quantity-input"
  node.value = 2
  node.nodeType = Number
}

function createDeleteButton(){
  var node = document.createElement('button')
  var textNode = document.createTextNode('Remover Produto')
  node.appendChild(textNode)
  node.className = "btn-remove"
  node.nodeType = button
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

/* window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
} */

console.log("Top")
