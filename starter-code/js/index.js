function calculatePrices(number){
  let quantity = document.getElementsById("unidadesBubble");
  let price = document.getElementsByClassName("price");
  let priceTotal = (quantity * price)
  var final = document.getElementById("totalBubble");
  final.innerHTML=("$"+priceTotal);
  return priceTotal
}

function deleteItem(e){
  
}