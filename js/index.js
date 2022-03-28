// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity [type=number]').value;
  const subtotal = product.querySelector('.subtotal span');
  const total = price * quantity

  subtotal.innerHTML = total;
  return total
}

function calculateAll() {
  // ITERATION 2
  const product = document.querySelectorAll('.product');
  const total = document.querySelector('#total-value span');
  let suma = 0

  for (let i = 0; i < product.length; i++) {
    suma += updateSubtotal(product[i]);
  }
  // ITERATION 3
  total.innerHTML = suma

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5
function createProduct() {
  const create = document.querySelector(".create-product");
  const valueText = document.querySelector(".create-product input[type=text]").value;
  const valueNumber = document.querySelector(".create-product input[type=number]").value;

  // let text="<tr class='product'>"

  let text = "<td class='name'>"
  text += "<span>" + valueText + "</span>"
  text += "</td>"
  text += "<td class='price'>$<span>" + valueNumber + "</span></td>"
  text += "<td class='quantity'>"
  text += "<input type='number' value='0' min='0' placeholder='Quantity' />"
  text += "</td>"
  text += "<td class='subtotal'>$<span>0</span></td>"
  text += "<td class='action'>"
  text += "<button class='btn btn-remove'>Remove</button>"
  text += "</td>"
  text += "</tr>";

  let tabla = document.querySelector("tbody")

  let tr = document.createElement("tr");
  tr.setAttribute("class", "product");
  tr.innerHTML = text;

  tabla.appendChild(tr);

  update()

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const create = document.querySelector("#create")
  create.addEventListener('click', createProduct);

  update()

});

function update() {
  const button = document.querySelectorAll(".btn-remove")
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', removeProduct);
  }
}
