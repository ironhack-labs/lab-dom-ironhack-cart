var buttonCalculate = document.getElementsByClassName('calculate')[0];
var quantityInput = document.querySelector('#quantity');
var totalIndividual = document.getElementsByClassName('total');

var totalSumSpan = document.getElementsByClassName('totalSum')[0];

//elements
var newItem = document.getElementById('new-item-create');
var container = document.getElementsByClassName('container')[0];
var deleted = document.getElementsByClassName('btn-delete');

//Create element
newItem.onclick = function (){
  
  //row flex
  var newRow = document.createElement('div');
  newRow.classList.add('flex'); newRow.style.margin = '5px';
  
  //div name
  var newDivName = document.createElement('div'), newLabelName = document.createElement('input');
  newLabelName.setAttribute('placeholder', 'Name...');
  newDivName.appendChild(newLabelName); newRow.appendChild(newDivName);  
  
  ////div price
  var newDivPrice= document.createElement('div'), newLabelPrice = document.createElement('input');
  newDivPrice.appendChild(newLabelPrice); newRow.appendChild(newDivPrice);
  newLabelPrice.style.width = '50px';
  
  //div quantity
  var newDivQuantity = document.createElement('div'), newLabel = document.createElement('label'), newInput = document.createElement('input') ;
  newDivQuantity.classList.add('quantity'); newLabel.innerText = 'QTY';
  newLabel.appendChild(newInput); newDivQuantity.appendChild(newLabel); newRow.appendChild(newDivQuantity); 
  
  //span total
  var newSpanTotal = document.createElement('span'), newSpanHolder = document.createElement('span');
  newSpanTotal.classList.add('total');
  newSpanTotal.appendChild(newSpanHolder); newRow.appendChild(newSpanTotal);  
  
  //event calculate
  newDivQuantity.onkeyup = function(){    
    newSpanHolder.innerText = newLabelPrice.value * newInput.value;
    // var suma = totalSumArray.reduce(function(acc, elem){
    //   return acc + elem;
    // },0);
    // totalSumSpan.innerText = suma;
  };
  
  //delete button
  var newDivButton = document.createElement('div'), newButton = document.createElement('button');
  newButton.classList.add('btn-delete', 'btn'); newButton.textContent = 'Delete';
  newDivButton.appendChild(newButton); newRow.appendChild(newDivButton);  
  
  newButton.onclick = function(e){  
    this.parentElement.parentElement.remove();
  };
  
  container.appendChild(newRow);
};


buttonCalculate.onclick = function(){

  // totalIndividual.map(function(elem){
  //   console.log(elem);
    
  // });

  
  for (var count = 0, i = 0; i < totalIndividual.length; i++) {
    count+= Number(totalIndividual[i].firstChild.innerText);
  }
  totalSumSpan.innerText = count;
  

};


window.onload = function(){
  quantityInput.value = '0';
};