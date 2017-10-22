window.onload = function(){

function calculatePrices(){
  var amountOfPrices = document.getElementsByClassName("price").length;
  var price = 0;
  var quantity = 0;
  var totalRow = 0.00;
  var totalFinal = 0;

  for(var i = 0; i < amountOfPrices; i++){
    price = document.getElementsByClassName("price")[i].innerHTML;
    quantity = document.getElementsByClassName("quantity")[i].valueAsNumber; //

    if (!quantity || quantity < 0){
      alert('please fill a correct quantity for product number [' + i + ']' );
    }
    else {
      rowPrice = price * quantity; // we get the price for each row
      document.getElementsByClassName("total")[i].innerHTML = rowPrice; // updates row price
      totalFinal += price * quantity; // total sum of every single row price
    }
  }

  document.getElementById("total-price").style.display = "block";
  document.getElementById("total-price").innerHTML = "<h1>Total Price: " + totalFinal + "$</h1>";
}

function createNewItem(){
  var item = document.getElementsByClassName("item")[0].cloneNode(true);
  document.getElementsByClassName("flex-shop")[0].appendChild(item);

  var product_name = document.getElementById("product-name").value;
  var product_price = document.querySelector("#unit-price").value;

  item.querySelector(".name").innerHTML = product_name;
  item.querySelector(".price").innerHTML = product_price;

  item.querySelector(".btn-delete").onclick = function(){
    this.parentNode.parentNode.remove();
  };

}


    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');

    calculatePriceButton.onclick = calculatePrices;
    createItemButton.onclick = createNewItem;

    for(var i = 0; i < deleteButtons.length; i++){
      deleteButtons[i].onclick = function(){
      this.parentNode.parentNode.remove();
    };
  }


};
