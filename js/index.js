// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const productOfElements = price * quantity;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = productOfElements;

  // console.log("Calculating subtotal, yey!");

  return productOfElements;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productList = document.querySelectorAll(".product")
  productList.forEach((product) => updateSubtotal(product))
  //... your code goes here

  // ITERATION 3
  const subtotals = document.querySelectorAll(".subtotal span")
  const subtotalsArr = [...subtotals].map((element) => {
    return parseFloat(element.innerHTML)
  })

  const total = document.querySelector("#total-value span");
  const suma = subtotalsArr.reduce((a, c) => {
    return a + c
  }, 0);

  total.innerHTML = suma
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const eliminateProduct = target.parentNode.parentNode;

  eliminateProduct.parentNode.removeChild(eliminateProduct);
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {

  let productName = document.querySelector(".create-product input[type='text']").value

  let unitPrice = document.querySelector(".create-product input[type='number']").value;

  let newProduct = document.querySelector(".product")
  let cloneProduct = newProduct.cloneNode(true)
  cloneProduct.querySelector(".name span").innerHTML = productName;
  cloneProduct.querySelector(".price span").innerHTML = unitPrice;

  const itemsList = document.querySelector("tbody")
  itemsList.appendChild(cloneProduct)
  productName.value = "vacio"
  unitPrice.value = 0
  //TO-DO: refactorizar
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) =>
    button.addEventListener("click", removeProduct)
  );
  calculateAll();
  //... your code goes here
}

window.addEventListener("load", () => {

  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(button => button.addEventListener("click", removeProduct))

  const createButton = document.querySelector("#create");
  createButton.addEventListener("click", createProduct)
})