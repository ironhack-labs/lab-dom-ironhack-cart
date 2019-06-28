// -----------------------------------------------------------------------------------------
// Constructors
// -----------------------------------------------------------------------------------------

// Product

function Product(productName, productUnitPrice, productQTY) {
  this.productName = productName;
  this.productUnitPrice = parseFloat(productUnitPrice);
  this.productQTY = parseFloat(productQTY);

  this.productTotalPrice = 0; // Initial value

  this.calcProductTotalPrice = function(productQTY, productUnitPrice) {
    return productQTY * productUnitPrice;
  };

}

// Shop Manager (a.k.a The Brain)

function Shop(){

  // Initial values
  this.totalPrice = 0;
  this.cartInfo = [];

  // Function that creates the product directory
  this.getCartInfo = function() {

    let productCollection = document.querySelectorAll(".product");
  
    for(let i = 0; i < productCollection.length; i++) {
      let productName =  productCollection[i].getElementsByClassName("product-name")[0].innerHTML
      let productUnitPrice =  productCollection[i].getElementsByClassName("product-unit-price")[0].innerHTML
      let productQty =  productCollection[i].getElementsByClassName("product-qty")[0].value
  
      let prodObj = new Product(productName, productUnitPrice, productQty);
  
      cartInfo.push(prodObj);
    }
    return cartInfo;
  };
};

// Card - has current state?



// // Shop

// function Shop(productDirectory){

//   this.productDirectory = productDirectory;


//   // Function to calculate total price and update all prices
//   this.totalPrice = function(productDirectory) {
//     let totalPrice = 0;

//     for(let i=0; i < productDirectory.length; i++) {
//       totalPrice += productDirectory[i].productTotalPrice;            
//     }

//     return totalPrice;
//   }



};
 var shop = new ShopManager()




// -----------------------------------------------------------------------------------------
// Run things (on events via listeners)
// -----------------------------------------------------------------------------------------

productDirectory = ShopManager.makeProductDirectory();
totalPrice = ShoppingCart.calcTotalPrice(productDirectory);
ShopManager.updatePrices(productDirectory, totalPrice);

console.log(productDirectory);


