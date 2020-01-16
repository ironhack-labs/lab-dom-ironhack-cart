var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
var btQuant = document.getElementById('calc');

var createTV = document.getElementById('createTextValue');
var createVV = document.getElementById('createValueValue');


var displayTotX = document.querySelectorAll("td.subtot");
var displayTotAll = document.getElementById('totalval');

function updateSubtot(targetElement) {
        let valPrix =targetElement.parentElement.parentElement.previousSibling.previousSibling.firstChild.nextSibling.firstChild.textContent;         
        targetElement.parentElement.parentElement.nextSibling.nextSibling.textContent  = (Number(targetElement.value) * Number(valPrix)).toString()+" $";                   
}   

function calcAll() {
    //console.log(displayTotX);
    let total = 0;
    displayTotX.forEach( function (displayTot) {
        //displayTot.textContent.split(' ')[0];
        total += Number(displayTot.textContent.split(' ')[0]); 
    });
    displayTotAll.textContent = total.toString(); 
}

calc.onclick = calcAll;

window.addEventListener('change', function (event) {
        var targetElement = event.target || event.srcElement;
        updateSubtot(targetElement)
});

var delButton = document.querySelectorAll('.btn-delete');

window.addEventListener('click', function (event) {
     var targetElement = event.target || event.srcElement;
         //console.log(targetElement.textContent)  ;     
         if ( targetElement.textContent.includes("Delete") ) {
            identifyAndDestroy(targetElement);
         }
         if ( targetElement.textContent.includes("Create") ) {
            createANew(targetElement);
         }

});

function identifyAndDestroy(targetElement){
    
  const products = document.querySelectorAll(".product");
  let currentProduct = null;
  products.forEach(p => {
    //if (p.contains(e.target)) currentProduct = p;
    if (p.contains(targetElement)) {
        currentProduct = p;
    }
  
  });
  currentProduct.parentNode.removeChild(currentProduct);; 
}

function createANew(targetElement){
    alert(createTV.value); 
    alert(createVV.value);

    let addCartTab = document.getElementById('cart');
    const newChild = document.createElement("tbody"); // creates a new div
      newChild.className = "block"; // adds a CSS class on the newly created div
      newChild.style.color = "green";
      newChild.innerHTML= `<tr class="product">        <td class="name">
          <span> ${createTV.value}</span></td>  <td class="pu"> $<span>${createVV.value}</span>
        </td>        <td class="qty"> <label>            <input type="number" value="0" class="inpuQte">          </label>        </td>            <td class="subtot">          $<span>0</span></td>        <td class="rm">   <button class="btn btn-delete">Delete</button> </td>      </tr>`;      
      addCartTab.appendChild(newChild);
    displayTotX = document.querySelectorAll("td.subtot");  
}

