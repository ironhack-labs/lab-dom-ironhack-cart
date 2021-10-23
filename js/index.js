// ITERATION 1







function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').textContent);
  const quantity = parseFloat(product.querySelector('.quantity input').value);
  var subtotal = product.querySelector(".subtotal span");

  var total = price * quantity;


  var calculatePrices = document.querySelector("#calculate");
  console.log(total);

  subtotal.innerHTML = total;
  var subtotal = product.querySelector(".subtotal span");

  return total;










  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  var products = document.querySelectorAll(".product");
  var priceTotal = 0;

  products.forEach(elem => { priceTotal += updateSubtotal(elem) })


  var totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = priceTotal;











  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  console.log("He entrado");

  const target = event.currentTarget;


  target.parentNode.parentNode.remove();












  //... your code goes here
}

// ITERATION 5




function createProduct() {

  var nameNew = document.querySelector(".newProduct").value;
  var priceNew = document.querySelector(".newUnitPrice").value;




  var section = document.querySelector(".tbody");
  console.log(section);


  section.innerHTML += ` <tr class="product">
        <td class="name">
          <span>${nameNew}</span>
        </td>
        <td class="price">$<span class="classNumber">${priceNew}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
      </tr>`




  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  var buttonCreate = document.querySelector("#create");
  buttonCreate.addEventListener('click', function () {

    createProduct();
    addTrash();
  });


  addTrash();

  function addTrash() {
    var trash = document.querySelectorAll(".btn-remove");

    trash.forEach(elem => elem.addEventListener('click', removeProduct))
    console.log(trash)
  }
});
