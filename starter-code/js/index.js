function calculatePrice () {
  var price = document.getElementsByClassName('prices');
  var unit = document.getElementsByTagName('input');
  var priceTotales = document.getElementsByClassName('priceTotal');
  var sum = 0;

  for (var i = 0; i < price.length; i++) {
     var totalPrice = price[i].innerHTML * unit[i].value;
     priceTotales[i].innerHTML = totalPrice;
     console.log(sum);
     sum = sum + parseInt(priceTotales[i].innerHTML);
     console.log(sum);
   }

  document.getElementById("sumT").innerHTML = sum;
}

function del(){
  var btn = document.getElementsByClassName("product");
  var div = document.getElementById("containeres");

  div.removeChild(this.btn);
}
