// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

 //... your code goes here
 const price = product.querySelector(".price span").textContent;
 const quantity = product.querySelector(".quantity input").valueAsNumber;

 const priceValue = parseFloat(price);
 const quantityValue = quantity;
 
 const subtotal = priceValue * quantityValue;

 const subtotalElement = product.querySelector(".subtotal span");
 subtotalElement.textContent = subtotal

  return subtotal;

  
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
    }
  }
  
  //... your code goes here

  // ITERATION 3
    //... your code goes here

    function calculateAll() {
      const products = document.getElementsByClassName("product");
      let totalValue = 0;
    
      for (let i = 0; i < products.length; i++) {
        totalValue += updateSubtotal(products[i]);
      }
    
      const totalValueElement = document.querySelector("#total-value span");
      totalValueElement.textContent = totalValue.toFixed(2);
    }
    


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  
t

  const productRow = target.parentNode.parentNode;
  const tableBody = productRow.parentNode;

  tableBody.removeChild(productRow);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productNameInput = document.querySelector('.create-product input[type="text"]');
  const productPriceInput = document.querySelector('.create-product input[type="number"]');
  const productName = productNameInput.value;
  const productPrice = productPriceInput.value;

  const tableBody = document.querySelector("#cart tbody");

  const newRow = document.createElement("tr");
  newRow.classList.add("product");

  newRow.innerHTML = `
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

  tableBody.appendChild(newRow);

  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

  productNameInput.value = '';
  productPriceInput.value = '';
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.getElementsByClassName("btn-remove");

for (let i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener("click", removeProduct);
}

const createProductBtn = document.getElementById('create');
createProductBtn.addEventListener('click', createProduct);


});
