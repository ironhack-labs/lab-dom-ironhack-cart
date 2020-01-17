var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

let product = document.querySelectorAll(".product")

var $del = document.querySelectorAll('.btn-delete')




function updateSubtot($product) {
  // Iteration 1.1


  let price = $product.querySelector(".pu span").innerHTML
  let quantity = $product.querySelector(".qty input").value
  let multiplicacion = price * quantity
  let subtotalSlice = $product.querySelector(".subtot span")

  subtotalSlice.innerText = multiplicacion

  return multiplicacion
  // let precio = $product.getElementById("precio")

}
// .pu span

// let total = 0

function calcAll() {
  // Iteration 1.2
  let total = 0
  console.log(total)

  product.forEach(oneproduct => {
    let bla = updateSubtot(oneproduct)
    total += bla

  });

  // console.log(total)
  let totalSpace = document.querySelector("h2 span")
  totalSpace.innerText = total
  console.log(total)
  // console.log(total)


}
// console.log(total)
function deleteRow() {

  $del.forEach(
    (borrar, i) => {

      borrar.onclick = () => {
        document.querySelector('tbody').removeChild(product[i])
        // total = 0
        calcAll()
      }
    }
  );
}

deleteRow()









$calc.onclick = calcAll;