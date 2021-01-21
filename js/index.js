// ITERATION 1

function updateSubtotal(product) {
  const price = (product.querySelector(".price span").innerText)
  const quantity = (product.querySelector('.quantity input').value)
  const subTotal = price * quantity 
  
  let campoSubTotal = product.querySelector(".subtotal span")

  campoSubTotal.innerText = subTotal 
return subTotal
}

  // ITERATION 2
/*  version de Viviana
let products = document.getElementsByClassName('product')
prodArr = [...products]
let total=0
for (i=0;i<prodArr.length;i++){
  total += updateSubtotal(prodArr[i])
  const totalPrice=document.querySelector('#total-value span')
  totalPrice.innerHTML = total
}
}

*/


function calculateAll() {
  $productos = document.querySelectorAll('.product')
  let acumSubtotales = 0
  $productos.forEach((producto)=>{
    acumSubtotales+=updateSubtotal(producto)
  })
// ITERATION 3
document.querySelector('#total-value span').innerText = acumSubtotales
}
  


  

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5
 
function createProduct() {
  
  const createProdBtn =  document.querySelector('#create button')

  createProdBtn.addEventListener('click',(()=>{
    const newProdName = document.querySelector('.create-product input').innerText
    const newProdPrice =document.querySelector('.create-product input').value

    //let newRowClass = document.classList.add("product")
    let newRowClass = document.createElement("tr")
        newRowClass.classList.add("product")
    let newRowName = document.createElement("td")
        newRowName.classList.add("name")
        newRowClass.appendChild(newRowName)

        newRowNameText =document.createTextNode(`${NewProdName}`)
    let newRowProdPrice =document.createElement("td")

    let newRowQuantity
    let newRowSubtotal
    let newRowBtn
    document.createElement("tr")
  }))

  /*
  <tr class="product">
          <td class="name">
            <span>Ironhack Rubber Duck</span>
          </td>
          <td class="price">$<span>25.00</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
  */
  /*
  <td class="name">
            <span>Ironhack Rubber Duck</span>
          </td>
          <td class="price">$<span>25.00</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  */
  /*
  <tr class="create-product">
          <td>
            <input type="text" placeholder="Product Name" />
          </td>
          <td>
            <input type="number" min="0" value="0" placeholder="Product Price" />
          </td>
  */
  //botonEscondeAnimales.addEventListener("click",()=>{areaAnimales.classList.add("hidden")})

  


  //<button id="create" class="btn">Create Product</button>
/*
}
*/
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});


