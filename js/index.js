// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
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

// Explaining Basic and Interesting Math Modules
// Trinonometric Functions
    console.log("The value of sin(pi) is ", Math.sin(Math.PI/2))
    console.log("The value of tan(pi) is ", Math.tan(Math.PI/2))
    console.log("The value of cos(pi) is ", Math.cos(Math.PI/2))

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
// Maxima and minima
console.log("Minimum value of 4, 5, 6 is ", Math.min(4,5, 6));
console.log("Maximum value of 4, 5, 6 is ", Math.max(4,5, 6));

// Ceil and Floor
console.log("5.8 rounded up to nearest integer is ", Math.ceil(5.8)) 
console.log("5.8 rounded down to nearest integer is ", Math.floor(5.8))

// Differential Equations(Physics)
import numpy as np
import matplotlib.pyplot as plt
from gekko import GEKKO

m = GEKKO()

# integration time points
m.time = np.linspace(0,10)

# constants
c1 = 0.13
c2 = 0.20
Ac = 2       # m^2
# inflow
qin1 = 0.5   # m^3/hr

# variables
h1 = m.Var(value=0,lb=0,ub=1)
h2 = m.Var(value=0,lb=0,ub=1)
overflow1 = m.Var(value=0,lb=0)
overflow2 = m.Var(value=0,lb=0)

# outflow equations
qin2 = m.Intermediate(c1 * h1**0.5)
qout1 = m.Intermediate(qin2 + overflow1)
qout2 = m.Intermediate(c2 * h2**0.5 + overflow2)

# mass balance equations
m.Equation(Ac*h1.dt()==qin1-qout1)
m.Equation(Ac*h2.dt()==qin2-qout2)

# minimize overflow
m.Obj(overflow1+overflow2)

# set options
m.options.IMODE = 6 # dynamic optimization

# simulate differential equations
m.solve()

# plot results
plt.figure(1)
plt.plot(m.time,h1,'b-')
plt.plot(m.time,h2,'r--')
plt.xlabel('Time (hrs)')
plt.ylabel('Height (m)')
plt.legend(['height 1','height 2'])
plt.show()
