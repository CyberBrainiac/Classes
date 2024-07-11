'use strict'

class Pan {
  constructor (name, color, price) {
    this.name = name,
    this.color = color,
    this.price = price;
  }

  showPrice() {
    return `Price of ${this.name} is ${this.price}`;
  }
}

const pan1 = new Pan('Marker', 'blue', '$3');
console.log(pan1);