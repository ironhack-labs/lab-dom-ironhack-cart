// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = price.innerHTML * quantity.value;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here

  const products = document.getElementsByClassName("product");
  const productsArray = [...products];
  productsArray.forEach((element) => {
    updateSubtotal(element);
  });

  // ITERATION 3
  //... your code goes here

  const total = document.querySelector("#total-value span");
  const subtotal = document.querySelectorAll(".subtotal span");

  let count = 0;
  subtotal.forEach((element) => {
    count += Number(element.innerHTML);
  });
  total.innerHTML = count;

}

// ITERATION 4

function removeProduct(event) {
  const productName = event.parentNode;
  const product = productName.parentNode;
  const productTbody = product.parentNode;
  productTbody.removeChild(product);

  calculateAll()
}

// ITERATION 5

function createProduct(event) {
  const target = event.target
  const parentTarget = ((target).parentNode).parentNode
  const newName = parentTarget.querySelectorAll("input")

  let name = ""
  let price = 0
  newName.forEach(element => {
    if (element.type === "text"){
      name = element.value
    } else if (element.type === "number"){
      price = element.value
    }
  })
  
  const productBody = document.querySelector("tbody")
  const newProductTr = document.createElement("tr")
  newProductTr.setAttribute("class","product")

  newProductTr.innerHTML = `
  <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `
  productBody.appendChild(newProductTr)

  const removeButtons = document.querySelectorAll(".btn-remove");
  
  removeButtons.forEach((element) => {
    element.addEventListener("click", () => {
      removeProduct(element);
      console.log(element)
    });
  });

  newName.forEach(element => {
    if (element.type === "text"){
      element.value = ""
    } else if (element.type === "number"){
      element.value = 0
    }
  })

}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll(".btn-remove");
  
  removeButtons.forEach((element) => {
    element.addEventListener("click", () => {
      removeProduct(element);
      console.log(element)
    });
  });


  const addProduct = document.querySelector("#create");
  addProduct.addEventListener("click", (element) => {
    createProduct(element);
  });
});