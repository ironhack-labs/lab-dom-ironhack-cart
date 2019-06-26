
let calculate = document.querySelector('.calculate-button');
let deleteButton = document.querySelectorAll('.delete-button');
let addButton = document.getElementById('addNewButton');

calculate.onclick = calculatePrice;

deleteButton.forEach((button) =>{
  button.addEventListener('click', function (e) {
    deleteItem(e);
  })
})

addButton.onclick = addNewItem;


function calculatePrice(){
  let product = document.getElementsByClassName("product");
  let totalPrice = document.getElementById('total-price');
  let finalPrice = 0;

  for(let i = 0; i < product.length; i++){
    let productPrice = document.getElementsByClassName("product-price")[i].innerText;
    let qty = document.getElementsByClassName("quantity")[i];
    let totalUnit = document.getElementsByClassName("total-unitPrice")[i];
    let totalPrice = parseInt(productPrice.slice(1)) * parseInt(qty.value);
    totalUnit.innerText = "$" + totalPrice.toFixed(2);
    finalPrice += totalPrice;
    }

    totalPrice.innerText = "$" + finalPrice.toFixed(2);
}


function deleteItem(e){
  let item = document.querySelector('.body');
  item.removeChild(e.target.parentElement.parentElement);
  calculatePrice();
}
 

function createNewItemName(name){
  let dContainer = document.createElement('div');
  dContainer.setAttribute("class", "pname");
  let sContainer = document.createElement('span');
  sContainer.setAttribute("class", "product-name");
  if(name === ""){
    name = "Default";
  }
  let content = document.createTextNode(name);
  sContainer.appendChild(content);
  dContainer.appendChild(sContainer);
  return dContainer;
//  parent.appendChild(dContainer);

}

function createNewItemPrice(){
  let dContainer = document.createElement('div');
  dContainer.setAttribute("class", "product-price sPrice");
  let newItemPrice = document.getElementById('new-itemPrice').value;
  if(newItemPrice === ""){
    newItemPrice = 0;
  }
  let price = parseInt(newItemPrice).toFixed(2);
  let content = document.createTextNode( "$" + price);
  dContainer.appendChild(content);
  return dContainer;
}

function createNewItemQty(){
  let dContainer = document.createElement('div');
  dContainer.setAttribute('class', "sQty");
  let label = document.createElement('label');
  let text = document.createTextNode("QTY");
  label.setAttribute('for', "qty");
   label.appendChild(text);
  let input = document.createElement('input');
  input.setAttribute("class", "quantity");
  input.setAttribute("type", 'number');
  input.setAttribute("min", "0");
  input.setAttribute("value", "0");
  dContainer.appendChild(label);
  dContainer.appendChild(input);
  return dContainer;
}

function createNewItemTotalPrice(){
let dContainer = document.createElement('div');
dContainer.setAttribute('class', "total-unitPrice");
let sContainer = document.createElement('span');
let content = document.createTextNode("$0.00");
sContainer.appendChild(content);
dContainer.appendChild(sContainer);
return dContainer;
}

function createNewDeleteButton(){
let dContainer = document.createElement('div');
let button = document.createElement('button');
button.setAttribute('class', "delete-button btn-delete btn");
button.innerText = "Delete";
button.onclick = deleteItem;
dContainer.appendChild(button);
return dContainer;
}

function addNewItem(){
  let parent = document.getElementsByClassName('body')[0];
  let container = document.createElement('div');
  let newItemName = document.querySelector('#new-itemName').value;
  let newItemPrice = document.querySelector('#new-itemPrice').value;
container.setAttribute("class", "product");
container.appendChild(createNewItemName(newItemName));
container.appendChild(createNewItemPrice(newItemPrice));
container.appendChild(createNewItemQty());
container.appendChild(createNewItemTotalPrice());
container.appendChild(createNewDeleteButton());
parent.appendChild(container);
let lastPart = document.querySelector('.inputs');
parent.insertBefore(container, lastPart);
}
