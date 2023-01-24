// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here

  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  let ValuePrice = Number(price.innerText);

  let quantityValue = Number(quantity.value);

  let result = ValuePrice * quantityValue;

  let subtotal = product.querySelector(".subtotal span");

  subtotal.innerText = result;
  return subtotal;
}

function calculateAll() {

  // ITERATION 2
  //... your code goes here

  const TotalDOM = document.querySelector("#total-value span");


  const AllProduct = document.querySelectorAll(".product");

  AllProduct.forEach((element) => {

    console.log(element)
    updateSubtotal(element);
  });

  // ITERATION 3
  //... your code goes here

  let SumSubTotal = 0;
  AllProduct.forEach((element) => {
    let subtotalEach = element.querySelector(".subtotal span");

    SumSubTotal += Number(subtotalEach.innerText);
  });

  TotalDOM.innerText = SumSubTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

const btnAddDOM = document.querySelector("#create");
btnAddDOM.addEventListener("click", createProduct);
const productNameDOM = document.querySelectorAll(".create-product input")


console.log(productNameDOM[0].value)
console.log(productNameDOM[1].value)

function createProduct() {
  //... your code goes here

  const tbodyDOM = document.querySelector("tbody")
  console.log(tbodyDOM)

  let newProduct = document.createElement("tr")
  newProduct.innerHTML= `
  <tr class="product">
  <td class="name">
    <span>${productNameDOM[0].value}</span>
  </td>
  <td class="price">$<span>${productNameDOM[1].value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  </tr>
  `
 tbodyDOM.append(newProduct)

  productNameDOM[0].value =''
  productNameDOM[1].value=''

  
}




calculateAll(createProduct)
window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  //... your code goes here
});
