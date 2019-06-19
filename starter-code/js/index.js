


window.onload = function () {
  console.log("Calling window onload!");
  var calculatePriceButton = document.getElementById('calc-prices-button');
  calculatePriceButton.onclick = getTotalPrice;

  //this is wherre you're going to add the delete click event
  let deleteButtons = document.getElementsByClassName("btn-delete");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

function deleteItem(e) {
  const container = e.currentTarget.parentNode.parentNode;

  while (container.firstChild) {
    container.removeChild(container.firstChild);
    
  }
}



function getTotalPrice() {
  let totalPrice = 0;
  let productPrices = document.getElementsByClassName("cost-unit");

  //  console.log(productPrice);
  let quantity = document.getElementsByClassName("quantity");
  console.log(quantity);
  let eachPrice = document.getElementsByClassName("each-price");
  let pricesArr = [...productPrices];
  let quantArr = [...quantity];
  let eachPriceArr = [...eachPrice];
  for (var i = 0; i < pricesArr.length; i++) {

    let currentTotal = pricesArr[i].innerHTML * quantArr[i].value;
    eachPrice[i].innerHTML = currentTotal;

    totalPrice += pricesArr[i].innerHTML * quantArr[i].value;
    //  console.log(totalPrice);

  }
  let finalPrice = document.getElementById("total-price")
  finalPrice.innerHTML = totalPrice;
  console.log(totalPrice);



}

function createNewItems() {
  console.log("createNewItems function running")
  let newRow = document.createElement('div');
  let theContainer = document.getElementsByTagName()
}







