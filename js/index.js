// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    function updateSubtotal(product) {
        const price = product.querySelector('.price span').innerHTML //extrae valor del precio contenido en html
        const quantity = product.querySelector('.quantity input').value //extrae la cantidad de producto
        const subtotal = price * quantity //calcula el precio * cantidad
        const totalprice = product.querySelector('.subtotal span') //extrae elemento de la class subtotal
        return subtotal // regresa el valor del subtotal para usarlo despues
    }
}
//... your code goes here


function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);
    // end of test

    // ITERATION 2
    const sumar = 0; //declaro una variable que pueda ser leida en for
    //declaro una variable nueva (productos) que sumara los elementos de la iteracion
    //se usa el metodo getelebyclassname para que acceda a cada elemento de index.html
    const productos = document.getElementsByClassName('product');
    for (const i = 0; i < productos.length; i++) {
        sumar += updateSubtotal(productos[i]) //for deberia acumular los subtotales y lo suma
    }

    //... your code goes here

    // ITERATION 3
    //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
}

// ITERATION 5

function createProduct() {
    //... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
});