// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //Price:
  const priceElement = product.querySelector(".price span"); // getElementsByClassName("price")
  const priceValue = Number(priceElement.innerText);
    
  //Quantity:
  const quantityElement = product.querySelector(".quantity input");
  const quantityValue = Number(quantityElement.value);
  
  //calculating Subtotal for specific product:
  const subtotalPrice = priceValue * quantityValue;
  
  //Subtotal Element:
  let subtotalElement = product.querySelector(".subtotal span");
  // let currentValueSubtotal = Number(subtotalElement.innerText); //looses the reference!
  //do I have a reference or a number value??
  //updating subtotal value
  subtotalElement.innerText = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  // ITERATION 2
  //targeting each Product Row:
  const productRows = document.getElementById("cart").getElementsByClassName("product")
  //Copying/spreading the array
  const productsArray = [...productRows];
  let total = 0;
  //updating the total with the subtotal of each product
  productsArray.forEach((product) => {
    const subtotalToAddUp = updateSubtotal(product);
    total += subtotalToAddUp;
  });
  // ITERATION 3
  //targetting the span element of the total sum:
  document.querySelector("#total-value span").innerText = total; //span is obligatory
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target); //chooses the specific Remove Button!

  //to select the right row:
  const productRowSelected = target.parentNode.parentNode;
  console.log(productRowSelected);

  // to remove the whole row from the cart:
  const outerparent = document.querySelector("#cart tbody")
  console.log(outerparent)
  outerparent.removeChild(productRowSelected);

  // to update the total :
  calculateAll()

}

// ITERATION 5

function createProduct() {
  //getting the input from the Product Name Field
  let newProduct = document.querySelector(".create-product input").value;
  //getting the input from the Price Field
  let newPrice = Number(document.querySelector(".create-product > td:nth-child(2) input").value);
  
  //creating new row at the end of the table:
  const table = document.querySelector("tbody");
  const newRow = table.insertRow(-1);
  newRow.setAttribute("class", "product");

  //insert 5 td elements:
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);

  // giving class-names to the cells:
  cell1.setAttribute("class", "name");
  cell2.setAttribute("class", "price");
  cell3.setAttribute("class", "quantity");
  cell4.setAttribute("class", "subtotal");
  cell5.setAttribute("class", "action");
  
  //filling the cells
  cell1.innerHTML = "<span>" + newProduct + "</span>"
  cell2.innerHTML = "$<span>" + newPrice + "</span>"
  cell3.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />'
  cell4.innerHTML = "$<span>" + 0 + "</span>"
  cell5.innerHTML =  '<button class="btn btn-remove">Remove</button>'

  //update Total Sum
  calculateAll()

  //Remove
  

   //clear input fields:
  newProduct = "";
  newPrice = 0; // does not work
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll); //no open brackets here!?
  
  //creating event for the create-Btn  
  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);

  //querying the document for all "Remove" buttons and passing the function removeProduct() as the callback argument:
  let removeBtn = document.querySelectorAll(".btn-remove");
  console.log(removeBtn)
  let btnArray = [...removeBtn];

  // looping through Remove-Buttons-Arry:
  btnArray.forEach((product) => {

    product.addEventListener('click', removeProduct);
  });

});