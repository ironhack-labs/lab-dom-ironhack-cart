// ITERATION 1
function updateSubtotal(product) {
  // The obtain the subtotal of one product from the cart

  // Selection of the targets: the price, the quantity and the subtotal
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector(".subtotal span")

  // Extract the values from price and quantity to calculate the subtotal
  let priceObj = price.innerText
  let quantityObj = quantity.value
  let subtotalObj = priceObj * quantityObj

  // Change the subtotal in the corresponding place
  subtotal.innerText = subtotalObj;

  return subtotalObj
 
}

function calculateAll() {
   // ITERATION 2 & 3
  
  // Selection of all the products on the list
  const allProduct = document.querySelectorAll('.product');
  // Define the total quantity to start
  let total = 0
  // Calculate the subtotal for each product and add to the total variable
  allProduct.forEach(elm => total += updateSubtotal(elm))
  
  let totalCart = document.querySelector("#total-value span")
  totalCart.innerText = total

}

// ITERATION 4

function removeProduct(event) {
  // Select the clicked remove button 
  const target = event.currentTarget;
  // Select the parent of the row to remove
  const tableComplet = document.querySelector("tbody")
  // Remove the row from the parent. 
  // The child to remove is two parents levels above the target(Remove button > table cell > Row)
  tableComplet.removeChild(target.parentNode.parentNode)

  // Update the total price when a product is remove
  calculateAll()
}




// ITERATION 5

function createProduct() {
   // Take the name and price introduce in the inputs 
  const newProductName = document.querySelector(".name-new")
  const newProductPrice = document.querySelector(".price-new")

  // Extract the values from price and quantity to add in the new row
  let productName = newProductName.value
  let productPrice = newProductPrice.value


  // Add the new row to the table at the begging
  let tableComplet = document.querySelector("tbody")
  let row = tableComplet.insertRow(0)
  // Add the class product to the row
  row.setAttribute("class", "product")
  
 // Add the html for the row. Add all the elements in their corresponding cell
  let rowHTML = `<td class="name">
          <span>${ productName }</span>
          </td>
          <td class="price">$<span>${productPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>` 
  
  row.innerHTML = rowHTML
  
  
}

window.addEventListener('load', () => {
  // Select the calculate button
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

 
  // Select the create button
  const create = document.querySelector('#create')
  create.addEventListener('click', createProduct)


  // Select all the remove btn and add event in each one
  const removeObj = document.querySelectorAll(".btn-remove")
  removeObj.forEach(elm => elm.addEventListener("click", removeProduct))
});

// Update the the selector for the button remove when the button of create product is clicked
const newProduct = document.querySelector(".create-product")
newProduct.addEventListener('click', () => {
    const removeObj = document.querySelectorAll(".btn-remove")
  removeObj.forEach(elm => elm.addEventListener("click", removeProduct))
});
