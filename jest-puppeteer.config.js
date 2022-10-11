module.exports = {
  server: {
    command: 'serve . -l 4444',
    port: 4444
  }
};

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

// function calculateAll() {
//   // code in the following two lines is added just for testing purposes.
//   // it runs when only iteration 1 is completed. at later point, it can be removed.
//   const singleProduct = document.querySelector('.product');
//   updateSubtotal(singleProduct);
//   // end of test

//   // ITERATION 2
//   //...
//   // ITERATION 3
//   //...
// }

//skyp interaction 0;
// INTER 1:

