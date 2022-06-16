// const doSomethingAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("I did something"), 3000);
//     // resolve('I did something again');
//   });
// };

// const doSomething = async () => {
//   console.log(await doSomethingAsync());
// };

// console.log("Before");
// doSomething();
// console.log("After");

// try {
//   // eval("hoo bar");
//   throw new SyntaxError("Hello", "someFile.js", 10);
// } catch (e) {
//   console.error(e instanceof SyntaxError); // true
//   console.error(e.message); // Hello
//   console.error(e.name); // SyntaxError
//   console.error(e.fileName); // someFile.js
//   console.error(e.lineNumber); // 10
//   console.error(e.columnNumber); // 0
//   console.error(e.stack); // @debugger eval code:3:9
// }
class masterCalculation {
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  }

  plus(a, b) {
    return a + b;
  }

  get mult() {
    return this.multCalc();
  }

  multCalc() {
    return this.value1 * this.value2;
  }
}


class calculation extends masterCalculation {
  constructor(value1, value2) {
    super();
    this.value1 = value1;
    this.value2 = value2;
  }

  get calc () {
    
  }
  sum(a, b) {
    return a + b;
  }

  sub(a, b) {
    return a - b;
  }

  mod (a, b) {
    return a % b;
  }
}



let calc = new calculation;

let calcM = new masterCalculation;

console.log(calc.plus(5,9));
console.log(calcM.plus(5, 8));



