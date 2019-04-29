//===== Variables =====// 

// product variables
let productName = document.getElementsByClassName("product-name")
let unitPrice = document.getElementsByClassName("cost")
let totalPrice = document.getElementsByClassName("total-price")
let resultPrice = document.getElementsByClassName("result-price")[0]
// list variables
let products = document.getElementsByTagName("li")
let productList = document.getElementsByTagName('ul')[0]
// button variables
let calculatePriceButton = document.getElementsByClassName("btn-success")[0]
let deleteBtn = document.getElementsByClassName("btn-delete")
let createBtn = document.getElementById("createBtn")
// inputs
let quantityInput = document.getElementsByClassName("QTYinput")
let newItemName = document.getElementById("newProductName")
let newItemPrice = document.getElementById("newProductPrice")

///===== Buttons =====// 

calculatePriceButton.addEventListener("mousedown", function(){
    updatePriceToAllProducts()
    updateResultPrice()
})

createBtn.addEventListener("mousedown", function(){
  newItem()
  deleteBtnSetup()
  //totalPrice -= 
})

deleteBtnSetup()



///===== Functionality =====// 

function getTotalPrice() {
      let result = unitPrice.innerText * parseInt(quantityInput.value)
      totalPrice.innerHTML = result;
}

function updatePriceToAllProducts(){
      for(i=0; i<products.length; i++){
        let result = unitPrice[i].innerText * parseInt(quantityInput[i].value)
        totalPrice[i].innerHTML = result;
      }
} 

function updateResultPrice(){
      let result = 0
      for(i=0; i<products.length; i++){
        result += parseInt(totalPrice[i].innerHTML) 
      }
      //console.log(result)
      resultPrice.innerHTML = result
}

function deleteBtnSetup(){
  for(i = 0; i < deleteBtn.length; i++){
    deleteBtn[i].addEventListener("mousedown", function(e){
      let target = e.currentTarget;
      let parent1 = target.parentElement
      let parent2 = parent1.parentElement
      let parent3 = parent2.parentElement
      let parent4 = parent3.parentElement
      parent4.removeChild(parent3)
      updateResultPrice()
      //console.log(parent2)
    })
    //console.log("click")
  }
}

function newItem(){
  let name = newItemName.value
  let price = newItemPrice.value
  var li = document.createElement("li");
  li.innerHTML = `<div class="row">
  <div class="col-md-2">
    <span class="product-name">${name}</span>
  </div>
  <div class="col-md-2">
    <span class="cost">
    ${price}
    </span>
  </div>
  <div class="col-md-2">
    <form>
      <label for="name">QTY</label>
      <input type="number" class="QTYinput" value="0">
    </form>
  </div>
  <div class="col-md-2">
    <span class="total-price">0.00</span>
  </div>
  <div class="col-md-2 delete">
    <button class="btn-delete">Delete</button>
  </div>`;
  productList.appendChild(li);
  newItemName.value = ""
  newItemPrice.value = ""
  deleteBtnSetup()
}
// input event listeners
newItemName.addEventListener("keyup", function(event) { 
    event.preventDefault();
    if (event.keyCode === 13) {
      newItem()
    }
});
newItemPrice.addEventListener("keyup", function(event) { 
  event.preventDefault();
  if (event.keyCode === 13) {
    newItem()
  }
});
