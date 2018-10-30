// Iteration 1 Ironhack Cart, DOM manipulating HTML for users

let calculateButton = document.getElementsById('calc');

calculateButton.onclick = function(){
    let productPrices = document.getElementsByClassName('product-price');

    let fullTotal = 0;

for(let i = 0; i < productPrices.length; i++){
  
  let singleProductPrice = productPrices[i].innerHTML.substr(1)

  let singleProductQuantity = document.getElementsByClassName('the-quantity')[i].value;

  let singleProductTotal = (singleProductPrice * singleProductQuantity).toFixed(2);

  let individualProductTotalDiv = document.getElementsByClassName('product-total-price')[0].individualProductTotalDiv.innerHTML = '$' + singleProductTotal
  fullTotal += Number(singleProductTotal)
}
// Iteration 3


document.getElementById('actual-total').innerHTML = "$"+fullTotal.toFixed(2);


// Iteration 2
// combined iteration 1 functions, and put into for loop //
// parseInt removes a decimal point

// Iteration 4

}

let deleteButtons = document.getElementsByClassName('btn-delete');
console.log(deleteButtons.length)

for(let i = 0; i < deleteButtons.length; i++){
  deleteButtons[i].onclick = function(e){
    e.currentTarget.parentElement.remove()
  }
}

document.getElementById('create').onclick = function(){
  
  let newProductName = document.getElementById('new-product-value').value;
  let newProductPrice = document.getElementById('new-product-price').value;
  newProductPrice = Number(newProductPrice).toFixed(2);

  let newThing = document.createElement('div')
  newThing.className = "row";

  newThing.innerHTML = `
  <span class="product-name">${newProductName}</span>
  <span class="product-price">$${}</span>
  <label>QTY</label>
  <input class="the-quantity" type="number">
  <span class="product-total-price">$0.00</span>
  <button class="btn btn-delete">Delete</button
  ` 
  
  document.getElementById('master-div').appendChild(newThing)
  document.getElementById('new-product-name').value = ""
  document.getElementById('new-product-price').value = ""

  newThing.getElementsByClassName('btn-delete')[0].onclick = function(e){
    e.target.parentElement.remove()
  }
}
