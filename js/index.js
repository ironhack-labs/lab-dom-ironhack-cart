// ITERATION 1

function updateSubtotal(product) {
  
  var price = (product.querySelector('.price span').innerHTML);
  var quantity = (product.querySelector('.quantity input').value)
  return product.querySelector('.subtotal span').innerHTML = price*quantity
  
}

function calculateAll() {
  // ITERATION 2
  var allProducts = document.getElementsByClassName("product");
  var total = 0
  for (let i = 0; i < allProducts.length; i++) {
    
    updateSubtotal(allProducts[i]);
    total += updateSubtotal(allProducts[i])
    
  }
  //ITERATION 3
  console.log(total)

   document.querySelector("#total-value span").innerHTML = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const dltButtons = document.getElementsByClassName("btn btn-remove")
  console.log(dltButtons)
  for (let i=0; i < dltButtons.length; i++){
  dltButtons[i].addEventListener("click", removeProduct)}
});
