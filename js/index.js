// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  console.log('Calculating subtotal, yey!');
  let quantity = product.querySelector(".quantity input").value
  let price = product.querySelector(".price span").textContent
  let subtotalPrice = quantity*price;
  product.querySelector(".subtotal span").textContent = subtotalPrice
  return subtotalPrice
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let Total = 0
  const singleProduct = document.querySelector('.product');
  const AllProducts = document.querySelectorAll(".product");
  const subtotalPrice = document.querySelector(".subtotal span");
  subtotalPrice.textContent=updateSubtotal(singleProduct)
  // end of test

  // ITERATION 2
  //... your code goes here
  for(let i = 0;i<AllProducts.length;i++){
    Total += updateSubtotal(AllProducts[i])
  }
  console.log(Total)

  // ITERATION 3
  //... your code goes here
  const Mostrar = document.querySelector("#total-value span")
  Mostrar.textContent = Total
}


// ITERATION 4

function removeProduct(event) {
  event.preventDefault()
  const target = event.currentTarget;

  if(event.target.classList.contains("btn-remove")){

  event.target.parentElement.parentElement.remove()
}
  //... your code goes here
}

// ITERATION 5

function createProduct(e) {
  //... your code goes here
  e.preventDefault()
  const Table = document.querySelector("tbody")
  const Product = e.target.parentElement.parentElement.children[0].children[0].value
  const Price = e.target.parentElement.parentElement.children[1].children[0].value
  const AñadirProducto = document.createElement("tr")
  AñadirProducto.classList.add("product")
  AñadirProducto.innerHTML = `
          <td class="name">
            <span>${Product}</span>
          </td>
          <td class="price">$<span>${Price}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `
  Table.appendChild(AñadirProducto)
  const SelectInput = document.querySelector(".create-product") 
  SelectInput.childNodes[1].children[0].value = ""
  const SelectPrice = document.querySelector(".create-product")
  SelectPrice.childNodes[3].children[0].value =""

  


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const Remove = document.querySelector("#cart")
  Remove.addEventListener("click",removeProduct)
  const Crear = document.querySelector("#create")
  Crear.addEventListener("click",createProduct)

  //... your code goes here
});
