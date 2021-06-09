// ITERATION 1

//my test to see if sheets reaaly connected:

//console.log("connected");



//call function inside Windows!!!!!!!!!!!!!! s.u.

//"While developing, make sure you use the same class names as the ones already used (and available in the CSS file) to make our shopping cart nice and clean.""

function updateSubtotal(product) {

  const price = product.querySelector('.price span');  //war schon vorgegeben
//querySelector gives back 1 item!!!!!!  





//extracting value from price span
const priceValue = price.innerHTML;     //OR innerText???   ohne "value"-Property??
//you can use innerHTML here,since price-span has no added html attributes, so value itself = price.innerHTMl.
//here:innerhtml = innerText????



let quantity = product.querySelector(".quantity input [type="number"]")    //quantity inside input-tag

//extracting value from quantity span   

let quantityValue = quantity.innerHTML;    //ohne "value"-Property???

// innerHTML applicable on self-closing element??? input


//calculating subtotal price
let subtotalPrice = quantityValue * priceValue;

  console.log('Calculating subtotal, yey!');

  //... your code goes here   

//get DOM Node that holds subtotal element:

let subtotalNode =   product.querySelector(".subtotal span")


//assigning calculated subtotal price to the corresponding DOM 

product.setAttribute('subtotalNode', 'subtotalPrice');


//Also, make sure this function returns the value of subtotal so you can use it later when needed.
return subtotalPrice;

}




//////////////////////////////////////////////////////////////////////////////////


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
------- end of test   */

  // ITERATION 2   //to add products, just copy paste the elemnt (und values darin ändern, "td" oder so- weil Aufbau mostly the same )

let allProducts = document.getElementsByClassName("product")    //to get all elements with class ,,.product" (currently 2 products only: Ironhack Rubber Duck & Beach Towel)

//hier kein Punkt nach class name weil durch getELEMENTsbyClassName klar ist, dass es sich um Klassenname handelt

//selbes gilt für ID

//updateSubtotal(allProducts);


//forEACH single product, invoke updateSubtotal-function???




//targetting the ,,CAlculate Price" button to add some action to it later
let calculateButton = document.querySelector("#calculate");

//"As such, we will use calculateAll to trigger the update of subtotals for every product.""

//TRIGGER? eventhandler ?? when button ,,calculate" prices 

//when button ,,calculalte prices" is clicked (event!!!!)--> trigger the updateSubtotal-function on every product:

//adding event listener to button:

calculateButton.addEventListener("click", ()=>{

  
allProducts.forEach((product)=>{

//let totalPrice=  updateSubtotal(product);


 



})

// ITERATION 3
  //... your code goes here

//iteration 3: add also that "TOTAL"-DOM gets updated when button is clicked:

  let totalDisplay = document.querySelector("#total-value span")   //target span inside elem with id #total-value??
  
  
  let totalPrice = totalDisplay.innerHTML; //???????? get number inside total


//set value of corresponding DOM element to totalPrice :

totalDisplay.setAttribute('span.innerText', 'totalPrice');







})
//return total price for the products (=sum of all subtotals returned by updateSubtotal()  ) AFTER it has been called with each product:

return totalPrice;

//"Lastly, display that value on your DOM."":




}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
