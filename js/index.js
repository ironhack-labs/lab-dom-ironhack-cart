// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value

  const subTotal = product.querySelector(".subtotal span")

  subTotal.innerText = String(Number(price) * Number(quantity))

  return Number(subTotal.innerText)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const total = document.querySelector("#total-value span")
  const allSubTotals = [...document.querySelectorAll(".product")];
  //alert("Calculate Prices clicked!")
  console.log(allSubTotals)
  const totalValue = allSubTotals
    .map(product => updateSubtotal(product))
    .reduce((acc, price) => acc + price)

  total.innerText = String(totalValue)
  console.log(totalValue)

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const row = target.closest("tr")
  row?.parentNode.removeChild(row)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll(".btn.btn-remove")
  //console.log(removeButtons[0], typeof removeButtons)
  removeButtons[0].forEach(btn => {
    //console.log(btn)
    btn.addEventListener("click", (e) =>
      removeProduct(e)
    )
  }
  )


  //... your code goes here
});
