// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  if (parseFloat(quantity.value)<=0) {
    alert("error, wrong input")
  }else{
    let subTotal = parseFloat(price.innerHTML)*parseFloat(quantity.value)
    let subTotalSpan = product.querySelector('.subtotal span')
    subTotalSpan.innerHTML = subTotal
    console.log("whats goin on")
    return subTotal
    }
  }


function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let productList = document.querySelectorAll('.product');
  let total = 0
  for (let i = 0; i < productList.length; i++) {
    let subTotal = updateSubtotal(productList[i])
    total += subTotal
  }
  // ITERATION 3
  //... your code goes here
  let sumTotal = document.body.querySelector("h2 span")
  sumTotal.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let tableRow = target.closest(".product")
  let tableRowParent = tableRow.closest("tbody")
  tableRowParent.removeChild(tableRow)
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // const target = event.currentTarget
  
  // tableRowParent.appendChild(tableRow)
  const newRow = document.createElement("tr")
  newRow.setAttribute('class', 'product');
  
  let selectElement = document.querySelector('tfoot')
  let newProduct = selectElement.getElementsByTagName('input')[0].value
  let newPrice = selectElement.getElementsByTagName('input')[1].value

  newRow.innerHTML =`
          <td class="name">
            <span>${newProduct}</span>
          </td>
          <td class="price">$<span>${newPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
`;
let parent = document.querySelector("tbody")
parent.appendChild(newRow)
newProduct = selectElement.getElementsByTagName('input')[0].value = ''
newPrice = selectElement.getElementsByTagName('input')[1].value = 0
}

window.addEventListener('click', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeButtonList = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeButtonList.length; i++) {
    removeButtonList[i].addEventListener('click', removeProduct)
  }
  const createProductButton = document.getElementById('create');
  createProductButton.addEventListener('click', createProduct);
})

