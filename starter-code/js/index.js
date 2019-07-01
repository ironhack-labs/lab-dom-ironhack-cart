

//================ CALCULATE PRICES ================

var containerNumber = document.getElementsByClassName("flex-container");

function calculatePrice() {

  let finalPrice = 0;

  for (let i = 0; i<containerNumber.length; i++) {
    
      let price = document.getElementsByClassName("price")[i].innerHTML;
      let amount = document.getElementsByClassName("input")[i].value;
      let currentContainer = containerNumber[i];
      
      document.getElementsByClassName("total")[i].innerHTML = price * amount;
      finalPrice += parseInt(currentContainer.getElementsByClassName("total")[0].innerHTML)
  };

  document.getElementsByClassName("final-price")[0].innerHTML = finalPrice;
}

//==================== DELETE =====================

function deleteBtn() {
  
  let currentBtn = event.currentTarget;
  let parentContainer = currentBtn.parentNode.parentNode;

  currentBtn.parentNode.parentNode.parentNode.removeChild(parentContainer);

  calculatePrice();
}

//=================== ADD ITEM ====================

function addItem() {

  let createName = parseInt(document.getElementsByClassName("create-name")[0].value); //input
  let createPrice = parseInt(document.getElementsByClassName("create-price")[0].value); //input

  let createContainer = document.getElementsByClassName("master-container")[0];

  let createRow = document.createElement("div");
  createRow.setAttribute("class", "flex-container");

  createContainer.appendChild(createRow);

  createRow.innerHTML =`
    <div class="flex-item"><p class="text-center">${createName}</p></div>
    <div class="flex-item"><p class="text-center">€ <span class="price">${createPrice}</span></p></div>
    <div class="flex-item"><p class="text-right">QTY</p></div>
    <div class="flex-item"><input class="input"/></div>
    <div class="flex-item"><p class="text-center">€ <span class="total">0</span></p></div>
    <div class="flex-item"><button class="btn btn-delete" onclick="deleteBtn()">Delete</button></div>    
`;
}
