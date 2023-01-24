// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  let subtotal = product.querySelector(".subtotal span");

  subtotal.innerText = price * quantity;

  return subtotal.innerText;
}

function calculateAll() {
  let products = document.querySelectorAll("#cart .product");
  let totalPrice = document.querySelector("#total-value span");

  totalPrice.innerText = 0;
  products.forEach((product) => {
    totalPrice.innerText = Number(totalPrice.innerText) + Number(updateSubtotal(product));
  });

  return totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  let botonActual = event.currentTarget
  let todaFila= botonActual.parentNode.parentNode
  todaFila.remove()
  console.log("The target in remove is:", botonActual);
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  let eliminarBoton = document.querySelectorAll(".btn-remove")
  eliminarBoton.forEach((cadaElemento)=>{
    cadaElemento.addEventListener("click", removeProduct )
  })

});
