// ITERATION 1

function updateSubtotal(product) {
  

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input')
  
  //console.log(price)

  //console.log(quantity.valueAsNumber)
   
// convertir el precio en un numero real multiplicable
  
  const realPrice = parseFloat(price)

//adquiero el valor de quatity como un numero

  const realQuantity = quantity.valueAsNumber

//consigo el subtotal del numero de productos por su precio

  const valueTotal = realPrice * realQuantity

  //console.log(valueTotal)


//asigno el el spam a una variable para retornarla despues al dom con el valor total de los productos.
  
  const subtotal = product.querySelector('.subtotal span')

  subtotal.innerHTML = valueTotal


    return subtotal
  
}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.


  
  //const singleProduct = document.querySelector('.product');

  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  

  const productos = document.querySelectorAll('.product')

  //console.log(productos)
  
  productos.forEach(elm => { 
    //console.log(elm)

    updateSubtotal(elm)

    
  })

  // ITERATION 3


  

  const subtotal = document.querySelectorAll(".subtotal span")


  //console.log(typeof( subtotall[0].innerHTML))
  //console.log(subtotall[1].innerHTML)

  const realNumber1 = parseFloat(subtotal[0].innerHTML)
  const realNumber2 = parseFloat(subtotal[1].innerHTML)
  

  const sumatory = realNumber1 + realNumber2
  
  //console.log(sumatoria)

  const totalPrice = document.querySelector("#total-value span")
  //const price = product.querySelector(".price span").innerHTML;

  totalPrice.innerHTML = sumatory
  
  
  console.log(totalPrice)
  

  
  


  
  

  //console.log (typeof (realNumber))


  

  //const realSub = parseFloat(subtotall)
  
  


  //console.log (realSub)
  


  
  


  


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
