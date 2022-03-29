// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

    
    const price = product.querySelector(".price span").innerHTML
    const quantity = product.querySelector('.quantity input').value

    const subtotal = price * quantity
    
    product.querySelector(".subtotal span").innerHTML = subtotal

    return subtotal

    }
  

// ITERATION 2
  //... your code goes here
  const calculateAll = () => {

  const singleProduct = document.querySelectorAll(".product")
  
  let totalValue = 0

	for(let i = 0; i < singleProduct.length; i++){

		totalValue += updateSubtotal(singleProduct[i])
    
	}
  
  let total = document.querySelector("#total-value span")
  
  
  total.innerHTML = totalValue

  return total
  
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