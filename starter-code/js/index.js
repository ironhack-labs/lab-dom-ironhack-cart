let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');


//  function addProduct() {

  let addNew = document.getElementById('adding');

  addNew.onclick = function() {



    // let tableProduct = document.getElementsByTagName("tbody");
    let newproduct = document.createElement("tr")
    newproduct.classList.add('product');

    let productName = document.getElementById("newproduct")
    let productPrice = document.getElementById("newprice");



    let productStar = `

        <td class="name">
          <span>${productName}</span>
        </td>
    
        <td class="pu">
          $<span>${productPrice}</span>
        </td>
    
        <td class="qty">
          <label>
            <input type="number" value="0" min="0">
          </label>
        </td>
    
        <td class="subtot">
          $<span>0</span>
        </td>
    
        <td class="rm">
          <button class="btn btn-delete">Delete</button>
        </td>
    
    
    `
    let newRow = newproduct.innerHTML = productStar;
    
    
    // console.log(productName.value, productPrice.value, productStar)


     cart.append(newRow);




  



//  }

//  addProduct();





}

function updateSubtot($product) {
  // Iteration 1.1
}

function calcAll() {
  // Iteration 1.2
}
calc.onclick = calcAll;