// Iteration 1

let calculateButton = document.getElementsById('calc');

calculateButton.onclick = function(){

  let singleProductPrice = document.getElementsByClassName('product-price')[0].innerHTML.substr;

  let singleProductQuantity = document.getElementsByClassName('the-quantity')[0];

  let singleProductTotal = (singleProductPrice * singleProductQuantity).toFixed(2);

  let individualProductTotalDiv = document.getElementsByClassName('product-total-price')[0].individualProductTotalDiv.innerHTML = '$' + singleProductTotal

// Iteration 2


}