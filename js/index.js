// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;
  //alert(price);

  const quantity = product.querySelector('.quantity input');
  const currentQuantity = quantity.value;
  // alert(currentQuantity);

  const subtotalPrice = price * currentQuantity;
  //alert(subtotalPrice);

  const subtotal = product.querySelector('.subtotal span').textContent = subtotalPrice
  //alert(subtotal);

  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total = total + updateSubtotal(products[i]);
  }

  // ITERATION 3
  const totalValue = document.getElementById("total-value").firstElementChild;
  //const theValue = totalValue.innerText;
  //alert(theValue);
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  alert('The target in remove is:', target);

  //... your code goes here
}

// ITERATION 5

function createProduct() {

  const textInput = document.getElementById("textInput");
  const newProductName = textInput.value;

  const priceInput = document.getElementById("priceInput");
  const newProductPrice = priceInput.value;

  // const tbodyCart = document.createElement("tbody");

  const trClassProduct = document.createElement("tr");
  // tbodyCart.appendChild(trClassProduct);

  const tdClassName = document.createElement("td");
  trClassProduct.appendChild(tdClassName);
  const span1 = document.createElement("span");
  tdClassName.appendChild(span1);
  span1.value = newProductName;

  const tdClassPrice = document.createElement("td");
  trClassProduct.appendChild(tdClassPrice);
  const span2 = document.createElement("span");
  tdClassPrice.appendChild(span2);
  span2.value = newProductPrice;

  const tdClassQuantity = document.createElement("td");
  trClassProduct.appendChild(tdClassQuantity);
  const input1 = document.createElement("input");
  tdClassQuantity.appendChild(input1);

  const tdClassSubtotal = document.createElement("td");
  trClassProduct.appendChild(tdClassSubtotal);
  const span3 = document.createElement("span");
  tdClassSubtotal.appendChild(span3);

  const tdClassAction = document.createElement("td");
  trClassProduct.appendChild(tdClassAction);
  const button1 = document.createElement("button");
  tdClassAction.appendChild(button1);

  trClassProduct.className = "product";
  tdClassName.className = "name";
  tdClassPrice.className = "price";
  tdClassQuantity.className = "quantity";
  tdClassSubtotal.className = "subtotal";
  tdClassAction.className = "action";
  button1.className = "btn btn-remove";


  // add the newly created element and its content into the DOM
  const currentTrClassProduct = document.getElementsByClassName("product");
  document.body.insertBefore(trClassProduct, currentTrClassProduct);

  // When the product creation is finalized, please, clear the input fields in the creation form.
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  /* const removeProductBtn = document.getElementsByClassName("btn btn-remove");
 
   const products = document.getElementsByClassName("product");
 
   for (let i = 0; i < removeProductBtn.length; i++) {
     removeProductBtn.addEventListener('click', removeProduct(products[i]));
   } */
});
