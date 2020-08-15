// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price=product.querySelector('.price span').innerHTML;
  const quantity=product.querySelector('.quantity input').value;
  product.querySelector('.product .subtotal span').innerHTML = price * quantity;
}

function sum(){
  const products = document.querySelectorAll('.product');
  let total = 0
  products.forEach(p => {
      const subtotal = p.querySelector('.product .subtotal span').innerHTML
      total = total + Number(subtotal)
  })
  document.querySelector("#total-value span").innerHTML = total
}


function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const products=document.querySelectorAll('.product');
  products.forEach(p=>{
    updateSubtotal(p)
  })
  // ITERATION 3
  //... your code goes here
  sum()
}

// ITERATION 4

function removeProduct(product) {
  const target = product.currentTarget;
  console.log('The target in remove is:', product);
  //... your code goes here
  
  const btn=product.querySelector(".btn-remove")
  const subttl = product.querySelector('.product .subtotal span').innerHTML 
  btn.addEventListener("click",()=>{
    product.remove()
    sum() - subttl
  })
}


// ITERATION 5

function createProduct() {
  //... your code goes here
    const newPro=document.querySelector('.product').cloneNode(true);
    const name=newPro.querySelector('.name span')
    const price=newPro.querySelector('.price span')
    name.innerText=document.querySelector('#new-pro').value
    price.innerText=document.querySelector('#new-price').value
    document.querySelector('tbody').appendChild(newPro)
    removeProduct(newPro)
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', ()=>{
    calculateAll();
    alert("Caluclando")
  });

  const newbtn=document.querySelector('#create')
  newbtn.addEventListener('click', createProduct)

  //... your code goes here
  const products=document.querySelectorAll('.product');
  products.forEach(p=>{
    removeProduct(p)
  })
});


