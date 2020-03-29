// ITERATION 1

function updateSubtotal($product) {

  let unitPrice = $product.querySelector('.price span').innerHTML

  let unitQuantity = $product.querySelector('.quantity input').value

  let subtotal = unitPrice * unitQuantity 

  $product.querySelector('.subtotal span').innerHTML = subtotal

  return subtotal

  }
    // Intento cambio de subtotal al subir cantidades 

  // const qtyArrow = document.querySelectorAll('.qty-arrow')
  // qtyArrow.forEach(elm => {
  //   elm.addEventListener('change', subtotal) 
    
  // })

  // function subtotal(event) {
  //   const target = event.currentTarget
  //   updateSubtotal(target)
  // }

  // ITERATION 2

  function calculateAll() {
  
      // For development testing purposes, paste the following code inside of `calculateAll`:

    const $allProducts = document.querySelectorAll('.product');
    
      // End of test

      let totalPrices = 0

  $allProducts.forEach(elm => {

      totalPrices += updateSubtotal(elm)

  })

  

  // ITERATION 3

  document.querySelector('#total-value span').innerHTML = totalPrices
  
  }

  window.addEventListener('load', () => {

    const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
  });
  

// ITERATION 4
  
  const allRemoveButtons = document.querySelectorAll('.btn-remove')

  const productsListToRemove = document.querySelector('tbody')
    
    allRemoveButtons.forEach( elm => {
      elm.addEventListener('click', removeProduct)  
       
    })

    
    function removeProduct(event) {
      
      const target = event.currentTarget;
      const elementToRemove = target.parentNode.parentNode
      elementToRemove.remove()
      calculateAll()

      console.log('The target in remove is:', elementToRemove);
      //... your code goes here
    }
// ITERATION 5



  function createProduct() {

    const newProductName = document.querySelector('.create-product .prod-name').value

    const newProductPrice = document.querySelector('.create-product .prod-price').value

    const tBody = document.querySelector('tbody')

    const trProduct = document.createElement('tr')
      trProduct.setAttribute('class', 'product')
      tBody.appendChild(trProduct)

    const tdName = document.createElement('td')
      tdName.setAttribute('class', 'name')
      trProduct.appendChild(tdName)

    const spanName = document.createElement('span')
      spanName.innerText = newProductName
      tdName.appendChild(spanName)

    const tdPrice = document.createElement('td')
      tdPrice.setAttribute('class', 'price')
      tdPrice.innerText = "€"
      trProduct.appendChild(tdPrice)

    const spanPrice = document.createElement('span')
      spanPrice.innerText = newProductPrice
      tdPrice.appendChild(spanPrice)

    const tdQty = document.createElement('td')
      tdQty.setAttribute('class', 'quantity')
      trProduct.appendChild(tdQty)

    const inputQty = document.createElement('input')
      inputQty.setAttribute('class', 'qty-arrow')
      inputQty.setAttribute('type', 'number')
      inputQty.setAttribute('value', '0')
      inputQty.setAttribute('min', '0')
      inputQty.setAttribute('placeholder', 'Quantity')
      tdQty.appendChild(inputQty)

    const tdSubtotal = document.createElement('td')
      tdSubtotal.setAttribute('class', 'subtotal')
      tdSubtotal.innerText = "€"
      trProduct.appendChild(tdSubtotal)
      
    const spanSubtotal = document.createElement('span')
      spanSubtotal.innerText = "0"
      tdSubtotal.appendChild(spanSubtotal)
      
    const tdAction = document.createElement('td')
      tdAction.setAttribute('class', 'action')
      trProduct.appendChild(tdAction)
    
    const button = document.createElement('button')
      button.setAttribute('class', 'btn btn-remove')
      button.innerHTML = "Remove"
      tdAction.appendChild(button)
      

  }

    const btnCreateProduct = document.querySelector('.btn-create')
      btnCreateProduct.addEventListener('click', createProduct)

    













