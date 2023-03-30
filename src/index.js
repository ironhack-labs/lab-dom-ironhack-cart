// ITERATION 1

function updateSubtotal(product)
 {
  //step:1 creating DOM variables
  let price = product.querySelector('.price span') .innerText;
  let quantity = product.querySelector('.quantity input') .value;
  //step:2 Extracting values from DOM variables
  //console.log(price.innerText);
  //console.log(quantity.value);
  //step:3 calculate subtotalPrice
  let subtotal = price * quantity;
  //const subtotalPrice = (Number(price.innerText)*(quantity.value));
  //console.log(subtotalPrice);
  //step:4 get DOM element that should hold subtotalPrice
  product.querySelector('.subtotal span').innerHTML=subtotal
  //const subtotal =product.querySelector('.subtotal span');
  //console.log(subtotal.innerText);
  //step:5 set the subtotalPrice to corresponding DOM element 
  // subtotal.innerText = subtotalPrice;
  //product.querySelector('.subtotal span').innerHTML=subtotalPrice;
  return subtotal;
  }


function calculateAll() 
{
  //let products = document.getElementsByClassName(`product`);
  let total = 0;
  let subtotal=document.querySelectorAll('.product')
   for (singleProduct of subtotal) total += updateSubtotal(singleProduct)
  
 // for(let i=0;i<products.length;i++)
 //{ 
 //  total = subtotal + updateSubtotal(products[i]);
    //const subtotal =product.querySelector(`.subtotal span`);
   // console.log(total);
   document.querySelector('h2 span').innerText=total;
  
}
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.parentNode.parentNode;
  const cartBody = productRow.parentNode;
  cartBody.removeChild(productRow);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const nameInput = document.getElementById("new-product-name");
  const priceInput = document.getElementById("new-product-price");
  const name = nameInput.value;
  const price = parseFloat(priceInput.value);
  // Create a new row in the table
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td class="name">${productName}</td>
      <td class="price">${unitPrice.toFixed(2)}</td>
      <td><input class="quantity" type="number" value="1"></td>
      <td><button class="btn btn-remove">Remove</button></td>
    `;
  
    // Add the new row to the table body
    productTableBody.appendChild(newRow);
  
    // Clear the input fields
    productNameInput.value = "";
    unitPriceInput.value = "";

     // Recalculate the cart totals
    calculateAll();
  }

  // Add event listener to the "Create Product" button
 
  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }
   function createProduct() {
    const inputs = document.querySelectorAll(".create-product input")
    const name = inputs[0].value
    const price = inputs[1].value
    const tbody = document.querySelector("tbody")
    const rowContent = `<td class="name"><span>${name}</span></td><td class="price">$<span>${price}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`
  
    const row = document.createElement("tr")
    row.classList.add("product")
    row.innerHTML = rowContent
  
    tbody.appendChild(row)
    
    let removeProductBtn = row.querySelector(".btn-remove")
    removeProductBtn.addEventListener("click", removeProduct)
}



  

  calculateAll();



window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductButton = document.getElementById("create");
  createProductButton.addEventListener("click", createProduct);


  let removeProductBtn = row.querySelector(".btn-remove")
  removeProductBtn.addEventListener("click", removeProduct)

  
  

});



