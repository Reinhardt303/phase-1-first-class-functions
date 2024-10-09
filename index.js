function receivesAFunction(callback) {
    callback();
}



function returnsAnAnonymousFunction() {
    return function () {console.log('hi');}
}



function returnsANamedFunction() {
    return function greet() {
      console.log("Hi" + "!");
    };
  }