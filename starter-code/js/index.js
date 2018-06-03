
var list = [];
var item = document.querySelector(".product-name");
var unitPrice = document.querySelector(".unit-price");
var quantity = document.querySelector("input");
var qtyForm = document.querySelector("form");
var totalPrice = document.getElementById("total-price");
var addItem = document.querySelector("#addToCart");

//Add new item
var value = "";
function getValue (i){
  if (i === "IronShirt"){
    value = "$15"
  } else if (i === "IronCard"){
    value = "$10"
  } else if (i === "IronSticker"){
    value = "$1"
  } else if (i === "IronAxe"){
    value = "$100"
  } else { alert("Please select a valid item!")
  }
};

addItem.addEventListener("change", function(){
  var index = addItem.value;
  getValue(index);
  var newItem = document.createElement("li");
  var newPrice = document.createElement("li");
  var newTotal = document.createElement("span");
  var newQty = document.createElement("FORM");
  //Form generator
  var tb = document.createElement("INPUT");
  var tc = document.createElement("label");
  tc.innerHTML = "QTY";
  tb.type = "Text";
  tb.name = "0";
  newQty.appendChild(tc);
  newQty.appendChild(tb);
  newItem.innerHTML = index;
  newPrice.innerHTML = value;
  item.appendChild(newItem);
  unitPrice.appendChild(newPrice);
  totalPrice.appendChild(newTotal);
  qtyForm.appendChild(newQty);
});


//Calculate item price
qtyForm.addEventListener("change", function(){
  var getTotalPrice = document.createTextNode("$"+ Number(unitPrice.innerHTML.substring(1))*Number(quantity.value));
  totalPrice.removeChild(totalPrice.lastChild);
  totalPrice.appendChild(getTotalPrice);

})

