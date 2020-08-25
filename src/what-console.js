// 'use strict';

var a = function () {
  console.log(this);
};

a(); // => window

(function () {
  function foo() {
    console.log(this);
  }

  foo(); // => window
})();

var foo = {};

foo.a = a;

foo.a(); // => foo

var bar = {};

bar.a = foo.a;

bar.a(); // => bar

var b = foo.a;

b(); // window

var c = () => console.log(this);

foo.c = c;

foo.c(); // window

function Animal(type) {
  this.type = type;
  console.log(this);
}

Animal.prototype.bark = function () {
  console.log('woof woof');
};

var dog = new Animal('dog'); // instance object
