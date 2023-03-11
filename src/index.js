function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  // ITERATION 1

  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;

  const subtotalPrice = price * quantity;

  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at a later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of the test

  // ITERATION 2

  const allProducts = document.getElementsByClassName("product");

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
  }

  // ITERATION 3

  const totalPrice = document.querySelector("#total-value span");

  const newSubtotal = document.querySelectorAll(".subtotal span");

  let sum = 0;

  for (let i = 0; i < newSubtotal.length; i++) {
    sum += Number(newSubtotal[i].innerHTML);
  }

  totalPrice.innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const childTarget = target.parentNode.parentNode;
  const parentTarget = childTarget.parentNode;
  parentTarget.removeChild(childTarget);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  // const newName = document.querySelector('.new-name input').value
  // const newPrice = document.querySelector('.new-price input').value
  // const father = document.querySelector('.father')
  // const newProduct = document.querySelector('.product')
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove");

  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", removeProduct);
  }
});
// la iteración 4 es como la primera, en la función tienes que eliminar solo una fila. entonces el evento está pensado para que sea un botón
// tienes que después ir subiendo hasta llegar a la tabla, y una vez tengas la tabla seleccionada, utiliza removeChild para borrar la fila en concreto

// entonces tienes que subir hasta llegar al tbody
// y ya al tbody le eliminas un hijo que es la fila donde está el botón Remove que se ha pulsado
// antes te he dicho que en la siguiente iteración se añade el eventListener y no, me he liado jeje tienes que hacer el loop dentro del window.addEventListener que está al final

// dentro del window.addEventListener tienes que hacer el eventListener para borrar y crear el producto

// Cuando pulsas el boton, ya JS sabe qué botón es, por lo tanto al ir subiendo vas a llegar a un punto donde tendrás la fila en concreto que tienes que borrar, por lo tanto no te preocupes por saber que hijo en concreto es porque ya JS lo sabex
