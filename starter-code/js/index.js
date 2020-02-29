// ITERATION 1

function updateSubtotal($product) {
  const price = document.getElementsByClassName("price")[0].innerText.split("$")[1];
  const quantity = document.getElementById("quantity-input").value;
  const subtotal = parseFloat(price) * parseFloat(quantity);
  subtotalElement = document.getElementById("subtotal-value").innerText = subtotal.toFixed(2);
}

  // ITERATION 2
  function calculateAll() {
    updateSubtotal();
  




    
  // ITERATION 3
  //...
}

window.addEventListener("load", () => {
  const $calculateTrigger = document.getElementById("calculate");

  $calculateTrigger.addEventListener("click", calculateAll);
});

// ITERATION 4

function productRemoveListener(event) {
  let removeButton = document.querySelectorAll("btn-remove");
  for (let i = 0; i < removeButton.length; i++) {
    let button = removeButton[i];
    button.onClick = function(event) {
      let buttonClicked = event.target;
      buttonClicked.parentElement.remove();
    };
  }
}

// ITERATION 5

function createProduct(event) {
  // ...
}
