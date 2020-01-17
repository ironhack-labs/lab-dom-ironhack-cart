var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
var $dele = document.querySelectorAll(".btn-delete")
var $create = document.getElementById("create")
var $product = document.querySelectorAll(".product");
var $parent = document.querySelector("tbody")

function updateSubtot($product) {
  // Iteration 1.1
  const price = $product.querySelector(".pu span").innerText;

  const qty = $product.querySelector(".qty input").value;
  let elm = price * qty;
  let subTotal = $product.querySelector(".subtot span")
  subTotal.innerText = elm

  return elm;
}

function calcAll() {
  // Iteration 1.2
  let sum = 0
  let $product = document.querySelectorAll(".product");
  $product.forEach(element => {
    console.log(element)

    sum += updateSubtot(element)

  })

  let total = document.getElementById("total")
  total.innerText = sum
}

function removeProduct() {

  $dele.forEach((elm, idx) => {
    $product = document.querySelectorAll(".product");
    elm.onclick = () => {
      console.log(idx)
      $parent.removeChild($product[idx]);

    }
  })
}

function createProduct() {
  let text = document.getElementById("text").value
  let number = document.getElementById("number").value

  let newProduct =
    `<tr class="product">
  <td class="name">
    <span>${text}</span>
  </td>
  <td class="pu">
    $<span>${number}</span>
  </td>
  <td class="qty">
    <label>
      <input type="number" value="0" min="0">
    </label>
  </td>
  <td class="subtot">
    $<span>0</span>
  </td>
  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
</tr>`
  let newTr = document.createElement('tr')
  newTr.setAttribute('class', 'product')

  newTr.innerHTML = newProduct
  let tbody = document.querySelector("tbody")


  tbody.appendChild(newTr)
  $product = document.querySelectorAll(".product");
  $parent = document.querySelector("tbody")
  

}

removeProduct()
$create.onclick = createProduct;

$calc.onclick = calcAll;