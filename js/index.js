// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector(".price span") ;
  const quantity = product.querySelector(".quantity input") ;
  const subtotal = product.querySelector(".subtotal span") ;

  subtotal.innerText = price.innerText * quantity.value ;

  return Number(subtotal.innerText) ;
}

function calculateAll() {
  // ITERATION 2
  const total = document.querySelector("#total-value > span")
  const products = document.querySelectorAll(".product") ;

  let totalValue = 0 ;
  products.forEach(product => totalValue += Number(updateSubtotal(product))) ;

  // ITERATION 3
  total.innerText = totalValue ;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  event.target.parentElement.parentElement.remove() ;
  calculateAll() ;
}

// ITERATION 5

function createProduct(event) {
  const cart = document.querySelector("#cart > tbody") ;
  const createProduct = event.target.parentElement.parentElement ;


  // Very long code, but to try to create a tree via createElement
  // -------------------------------------------------------------

  // const tr = document.createElement("tr") ;
  // tr.classList.add("product") ;
  // cart.appendChild(tr) ;

  // const name = document.createElement("td") ;
  // tr.appendChild(name)
  // const span1 = document.createElement("span") ;
  // span1.innerText = createProduct.children[0].children[0].value ;
  // name.appendChild(span1) ;
  
  // const price = document.createElement("td") ;
  // price.classList.add("price") ;
  // price.innerText = "$" ;
  // tr.appendChild(price) ;
  // const span2 = document.createElement("span") ;
  // span2.innerText = createProduct.children[1].children[0].value ;
  // price.appendChild(span2) ;

  // const quantity = document.createElement("td") ;
  // quantity.classList.add("quantity") ;
  // tr.appendChild(quantity) ;
  // const input1 = document.createElement("input") ;
  // input1.setAttribute("type", "number") ;
  // input1.setAttribute("value", "0") ;
  // input1.setAttribute("min", "0") ;
  // input1.setAttribute("placeholder", "Quantity") ;
  // quantity.appendChild(input1)

  // const subtotal = document.createElement("td") ;
  // subtotal.classList.add("subtotal") ;
  // subtotal.innerText = "$" ;
  // tr.appendChild(subtotal) ;
  // const span3 = document.createElement("span") ;
  // span3.innerText = 0 ;
  // subtotal.appendChild(span3) ;


  // Faster, but with html
  // ---------------------
  cart.innerHTML += `
  <tr class="product">
    <td class="name">
      <span>Ironhack Rubber Duck</span>
    </td>
    <td class="price">$<span>${createProduct.children[0].children[0].value}</span></td>
    <td class="quantity">
      <input type="number" value="${createProduct.children[1].children[0].value}" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `

  let button = cart.querySelectorAll(".btn.btn-remove") ;
  button = button[button.length - 1] ;

  button.onclick = removeProduct
  // don't forget to add an event listener to the new buttons

}

window.addEventListener('load', () => {
  // calculate listener
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // remove product
  const removeBtn = document.querySelectorAll(".product .btn-remove") ;
  removeBtn.forEach(btn => btn.onclick = removeProduct)

  // add product
  const addProductBtn = document.querySelector("#create")
  addProductBtn.onclick = createProduct ;

});
