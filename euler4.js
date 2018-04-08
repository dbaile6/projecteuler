
//  palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// 1. Numbers >= 100 && <= 999
// 2. Find multiples of those numbers
// 3. Find largest palindrome

function palindrome() {
    //Creates variable to be filled
    let max = 0;
    //Loops one number to be multiplied
    for (var i = 100; i < 999; i++) {
        //Loops another number to be multiplied
        for (var k = 100; k < 999; k++) {
            //Multiplies those loops together
            var n = i * k;
            //Transforms number into a string
            var s = '' + n;
            //Checks for palindrome and then checks to see if it is the current largest.
            if (s === s.split("").reverse().join("") && n > max) {
                max = n;
            }
        }
    }
    return max;
}

console.log(palindrome());