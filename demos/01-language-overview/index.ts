
// Language Overview Demos


// JavaScript works as you expect it to
// 1) TypeScript files have a `.ts` file extension
// 2) TypeScript files need to be compiled
//   a) In VS Code you can use CMD+Shift+B to invoke a build
// 3) The compiled JavaScript basically remains unchanged
// 4) The TypeScript Language Service is already providing some benefit
//   a) API information (on hover, IntelliSense)

// TypeScript "any" type allows JavaScript dynamic typing to continue to work
// 1) Change parameter to an unexpected type
// 2) Add type information to prevent this bug
// 3) Type information evaporates in the compiled code
// 4) The return type is inferred

// This super simple, arbitrary example demonstrates how the TypeScript compiler 
// and Language Service can help you write higher quality code with less effort

// function add(number1, number2) {
//   return number1 + number2;
// }

// let addResult = add(1, 2);
// console.log(addResult);


// Type Inference
// 1) Type inference keeps you from having to explicitly define all of your types
// 2) Types can be mixed and matched in an array

// let myBooleanVar = false;
// let myNumberVar = 0;
// let myStringVar = '';
// let myAnyVar;
// let myNullAnyVar = null;

// let myNumberArrayVar = [1, 2, 3];
// let myStringArrayVar = ['', '', ''];


// Improved Type Inference
// 1) Prior to v2.1 an `any` type was always an `any` type (i.e. once an `any` always an `any`)
// 2) Starting in v2.1 `any` type inference is improved

// let x;

// x = 5;
// console.log(x);

// x = 'asdf';
// console.log(x);


// Interfaces
// 1) We can define custom types using interfaces
// 2) Interfaces, like the built-in types, evaporate in the compiled code
// 3) Interfaces can be used to describe object literals
//   a) Under or over providing produces an error

// interface MyInterface {
//   number1: number;
//   number2: number;
//   add(number1: number, number2: number): number;
// }

// function myFunction(obj: MyInterface) {
//   return obj.add(obj.number1, obj.number2);
// }

// let result = myFunction({
//   number1: 1,
//   number2: 2,
//   add: (number1, number2) => {
//     return number1 + number2;
//   }
// })

// console.log(result);


// Classes
// 1) TypeScript extends classes in some interesting ways
// 2) Private members
// 3) Readonly members
// 4) The compiled code is clean idiomatic JavaScript
// 5) Private and readonly members are only enforced at design and compile time, not at runtime!

// class MyClass {
//   number1: number;
//   readonly number2: number;

//   constructor(number1: number, number2: number) {
//     this.number1 = number1;
//     this.number2 = number2;
//   }

//   add() {
//     return this.number1 + this.number2;
//   }

//   private hidden() {
//   }
// }

// let myClass = new MyClass(1, 2);

// console.log(myClass.number1);
// console.log(myClass.number2);
// console.log(myClass.add());

// myClass.hidden(); // error - hidden method isn't accessible
// myClass.number2 = 2; // error - can't set a readonly property
