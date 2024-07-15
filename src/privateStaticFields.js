class C {
  publicNumber = 42;
  name = 'instance';

  constructor(type = 'class instance') {
    this.type = type;
  }

  #x = true;
  static #y = false;

  getX() {
    return this.#x;
  }

  static getObjX(obj) {
    return obj.#x;
  }

  static #getY() {
    return this.#y;
  }

  static getY() {
    return this.#getY();
  }

  getPublicNumber() {
    return this.publicNumber;
  }
}

class Z extends C {
  #x = 'x';
  #z = 'zet';
  #y = 'y';

  constructor() {
    super();
    this.test = 'test';
  }

  getZ() {
    return this.#z;
  }

  getX() {
    return this.#x;
  }
}

const c = new C();
const z = new Z();

// console.dir(C);
// console.log(z);

console.log(z.getPublicNumber());
