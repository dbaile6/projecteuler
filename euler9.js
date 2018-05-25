// Sum of all primes below 2 million

function primeCreate(inp) {
if (inp == 1) {
    return false;
}
if(param == 2) {
    return true;
}
if(param % 2 === 0){
    return false;
}
let ceiling = Math.ceil(math.sqrt(param));
for (let i = 3; i <= ceil; i += 2) {
    if inp % i == 0) {
        return false;
    }
}
return true;
}

// Check if primes work

console.log(primeCreate(98));
console.log(primeCreate(1));

//Prime counting

function getPrimes(inp) {
    let arr = [];
    for (let j = 2; j <= inp; j++){
        if(primeCreate(j)){
            array.push(j);
        }
    }
}

function getArray(inp) {
    let arraySum = array.reduce(function add(a, b){
        return a + b;
    }, 0);
    let finish = function() {
        return arraySum;
    }
    return finish;
}

let finish = function(inp) {
    return getPrimes(inp)''
}

console.log(finish(10));
console.log(finish(200000));