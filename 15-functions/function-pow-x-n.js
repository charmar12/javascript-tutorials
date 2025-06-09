// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

function calcPower(x,n){
    let result = x;

    for (let i = 1; i < n; i++){
        result *= x;
    }
    
    return result;
}

let x = +prompt('x?');
let n = +prompt('n?');

if (n < 1){
    alert('Please use a positive integer')
} else {
alert(calcPower(x,n));
}