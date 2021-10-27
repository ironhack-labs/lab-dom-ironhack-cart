// ITERATION 1

//const { ConsoleMessage } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").textContent
  const quantity = product.querySelector(".quantity input").value
  const subtotal = price * quantity
  const finalPrice = product.querySelector(".subtotal span")
  finalPrice.innerHTML = subtotal
  return subtotal
  
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  const allProducts = document.querySelectorAll(".product")
  const totalPrice = document.querySelector("#total-value span")
  
  const newArr = Array.from(allProducts)
  const total = newArr.reduce((acc, curr)=>{
let b = updateSubtotal(curr)
    return acc+b
  },0 )
  totalPrice.textContent = total
  
  

}

// ITERATION 4


function removeProduct(event) {
  const target = event.currentTarget;
  const parent = target.parentElement.parentElement.parentElement
  parent.removeChild(target.parentElement.parentElement)
  calculateAll()

  //... your code goes here
}
const remove = document.querySelectorAll('.btn-remove');
remove.forEach(a => {
  a.addEventListener('click', removeProduct)
}); 
// ITERATION 5
const createbutton = document.getElementById('create');
createbutton.addEventListener('click', createProduct);

function createProduct() {
  const name = document.querySelector('.create-product td input[type=text]').value
  const price = document.querySelector('.create-product input[type=number]').value
  
  const tbody = document.querySelector('tbody')
  const trprod = document.createElement('tr')
  tbody.appendChild(trprod)
  
  const newtdname = document.createElement('td')
  const newspanName = document.createElement('span')
  newtdname.appendChild(newspanName)
  
  trprod.classList.add("product")

  newtdname.classList.add('name')
  
  newspanName.textContent = name
  
  
  

  const newtdprice = document.createElement('td')
  newtdprice.classList.add('price')
  const newspanPrice = document.createElement('span')
  newspanPrice.textContent = price
  newtdprice.appendChild(newspanPrice)
  

  const newtdquant = document.createElement('td')
  newtdquant.classList.add('quantity')
  const quantinput = document.createElement('input')
  newtdquant.appendChild(quantinput)
  quantinput.setAttribute("type","number")
  quantinput.setAttribute("value","0")
  quantinput.setAttribute("min","0")
  quantinput.setAttribute("placeholder","Quantity")

  const subt = document.createElement("td")
  subt.classList.add('subtotal')
  subt.innerHTML = "$ "
  const subtspan = document.createElement('span')
  subtspan.innerHTML = "0"
  subt.appendChild(subtspan)

  const action = document.createElement('td')
  action.classList.add('action')
  const actionbutton = document.createElement('button')
  actionbutton.classList.add('btn')
  actionbutton.classList.add('btn-remove')
  actionbutton.innerHTML = "Remove"
  //  
  //  remove = document.querySelector('.btn-remove');
  //  remove.addEventListener('click', removeProduct)


  trprod.appendChild(newtdname)
  trprod.appendChild(newtdprice)
  trprod.appendChild(newtdquant)
  trprod.appendChild(subt)
  trprod.appendChild(actionbutton)


  
  console.log(trprod)




  
  
  
  
  
  
  

}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

 

  //... your code goes here
});
