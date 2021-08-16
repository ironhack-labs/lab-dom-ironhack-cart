// ITERATION 1
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes 
  const price = product.querySelector(".price span").innerHTML
  console.log(price)
  const quantity = product.querySelector(".quantity input").value
  console.log(quantity)
  const subtotalValue = price * quantity
  let result = product.querySelector(".subtotal span")
  result.innerHTML = subtotalValue
return parseFloat (result.innerHTML); 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  console.log("This is the calculate all section")
 
  // end of test
  
  // ITERATION 2
  //... your code goes here
  let allProducts = document.querySelectorAll('.product');
  //console.log(allProducts)
  console.log(allProducts[0])
  console.log(allProducts[1])

  for(i=0;i < allProducts.length; i++){
    total = document.getElementsByClassName("total-value").span
    product = updateSubtotal(allProducts[i]) 
    console.log(product)
    
    total.innerHTML += product
     //document.querySelec
    console.log(total)
  }



  //for(i=0; i < allProducts.length; i++){
    //let cart = allProducts[i]
   //updateSubtotal(cart)
  //}
  
  
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
