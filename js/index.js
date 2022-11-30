// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(`.price span`).innerHTML
  
  
  let quantity  = product.querySelector('.quantity input').value
  
  let subtotal = price * quantity 
  let subtotalValue = product.querySelector(`.subtotal span`)

  subtotalValue.innerText = subtotal
  
  




}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  
  // ITERATION 2
 
  let prices = document.querySelectorAll(`.price span`);
  let quantitys = document.querySelectorAll(`.product .quantity input`)
  
  let subtotals = []
  
  
  for(let i=0;i<quantitys.length;i++){
    subtotals[i] = quantitys[i].value*prices[i].innerHTML
    
  }


  let subtotalElm= document.querySelectorAll(`.subtotal span`)
  subtotalElm.forEach((elem,index)=>{
    elem.innerText=subtotals[index]
  })



  // ITERATION 3
  
  let totalValueProd= document.querySelector(`#total-value span`)
  let total=subtotals.reduce((acc,curr)=>acc+curr,0)
 
  totalValueProd.innerText = total
   



}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  
  let elemToErase=target.parentNode.parentNode
  elemToErase.innerHTML=''
  calculateAll()
}

// ITERATION 5

function createProduct() {

  //step1 
  const myNewProduct = document.createElement(`tr`)

  //step2
  myNewProduct.innerHTML= `
  <td class="name">
    <span></span>
  </td>
  <td class="price">$<span></span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`
  myNewProduct.className=`product`
  
  //step 2.2 we add the name and the price of the new product
    //step 2.2.1 getting the values inside the inputs
    const  newName= document.getElementById(`new-name`)
    const newPrice= document.getElementById(`new-price`)
  
    //step 2.2.2 getting the elements where we are going to store the new values

    const myNewProName = myNewProduct.querySelector(`.product .name span`)
    const myNewProPrice = myNewProduct.querySelector(`.product .price span`)
    //step 2.2.3 storing....
    myNewProName.innerText = newName.value
    myNewProPrice.innerText = newPrice.value
  
    // step 2.3 adding the EventListener to remove
    const myNewProBtn = myNewProduct.querySelector(`.btn-remove`)
    console.log(myNewProBtn)
    myNewProBtn.addEventListener(`click`,removeProduct)


  //step 3
  const parentElement = document.querySelector(`tbody`)

  parentElement.appendChild(myNewProduct)

  // cleaning the input

  newName.value=""
  newPrice.value=0
 }

window.addEventListener('load', () => {


  //-----------------------
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  
  //-------------------------------------solution 1 to removeBtns without step 2.3 in createProduct() 
  //***************************(it works but not as expected) we have to do one click before all the btns have the eventlistener
    
  // document.addEventListener(`click`,(e)=>{
    //   if(e.target.className === "btn btn-remove"){
      //     const removeBtns = document.getElementsByClassName(`btn-remove`)
      //     const removeBtnsArray = [...removeBtns]
      //     removeBtnsArray.forEach(elem=> elem.addEventListener(`click`,removeProduct))
      //   }
      // })
      
      
  //------------------------------------solution 2 to removeBtns

  const removeBtns = document.getElementsByClassName(`btn-remove`)
  const removeBtnsArray = [...removeBtns]
  removeBtnsArray.forEach(elem=> elem.addEventListener(`click`,removeProduct))
    

  
  
  //---------------------------------------

  const createBtn = document.getElementById(`create`)

  createBtn.addEventListener(`click`,createProduct)
  

});
