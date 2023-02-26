// ITERATION 1

function updateSubtotal(product) {
  /* console.log("Calculating subtotal, yey!"); */
  //... your code goes here
  let price = product.querySelector(".price span").innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let subtotalPrice = price * quantity;
  product.querySelector(".subtotal span").innerHTML = subtotalPrice
  return subtotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  /* const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct); */
  // ITERATION 2
  /* console.log(document.querySelector(".product")) */
  let products = document.getElementsByClassName("product")
  for (let i = 0; i < products.length; i++) {
    /* console.log(products[i]) */
    updateSubtotal(products[i])
  }
  // ITERATION 3
  let totalValue = []
  let subTotals = document.getElementsByClassName("subtotalMoney")
    console.log(subTotals)
  for (let i = 0; i < subTotals.length; i++){
    console.log(subTotals[i].innerHTML)
    totalValue.push(subTotals[i].innerHTML)
  }
  console.log(totalValue)

  let totalPrice = totalValue.reduce(function(a, b){
    return (a * 1) + (b * 1);
  });

  console.log(totalPrice)

  document.querySelector("#total-value span").innerHTML = totalPrice
  // Me complique la vida pero no me di cuenta que mi array era de strings
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  let elementDelete = event.currentTarget
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeProductBtn = document.getElementsByClassName("btn-remove");
  removeProductBtn.addEventListener("click", removeProduct).currentTarget;
});
