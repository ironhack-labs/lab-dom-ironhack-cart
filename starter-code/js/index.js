// -----------------------------------------------------------------------------------------
// Constructors
// -----------------------------------------------------------------------------------------

// Product

function Product(productName, productUnitPrice, productQTY) {
  this.productName = productName;
  this.productUnitPrice = parseFloat(productUnitPrice);
  this.productQTY = parseFloat(productQTY);

  this.calcProductTotalPrice = function() {
    return this.productQTY * this.productUnitPrice;
  };

}

// Shop Manager (a.k.a The Brain)

function Shop(){

  // Initial values
  var self = this;  // Needed as when calling functions, the context of "this" changes
  this.cartInfo = [];  // Create directory of what's in the cart (not really needed)

  // updatePrices - Function that updates all prices and creates the "cartInfo"
  this.updatePrices = function() {

    let productCollection = document.querySelectorAll(".product");  // Get all Product html
    let totalPrice = 0;

    for(let i = 0; i < productCollection.length; i++) {
      let productName =  productCollection[i].getElementsByClassName("product-name")[0].innerHTML
      let productUnitPrice =  productCollection[i].getElementsByClassName("product-unit-price")[0].innerHTML
      let productQty =  productCollection[i].getElementsByClassName("product-qty")[0].value
  
      let prodObj = new Product(productName, productUnitPrice, productQty);

      // Add to the Cart directory
      self.cartInfo.push(prodObj);  

      // Add to the Overall Total Price
      totalPrice += prodObj.calcProductTotalPrice();

      // Update the Product Total Price
      productCollection[i].getElementsByClassName("product-total-price")[0].innerHTML = 
              parseFloat(Math.round(prodObj.calcProductTotalPrice() * 100) / 100).toFixed(2);   // Round to 2 d.p.
    }

    document.getElementsByClassName("total-price")[0].innerHTML = 
              parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2);
  };

  // deleteItem - Function that deletes items
  this.deleteItem = function() {
    productToDelete = event.currentTarget.parentElement;

    while (productToDelete.firstChild) {
      productToDelete.removeChild(productToDelete.firstChild);
        }

        productToDelete.parentElement.removeChild(productToDelete);

    self.updatePrices(); // Also update prices after any deletion
    }

  // createItem - Function that creates new products
  this.createItem = function() {

    // Get new product details
    let newProductName = document.getElementById("input-product-name").value;
    let newProductUnitPrice = document.getElementById("input-product-unit-price").value;

    // Create the new product div and html
    let newProductText = 
      `<span class="product-name">${newProductName}</span>
      <span class="product-unit-price currency">${newProductUnitPrice}</span>
      <div>
        <label class="label-qty">QTY</label>
        <input class="product-qty" type="text" value="0">
      </div>
      <span class="product-total-price currency">0.00</span>
      <button class="btn btn-delete">Delete</button>`

    var newProductDiv = document.createElement('div');
    newProductDiv.setAttribute("class", "product");
    newProductDiv.innerHTML = newProductText;
    newProductDiv.getElementsByClassName("btn-delete")[0].addEventListener("click", self.deleteItem); // Add event listener to delete item

    // Append the new product
    document.getElementById("product-list").appendChild(newProductDiv);

    // Clear the inputs used from the form
    document.getElementById("input-product-name").value = "";
    document.getElementById("input-product-unit-price").value = "";
    
  }

};


// -----------------------------------------------------------------------------------------
// Run things (on events via listeners)
// -----------------------------------------------------------------------------------------

window.onload = function(){

  // Create new shop
  var shop = new Shop();

  // Define buttons that have events
  var calculatePriceButton = document.getElementById("btn-calc-prices");
  var deleteButtons = document.getElementsByClassName("btn-delete");
  var createItemButton = document.getElementById("btn-create-item");

  // Add event listeners for button clicks
  calculatePriceButton.addEventListener("click", shop.updatePrices);
  calculatePriceButton.addEventListener("click", console.log(shop.cartInfo)); // Just for fun
  createItemButton.addEventListener("click", shop.createItem);

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].addEventListener("click", shop.deleteItem);
  }  

};
