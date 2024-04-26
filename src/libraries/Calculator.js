class Calculator {
  constructor() {
    this.id = Math.floor(Math.random() * 1_000_000);;
  }
  #log = (callerID, value) => {
    console.log(`[Calculator :${this.id}]: ${callerID} ${value}`);
  };
  add(num1, num2) {
    const value = num1 + num2;
    this.#log('add',value);
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2
    this.#log('subtract',value)
    return value
  }

  divide(num1, num2) {
    const value = num1 / num2
    this.#log('divide',value)
    return value
  }

  multiply(num1, num2) {
    const value = num1 * num2
    this.#log('multiply',value)
    return value
  }
}
module.exports = Calculator;
