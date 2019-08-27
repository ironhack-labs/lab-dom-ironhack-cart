document.getElementById(`shopping`).onclick = function(e){
  if(e.target.className.includes('btn-delete')){
    e.target.parentNode.remove();
  } 
  console.log(e)
}

function getTotalPrice() {
  let rows = document.getElementsByClassName('row');
  for(let r = 0; r < rows.length; r++){
    let row = rows[r];
    let price = document.querySelector(` #shopping > div:nth-child(${r+1}) .initialPrice`);
    // console.log(price);
    let quantity = document.querySelector(` #shopping > div:nth-child(${r+1}) .initialQuantity`);
    // console.log(quantity.value);
    let subTotal = Number(price.innerText)*Number(quantity.value);
    // console.log(subTotal);
    document.querySelector(`#shopping > div:nth-child(${r+1}) .initialTotal`).innerHTML = subTotal;
    console.log(subTotal);
  }
}

function createNewItem(){
  let name = window.prompt('what is the name?');
  let price = window.prompt('what is the price?');
  let rowHtml = `<div class="row">
  <span class="product-name">${name}</span>
  <div class="col">
  <span>$</span>
  <p class="inline-block initialPrice">${price}</p>
  </div>
  <form class="col">
  <label class="inline-block" for="price">Quantity:</label>
  <input class="inline-block initialQuantity" type="text" name="price" placeholder="0"/>
  </form>
  <div class="col">
  <span>$</span>
  <p class="inline-block initialTotal">0.00</p>
  </div>
  <button class="btn btn-danger btn-delete">Delete</button>
  </div>`;
  document.getElementById(`shopping`).innerHTML += rowHtml;
}

window.onload = init;

function init(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
}
