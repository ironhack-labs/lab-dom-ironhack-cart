// ITERATION 1

function updateSubtotal(product) {

  let price = Number(product.querySelector(".price span").innerHTML);
  let quantity = Number(product.querySelector(".quantity input").value);
  // Calcul du prix sous-total
  let subTotal = price*quantity;
  // Target le champ du subtotal et le remplace
  product.querySelector(".subtotal span").innerText = subTotal;
  return subTotal;
}

function calculateAll() {
  // ITERATION 2
  let product = document.getElementsByClassName("product");
  for (let i = 0; i<product.length; i++) {
    updateSubtotal(product[i]);
  }

  // ITERATION 3
  // Target le champ du total et le mettre en Number() pour additionner:
  
  // Prend chaque sous-total pour les additionner :
  let total=0;
  for (i=0; i<product.length; i++) {
    total += updateSubtotal(product[i]);
    // console.log(total) // Vérifier mon résultat
  }
  document.querySelector("#total-value span").textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;  // Le bouton sur lequel on a créé l'événement : <button class="btn btn-remove">Remove</button>
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll(event.currentTarget.parentNode.parentNode);
}

// ITERATION 5

function createProduct() {
  const nameInput = document.getElementById("new-product-name");
  let name = nameInput.value;
  const priceInput = document.getElementById("new-product-price")
  let price = priceInput.value;
 
  document.querySelector("tbody").innerHTML += `<tr class="product">
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`
// Après avoir créé la nouvelle <tr> comprenant l'objet et le prix entrés, on reset ces valeurs dans la <tr> create product
  nameInput.value = "";
  priceInput.value = 0;

// Je réactive les "Remove bnt" en recopiant la partie sur remove écrite dans window.addEventListener('load', () => {...}:
  const removeButton = document.querySelectorAll(".btn-remove");

  removeButton.forEach(function (element) {
    element.addEventListener("click", removeProduct); // removeProduct défini Itération 4
  });
  
// Remet tout à 0 car il recalcule le total, or les Quantités sont buggées à 0 lors de la création d'un <tr>, donc prix * quantité = 0
// calculateAll();

}
// On réimplémente une fonction Remove ci-dessus, car en mettant cette ligne sous la fonction, le remove ne fonctionnait plus



window.addEventListener('load', () => {
  
  const removeButton = document.querySelectorAll(".btn-remove");

  removeButton.forEach(function (element) {
    element.addEventListener("click", removeProduct); // removeProduct défini Itération 4
  });

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  // Lié à la fonction createProduct() ci-dessus, qui crée un <tr> entier avec le nom et le prix entrés manuellement
  document.getElementById("create").addEventListener("click", createProduct);
});
