// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  
  let subTotalPrice = price * quantity;

  let subtotalValue = product.querySelector('.subtotal span');

  subtotalValue.innerHTML = subTotalPrice;

  return subtotalValue;
  
}



function calculateAll() {
  
  // ITERATION 2
  
  let cartElement = document.querySelectorAll(".product");
  let totalSubPrice = 0;

  cartElement.forEach(function (cartItem){
    totalSubPrice += updateSubtotal(cartItem);
  });



  // ITERATION 3
  //... your code goes here
  let totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = totalSubPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  

  //FIRST WAY OF DOING IT
 
  /*let btnParent = target.parentNode.parentNode;
  btnParent.remove();*/

  
  //SECOND WAY OF DOING IT
  target.closest("tr").remove();

}



// ITERATION 5

function createProduct() {
  
  
  console.log("lol");

  let newProductName = document.querySelector("#new-product-name").value;
  console.log(newProductName);

  let newProductPrice = document.querySelector("#new-product-price").value;
  console.log(newProductPrice);
  

  let rowToClone = document.querySelector(".product").cloneNode(true);

  //rowToClone.querySelector("td")[0].innerHTML = newProductName;
  
  



}





window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  let removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(function(removeBtn){
    removeBtn.addEventListener('click', removeProduct);
  })

  

});


window.addEventListener("load", () => {
let createButtons = document.querySelectorAll("#create");
  createButtons.forEach(function(createBtn){
    createBtn.addEventListener('click', createProduct);
  })
})