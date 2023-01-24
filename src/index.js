// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;

  const subtotal = price*quantity;
  let total = product.querySelector(".subtotal span");

  total.innerHTML = subtotal.toFixed(2)

  return subtotal;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName("product");
 let total = 0;
 for (let i = 0; i < allProducts.length; i++) {
  total +=updateSubtotal (allProducts [i]);
 }
  document.querySelector("#total-value span") .innerHTML = total.toFixed(2);
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const productRow = target.parentNode.parentNode;
  let parentRow = productRow.parentNode
  parentRow.removeChild(productRow);

  calculateAll();

  
  
}

// ITERATION 5

function createProduct() {
  
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButtons = document.querySelectorAll(".btn-remove");
  for ( let i=0; i< removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", removeProduct );
  }
});
