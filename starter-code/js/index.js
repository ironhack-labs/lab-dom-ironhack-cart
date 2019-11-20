let cart = document.getElementById('inside');
let calc = document.getElementById('calc');


//  function addProduct() {

  let addNew = document.getElementById('adding');

  addNew.onclick = function() {



    // let tableProduct = document.getElementsByTagName("tbody");
   

    let productName = document.getElementById("newproduct").value
    let productPrice = Number(document.getElementById("newprice").value).toFixed(2);



    let newRowhtml = `



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
    let newproduct = document.createElement("tr")
    newproduct.classList.add('product');
    newproduct.innerHTML = newRowhtml;

    let selectTbody =  document.querySelector('tbody');
    selectTbody.insertBefore(newproduct, selectTbody.childNodes[0]);


  document.getElementById("newproduct").value = ""
  document.getElementById("newprice").value = ""

      



//  }

//  addProduct();



}

function deleteItem() {
  
}


function updateSubtot(product) {

  let products = document.getElementsByClassName("product")

  let realTotal = 0;

  for(let i=0;i<products.length;i++){
    let current = products[i];


  let quantityInput = current.querySelector('.qty input');
  let qty = quantityInput.value;
 

  let price = current.querySelector('.pu span').innerText;



  let result = price * qty;
 


  let sub = current.querySelector('.subtot')

  sub.innerText = '$'+result.toFixed(2);
  realTotal += result;
 
  // put them in the subtotal spot

  let actualTotal = document.querySelector("#eltotal > span");
  actualTotal.innerText = realTotal.toFixed(2);
  }




  
}


function calcAll() {
  // Iteration 1.2
  updateSubtot()
}
calc.onclick = calcAll;