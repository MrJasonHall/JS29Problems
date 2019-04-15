//First Reverse String

function firstReverse(str) {

    var newString = str.split('').reverse('').join('')
    return newString;
}

console.log(firstReverse('Hello World'));
console.log(firstReverse('Greetings from Earth'));
console.log(firstReverse('Good Day'));


//First Factorial - recursive

function factorialize(num) {
    var fact;

    if (num < 0) {
        fact = -1;
        return fact;
    }
    else if (num == 0) {
        fact = 1;
        return fact;
    }
    else {        
        
        fact = (num * factorialize(num - 1));
        return fact;    
    }    
  }


console.log(factorialize(-5));
console.log(factorialize(0));
console.log(factorialize(10));



