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
  //... your code goes here
  const target = event.currentTarget
  const row = target ? target.closest("tr") : event.closest("tr")
  row.parentNode?.removeChild(row)
  calculateAll()
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const target = event.currentTarget
  const row = target.closest("tr")
  const cart = document.getElementById("cart")

  const item = row.children[0].firstElementChild.value
  const price = row.children[1].firstElementChild.value

  const newRow = cart.tBodies[0].insertRow().innerHTML = `
    <td class="name">
    <span>${item}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove" onclick="removeProduct(this)">Remove</button>
    </td>
`
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = [...document.querySelectorAll(".btn-remove")]
  //console.log(removeButtons[0], typeof removeButtons)
  removeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => removeProduct(e))
  }
  )

  const createProductBtn = document.getElementById("create")
  createProductBtn.addEventListener("click", (e) => {
    createProduct(e);
    e.stopImmediatePropagation;
  })

  //... your code goes here
});
