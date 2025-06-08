// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.

let userNum = prompt('Enter a number to show all prime numbers less than or equal to it.');

for(let a = 2; a < userNum; a++){ //Loop through all numbers from 2 to userNum-1
    for (let b = 2; b < a; b++){ //Check for primes.
        if (a % b == 0){ //If not prime, exit the inner loop.
            break;
        }
        else if(b == a-1){ //If the number is prime, print it.
            alert(a);
        }
    }   
}