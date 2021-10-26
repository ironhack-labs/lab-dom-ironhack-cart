// ITERATION 1

function updateSubtotal(product) {
 const price = product.querySelector(".price span").innerText;
 const quantity = product.querySelector(".quantity input").value;
 const subtotalPrice = price * quantity;
 product.querySelector(".subtotal span").innerText = subtotalPrice;
 return subtotalPrice;
}

function calculateAll() {
  const severalProducts = document.getElementsByClassName("product");
  let total =0; 
  for( let i=0;i<severalProducts.length;i++){
   total = total + updateSubtotal(severalProducts[i])
  }
  document.querySelector("#total-value span").innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  const table = product.parentNode;
  table.removeChild(product);
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtns = document.getElementsByClassName("btn btn-remove");
  for(let i=0; i<removeProductBtns.length;i++){
    removeProductBtns[i].addEventListener("click",removeProduct);
  }
});
