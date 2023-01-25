// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!'); 


  let priceDOM = product.querySelector(".price span")
  let price = priceDOM.innerText
  let quantityDOM = product.querySelector(".quantity input")
  let quantity = quantityDOM.value
  let cost1 = quantity * price 
  
  let subtotalDOM = product.querySelector(".subtotal span")

  subtotalDOM.innerText = cost1

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');

  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  
    let totalPriceDOM = document.querySelector("#total-value span")
    

    let trProductsDOM = document.querySelectorAll(".product")

    trProductsDOM.forEach((eachProduct) => {
      updateSubtotal(eachProduct)
      
    })

    let sumSubTotal = 0;

    trProductsDOM.forEach((eachProduct) => {
      let subTotaleachProduct = eachProduct.querySelector(".subtotal span")
      sumSubTotal = sumSubTotal + Number(subTotaleachProduct.innerText)  
    })

    totalPriceDOM.innerText = sumSubTotal

  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  /*const target = event.currentTarget;
  console.log('The target in remove is:', target); */
  //let thisButton = event.currentTarget
 // let removeBtn = thisButton
/*
  removeBtn.forEach((elem) =>{
    elem.parentNode.remove()
  })*/

  event.currentTarget.parentNode.parentNode.remove()

  calculateAll()
  //... your code goes here
}

// ITERATION 5

let newProducInputs = document.querySelectorAll(".newName input")

function createProduct() {

  let bodySelector = document.querySelector("tbody")
  let newProduct = document.createElement("tr")
  let newProductDOM = document.querySelector("tr")
  newProductDOM.innerHTML = `
  
                <tr class="product">
                <td class="name">
                  <span>""</span>
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
  
  `

  let newNameProduct = document.querySelector(".name span")
  newNameProduct.innerHTML = newProducInputs.value

  
/*<tr class="product">
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
        </tr>*/
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let allRemoveBtn = document.querySelectorAll(".btn-remove");
  allRemoveBtn.forEach((elem) => {
    
    elem.addEventListener("click", removeProduct)
  })

  let createBtn = document.querySelector("#create")
  createBtn.addEventListener("click", createProduct)

  
  
  
/*allRemoveBtn.addEventListener("click", removeProduct())*/

  //... your code goes here
});

