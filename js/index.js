// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')

  const sub = product.querySelector('.subtotal span')
  const priceNum = Number(price.innerHTML)
  const quantityNum = Number(quantity.value)
  const mult = priceNum * quantityNum
  sub.innerHTML = mult
  
  }



function calculateAll() {
  let products = document.getElementsByClassName('product')
  prodArr = [...products]
  let total = 0
  for (i=0; i<prodArr.length; i++) {
    total += updateSubtotal(prodArr[i])
    const totalPrice = document.querySelector('#total-value span')
    totalPrice.innerHTML = total
  }
}



function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
}

// ITERATION 5

  function createProduct() {
    let name = document.querySelectorAll('.create-product input')[0].value;
    let price = document.querySelectorAll('.create-product input')[1].value;
    let newRow = document.createElement('tr');
    newRow.classList.add('product');
    newRow.innerHTML = `
             <td class='name'>
               <span>${name}</span>
             </td>
             <td class='price'>$<span>${price}</span></td>
             <td class='quantity'>
               <input type='number' value='0' min='0' placeholder='Quantity' />
             </td>
             <td class='subtotal'>$<span>0</span></td>
             <td class='action'>
               <button class='btn btn-remove'>Remove</button>
             </td>`;
    newRow.querySelector('.btn-remove').addEventListener('click',(e)=>{
      removeProduct(e);
      calculateAll();
    });
    document.querySelector('tbody').appendChild(newRow);
  }


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


});
