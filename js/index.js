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
  const total = document.querySelector("#total-value span")
  const allSubTotals = [...document.querySelectorAll(".product")];
  //alert("Calculate Prices clicked!")
  //console.log(allSubTotals)
  const totalValue = allSubTotals
    .map(product => updateSubtotal(product))
    .reduce((acc, price) => acc + price)

  total.innerText = String(totalValue)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  const row = target.closest("tr")
  row?.parentNode.removeChild(row)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = [...document.querySelectorAll(".btn.btn-remove")]
  //console.log(removeButtons[0], typeof removeButtons)
  removeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => removeProduct(e))
  }
  )


  //... your code goes here
});
