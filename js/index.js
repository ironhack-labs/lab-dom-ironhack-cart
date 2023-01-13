// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
  
    // Get DOM elements that hold price and quantity
    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');
  
    // Extract values from the DOM elements
    const priceValue = Number(price.innerHTML);
    const quantityValue = Number(quantity.value);
  
    // Calc. subtotal
    const subtotal = priceValue * quantityValue;
  
    // Get the DOM element that holds the subtotal value for the product
    const subtotalElement = product.querySelector('.subtotal span');
  
    // Set the product subtotal to the corrsponding DOM element
    subtotalElement.innerHTML = subtotal;
  
    // Return subtotal value so it can be used later
    return subtotal;
  }
  
    
    function calculateAll() {
      // code in the following two lines is added just for testing purposes.
      // it runs when only iteration 1 is completed. at later point, it can be removed.
      const singleProduct = document.querySelector('.product');
      updateSubtotal(singleProduct);
      // end of test
    
      // ITERATION 2 & 3

    
      let total = 0;
      let productElements = document.querySelectorAll('tr.product');
      for (let productElement of productElements) {
        let subtotal = updateSubtotal(productElement);
        total += subtotal;

      }

      let totalElement = document.getElementById('total-value').querySelector('span');
      totalElement.textContent = total;

    }


    
    
    // ITERATION 4
    
    
const removeButtons = document.querySelectorAll('.btn-remove');

removeButtons.forEach(button => {
  button.addEventListener('click', removeProduct);
});

function removeProduct(event) {
  const productRow = event.currentTarget.parentNode.parentNode;
  productRow.parentNode.removeChild(productRow);
  calculateAll();
}



    // ITERATION 5
    
    
    
document.addEventListener("DOMContentLoaded", function() {
    const createProductBtn = document.getElementById("create");
    createProductBtn.addEventListener("click", createProduct);
  });
  
  function createProduct() {
    // Get the name and unit price input values
    const productName = document.querySelector("tfoot .create-product input[type='text']").value;
    const productPrice = document.querySelector("tfoot .create-product input[type='number']").value;
  
    // Create a new table row for the product
    const newProductRow = document.createElement("tr");
    newProductRow.classList.add("product");
    newProductRow.innerHTML = `
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${productPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    `;
  
    // Add the new product row to the table
    document.querySelector("#cart tbody").appendChild(newProductRow);
  
    // Clear the input fields
    document.querySelector("tfoot .create-product input[type='text']").value = "";
    document.querySelector("tfoot .create-product input[type='number']").value = "";
  
  }  

  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

  });