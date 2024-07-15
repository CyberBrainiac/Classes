class Stamper extends class {
  // A base class whose constructor returns the object it's given
  constructor(obj) {
    return obj;
  }
} {
  // This declaration will "stamp" the private field onto the object
  // returned by the base class constructor

  #stamp = 42;
  static getStamp(obj) {
    return obj.#stamp;
  }
}

const obj = {};
new Stamper(obj);
// `Stamper` calls `Base`, which returns `obj`, so `obj` is
// now the `this` value. `Stamper` then defines `#stamp` on `obj`

// console.log(obj); // In some dev tools, it shows {#stamp: 42}
// console.log(Stamper.getStamp(obj)); // 42
// console.log(obj instanceof Stamper); // false

// You cannot stamp private properties twice
// new Stamper(obj); // Error: Initializing an object twice is an error with private fields

const globalVar = new Map(); //не забудь очистити усі глобальні змінні саме в момент рендерингу сайту

class Ninja extends class {
  constructor(obj) {
    window.Ninja = Ninja; //Особливо важливо, щоб цей незрозумілий класс був глобальним! Як і усі інші класи
    globalVar.set('Ninja', Ninja);
    obj.name = 'Bob';
    obj.message = 'Why you reading this?';
    return null;
  }
} {
  illuminant = 'Arseniy';
  #stamp = 42;

  static getStamp(obj) {
    //передай екземпляк класса Ninja
    return obj.#stamp;
  }

  getIlluminant() {
    return this.illuminant;
  }
}

console.log(new Ninja({ someField: 'i dont know, what' }));
