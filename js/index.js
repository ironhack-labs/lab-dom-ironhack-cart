// ITERATION 1
//it was easier to start  from the bottom would rearrange this code 
//LOL -  create/remo THEN ->  calculate 
//here we are reading the calculations first before seeing products being made 

function updateSubtotal(product) {

  let calculateListner  = document.querySelector('#calculate')
  
  calculateListner.addEventListener('click', () => {
          preventDefault();
  console.log('Calculating subtotal, yey!')  }) //click action listener


   
  const price = document.querySelector('.price span') // getting the price
  let quantity = document.querySelector('input[type="text"]').value
  let subtotal = quantity * Number(price.innerText) //subtotal price will be the result of the multiplication 
  console.log (subtotal) // so i can see it in the browser if its working 
  
  //price.classList.add('priceClass') //? would be easier to add a class to target the spans???? IDK 
  // :(


function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  //we need an event listener for the product name 
  // get the product name call/id 
  //append the child 


  // end of test

  // ITERATION 2
  
  // Its purpose is to call the function updateSubtotal with every tr.product DOM node in the table#cart.
  //let's add a new product to our index.html
  const products = document.querySelectorAll('.product span') // getting the products
  
  products.forEach((product) => {  

    products+= product // adding the new product to the list of products
    console.log( products ) //printing product list in the console
    updateSubtotal(product) += product.price //updating the subtotal
})
   // ITERATION 3
  //gets the final total  the some of sub totals
  //wouldnt just calling the function one last time be enough? :D    arent iteration 2+3 doing the same thing  the dirrections are  confusing
  updateSubtotal()
}
//not specified in the ticket but what happens if the quantity is 0 ...  should through an error ?

// ITERATION 4

function removeProduct(event) { // removes product 
  // needs an event listener for the product button  click 
  //get the id/class of the remove button
  // pass in text message the click of removing a button
  //need to update the dom with remove
  //needs to remove the row of the product 
  //remove product it from the sub total



  let removeProduct  = document.querySelector('.btn btn-remove')
  removeProduct.addEventListener('click', remove => {  // remove button listner 
    remove.preventDefault();
      updateSubtotal(product).price -= product.price  /// can i resue code here  
     

      //remove the page element tr  - table row 
  
  const target = event.currentTarget;
   //do we need a comman prompt
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5
unction createProduct() { 
  
  //FIRST of all the create product is it even nessary for the user 
  // in which site do you know useres create the cproduct  so this functionality  not even be needed  to the shopping cart 
  //unless its a custom order? 
  //is the cart for a superuser/site admin 

  // users mostly add and delete product with a total 
  
  //adding a  new product
  //should be able to add an event listners to the create button on click event 
  //id create for button
  //need an event listner for inner text of the product name  type text  user input 
  //need an event listner for inner  of the product name  type text user input
  // append the child table row
  let addNewProduct  = document.querySelector('#create') 
  addNewProduct.addEventListener('submit', e => {
      e.preventDefault();

      let productNameInput = document.querySelector('.create-product input[type="text"]') // should intake the product name and price  create-product  classs
      let productPriceInput = document.querySelector('.create-product input[type="number"]') // class = create-product 
      // counldnt you add an id to make this easier and stick to one format of looking for elements?  i mean really?  in some places we are looking at id in others we take class name 
      

    
      productName = `${productNameInput.value}` // user inputs for name of product
      productPrice = `${productPriceInput.value}` // user inputs price 
     
      
      let table = document.querySelector('.product') // target the table body we are adding a row to the body
      let tr = document.createElement('tr') /// variable the to hold table   creating a new element for the new row?  

      // we need to add in the input values to the new row 


      table.appendChild(tr)
  //... your code goes here
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  createProduct()
  removeProduct()
  calculateAll()//... your code goes here
});
