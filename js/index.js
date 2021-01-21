// ITERATION 1
function updateSubtotal(product) {
    const price=product.querySelector('.price span');
    const quantity=product.querySelector('.quantity input');
    const sub=product.querySelector('.subtotal span');
    const priceNumber=Number(price.innerHTML);
    const quantityNum=Number(quantity.value);
    const mult= (priceNumber*quantityNum);
    sub.innerHTML=mult;
    return mult;
}

function calculateAll() {
  // ITERATION 2
  const firstProduct = document.querySelectorAll('.product')[0];
  const secondProduct = document.querySelectorAll('.product')[1];
  updateSubtotal(firstProduct)
  updateSubtotal(secondProduct)
    
  // ITERATION 3
  const totalPrice=document.querySelector('#total-value span')
  console.log(totalPrice)
  const sumAll=Number(updateSubtotal(firstProduct)+updateSubtotal(secondProduct))
  console.log(sumAll)
  totalPrice.innerHTML=sumAll
  return sumAll

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);



    
  /*const quantity=product.querySelector('.quantity input');
  const sub=product.querySelector('.subtotal span');

  const elimAll=Number(quantity, sub)
  elimAll.removeChild()

  console.log(elimAll)

  const elimAll= document.getElementByClassName(".quantity input")
  while(elimAll.firstChild){
    elimAll.removeChild(elimAll.firstChild)
  }
    const elim = document.querySelectorAll(".product")
  elim.removeChild(elim.childNodes[0])
    const elim = document.querySelectorAll(".product")
  elim.removeChild(elim.childNodes[0])
  */
}

// ITERATION 5
  //... your code goes here



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removePricesBtn = document.getElementById('remove');
  removePricesBtn.addEventListener('click', removeProduct);

});
