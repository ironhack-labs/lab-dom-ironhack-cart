// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
let price = parseFloat(product.querySelector('.price span').textContent);
let quantity = parseFloat(price.querySelector('.price input').value);
let subtotal = price * quantity;
product.querySelector('.subtotal').textContent = subtotal.toFixed(2); // Mostra il subtotale con due decimali
  return subtotal;
}
// Funzione per aggiornare il subtotale totale della tabella
function updateTotal() {
  let total = 0;
  document.querySelectorAll('.tbody .tr').forEach(product => {
    total += calculateSubtotal(product);
  });
}

// Aggiungi eventi di input per i campi di quantità e prezzo
document.querySelectorAll('.quantity, .price').forEach(input => {
  input.addEventListener('input', updateTotal);
});

// Chiama updateTotal() all'avvio per inizializzare il totale
updateTotal();

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let productRow = document.getElementsByClassName('#cart. product');
  productRow.forEach(productRow => {updateSubtotal(productRow);})

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
