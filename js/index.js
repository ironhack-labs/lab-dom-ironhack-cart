// ITERATION 1
  // ITERATION 2
  //... your code goes here
  function updateSubtotal(product) {
    let price = product.querySelector(".price span");
    let quantity = product.querySelector(".quantity");
    let priceVal = price.innerHTML;
    let quantityVal = product.querySelector("input").value;
    let subtotalVal = priceVal * quantityVal;
    let subtotal = product.querySelector(".subtotal span");
    subtotal.innerHTML = subtotalVal;
    //return subtotalVal;
    //console.log("Calculating subtotal, yey!",subtotalVal);
    return subtotalVal;
  }

  

  function calculateTotalValue(){
    let calcTotal = document.querySelectorAll(".subtotal span");
    console.log(calcTotal);
  }

function calculateAll() {

  let products = document.querySelectorAll(".product");
  products.forEach((prod) => {
    updateSubtotal(prod);
    
  });
  const cartItemElements = document.getElementsByClassName('product');
  let totalValue = 0;
  for(let cartItemElement of cartItemElements) {
    totalValue += updateSubtotal(cartItemElement);
  }
  document.querySelector('#total-value span').innerHTML = totalValue;

}




// ITERATION 4 REMOVE PRODUCT

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  const productRow = target.parentNode.parentNode;
  const productTable = productRow.parentNode;
  productTable.removeChild(productRow)
  calculateAll();
  /* console.log(productTable);
  console.log(productRow); */

}

// ITERATION 5 CREATE NEW PRODUCT

function createProduct() {
  //... new product values
  const createProductRow=document.querySelector(".create-product")
  const newProductNameValue=createProductRow.querySelector("input").value;
  const newProductPriceValue=createProductRow.querySelector("input[type='number']").value;
  const newProductPrice=Number(newProductPriceValue).toFixed(2);

  //new product row

  const newProductRow=document.createElement("tr");
  newProductRow.className="product";
  newProductRow.innerHTML=`<tr class="product">
          <td class="name">
            <span>${newProductNameValue}</span>
          </td>
          <td class="price">$<span>${newProductPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;
  const ProductTableBody=document.querySelector("tbody");
  ProductTableBody.appendChild(newProductRow);
  calculateAll();
  const newProductRemoveButton=document.getElementsByClassName("btn-remove");
  for (const removeButton of newProductRemoveButton) {
    removeButton.addEventListener("click",removeProduct)
  }
  
  


//console.log(newProductRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //Remove Button
  const productRemoveButtons = document.getElementsByClassName("btn-remove");
 for (const removeButton of productRemoveButtons) {
  removeButton.addEventListener('click',removeProduct)
   }

  const createNewProduct = document.getElementById("create");
  createNewProduct.addEventListener("click", createProduct)
  
});
