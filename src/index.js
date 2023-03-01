// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotalPrice = price.innerHTML * parseInt(quantity.value);

  const subtotal = product.querySelector(".subtotal span");
  
  const totalPrice = subtotal.innerHTML = subtotalPrice;
  return totalPrice;
}

function calculateAll() {
  
  let sum = 0;
 const product = document.getElementsByClassName("product");
 const productsArray = [...product];
 productsArray.forEach(element => {
    const mid = updateSubtotal(element);
    sum += mid;
 });
 
 const finalPrice = document.querySelector("#total-value span");
 finalPrice.innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentElement
  const targetToRmv = target.parentElement;
  const parentElm = targetToRmv.parentElement;
  parentElm.removeChild(targetToRmv);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelectorAll(".create-product input");
  const newProArr = [...newProduct];
  const prodName = newProArr[0].value;
  const prodPrice = newProArr[1].value;
  console.log(newProArr)

  const newTr = document.createElement("tr");
  newTr.setAttribute("class","product");
  const trParent = document.querySelector("#cart tbody");
  newTr.innerHTML = `
  <tr class="product">
    <td class="name">
    <span>${prodName}</span>
    </td>
    <td class="price">$<span>${prodPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;

  trParent.appendChild(newTr);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName("btn btn-remove");
  const removeArr = [...removeBtn];
  removeArr.forEach((element)=> {
    element.addEventListener("click", (e) => {
      removeProduct(e)
    });
    })

    const createBtn = document.getElementById("create");
    createBtn.addEventListener("click", () => {
      createProduct();
    })

  })