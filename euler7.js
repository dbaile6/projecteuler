// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

// 1. Create function to find primes
// 2. Find the 10,001 to loop

const probLem7 = () => {
    // Initializing conditions
    let primes = [2];
    let i = 3;
    let j = 2;
    let maxPrimes = 10001;
    // Creating a while condition for less than 10001 to loop through.
    while ( primes.length < maxPrimes ) {
        //First step of creating primes;
        while ( i % j !== 0 ) {
            j++;
            // Confirming it is prime.
            if ( j === i ) {
                primes.push( i );
                break;
            }
        }
        // Incrementing foward
        i++;
        j = 2;
    }
};

probLem7();