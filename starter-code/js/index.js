
// Pegar Botão Calcular
var btnCalcular = document.querySelector('#calculate');
// Pegar <td> Total Geral
var tdTotalGeral = document.querySelector('.total-geral');

// Função para Calcular o Preço

function calcularPreco(){
  
  var trProdutos = document.querySelectorAll('.tr-produto');
  var arrNew = [];

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
    
    var valorTotais = parseInt(tdTotal.textContent);
    

    arrNew.push(valorTotais);

  }

  var valorTotalGeral = arrNew.reduce(function(acc,item){
    return acc + item;
  })

  tdTotalGeral.textContent = valorTotalGeral;
}

// Botão Calcular OnClick
btnCalcular.addEventListener("click", calcularPreco);


function deleteItem(e){
  let pai = document.querySelector('#t-body');
  let filho = e.currentTarget.parentNode.parentNode;
  
  pai.removeChild(filho);
}

function createQuantityInput(){
  let qtyInput = document.createElement('input');
  qtyInput.setAttribute('type','number');
  qtyInput.setAttribute('id','td-input');
  let td = document.createElement('td');

  td.appendChild(qtyInput);

  return td;

  }

function createDeleteButton(){
  let deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class','btn btn-danger');
  deleteBtn.setAttribute('id','delete');
  deleteBtn.textContent = 'DELETE'
  deleteBtn.addEventListener('click', deleteItem);
  let td = document.createElement('td');

  td.appendChild(deleteBtn);

  return td;

}

function createTotal(){
  
  let tdQty = document.createElement('td');
  tdQty.setAttribute('class','td-total');
  tdQty.innerHTML = '0';

  return tdQty;
}

function createProductName(){
  let tdName = document.createElement('td');
  tdName.setAttribute('class','td-nome');
  tdName.innerText = document.querySelector('#produto-novo-nome').value;

  return tdName;
}

function createProductValue(){
  let tdValue = document.createElement('td');
  tdValue.setAttribute('class','td-valor')
  tdValue.innerHTML = document.querySelector('#produto-novo-valor').value;

  return tdValue;
}

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

function createNewItem(){

  let nameItem = createProductName();
  let valueItem = createProductValue();
  let inputItem = createQuantityInput();
  let totalItem =createTotal();
  let btnDeleteItem = createDeleteButton();

  let tr = document.createElement('tr');
  tr.setAttribute('class','tr-produto');

  tr.appendChild(nameItem);
  tr.appendChild(valueItem);
  tr.appendChild(inputItem);
  tr.appendChild(totalItem);
  tr.appendChild(btnDeleteItem);

  console.log(tr)

  document.querySelector('#t-body').appendChild(tr);

}


window.onload = function(){
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.querySelectorAll('#delete');

  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
