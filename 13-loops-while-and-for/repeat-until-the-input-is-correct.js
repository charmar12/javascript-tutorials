// Write a loop which prompts for a number greater than 100. If the visitor 
// enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number 
// greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to 
// implement a special handling for a non-numeric input in this task.

let number;

do {
    number = prompt('Please enter a number greater than 100.', 0);
} while(number <= 100 && number); //Repeats the loop if "number" is a number and
// is less than or equal to 100