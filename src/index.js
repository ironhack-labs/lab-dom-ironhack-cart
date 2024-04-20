// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerText;
  let quantity = Number(product.querySelector(".quantity input").value);
  // console.log("Calculating subtotal, yey!");
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = Number(price) * Number(quantity);
  // console.log(subtotal.innerText); - test para revisar que los valores pasan apropiadamente en forma de numeros.
  return subtotal;
  
}

function calculateAll() {
  const products = document.querySelectorAll(".product");
  let total = 0;

  products.forEach(product => {
    const subtotalElement = updateSubtotal(product); // Aquí recorro todos los productos y los almaceno.
    const subtotalValue = Number(subtotalElement.innerText); // aqui los vuelvo cada subtotal un numero utilizable.
    total = total + subtotalValue; 
  });

  const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = total;
}


//   //... your code goes here

// ITERATION 4

// function removeProduct(event) {
//   const target = event.currentTarget;
//   console.log("The target in remove is:", target);
//   //... your code goes here
// }

// // ITERATION 5

// function createProduct() {
//   //... your code goes here
// }

// window.addEventListener("load", () => {
//   const calculatePricesBtn = document.getElementById("calculate");
//   calculatePricesBtn.addEventListener("click", calculateAll);

//   //... your code goes here
// });
