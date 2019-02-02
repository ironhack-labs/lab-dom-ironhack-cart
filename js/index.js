var productNumberArray = [];
var amountOfProducts =  0;
var allProductNumbers = 0;

// Create initial Products
createProduct("IronBubble Head", 25);
createProduct("IronShirt", 15);
createProduct("IronShirt22", 152);
countProducts();
update();
// Calculate Products Button Press
document.getElementById("calculate").addEventListener("click", function(){
  calculateProducts();
})

// Delete Product Button Press
function update(){
  productNumberArray.forEach(function(item, i){
    document.getElementById("delete-"+item.toString()).addEventListener("click", function(){
      deleteProduct(item);
    })
  })
}

// Create new Product Button Press
document.getElementById("create").addEventListener("click", function(){
  var prodName = document.getElementById("product-name").value;
  var prodPrice = document.getElementById("product-price").value;
  createProduct(prodName, prodPrice);
  update();
})

function calculateProducts() {
  var totalOfAll = 0;
  productNumberArray.forEach(function(prodNr){
    var pricePerItem = document.getElementById("cost-" + prodNr.toString()).innerHTML;
    var pureNumber = parseFloat(pricePerItem.replace(/[^0-9.]/g, ''));
    var quantity = document.getElementById("qty-" + prodNr.toString()).value;
    quantity = parseInt(quantity);
    var total = quantity * pureNumber;
    document.getElementById("total-" + prodNr.toString()).innerHTML = total;
    totalOfAll += total;
  })
  document.getElementById("total").textContent = totalOfAll;
}

function createProduct(prodName, prodPrice) {
  productNr = allProductNumbers + 1;
  allProductNumbers++;
  var newProductString ='<div id="product-'+productNr+'" class="flex-container"><div><span>'+prodName+'</span></div><div><span id="cost-'+productNr+'">$'+prodPrice+'</span></div><div><label>QTY</label><input id="qty-'+productNr+'" type="text" value="5" /></div><div><span id="total-'+productNr+'">calculated price</span></div><div><button id="delete-'+productNr+'" class="btn btn-delete">Delete this item!</button></div></div>';
  document.getElementById("products").insertAdjacentHTML('beforeend', newProductString);
  countProducts();
  productNumberArray.push(productNr);
}

function deleteProduct(productIndex){
  var prodID = "product-"+productIndex.toString()
  var myNode = document.getElementById(prodID);
  while (myNode && myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
  }
  document.getElementById(prodID).remove();
  countProducts();
  //delete prod in array
  var index = productNumberArray.indexOf(productIndex);
  if (index > -1) {
    productNumberArray.splice(index, 1);
  }
}

function countProducts() {
  amountOfProducts = document.getElementById("products").childElementCount;
}