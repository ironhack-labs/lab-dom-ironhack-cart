// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input ').value;

  const subtotal= parseFloat(price) * parseFloat(quantity)
  product.querySelector(".subtotal").innerHTML = subtotal;
  return subtotal
}



// code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // ITERATION 2

function calculateAll() {
  const products = document.querySelectorAll('.product');
  
  const prices = [...products].map(product => updateSubtotal(product))

  // end of test

  
  
  // ITERATION 3
   const resultado = prices.reduce(function(acc,price){
        const total = acc + price;
        
        return total;
    },0)  


   document.querySelector("#total-value span").innerHTML= resultado
   return resultado;
}



// ITERATION 4

function removeProduct() {
  const boton = document.querySelectorAll('.btn.btn-remove')
  boton.forEach(btn => (btn.onclick = () => btn.parentNode.parentNode.remove()))
  //console.log('The target in remove is:', target);
  

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProduct = document.querySelector('.new-product')
  const newPrice = document.querySelector('.new-price')
  const table = document.querySelector('tbody')
  const createButton = document.querySelector('#create')

  createButton.onclick = () => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `<tr class="product">
    <td class="name">
      <span>${newProduct.value}</span>
    </td>
    <td class="price">$<span>${newPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`

    newRow.className = `product`
    table.appendChild(newRow)
    removeProduct()

    newProduct.value = ''
    newPrice.value = 0
  }
}
createProduct()
removeProduct()


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
