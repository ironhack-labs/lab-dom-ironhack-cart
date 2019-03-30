// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

// // calculatePriceButton.onclick = getTotalPrice;
// // createItemButton.onclick = createNewItem;

// for (var i = 0; i < deleteButtons.length; i++) {
//   deleteButtons[i].onclick = deleteItem;
// }

// document
//   .getElementById("total_button")
//   .addEventListener("click", function() {

//   });
// // };

const butCalcPrice = document.querySelector("#total_button"); // 1° sélectionne le bouton "Calculate Prices"
butCalcPrice.onclick = calcPrice; // 2° au clic, on appelle la fonction "calcPrice"

function calcPrice() {
  // 3° fonction qui calcule le prix total d'un produit et affiche le total
  //select all elements
  const priceUnit = document.querySelectorAll(".unit_cost"); // sort des node list (auxquels on ne peut pas appliquer les fonctions reduce, filter etc. classiques)
  const quantityOrder = document.querySelectorAll(".input_quantity");
  const total_price = document.querySelectorAll(".total_price"); // node list de tous les total price

  var sum = 0;

  const arrayPrice = Array.from(priceUnit).map(element =>
    element.textContent.replace("$", "")
  ); // donc on transforme les node list en array
  const arrayQuantity = Array.from(quantityOrder).map(element => element.value);

  for (let i = 0; i < arrayPrice.length; i++) {
    let total = arrayPrice[i] * arrayQuantity[i];
    sum += total;
    total_price[i].textContent = `$${total}.00`;
  }
  console.log(sum);
  const total_sum = document.querySelector("#newtotal");
  total_sum.textContent = sum;
  // console.log(typeof total_sum);

  // function getTotalPrice() {}
}
const deleteProduct = document.querySelectorAll(".btn-delete");
console.log(deleteProduct);

deleteProduct.forEach(el => (el.onclick = deleteItem));

// console.log(pickproduct);

function deleteItem(evt) {
  //
  const button = evt.target || evt.srcElement;
  button.parentElement.parentElement.remove();
  // console.log(button, this);
}

// Object.assign(total_sum, { key: sum });
// return total_sum.key;
//const productNumber = total_price;

//const total_sum = document.querySelector(".btn-success");
// const totalSum = Array.from(total_sum).push(totalPrice);
// return (total_sum.value = `${totalSum}.00`);

//for (let j = 0; j < )
// totalSum.push(totalPrice);
// const totalSum = (Array.from(total_price).reduce(
//   (a, b) => a + b
// ).textContent = `$${total_sum}.00`);
