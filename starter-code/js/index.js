
function calculatePrices(){
  var amountOfPrices = document.getElementsByClassName("price").length;
  var price = 0;
  var quantity = 0;
  var totalRow = 0.00;
  var totalFinal = 0;

  for(var i = 0; i < amountOfPrices; i++){
    price = document.getElementsByClassName("price")[i].innerHTML;
    quantity = document.getElementsByClassName("quantity")[i].valueAsNumber; //
    rowPrice = price * quantity; // we get the price for each row
    document.getElementsByClassName("total")[i].innerHTML = rowPrice; // updates row price
    totalFinal += price * quantity; // total sum of every single row price
  }

  document.getElementById("total-price").style.display = "block";
  document.getElementById("total-price").innerHTML = "<h1>Total Price: " + totalFinal + "$</h1>";
}

// function createNewItem(){
//   document.getElementsByTagName
// }

function createNewItem () {

  var item = document.createElement("div");
  line.setAttribute('class', 'item');
  line.innerHTML = "<strong>" + name + ": </strong>" + message.field_message_body.und[0].value;




  document.getElementById("").appendChild(item);

  // add the newly created element and its content into the DOM
  var root = document.getElementsByClassName("flex-shop");
  document.body.insertBefore(parent, root);
}

function deleteItem(e){

}

window.onload = function(){
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');

    calculatePriceButton.onclick = calculatePrices;
    createItemButton.onclick = createNewItem;

    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
};
