// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  let subtotal = price * quantity;

  product.querySelector(".subtotal span").innerText = subtotal;

  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = Array.from(document.querySelectorAll("tr.product"));
  console.log(products)

  let total = 0;

  products.forEach(product => {

    let updatedSubtotal = updateSubtotal(product);
    total += updatedSubtotal
    //console.log(product)
  })

  //console.log(total)

  //console.log(document.querySelector("#total-value span"))

  // ITERATION 3
  document.querySelector("#total-value span").innerText = total;
}

// ITERATION 4 - Alternative use .remove() function

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let productToBeRemoved = target.parentNode.parentNode
  console.log(productToBeRemoved)
  productToBeRemoved.parentNode.removeChild(productToBeRemoved)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  console.log("Create was clicked")

  let newName = document.getElementById("new-product-name").value
  let newPrice = document.getElementById("new-product-price").value
  //console.log(newName)
  //console.log(newPrice)

  let productNode = document.querySelector("tr.product")
  //console.log(productNode)
  let newProduct = productNode.cloneNode(true)
  newProduct.querySelector(".price span").innerHTML = newPrice
  newProduct.querySelector(".name span").innerHTML = newName
  //console.log(newProduct)
  let productsParent = document.querySelector("tbody")
  //console.log(productsParent)
  productsParent.appendChild(newProduct)

  document.getElementById("new-product-name").value = "";
  document.getElementById("new-product-price").value = "0";

  newProduct.querySelector(".btn-remove").addEventListener("click", removeProduct);

  // Add eventlistener to remove button
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = Array.from(document.querySelectorAll("button.btn-remove"))
  //console.log(removeBtns)
  removeBtns.forEach( btn => {
    btn.addEventListener("click", removeProduct);
  })

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);

});
