let calculateButton = document.getElementById("calculate");
calculateButton.onclick = function() {
  let productPrices = document.getElementsByClassName("producPrice");
  for (let i = 0; i < productPrices.length; i++) {
    let eachPrice = Number(productPrices[i].innerHTML.substr(1));
    // console.log("price", Number(productPrices[i].innerHTML.substr(1)));
    let qty = Number(document.getElementsByClassName("quantity")[i].value);
    let productTotal = eachPrice * qty;
    let total = document.getElementsByClassName("total-product-price")[i];
    total.innerHTML = "$" + productTotal;
  }
};
//make an array
// let calculateButton = document.getElementById('calculate');
// calculateButton.onclick = function(){
//   let productPrices = document.getElementsByClassName("producPrice");
//   for(let i = 0; i < productPrices.length; i++){
//     productPrices[i].innerHTML;
//     let qty = document.getElementsByClassName("quantity")[i].value
//     console.log(qty);
//     let productTotal = Number((productPrices * qty));
//     console.log(productTotal);
//     let total = document.getElementsByClassName('total-product-price')[i]
//     total.innerHTML = Number(productTotal);

//   }
// }
  
  
  // let calculatePriceButton = document.getElementById('calc-prices-button');
  // let price = document.getElementsByClassName('priceColumn');
  // let qty = document.getElementsByClassName('quantity');
  // let cost = document.getElementsByClassName("cost");
  // let convertToNumber = document.getElementsByTagName("span");
  
  // calculatePriceButton.onclick = function(){
  //   Document.get()
    // price.setAttribute("span", Number);
    // console.log(price);
  // totalCost = 0;
  // console.log(price);
  // console.log(qty);
  // let total = 0;
  // price.innerHTML = " ";
  // let overallTotal = document.getElementsByClassName('totalTotal'[0]);
  // let returnTotalValue = 0;
  
  // console.log(convertToNumberQtytoNumber[0].value);
  // for (let i = 0; i <= qty.length; i++){

      
  //     console.log(qty[i].value);
      // document.getElementsByClassName("cost")[i].innerHTML = "$" + ((Number((price[i].innerHTML).substr(1)))*Number(qty[i].value))
      // total += ((Number((price[i].innerHTML).substr(1)))*Number(qty[i].value));
      // console.log(total);
// }
// }