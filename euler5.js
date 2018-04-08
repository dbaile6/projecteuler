// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


function smallestPositiveNumber () {
    //Creates settings for variables. Div = max, 
    let div = 20,
        count = 1,
        match = false;
        //Creates the conditions into which a failstate incurs.
    while (match == false) {
        for (num = 1; num <= div; num++) {
            if (count % num !== 0) {
                break;
            }
            //Finds the smallest number divisible by numbers from 1 to 20.
            if (num === div) {
                match = true;
                document.write(count);
            }
        }
        count++;
    }};

    smallestPositiveNumber();