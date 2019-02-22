// Pegar Produtos: 
var trProdutos = document.querySelectorAll('.tr-produto');
// Pegar Botão Calcular
var btnCalcular = document.querySelector('#calculate');
// Pegar <td> Total Geral
var tdTotalGeral = document.querySelector('.total-geral');

// Função para Calcular o Preço
function calcularPreco(){
  for(i = 0; i < trProdutos.length; i++){
    
    // Pegar o Produto no momento [i]
    var trProduto = trProdutos[i];

    // Pegar coluna do Valor e Total do produto no momento [i]
    var tdValor = trProduto.querySelector('.td-valor');
    var tdTotal = trProduto.querySelector('.td-total');

    // Pegar valores
    var valorProduto = parseInt(tdValor.textContent);

    // Calcular preço total
    var valorTotal = valorProduto * trProduto.querySelector('#td-input').value;

    // Colocar o preço total
    tdTotal.innerHTML = valorTotal;
    
    var arrNew = [];
    
    var totaisProdutos = trProduto.querySelector('.td-total');
    var valorTotais = parseInt(totaisProdutos.textContent);
    

    arrNew.push(valorTotais);

    var totalGeral = arrNew.reduce(function(acc,item){
      acc + item;
    });

    console.log(totalGeral);
  }
}




// Botão Calcular OnClick
btnCalcular.addEventListener("click", calcularPreco);


// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

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
