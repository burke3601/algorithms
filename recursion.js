// recursion is like a loop but you use a function that calls itself.

//add all numbers in an array using recursion

//the sum of an array is
//the first number plus
//the sum of the rest of the array

const numbers = [1,2,3,4,5];

//when you write a recursive function
//1. specify the base case (tells the function when to end)
//2. call the same function but wth a smaller data set

function sum (arr) {
    //
    // 1 check if there are any elements
    //if not return 0
    if (arr.length === 0) {
        return 0;
    } else {

        // otherwise take the first element
        // and add it to the sum ([the rest of the array])
        const rest = arr.slice(1);
        return arr[0] +sum(rest);
    }
        
}

const result = sum(numbers);
console.log(result)