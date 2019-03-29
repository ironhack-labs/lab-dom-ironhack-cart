// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }



// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

function printTotal() {
  let priceArray = calculPrice();
  let totalSum = 0;
  let totalElement = document.querySelector("#total-all-product span")

  console.log(totalElement);
  for (let j = 0; j < priceArray.length; j++) {
    totalSum += priceArray[j];
  }
   let res = totalSum.toString()
  console.log(typeof res)
  totalElement.innerText = res+ "$";
}

function updatePriceByProduct() {
  let priceArray = calculPrice();
  let priceArrayString = [];
  let priceElements = document.querySelectorAll(".total-product");
  for(let j =0 ; j< priceArray.length ; j++){
    priceArrayString.push(priceArray[j].toString());
  }
  for (let i = 0; i < priceElements.length; i++) {
    priceElements[i].innerText = priceArrayString[i] + "$" ;
  }
}


function calculPrice() {
  let prices = getPrice()
  let qtys = getQty()
  let totalPrice = [];
  let totalAll = [];

  totalPrice.push(prices, qtys);
  console.log(totalPrice);

  for (let i = 0; i < totalPrice[0].length; i++) {
    if ((totalPrice[0][i] && totalPrice[1][i]) > 0) {
      let res1 = totalPrice[0][i] * totalPrice[1][i]
      totalAll.push(res1);
      // updatePriceByProduct(res1)
    } else if (totalPrice[1][i] == 0) {
      let res2 = totalPrice[0][i]
      // updatePriceByProduct(res2)
      totalAll.push(res2);
    }

  }
  console.log(totalAll)
  return totalAll
}

function getQty() {
  let arrayQty = []
  let qtys = document.querySelectorAll(".quantity");
  qtys.forEach((qty, i) => {
    // console.log(qty.value);
    let qtyNumber = Number(qty.value)
    arrayQty.push(qtyNumber);
  });
  return arrayQty
}

function getPrice() {
  let arrayPrice = []
  let prices = document.querySelectorAll(".product-price span")
  // console.log(prices)
  for (let i = 0; i < prices.length; i++) {
    let price = Number(prices[i].innerHTML.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""))
    arrayPrice.push(price);
    // console.log(arrayPrice)
  }
  return arrayPrice
}


function deleteItem(e) {
  var thisProd = e.target.parentNode.parentNode;
  thisProd.parentNode.removeChild(thisProd);
}

function getProductInfos() {
  var newProductName = window.prompt("what's the product name?")
  var newProductPrice = window.prompt("what's the product price?")
  // var productToClone = document.querySelectorAll(".wrapper-product");

  if (newProductName && newProductPrice) {
    // console.log(newProductName);
    // console.log(newProductPrice);
    return infos = {
      name: newProductName,
      price: newProductPrice
    };
  } else {
    return window.alert("pick a name !")
  }
}

function createProductRow() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper-product");
  return wrapper;
}

function createNewItem(name, price) {
  const markup = `
  <div class="wrapper-product">
    <div class ="product product-name"><span>${name}</span></div>
    <div class="product product-price"><span>${price}</span></div>
  <div class="product">
      <label for="quantity">QTY</label>
      <input type="text" name="quantity" class="quantity" value="0">
  </div>
      <div class="product total-product"><span>0$</span></div>
      <div class="product"><button class="btn btn-delete">Delete</button>
  </div>
  </div>
`;
  const bigwrapper = document.getElementById("big-wrapper");

  bigwrapper.innerHTML += markup;

  var deleteButtons = document.getElementsByClassName('btn-delete');


  // deleteButtons.forEach(btn => {
  //   console.log(btn);
  //   btn.onclick = deleteItem
  // });

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

  createItemButton.onclick = function () {
    const product = getProductInfos();
    createNewItem(product.name, product.price)
  }

  calculatePriceButton.onclick = function () {
    printTotal();
    updatePriceByProduct()
  }
};