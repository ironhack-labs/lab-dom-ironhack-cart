// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const priceValue = price.innerText;
  const quantityValue = quantity.value;

  const subtotalValue = priceValue * quantityValue;

  const subtotal = product.querySelectorAll(".subtotal span");

  subtotal.innerHtml = subtotalValue;
  // console.log(subtotalValue);
  return subtotalValue;
  
}


// ITERATION 2

function calculateAll() {

  //... your code goes here
  const allProducts = document.getElementsByClassName("product");
  
  let totalValue = 0;
 
  for (const product of allProducts) {
    totalValue += updateSubtotal(product);
  }
  

  // ITERATION 3
  //... your code goes here

  document.querySelector("#total-value span").innerHTML = totalValue;
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
 
  const parentRow = target.parentNode.parentNode;
  parentRow.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here

 let [name, price] = document.querySelectorAll("tfoot input");
 const tbody = document.getElementsByTagName("tbody")[0];
 
 tbody.insertAdjacentHTML(
   "beforeend",
   `
     <tr class="product">
       <td class="name">
         <span>${name.value}</span>
         </td>
       <td class="price">$<span>${price.value}</span></td>
       <td class="quantity">
         <input type="number" value="0" min="0" placeholder="Quantity" />
       </td>
       <td class="subtotal">$<span>0</span></td>
       <td class="action">
         <button class="btn btn-remove">Remove</button>
       </td>
     </tr>
   `
 );
 
 const removeButtons = document.querySelectorAll(".btn-remove");
 
 removeButtons.forEach((removeButton) => {
   removeButton.removeEventListener("click", removeProduct);
 });
 
 removeButtons.forEach((removeButton) => {
   removeButton.addEventListener("click", removeProduct);
 });
 
 name = "";
 price = 0;
};


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeAll = document.querySelectorAll(`.btn-remove`);
  removeAll.forEach((element) => {
    element.addEventListener("click", removeProduct);
  });

  const createButton = document.getElementById("create");
  createButton.addEventListener("click", createProduct);
 });



