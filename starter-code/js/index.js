var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

class Product {
  constructor (nameParam, priceParam, amountParam) {
    this.name = nameParam;
    this.price = priceParam;
    this.amount = amountParam;
    this.subtotal = this.price * this.amount;
  }
}; 

// function updateSubtot(product) {
//   // Iteration 1.1
//   let priceColumn
//   let price = document.querySelector(`.pu > span`).innerText;
//   let quantity = document.querySelector(`input`).value;
//   return  product = parseFloat(price) * parseFloat(quantity);
// }
// function calcAll() {
//   // Iteration 1.2
// }
// $calc.onclick = calcAll;
// ​
let cartProducts = [new Product (`IronBubble-head`,25,1), new Product(`carpet`,1,10), new Product (`notebook`,3,5)];

function paintCart() {
  $cart.innerHTML = ""
  cartProducts.forEach(productInCart, idx => {
    let cartNewElement = document.createElement("tr")
    cartNewElement.className = "product";
    cartNewElement.innerHTML = `<td class="name"><span>${productInCart.name}</span></td><td class="pu"><span>$</span>${productInCart.price}<span></span></td><td class="qty"><input value="${productInCart.amount}" id="input${idx}></td><td class="subtot"><span>$</span><span>${productInCart.subtotal}</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td>`
    $cart.appendChild(cartNewElement);
  })
}


paintCart()

