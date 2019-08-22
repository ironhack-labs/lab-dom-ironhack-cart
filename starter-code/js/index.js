//.product .cost span
// .product .quantity input
// .product .totalPrice span

//document.querySelector("body > div > div:nth-child(2) > div.cost > span")
function updatePrices() {
}
function getPriceByProduct(itemNode){
}
function updatePriceByProduct(productPrice, index){
}
function createQuantityInput(){
}

function createDeleteButton(){
}

function createQuantityNode(){
}

function createItemNode(dataType, itemData){
}

function createNewItemRow(itemName, itemUnitPrice){
}





/* let ironProds = {
  products: {

  },
  total: 0
}

function handleProds() {
  let final = document.querySelector('.product .totalPrice span').innerHTML
  let prods = document.getElementsByClassName('product')
  console.log(prods)

  for (let i = 0; i < prods.length; i++) {
    let prod = prods[i]

    let cost = prod.querySelector('.product .cost span').innerHTML
    let name = prod.querySelector('.product .productName span').innerHTML
    console.log(cost, name)

    if (!ironProds.products[name]) ironProds.products[name] { name, ironProds.products.cost = cost
    ironProds.total = final
  }
} */








function getTotalPrice() {
  //get all products
  let products = document.querySelectorAll('.product');
  var finalTotal = 0;

  // loop through products
  products.forEach(product => { 
    // get quantity, total price and quantity from product
    let cost = product.querySelector('.product .cost span').innerHTML
    let quantity =  product.querySelector('.product .quantity input').value

    // multiply price and quantity to get total
    product.querySelector('.product .totalPrice span').innerHTML = quantity * cost

    return finalTotal+= quantity * cost
  })

  // update total span to reflect total
  document.querySelector('.calculate h2 span').innerHTML = finalTotal

  //handleProds(finalTotal);
}


function deleteItem(e){
 e.currentTarget.parentNode.parentNode.remove();
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

      for(var i = 0; i<deleteButtons.length; i++){
        deleteButtons[i].onclick = deleteItem;
      }


      //handleProds();
};

window.onclick = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;



      for(var i = 0; i<deleteButtons.length; i++){
        deleteButtons[i].onclick = deleteItem;
      }

      //handleProds();
      //console.log(ironProds);
}

function createNewItem(){
  let newName = document.querySelector('.create .nameInput input').value
  let newPrice = document.querySelector('.create .priceInput input').value


  let newProduct = `<div class="product"><div class="productName"><span>${newName}</span></div><div class="cost">$<span>${newPrice}</span> 
  </div><div class="quantity"><label for="quantity">QTY</label><input type="text" name="" id=""></div><div class="totalPrice">$<span>0</span>  
  </div><div class="deleteButton"><button class="btn-delete">Delete</button></div></div>`
  
  document.querySelector('.wrapper').innerHTML += newProduct
}





/*
Those two inputs represent the name and the unit price of the new product. 
Then there's the "Create" button that the user needs to click to actually add the new product to the list.

Add two inputs to let the user enter the new product data.
Add a "Create" button. Assign it a click event that will:
Get the data from the inputs.
Create a new product row with the data from the inputs. The structure of the new product should be the same as in Iteration #1.
⚠️ Make sure that the new product you added has the same behavior than the other products:

You should be able to calculate the product's total price
That product's price should be included in the total price of the entire Shopping Cart
You should be able to delete the product


*/