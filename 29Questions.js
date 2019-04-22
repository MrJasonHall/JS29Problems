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
    //remove all non letters and split after spaces & use reduce to find the longest word
    var long = sen.replace(/[^a-zA-Z ]/g,"").split(" ").reduce((a, b) => a.length > b.length ? a : b, '');
    return long;

}

console.log(longestWord('Hello everyone have a happy day!'));
console.log(longestWord('The quick brown fox jumped over the lazy dog'));
console.log(longestWord('What is the average airspeed velocity of an unladen swallow'));


//Letter Changes
function letterChanges(str) {
   
    var converted = str.replace(/[a-z]/gi, function(char) { 
        return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
      });

      var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) { 
        return vowel.toUpperCase();
      });
    
      // return the final string
      return capitalized;
          
   };
console.log(letterChanges('Hello everyone have a happy day!'));


function simpleAdding(num) {
    var total = 0;
    for (var i=1; i <= num; i++){
        total += i;
        
    }return total;
    
};
  
console.log(simpleAdding(10));

function letterCaps(str){

    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(letterCaps('it\'s a wonderful life'));

function SimpleSymbols(str){
    // look for substring +[a-z]+
    var test = str.match(/\+[a-z]\+/gi);
    
    // test is substring exists
    if (test === null){
        return false ;
    } else return true;
    //return res;

    // for string to be true each letter must be +a+


    //return rue or false
}

console.log(SimpleSymbols('a===+b===c'));
console.log(SimpleSymbols('+B+===c+=+d+'));
console.log(SimpleSymbols('===+b++===+'));


function CheckNums(num1, num2) {
    if (num1 === num2) {
        return -1;
    } else if (num1 > num2){
        return false;
    } else return true;
}

console.log(CheckNums(25,25));

function TimeConvert(num){
    var hour = Math.floor(num/60);
    var minute = num % 60;

    return hour + ':' + minute;
}

console.log(TimeConvert(2495));

function AlphabetSoup(str){

    var newstr = str.toLowerCase().match(/[a-z]/gi).sort().join('');


    return newstr;

}
console.log(AlphabetSoup('Hello everyone have a happy day!'));

function ABCheck(str) {
    var newstr = str.match(/a...b/gi);
    return newstr === null ? false : true;
}
console.log(ABCheck('lane borrowed'));

function VowelCount(str){
    var newstr = str.match(/[aeiou]/gi);
    return newstr.length;
}
console.log(VowelCount('All cows eat grass'));

function WordCount(str){
    newstr = str.split(' ')
    return newstr.length;
}
console.log(WordCount('All cows eat grass'));

function ExOh(str){
    var x = str.match(/x/gi);
    var o = str.match(/o/gi);

    return x.length === o.length ? true : false;

}
console.log(ExOh('xooxxxxoooxo'));

function Palindrome(str) {
    var newStr = str.toLowerCase().split('').reverse('').join('');

    return newStr === str ? true : false;


}
console.log(Palindrome('racecar'));

function ArithGeo(arr){
    var arith = [];
    var geo = [];
    //Geomtric
    for (i = 0; i <arr.length-1; i++){
        arith[i] = arr[i+1]-arr[i];
        geo[i] = arr[i+1]/arr[i];

    } 
    var isArith = arith.reduce(function(a, b){ return (a === b) ? a : NaN; });

    var isGeo = geo.reduce(function(a, b){ return (a === b) ? a : NaN; });
 
    if ( isNaN(isArith) === true && isNaN(isGeo) === true) {
        return -1
    } else if (isNaN(isArith) === false && isNaN(isGeo) === true){
        return 'Arithmetic';
    } else if (isNaN(isArith) === true && isNaN(isGeo) === false){
        return 'Geometric';
    } 
}
console.log(ArithGeo([2, 4, 6, 8] ));
console.log(ArithGeo([2, 6, 18, 54]));


function ArrayAdditionI(arr) {

    //var results = [];

    arr = arr.sort(function(a, b){ return a-b});
    var biggest = arr.pop();
    //var tot = arr.reduce(function(a, b){ return a + b});
   

    var ps = [[]];
    for (var i=0; i < arr.length; i++) {
        for (var j = 0, len = ps.length; j < len; j++) {
            ps.push(ps[j].concat(arr[i]));
        }
    }
    return ps;
}

function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++)
        total += arr[i];
    return total
}

function findSum(numbers, targetSum) {
    var numberSets = powerset(numbers);
    for (var i=0; i < numberSets.length; i++) {
        var numberSet = numberSets[i]; 
        if (sum(numberSet) == targetSum)
            return numberSet;
    }

    //function findSums(numbers, targetSum) {
    var sumSets = [];
    var numberSets = powerset(arr);
    for (var i=0; i < numberSets.length; i++) {
        var numberSet = numberSets[i]; 
        if (sum(numberSet) == biggest)
            sumSets.push(numberSet);
    }
    return sumSets;
}



console.log(ArrayAdditionI( [4, 6, 23, 10, 1, 3]));