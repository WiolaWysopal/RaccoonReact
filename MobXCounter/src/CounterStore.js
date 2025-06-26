import { observable, action, makeObservable } from "mobx";

class CounterStore {
  counter = 0;

  constructor() {
    makeObservable(this, {
      counter: observable,

      increment: action,
      decrement: action,
      multiplyby10: action,
      divideby10: action,
    });
  }

  increment() {
    this.counter++;
    console.log(" + = ", this.counter);
  }
  decrement() {
    this.counter--;
    console.log(" - = ", this.counter);
  }
  multiplyby10() {
    this.counter = this.counter * 10;
    console.log("  x 10 = ", this.counter);
  }
  divideby10() {
    this.counter = this.counter / 10;
    console.log(" : 10 = ", this.counter);
  }
  reset() {
    this.counter = 0;
    console.log(" Reset to ", this.counter);
  }
}

const counterStore = new CounterStore();

export default counterStore;
