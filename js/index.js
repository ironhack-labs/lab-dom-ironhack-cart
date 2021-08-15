// ITERATION 1

function updateSubtotal(product) {
  // let productPrice = document.querySelector('.price span')
  // let quantity = document.querySelector('.quantity input').value
  let subTotal = document.querySelector('.subtotal span')

  // console.log("price" + productPrice.textContent)
  // console.log("quantity " + quantity)

  console.log(product.querySelector(".quantity input ").value)
  console.log(product.querySelector(".price span").textContent)

  product.querySelector(".subtotal span").textContent = product.querySelector(".quantity input").value *
    product.querySelector(".price span").textContent

  console.log(product.querySelector(".subtotal span").textContent)

  // subTotal.textContent = productPrice.textContent * quantity
  // total.textContent = product.querySelector(".subtotal span").textContent

  // console.log("subtotal :  " + subTotal.textContent)

  // console.log('Calculating subtotal, yey!');






  // console.log(typeof parseInt(product.querySelector(".subtotal span").textContent))
  return (product.querySelector(".subtotal span").textContent)
  //... your code goes here

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  let total = document.querySelector('#total-value span')
  total.textContent = 0

  console.log(products.length)
  // updateSubtotal(products);

  // end of test

  // ITERATION 2
  //... your code goes here
  for (i = 0; i < products.length; i++) {
    // console.log(typeof (total.textContent))
    total.textContent = parseFloat(total.textContent) + parseFloat(updateSubtotal(products[i]))
    // console.log(products[i].querySelector(".quantity input").value)
  }



  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);

  // let allParent = document.getElementsByClassName("product")
  // console.log(target.parentNode.parentNode)
  // for (i = 0; i < allParent.length; i++) {
  //   console.log(allParent)
  // }


  target.parentElement.parentElement.remove()
  // target.parentNode.parentNode.remove()
  calculateAll()

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let bodyTable = document.querySelector("#cart tbody")
  let newProduct = document.createElement("tr")
  newProduct.setAttribute("class", "product")
  console.log(newProduct.querySelector(".btn-remove"))

  newProduct.innerHTML =
    `<tr class="product" name="product">
        <td class="name">
          <span>${document.querySelector(".create-product #enter__name").value}</span>
        </td>
        <td class="price">$<span>${document.querySelector(" .create-product #enter__price ").value}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
      </tr> `


  // newProduct.querySelector(".name span").textContent = nameProduct.value
  // newProduct.querySelector(".price span").textContent = document.querySelector(".create-product span").value

  console.log(typeof (newProduct))
  bodyTable.appendChild(newProduct)









}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const productRemoveButton = document.getElementsByClassName("btn-remove");
  for (i = 0; i < productRemoveButton.length; i++) {
    productRemoveButton[i].addEventListener('click', removeProduct)
    console.log(productRemoveButton[i].textContent)
  }

  const productCreateButton = document.getElementById('create');
  productCreateButton.addEventListener('click', createProduct);


  //... your code goes here
});
