// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price  span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector(".subtotal span").innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {

  const multipleProduct = document.querySelectorAll('.product');
  let calculoTotal = 0;
  for (let i = 0; i < multipleProduct.length; i++) {
    calculoTotal += updateSubtotal(multipleProduct[i]);
  }


  document.querySelector("#total-value span").innerHTML = calculoTotal;

}



function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let tbody = document.querySelector("tbody");
  tbody.removeChild(target.parentElement.parentElement);
}

// ITERATION 5

function createProduct() {
  let name = document.querySelectorAll(".create-product input")[0].value;
  let price = document.querySelectorAll(".create-product input")[1].value;
  let newRow = document.createElement("tr");
  newRow.classList.add("product");
  newRow.innerHTML = `
           <td class="name">
             <span>${name}</span>
           </td>
           <td class="price">$<span>${price}</span></td>
           <td class="quantity">
             <input type="number" value="0" min="0" placeholder="Quantity" />
           </td>
           <td class="subtotal">$<span>0</span></td>
           <td class="action">
             <button class="btn btn-remove">Remove</button>
           </td>`;
  newRow.querySelector(".btn-remove").addEventListener("click",(e)=>{
    removeProduct(e);
    calculateAll();
  })

  document.querySelector("tbody").appendChild(newrow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeBtn = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.querySelector("#create");
  createBtn.addEventListener('click', createProduct);
});