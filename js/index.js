

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector(".quantity input");
  let subtotalNum = Number(price.textContent)*Number(quantity.value);
  const subtotal = product.querySelector(".subtotal span");

  subtotal.textContent = subtotalNum;
  return subtotalNum;

}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  let total = 0;
  for (let product of products){
    total += updateSubtotal(product);
  }
  const totalHtml = document.querySelector("#total-value span");
  totalHtml.textContent = total;

}

// ITERATION 4

function removeProduct(event) {
  const product = event.currentTarget.parentElement.parentElement;
  console.log('The target in remove is:', product);
  product.parentNode.removeChild(product);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let tr = document.createElement("tr");
  tr.classList.add("product");

  let td0 = document.createElement("td");
  td0.classList.add("name");
  let span0 = document.createElement("span")
  span0.textContent = document.getElementById('c-product-name').value;
  td0.appendChild(span0);
  tr.appendChild(td0);

  let td1 = document.createElement("td");
  td1.classList.add("price");
  td1.textContent = "$";
  let span1 = document.createElement("span")
  span1.textContent = document.getElementById('c-product-price').value;
  td1.appendChild(span1);
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.classList.add("quantity");
  let input0 = document.createElement("input");
  input0.setAttribute("type", "number");
  input0.setAttribute("value", "0");
  input0.setAttribute("min", "0");
  input0.setAttribute("placeholder", "Quantity");
  td2.appendChild(input0);
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.classList.add("subtotal");
  td3.textContent = "$";
  let span2 = document.createElement("span");
  span2.textContent = "0";
  td3.appendChild(span2);
  tr.appendChild(td3);

  let td4 = document.createElement("td");
  td4.classList.add("action");
  let button0 = document.createElement("button");
  button0.setAttribute("class", "btn btn-remove");
  button0.innerHTML = "Remove";
  button0.onclick = removeProduct;
  td4.appendChild(button0);
  tr.appendChild(td4);

  document.getElementsByTagName("tbody")[0].appendChild(tr);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName("btn-remove");
  for(let button of removeButtons){
    button.addEventListener("click", removeProduct);
  }
  const createButton = document.getElementById("create");
  createButton.onclick = createProduct;

});
