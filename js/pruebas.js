document.querySelectorAll('.btn btn-remove').forEach((eachButton) => {
  eachButton.onclick = function (target) {
    target.currentTarget.style.display = 'none';
  };
});

// intento con forEach

document.querySelectorAll('.product').forEach((target) => {
  target.onclick = function () {
    this.style.display = 'none';
    console.log('product');
  };
});

// const priceProduct1 = severalProduct[0].querySelector('.price span');
// console.log(priceProduct1);
// const priceProductValue1 = priceProduct1.innerHTML;
// console.log(priceProductValue1);

// const priceProduct2 = severalProduct[1].querySelector('.price span');
// console.log(priceProduct2);
// const priceProductValue2 = priceProduct2.innerHTML;
// console.log(priceProductValue2);

// const cantityProduct1 = severalProduct[0].querySelector(
//   '.quantity input[placeholder="Quantity"]'
// );
// console.log(cantityProduct1);
// const cantityProductValue1 = cantityProduct1.value;
// console.log(cantityProductValue1);

// const cantityProduct2 = severalProduct[1].querySelector(
//   '.quantity input[placeholder="Quantity"]'
// );
// console.log(cantityProduct2);
// const cantityProductValue2 = cantityProduct2.value;
// console.log(cantityProductValue2);

// const actualValue1 = priceProductValue1 * cantityProductValue1;
// console.log(actualValue1);

// const subTotal1 = severalProduct[0].querySelector('.subtotal span');
// console.log(subTotal1);
// subTotal1.innerHTML = actualValue1;

// const actualValue2 = priceProductValue2 * cantityProductValue2;
// console.log(actualValue2);

// const subTotal2 = severalProduct[1].querySelector('.subtotal span');
// console.log(subTotal2);
// subTotal2.innerHTML = actualValue2;
