var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var productElements = document.querySelectorAll(".product"); // delivers and array

var someProducts = [
  { name: "Iron Bubble head", ppu: 15.00 },
  { name: "Jackhammer 1", ppu: 55.00 },
  { name: "Rocket", ppu: 19374.00 },
  { name: "Spoon", ppu: 512.00 },
  { name: "Jeans", ppu: 12.00 },
  { name: "Chopsticks", ppu: 4.00 }
];

var cartTable = document.querySelector("#cart tbody");
var addBtn = document.getElementById("addProd");
var calcBtn = document.getElementById("calc");
var delBtns = [...document.querySelectorAll(".btn-delete")];

// updates SUBTOTAL
function updateSubtot($product) {
  var prodPrice = $product.querySelector("td.pu span").innerHTML;
  console.log(prodPrice);
  console.log(parseFloat(prodPrice));
  var prodQty = $product.querySelector("input");

  prodQty.addEventListener("change", function() {
    //console.log(this.value);
    var subtotal = $product.querySelector("td.subtot span");
    subtotal.innerHTML = parseInt(prodPrice) * parseInt(prodQty.value);
  });
  var subtotalValue = parseInt(prodPrice) * parseInt(prodQty.value);
  
  return subtotalValue
}
// UPDATES OVERALL CART SUM
function calcAll() {
  // Iteration 1.2
  var subtotalElements = document.querySelectorAll(".subtot span"); // delivers and array of stubtotals
  var sum = 0;
  for (let i = 0; i < subtotalElements.length; i++) {
        sum += parseInt(subtotalElements[i].innerHTML);
  }
  var ShowedPrice = document.querySelector("h2 span");
  console.log("showedPrice" + ShowedPrice);
  ShowedPrice.innerHTML = parseInt(sum);
  console.log(sum)
}

// ADD RANDOM PRODUCT
function addProduct(prodObj) {
  // HTML Element
  var newProdRow = document.createElement("tr");
  console.log(newProdRow);
  
  newProdRow.innerHTML = `
  <td class="name">
    <span>${prodObj.name}</span>
  </td>

  <td class="pu">
    $<span>${prodObj.ppu}</span>
  </td>

  <td class="qty">
    <label>
      <input type="number" value="0" min="0">
    </label>
  </td>

  <td class="subtot">
    $<span>0</span>
  </td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
`
  
  // Text nodes
  console.log("this" + cartTable)
  //Append new elements to the existing table
  cartTable.appendChild(newProdRow);
  newProdRow.setAttribute("class", "product")
  //updating the selectors
  productElements = document.querySelectorAll(".product");
  delBtns = [...document.querySelectorAll(".btn-delete")];
  for (let i = 0; i < productElements.length; i++) {
    updateSubtot(productElements[i]); 
  }
  delBtns.forEach(element => {
    deleteRow(element);
  });
}

function deleteRow (delBtn) {
  delBtn.addEventListener("click", function(e){
    var deleteNode = e.currentTarget.parentNode.parentNode;
    console.log("to delete " + deleteNode);
    $cart.removeChild(deleteNode);
    calcAll();
  })
}

// EVENTLISTENERS 
addBtn.addEventListener("click", function(){
  event.preventDefault();
  addProduct(someProducts[Math.floor(Math.random()*someProducts.length)]);
  
})

calcBtn.addEventListener("click", function(){
  event.preventDefault();
  calcAll();
})

delBtns.forEach(element => {
  deleteRow(element);
});

$calc.onclick = calcAll;
updateSubtot(productElements[0]);



