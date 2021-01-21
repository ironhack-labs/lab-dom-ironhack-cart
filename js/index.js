// ITERATION 1


function updateSubtotal(product) {
  const price = Number(product.querySelector(".price span").innerHTML)
  const quantity = Number(product.querySelector(".quantity input").value)
  const campoSubTotal = product.querySelector(".subtotal span")
  const subTot = price * quantity
  campoSubTotal.innerHTML = subTot 
  return subTot
}

function calculateAll() {
  // ITERATION 2
  const arrProd = document.querySelectorAll(".product")
  let sumTotal = 0
  for(let i = 0; i < arrProd.length ;i++){ // no entraba porque estaba en <= tenia que ser <
    sumTotal += updateSubtotal(arrProd[i])
  }
  let totalH1 = document.querySelector("#total-value span")
  totalH1.innerHTML = sumTotal
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
}

// ITERATION 5

function createProduct() {
  const newProdName = document.querySelector(".newProdName input").value
  const newProdPrice = document.querySelector(".newProdPrice input").value
  const doveNewProd = document.querySelector("tbody")
  const tdNew = document.createElement("tr")
  tdNew.classList.add("product")
  tdNew.innerHTML = `
  <td class="name">
            <span>${newProdName}</span>
          </td>
          <td class="price">$<span>${newProdPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `
  doveNewProd.appendChild(tdNew)

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const addProdsBtn = document.getElementById('create');
  addProdsBtn.addEventListener('click', createProduct);

  let remProdBtn =  document.querySelectorAll('.btn-remove');
  for(let i=0;i<remProdBtn.length;i++){
    let array = remProdBtn[i].addEventListener('click', removeProduct);
  }

});


