// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  // console.log(price)
  const quantity = product.querySelector('.quantity input').value;
  // console.log(quantity)
  const subtotal = Number(price)*Number(quantity);
  // console.log(subtotal)
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;

}

function calculateAll() {
let total = 0;

  const allProducts = document.querySelectorAll('.product').forEach(function(product){
    total += updateSubtotal(product);
    return total 
  })

  // ITERATION 2
 

  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total ;
  

};


// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productArray = document.querySelector('tbody')
  productArray.removeChild(target.parentNode.parentNode);
}

  const removeBtn = document.querySelectorAll('.btn-remove') 
  for (let btn of removeBtn) {
  console.log(btn)
  btn.addEventListener('click', removeProduct)
  }

// ITERATION 5

function createProduct() {
  const name = document.querySelectorAll('.create-product input')[0].value;
  const price = document.querySelectorAll('.create-product input')[1].value;
  const parentNode = document.querySelector('tbody');
  const newProduct = document.querySelector('.product').cloneNode(true);
  console.log(name)
  newProduct.querySelector('.name').innerHTML = `<span>${name}</span>`
  newProduct.querySelector('.price').innerHTML = `<span>${price}</span>`
  newProduct.querySelector('.quantity').innerHTML = '<input type="number" min="0" value="0" placeholder="Quantity">';
  newProduct.querySelector('.subtotal').innerHTML ='$<span>0</span>';
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);
  parentNode.append(newProduct);
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const addbtn = document.querySelector('#create')
  addbtn.addEventListener('click', createProduct);

  //... your code goes here
});