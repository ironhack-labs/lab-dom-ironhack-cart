function deleteItem(){
  let unwantedChild = this.parentNode
  let parent = unwantedChild.parentNode
  let grandParent = parent.parentNode
  grandParent.removeChild(parent)
}

function getTotalPrice() {
  let arrayProducts = document.getElementsByClassName("product")
  let totalSum = 0
  console.log(totalSum)
  for (let i=0; i<arrayProducts.length; i++) {
    let unitPrice = parseInt(document.getElementsByClassName("product-price")[i].innerHTML)
    console.log(unitPrice)
    let quant = document.getElementsByTagName("input")[i].value
    console.log(quant)
    let total = document.getElementsByClassName("total")[i].innerHTML
    console.log(total)
    let newTotal = unitPrice*quant
    console.log(newTotal)
    document.getElementsByClassName("total")[i].innerHTML=newTotal
    totalSum+=newTotal
  }
  document.getElementById("grand-total").innerHTML=totalSum
  console.log(totalSum)
}

function createNewItem(){
  
 //get input values
 let productName = document.getElementById("name-creation").value
 console.log(productName)
 let productPrice = parseInt(document.getElementById('price-creation').value)
 console.log(productPrice)
 //record them
 let where = document.getElementById("products")
 let newProduct = document.createElement("div")
 where.appendChild(newProduct)
 newProduct.classList.add("product");
 newProduct.innerHTML = `
  <div class="inline">
    <span class="product-name">` + productName +`</span>
  </div>
  <div class="inline">
    $<span class="product-price">` + productPrice + `</span>
  </div>
  <div class="inline">
    <label class="quantity">QTY</label>
    <input type="number">
  </div>
  <div class="inline">
    $<span class="total">0</span>
  </div>
  <div class="inline">
    <button type="button" class="btn btn-delete">Delete</button>
  </div>`
  let deleteButtons = document.getElementsByClassName('btn-delete');
  for(let i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  let calculateButton = document.getElementsByClassName("btn-success")[0];
  calculateButton.onclick = getTotalPrice;

  let createItemButton = document.getElementsByClassName("btn-create")[0];
  createItemButton.onclick = createNewItem;

  let deleteButtons = document.getElementsByClassName('btn-delete');
  for(let i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
