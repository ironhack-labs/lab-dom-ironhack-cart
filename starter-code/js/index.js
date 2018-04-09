var calcPrice = document.getElementsByClassName("btn-success")[0]



calcPrice.onclick = function(){

var firstQuantity = document.getElementsByClassName("price")
var secondQuantity = document.getElementsByClassName("quantity")
var thirdQuantity= document.getElementsByClassName("subTotal")
var total = 0;    
  for( var i = 0; i < firstQuantity.length; i++) {
      
  var result = secondQuantity[i].value*firstQuantity[i].innerHTML.replace("$","") ;
  total += result;    
  thirdQuantity[i].innerHTML = "$" + result.toFixed(2);
  }

  console.log(total)
  document.getElementById("totalPrice").innerHTML = "Total Price: $" + total;
} 

var newElement = document.createElement('span')
console.log(newElement);
newElement.setAttribute('class','alberto');
console.log(newElement);
newElement.innerHTML = 'Fer se adelanta';
console.log(newElement);
 


var del =  document.getElementsByClassName("btn-delete")[0]

del.onclick = function () {
  var deleteAll = document.getElementById('del');

deleteAll.innerHTML = "";
  
}

var del =  document.getElementsByClassName("btn-delete")[1]

del.onclick = function () {
  var deleteAll = document.getElementById('del1');

deleteAll.innerHTML = "";
  
}

var del =  document.getElementsByClassName("btn-delete")[2]

del.onclick = function () {
  var deleteAll = document.getElementById('del2');

deleteAll.innerHTML = "";
  
}

var del =  document.getElementsByClassName("btn-delete")[3]

del.onclick = function () {
  var deleteAll = document.getElementById('del3');

deleteAll.innerHTML = "";
  
}

var del =  document.getElementsByClassName("btn-delete")[4]

del.onclick = function () {
  var deleteAll = document.getElementById('del4');

deleteAll.innerHTML = "";
  
}


var button = document.getElementById('button')

button.onclick = function(){
  
 console.log('Hello world');
}



  //var input = document.getElementsById('input')[0];
  //input.innerHTML = 'input';
//console.log(input.innerHTML);