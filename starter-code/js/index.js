function updateProductPrice(){
  //Getting prices and turning into one array
  let getProdPrices = document.getElementsByClassName('product-price');
  let prodPrices = [];
  for (i=0; i<getProdPrices.length; i++){
    prodPrices.push(getProdPrices[i].innerHTML);
  }

  //Getting the quantity and turning into one array
  let getProdQty = document.getElementsByClassName('product-qty');
  let prodQty = [];
  for (j=0; j<getProdQty.length; j++){
    prodQty.push(getProdQty[j].value);
  }
  
  //Generating the result
  let res = prodPrices.map(function (productPrice, index) {
    return prodPrices[index] * prodQty[index];
  });

  //Printing the result
  for(g=0; g<res.length; g++){
    price = res[g].toFixed(2);
    document.getElementsByClassName("total-price")[g].innerHTML = price;
  }
}

function calculateFinalPrice(){
  //Getting updated prices and turning into one array
  let getPrices = document.getElementsByClassName('total-price');
  let finalPrices = [];
  for (h=0; h<getPrices.length; h++){
    let toInteger = parseInt(getPrices[h].innerHTML);
    finalPrices.push(toInteger);
  }
  //Calculating the result
  let res = finalPrices.reduce(function (acc, curr){
    return acc + curr;
  });
  //Printing the result
  price = res.toFixed(2);
  document.getElementsByClassName("final-price")[0].innerHTML = price;
}

//Deleting products
function deleteProduct(num){
  let parent = document.getElementsByTagName("body");
  let child = document.getElementById(num);
  child.parentElement.removeChild(child);
}

function createProduct(){
  //Checking existing products
  let products = document.getElementsByClassName('product-wrapper');

  //Creating the new product number
  let productNumber = products.length + 1;

  //Getting new product information
  let productName = document.getElementById("product-name").value;
  let productPrice = parseInt(document.getElementById("product-price").value);
  floatPrice = productPrice.toFixed(2);

  //Creating product tags
  let newProduct = document.createElement("div");
  newProduct.innerHTML = "<div id='product-" + productNumber + "' class='product-wrapper'><span class='product-name'>" + productName + "</span><div><span class='dolar-sign'>$</span><span class='product-price'>" + floatPrice + "</span></div><div><label>Quantity</label><input type='number' name='qty' class='input product-qty' value='1' onchange='updateProductPrice()' /></div><div><span>$</span><span class='total-price'>" + floatPrice + "</span></div><div><button class='btn-delete' onclick='deleteProduct(`product-" + productNumber + "`)'>Delete</button></div></div>";

  //Placing the new product
  let parent = document.getElementsByTagName("body");
  let before = document.getElementsByClassName("calculate-price");
  parent[0].insertBefore(newProduct, before[0]);
}

window.onload = updateProductPrice;