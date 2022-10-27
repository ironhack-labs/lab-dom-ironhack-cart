// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //ITERATRION 1 
  // const quantity = product.querySelector("input").value
  // const price = product.querySelector(".price span").textContent
  // const subtotal = product.querySelector(".subtotal span")
  // subtotal.innerHTML = Number(price * quantity)
  
  //... your code goes here
  // ITERATION 2 ... n
  const products = [...product]
  let total = 0
  products.forEach(element => {
    
      const quantity = element.querySelector("input").value
      const price = element.querySelector(".price span").textContent
      const subtotal = element.querySelector(".subtotal span")
     
      total += Number(price * quantity)
      subtotal.innerHTML = Number(price * quantity)
  });

  return total
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  const totalValue = document.querySelector("#total-value span")
  const sumTotal = updateSubtotal(products);
  totalValue.innerHTML = sumTotal
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const table = target.parentNode.parentNode.parentNode
  const row = target.parentNode.parentNode
  table.removeChild(row)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  //const rowToCreate = document.querySelector("create-product")
  let inputsValues = document.querySelectorAll(".create-product input")
  inputsValues=[...inputsValues]
  const productName = inputsValues[0].value
  const priceProduct = inputsValues[1].value
  if(productName === "" || priceProduct === ""){
    return false
  }
  const tbody = document.querySelector("tbody")
  const tr = document.createElement("tr")
  const td = document.createElement("td")
  const button = document.createElement("button")
  button.innerText = "Remove"
  button.className = "btn btn-remove"
  button.onclick = removeProduct
  td.appendChild(button)
  td.className="action"

  tr.innerHTML = `
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${Number(priceProduct).toFixed(2)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
  `
  tr.className ="product"
  tr.appendChild(td)
  tbody.appendChild(tr)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeBtns = document.querySelectorAll(".btn-remove")
  removeBtns = [...removeBtns]
  removeBtns.forEach(element=>{
     //bonus
     element.onclick=removeProduct
  })

  const create = document.getElementById("create")
  create.onclick = createProduct
});
