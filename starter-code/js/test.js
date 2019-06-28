var productCollection = document.querySelectorAll(".product");

for(let i = 0; i < productCollection.length; i++) {
  let productName =  productCollection[i].getElementsByClassName("product-name")[0].innerHTML
  let productUnitPrice =  productCollection[i].getElementsByClassName("product-unit-price")[0].innerHTML
  let productQTY =  productCollection[i].getElementsByClassName("product-qty")[0].value

  console.log(productName, productUnitPrice, productQTY);
}


// var firstProduct = document.querySelectorAll(".product")[0];

// var firstProductPrice = firstProduct.getElementsByClassName("price-product")[0].innerHTML
// console.log(firstProductPrice);

// //.getElementsByClassName("product-name")

