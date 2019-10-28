
window.onload = () => {
    var $cart = document.querySelector('#cart tbody');
    var $calc = document.getElementById('calc');
      function updateSubtot($product) {
        // Iteration 1.1
        console.log('child nodes: ' + $product);
        
          let subTotal = $product[3].querySelector('span').innerText * $product[5].querySelector('input').value;
          $product[7].querySelector('span').innerText = subTotal;
          return subTotal;
        
      }
      function calcAll() {
        // Iteration 1.2
        let $products = document.querySelectorAll('tr');
        console.log($products)
        let total = 0;
        $products.forEach(($product,index) => {
          if(index > 0) {
            if ($product.childNodes[3].querySelector('span').innerTex > 0) {
            total += updateSubtot($product.childNodes);
            } else {
              alert(`Please enter the quantity for ${index+1}th row`);
            }
          }
        });
        document.getElementsByTagName('h2')[0].querySelector('span').innerText = total;
      }
      $calc.onclick = calcAll;
    };


