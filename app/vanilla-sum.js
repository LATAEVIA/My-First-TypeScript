//There is intentionally a bug in this code. We will see how this bug manifests in regular JavaScript first, then we'll see how TypeScript can help us catch errors like this.
var number = prompt('please enter a number.');
var otherNumber = prompt('enter another number.');
var sum = number + otherNumber;
alert("The sum of your two numbers is: " + sum);
