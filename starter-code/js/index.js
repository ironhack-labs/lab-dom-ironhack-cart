
window.onload = () => {

    var $cart = document.querySelector('#cart tbody');
    var $calc = document.getElementById('calc');
  
      function updateSubtot($product) {
        // Iteration 1.1
          let subTotal = $product[3].querySelector('span').innerText * $product[5].querySelector('input').value;
          $product[7].querySelector('span').innerText = subTotal;
          return subTotal;
        
      }
      function calcAll() {
        // Iteration 1.2
        let $products = document.querySelectorAll('tr');
        let total = 0;
        $products.forEach(($product,index) => {
          if(index > 0) {
            console.log($product.childNodes);
            if ($product.childNodes[5].querySelector('input').value > 0) {
            total += updateSubtot($product.childNodes);
            }
          }
        });
        document.getElementsByTagName('h2')[0].querySelector('span').innerText = total;
      }
    
      $calc.onclick = calcAll;
      let deletebtn = document.getElementsByClassName('btn btn-delete');
      for(let i=0;i<deletebtn.length;i++){
        deletebtn[i].onclick = removeCh;
      } 
      function removeCh(event) {
        console.log(event.currentTarget.parentElement.parentElement);
        event.currentTarget.parentElement.parentElement.remove();
       } 
       document.getElementById('create').onclick = function() {
         let newName = document.querySelector('.new > td > input[type="text"]').value;
         let newPrice = document.querySelector('.new > td > input[type="number"]').value;
       let newRowInnerHtml = `<tr class="product">
       <td class="name">
         <span>${newName}</span>
       </td>
   
       <td class="pu">
         $<span>${newPrice}</span>
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
         <button class="btn btn-delete" >Delete</button>
       </td>
     </tr>`;
     let newRow = document.createElement('tr');
     newRow.classList.add('product');
     newRow.innerHTML = newRowInnerHtml;
     newRow.querySelector('.btn-delete').onclick = removeCh;
     console.log(document.getElementsByTagName('tbody'))
     document.getElementsByTagName('tbody')[0].appendChild(newRow);
    }
      };


