class Car {
  static _def = {
    brand: 'citroen',
  };

  constructor(conf = {}) {
    this.config = Object.assign(Car._def, conf);
  }

  print() {
    console.log(this.config.brand);
  }
}

let car1 = new Car({ brand: 'chevrolet' });
let car2 = new Car({ brand: 'ford' });
let car3 = new Car();
car1.print(); // chevrolet
car2.print(); // ford
car3.print(); // citroen
