// ITERATION 1

function updateSubtotal(product) {



// 1. find the price and quantity value of the product
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;

let subtotalNumber = price * quantity
// console.log(subtotalNumber)

//2.  manipulate/update DOM with  new value 
product.querySelector('.subtotal span').innerHTML  = subtotalNumber;

return subtotalNumber

}

function calculateAll() {
  
  // get total products 
  let products = document.getElementsByClassName("product");
  
  let prodctsPrice = updateSubtotal(products[0])

  let Sum = 0;
  totalSum = document.getElementById('total-value')
 
  let allprices = document.querySelectorAll('.subtotal span').value
 
  for (i = 0; i < products.length; i++) {

    updateSubtotal(products[i]) 
    Sum += updateSubtotal(products[i])
  }

  totalSum.innerHTML = "Total: " + "$" +Sum 

}



// ITERATION 4
function removeProduct(event) {
  
  const target = event.currentTarget;
  
  target.parentNode.parentNode.remove();


}

// ITERATION 5


// let productInputText = productInput.querySelector("text");

// let productInputNumber = productInput.getElementsByTagName("input [2]");



function createProduct() {
  //... your code goes here


  let productInput = document.querySelectorAll(".create-product input")[0].value;
  let productInput2 = document.querySelectorAll(".create-product input")[1].value;

  
let NewProduct = document.createElement(`tr`)
NewProduct.innerHTML = `
<td class="name">
  <span></span>
</td>
<td class="price">$<span></span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`


let nw1 = NewProduct.querySelectorAll('span')[0]
nw1.innerHTML = productInput
console.log(nw1)

let nw2 = NewProduct.querySelectorAll('span')[1]
nw2.innerHTML = productInput2 + ('.00')

console.log(NewProduct)

let table = document.querySelector('tbody')
console.log(table)

table.appendChild(NewProduct)

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let AllremoveButtons = document.querySelectorAll('.btn-remove')
  
  
  for (i = 0; i < AllremoveButtons.length ; i++ ) {

    AllremoveButtons[i].addEventListener("click", removeProduct)

  }

  let el = document.getElementById("create").addEventListener("click", createProduct);

  console.log(el)

  

  //... your code goes here
});
