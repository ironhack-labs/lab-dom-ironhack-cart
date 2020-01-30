var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');
var button = document.querySelector('.test');
var product = document.getElementsByClassName('product');


// var btn = document.getElementsByClassName('btn')
// var productName = document.querySelector('#product-name');
// var priceUnit = document.querySelector('#price-unit');

function updateSubtot($product) {
  var price = Number($product.querySelector('.pu span').innerHTML);
  var quantity = Number($product.querySelector('.qty label input').value);
  var total = $product.querySelector('.subtot span');
  
  total.innerHTML = price * quantity;
}





function calcAll() {
  for (var i = 0 ; i< product.length; i++) {
    updateSubtot(product[i]);
  }
  var subTot = document.querySelectorAll('.subtot span');
  var num = 0;

  for (var i = 0 ; i < subTot.length; i++) {
    num += Number(subTot[i].innerHTML);
  }
  document.querySelector('.total-Subtotals').innerHTML = num;
}
calc.onclick = calcAll;





  function createProduct () {
    var btn = document.querySelector('#create');

    btn.addEventListener('click', function() {
      var btn = document.querySelector('#create');
      var productName = document.querySelector('#product-name').value;
      var priceUnit = document.querySelector('#price-unit').value;
      // var tableContainer = document.querySelector('#cart');
      var tbody = document.querySelector('#cart tbody');
      // var trElement = document.createElement(html);
      var html = `<td class="name">
                        <span>${productName}</span>
                      </td>
                  
                      <td class="pu">
                        $<span>${priceUnit}</span>
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
                      </td>`;
      var trElement = document.createElement('tr');
      trElement.classList = 'product';
      trElement.innerHTML = html;
      tbody.appendChild(trElement);

      function clickHandler() {
        trElement.remove();
        trElement.removeEventListener('click', clickHandler);
      }
      
      trElement.querySelector('.btn-delete').addEventListener('click', clickHandler);
    })
  }



createProduct();



// I AM NOT SURE HOW TO USE REMOVE CHILD HERE() But this seems to work. 

function deleteProduct () {
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', function (e) {
        e.currentTarget.parentNode.parentNode.remove();
      })
    }
  }
deleteProduct();
