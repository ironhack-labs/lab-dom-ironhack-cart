let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');


//Here I make a Product class to construct all the new products.

class Product {
  constructor (nameParam, priceParam, amountParam) {
    this.name = nameParam;
    this.price = parseFloat(priceParam).toFixed(2);
    this.amount = parseFloat(amountParam);
    this.subtotal = (this.price * this.amount).toFixed(2);
  }
};

//Here I define my initial array of products

let cartProducts = [new Product (`IronBubble-head`,25,5)];

// Here I define the function to paint the cart.

function paintCart() {
  $cart.innerHTML = "";
  for (let i = 0; i < cartProducts.length; i++) {
    let cartNewElement = document.createElement("tr")
    cartNewElement.className = "product";
    cartNewElement.innerHTML = `<td class="name"><span>${cartProducts[i].name}</span></td>
    <td class="pu"><span>$</span>${cartProducts[i].price}</span></td>
    <td class="qty"><label><input type="number" value="${cartProducts[i].amount}" id="${i}" min="0"/></label></td>
    <td class="subtot"><span>$</span><span class="subtotals">${cartProducts[i].subtotal}</span></td>
    <td class="rm"><button class="btn btn-delete">Delete</button></td>`
    $cart.appendChild(cartNewElement);
  }
}
function calcAll() {
  paintCart();
  var i = 1;
  var sum = 0;
  while (i < $cart.rows.length) {
      sum += parseFloat(table.rows[i].cells[3].innerHTML)
      i++;
  }
  document.querySelector('h2').innerHTML = `${sum}`;
}

$calc.onclick = calcAll;


