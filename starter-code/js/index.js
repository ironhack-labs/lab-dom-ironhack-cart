function deleteItem(){
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); //removes section element of clicked item

  //Renames ids of remaining items so buttons will work after item is deleted
  var items = document.getElementsByClassName("row");
  for (a=0; a < items.length; a++){
    items[a].childNodes[3].childNodes[1].id = "unit-price" + a;
    items[a].childNodes[5].childNodes[3].id = "qty" + a;
  }
}

function getTotalPrice() {
  var items = document.getElementsByClassName("item-totals");
  var numberOfItems = items.length;
  var sum=0;

  for (var i=0; i < numberOfItems; i++) {
    var unitPrice = Number(document.getElementById("unit-price" + i).textContent.slice(1));
    var quantity = document.getElementById("qty" + i).value;
    var unitTotal = (unitPrice * quantity).toFixed(2)
    
    document.getElementById(items[i]["id"]).innerHTML = "$" + unitTotal;
    sum += Number(unitTotal);
  }
  document.getElementById("finalTotal").innerHTML = "$" + sum.toFixed(2);
}

function createNewItem(){
  var section = document.getElementsByClassName("container");
  var sectionClone = section[0].cloneNode(true);
  sectionClone.childNodes[1].childNodes[1].innerHTML = this.parentNode.parentNode.childNodes[1].childNodes[1].value; //overwrites clone item name
  this.parentNode.parentNode.childNodes[1].childNodes[1].value = ""; //resets input
  sectionClone.childNodes[3].childNodes[1].innerHTML = "$" + Number(this.parentNode.parentNode.childNodes[3].childNodes[3].value).toFixed(2).toString(); //overwrites clone item price
  this.parentNode.parentNode.childNodes[3].childNodes[3].value = ""; //resets input

  sectionClone.childNodes[3].childNodes[1].id = "unit-price" + 3; //rewriting unit price id of clone for calculation loop
  sectionClone.childNodes[5].childNodes[3].id = "qty" + 3; //rewriting qty id ...
  sectionClone.childNodes[7].childNodes[1].id = "item-total" + 3; //rewriting total id ...

  this.parentNode.parentNode.parentNode.insertBefore(sectionClone,document.getElementById("create-item-row")); //adds overwritten clone into DOM

  //adding delete button functionality to all buttons again
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var j = 0; j < deleteButtons.length ; j++){
    deleteButtons[j].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var j = 0; j < deleteButtons.length ; j++){
    deleteButtons[j].onclick = deleteItem;
  }
};
