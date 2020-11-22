// ITERATION 1

function updateSubtotal(product) {
  
  //... your code goes here

  const price = Number(product.querySelector('.price span').textContent);
  const quantity = Number(product.querySelector('.quantity input').value);
  const subTot = product.querySelector(".subtotal span");
  let subtotal = price * quantity;
  subTot.innerHTML = subtotal;
  return subtotal; 

}


function calculateAll() {
  
// ITERATION 2
  //... your code goes here

  const allProducts = [...document.getElementsByClassName('product')];
    allProducts.forEach (prod => {
    let final = updateSubtotal(prod);
    console.log(final);
  });


  // ITERATION 3
  //... your code goes here

  const finalTotal = document.querySelector("#total-value span"); //final total
  const allSubtotals = [...document.querySelectorAll(".subtotal span")]
    .map((price) => Number(price.textContent))
    .reduce((acc, curValue) => acc += curValue);
  console.log(allSubtotals);
  finalTotal.innerHTML = allSubtotals; 

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  document.querySelector("tbody").removeChild(target.parentNode.parentNode);
  calculateAll();
}
 
// ITERATION 5

function createProduct() {
  //... your code goes here

  
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
  //... your code goes here

  const buttonsRmv = document.querySelectorAll(".btn-remove"); 
  buttonsRmv.forEach((button) => {
    button.onclick = removeProduct;
  });   
  
});
