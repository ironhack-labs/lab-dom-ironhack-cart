var tprice = 0;
var numItems = 0;
var itm = 0;
var stuff = [
  // id: "",
  // item: "",
  // price: "",
  // qty: ""
];

window.onload = function() {
  // var itemName = document.getElementById("itemName").value;
  // var price = document.getElementById("price").value;
  // var quantity = document.getElementById("qty").value;
  // var total = document.getElementById("total").value;
  var textCreateItem = document.getElementById("textCreateItem").value;
  var textCreatePrice = document.getElementById("textCreatePrice").value;
  var createQty = document.getElementById("createQty").value;
  var buttonCalculate = document.getElementById("buttonCalculate");
  // var buttonDelete = document.getElementById("buttonDelete");
  var table = document.getElementById("table");
  // var cell1 = row.insertCell(0);
  // var cell2 = row.insertCell(1);
  // var cell3 = row.insertCell(2);
  // var cell4 = row.insertCell(3);
  // var buttonCalculate = document.getElementById("buttonCalculate");
  var buttonCreate = document.getElementById("buttonCreate");
  var buttonDelete = document.getElementById("buttonDelete");
}

// bb.onclick = function() {
//   console.log("bb");
// }

// buttonDelete.onclick = function() {
//   console.log("DeleteDeleteDelete");
// }

function displayStuff() {
}

buttonDelete.onclick = function() {
  // console.log("DeleteDeleteDelete...");
  // console.log(stuff);
  // displayStuff();
  // var checkboxes = document.querySelectorAll("tr input.checked");
  //
  // for (var i = 0, l = checkboxes.length; i < l; i++) {
  //     checkboxes[i].onclick = function(e) {
  //         e.stopPropagation();
  //         console.log("checked" + i);
  //
  //     }
    //   //console.log(i);
    // }
}

buttonCreate.onclick = function() {
  //do stuff
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  textCreateItem = document.getElementById("textCreateItem").value;
  textCreatePrice = document.getElementById("textCreatePrice").value;
  createQty = document.getElementById("createQty").value;
  var x = parseInt(itm);
  stuff.push(itm, textCreateItem, textCreatePrice, createQty);
  // document.getElementById("itemName").innerHTML += "<br>" + textCreateItem;
  // document.getElementById("price").innerHTML += "<br>" + "$" + textCreatePrice + ".00";
  // document.getElementById("quantity").innerHTML += "<br>" + "QTY " + createQty;
  tprice = tprice + (textCreatePrice * createQty);
  a = parseInt(numItems);
  b = parseInt(createQty);

  numItems = (a + b);
  itm += 1;
  console.log(itm + " " + textCreateItem + " " + textCreatePrice + " " + createQty);
  cell1.innerHTML = textCreateItem;
  cell2.innerHTML = textCreatePrice;
  cell3.innerHTML = createQty;
  //cell4.innerHTML = "<button class='buttonDelete' id='buttonDelete'>Delete</button>";
  cell4.innerHTML = "<input type='checkbox' class='checkbox'></input>"
  document.getElementById("tprice").innerHTML = "Total Price is $" + tprice + ".00";
  document.getElementById("numItems").innerHTML = "Items in cart: " + numItems;
  // document.getElementById("buttonDelete").innerHTML += "<br>Delete";
  // document.getElementByTagName("table").innerHTML += "<tr><li><br>" + textCreateItem + "</li>" + "<li><br>" + "$" + textCreatePrice + ".00</li><li>Delete " + "</li></tr>";
}
