 function updateSubtotal(product) {
     console.log('Calculating subtotal, yey!');
  
     let price = parseFloat(product.querySelector('.price span').textContent);
     let quantity = parseFloat(product.querySelector('.quantity input').value);
     let subTotal = price * quantity;
  
     product.querySelector('.subtotal span').textContent = subTotal;
     return subTotal;
   }
  
  
   function calculateAll() {

     const singleProduct = document.querySelector('.product');
     updateSubtotal(singleProduct);
  
     // ITERATION 2
     let variousProducts = document.querySelector('.product');
     let totalPrice = 0;
     variousProducts.forEach((elm) => {
       totalPrice += updateSubtotal(elm);
     })
     // ITERATION 3
     let totalValue = document.querySelector('total-value span')
     totalValue.textContent = totalPrice;
   }
  
   // ITERATION 4
  
   function removeProduct(event) {
     const target = event.currentTarget;
     console.log('The target in remove is:', target);
    
     target.parentNode.parentNode.remove();
   }
  
   // ITERATION 5
  
   function createProduct() {
     let newProductName = document.querySelector('.new-product-name').value;
     let newProductPrice = document.querySelector('.new-product-price').value;
  
     const newProduct = `
     <tr class="product">
       <td class="name">
         <span>${newProductName}</span>
       </td>
       <td class="price">$<span>${newProductPrice}</span></td>
       <td class="quantity">
         <input type="number" value="0" min="0" placeholder="Quantity" />
       </td>
       <td class="subtotal">$<span>0</span></td>
       <td class="action">
         <button class="btn btn remove">Remove</button>
       </td>
     </tr>
     `
     document.querySelector('.tbody').innerHTML += newProduct;
   }
  
   window.addEventListener('load', () => {
     const calculatePricesButton = document.getElementById('calculate');
     calculatePricesButton.addEventListener('click', calculateAll);
  
     const createProductButton = document.getElementById('create');
     createProductButton.addEventListener('click', function(){
       createProduct();
       scanDeleteButtons;
     });
  
     function scanDeleteButtons() {
       const deleteButton = document.querySelectorAll('.btn-remove');
       deleteButton.forEach(elm => {
         elm.addEventListener('click', removeProduct);
       })
     }
  
     const deleteButton = document.querySelectorAll('.btn-remove');
     deleteButton.forEach( (elm => {
       elm.addEventListener('click', removeProduct);
     }))
   });
  
