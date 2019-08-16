var o = 0;

function deleteItem(e){

  if (window.confirm("Are you sure you wanna delete this item?")){
    var target = e.target;
    var parent = target.parentElement;
    var grandparent = parent.parentElement;
    grandparent.removeChild(parent)
  }

}

function getPriceByProduct(itemNode){
  

  let productPrice = itemNode.querySelector('.price').innerHTML
  let qT = itemNode.querySelector('input').value
  
  let priceItem = productPrice*qT
  itemNode.querySelector('.total').innerHTML = priceItem.toFixed(2);

  return priceItem;

}

function getTotalPrice() {
  var totalTotal = document.getElementById('totalTotal');
  let arr = []

  document.querySelectorAll(".container").forEach((itemNode => {
    arr.push(getPriceByProduct(itemNode));
    console.log(itemNode)

  }))
  console.log(arr)

  totalTotal.innerHTML = (arr.reduce((a,b) => a+b)).toFixed(2)

}

function createNewItem(){

  
  let main = document.querySelector('main');
  let name = document.getElementById('newName').value;
  let price = document.getElementById('newPrice').value;
  price = '' + (Number(price)).toFixed(2);
  let Bigdiv = document.createElement('div');
  Bigdiv.classList.add('container')
  
  console.log(typeof price)

  firstDiv = document.createElement('div');
  firstDiv.innerHTML = `<span>${name}</span>`
  Bigdiv.appendChild(firstDiv);

  secondDiv = document.createElement('div');
  secondDiv.innerHTML = `$<span class="price">${price}</span></div>`
  Bigdiv.appendChild(secondDiv);
  
  thirdDiv = document.createElement('div');
  thirdDiv.innerHTML = "QTY"
  Bigdiv.append(thirdDiv)

  fourthDiv = document.createElement('input')
  fourthDiv.innerHTML = '<input type = "number" min="0">'
  Bigdiv.append(fourthDiv)

  fifthDiv = document.createElement('div')
  fifthDiv.innerHTML = '$<span class="total"></span>'
  Bigdiv.appendChild(fifthDiv)

  sixthDiv = document.createElement('button')
  sixthDiv.classList.add('btn-delete')
  sixthDiv.innerHTML = "Delete"
  Bigdiv.appendChild(sixthDiv)

  main.appendChild(Bigdiv);

  tryy()

}





let tryy = window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i< deleteButtons.length; i++){

    deleteButtons[i].onclick = deleteItem;
  }
};
