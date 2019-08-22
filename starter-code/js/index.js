document.getElementById('shopping').onclick = function(e){
  if(e.target.className.includes('btn-delete')){
    e.target.parentNode.remove()
  }
}

function getTotalPrice() {
  console.log('get total price')
  let rows = document.getElementsByClassName('row');
  for(let r=0; r<rows.length; r++){
    let row = rows[r] 
    let price = document.querySelector(`#shopping > div:nth-child(${r+1}) .initialPrice`)
    console.log(price.innerText)

    let quantity = row.children[2].children[1]
    console.log(quantity.value)


    let subtotal = Number(price.innerText)*Number(quantity.value)
    console.log(subtotal)

    document.querySelector(`#shopping > div:nth-child(${r+1}) .individualTotal`).innerHTML = subtotal

  }
} 

function createNewItem(){
  let name = window.prompt('Product?')
  let price = window.prompt('Price?')
  let rowHtml = `<div class="row">
  <p class="col">${name}</p>
  <div class="col">
    <span>$</span>
    <p class="inline-block initialPrice">${price}</p>
  </div>
  <form class="col">
    <label class="inline-block" for="price">Quantity:</label>
    <input
      class="inline-block initialQuantity"
      type="text"
      name="price"
      placeholder="0"
    />
  </form>
  <div class="col">
    <span>$</span>
    <p class="inline-block individualTotal">0.00</p>
  </div>
  <button class="btn btn-danger btn-delete" >Delete</button>
  </div>`

  document.getElementById('shopping').innerHTML += rowHtml
}

window.onload = init

function init(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
};



