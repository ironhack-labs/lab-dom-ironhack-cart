// ITERATION 1

function updateSubtotal(product) {
  //innerText should extract value from selector
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  //console.log(price.innerText);
  // console.log(quantity.value);

  //calculate subtotal value
  const subtotalCalc = price.innerText * quantity.value;
  //select element that holds subtotal value
  const subtotal = product.querySelector(".subtotal span");
  // set calculated subtotal value to subtotal element
  subtotal.innerText = subtotalCalc;
  //console.log(`this is ${subtotalCalc}`);
  return subtotalCalc;
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //get to each tr with class .product
  const eachProduct = document.getElementsByClassName("product");
  //iterate through each product to call updateSubtotal on every product
  let sum = 0;
  for (let i = 0; i < eachProduct.length; i++) {
    updateSubtotal(eachProduct[i]);
    sum += updateSubtotal(eachProduct[i]);
  }

  // ITERATION 3
  //get total price element
  const totalPriceEl = document.querySelector("#total-value span");
  totalPriceEl.innerText = sum;
  //const totalPrice // use reduce on subtotals
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const parent = target.closest(".product");
  parent.parentNode.removeChild(parent);
  //access parent of product
  // const productParent = document.querySelector("#cart tbody");
  //console.log(productParent); - ok, parent with 2x tr class "product" children

  //remove child - DOES NOT WORK
  //const removedChild = productParent.removeChild(productParent[target]);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}
//check brackets rest should be ok
window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  //... your code goes here
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((remButton) => {
    remButton.addEventListener("click", (event) => {
      removeProduct(event);
      //Pauline said I need to call removeproduct() with event as paramener
    });
  });
});
