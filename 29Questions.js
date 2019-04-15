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

//Longest word in a sentence

function longestWord(sen) {
    //remove all non letters and split after spaces
    var long = sen.replace(/[^a-zA-Z ]/g,"").split(" ");
    //Use reduce to find the longest word
    var longest = long.reduce((a, b) => a.length > b.length ? a : b, '');
    return longest;

}

console.log(longestWord('Hello everyone have a happy day!'));
console.log(longestWord('The quick brown fox jumped over the lazy dog'));
console.log(longestWord('What is the average airspeed velocity of an unladen swallow'));
