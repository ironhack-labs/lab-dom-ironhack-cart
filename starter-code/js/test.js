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

  var self = this;  // Needed as when calling functions, the context of "this" changes

  // Initial values
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

    // productToDelete.setAttribute("id", "marked-for-deletion");

    productToDelete.parentElement.removeChild(productToDelete);
  }

};


// -----------------------------------------------------------------------------------------
// Run things (on events via listeners)
// -----------------------------------------------------------------------------------------

window.onload = function(){

  // Create new shop
  var shop = new Shop();

  // Define buttons that have events
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  // Add event listeners for button clicks
  calculatePriceButton.addEventListener("click", shop.updatePrices);
  calculatePriceButton.addEventListener("click", console.log(shop.cartInfo)); // Just for fun

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].addEventListener("click", shop.deleteItem);
    deleteButtons[i].addEventListener("click", shop.updatePrices);
  }  

  
};
