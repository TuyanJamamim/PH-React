import { mult } from "../math";//math.js is inside src folder and tax.js is also inside src so mult(math.js component) can ve used here inside tax.js

const calculateTax = mult(2000, 0.1);
console.log(calculateTax);