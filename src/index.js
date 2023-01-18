// ITERATION 1

function updateSubtotal(product) {


  let price = product.querySelector(".price span").innerText
  let quantity = product.querySelector(".quantity input").value

  let subTotalPrice = price * quantity


  product.querySelector(".subtotal span").innerText = subTotalPrice 
  return subTotalPrice
} 

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let allProducts = document.getElementsByClassName("product")
  
  for(let i=0; i<allProducts.length;i++){
    updateSubtotal(allProducts[i])
  }

  // ITERATION 3
  let sumaTotal = 0
  for(let i=0; i<allProducts.length; i++){
    sumaTotal += updateSubtotal(allProducts[i])
  }

  document.querySelector("#total-value span").innerText = sumaTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let product = target.parentNode.parentNode
console.log(product)

    if (product.parentNode) {
  product.parentNode.removeChild(product)
  calculateAll()
}
}

// ITERATION 5

function createProduct() {
  let newProduct = document.querySelector(".create-product input").value
  let newPrice = document.getElementById("new-price").value



  let addingProductRow =  document.querySelector(".product")
  addingProductRow = addingProductRow.cloneNode(true)
  let emptyRow = document.createElement("tr")

  let fatherTable = document.querySelector("tbody")
  
  fatherTable.appendChild(emptyRow)
  fatherTable.replaceChild(addingProductRow, emptyRow)

  document.querySelector(".name span").innerText = newProduct
  document.querySelector(".price span").innerText = newPrice
  
  document.querySelector(".create-product input").value = "Product Price"
  document.getElementById("new-price").value= 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeButons = document.getElementsByClassName("btn btn-remove")
  
  for(let i=0; i<removeButons.length; i++){
    removeButons[i].addEventListener('click', removeProduct)
  }

  let addProduct = document.getElementById("create")
  addProduct.addEventListener('click', createProduct)

});
