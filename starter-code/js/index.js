function getPrice() {
  var arr = document.getElementsByClassName("aa");
  for (i=0; i < arr.length; i++) {
    var arr2 = document.getElementsByClassName("bb");
    for (j=0; j < arr2.length; j++) {
      if (i == j) {
        var result = arr[i].innerHTML;
        var regex = /(\d+)/g;
        var price = result.match(regex);
        var qty = arr2[j].value;
        var realQty = Number(qty);
        var totalPrice = price * realQty;
        var arr3 = document.getElementsByClassName("cc");
        for (k=0; k < arr3.length; k++) {
          if (j==k){
          document.getElementsByClassName("cc")[k].innerHTML = '$'+totalPrice;
          console.log(totalPrice); 
          }
        }
      }
    }
  }
}
  
window.onload = function(){	
var x = document.getElementById("calc-prices-button");
    x.addEventListener("click", getPrice,false);
//var y = document.getElementById("calc-prices-button");
//    y.addEventListener("click", getPrice,false);

}
