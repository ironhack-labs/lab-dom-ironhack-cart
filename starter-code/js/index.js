const container = document.querySelector('.cart')
const productos = document.querySelector('.productos')
const calculatePriceButton = document.getElementById('calc-prices-button')
const createItemButton = document.querySelector('.new-item-create')
const totalPriceSpan = document.getElementById('total-price-span')
 
const deleteItem = e => {
  productos.removeChild(e.target.parentElement.parentElement) 
}

const updatePriceByProduct = e => { 
  const currentInput = e.target
  const unitPriceElement = currentInput.parentElement.previousSibling.children[0]
  const unitPrice = Number(unitPriceElement.innerText.slice(1))
  const subTotalElement = currentInput.parentElement.nextSibling.children[0]
  const subTotal = unitPrice * Number(currentInput.value)
  subTotalElement.innerText = "$" + subTotal.toFixed(2)
}


window.onload = function(){
  
}

const createButton = document.querySelector("#create-button");
createButton.onclick = (e) => {
  const productName = document.querySelector("#productName");
  const productPrice = document.querySelector("#productPrice");
  createNewItem(productName.value, productPrice.value)
}

const createNewItem = (productName, productPrice) => {
  const productRow = document.createElement("div")
  productRow.classList.add("product")
  

  const productNameSpan = document.createElement("span")
  productNameSpan.innerText = productName;
  productRow.appendChild(productNameSpan);

  const productCostDiv = document.createElement("div")
  const productCostSpan = document.createElement("span")
  productCostSpan.innerText = "$" + productPrice;
  productCostDiv.appendChild(productCostSpan);
  productRow.appendChild(productCostDiv);

  const productQtyDiv = document.createElement("div")
  const productQtyLabel = document.createElement("label")
  productQtyLabel.innerText = "QTY";
  productQtyDiv.appendChild(productQtyLabel);
  const productQtyInput = document.createElement("input")
  productQtyInput.type = "number"
  productQtyInput.value = 1
  productQtyInput.onkeyup = updatePriceByProduct
  productQtyInput.onchange = updatePriceByProduct
  productQtyDiv.appendChild(productQtyInput)
  productRow.appendChild(productQtyDiv);

  const productsubTotalDiv = document.createElement("div")
  const productsubTotalSpan = document.createElement("span")
  productsubTotalSpan.innerText = `$` + productPrice;
  productsubTotalDiv.appendChild(productsubTotalSpan);
  productRow.appendChild(productsubTotalDiv);

  const deleteProductDiv = document.createElement("div")
  const deleteProductButton = document.createElement("button")
  deleteProductButton.innerText = "Delete"
  deleteProductButton.classList.add("btn-delete")
  deleteProductButton.onclick = deleteItem
  deleteProductDiv.appendChild(deleteProductButton)
  productRow.appendChild(deleteProductDiv)
  
  productos.appendChild(productRow);
}

calculatePriceButton.onclick = (e) =>{
  const productosChildren = [...productos.children]
  let sum = 0;
  productosChildren.forEach(row=>{
    const divWithSpan = row.children[3]
    const span = divWithSpan.children[0]
    const spanText = span.innerText
  sum += Number(spanText.slice(1))
    console.log(sum)
  })

  totalPriceSpan.innerText = sum.toFixed(2);

}