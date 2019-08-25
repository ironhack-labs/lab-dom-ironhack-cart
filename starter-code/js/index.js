function deleteItem(){
  window.t= this;
    t.parentNode.parentNode.remove()
}


function getTotalPrice(e) {
    let price= document.getElementsByClassName("price")
    let qty= document.getElementsByClassName("qty")
    let subTotal= document.getElementsByClassName("totPrice")
    for(var i= 0; i<price.length; i++){
    subTotal[i].innerHTML="$"+ Number(price[i].innerHTML.slice(2)) * Number(qty[i].value)
    }

  }

function createNewItem(e){
  let namer = window.prompt("What is the name?")
  let pricer = window.prompt("What is the price?")
  let newLine = `<div class="wrapper">
        <div> <span> ${namer} </span> </div>
        <div><span class="price"> $${pricer} </span></div>
        <div class="quantity"><label for="qty1">QTY</label><input class="qty" type="text" placeholder="0"></div>
        <div><span class="totPrice">$0.00</span></div>
        <div><button class="btn-delete btn">Delete</button></div>
      </div>
      <br>`
      document.getElementById("bigWrap").innerHTML += newLine
  init()
}

window.onload = init

function init(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}; 


/*
let price1 = document.getElementById("price1").innerHTML.slice(2);



var calculatePrice = document.getElementById("calculate");
calculatePrice.onclick= function(){
  let quantity = document.querySelector("#qty1").value;
  //let totprice1 = = totprice ;
   let totprice=price1 * quantity;
document.getElementById("totPrice1").innerHTML = "$" + totprice
}

*/