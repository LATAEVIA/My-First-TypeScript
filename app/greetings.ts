class Greeter {
  constructor (public message: string) {}
  greet() {
    return "Hello, " + this.message;
  }
}

var greeters = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
console.log(greeters);
for(var greeter of greeters){
  alert(greeter.greet());
}


//The for...of statement creates a loop iterating over iterable objects (including Array, Map, Set, String, TypedArray, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
//similar to for each
// "take each item in the array and put it into a variable. Then run the operations in the curly brackets once for each item, using the variable we created to represent the current element."

// class Greeter {
//   greeting: string;
//
//   constructor (message: string) {
//     this.greeting = message;
//   }
//
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }
// var greeters = [];
// greeters.push(new Greeter("world"));
// greeters.push(new Greeter("how are you?"));
// greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
// console.log(greeters);
// for(var greeter of greeters){
//   alert(greeter.greet());
// }
