// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");

  const qty = product.querySelector(".quantity input");
  const result = Number(price.textContent) * Number(qty.value);
  //Product of price an qty
  //Selecciono donde quiero meter el subtotal (product)
  const subtotal = product.querySelector(".subtotal span");
  //Meter en subtotal el result
  subtotal.innerHTML = result;

  console.log("Calculating subtotal, yey!");
  //Price está dentro de la class=price y a su vez en el elemento <span>
  return result;
}

function calculateAll() {
  /* // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test */

  //Selecciono los products.
  const products = document.querySelectorAll(".product");
  //Creas una variable en la que vas a sumar cada uno de los productos que saques de la anterior función.
  let sum = 0;
  products.forEach((element) => {
    sum += updateSubtotal(element);
  });
  //Te posicionas en el elemento.
  const total = document.querySelector("#total-value span");
  //
  total.innerHTML = sum;
  console.log(sum);
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //Te vas metiendo en los parents ( Td y Tr)
  let parent = target.parentNode.parentNode;
  parent.remove();
  console.log("The target in remove is:", target);
  return calculateAll() - updateSubtotal();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  // Buscando todos los remove Buttons
  const removeBtn = document.querySelectorAll(".btn.btn-remove");
  //Por cada uno de éstos elementos, realizará la función onclick
  removeBtn.forEach((element) => {
    element.addEventListener("click", removeProduct);
    /* element.onclick = function () {
      removeProduct(event);
    }; */
  });

  //... your code goes here
});
