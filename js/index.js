// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  // Step 1: Fetching the elements

  let price = product.querySelector(".price span"); //works
  let quantity = product.querySelector(".quantity input"); //works
  
  //console.log("PRICE>>", price);

  //Step 2: Extracting the values
  
  let productPrice = price.innerHTML;
  //console.log("toto", productPrice); 

  let dynamicQty = quantity.value; 
  //console.log("dynamicQty >>", dynamicQty); 

  // Step 3: Calculate subtotal price

  let subTotal = productPrice * dynamicQty;
  //console.log(subTotal); // works

  // Step 4: Fetch DOM elt of Subtotal

  let domSubTotal = product.querySelector(".subtotal span");
  //console.log( "DomSubTotal >>", domSubTotal); 
  
  // Step 5: set subtotal price to corresponding DOM elt and return value

  return  domSubTotal.innerHTML = subTotal ;
  //console.log("subTotalPrice >>> ",subTotalPrice); 
  
}

function calculateAll() {


// ITERATION 2
  
  const total = document.querySelector("#total-value span");
  const allProducts = document.getElementsByClassName("product");
  var allPrdtsArray  = [...allProducts];
  let sum = 0;
  //console.log("allProducts >>>", allProducts); //tested : works
  // console.log(typeof allProducts); // retourne objet et pas array
    // convertit en array
  //console.log("array", allPrdtsArray);

    allPrdtsArray.forEach(product => {
      let pleaseWork = Number(updateSubtotal(product));
      sum += pleaseWork;
      
    })
     total.innerHTML = sum;
     
    };



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

  const removeProductBtn = document.querySelectorAll(".btn-remove");
  btn.addEventListener('click', removeProduct);

  })
  
