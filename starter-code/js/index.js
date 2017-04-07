// qty

function getQty() {
    var qty = document.querySelector("#qty").value;
    document.querySelector("#total").innerHTML = qty;
    return qty;
}

getQty();


// qty2

function getQty2() {
    var qty2 = document.querySelector("#qty2").value;
    document.querySelector("#total2").innerHTML = qty2;
    return qty2;
}

getQty();


// Price

function getPrice() {
    var price = parseInt(document.querySelector("#product").innerHTML);
    document.querySelector("#total").innerHTML = price * getQty();
}

getPrice();

// Price 2

function getPrice2() {
    var price2 = parseInt(document.querySelector("#product2").innerHTML);
    document.querySelector("#total2").innerHTML = price2 * getQty2();
}

getPrice2();

// get elements by class name then do a loop


function totalPrice() {
  var sum = 0;
var collection = document.getElementsByClassName("money");
for (var i = 0; i < collection.length; i++) {
  console.log(parseInt(collection[i].innerHTML));
  sum = sum + parseInt(collection[i].innerHTML);
}
 console.log('SUM: ',sum);
 document.querySelector("#totalPrice").innerHTML = sum;
}
totalPrice();



function removeItem() {
    var remove = document.querySelector("#itemSubject").remove("itemSubject");
    // setTimeout(function() { alert("Your shopping cart is empty"); }, 1000);
}
removeItem();

function removeItem2() {
    var remove = document.querySelector("#itemSubject2").remove("itemSubject2");
}
removeItem2();



// function removeItem() {
//     for (var i = 0; i < remove.length; i++) {
//       remove[i].addEventListener('click', function (e) {
//         e.currentTarget.parentNode.parentNode.remove();
//       });
//   }
// console.log(removeItem());
// }
//




// var create = document.createElement("tr");
// create.innerHTML = '<tr class="nextArea" id="itemSubject2"> <th scope="row"><span id="productName">Stickers</span></th> <td class="price2"> <span class="dolar">$</span><span id="product2">2</span></td> <td class="qty2"> <form class="form-inline"><div class="form-group"><label for="inputQty">QTY</label><input type="text" id="qty2" class="form-control mx-sm-3" maxlength="3" aria-describedby="qtyItem2">  </div>  </form></td><td <span class="dolar">$</span><span class="money" id="total2">0.00</span></td><td class="text-right"><button class="delate btn btn-danger" type="button" onclick="removeItem2();totalPrice()" value="delate"><input id ="delateButton" class="delateItem" type="button"  value="Delate">  </button> </td></tr>';
//
// var include = document.querySelector(".nextArea");
//    include.appendChild( document.createTextNode(create));
//
//
// var button = document.querySelector(".nextArea");
//
//    button.onclick = function(){
//   include.appendChild( document.createElement(create));
// };


  //  var including =  create.appendChild( document.createTextNode(' <tr class="nextArea" id="itemSubject2"> <th scope="row"><span id="productName">Stickers</span></th> <td class="price2"> <span class="dolar">$</span><span id="product2">2</span></td> <td class="qty2"> <form class="form-inline"><div class="form-group"><label for="inputQty">QTY</label><input type="text" id="qty2" class="form-control mx-sm-3" maxlength="3" aria-describedby="qtyItem2">  </div>  </form></td><td <span class="dolar">$</span><span class="money" id="total2">0.00</span></td><td class="text-right"><button class="delate btn btn-danger" type="button" onclick="removeItem2();totalPrice()" value="delate"><input id ="delateButton" class="delateItem" type="button"  value="Delate">  </button> </td></tr>'));








// function totalPrice2() {
//   var totality = getPrice() +  getPrice2();
//   document.querySelector("#totalPrice").innerHTML += totality;
// }
//
// totalPrice2();




// function totalPrice() {
//   var total = parseInt(document.querySelector("#total").innerHTML);
//   document.querySelector("#totalPrice").innerHTML = total;
// }
//
// totalPrice();
//
// function totalPrice2() {
//   var total2 = parseInt(document.querySelector("#total2").innerHTML);
//   document.querySelector("#totalPrice").innerHTML = (total2 += dimo);
// }
//
// totalPrice2();



// function totalPrice() {
//   var total = parseInt(document.querySelector("#total2").innerHTML);
//   document.querySelector("#totalPrice").innerHTML = total ;
// }
//
// totalPrice();




// function getQty() {
//     var x = document.getElementById("qty1").innerHTML;
// }
//
// function getTotalPrice (price, qty) {
//   getPrice.call(this, price);
//   getQty.call(this, qty);
//   this.total = function() {
//     return this.price * this.qty;
//   };
// }
//
// function changePrice (price) {
//   getTotalPrice.call(this, price);
//   this.name = name;
//   this.receiveDamage =  function(damage) {
//    this.health -= damage;
//  };
//  }


//
// var totalToPay = document.getElementById('total-1');
// totalToPay.modify = getTotalPrice.total;

// function deleteItem(e){
//
// }
