// ITERATION 1

function updateSubtotal(product) {
  // console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const extractedPrice = price.textContent;
  const extractedQuantity = quantity.value;

  let total = extractedPrice * extractedQuantity;
  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.textContent = total;
  return total;
  // Step 1: Ottieni gli elementi DOM per il prezzo e la quantità
  // const priceElement = product.querySelector(".price span");
  // const quantityElement = product.querySelector(".quantity input");

  // // Step 2: Estrai i valori da questi elementi
  // const price = priceElement.innerHTML; // Rimuovi il simbolo "$" e converti in numero
  // const quantity = quantityElement.value;

  // // Step 3: Calcola il subtotal
  // const subtotal = price * quantity;

  // // Step 4: Ottieni l'elemento DOM per il subtotal e aggiorna il suo contenuto
  // const subtotalElement = product.querySelector(".subtotal span");
  // subtotalElement.textContent = `${subtotal.toFixed(2)}`;

  // // Step 5: Restituisci il valore del subtotal
  // return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2

  let finalPrice = 0;
  const allProducts = document.getElementsByClassName("product");

  for (let i = 0; i < allProducts.length; i++) {
    const subtotal = updateSubtotal(allProducts[i]);
    finalPrice += subtotal;
  }
  let totalElement = document.querySelector("#total-value span");
  totalElement += finalPrice;
  console.log(finalPrice);
  return finalPrice;

  // ITERATION 3
  //... your code goes here

  // Ottieni tutti gli elementi DOM dei prodotti
  // const productRows = document.getElementsByClassName("product");

  // let total = 0;

  // // Calcola il subtotal per ciascun prodotto
  // for (const product of productRows) {
  //   total += updateSubtotal(product);
  // }

  // // Ottieni l'elemento DOM per il totale e aggiorna il suo contenuto
  // const totalElement = document.querySelector("#total-value span");
  // totalElement.textContent = `${total.toFixed(2)}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  target.closest("tr.product").remove(); //rimuove l'elemento più vicino al nostro target
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here

  const allButtons = document.querySelectorAll(".btn.btn-remove");

  allButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", removeProduct);
  });
});
