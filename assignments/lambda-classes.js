// CODE here for your Lambda Classes
// function Parent(parentAttribs) {
//   this.age1 = parentAttribs.age || null;
//   this.location2 = parentAttribs.location;
//   this.stuff = parentAttribs.name;
//   this.things4 = parentAttribs.phrase;
//   this.hello = parentAttribs.hello;
//   // this.speak = function() {
//   //   return 'Hi how are you?';
//   // }
//   // console.log('this', this);
// }
// Parent.prototype.speak = function() {
//   return `${this.name} says hello.`;
// }
// const data = {
//   age: 24,
//   location: 'home',
//   name: 'Jake',
//   phrase: 'Hi I\'m Jake!',
//   hello: [
//     {
//       info: 'stuff',
//       more: 'things'
//     },
//     {
//       info: '342342',
//       more: 'thihfghfhngs'
//     },
//     {
//       info: 'sthgffguff',
//       more: 'thifsdfdsfngs'
//     }
//   ]
// }
// const jake = new Parent(data);
// console.log(jake.speak());
// console.log(jake.hello);
// const jane = new Parent({
//   age: 25,
//   location: 'work',
//   name: 'Jane',
//   phrase: 'Hi I\'m Jane!'
// });
// jake.phrase = 'Hello world';
// console.log(jane);






// INHERITANCE => PASSING STUFF DOWN THE LINE TO NEW OBJECTS
// function Child(childAttribs) {
//   Parent.call(this, childAttribs);
//   // this.age = parentAttribs.age;
//   // this.location = parentAttribs.location;
//   // this.name = parentAttribs.name;
//   // this.phrase = parentAttribs.phrase;
//   this.toy = childAttribs.toy;
//   console.log(this);
// }

// Child.prototype = Object.create(Parent.prototype);
// // at this point our Child.prototype looks like:
// // function Child(childAttribs) {
// //   this.age = childAttribs.age;
// //   this.location = childAttribs.location;
// //   this.name = childAttribs.name;
// //   this.phrase = childAttribs.phrase;
// //   // console.log(this);
// // }
// Child.prototype.play = function() {
//   return `${this.name} plays with her ${this.toy}.`
// }

// const susie = new Child({
//   // we can take stuff out of here if we don't want to use it, but we still get it anyway through inheritance
//   // age: 2,
//   location: 'daycare',
//   name: 'Susie',
//   phrase: '*baby noises*',
//   toy: 'rattle'
// });
// console.log(susie);



// CLASSES
class Parent {
    // "use strict" is inside the source code of "class", so this will always bind to Parent Obj
    constructor(parentAttribs) {
      this.age1 = parentAttribs.age || null;
      this.location2 = parentAttribs.location;
      this.stuff = parentAttribs.name;
      this.things4 = parentAttribs.phrase;
    }
    // methods
    speak() {
      return `${this.name} says hello!`;
    }
  }
  const jane = new Parent({
    age: 25,
    location: 'work',
    name: 'Jane',
    phrase: 'Hi I\'m Jane!'
  });
  // console.log(jane);
  
  class Child extends Parent {
    constructor(childAttribs) {
      super(childAttribs);
      this.toy = childAttribs.toy;
    }
    // methods
    play() {
      return `${this.name} plays with her ${this.toy}.`
    }
  }
  
  const susie = new Child({
    age: 2,
    location: 'daycare',
    name: 'Susie',
    phrase: '*baby noises*',
    toy: 'rattle'
  });
  // console.log(susie);
  
  class Grandchild extends Child {
    constructor(grandchildAttribs) {
      super(grandchildAttribs);
      this.food = grandchildAttribs.food;
    }
  }
  
  const danny = new Grandchild({
    age: 1,
    location: 'daycare',
    name: 'danny',
    phrase: '*baby noises*',
    toy: 'toy car',
    food: 'mashed carrots'
  });
  // console.log(danny);
  
  // extends Parent gives us access to the Parent prototype methods
  class Sibling extends Parent {
    constructor(siblingAttribs) {
      // siblingAttribs is just the object we feed in with new Sibling()
      super(siblingAttribs);
      // super gives us access to the inherited key values
      // age = 
      // location =
      // name =
      // phrase =
      this.car = siblingAttribs.car;
    }
  }
  
  const alex = new Sibling({
    age: 1,
    location: 'daycare',
    name: 'danny',
    phrase: '*baby noises*',
    toy: 'toy car',
    car: 'elantra'
  });
  console.log(alex);
  