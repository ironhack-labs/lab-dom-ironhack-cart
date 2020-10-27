// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText ;  // innerHTML klappt auch
  const quantity = product.querySelector(".quantity input").value; 
  const subtotal = Number(price) * Number(quantity);
  const subtotalElement = product.querySelector(".subtotal span"); 
  subtotalElement.innerHTML = subtotal;
  return subtotal 
}

 // ITERATION 2
  //... your code goes here

function calculateAll() {
  const cartItemElements = document.getElementsByClassName("product");
  let totalValue = 0;
  for(let cartItemElement of cartItemElements) {
    totalValue += updateSubtotal(cartItemElement);
  }

    // ITERATION 3
  //... your code goes here

  let total = document.querySelector("#total-value span");
   
  total.innerHTML = totalValue; 

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove("product");


  // console.log('The target in remove is:', target);
  
  
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector(".create-product");
  console.log(newProduct); 

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButton = document.querySelectorAll(".btn-remove"); 

  removeButton.forEach(function(item)
  {item.addEventListener('click', removeProduct);})

  let createButton = document.getElementById('create');
   createButton.addEventListener("click", createProduct);  
});
